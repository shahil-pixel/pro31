const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;

var divisionHeight = 300

var plinkos = [];
var particles = [];
var divisions = [];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,800,900,50);

}

function draw() {
  background("black");
  for(var k = 0;k <= width; k = k + 80){
    divisions.push(new Division(k, height-divisionHeight/2,10,divisionHeight))
    }
 ground.display();

  drawSprites();
  
}