
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var roof,ground;
var bob1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof=new Roof(400,300,400,20);
ground=new Roof(400,700,400,20);
bob1=new Bob(220,300,50)
rope1=new Rope(bob1.body,roof.body,-160,0)
bob2=new Bob(240,500,50)
rope2=new Rope(bob2.body,roof.body,-80,0)
bob3=new Bob(260,500,50)
rope3=new Rope(bob3.body,roof.body,0,0)
bob4=new Bob(400,500,50)
rope4=new Rope(bob4.body,roof.body,80,0)
bob5=new Bob(500,500,50)
rope5=new Rope(bob5.body,roof.body,160,0)
	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(255);
  roof.display();
 bob1.display();
 ground.display();
 rope1.display();
 rope2.display();
 bob2.display();
 rope3.display();
 bob3.display();
 rope4.display();
 bob4.display();
 rope5.display();
 bob5.display();
}



