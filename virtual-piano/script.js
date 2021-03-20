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

piano.addEventListener('click', (event) => {
    event.target.classList.add('piano-key-active');
})

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




// console.log(btnNotes);


//События мыши
// piano.addEventListener('click', (event) => playAudio(event));


// const url = 'assets/audio/c.mp3';
// button.addEventListener('click', () => playAudio(url))