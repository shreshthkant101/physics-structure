const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    log1 = new Log(200,340,20,120,PI/2);
    log2 = new Log(400,340,20,120,PI/2);
    log3 = new Log(300,260,220,20,PI/2);

    log4 = new Log(420,265,20,250,PI/2);
    log5 = new Log(180,265,20,250,PI/2);

    log6 = new Log(300,120,260,20,PI/2);

    log7 = new Log(405,75,50,50);

    log8 = new Log(195,75,50,50);

    log9 = new Log(300,200,65,65);

    log10 = new Log(300,50,100);

    log11 = new Log(300,340,60,60);

    log12 = new Log(300,50,260,20);
    ground = new Ground(400,height,800,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    log5.display();
    log6.display();
    log7.display();
    log8.display();
    log9.display();
    log10.display();
    log11.display();
    log12.display();
    ground.display();
}