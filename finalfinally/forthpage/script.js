let n=1000;
let particles=[];
let angle = 0;
let x9 = 0;
let y9= 0;
let speed=3;
let r = 80;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i=0;i<n;i++){
    let m=random(-1,1);
    let x=random(width);
    let y=random(height);
    particles.push(new Particle(m,x,y));
  }
  textSize(27);
}

function draw() {
  //mySound.play();
  background(0);
  push();
  stroke("black");

//bed
push();
noStroke();
fill("lightblue")
triangle(450,windowHeight-40,725,windowHeight-40,725,windowHeight-126);
fill(245, 227, 193);
rect(725,windowHeight-50,80,10);
pop();
  push();
  noStroke();
  fill("blue");
  rect(340,windowHeight-40,windowWidth-675,50);
  pop();
  push();
  stroke("white");
  strokeWeight(5);
  line(300,windowHeight-70,1150,windowHeight-70);
  line(300,windowHeight-70,300,windowHeight);
  line(1150,windowHeight-70,1150,windowHeight);
  pop();

  line(350,windowHeight-70,350,windowHeight);
  line(400,windowHeight-70,400,windowHeight);
  line(450,windowHeight-70,450,windowHeight);
  line(500,windowHeight-70,500,windowHeight);
  line(550,windowHeight-70,550,windowHeight);
  line(600,windowHeight-70,600,windowHeight);
  line(650,windowHeight-70,650,windowHeight);
  line(700,windowHeight-70,700,windowHeight);
  line(750,windowHeight-70,750,windowHeight);
  line(800,windowHeight-70,800,windowHeight);
  line(850,windowHeight-70,850,windowHeight);
  line(900,windowHeight-70,900,windowHeight);
  line(950,windowHeight-70,950,windowHeight);
  line(1000,windowHeight-70,1000,windowHeight);
  line(1050,windowHeight-70,1050,windowHeight);
  line(1100,windowHeight-70,1100,windowHeight);

//window
  push();
  fill(139, 177, 252 ,200);
  rectMode(CENTER);
  rect(width/2,height/2-200,200,200)
  pop();

  push();
  noStroke();
  fill(255, 174, 0)
  rect(width/2-100,height/2-210,200,10);
  rect(width/2-5,height/2-300,10,200);
  pop();

  pop();

//ventilator
  push();
  angleMode(DEGREES);
  rectMode(CENTER);
  //line
  stroke("blue");
  strokeWeight(7);
  line(300,500,300,712);
  noStroke();

  //square spin center
  push();
  translate(300,500);
  rotate(angle);
  fill(255);
  stroke(255);
  noFill();
  circle(0,0,30)
  rect (x9^x9,y9^y9,30,30);
  pop();

  //green triangle bottom right
  translate(300,500)
  rotate(-angle);
  fill("white")
  triangle(0,0,90,110,80,10)

  //orange triangle bottom left
  fill("lightblue")
  triangle(0,0,-40,80,-125,40)

  //green triangle top left
  fill("white")
  scale(-1,-1)
  triangle(0,0,90,110,80,10)

   //orange triangle bottom left
  fill("lightblue")
  triangle(0,0,-40,80,-125,40)

  angle = angle + 4;

  x9 = x9 - speed;
  y9= y9 + speed;
  pop();


  strokeWeight(2);
   noStroke();
   fill(247, 235, 205);
   circle(450,720,r);

  for(let i=0;i<particles.length;i++){
    particles[i].update();
    particles[i].display();
  }
  fill(7,9,100);
   text('click me',400,725);

   push();
   fill("white");
   stroke("white")
   rect(mouseX-3,mouseY-40,5,80);
   rect(mouseX-40,mouseY,80,5);
   strokeWeight(7);
   stroke("white");
   line(mouseX-30,mouseY-30,mouseX+30, mouseY+30);
   line(mouseX+30,mouseY-30,mouseX-30, mouseY+30);
   noStroke();
   fill("red")
   circle(mouseX,mouseY,50);
   pop();
}

function mousePressed() {
  d = dist(mouseX, mouseY,450,700);
  if (d < r / 2) {
    window.open('fifthpage');
  }
}

class Particle{
  constructor(m,x,y){
    this.m=m;
    this.x=x;
    this.y=y;
    this.vy = 0;
    this.vy1=random(-5,-1);
    this.vy2=random(1,5);
    this.d=0;

  }

  update(){
    this.d=mouseY-this.y;
    if(this.d<0){
      this.vy=this.vy2;
      this.vy*=0.09;
    }
    else if(this.d>=0){
      this.vy=this.vy1;
      this.vy*=0.09;
    }
    this.y+=this.vy;
  }

  display(){
    if(this.m<0){
      stroke(250, 250, 2);
    }
    else {
      stroke(250, 250, 232);
    }
    ellipse(this.x,this.y,1,1);
  }
}
