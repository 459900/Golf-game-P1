const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var edges;
var ball;
var gs = 1;
var mouseInitialPosX ,mouseInitialPosY;



function setup() {
  createCanvas(2500,1000);
  edges = createEdgeSprites();
  engine = Engine.create();
  ball = createSprite(50,50);
  world = engine.world;
 // ball.velocityX = 50;  
 // ball.velocityY = 50; 

}

function draw() 
{
  background("#1dab22");
 
  ball.bounceOff(edges);
  //Engine.update(engine);

 

 drawSprites();

}

function mouseClicked(){
  if (gs === 1) {
    
  
  mouseInitialPosX = mouseX;
  mouseInitialPosY = mouseY;

  ball.velocityX = (mouseInitialPosX - ball.x)/10 ;
  ball.velocityY = (mouseInitialPosY - ball.y)/10 ;
  gs = 2;
}
  }
