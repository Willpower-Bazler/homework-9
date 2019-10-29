function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  //background
  background(220);
  
  //ears
  fill(255,200,120);
  ellipse(100,200,20,40);
  ellipse(300,200,20,40);
  
  //face
  circle(200,200,200);
  
  //eyes
  fill(255,255,255);
  ellipse(160,200,40,20);
  ellipse(240,200,40,20);
  fill(0,0,0);
  circle(160,200,20);
  circle(240,200,20);
  
  //mouth
  fill(255,150,180);
  rect(160,240,50,10);
  
  //hat
  fill(0,255,0);
  triangle(100, 150, 200, 50, 300, 150);
  
  //eyebrows and dimple
  line(135, 190, 185, 175);
  line(215, 175, 265, 190);
  point(225, 240);
  
  //text
  fill(0,0,0);
  text('I hAvE bIg BrAiN', 150, 130);
  
  fill(0,0,0);
  text('-Will Bazler', 50, 350);
  
 
  
  
  
}