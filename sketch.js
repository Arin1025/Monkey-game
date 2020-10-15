var back, obstacleGroup, bananaGroup, score, monkey, ground, gameState="Play";

var bananaImage, obstacleImage, monkeyImage, backImage;

function preload(){
 backImage = loadImage("jungle.jpg");
 monkeyImage = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
 bananaImage=loadImage("banana.png");
 obstacleImage=loadImage("stone.png");
  back=loadImage("jungle.jpg");
}

function setup(){
createCanvas(500,400);
  back=createSprite(200, 200, 600, 400);
  back.addImage(backImage);
back.velocityX=-2;
 monkey=createSprite(100, 350, 10, 10);
  ground=createSprite(200, 380, 400, 10);
  ground.visible=false;
monkey.addAnimation("Monkey", monkeyImage);
  obstacleGroup=new Group();
  bananaGroup=new Group();
}

function draw(){
  
  background(0);
  
  rocks();
  bananas();
  
  score=0;
  
 if(back.x < 0){
  back.x = 400;
 }
  
  monkey.scale=0.1;
  
  //console.log(monkey.y);
  
  textSize(18);
  
  monkey.collide(ground);
  
  if(gameState=="Play"){   
  if(keyDown("space") && monkey.y >= 340){
  monkey.velocityY = -12;
    bananas();
    rocks();
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
  gameState="End";
  }
}
  
  if(gameState=="End"){
    back.velocityX=0;
    monkey.pause();
    bananaGroup.setVelocityXEach(0);
    obstacleGroup.setVelocityXEach(0);
    bananaGroup.setLifetimeEach(-1);
    obstacleGroup.setLifetimeEach(-1);
  }
  
  monkey.velocityY = monkey.velocityY+0.8 
  
  drawSprites();
  
  stroke("white");
    textSize(20);
    fill("white");
    text("Score :" + score, 380, 50);
}
  
function bananas(){
  if(frameCount%80 == 0){
    var banana = createSprite(600, random(200,350),0,0);
    banana.addImage(bananaImage);
    banana.scale = 0.07;
    banana.velocityX = -5;
    banana.lifetime = 200;
    bananaGroup.add(banana);
  }
}
    
    function rocks() {
  if(frameCount%300==0){
    var rock = createSprite(600,380,0,0);
    rock.addImage(obstacleImage);
    rock.scale = 0.2;
    rock.velocityX = -6;
    rock.lifetime = 200;
    obstacleGroup.add(rock);
}
}
  