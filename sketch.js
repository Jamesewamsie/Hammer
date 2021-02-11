
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(windowWidth/2, windowHeight - 25, windowWidth, 75);
	
	hammer = new Hammer(windowWidth/2, windowHeight/2, 100,25);

	stone = new Stone(windowWidth/2, 250, 100,100);
	stone1 = new Stone(windowWidth/2, 100, 100,100);

	ball = new Ball(windowWidth/2, 200, 50);



	sand1 = new Ball(windowWidth/2, 75, 10);
	sand2 = new Ball(windowWidth/2, 70, 10);
	sand3 = new Ball(windowWidth/2, 65, 10);
	sand4 = new Ball(windowWidth/2, 60, 10);
	sand5 = new Ball(windowWidth/2, 55, 10);
	sand6 = new Ball(windowWidth/2, 50, 10);
	sand7 = new Ball(windowWidth/2, 75, 10);
	sand8 = new Ball(windowWidth/2, 70, 10);
	sand9 = new Ball(windowWidth/2, 65, 10);
	sand10 = new Ball(windowWidth/2, 60, 10);
	sand11 = new Ball(windowWidth/2, 55, 10);
	sand12 = new Ball(windowWidth/2, 50, 10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  ground.display();
  stone.display();
  stone1.display();
  ball.display();

  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  sand11.display();
  sand12.display();

  hammer.display();
  drawSprites();
}