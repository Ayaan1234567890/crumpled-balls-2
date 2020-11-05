
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bin,ball,ground,paperImage,binImage;

function preload(){
	paperImage=loadImage('crumpled balls.jpg')
    binImage=loadImage('dustbin.jpg')
}

function setup() {
	createCanvas(800, 700);

//bin = new Dustbin(700,600);



engine = Engine.create();
	world = engine.world;

	ball = new Paper(200,300);

  base = Bodies.rectangle( 370,620,200,20,{isStatic:true} );
  World.add(world, base);
  left = Bodies.rectangle(300,600,20,50,{isStatic:true});
  World.add(world, left);
  right = Bodies.rectangle( 450,600,20,50,{isStatic:true});
  World.add(world, right);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
}
  
function draw() {
 
  background(0);
  rectMode(CENTER);
  
fill(255,0,0)
rect(base.position.x,base.position.y,200,20)
fill(255,0,0)
rect(left.position.x,left.position.y,20,50)
fill(255,0,0)
rect(right.position.x,right.position.y,20,50)
imageMode(CENTER)
image(binImage,370,620,200,350);

//dustbin.display();
ball.display();


}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
		
	}
	if (keyCode === DOWN_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:-85,y:-85});
		
	}
}


