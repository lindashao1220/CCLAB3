let img;

function preload(){
  img = loadImage('2.jpg');
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  background(255);
  textSize(60);
}

function draw(){
image(img,0,0);
img.resize(windowWidth,windowHeight);
  for(let x=0;x<windowWidth;x+=18){
     for(let y=0;y<windowHeight;y+=22){
       let clr=img.get(x,y);
       let r = red(clr);
       let g = green(clr);
       let b = blue(clr);

       if(r==255&&g==255&&b==255){
      noStroke();
      fill("red");
      circle(x,y,random(5,10));
    }
     }
   }
   fill("black");
     text("VIRUSES   ARE    EVERYWHERE ! ! !",200,300);
     text("There is no escape!!!",420,400)
}

function showButton() {
  let elem = document.getElementById('hiddenButton');
  console.log(elem);
  elem.style.visibility = 'visible';

}
setTimeout(showButton, 3000);
