let socket = io();
let myColor = "white";

socket.on("connect", newConnection);
socket.on("mouseBroadcast", drawOtherMouse);
socket.on("color", setColor);
socket.on("newPlayer", newPlayer);

//receive other player color
function newPlayer(newPlayerColor) {
  console.log(newPlayerColor);

  push();
  fill("red");
  rectMode(CENTER);
  noStroke();
  rect(width/2, height/2, width, 50);

  textSize(30);
  textAlign("center");
  fill(newPlayerColor);
  text("New player joined: " + newPlayerColor, width/2, height/2);
  pop();
}

//receive color assigned randomly to client
function setColor(assignedColor){
  myColor = assignedColor;
}

function newConnection(){
  console.log("your id: " + socket.id);
}

//this function will contain instruction on what to do when receiving the message back from server
function drawOtherMouse(data){
  push();
  noStroke();
  fill(data.color);
  ellipse(data.x, data.y, 20);
  pop();
}

function preload(){

}

function setup() {
  createCanvas(windowWidth,windowHeight)

  background("red");

  //add a welcome message
  push();
  textSize(30);
  textAlign("center");
  fill(myColor);
  text("Welcome" + myColor, width/2, height/2);
  pop();
}

function draw() {
  // put drawing code here
}

//draw circle with mouse
function mouseMoved(){
  push();
  noStroke();
  fill(myColor);
  ellipse(mouseX, mouseY, 20);
  pop();

  //create message for server
  let message = {
    x: mouseX,
    y: mouseY,
    color: myColor,
  };

  //Send message to server
  socket.emit("mouse", message);
}
