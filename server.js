console.log("node is running");

//instruction to load the package express
let express = require("express");

//instruction to load the package express
let socket = require("socket.io");

//executing the packages
let app = express();

//creating a local host
let port = 3000;

app.use(express.static("public"));

//starting the server
let server = app.listen(port);

//executing the socket package with input output variable
let io = socket(server);

//telling socket to execute the function newConnection when there is a specific message
io.on("connection", newConnection);

//instructions related to all connections
function newConnection(socket){
  //print id of connection
  console.log("new connection: " + socket.client.id);
  //when mouse type message received execute the following function
  socket.on("mouse", mouseMessage);

  function mouseMessage(dataReceived){
    console.log(dataReceived);
  }
}
