class p1 extends paceclass {
    constructor(x, y){
      super(x,y,50,50);
      this.image = loadImage("images/base enemy 1.png");
    }
  
   display(){

       push();
       image(this.image, this.body.position.x, this.body.position.y, 50, 50);
       pop();
     }

  

    
  
  
  
  };