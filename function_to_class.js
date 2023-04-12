function setup() {
  createCanvas(400, 400);
  
  speedX = 1
  speedY = 4
   rocK1 = new Rock(0,3,.3) 
}

function draw() {
  background("black");
  
  rocK1.show();
  rocK1.move();
  
  
  
  

  
}

class Rock {
  constructor(x, y, s){
		this.x = x;
		this.y = y;
        this.s = s;
		
	}
  move() {
    this.x = this.x + speedX
    this.y = this.y + speedY
    
    if(this.x >= 330 || this.x <= -20){
      speedX = speedX * -1
    }
    if(this.y >= 330 || this.y <= -20){
      speedY = speedY * -1
  }
  }

  show(){
    push();
    translate(this.x,this.y,)
    scale(this.s)
   fill ('silver')
 ellipse (110,100,200,150);
  ellipse(110,60,55,55);
  ellipse(110, 60,30,30);
  pop();
 }
}
