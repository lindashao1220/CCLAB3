// first things first:
// SELECT slider


let circlePosSlider = document.getElementById("circlePositionSlider");
let circleSizeSlider = document.getElementById("circleSizeSlider");


function setup(){
  //....
  let canvas = createCanvas(200, 200);
  canvas.parent("canvasContainer");

  background(0);
}

function draw(){
  background(0);
  fill("lightyellow");

  // get value from slider
  // from: https://www.codegrepper.com/code-examples/javascript/how+to+get+range+slider+value+in+javascript
  let sliderVal = circlePosSlider.value;
  console.log(sliderVal);
  // map slider val
  let x = map(sliderVal, 0, 100, 0, width);

  let sizeSliderVal = circleSizeSlider.value;
  let size = map(sizeSliderVal, 0, 100, 0, width*2);

  circle(x, height/2, size);

}
