const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine;
var myWorld;
var box1,box2,box3,box4,box5; 
var pig1,pig2;
var ground;
var log1,log2,log3,log4;
var bird;

function setup() {
  createCanvas(1200,400);

  // creates myEngine and myEngine.world gets created automatically
  myEngine = Engine.create(); 

  //namespacing myEngine.world as a simple variable as myWorld
  myWorld = myEngine.world;

  //to create a new Box object
  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  box3 = new Box(700,240,70,70);
  box4 = new Box(920,240,70,70);
  box5 = new Box(810,160,70,70);

  //to create ground object
  ground = new Ground(600,height,1200,20);

  //to create pig objects
  pig1 = new Pig(810,350);
  pig2 = new Pig(810,220);

  //to create the logs
  log1 = new Log(810,260,300,PI/2);
  log2 = new Log(810,160,300,PI/2);
  log3 = new Log(770,120,170,PI/7);
  log4 = new Log(860,120,170,-PI/7);

  //to create the angry bird
  bird = new Bird(200,200);

}

function draw() {
  background(0);  
  Engine.update(myEngine);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  ground.display();
  pig1.display();
  pig2.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  bird.display();
 
}