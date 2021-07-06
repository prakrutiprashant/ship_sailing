var ship,ship_sailing;
var sea,flowing
function preload(){
ship_sailing=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
flowing=loadImage("sea.png");
}



function draw() {
 background("white");
 drawSprites();
}

function setup(){
  createCanvas(500,400)
  sea=createSprite(400,180,400,20);
  sea .addImage("flow",flowing);
  
 
  ship=createSprite(50,350,20,50);
  ship.addAnimation("sailing",ship_sailing);
  ship.scale=0.1;

ship.velocityX=1;
if(sea.x>530){
sea.x=0;
}
  edges=createEdgeSprites();
}

function draw() {
  background("white");
  drawSprites();
 }

