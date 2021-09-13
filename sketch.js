var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  ghost = createSprite(200,200,10,10)
  ghost.addImage("c19",ghostImg)
  ghost.scale = 0.3

  doorsGroup = new Group();
  climbersGroup = new Group();
   
}

function draw() {
  background(200);
  

  //spookySound.loop();


 if(gameState === "play"){
   if(keyDown("LEFT_ARROW")){
  ghost.x = ghost.x-4;
   
   }

   if(keyDown("RIGHT_ARROW")){
   ghost.x = ghost.x+4;
 
   }

   if(keyDown("SPACE")){
    ghost.velocityY = -10;
    }
  
    ghost.velocityY = ghost.velocityY+1;

 
  if(tower.y > 400){
      tower.y = 300
    }
    obstacle();

   if(climbersGroup.isTouching(ghost) || doorsGroup.isTouching(ghost) || ghost.y>600){
    
    gameState = "end"
  ghost.velocityY = 0;
  ghost.destroy();


   }
    
    drawSprites();
}

if(gameState === "end"){
stroke("red");
strokeWeight(10)
fill("orange");
textSize(80)
text("GAME OVER " , 60,300);



}



}

function obstacle(){

if(frameCount % 240 === 0){
var door = createSprite(Math.round(random(120,400)),-50,10,10);
door.addImage("C19",doorImg);
door.velocityY = 1;
doorsGroup.add(door);
door.lifetime =700;
ghost.depth = door.depth;
ghost.depth  += 2


var climber = createSprite(200,20,10,10)
climber.x = door.x;
climber.addImage("c19",climberImg )
climber.velocityY = 1;
climbersGroup.add(climber);
climber.lifetime =700;

}
 
}



