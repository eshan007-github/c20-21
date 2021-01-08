var fixedRect, movingRect;

function setup(){
  createCanvas(400,400);
  fixedRect = createSprite(380,200,20,380);
  movingRect = createSprite(200,200,100,30);
  movingRect.debug = true;
  fixedRect.debug = true;
  movingRect.shapeColor = "yellow";
  fixedRect.shapeColor = "yellow";

  box1 = createSprite(100,100,20,20);
  box1.velocityX = 3;

  box2 = createSprite(100,200,20,20);
  box2.velocityX = 3;
}

function draw() {
  
  background("white");
box1.shapeColor=(random(200,255))


  movingRect.x = mouseX;
  movingRect.y = mouseY;
  

  //calling the isTouching function with arguments
  if(isTouching(fixedRect,movingRect)){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "yellow";
    movingRect.shapeColor = "yellow";
  }

  //detect collision and collide
   collide(fixedRect,box1)
  
  //detect collision and bounceOff
    bounceOff(fixedRect,box2) 

  drawSprites()
}

