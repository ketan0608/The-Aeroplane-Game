class Game{
    constructor(){}

 start(){
       aeroplane = createSprite(300,570,50,50); 
       aeroplane.addImage(aeroplaneImg);
       aeroplane.visible = true;

        if(gameState===0){
           intro = new Intro();
            intro.display();
            aeroplane.visible = false;
          }
       }

play(){
  var planeH = aeroplane.y;
  var planeX = aeroplane.x;
        image(backImg,(displayWidth/2),(displayHeight/2),displayWidth*2,displayHeight);
        fill("green");
        stroke("yellow");
        strokeWeight(6)
        text("Press Arrow Keys to move",400,200); 
   
        if(keyDown("down")){
          aeroplane.velocityY= 4;
          console.log("working");
         
        }
        if(keyDown("right")){
          aeroplane.velocityX= 4;
          console.log("working");
         
        }

        if(keyDown("left")){
          aeroplane.velocityX= -4;
          console.log("working");
        
        }

        if(keyDown("up")){
          aeroplane.velocityY= -4;
          console.log("working");
        }
        text("Aeroplane Height :"+planeH,aeroplane.x+200,aeroplane.y-100)
        text("Distance covered :"+planeX,aeroplane.x-200,aeroplane.y-100)
      
        if(s===0){
          camera.position.y=aeroplane.y
    camera.position.x = aeroplane.x
        }

    if(aeroplane.x >3300){
      clear();
      s=1;
      aeroplane.destroy();
      textSize(20)
      textxtFont(Georgia)
      text("yaaa you won!!",400,50)
     }
    
     if(aeroplane.y>1000){
       clear();
       s=1;
       aeroplane.destroy();
       textSize(20)
       textxtFont(Georgia)
       text("Oh no you lost!!",400,20)
     }

spawnbirds();  
 drawSprites()
}
}

function spawnbirds(){
 var r = Math.round(random(1,5))
if(frameCount%150===0&&r===1){
  bird= createSprite(displayWidth, Math.round(random(300,3500)),20,20)
  bird.addAnimation("flying",birdAni);
  bird.scale = 0.4
  bird.velocityX=-4
}
if(frameCount%150===0&&r===3){
 coin= createSprite(displayWidth, Math.round(random(300,3500)),20,20)
  coin.addImage("COIN image.jpg.png");
  coin.scale = 0.4
  coin.velocityX=-4
}
}