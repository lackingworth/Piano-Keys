const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

let keyPlay = (event) => {
  (event.target).style.backgroundColor = 'red';
};
let keyReturn = (event) => {
  (event.target).style.backgroundColor = '';
}

let play = (note) => {
  note.addEventListener('mousedown', keyPlay);
  note.addEventListener('mouseup', keyReturn);
};

notes.forEach(play);

let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

let lastLyric = document.getElementById('column-optional');

nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

let letterNoteFive = document.getElementById('letter-note-five');
let letterNoteSix = document.getElementById('letter-note-six');
let firstButtonClick = () => {
  nextTwo.hidden = false;
  nextOne.hidden = true;
  letterNoteFive.innerHTML = 'D';
  letterNoteSix.innerHTML = 'C';
};
nextOne.onclick = firstButtonClick;

let wordFive = document.getElementById('word-five');
let wordSix = document.getElementById('word-six');
let letterNoteThree = document.getElementById('letter-note-three');
let letterNoteFour = document.getElementById('letter-note-four');
nextTwo.onclick = function() {
  nextThree.hidden = false;
  nextTwo.hidden = true;
  wordFive.innerHTML = 'DEAR';
  wordSix.innerHTML = 'FRI-';
  lastLyric.style.display = 'inline-block';
  letterNoteThree.innerHTML = 'G';
  letterNoteFour.innerHTML = 'E';
  letterNoteFive.innerHTML = 'C';
  letterNoteSix.innerHTML = 'B';
};

nextThree.onclick = function() {
  startOver.hidden = false;
  nextThree.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('word-three').innerHTML = 'BIRTH';
  document.getElementById('word-four').innerHTML = 'DAY';
  wordFive.innerHTML = 'TO';
  wordSix.innerHTML = 'YOU!';
  document.getElementById('letter-note-one').innerHTML = 'F';
  document.getElementById('letter-note-two').innerHTML = 'F';
  letterNoteThree.innerHTML = 'E';
  letterNoteFour.innerHTML = 'C';
  letterNoteFive.innerHTML = 'D';
  letterNoteSix.innerHTML = 'C';
  lastLyric.style.display = 'none';
};

startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
   document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}