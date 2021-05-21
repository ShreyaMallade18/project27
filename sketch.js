
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new roof(350,100,300,30);
	World.add(world,roof);
    

	bobObject1 = new Object(250,300);
	World.add(world,bobObject1);
   
	bobObject2 = new Object(300,300);
	World.add(world,bobObject2);
    
	bobObject3 = new Object(350,300);
	World.add(world,bobObject3);
	
	bobObject4 = new Object(400,300);
	World.add(world,bobObject4);

	bobObject5 = new Object(450,300);
	World.add(world,bobObject5);


	rope1 = new rope(bobObject1.body, roof.body, -100,0)
    World.add(world,rope1);

	rope2 = new rope(bobObject2.body, roof.body, -50,0);
    World.add(world,rope2);

	rope3 = new rope(bobObject3.body, roof.body, 0,0);
	World.add(world,rope3);

	rope4 = new rope(bobObject4.body, roof.body, +50,0);
	World.add(world,rope4);

	rope5 = new rope(bobObject5.body, roof.body, +100,0);
	World.add(world,rope5);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);

  
  drawSprites();


  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  Roof.display();
  

}

function keyPressed(){
	if(keyCode ===UP_ARROW){
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position,{x:730,y:0});
	}
}


