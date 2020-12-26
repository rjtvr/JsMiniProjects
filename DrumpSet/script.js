function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip it if its not a transform
    // console.log(e.propertyName);	
    // e.target.classList.remove('playing');
    this.classList.remove('playing');
}

function playSound(e) {
    // console.log(e.keyCode);
    const AUDIO = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const KEY = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // console.log(AUDIO);

    if (!AUDIO) return; // stop the function from running all together 

    KEY.classList.add("playing");
    AUDIO.currentTime = 0; //rewind the audio to start
    AUDIO.play();

    // console.log(KEY);
}


const KEYS = document.querySelectorAll('.key');
KEYS.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound, false);