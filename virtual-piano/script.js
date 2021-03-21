const piano = document.querySelector('.piano');
const pianoКeys = document.querySelectorAll('.piano-key');


//сначала выполним смену по кнопкам
const btnNotes = document.querySelector('.btn-notes');
const btnLetters = document.querySelector('.btn-letters');


//меняю класс у кнопок
btnNotes.onclick = function () {
    if (btnLetters.classList.contains('btn-active')) {
        btnNotes.classList.add('btn-active');
        btnLetters.classList.remove('btn-active');
    }
    pianoКeys.forEach(elem => {
        elem.classList.remove('piano-key-letter'); //чтобы не нажималось дважды на кнопку
    })
}

btnLetters.onclick = function () {
    if (btnNotes.classList.contains('btn-active')) {
        btnLetters.classList.add('btn-active');
        btnNotes.classList.remove('btn-active');
    }

    pianoКeys.forEach(elem => {
        elem.classList.add('piano-key-letter'); //чтобы не нажималось дважды на кнопку
    })
}

//События мыши
const startSound = (event) => {
    event.target.classList.add('piano-key-active');
    playAudio(`assets/audio/${event.target.getAttribute('data-note')}.mp3`);
}

const stopSound = (event) => {
    event.target.classList.remove('piano-key-active');
}

const startCorrespondOver = (event) => {
    if (event.target.classList.contains('piano-key')) {
        event.target.classList.add('piano-key-active');
        playAudio(`assets/audio/${event.target.getAttribute('data-note')}.mp3`);
    }

    pianoКeys.forEach(elem => {
        elem.addEventListener('mouseover', startSound);
        elem.addEventListener('mouseout', stopSound);
    });

}

const stopCorrespondOver = (event) => {
    event.target.classList.remove('piano-key-active');
    pianoКeys.forEach(elem => {
        elem.removeEventListener('mouseover', startSound);
        elem.removeEventListener('mouseout', stopSound);
    });
}

piano.addEventListener('mousedown', startCorrespondOver, false);
document.addEventListener("mouseup", stopCorrespondOver)




//События клавиатуры
let fired = false;

window.addEventListener('keydown', (event) => {
    if (!fired) {
        fired = true;
        pianoКeys.forEach(elem => {
            if (event.code === `Key${elem.getAttribute('data-letter')}`) {
                elem.classList.add('piano-key-active');//клавиши изменяются
                playAudio(`assets/audio/${elem.getAttribute('data-note')}.mp3`);
            }
        })
    }
});

//чтобы срабатывала один раз
window.addEventListener('keyup', (event) => {
    fired = false;
    pianoКeys.forEach(elem => {
        if (event.code === `Key${elem.getAttribute('data-letter')}`) {
            elem.classList.remove('piano-key-active');
        }
    })
});


//создаем функцию аудио
function playAudio(src) {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
}

//События fullscreen
const btnFullScreen = document.querySelector('.fullscreen');

btnFullScreen.addEventListener('click', () => {
    if (document.body.requestFullscreen) {
        document.documentElement.requestFullscreen();
    }
    if (document.fullScreenElement == null) {
        document.exitFullscreen();
    }
});