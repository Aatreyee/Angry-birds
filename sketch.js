const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,ground,pig1,log1,pig2,log2,box3,box4,box5,log3,log4;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,350,70,70);
    box2 = new Box(1000,350,70,70);
    ground = new Ground(width/2,height,width,20);
    pig1 = new Pig(900,350,50,50);
    log1 = new Log(900,300,275,PI/2);
    box3 = new Box(800,250,70,70);
    box4 = new Box(1000,250,70,70);
    pig2 = new Pig(900,250,50,50);
    log2 = new Log(900,210,275,PI/2);
    box5 = new Box(900,210,70,70);
    log3 = new Log(850,200,150,PI/7);
    log4 = new Log(950,200,150,-PI/7);

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
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    box5.display();
}