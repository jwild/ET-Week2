#pragma strict

function Start () {

}

function Update () {

}

function OnGUI(){
	GUI.Label(Rect(Screen.width/2-100,Screen.height/2-50, 500, 30), "See if you can eat all the burgers without hitting a wall!");
	if(GUI.Button(Rect(Screen.width/2-100,Screen.height/2-15, 200, 30), "Start Burger Chomp!")){
		Application.LoadLevel("Main");
	}
}