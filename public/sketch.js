let socket = io();

socket.on("connect", newConnection);
socket.on("mouseBroadcast", drawOtherMouse);

function newConnection(){
  console.log("your id: " + socket.id);
}

//this function will contain instruction on what to do when receiving the message back from server
function drawOtherMouse(data){
  noStroke();
  fill("yellow");
  ellipse(data.x, data.y, 20);
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
  noStroke();
  fill("white");
  ellipse(mouseX, mouseY, 20);

  //create message for server
  let message = {
    x: mouseX,
    y: mouseY
  };

  //Send message to server
  socket.emit("mouse", message);
}
