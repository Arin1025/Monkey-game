var background, obstacleGroup, score, monkey;

var bananaImage, obstacleImage;

function preload(){
 background=loadImage("jungle.jpg");
 monkey =  loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
 bananaImage=loadImage("banana.png");
 obstacleImage=loadImage("stone.png");
}

function setup(){
createCanvas(400,400);
background.addImage(jungle.jpg);
background.velocityX=2;
}

function draw(){
 if(background.X < 0){
  background.x = background/width;
 }
  
  monkey.scale=0.1;
  
  textSize(18);
  
  if(gameState==Play){   
  if(keyDown("space") && monkey.y == 285.09 || monkey.y == 285.89){
  monkey.velocityY = -15;
}
  
  if(bananaGroup.isTouching(monkey)){
   bananaGroup.destroyEach();
   score = score+2;
  }

  switch(score){
    case 10: monkey.scale=0.12;
    break;
    case 20: monkey.scale=0.14;
    break;
    case 30: monkey.scale=0.16;
    break;
    case 40: monkey.scale=0.18;
    break
    default:
    break;
}
    
  if(obstacleGroup.isTouching(monkey)){
    monkey.scale=0.1;
    
    drawSprites();
    
    stroke("white");
    textSize(20);
    fill("white");
    text("Score :" + score, 380, 50);
  }
}
  
function bananas(){
  if(frameCount%80 == 0){
    var banana = createSprite(400, randomNumber(120,200),0,0);
    banana.addImage("banana");
    banana.scale = 0.1;
    banana.velocityX = -5;
    banana.lifetime = 200;
    bananaGroup.add(banana);
  }
}
    
    function rocks() {
  if(frameCount%300==0){
    var rock = createSprite(410,290,0,0);
    rock.addImage("stone");
    rock.scale = 0.2;
    rock.velocityX = -6;
    rock.lifetime = 200;
    obstacleGroup.add(rock);
}
}
  