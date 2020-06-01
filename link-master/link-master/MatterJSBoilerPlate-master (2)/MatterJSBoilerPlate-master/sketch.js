var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var counter;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	//Create a Ground
	ground = new Ground();
	 //World.add(world, ground);
	counter = 0;
	can1 = new Box(500,580,25,100);
	can2 = new Box(700,580,25,100);
	can3 = new Box(600,638,225,25);
	ball = new Paper(50,650,25);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  can1.display();
  can2.display();
  can3.display();
  ball.display();
  drawSprites();
 
}
function keyPressed() {
	if(keyCode == UP_ARROW && counter == 0){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:95,y:-95});
		counter += 1;
	}
}


