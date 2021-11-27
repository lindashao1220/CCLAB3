let sliderBgR;
let sliderBgG;
let sliderBgB;
let dancer;
let dancer1;
let dancer2;
let dancer3;
let dancer4;

let checkboxRect;
let checkboxRect2;


function setup() {
  let canvas = createCanvas(1900,700);
  canvas.parent("canvasContainer");
  dancer = new LindaDancer(width/2,height/2);
  dancer1 = new LindaDancer(width/3,height/3);
  dancer2 = new LindaDancer(3*width/4, height/5);
  dancer3 = new LindaDancer(width/4,2*height/3);
  dancer4 = new LindaDancer(4*width/5,4*height/5);

  checkboxRect = document.getElementById('checkbox-delete');
  checkboxRect2 = document.getElementById('checkbox-rect');


  sliderBgR = document.getElementById('bg-r');
  sliderBgG = document.getElementById('bg-g');
  sliderBgB = document.getElementById('bg-b');
}

function draw() {
  let r = sliderBgR.value;
  let g = sliderBgG.value;
  let b = sliderBgB.value;
  background(r, g, b);

 let sliderxVal = robotxPositionSlider.value;
 let x = map(sliderxVal,0,100,0,width);

 let slideryVal = robotyPositionSlider.value;
 let y = map(slideryVal,0,300,0,width);

 let sizeSliderVal = robotSizeSlider.value;
 let size = map(sizeSliderVal, 0,100, 0, width/7);

dancer.update();
dancer.display();

dancer1.update();
dancer1.display();

dancer2.update();
dancer2.display();

dancer3.update();
dancer3.display();

dancer4.update();
dancer4.display();

if (checkboxRect.checked) {
noStroke();
push();
fill(255,100);
circle(x/2,y/5,size);
circle(x,y/2,0.3*size);
circle(x,y,size/2);
circle(2*x,y,2*size);
circle(1.5*x,y/6,0.5*size);
circle(x/5,2*y,size);
circle(x/4,y,size*2);
circle(2*x,y,2*size);
circle(1.5*x,y*2,size);
pop();

}

if (checkboxRect2.checked) {
  noStroke();
  push();
  fill(255,100);
  rect(x/2,y/5,size,size);
  rect(x,y/2,0.3*size,0.3*size);
  rect(x,y,size/2,size/2);
  rect(2*x,y,2*size,2*size);
  rect(1.5*x,y/6,0.5*size,0.5*size);
  rect(x/5,2*y,size,size);
  rect(x/4,y,size*2,size*2);
  rect(2*x,y,2*size,2*size);
  rect(1.5*x,y*2,size,size);
  pop();
}
}

class LindaDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
  }
  update() {
    this.x = this.x;
    this.y = this.y + sin(frameCount * 0.5);
    this.Yspeed = random(-2, 2);
    this.y += this.Yspeed;
  }
  display() {
    if (mouseIsPressed){
      push();
    translate(this.x, this.y);
    rectMode(CENTER);
      rotate(frameCount*0.1)
    noStroke();
    fill("green");
    circle(0, 0, 50);
    fill(255);
    rect(0, 0, 10, 10);
    fill("springgreen");
    circle(0, 25, 30);
    rect(0, 45, 30, 40);
    circle(0, 65, 30);
    fill("white");

    circle(0, 70, 20);
    rect(0, 85, 20, 30);
    circle(0, 100, 20);

    circle(-15, 20, 20);

    circle(15, 20, 20);

    pop();

    push();

    translate(this.x + 15, this.y + 20);
    scale(-1, 1);
    rotate(-frameCount * 0.2);
    rect(0, 0, 10, 40);
    pop();
    push();
    //
    translate(this.x - 15, this.y + 20);
    rotate(frameCount * 0.1);
    rect(0, 0, 10, 40);
    pop();
    }

      else{
    push();
    translate(this.x, this.y);
    rectMode(CENTER);
    noStroke();
    fill("purple");
    circle(0, 0, 50);
    fill(255);
    rect(0, 0, 10, 10);
    fill("violet");
    circle(0, 25, 30);
    rect(0, 45, 30, 40);
    circle(0, 65, 30);
    fill("white");

    circle(0, 70, 20);
    rect(0, 85, 20, 30);
    circle(0, 100, 20);

    circle(-15, 20, 20);

    circle(15, 20, 20);

    pop();

    push();
    //
    translate(this.x + 15, this.y + 20);
    scale(-1, 1);
    rotate(frameCount * 0.1);
    rect(0, 0, 10, 40);
    pop();
    push();
    translate(this.x - 15, this.y + 20);
    rotate(-frameCount * 0.2);
    rect(0, 0, 10, 40);
    pop();

    }
  }

}
