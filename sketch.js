var bottle,bottleImg;
var bgImg;
var Invisibleground;
var flipBottle;
var sofaGroup,sofaImg;
var ground , groundImg;

function preload(){

    bottleImg=loadAnimation("bottle2.png");
    bgImg=loadImage("backgrnd2.jpg");
    flipBottle=loadAnimation("bottle3.png","bottle4.png","bottle5.png","bottle6.png","bottle8.png","bottle7.png","bottle1.png");
    sofaImg=loadImage("sofa.png");
    
    tableImg = loadImage("table.png");
    shelfImg = loadImage("shelf.png");
    fridgeImg = loadImage("fridge.png");
    chairImg = loadImage("chair.png");
    cupboardImg = loadImage("cupboard.png")

    groundImg = loadImage("belt2.jpg");

}

function setup(){

    createCanvas(1200,600);

    Invisibleground=createSprite(600,560,1200,10);
    Invisibleground.visible=false;

    bottle=createSprite(50,500);
    bottle.addAnimation("bottle",bottleImg);
    bottle.addAnimation("flipping",flipBottle);
    bottle.scale=0.3;

    ground=createSprite(600,540);
    ground.addImage(groundImg);
    ground.x=ground.width/2;
    ground.velocityX=-4;
    


    sofaGroup=new Group();
    sofaStandGroup=new Group();
    fridgeGroup=new Group();
    fridgeStandGroup=new Group();
    cupboardGroup=new Group();
    cupboardStandGroup=new Group();
    
    tableGroup=new Group();
    tableStandGroup=new Group();
    shelfGroup=new Group();
    shelfStandGroup=new Group();
    chairGroup=new Group();
    chairStandGroup=new Group();
  
  

    

}

function draw(){

    background(bgImg);

    bottle.collide(Invisibleground);

    if(keyDown("space")){

        bottle.changeAnimation("flipping",flipBottle);
        bottle.velocityY=-12;
      
    }

    bottle.velocityY=bottle.velocityY+0.5;

    if(bottle.velocityY===0){

        bottle.changeAnimation("bottle",bottleImg);

    }

    if(sofaStandGroup.isTouching(bottle)){

        bottle.velocityY=0;

        bottle.changeAnimation("bottle",bottleImg);
}

 if(fridgeStandGroup.isTouching(bottle)){

    bottle.velocityY=0;

    bottle.changeAnimation("bottle",bottleImg);
}

if(cupboardStandGroup.isTouching(bottle)){

  bottle.velocityY=0;

  bottle.changeAnimation("bottle",bottleImg);
}

if(tableStandGroup.isTouching(bottle)){

  bottle.velocityY=0;

  bottle.changeAnimation("bottle",bottleImg);
}


if(chairStandGroup.isTouching(bottle)){

  bottle.velocityY=0;

  bottle.changeAnimation("bottle",bottleImg);
}

if(shelfStandGroup.isTouching(bottle)){

  bottle.velocityY=0;

  bottle.changeAnimation("bottle",bottleImg);
}

 if(ground.x<50){

  ground.x=ground.width/2;
 }



   var Selectobj=Math.round(random(1,6));

   if(frameCount % 200===0){

    if(Selectobj==1){

        spawnSofas();
    }

    else if(Selectobj==2){

        spawnFridge();

    }

    else if(Selectobj==3){

        spawnCupboard();
    }

    else if(Selectobj==4){

        spawnTable();
    }

    else if(Selectobj==5){

        spawnShelf();
    }

    else if(Selectobj==6){

        spawnChair();
    }
        
     }
drawSprites();
}

