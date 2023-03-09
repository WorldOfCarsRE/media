--imports
Spinout = com.disney.cars.states.racing.singleplayer.gags.Spinout
Boost = com.disney.cars.states.racing.singleplayer.gags.Boost

--effects constants
effects =
{
	CAR_HALO_EFFECT = 1
}


racingState = nil
track = nil

--Set the url of the Map file to load sans '.xml'
--mapUrl = "car_w_trk_rsp_JonsTestTrack"
mapUrl = "car_w_trk_rsp_every_tile2"

--Set the url of the Physics file to load
--physicsUrl = "car_w_trk_cmp_JonsRacingLine.xml"
physicsUrl = "car_w_trk_rsp_every_tile2_physics.xml"

spinoutHotspot = nil

boostHotspot = nil

function createRace1()
	racingState:createAi(47, {{1000, 1, 0.5},  {700, 0.95, 0.4},   {600, 0.9, 0.3},  {500, 0.85, 0.2},  {400, 0.91, 0.1},     {300, 0.8, 0.05},       {0, 0.8, 0}             }      )
	racingState:createAi(47, {{900, 1, 0.5},   {600, 0.95, 0.4},   {500, 0.9, 0.3},   {400, 0.85, 0.2},  {300, 0.91, 0.1},      {200, 1, 0.05}   ,     {0, 0.8, 0}              }      )
	racingState:createAi(47, {{800, 1, 0.5},   {500, 0.95, 0.4},   {400, 0.9, 0.3},   {300, 0.85, 0.2},  {200, 0.91, 0.1},      {100, 1, 0.05}   ,     {0, 0.8, 0}               }    )
	racingState:createAi(47, {{700, 1, 0.5},   {400, 0.95, 0.4},   {300, 0.9, 0.3},   {200, 0.85, 0.2},  {100, 0.91, 0.1},       {0, 0.8, 0.05}   ,     {0, 0.8, 0}              }     )
	racingState:createAi(45, {{600, 1, 0.5},   {300, 0.95, 0.4}, {200, 0.9, 0.3},   {100, 0.85, 0.2},  {0, 0.91, 0.1},            {-100, 0.82, 0.05} , {0, 0.8, 0}              }    )
	racingState:createAi(45, {{500, 1, 0.5},   {200, 0.95, 0.4},   {100, 0.9, 0.3},   {0, 0.85, 0.2},      {-100, 0.91, 0.1},     {-200, 1.08, 0.05} , {0, 0.8, 0}              }    )
	racingState:createAi(45, {{400, 1, 0.5},   {100, 0.95, 0.4},   {0, 0.9, 0.3},      {-100, 0.85, 0.2}, {-200, 0.92, 0.1},     {-300, 0.87, 0.05} , {0, 0.8, 0}              }     )
	racingState:createAi(45, {{300, 1, 0.5},   {0, 0.95, 0.4},      {-100, 0.9, 0.3},  {-200, 0.85, 0.2}, {-300, 0.91, 0.1},     {-300, 0.85, 0.05} , {-100, 1.2, 0.4}      }      )
    racingState:createAi(43, {{-600, 1, 0.5},   {-300, 0.95, 0.4}, {-200, 0.9, 0.3},   {-100, 0.85, 0.2},  {0, 0.91, 0.1},            {-100, 0.82, 0.05} , {0, 0.8, 0}              }    )
	racingState:createAi(43, {{-500, 1, 0.5},   {-200, 0.95, 0.4},   {-100, 0.9, 0.3},   {0, 0.85, 0.2},      {-100, 0.91, 0.1},     {-200, 1.08, 0.05} , {0, 0.8, 0}              }    )
	racingState:createAi(43, {{-400, 1, 0.5},   {-100, 0.95, 0.4},   {0, 0.9, 0.3},      {100, 0.85, 0.2}, {-200, 0.92, 0.1},     {0, 0.87, 0.05} , {0, 0.8, 0}              }     )
	racingState:createAi(43, {{-300, 1, 0.5},   {0, 0.95, 0.4},      {100, 0.9, 0.3},  {200, 0.85, 0.2}, {-300, 0.91, 0.1},     {200, 0.85, 0.05} , {-100, 1.2, 0.4}      }      )
end

