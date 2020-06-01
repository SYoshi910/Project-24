class Ground {
    constructor() {
      var options = {
          isStatic:true,
          restitution:0.8,
          friction:1,
          density:1.0
      }
      this.body = Bodies.rectangle(width/2,height-25,width,50,options);
      this.width = width;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      rectMode(CENTER);
      fill("yellow");
      
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rect(0,0, this.width, this.height);
      pop();
      
    }
  };