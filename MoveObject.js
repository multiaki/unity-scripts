#pragma strict

public var xSpeed: int;
public var ySpeed: int;

public var randomX : boolean;
public var randomY : boolean;

public var minXSpeed : int = 100;
public var maxXSpeed : int = 200;

public var minYSpeed : int = 100;
public var maxYSpeed : int = 200;

public var randomScaleMin : float = 0.5f;
public var randomScaleMax : float = 2f;

function Start () {

	if(randomX) 
		xSpeed = Random.Range(minXSpeed, maxXSpeed);
		
	if(randomY) 
		ySpeed = Random.Range(minYSpeed, maxYSpeed);

	var newSpeed : Vector2;
	newSpeed.x = xSpeed;
	newSpeed.y = ySpeed;
	
	var newScale : Vector3;
	var scale = Random.Range(randomScaleMin, randomScaleMax);
	newScale.x = scale;
	newScale.y = scale;
	newScale.z = 0;

	transform.localScale = newScale;
//	GetComponent.<Transform>().localScale(newScale);
	
	GetComponent.<Rigidbody2D>().AddForce(newSpeed);
}