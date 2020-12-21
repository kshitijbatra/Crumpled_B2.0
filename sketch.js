
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustbin;
var dustbinB;
var dustbinR;
var dustbinL;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,650,70);
	ground = new Ground(0,700,1600,20);
	groundR = new Ground(800,0,20,1400);
	groundL = new Ground(0,0,20,1400);
	groundU = new Ground(0,0,1600,20);
	//paper = createSprite(100,650,50);
	//dustbinB = createSprite(600,690,140,10);
	//dustbinL = createSprite(525,650,10,100);
	//dustbinR = createSprite(675,650,10,100);
	
	//dustbinB = new Dustbin(600,690,140,10);
	//dustbinL = new Dustbin(525,650,10,100);
	//dustbinR = new Dustbin(675,650,10,100);
	dustbin = new Dustbin(525,650,150,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
   
  ground.display();
  groundR.display();
  groundL.display();
  groundU.display();
  //dustbinB.display();
  //dustbinL.display();
  //dustbinR.display();
  //dustbinB.collide(paper);
  drawSprites();
  //dustbinB.display();
  //dustbinL.display();
  //dustbinR.display();
  dustbin.display();
  paper.display();
  

}

function keyPressed(){
	
	if(keyCode === UP_ARROW){
	
		Matter.Body.applyForce(paper.body,paper.body.position,{x:250,y:-145});
	
	}
	/*
	if(keyCode === UP_ARROW){
	
		Matter.Body.applyForce(paper.body,paper.body.position,{x:0,y:-10});
	
	}
	
	if(keyCode === LEFT_ARROW){
	
		Matter.Body.applyForce(paper.body,paper.body.position,{x:-10,y:0});
	
	}
	if(keyCode === RIGHT_ARROW){
		
		Matter.Body.applyForce(paper.body,paper.body.position,{x:10,y:0});

	}
	*/
}

