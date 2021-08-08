var playButton,playButtonIng;
var instruction,instructionImg;
var homeButton,homeImage;
var character1select,ch1ing,character2select,ch2img;


var HOME = 1
var SelectCh = 2
var STAGE = 3
var PLAY = 4
var RESET = 5
var INSTRUCTION = 6
var gameState = HOME


function preload(){
  playButtonIng = loadAnimation('play.png')
  instructionImg = loadAnimation('instruction.jpg')
  homeImage = loadAnimation('homeButton.jpg')
  ch1ing = loadAnimation('chooseCh.jpg')
  ch2img = loadAnimation('chooseCh2.jpg')
 
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  instruction = createSprite(windowWidth/2,windowHeight/2+270);instruction.addAnimation('instruction',instructionImg)
  instruction.visible = false

  playButton = createSprite(windowWidth/2-20,windowHeight/2+150); playButton.addAnimation('playButton',playButtonIng)
  playButton.visible = false

  homeButton = createSprite(windowWidth/40,windowHeight/20);homeButton.addAnimation('homeImage',homeImage)
  homeButton.visible = false

  character1select = createSprite(windowWidth/5,windowHeight/3.5);
  character1select.visible = true

  character2select = createSprite(windowWidth*0.79,windowHeight/3.5);
  character2select.visible = true


  invisibleGround = createSprite(100,600,10000,20);
  invisibleGround.visible = false
  invisibleGround.debug = true

  
  
}

function draw() { 
  background(rgb(0, 0, 0, 0.10))

  if(gameState === HOME){
    Homescreen()
  }

  if(gameState === INSTRUCTION){
    instructionscreen()
  }

  if(mousePressedOver(homeButton)){
    gameState = HOME
    homeButton.visible = false

  }
  
  drawSprites();
  createEdgeSprites();
  
}
 

function Homescreen(){
  playButton.visible = true
  instruction.visible = true
  if(mousePressedOver(instruction)){
     gameState = INSTRUCTION
  }

  

}

function instructionscreen(){
  playButton.visible = false
  instruction.visible = false
  homeButton.visible = true
  homeButton.x = windowWidth/2
  homeButton.y = windowHeight-150
  homeButton.scale = 2
  //title
    textSize(50)
    fill('white')
    text('How To Play',windowWidth/3+100,windowHeight/10)
  //subtitle or descrition
    textSize(25)
    fill('cyan')
    text('ARROW KEYS TO MOVE FOR PLAYER 1',windowWidth/50,windowHeight/5)

}


