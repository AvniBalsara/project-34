class Monster  {
    constructor(x, y,r) {
      var options = {
  
          'frictionAir':0.10,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, r, options);
      
      this.r = r;
      this.image=loadImage('Monster-01.png');
      World.add(world, this.body);
    }
    display(){
      push();
      translate(this.body.position.x, this.body.position.y);
      ellipse( 0, 0, this.r);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width,this.height);
      pop();
    }
      
  }
  