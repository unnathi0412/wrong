class Dustbin {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.width = 200;
      this.height = 100;
      this.wallthickness = 20;
      this.angle = 0;


      this.bottombody = Bodies.rectangle(x,y,this.width, this.wallthickness, options);
      this.leftbody = Bodies.rectangle(x - this.width /2, y - this.height/2, this.wallthickness, this.height, options);
      Matter.Body.setAngle(this.leftbody, this.angle);
      this.rightbody = Bodies.rectangle(x + this.width /2, y - this.height/2, this.wallthickness, this.height, options);
      Matter.Body.setAngle(this.rightbody, -1 * this.angle);

      this.image = loadImage("sprites/dustbingreen.png");


      World.add(world, this.bottombody);
      World.add(world, this.leftbody);
      World.add(world, this.rightbody);

    }
    display(){
      var posbottom =this.bottombody.position;
      var posleft =this.leftbody.position;
      var posright =this.rightbody.position;
      push()
      translate(posleft.x, posleft.y);
      angleMode(RADIANS); 
      rotate(this.angle);
      imageMode(CENTER);
      fill(255);
      //rect(0,0,this.wallthickness, this.height);

      pop()

      push()
      translate(posright.x, posright.y);
      angleMode(RADIANS); 
      rotate(-1* this.angle);
      rectMode(CENTER);
      fill(255);
      //rect(0,0,this.wallthickness, this.height);
      pop()

      push()
      translate(posbottom.x, posbottom.y);
      angleMode(RADIANS); 
      imageMode(CENTER);
      fill(255);
      //rect(0,0,this.width, this.wallthickness);
      image(this.image,0,-this.height / 2.5 ,this.width,this.height);

      pop()
    }
}

