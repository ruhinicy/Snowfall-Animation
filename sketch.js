var obstacle;
var bg;



function preload() {
  obstacle = loadAnimation("snow4.png");
  bg = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(400,400);

  
}

function draw() {
  background(bg);

  if (frameCount % 10 === 0){
    var obstacle1 = createSprite(1,1 ,50,50);
    obstacle1.x = Math.round(random(10,800));
    obstacle1.scale=0.1; 
    obstacle1.velocityY = 2;
    obstacle1.addImage("snow",obstacle);
     }



  drawSprites();

}


 
    