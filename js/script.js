const keyItems = document.querySelectorAll('.key');

const sampledPianoNotes = {
  do: 'do.mp3',
  dodiesis: 'dodiesis.mp3',
  re: 're.mp3',
  rediesis: 'rediesis.mp3',
  mi: 'mi.mp3',
  fa: 'fa.mp3',
  fadiesis: 'fadiesis.mp3',
  sol: 'sol.mp3',
  soldiesis: 'soldiesis.mp3',
  la: 'la.mp3',
  ladiesis: 'ladiesis.mp3',
  si: 'si.mp3'
}

let clickEvent;
if('ontouchend' in document.documentElement) {
    clickEvent = 'touchend'; 
 } else {
    clickEvent = 'click';
 }

keyItems.forEach(function (keyItem) {
  keyItem.addEventListener(clickEvent, function() {
    const key = keyItem.id;
    playNote(key);
  })  
})

function playNote(key) {
  const note = sampledPianoNotes[key];
  const audio = new Audio('./samples/' + note);
  audio.currentTime = 0;
  audio.play();
}