function say(what){
  //select an HTML element
  // let elem = document.getElementById('lyrics');

  //create a new paragragh element
  let newElem = document.createElement('div');
  document.body.append.Child(newElem)

  newElem.innerHTML = what;

  //add new paragragh to the lyrics div
  elem.qppendChild(newElem);
}

function makeCircle(){
  let elem = document.getElementById('circle');
  elem.style.borderRadius = '50px';
}
function makeRect(){
  let elem = document.getElementById('circle');
  elem.style.borderRadius='0px';
}

let circleButton = document.getElementById('circleButton');
circleButton.addEventListener('click',makeCircle);

let rectButton = document.getElementById('rectButton');
rectButton.addEventListener('click',makeRect);
