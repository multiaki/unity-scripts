#pragma strict

public var points : int;
public var pickedUpBy: String;


function OnTriggerEnter2D(other: Collider2D) {

	if(other.CompareTag(pickedUpBy)) {
	
		Debug.Log('Worth ' + points +' points');

		Destroy(gameObject);
	}
}