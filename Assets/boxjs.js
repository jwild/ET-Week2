#pragma strict

var speed:int = 5;

function Start () {

}

function Update () {
	var dir : Vector3 = Vector3.zero;
	dir.x = -Input.acceleration.y;
	dir.z = Input.acceleration.x;

	if (dir.sqrMagnitude > 1)
		dir.Normalize();

	dir *= Time.deltaTime;
	transform.Translate (dir * speed);
}