function spawnSofas() {
    //write code here to spawn the sofa
  
      var sofa = createSprite(1200,450,40,10);
      sofa.addImage(sofaImg);
      sofa.scale = 0.9;
      sofa.velocityX = -5;

      var sofaStand = createSprite(10,460);
      sofaStand.x=sofa.x;
      sofaStand.width=sofa.width-60;
      sofaStand.height=5;

      sofaStand.velocityX=-5;

      //sofaStand.visible=true;
      
       //assign lifetime to the variable
      sofa.lifetime = 240;
      sofaStand.lifetime=240;
      
      //adjust the depth
      sofa.depth = bottle.depth;
      bottle.depth = bottle.depth + 1;
      
      //add each sofa to the group
      sofaGroup.add(sofa);
      sofaStandGroup.add(sofaStand);

      
    }
  
  function spawnFridge() {
    //write code here to spawn the sofa
  
      var fridge = createSprite(1200,320,40,10);
      fridge.addImage(fridgeImg);
      fridge.scale = 0.9;
      fridge.velocityX = -5;

      var fridgeStand = createSprite(10,140);
      fridgeStand.x=fridge.x;
      fridgeStand.width=200;
      fridgeStand.height=5;

      fridgeStand.velocityX=-5;

     // fridgeStand.visible=true;
      
       //assign lifetime to the variable
      fridge.lifetime = 240;
      fridgeStand.lifetime=240;
      
      //adjust the depth
      fridge.depth = bottle.depth;
      bottle.depth = bottle.depth + 1;
      
      //add each sofa to the group
      fridgeGroup.add(fridge);
      fridgeStandGroup.add(fridgeStand);

      
    }
  

  function spawnCupboard() {
    //write code here to spawn the sofa
   
      var cupboard = createSprite(1200,360,40,10);
      cupboard.addImage(cupboardImg);
      cupboard.scale = 0.6;
      cupboard.velocityX = -5;

      var cupboardStand = createSprite(10,170);
      cupboardStand.x=cupboard.x;
      cupboardStand.width=200;
      cupboardStand.height=5;

      cupboardStand.velocityX=-5;

      //cupboardStand.visible=true;
      
       //assign lifetime to the variable
      cupboard.lifetime = 240;
      cupboardStand.lifetime=240;
      
      //adjust the depth
      cupboard.depth = bottle.depth;
      bottle.depth = bottle.depth + 1;
      
      //add each sofa to the group
      cupboardGroup.add(cupboard);
      cupboardStandGroup.add(cupboardStand);

      
    }

  
        function spawnTable() {
            //write code here to spawn the sofa
          
              var table = createSprite(1200,480,40,10);
              table.addImage(tableImg);
              table.scale = 0.5;
              table.velocityX = -5;
        
              var tableStand = createSprite(10,455);
              tableStand.x=table.x;
              tableStand.width=300;
              tableStand.height=5;
        
              tableStand.velocityX=-5;
        
              //tableStand.visible=true;
              
               //assign lifetime to the variable
              table.lifetime = 240;
              tableStand.lifetime=240;
              
              //adjust the depth
              table.depth = bottle.depth;
              bottle.depth = bottle.depth + 1;
              
              //add each sofa to the group
              tableGroup.add(table);
              tableStandGroup.add(tableStand);
        
              
            }

            function spawnShelf() {
                //write code here to spawn the sofa
              
                  var shelf = createSprite(1200,450,40,10);
                  shelf.addImage(shelfImg);
                  shelf.scale = 0.7;
                  shelf.velocityX = -5;
            
                  var shelfStand = createSprite(10,450);
                  shelfStand.x=shelf.x;
                  shelfStand.width=250;
                  shelfStand.height=5;
            
                  shelfStand.velocityX=-5;
            
                  //shelfStand.visible=true;
                  
                   //assign lifetime to the variable
                  shelf.lifetime = 240;
                  shelfStand.lifetime=240;
                  
                  //adjust the depth
                  shelf.depth = bottle.depth;
                  bottle.depth = bottle.depth + 1;
                  
                  //add each sofa to the group
                  shelfGroup.add(shelf);
                  shelfStandGroup.add(shelfStand);
            
                  
                }

                function spawnChair() {
                    //write code here to spawn the sofa
                  
                var chair = createSprite(1200,450,40,10);
                chair.addImage(chairImg);
                      chair.scale = 0.5;
                      chair.velocityX = -5;
                
                      var chairStand = createSprite(10,460);
                      chairStand.x=chair.x;
                      chairStand.width=150;
                      chairStand.height=5;
                
                      chairStand.velocityX=-5;
                
                      //chairStand.visible=true;
                      
                       //assign lifetime to the variable
                      chair.lifetime = 240;
                      chairStand.lifetime=240;
                      
                      //adjust the depth
                      chair.depth = bottle.depth;
                      bottle.depth = bottle.depth + 1;
                      
                      //add each sofa to the group
                      chairGroup.add(chair);
                      chairStandGroup.add(chairStand);
                
                      
                    }

    
  
  
  
  
  