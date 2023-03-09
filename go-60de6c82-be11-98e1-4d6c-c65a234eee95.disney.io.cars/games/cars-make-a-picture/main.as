/**
 * wrapper/main.as
 *
 * Copyright (C) Disney Online - Kerpoof Studios
 */

package kerpoof.wrapper
{
	import flash.display.DisplayObject;
	import flash.display.Loader;
	import flash.display.Sprite;
	import flash.events.Event;
	import flash.net.URLLoader;
	import flash.net.URLRequest;
  import flash.display.Loader;
  import flash.display.LoaderInfo;
  import flash.external.ExternalInterface;
  import flash.net.URLRequest;
  import flash.system.ApplicationDomain;
  import flash.system.LoaderContext;

  import kerpoof.global.puts;
  import kerpoof.global.util;
	
  /**
   * Top level for the stand-alone dcom panel wrapper.
   */
	public class main extends Sprite
	{
		/** Name of the package the class is in */
		public static var CLASS_PACKAGE:String = "kerpoof.wrapper";
		
		/** Name of the class */
		public static var CLASS_NAME:String = "main";
		
		/** Name of the package the class is in */
		private var __classPackage:String = CLASS_PACKAGE;
		
		/** Name of the class */
		private var __className:String = CLASS_NAME;
	
    private var _params:Object; 

    private var _runtime_class:Class; 
    private var _runtime_ui:DisplayObject;
    private var _runtime_code:Object;

    public function main() 
    {
      stage.scaleMode = 'noScale';
      stage.align = 'topLeft';

      _params = util.deep_copy(LoaderInfo(this.root.loaderInfo).parameters);
      IF::DEBUG {
         puts('--- params ---');
         for (var a:String in _params) {puts(' ' + a + ': ' + _params[a]);}
      }
      
      IF::AIR {
        _params.config = CONFIG::WRAPPER_CONFIG;
      }

      if (_params.config)
        load_config(_params.config);

      IF::BROWSER {
        ExternalInterface.addCallback("load_config", load_config);
      }
    }

    private function load_config(url:String):void {
      if (!url) {
        puts('url of config must be specified');
        return;
      }
      puts('loading config from ' + url); 
      var  config_loader:URLLoader = new URLLoader();
      config_loader.addEventListener(Event.COMPLETE, process_config);
      config_loader.load(new URLRequest(url));
    }
    
    private function process_config(e:Event):void {
      puts(e.target.data);
      var X:XMLList = (new XML(e.target.data)).children();
      for each  (var  x:XML  in X)  {
        var key1:String = x.name();
        var key2:String = util.de_camel_case(x.name());
        var value:String = x.text();
        puts('  ' + key2 + ' --> "' + value + '"');
        _params[key1] = value;
        _params[key2] = value;
      } 
      
      puts('loading UI swf: ' + _params.ui_swf_url);
      puts('loading code swf: ' + _params.code_swf_url);
      puts('loading gadget class: ' + _params.gadget_class);

      var ui_loader:Loader;
      var code_loader:Loader;
      var context:LoaderContext = new LoaderContext();
      context.applicationDomain = ApplicationDomain.currentDomain;

      var ref_count:Number = 2;
      var load_complete:Function = function():void {
        puts('loaded swf');
        ref_count--;

        if (ref_count == 0) {
          puts('Loaded all content');
          //cleanup listners:
          ui_loader.removeEventListener(Event.COMPLETE, load_complete);
          code_loader.removeEventListener(Event.COMPLETE, load_complete);

          //cleanup old gadget (if any):
          if (_runtime_ui) {
            puts('Cleaning up old UI.');
            try {
              _runtime_ui.parent.removeChild(_runtime_ui);
            }
            catch (e:Error) {
              puts('Error upon removing _runtime_ui from stage.');
            }
            _runtime_ui = null;
          }
          if (_runtime_code) {
            puts('Cleaning up old gadget code.');
            try {
              _runtime_code.destroy();
            }
            catch (e:Error) {
              puts('Error upon calling _runtime_code.destroy().');
            }
            try {
              _runtime_code.parent.removeChild(_runtime_code as DisplayObject);
            }
            catch (e:Error) {
              puts('Error upon removing _runtime_code from stage.');
            }
            _runtime_code = null;
          }
          
          puts('Adding UI to the stage');
          _runtime_ui = (ui_loader.content as DisplayObject);
          stage.addChild(_runtime_ui);
          if (_params.scale) {
            puts('Scaling UI by ' + _params.scale);
            _runtime_ui.scaleX = _params.scale;
            _runtime_ui.scaleY = _params.scale;
          }
          puts('Getting class: ' + _params.gadget_class);
          try {
            _runtime_class = ApplicationDomain.currentDomain.
              getDefinition(_params.gadget_class) as Class;
          }
          catch (e:Error) {
            var msg:String = 'Error in configuration xml. ' +
              'The specified code swf, "' + _params.code_swf_url +
              '", does not contain the specified gadget class, "' +
              _params.gadget_class + '".';
            puts(msg);
            throw Error(msg);
          }
          _runtime_code = new _runtime_class();
          var handle_stage_add:Function = function():void 
            {
              puts('Starting the gadget ' + _params.gadget_class + '.run()');
              _runtime_code.run(_params,(_runtime_ui as Object).states);
              _runtime_code.removeEventListener(Event.ADDED_TO_STAGE,
                                                handle_stage_add);
            }
          puts('Adding the gadget code sprite');
          _runtime_code.addEventListener(Event.ADDED_TO_STAGE, 
                                         handle_stage_add);
          stage.addChild(_runtime_code as DisplayObject);
        }
      }
      
      ui_loader = new Loader();
      ui_loader.contentLoaderInfo.addEventListener(Event.COMPLETE, 
                                                   load_complete);
      ui_loader.load(new URLRequest(_params.ui_swf_url));

      code_loader = new Loader();
      code_loader.contentLoaderInfo.addEventListener(Event.COMPLETE, 
                                                     load_complete);
      code_loader.load(new URLRequest(_params.code_swf_url),context);
    }
    
  } // end class scope
} // end package scope
