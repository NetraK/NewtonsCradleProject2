const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var canvas;
var engine;
var world;
var pendulum1,pendulum2,pendulum3,pendulum4,pendulum5;
var sling1,sling2,sling3,sling4,sling5;
var mConstraint;

function setup() {
  canvas=createCanvas(windowWidth/2,windowHeight/1.5);
  engine=Engine.create();
  world=engine.world;

  let canvasmouse=Mouse.create(canvas.elt);
  canvasmouse.pixelRatio=pixelDensity();

  let options = {
    mouse:canvasmouse
  };

  mConstraint = MouseConstraint.create(engine,options);
  World.add(world,mConstraint);
  

  //make objects here
  pendulum1 = new Pendulum(340,450,"black");
  sling1 = new Sling(pendulum1.body,{x:340,y:200});



  //Engine.run(engine);

}

function draw() {
  background(0); 
  Engine.update(engine);
  pendulum1.display();

  sling1.display();

}

function mouseDragged(){
  Matter.Bodies.setPosition(pendulum1.body,{x:mouseX,y:mouseY});
}