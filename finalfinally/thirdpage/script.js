let img;
let cam;
let mySound;
let x, y;
let rightLoc = false;
let img1 = document.getElementById("img1");
function preload(){
  img = createImage(640, 480);
  mySound = loadSound("bebe.mp3")
}
function setup() {
  let canvas = createCanvas(640,480);
  canvas.parent("canvasContainer");
  cam = createCapture(VIDEO);
  cam.hide();
  canvas.mousePressed(userStartAudio);
}
function draw() {
  background("white");
  img.loadPixels();
  cam.loadPixels();
  for(let y=0; y<480; y++){
    for(let x = 0; x < 640; x++){
      let index = (y * width + x)*4;
      // get colors from cam pixels;. Read value from Camera pixel array
      let r = cam.pixels[index + 0];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2];
      // let a = cam.pixels[index + 3]; cameras do not do transparency
      img.pixels[index + 0] = r; // R
      img.pixels[index + 1] = 90; // G
      img.pixels[index + 2] = b; // B
      img.pixels[index + 3] = 250; // A
    }
    }
  img.updatePixels();
  image(img, 0, 0);
}
function movingSensor(event){
    var x = event.clientX;
     var y = event.clientY;
     img1.style.left = x + "px";
     img1.style.top = y + "px";
     img1.style.transition = "all 2s";
     console.log(img1.style);
     rightLoc = true;
     // image(img,x,y);
    if(rightLoc == true){
    mySound.play();
     setTimeout(back, 2000);
  }
function back(event){
    let x3 = 0;
    let y3 = 0;
    img1.style.transition = "all 4s";
    img1.style.left = x3 + "px";
    img1.style.top = y3 + "px";
    console.log("backSensor was triggered");
  }
  rightLoc = false;
  soundTriggered = false;
}
 document.body.addEventListener('click', movingSensor);
