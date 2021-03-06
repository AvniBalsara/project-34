const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var background_img;
var background;

var ground,hero,monster,rope,rope1;

var block1,block2,block3,clock4,block5,block6,block7,block8;

function preload() {
background_img=loadImage('GamingBackground.png');

}

function setup() {
  createCanvas(2000, 800);
  engine = Engine.create();
  world = engine.world;

   ground=new Ground(500,500,1000,20);
   hero=new Hero(250,200,100);
   monster=new Monster(500,200,100);
   rope = new Fly(hero.body,{x:200, y:40});
   rope1 = new Fly(monster.body,{x:1000, y:40});
}

function draw() {
  Engine.update(engine);  
  
  background(background_img);
  ground.display();
  rope.display();
  hero.display();
  monster.display();
}

function mouseDragged(){
  
      Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}

