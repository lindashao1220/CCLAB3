let img;
let cam;
let mic;
function preload(){
  img = createImage(640, 480);

}
function setup() {
  let canvas = createCanvas(640,480);
  canvas.parent("canvasContainer");
  cam = createCapture(VIDEO);
  cam.hide();
  canvas.mousePressed(userStartAudio);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background("white");
  img.loadPixels();
  cam.loadPixels();
  let level = mic.getLevel();
  let getLarger = map(level,0,0.04,3,1);
  let gridSize = 12;
  let Size = gridSize + getLarger;
  for(let y=0; y<480; y+= gridSize){
    for(let x = 0; x < 640; x+= gridSize){
      let index = (y * width + x)*4;
      let r = cam.pixels[index + 0];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2]*getLarger;
    fill(r,g,b);
    circle(x,y,Size,Size);
    }
  }
  img.updatePixels();
  image(img, 0, 0);
}
