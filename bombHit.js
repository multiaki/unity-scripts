#pragma strict

function OnCollisionEnter2D (other: Collision2D) {
	if(other.gameObject.CompareTag('Ground')){
		GameData.numMissed++;
		GameData.DisplayScore();
		Destroy(gameObject);
	}
}