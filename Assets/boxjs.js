#pragma strict

var speed:int = 10;
var filter:float = 5;
var maxX:float=10;
var maxY:float=10;
var minX:float=-10;
var minY:float=-10;

private var accel:Vector3;

var collided_with: GameObject;
var score: int = 0;


function Start () {
	accel = Input.acceleration;
}

function OnGUI(){
	//GUI.Label(Rect(0,0,Screen.width,Screen.height), "SCORE: 0");
	GUI.Label(Rect(100,20,300,100), "SCORE: "+score);
}

function Update () {
	Screen.sleepTimeout = SleepTimeout.NeverSleep;
	
	if(collided_with != null){
		if(collided_with.tag == "Top" || collided_with.tag == "Bottom" || collided_with.tag == "Left" || collided_with.tag == "Right"){
			closeGame();
		}
	}
	
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
	
	if(Input.GetAxis("Horizontal") > 0){
		if(collided_with != null){
			if(collided_with.tag == "Right"){
				return;
			}
		}
		transform.Translate(Vector3(1 * speed * Time.deltaTime,0,0));
	}
	
	if(Input.GetAxis("Horizontal") < 0){
		if(collided_with != null){
			if(collided_with.tag == "Left"){
				return;
			}
		}
		transform.Translate(Vector3(-1 * speed * Time.deltaTime,0,0));
	}
	
	if(Input.GetAxis("Vertical") < 0){
		if(collided_with != null){
			if(collided_with.tag == "Top"){
				return;
			}
		}
		transform.Translate(Vector3(0,-1 * speed * Time.deltaTime,0));
	}
	if(Input.GetAxis("Vertical") > 0){
		if(collided_with != null){
			if(collided_with.tag == "Bottom"){
				return;
			}
		}
		transform.Translate(Vector3(0,1 * speed * Time.deltaTime,0));
	}
}

function OnCollisionEnter(col:Collision){
	collided_with = col.gameObject;
	
	score++;
	if(score >= 44){
		Application.LoadLevel("WinGame");
	}
}

function OnCollisionExit(col:Collision){
	collided_with = null;
}

function closeGame(){
	Application.LoadLevel("EndGame");
}