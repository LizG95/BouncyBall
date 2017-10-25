  var speed = 5
  var x = 10;
  var y = 10;
  var xDirection = 1;
  var yDirection = -1;
  
  function setup() {
  
  createCanvas(800,800)
  x = random(0, width);
  y = random(0, height);
  
}

function draw() {
   background(144,241,255);
   fill(0);
  ellipse(x,y,150,150);
  
  
  if(x > width || x < 0){
    xDirection = xDirection * -1;
  }
  
  if(y > height || y < 0){
    yDirection = yDirection * -1;
  }
  

  x = x + speed * xDirection;
  y = y + speed * yDirection;
}