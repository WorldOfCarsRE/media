------------------------------------------------
-- This is a script for the rsn view
-- @author Jonathan Ross
------------------------------------------------

local racingModes =
{
	MCQUEEN_CIRCUIT = 1,
	DOCS_CHALLENGE = 2,
	PISTON_CUP = 3
}

local function createLobby(mapUrl, titleUrl, raceMode)
	return {mapUrl=mapUrl, titleUrl=titleUrl, raceMode=raceMode}
end


config = {
	carburetorCountySpeedway = createLobby(
		"car_g_ico_map_CCS.swf",
		"car_f_gui_ttl_carburetorCounty.swf",
		racingModes.DOCS_CHALLENGE
	),
	twistinTailfinTrack = createLobby(
		"car_g_ico_map_TTT.swf",
		"car_f_gui_ttl_twistinTailfinTrk.swf",
		racingModes.DOCS_CHALLENGE
	),
	fillmoresFieldsRally = createLobby(
		"car_g_ico_map_FFR.swf",
		"car_f_gui_ttl_fillmoresFieldsRally.swf",
		racingModes.DOCS_CHALLENGE
	)
}