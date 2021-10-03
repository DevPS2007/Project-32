const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;

var bg = "sunrise.png";

function preload() {
    getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
        }
        else{
            background("black");
        }

    Engine.update(engine);

    fill("black");
    textSize(30);

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var r=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //change the data in JSON format and store it in variable responseJSON
    var rJSON=await r.json();
    //fetch datetime from responseJSON
    var Dt=rJSON.datetime;
    // slice the datetime to extract hour
    var hour=Dt.slice(11,13)
    

    
    if(hour>=0 && hour<18 ){
        bg = "sunrise.png";
    }
    else{
        bg="sunset.png"
    }
    
    backgroundImg = loadImage(bg);
}
