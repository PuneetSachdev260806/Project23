var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var left, base, right;
var boxPosition;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var leftBody, rightBody, baseBody;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
	boxPosition = width/2 - 100;
	boxY = 400; 
	left = createSprite(boxPosition, boxY, 20,200);
	right = createSprite(boxPosition+100, boxY, 20, 200);
	base = createSprite(boxPosition+50, boxY+50,100,20);
	leftBody = Bodies.rectangle(boxPosition, boxY, 20,200,{isStatic:true});
	rightBody = Bodies.rectangle(boxPosition+100, boxY, 20,200,{isStatic:true});
	baseBody = Bodies.rectangle(boxPosition+50, boxY+50, 100,20,{isStatic:true});
	left.shapeColor="red";
	right.shapeColor="red";
	base.shapeColor="red";
	World.add(world, leftBody);
	World.add(world, rightBody);
	World.add(world, baseBody);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  


  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false);
  }
  if (keyCode === LEFT_ARROW) {
   helicopterSprite.x= helicopterSprite.x-15;
  }
  if (keyCode === RIGHT_ARROW) {
	helicopterSprite.x= helicopterSprite.x+15;
  }
}



