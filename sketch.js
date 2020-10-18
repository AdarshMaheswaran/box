
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper
function preload()
{
	
}

function setup() {
	createCanvas(800, 510);
    background(255);

	engine = Engine.create();
	world = engine.world;
    
	//Create the Bodies Here.
    paper=new Paper(200,100,10,10);
	box=new Box(400,430,40,10);
	
  ground=new Box(400,500,800,10)   
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper.display();
  paper.VelocityX=6;
  box.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  drawSprites();
}



