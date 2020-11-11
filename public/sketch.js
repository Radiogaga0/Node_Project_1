let socket = io();

socket.on("connect", newConnection);

function newConnection(){
  console.log("your id: " + socket.id);
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
  ellipse(mouseX, mouseY, 20);

  //create message for server
  let message = {
    x: mouseX,
    y: mouseY
  };

  //Send message to server
  socket.emit("mouse", message);
}
