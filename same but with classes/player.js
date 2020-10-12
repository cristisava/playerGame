class Player {
  constructor(box) {
  this.box = box;
  this.posY = 4;
  this.posX = 4;
  this.speed = 3;
  this.inputX = 0;
  this.inputY = 0;
  }
  
 getInputFromUser() {
    document.onkeydown = detectKey;
    const player = this;
    function detectKey(e) {
      e = e || window.event;

      if (e.keyCode == "38" && player.checkBorders()) {
        // up arrow
        player.inputY = -1;
      } else if (e.keyCode == "40" && player.checkBorders()) {
        // down arrow
        player.inputY = 1;
      } else if (e.keyCode == "37" && player.checkBorders()) {
        // left arrow
        player.inputX = -1;
      } else if (e.keyCode == "39" && player.checkBorders()) {
        // right arrow
        player.inputX = 1;
      }
      player.playerMovement();
      player.inputX = 0;
      player.inputY = 0;
    }
  }

  playerMovement(){
    this.posY = this.posY + this.speed * this.inputY;
    this.posX = this.posX + this.speed * this.inputX;
    this.box.style.marginTop = this.posY + "px";
    this.box.style.marginLeft = this.posX + "px";
}

  checkBorders() {
    if(this.posY-this.speed < 0){
      this.posY += 1;
      return false;
    }
    if(this.posY+ this.speed > 380){
      this.posY -= 1;
      return false;
    }
    if(this.posX+ this.speed > 380){
      this.posX -= 1;
      return false;
    }
    if(this.posX - this.speed < 0){
      this.posX += 1;
      return false;
    }
    return true;
  }
}


let playerContainer = document.getElementById('player');
let newPlayer = new Player(playerContainer);
newPlayer.getInputFromUser();