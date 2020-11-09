var backgroundpic, backgroundImage;
var redballon,redballonImage,RB;
var greenballon,greenballonImage,GB;
var blueballon,blueballonImage,BB;
var pinkballon,pinkballonImage,PB;
var bow, bowImage;
var arrow, arrowImage,arrowGroup;
var selectBallon, score;
var edges;

function preload(){
 //load your images here 
 backgroundImage = loadImage("background0.png");
  
  redballonImage = loadImage("red_balloon0.png");
  
  greenballonImage = loadImage("green_balloon0.png");
  
  blueballonImage = loadImage("blue_balloon0.png");
  
  pinkballonImage = loadImage("pink_balloon0.png");
  
  bowImage = loadImage("bow0.png");
  
  arrowImage= loadImage("arrow0.png");
  
  arrowGroup = new Group();
  
  RB = new Group();
  
  GB = new Group();
  
  BB = new Group();
  
  PB = new Group();
}

function setup() {
  createCanvas(600, 600);

  backgroundpic = createSprite(0,0,600,600);
  backgroundpic.scale = 3;
  backgroundpic.velocityX = -3;
  backgroundpic.addImage("back",backgroundImage);
  
  console.log(backgroundpic.width);
  backgroundpic.x= backgroundpic.width/2;
  
  bow = createSprite(560,300,10,5);
  bow.addImage("bow",bowImage);
  bow.velocityY = 2;

  Arrow();
  
  edges = createEdgeSprites();
  //add code here
  

  score = 0 ;
}

function Arrow(){
  arrow = createSprite(560,300,5,3);
  arrow.addImage("arrow",arrowImage);
  arrow.visible =false;
  arrow.scale = 0.2;
  arrow.lifetime = 100;
  arrowGroup.add(arrow);
  arrow.y = bow.y;
  return arrow;
}

function draw() {
  background("white");
  
  Arrow();

  if(backgroundpic.x<0){
    backgroundpic.x= backgroundpic.width/2;
  }
     
  
  if(keyWentDown("space")) {
    arrow.visible= true;
    arrow.velocityX = -3
    Arrow();
  }
  
  if(arrowGroup.isTouching(RB)){
    RB.destroyEach();
    arrowGroup.destroyEach();
    score += 1;
  }
  
    if(arrowGroup.isTouching(GB)){
    GB.destroyEach();
    arrowGroup.destroyEach();
    score += 2;
  }
  
    if(arrowGroup.isTouching(BB)){
    BB.destroyEach();
    arrowGroup.destroyEach();
    score += 3;
  }
  
    if(arrowGroup.isTouching(PB)){
    PB.destroyEach();
    arrowGroup.destroyEach();
    score += 4;
  }
  
  bow.y = mouseY;
  bow.bounceOff(edges);
  //add code here
 //spawnBallons();
  
 selectBalloon();
 drawSprites(); 
  
 text("Score : " + score ,270,30);
 textSize = 20;
  
}
/*function spawnBallons(){
  
  redBalloon();
  greenBalloon();
  blueBalloon();
  pinkBalloon();
}*/

function selectBalloon(){
  
  selectBallon = Math.round(random(1,4));
  //console.log(selectBallon);
  
  if(frameCount % 80 === 0){
  
    if(selectBallon === 1){
      redBalloon();
    }else if(selectBallon === 2){
      greenBalloon();
    }else if(selectBallon === 3){
      blueBalloon();
    } else if (selectBallon === 4){
      pinkBalloon();
    }
  
  }
}

function redBalloon(){

  redballon = createSprite(0, Math.round(random(100,400)), 10, 10);
  redballon.velocityX = 3;
  redballon.addImage(redballonImage);
  redballon.scale = 0.1
  redballon.lifetime = 150;
  RB.add(redballon);
}

function greenBalloon(){

  greenballon = createSprite(100,Math.round(random(100,400)), 10, 10);
  greenballon.velocityX = 3;
  greenballon.addImage(greenballonImage);
  greenballon.scale = 0.1;
  greenballon.lifetime = 150;
  GB.add(greenballon);
}

function blueBalloon(){
    
  blueBallon = createSprite(140,Math.round(random(100,400)), 10, 10);
  blueBallon.velocityX = 3;
  blueBallon.addImage(blueballonImage);
  blueBallon.scale=0.1;
  blueBallon.lifetime= 150;
  BB.add(blueBallon);
}

function pinkBalloon(){
  
  pinkBallon = createSprite(180,Math.round(random(100,400)),10, 10);
  pinkBallon.velocityX = 3;
  pinkBallon.addImage(pinkballonImage);
  pinkBallon.scale = 1.2;
  pinkBallon.lifetime = 150;
  PB.add(pinkBallon);
}

