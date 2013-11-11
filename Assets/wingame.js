#pragma strict

function Start () {

}

function Update () {

}

function OnGUI(){
	GUI.Label(Rect(Screen.width/2-100,Screen.height/2-50, 500, 30), "Congrats! You ate all the burgers!");
	if(GUI.Button(Rect(Screen.width/2-100,Screen.height/2-15, 200, 30), "Return To Home Screen")){
		Application.LoadLevel("Menu");
	}
}