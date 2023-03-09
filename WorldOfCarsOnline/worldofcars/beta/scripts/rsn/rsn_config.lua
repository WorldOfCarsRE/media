------------------------------------------------
-- This is a script for the rsn view
-- @author Jonathan Ross
------------------------------------------------

local function createRace(name, trackId, mapUrl, graphicUrl)
	return {name=name, trackId=trackId, mapUrl=mapUrl, graphicUrl=graphicUrl}
end


config = {
	createRace(
		"Carburetor County Speedway", 
		30001, 
		"car_g_ico_map_CCS.swf",
		"car_g_gui_lgo_carburetorCounty.swf"
	),
	createRace(
		"Twistin Tailfin", 
		30002, 
		"car_g_ico_map_TTT.swf",
		"car_g_gui_lgo_twistinTailfinTrk.swf"
	),
	createRace(
		"Fillmore's Fields Rally", 
		30003, 
		"car_g_ico_map_FFR.swf",
		"car_g_gui_lgo_fillmoresFieldsRally.swf"
	)
}