const buttonPlayPause = document.getElementById('play-pause');
const audio = document.getElementById('audio-musica');
const buttonAvancar = document.getElementById('proxima-musica');
const buttonVoltar = document.getElementById('voltar-musica');
const nomeMusica = document.getElementById('nome-musica');

const quantidadeMusicas = 5;
let musicaAtual = 1;
let estaTocando = false;

function playAudio() {
    audio.play();
    buttonPlayPause.classList.remove('bi-play-fill');
    buttonPlayPause.classList.add('bi-pause-fill');
}

function pauseAudio() {
    audio.pause();
    buttonPlayPause.classList.add('bi-play-fill');
    buttonPlayPause.classList.remove('bi-pause-fill');
}


function tocarOuPausar() {
    if (estaTocando === false) {
        playAudio();
        estaTocando = true;
    } else {
        pauseAudio();
        estaTocando = false;
    }
}

function trocarNomeFaixa() {
    if (musicaAtual === 1) {
    nomeMusica.innerText = 'Billie Elish - Happier Than Ever';
    } else if (musicaAtual === 2) {
        nomeMusica.innerText = 'Billie Elish - Have Yourself A Merry Little Christmas';
    } else if (musicaAtual === 3) {
        nomeMusica.innerText = 'Billie Elish - No Time To Die';
    } else if (musicaAtual === 4) {
        nomeMusica.innerText = 'Billie Elish - Your Power';
    } else {
        nomeMusica.innerText = 'Billie Elish - Lovely';
    }
    
}

function proximaFaixa() {
    if (musicaAtual === quantidadeMusicas) {
        musicaAtual = 1;
    } else {
        musicaAtual = musicaAtual + 1;
    }
    
    audio.src = './musics/' + musicaAtual + '.mp3';
    playAudio();
    estaTocando = true;
    trocarNomeFaixa();
}

function voltarFaixa() {
    if (musicaAtual === 1) {
        musicaAtual = quantidadeMusicas;
    } else {
        musicaAtual = musicaAtual - 1;
    }

    audio.src = './musics/' + musicaAtual + '.mp3';
    playAudio();
    estaTocando = true;
    trocarNomeFaixa();
}

buttonPlayPause.addEventListener('click', tocarOuPausar);
buttonAvancar.addEventListener('click', proximaFaixa);
buttonVoltar.addEventListener('click', voltarFaixa);