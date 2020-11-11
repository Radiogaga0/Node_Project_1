let socket = io();
let myColor = "white";

socket.on("connect", newConnection);
socket.on("mouseBroadcast", drawOtherMouse);
socket.on("color", setColor);

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
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight)

  background("red");
  // put setup code here
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
