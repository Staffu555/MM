var startingNote, herosama, en1, en2, en3, en4, background, cc,score;
var heroimg, en1img, en2img, en3img, en4img,bgimg;
var p11,p22,p33;


function preload(){
  heroimg = loadImage("images/my own game hero.png");
  bgimg = loadImage("images/my own game bg.jpeg");
}

function setup(){
  
  createCanvas(800,800);
score =0;
herosama = createSprite("30,30,400,400");
herosama.addImage(heroimg);
herosama.scale = 0.25;
//text("SURVIVE")
//gameOver.depth = gameOver.depth+10;  
//gameOver.visible = false;  

}

function draw() {

  background('0');
  //if(gamestate == 1){
  if(keyIsDown(UP_ARROW)){
    herosama.y -= 5;
  }
  if(keyIsDown(DOWN_ARROW)){
    herosama.y += 5;
  }
  if(keyIsDown(RIGHT_ARROW)){
    herosama.x += 5;
  }
  if(keyIsDown(LEFT_ARROW)){
    herosama.x -= 5;
  }
  createp1();
  createp2();
  createp3();
  if (p1grp.isTouching(herosama)) {
   p1grp.destroyEach();
  }
    
  if (p2grp.isTouching(herosama)) {
   p2grp.destroyEach();
  }


  if (p3grp.isTouching(herosama)) {
   p3grp.get(t).destroy();
  }
  drawSprites();
  textSize(20);
  fill(255);

}

