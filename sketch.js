const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world,bodies;
var ground;

var ball;

function setup() {
  createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;

  var ground_options ={
    isStatic: true
  }
  
 ground = Bodies.rectangle(300,590,600,20,ground_options);
World.add(world,ground);

var ball_options ={
  restitution: 3
}

ball = Bodies.rectangle(300,300,30,30,ball_options);
World.add(world,ball);
ball.shapeColor="white";

//console.log(object,type);


console.log(ground.position.x);
console.log(ground.position.y);


}

function draw() {
  background("aqua");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,600,20);
  rectMode(CENTER);
  rect(ball.position.x,ball.position.y,30,30);
  drawSprites();
}