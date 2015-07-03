#pragma strict

public var gObj: GameObject;

function Start () {
	InvokeRepeating('createRandom', 1, 2);
}

function createRandom () {
	var x : float;
	var y : float;
	
	x = Random.Range(-6.0, 6.0);
	y = 6;
	
	
	Instantiate(gObj, Vector3(x, y, 0), Quaternion.identity);
	
}