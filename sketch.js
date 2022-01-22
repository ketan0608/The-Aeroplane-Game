var aeroplane,aeroplaneImg;
var story,restart,play,Menu;
var backImg,backImg;
var gameState = 0;
var aeroplaneState = 0;
var speed = 0;
var bg;
var intro;
var game;
var canvas;
var s = 0;

function preload(){
aeroplaneImg = loadImage("Images/Aeroplane image.png")
backImg = loadImage("Images/Airportimage1.png")
backImg2 = loadImage("Images/Background image.jpg")
birdAni = loadAnimation("Images/img1.jpeg","Images/img2.jpeg","Images/img3.jpeg",
"Images/img4.jpeg","Images/img5.jpeg","Images/img6.jpeg")
}

function setup() {
 canvas =  createCanvas(displayWidth-100,displayHeight-100);
 background(backImg2 );
  game = new Game();
 game.start();
}

function draw(){
 
  if(gameState ===1){
    clear()
    game.play();
   }
drawSprites();
}