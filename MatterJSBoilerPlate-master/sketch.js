
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(400,680,800,20)
 rubber =new Rubber(300,100,40)  
hammer = new Hammer ( 200,100,20,80)
iron = new Iron (300,100,50,50 )
stone = new Stone ( 400,100,60,50)
sand1 = new Sand(500,100,20)
sand2 = new Sand (600,100,20)
sand3 = new Sand (700,100,20)
sand4 = new Sand (200,100,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");

ground.display();
hammer.display();
stone.display();
iron.display();
rubber.display();
sand1.display();
sand2.display();
sand3.display();
sand4.display();

  drawSprites();
 
}



