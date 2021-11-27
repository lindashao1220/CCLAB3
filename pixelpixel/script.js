let img;
let cam;
function preload(){
  img = createImage(640, 480);
}
function setup() {
  createCanvas(640,480);
  // img = createImage(600, 400); // a blank image
  cam = createCapture(VIDEO);
  // cam.hide();
}
function draw() {
  background("pink");
  //access pixels and load pixels
  img.loadPixels();
  cam.loadPixels();
  //loop over each ROW!
  for(let y=0; y<480; y++){
    for(let x = 0; x < 640; x++){
      // using the formula
      let index = (y * width + x)*4;
      // get colors from cam pixels;. Read value from Camera pixel array
      let r = cam.pixels[index + 0];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2];
      // let a = cam.pixels[index + 3]; cameras do not do transparency
      img.pixels[index + 0] = r; // R
      img.pixels[index + 1] = 100; // G
      img.pixels[index + 2] = b; // B
      img.pixels[index + 3] = 255; // A
    }
  }
  // for (let i = 0; i < img.pixels.length; i += 4) {
  //   img.pixels[i + 0] = random(255); // R
  //   img.pixels[i + 1] = random(255); // G
  //   img.pixels[i + 2] = random(255); // B
  //   img.pixels[i + 3] = 255; // A
  // }
  img.updatePixels();
  image(img, 0, 0);
}
