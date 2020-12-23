const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world;

var thunder,thunder1,thunder2,thunder3,thunder4;
var drops=[]
var maxdrop=100;
function preload(){
    thunder1=loadImage("thunderbolt/1.png");
    thunder2=loadImage("thunderbolt/2.png");
    thunder3=loadImage("thunderbolt/3.png");
    thunder4=loadImage("thunderbolt/4.png");

}

function setup(){
   createCanvas(400,700)
    engine=Engine.create()
    world=engine.world
    if(frameCount%100===0){
    for(var i=0;i<maxdrop;i++){
        drops.push(new Drop(random(0,400),random(0,400)))
    }
}
}

function draw(){
    background("black")
    Engine.update(engine);
    var r=Math.round(random(1,4))
    if(frameCount%80===0){
        thunder=createSprite(random(10,370),random(10,30),10,10)
        switch(r){
            case 1: thunder.addImage(thunder1);
            break;
    case 2: thunder.addImage(thunder2);
            break;
    case 3: thunder.addImage(thunder3);
            break;
    case 4: thunder.addImage(thunder4);
            break;
    default: break; 

        }
    }
    drops.display();
}   

  