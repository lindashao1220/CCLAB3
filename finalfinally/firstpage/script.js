// let button;
// function setup() {
//   button = createButton('click me');
//   button.position(700,400);
//   button.mousePressed(href="thirdpage/index.html");
// }
//
// function draw(){
//   if (mouseIsPressed){
//     button.show();
//   } else {
//     button.hide();
//   }
// }



function showButton() {
  let elem = document.getElementById('hiddenButton');
  console.log(elem);
  elem.style.visibility = 'visible';
}

setTimeout(showButton, 3000);
