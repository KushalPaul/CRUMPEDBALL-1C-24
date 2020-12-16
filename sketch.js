
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, dustbin, dustbin2, dustbin3, ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   paper = new Paper(150,650,25)
   dustbin = new Dustbin(600,650,200,10)
   dustbin2 = new Dustbin(495,610,10,80)
   dustbin3 = new Dustbin(705,610,10,80)
   ground = new Ground(0,665,10000,10)

   Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  dustbin.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
 //keyPressed();
  drawSprites();
 
}
 function keyPressed(){
   if (keyCode === UP_ARROW){

     Matter.Body.applyForce(paper.body,paper.body.position,{x:20,y:-20});
   }
 }


