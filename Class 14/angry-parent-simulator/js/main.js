document.querySelector("#yell").addEventListener("click", run);
document.querySelector("#clearTimer").addEventListener("click", clearTimer);

let timerID = null;
let timerCount = 0;

function run() {
  if (timerID !== null) {
    clearTimeout(timerID);
  }

  const fName = document.querySelector("#firstName").value;
  const fMidName = document.querySelector("#firstMiddle").value;
  const lMidName = document.querySelector("#lastMiddle").value;
  const lName = document.querySelector("#lastName").value;

  // document.querySelector('#placeToYell').innerText = fName + ' ' + fMidName + ' ' + ' ' + lMidName + ' ' + lName

  //Add what you should be doing - conditionals go here

  document.querySelector(
    "#placeToYell"
  ).innerText = `${fName} ${fMidName} ${lMidName} ${lName}`;

  resetInputs();

  timerID = setTimeout(() => {
    document.querySelector("#placeToYell").innerText = "";
    timerCount--;
  }, 6000);
  timerCount++;
}

function resetInputs() {
  document.querySelector("#firstName").value = "";
  document.querySelector("#firstMiddle").value = "";
  document.querySelector("#lastMiddle").value = "";
  document.querySelector("#lastName").value = "";
}

function clearTimer() {
  clearTimeout(timerID);
}

// const synth = window.speechSynthesis;
// document.querySelector('#yell').addEventListener('click', run)
//
// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value
//
//   const yellText =  `${fName} ${fMidName} ${lMidName} ${lName}`
//
//   document.querySelector('#placeToYell').innerText = yellText
//
//   let yellThis = new SpeechSynthesisUtterance(yellText);
//
//   synth.speak(yellThis);
// }
