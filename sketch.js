const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var b1,b2,b3,b4,b5,b6,ground,g1,ball,slingshot
var engine, world;

function preload (){
    poly=loadImage("polygon.png")
    
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

b1=new Box(550,300,30,40)
b2=new Box(470,300,30,40)
b3=new Box(490,300,30,40)
b4=new Box(500,300,30,40)
b5=new Box(490,250,30,40)
b6=new Box(515,250,30,40)
b7=new Box(500,200,30,40)
ball=Bodies.circle(100,200,20)
World.add (world,ball)
slingshot=new Slingshot(this.ball,{x:100,y:200})
    ground = new Ground(600,height,1200,20);
    g1 = new Ground(500,320,150,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    strokeWeight(4);
    b1.display();
    b2.display();
    b3.display();
    g1.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    slingshot.display();
    ground.display();
    imageMode (CENTER)
     image (poly,ball.position.x,ball.position.y,20,20);
    
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed() {
    if (keyCode===32){
        slingshot.attach(ball.body)
    }
}