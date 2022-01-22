class Intro{
    constructor(){}

    display(){
         var play = createButton("PLAY");
         play.position(450,300);
         
        var  story = createButton("STORY");
         story.position(450,200);

      var  menu = createButton("Main Menu");
      menu.position(100,500);

      var restart = createButton("RESTART");
      restart.position(displayWidth/2+200,displayHeight/2-300)

        play.mousePressed(function(){
            play.hide();
            story.hide();
            menu.hide();
           gameState=1;
            game.start();
        })

        story.mousePressed(function(){
            play.hide();
            story.hide();
            stroke(20)
              textSize(20)
             fill("yellow")
              textFont("Georgia")
              text("Dear Pilot,",10,30)
              text("This is to inform you that your application have been appcepted by our company and your flight from Whales to 6,600 kilometers have",50,100)
              text("been accepted but we are sorry to inform you that you cannot fly the plane as you are not quallified as the scores suggest instead",50,130)
              text("you will we guiding it from a lens but you may see double objects as the lens is partially broken and you may even see white background",50,160)
              text("and that will be a alarm that can let you know that aeroplane is too high up in the air as it will be flying only a short distance it",50,190)
              text("will be a short communication system but try not to become the prey of the birds as they may damage the plane's engine and it will",50,220)
              text("dissapear for you but will be crashing if it reaches too low height it may also dissapear so be active. :D",50,250)
              text("The negative values on the height sector shows that the aeroplane is going higher,on the other hand positive values shows that its gonna",50,270)
              text("if the values exceeds 1000.",50,300)
              text("From,",10,310)
              text("The Company Owner,KETAN",10,380)
        })

        menu.mousePressed(function(){
        clear();
        background(backImg)
        play.show();
        story.show();
        })

       restart.mousePressed(function(){
            clear();
            background(backImg)
            play.show();
            story.show();
            gameState=0;
            menu.show();
            aeroplane.visible = false
        })
     } 
}