#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter(col:Collider){
	if(col.gameObject.tag=="fatguy"){
		
	}
}

function OnCollisionEnter(col:Collision){
	if(col.gameObject.tag == "fatguy"){
		Destroy(gameObject);
	}
}