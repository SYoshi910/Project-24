class Paper {
    constructor(x, y, radius) {
      var options = {
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      ellipseMode(RADIUS);
      fill("orange");
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      ellipse(0,0, this.radius);
      pop();
      
    }
  };