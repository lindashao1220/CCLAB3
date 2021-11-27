let mySound;
let x;
let speed = 10;


function preload(){
  mySound = loadSound("assets/sounds/song.mp3")
}

function setup(){
  let canvas = createCanvas(500, 500);
  canvas.mousePressed(userStartAudio);

};


function draw(){
  background(0);



  let rateValue = map(mouseX, 0, width, 1, 100);
  mySound.rate(rateValue);


};

function mousePressed(){
  mySound.play();
}
