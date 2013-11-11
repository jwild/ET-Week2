#pragma strict

var speed:int = 10;
var filter:float = 5;
var maxX:float=10;
var maxY:float=10;
var minX:float=-10;
var minY:float=-10;

private var accel:Vector3;

function Start () {
	accel = Input.acceleration;
}

function Update () {
	Screen.sleepTimeout = SleepTimeout.NeverSleep;
	
	accel = Vector3.Lerp(accel, Input.acceleration, filter*Time.deltaTime);
	
	var dir=Vector3(-accel.y, accel.x, 0);
	if(dir.sqrMagnitude > 1){
		dir.Normalize();
	}
		
	transform.Translate(dir*speed*Time.deltaTime);	

	var pos = transform.position;
	pos.x = Mathf.Clamp(pos.x, minX, maxX);
	pos.y = Mathf.Clamp(pos.y, minY, maxY);
	
	transform.position = pos;
}
