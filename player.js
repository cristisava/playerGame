const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d");

let x = 100;
let y = 100;
let radius = 30;
let speed = 2;

let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;


function drawGame() {
  requestAnimationFrame(drawGame);
  createGameBoard();
  inputs();
  boundryCheck();
  drawCircle();
}


function drawCircle() {
  ctx.fillStyle = "green";

  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
}


function createGameBoard() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}


function boundryCheck() {
  //up
  if (y < radius) {
    y = radius;
  }
  //down
  if (y > canvas.height - radius) {
    y = canvas.height - radius;
  }
  //left
  if (x < radius) {
    x = radius;
  }
  //right
  if (x > canvas.width - radius) {
    x = canvas.width - radius;
  }
}


function inputs() {
  if (upPressed) {
    y = y - speed;
  }
  if (downPressed) {
    y = y + speed;
  }
  if (leftPressed) {
    x = x - speed;
  }
  if (rightPressed) {
    x = x + speed;
  }
}



document.body.addEventListener("keydown", keyDown);
document.body.addEventListener("keyup", keyUp);

function keyDown(event) {
  //up
  if (event.keyCode == 38) {
    upPressed = true;
  }

  //down
  if (event.keyCode == 40) {
    downPressed = true;
  }
  //left
  if (event.keyCode == 37) {
    leftPressed = true;
  }

  //right
  if (event.keyCode == 39) {
    rightPressed = true;
  }
}


function keyUp(event) {
  //up
  if (event.keyCode == 38) {
    upPressed = false;
  }

  //down
  if (event.keyCode == 40) {
    downPressed = false;
  }
  //left
  if (event.keyCode == 37) {
    leftPressed = false;
  }

  //right
  if (event.keyCode == 39) {
    rightPressed = false;
  }
}

drawGame();