var startingNote, herosama, en1, en2, en3, en4, background, cc,score;
var heroimg, en1img, en2img, en3img, en4img,bgimg;
var p11,p22,p33;
var p1grp, p2grp, p3grp;

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
p1grp=new Group();
p2grp=new Group();
p3grp=new Group();

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

function createp3() {
  if (World.frameCount % 250 == 0) {
  p33 = new p3(Math.round(rand(200,600)),800);

  p33.scale=0.75;
  p33.velocityY = -3;
  p33.lifetime = 1200;
  p3grp.add(p33);
  }
}

function createp1() {
  if (World.frameCount % 80 == 0) {
  p11 = new p1(Math.round(rand(200,600)),800);


  p11.scale=0.75;
  p11.velocityY = -3;
  p11.lifetime = 1200;
  p1grp.add(p11);
}
}

function createp2() {
  if (World.frameCount % 150 == 0) {
    p22 = new p2(Math.round(rand(200,600)),800);
  
  
    p22.scale=0.75;
    p22.velocityY = -3;
    p22.lifetime = 1200;
    p2grp.add(p22);
  }
}