var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg,orangeImg,redImg,greenImg;
var folhas;


function preload(){
  gardenImg = loadImage("garden.png");

  rabbitImg = loadImage("rabbit.png");

  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
  greenImg = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden = createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.addImage(rabbitImg);
rabbit.scale =0.09;
}

function draw() {
  background(0);

  if(folhas && rabbit.isTouching(folhas))
  {
    folhas.destroy();
  }

  rabbit.x = mouseX

  edges= createEdgeSprites();
  rabbit.collide(edges);

  criarFolhas();

  drawSprites();
  
}

function criarFolhas(){
  var pos = round(random(0, 400));
  var r = round(random(1, 4));

  if (frameCount % 70 === 0){
  folhas = createSprite(pos,0,20,20);
  folhas.velocityY = 6;
  folhas.scale = 0.09;
  
  switch(r){
      case 1: folhas.addImage(appleImg);
       break;
      case 2: folhas.addImage(redImg);
        break;
      case 3: folhas.addImage(orangeImg);
       break;
      case 4: folhas.addImage(greenImg);
        break;
      default: break;
  }
}
}
