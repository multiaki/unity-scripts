#pragma strict

static public var numGrabbed : int =0;
static public var numMissed : int = 0;

static function DisplayScore () {
	Debug.Log("We grabbed " + numGrabbed + ' and we missed ' + numMissed);
	
}