function createRace2()
	racingState:createAi(47, {{1000, 1, 0.5},  {700, 0.95, 0.4},   {600, 0.9, 0.3},  {500, 0.85, 0.2},  {-500, 0.91, 0.1},     {-300, 0.8, 0.05},       {0, 0.8, 0}             }      )
	racingState:createAi(47, {{900, 1, 0.5},   {600, 0.95, 0.4},   {500, 0.9, 0.3},   {400, 0.85, 0.2},  {-400, 0.91, 0.1},      {200, 1, 0.05}   ,     {0, 0.8, 0}              }      )
	racingState:createAi(47, {{800, 1, 0.5},   {500, 0.95, 0.4},   {400, 0.9, 0.3},   {300, 0.85, 0.2},  {-300, 0.91, 0.1},      {100, 1, 0.05}   ,     {0, 0.8, 0}               }    )
	racingState:createAi(47, {{700, 1, 0.5},   {400, 0.95, 0.4},   {300, 0.9, 0.3},   {200, 0.85, 0.2},  {-200, 0.91, 0.1},       {0, 0.8, 0.05}   ,     {0, 0.8, 0}              }     )
	racingState:createAi(45, {{-600, 1, 0.5},   {-300, 0.95, 0.4}, {-200, 0.9, 0.3},   {-100, 0.85, 0.2},  {0, 0.91, 0.1},            {-100, 0.82, 0.05} , {0, 0.8, 0}              }    )
	racingState:createAi(45, {{-500, 1, 0.5},   {-200, 0.95, 0.4},   {-100, 0.9, 0.3},   {0, 0.85, 0.2},      {-100, 0.91, 0.1},     {-200, 1.08, 0.05} , {0, 0.8, 0}              }    )
	racingState:createAi(45, {{-400, 1, 0.5},   {-100, 0.95, 0.4},   {0, 0.9, 0.3},      {100, 0.85, 0.2}, {-200, 0.92, 0.1},     {0, 0.87, 0.05} , {0, 0.8, 0}              }     )
	racingState:createAi(45, {{-300, 1, 0.5},   {0, 0.95, 0.4},      {100, 0.9, 0.3},  {200, 0.85, 0.2}, {-300, 0.91, 0.1},     {200, 0.85, 0.05} , {-100, 1.2, 0.4}      }      )
end

function createRace3()
	racingState:createAi(47, {{0, 1, 0.5},  {00, 0.95, 0.4},   {00, 0.9, 0.3},  {00, 0.85, 0.2},  {00, 0.91, 0.1},     {00, 0.8, 0.05},       {0, 0.8, 0}             }      )
end

races = {createRace1, createRace2, createRace3}

--Begin building the racing here
function init()
	racingState:setNumberOfLaps(5)
	racingState:setStartingTrackSegmentById(47)
	racingState:createAvatar(47)
	
	
	--races[flash.Math.round(math.random(1,2))]()
	createRace3()
	--createRace1()
	spinoutHotspot = racingState:addHotSpot(2807, 1230, 50);
	
	segment = track:getSegmentById(10)
	
	boostHotspot =  racingState:addHotSpot(segment.centerCenter.x, segment.centerCenter.y * 0.5, 50);
	
	
	--racingState:startRace()
end

function onRaceStart()
	
end

function onRaceEnd()
	
end

function onTrackSegmentEnter(segment, car)
	if segment.id == 14 then
	    racingState:addGag(Spinout.new(1500, car))
	end
end

function onTrackSegmentExit(segment)
	--racingState:doLog("Exited Segment "..segment.id)
end

function onHotSpotEnter(hotspot, car)
	if hotspot.id == spinoutHotspot then
		spinout = Spinout.new(1500, car)
		racingState:addGag(spinout)
		racingState:removeHotSpot(hotspot)
		
		randomSegment = track:getRandomSegment()
		spinoutHotspot = racingState:addHotSpot(randomSegment.centerCenter.x, randomSegment.centerCenter.y * 0.5, 50);
	elseif hotspot.id == boostHotspot then
		boost = Boost.new(2000, car, effects.CAR_HALO_EFFECT)
		racingState:addGag(boost)
	end
end

function onHotSpotExit(hotspot, car)
	
end

function onLapComplete(lapNum)
	
end

function onKeyUp(key)
	if key == 71 then
		boost = Boost.new(2000, racingState.avatar, effects.CAR_HALO_EFFECT)
		racingState:addGag(boost)
	end
end

function onKeyDown(key)
    
end

function createSpinout(car)
	spinout = Spinout.new(1.5, car)
	--racingState:addGag(spinout)
	racingState:doLog("About to create spinout")
end


--######################################################################--
--#################    START DO NOT MODIFY!!!    #######################--
--######################################################################--

function setRacingState(state)
	racingState = state
end

function setTrack(t)
	track = t
end

--######################################################################--
--##################    END DO NOT MODIFY!!!    ########################--
--######################################################################--