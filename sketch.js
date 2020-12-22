
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dust;
var ground1;
var crumpledPaper;
var lines1,lines2,lines3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);
  

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground1=new Ground(400, 700, 800, 20);

  dust=new Dustbin(520, 520, 100, 180);
  
  lines1=new Line(600, 680, 200, 20);
	lines2=new Line(500, 600, 20, 180);
	lines3=new Line(703, 600, 20, 180);

  crumpledPaper=new Paper(30,500,30);
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  ground1.display();

  crumpledPaper.display();

  dust.display();

  lines1.display();
  lines2.display();
  lines3.display();

  drawSprites();
 
}

function keyPressed(){
  if (keyCode === UP_ARROW)
  {
    Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:41,y:-41})
  }
}



