const piano = document.querySelector('.piano');
const pianoКeys = document.querySelectorAll('.piano-key');


//сначала выполним смену по кнопкам
const btnNotes = document.querySelector('.btn-notes');
const btnLetters = document.querySelector('.btn-letters');


//меняю класс у кнопок
btnNotes.onclick = function () {
    if (btnLetters.classList.contains('btn-active')) {
        btnLetters.classList.toggle('btn-active');
        btnNotes.classList.toggle('btn-active');
    }
    pianoКeys.forEach(elem => {
        elem.classList.remove('piano-key-letter');
    })
}

btnLetters.onclick = function () {
    if (btnNotes.classList.contains('btn-active')) {
        btnLetters.classList.toggle('btn-active');
        btnNotes.classList.toggle('btn-active');
    }

    pianoКeys.forEach(elem => {
        elem.classList.add('piano-key-letter');
    })
}