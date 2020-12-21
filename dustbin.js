class Dustbin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/dustbingreen.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //rectMode(CENTER);
      //fill("yellow");
      //rect(pos.x, pos.y, 10, this.height);
      //rect(pos.x + this.width, pos.y, 10, this.height);
      //rect(pos.x+20 + this.height/2 , pos.y-30+this.width/2 , this.width, 10);
      var g1 = new Ground(this.x, this.y, 10, this.height);
      var g2 = new Ground(this.x + this.width, this.y, 10, this.height);
      var g3 = new Ground(this.x+20 + this.height/2 , this.y-30+this.width/2 , this.width, 10);
      g1.display();
      g2.display();
      g3.display();
      image(this.image, this.x, this.y-this.height/2, this.width, this.height);
    }
  };