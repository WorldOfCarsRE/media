(function(window, $, undefined) {
	/* vars ------------------------------------------------- */
	var	document = window.document,
		cfg = {
			queryString : {},
			colorbox : $.colorbox,
			launchGame : WOC.launchGame,
			disneyLoginPage : PATH.siteRoot +'/play/login.html',
			psnLogin : CFG.psn +'/index.vm?returnURL='+ escape(CFG.apiProxy +'SynergyPlaystationLogin'),
			xblLogin : CFG.wlid +'/signin.aspx?redirect='+ CFG.apiProxy +'SynergyXblLogin',
			unlinkNetwork : CFG.apiProxy +'SynergyUnlinkNetwork',
			getNetworkTags : CFG.apiProxy +'SynergyGetNetworkTags',
			getCars2EventStatus : CFG.apiProxy +'SynergyGetCars2SavedEvents',
			whoAmI : CFG.apiProxy +'WhoAmIRequest',
			classes : {
				rewardComplete : 'rwd-complete',
				rewardNavSelected : 'rwd-subnav-selected'
			},
			selectors : {
				disneyLoginLink : '.lnk-login',
				psnLoginLink : '#psn-loginLink',
				wiiLoginLink : '#wii-loginLink',
				xblLoginLink : '#xbl-loginLink',
				dsUserTag : '#lnk-dsUserTag',
				psnUserTag : '#lnk-psnUserTag',
				wiiUserTag : '#lnk-wiiUserTag',
				xblUserTag : '#lnk-xblUserTag',
				dsHelpLink : '.lnk-dsHelp',
				psnHelpLink : '.lnk-psnHelp',
				wiiHelpLink : '.lnk-wiiHelp',
				xblHelpLink : '.lnk-xblHelp',
				dsUnlink : '#ds-unlink',
				psnUnlink : '#psn-unlink',
				wiiUnlink : '#wii-unlink',
				xblUnlink : '#xbl-unlink',
				linkAccountButton : '.lnk-linkButton',
				unlinkAccountButton : '.lnk-unlinkButton',
				playLink : '.lnk-playLink',
				rewardContainers : '.rwd-checklistContainer',
				dsRewardContainer : '.rwd-dsContainer',
				psnRewardContainer : '.rwd-psnContainer',
				wiiRewardContainer : '.rwd-wiiContainer',
				xblRewardContainer : '.rwd-xblContainer',
				dsRewardNavLink : '#rwd-dsNavLink',
				psnRewardNavLink : '#rwd-psnNavLink',
				wiiRewardNavLink : '#rwd-wiiNavLink',
				xblRewardNavLink : '#rwd-xblNavLink',
				wiiInputContainer : '.cod-wiiInputContainer'
			},
			loginCallback : 'function(){parent.window.location="'+ PATH.siteRoot +'/community/cars-connections/accounts/";}',
			step : 1,
			step1 : PATH.siteRoot +'/community/cars-connections/',
			successHTML : '<div class="sys-modalOverlayContainer">'+
					'<h2><img src="'+ PATH.img +'/pageTitle/ttl-overlay-congratulations.png" alt="Congratulations" /></h2>'+
					'<div class="sys-modalOverlayBody" style="text-align: center;">'+
						'<h3>YOUR ACCOUNT IS NOW LINKED</h3>'+
						'<p style="margin-top: 40px;"><a class="lnk-playLink btn-play-62" style="margin: auto;" href="#">Play Game</a></p>'+
						'<p><a href="javascript:$.colorbox.close();">Link another account</a></p>'+
						'<p><a href="'+ PATH.siteRoot +'/community/cars-connections/rewards/">View my rewards</a></p>'+
						'<img class="chr-materLightning-small" src="'+ PATH.img +'/characters/chr-mater-lightning-small.png" />'+
					'</div>'+
				'</div>',
			unlinkedHTML : '<div class="sys-modalOverlayContainer">'+
					'<h2><img src="'+ PATH.img +'/pageTitle/ttl-overlay-account-unlinked.png" alt="Account Unlinked" /></h2>'+
					'<div class="sys-modalOverlayBody">'+
						'<h3>Title</h3>'+
						'<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata san</p>'+
						'<p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  sed diam nonumy eirmod tempor invidunt ut labore et</p>'+
						'<img class="chr-red-small" src="'+ PATH.img +'/characters/chr-red-small.png" />'+
					'</div>'+
				'</div>',
			wiiLoginHTML : '<div class="sys-modalOverlayContainer">'+
					'<h2><img src="'+ PATH.img +'/pageTitle/ttl-overlay-link-my-account.png" alt="Link My Account" /></h2>'+
					'<div class="sys-modalOverlayBody">'+
						'<div class="lnk-logo lnk-logo-wii" style="position: absolute; left: 370px; top: 20px;"></div>'+
						'<h3 style="margin-top: 75px;">ENTER YOUR WII CONSOLE ID</h3>'+
						'<form id="wiiForm" action="'+ CFG.apiProxy +'SynergyWiiLogin">'+
							'<div style="width: 305px; margin: auto; position: relative;">'+
								'<input class="sys-textInput" type="text" name="code" style="width: 289px;"/><div class="sys-textInputCap"></div>'+
								'<div class="sys-formErrorContainer"></div>'+
								'<div class="sys-clear"></div>'+
							'</div>'+
							'<input style="margin: 30px auto; display: block;" class="btn-submit-36" type="submit" value="" />'+
						'</form>'+
					'</div>'+
				'</div>'
		},
		api = $.fn.DIMGAccountLinker = $.DIMGAccountLinker = function (cfgOverride) {
			$.extend(true, cfg, cfgOverride);
		};
	/* ------------------------------------------------------ */

	/* helper functions ------------------------------------- */
	function parseQueryString() {
		var i = 0,
			pair = [],
			pairs = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

		for(i=0; i < pairs.length; i++) {
			pair = pairs[i].split('=');
			cfg.queryString[pair[0]] = pair[1];
		}
	}

	function setLinkStatus(network, userTag) {
		var tagSelectors = {
				'ds' : cfg.selectors.dsUserTag,
				'psn' : cfg.selectors.psnUserTag,
				'wii' : cfg.selectors.wiiUserTag,
				'xbl' : cfg.selectors.xblUserTag
			},
			tag = tagSelectors[network] ? $(tagSelectors[network]) : false,
			container,
			linkButton,
			unlinkButton;

		if(!tag) {
			return false;
		}

		container = tag.parent();
		linkButton = container.find(cfg.selectors.linkAccountButton);
		unlinkButton = container.find(cfg.selectors.unlinkAccountButton);

		if(userTag === false) {
			// not linked
			tag.html('NOT LINKED');
			container.removeClass('lnk-linked').addClass('lnk-notLinked');
			linkButton.html('Link My Account').removeClass('btn-change').addClass('btn-link-my-account');
			unlinkButton.css('display', 'none');
		} else {
			// linked
			tag.html(userTag !== '' ? userTag : 'LINKED');
			container.removeClass('lnk-notLinked').addClass('lnk-linked');
			linkButton.html('Change').removeClass('btn-link-my-account').addClass('btn-change');
			unlinkButton.css('display', 'inline');
		}
		
		linkButton.css('display', 'block');
	}
	/* ------------------------------------------------------ */

	/* api functions ---------------------------------------- */
	api.init = function () {
		switch(cfg.step) {
			case 2:
				api.initStep2();
				break;

			case 3:
				api.initStep3();
				break;

			case 1:
			default:
				api.initStep1();
				break;
		}
	};
	
	api.initStep1 = function () {
		$(cfg.selectors.disneyLoginLink).click(api.loadLoginModule);
	};

	api.initStep2 = function () {
		$(cfg.selectors.wiiLoginLink).colorbox({
			html : cfg.wiiLoginHTML,
			onComplete : function() {
				// update this
				jQuery('#wiiForm').submit(function(e) {
					$(cfg.selectors.wiiInputContainer).html('');
					jQuery.get(jQuery(this).attr('action'), jQuery(this).serializeArray(), function(json) {
						api.onWiiLoginResponse(json);
					}, 'json');
					e.preventDefault();
					e.stopPropagation();
				});

			}
		});
		$(cfg.selectors.xblLoginLink).attr('href', cfg.xblLogin);
		$(cfg.selectors.psnLoginLink).colorbox({
			innerWidth : 500,
			innerHeight : 500,
			iframe : true,
			href : cfg.psnLogin
		});

		$(cfg.selectors.dsHelpLink).colorbox({
			'html' : '<div class="lnk-helpContainer">Lorem ipsum</div>'
		});
		$(cfg.selectors.wiiHelpLink).colorbox({
			'html' : '<div class="lnk-helpContainer">Lorem ipsum</div>'
		});
		$(cfg.selectors.xblHelpLink).colorbox({
			'html' : '<div class="lnk-helpContainer">Lorem ipsum</div>'
		});
		$(cfg.selectors.psnHelpLink).colorbox({
			'html' : '<div class="lnk-helpContainer">Lorem ipsum</div>'
		});

		$(cfg.selectors.psnUnlink).click(function (e) {
			$.getJSON(cfg.unlinkNetwork, {'networkID' : 1}, function (json) {
				api.onNetworkTagsLoaded(json);
				cfg.colorbox({
					'html' : cfg.unlinkedHTML
				});
			} );
			e.preventDefault();
			e.stopPropagation();
		});

		$(cfg.selectors.wiiUnlink).click(function (e) {
			$.getJSON(cfg.unlinkNetwork, {'networkID' : 2}, function (json) {
				api.onNetworkTagsLoaded(json);
				cfg.colorbox({
					'html' : cfg.unlinkedHTML
				});
			} );
			e.preventDefault();
			e.stopPropagation();
		});

		$(cfg.selectors.xblUnlink).click(function (e) {
			$.getJSON(cfg.unlinkNetwork, {'networkID' : 3}, function (json) {
				api.onNetworkTagsLoaded(json);
				cfg.colorbox({
					'html' : cfg.unlinkedHTML
				});
			} );
			e.preventDefault();
			e.stopPropagation();
		});

		$(cfg.selectors.xblUnlink).click(function (e) {
			$.getJSON(cfg.unlinkNetwork, {'networkID' : 4}, function (json) {
				api.onNetworkTagsLoaded(json);
				cfg.colorbox({
					'html' : cfg.unlinkedHTML
				});
			} );
			e.preventDefault();
			e.stopPropagation();
		});

		$(cfg.selectors.playLink).live('click', cfg.launchGame);
		$.getJSON(cfg.getNetworkTags, false, api.onNetworkTagsLoaded);

		parseQueryString();
		if(cfg.queryString.success !== undefined && cfg.queryString.success === 'true') {
			api.onLinkingSuccess();
		}
		if(cfg.queryString.error !== undefined) {
			api.displayMessage(cfg.queryString.error, 'error');
		}
	};

	api.initStep3 = function () {
		parseQueryString();
		api.requireLogin(function () {
			$.getJSON(cfg.getCars2EventStatus, false, api.onRewardLoadResponse);			
		});

		$(cfg.selectors.dsRewardNavLink).click(function (e) {api.displayRewards('ds'); e.preventDefault();});
		$(cfg.selectors.wiiRewardNavLink).click(function (e) {api.displayRewards('wii'); e.preventDefault();});
		$(cfg.selectors.xblRewardNavLink).click(function (e) {api.displayRewards('xbl'); e.preventDefault();});
		$(cfg.selectors.psnRewardNavLink).click(function (e) {api.displayRewards('psn'); e.preventDefault();});
	};

	api.loadLoginModule = function (e) {
		cfg.colorbox({
			innerWidth : 996,
			innerHeight : 687,
			iframe : true,
			href : cfg.disneyLoginPage +'?regCompleteCallback='+ escape(cfg.loginCallback) // add mbox tracking call here?
		});
		return false;
	};

	api.displayMessage = function (msg, type) {
		type = type || 'success';
		alert(type +': '+ msg);
	};

	api.displayRewards = function(platform) {
		var allContainers = cfg.selectors.rewardContainers,
			containerSelectors = {
				'ds' : cfg.selectors.dsRewardContainer,
				'psn' : cfg.selectors.psnRewardContainer,
				'wii' : cfg.selectors.wiiRewardContainer,
				'xbl' : cfg.selectors.xblRewardContainer
			},
			navLinkSelectors = {
				'ds' : cfg.selectors.dsRewardNavLink,
				'psn' : cfg.selectors.psnRewardNavLink,
				'wii' : cfg.selectors.wiiRewardNavLink,
				'xbl' : cfg.selectors.xblRewardNavLink					
			};

		$(navLinkSelectors[platform]).addClass(cfg.classes.rewardNavSelected).siblings().removeClass(cfg.classes.rewardNavSelected);
		$(allContainers +':not('+ containerSelectors[platform] +')').css('display', 'none');
		$(containerSelectors[platform]).css('display', 'block');
	};

	api.requireLogin = function(onLoginConfirmed) {
		$.get(cfg.whoAmI, false, function (xml) {
			if($(xml).find('status').text() === 'logged_in_player') {
				onLoginConfirmed();
			} else {
				window.location = cfg.step1;
			}
		}, 'xml');
	};

	api.onLinkingSuccess = function () {
		$.colorbox({
			html : cfg.successHTML
		});
	};

	api.onNetworkTagsLoaded = function (json) {
		if(json.tags) {
			api.setPsnLinkStatus(json.tags[1] ? json.tags[1] : false);
			api.setWiiLinkStatus(json.tags[2] ? json.tags[2] : false);
			api.setXblLinkStatus(json.tags[3] ? json.tags[3] : false);
			api.setDsLinkStatus(json.tags[4] ? json.tags[4] : false);
		} else {
			window.location = cfg.step1;
			// api.displayMessage(json.msg, 'error');
		}
	};

	api.onRewardLoadResponse = function (json) {
		var i = 0,
			j = 0,
			platforms = {
				19666 : '.psnReward-',
				17742 : '.wiiReward-',
				31466 : '.xblReward-',
				12835 : '.dsReward-',
				29119 : '.wocReward-'
			};

		for(i in platforms) {
			if(!platforms.hasOwnProperty(i)) {
				continue;
			}

			for(j = 0; j < json[i].length - 1; j++) {
				if(json[i].substr(j, 1) == 1) {
					$(platforms[i] + j).addClass(cfg.classes.rewardComplete);
				}				
			}
		}

		api.displayRewards(cfg.queryString.preselect !== undefined ? cfg.queryString.preselect : 'ds');
	};

	api.onPsnLoginResponse = function (status, msg, userTag){
		$(document).bind('cbox_closed', function() {
			if(status === 'success') {
				api.onLinkingSuccess();
			} else {
				api.displayMessage(msg, status);
			}

			$(document).unbind('cbox_closed');
		});
		$.colorbox.close();

		if(userTag) {
			api.setPsnLinkStatus(userTag);
		}
	};

	api.onWiiLoginResponse = function (json) {
		if(json.status !== 'success') {
			$(cfg.selectors.wiiInputContainer).html('<ul><li>'+ json.msg +'</li></ul>');
			return;
		}

		$(document).bind('cbox_closed', function() {
			api.onLinkingSuccess();
			$(document).unbind('cbox_closed');
		});
		$.colorbox.close();

		if(json.userTag) {
			api.setWiiLinkStatus(json.userTag);
		}
	};

	api.onXblLoginResponse = function (status, msg, userTag){
		$(document).bind('cbox_closed', function() {
			if(status === 'success') {
				api.onLinkingSuccess();
			} else {
				api.displayMessage(msg, status);
			}

			$(document).unbind('cbox_closed');
		});
		$.colorbox.close();

		if(userTag) {
			api.setXblLinkStatus(userTag);
		}
	};

	api.setDsLinkStatus = function (userTag) {
		setLinkStatus('ds', userTag);
	};

	api.setPsnLinkStatus = function (userTag) {
		setLinkStatus('psn', userTag);
	};

	api.setWiiLinkStatus = function (userTag) {
		setLinkStatus('wii', userTag);
	};

	api.setXblLinkStatus = function (userTag) {
		setLinkStatus('xbl', userTag);
	};
	/* ------------------------------------------------------ */

	/* initialize on document ready ------------------------- */
	$(api.init);
	/* ------------------------------------------------------ */
})(window, jQuery);