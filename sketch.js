const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var box1,box2,box3,box4;
var ground;
var Pig1,pig2,pig3;
var log1,log2,log3,log4;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,300,50,50);
    box2 = new Box(920,300,50,50);
    box3 = new Box(700,240,50,50);
    box4 = new Box(920,240,50,50);
    ground = new Ground (600,400,1200,30);
    pig1 = new Pig (810,300);
    pig2 = new Pig (810,220);
    pig3 = new Pig (810,150);
    log1= new Log (810,260,300,PI/2);
    log2= new Log (810,200,300,PI/2);
    log3= new Log (780,120,120,PI/7);
    log4= new Log (850,120,120,-PI/7);
    bird= new Bird (100,100)
    


    
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    pig1.display();
    pig2.display();
    pig3.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();

   
}