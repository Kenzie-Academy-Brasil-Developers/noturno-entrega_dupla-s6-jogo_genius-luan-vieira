let arrayJogador = []
let order = []


function createItems() {

    const box = document.querySelector('.box')

    const divGame = document.createElement('div')
    divGame.classList.add('game')

    const divGreen = document.createElement('div')
    divGreen.classList.add('game__btn')
    divGreen.id = 'btn--green'

    const divRed = document.createElement('div')
    divRed.classList.add('game__btn')
    divRed.id = 'btn--red'

    const divYellow = document.createElement('div')
    divYellow.classList.add('game__btn')
    divYellow.id = 'btn--yellow'

    const divBlue = document.createElement('div')
    divBlue.classList.add('game__btn')
    divBlue.id = 'btn--blue'

    const divControl = document.createElement('div')
    divControl.classList.add('game__control')

    box.appendChild(divGame)
    divGame.appendChild(divGreen)
    divGame.appendChild(divRed)
    divGame.appendChild(divYellow)
    divGame.appendChild(divBlue)
    divGame.appendChild(divControl)

}

createItems()

function habilitarClick() {
    let divGreen = document.getElementById('btn--green')
    let divRed = document.getElementById('btn--red')
    let divYellow = document.getElementById('btn--yellow')
    let divBlue = document.getElementById('btn--blue')

    divGreen.addEventListener('click', coverColors)
    divRed.addEventListener('click', coverColors)
    divYellow.addEventListener('click', coverColors)
    divBlue.addEventListener('click', coverColors)
}

function desabilitarClick() {
    let descendentes = document.querySelectorAll('.game__btn');
    descendentes.forEach((element) => element.removeEventListener('click', clickJogador))

    let divGreen = document.getElementById('btn--green')
    let divRed = document.getElementById('btn--red')
    let divYellow = document.getElementById('btn--yellow')
    let divBlue = document.getElementById('btn--blue')

    divGreen.removeEventListener('click', coverColors)
    divRed.removeEventListener('click', coverColors)
    divYellow.removeEventListener('click', coverColors)
    divBlue.removeEventListener('click', coverColors)
}

function playGreen() {
    let audio = document.getElementById('greenAudio')
    audio.play()
}

function playRed() {
    let audio = document.getElementById('redAudio')
    audio.play()
}

function playYellow() {
    let audio = document.getElementById('yellowAudio')
    audio.play()
}

function playBlue() {
    let audio = document.getElementById('blueAudio')
    audio.play()
}

function coverColors() {

    let divGreen = document.getElementById('btn--green')
    let divRed = document.getElementById('btn--red')
    let divYellow = document.getElementById('btn--yellow')
    let divBlue = document.getElementById('btn--blue')

    if (this.getAttribute('id') === 'btn--green') {
        divGreen.classList.add('brilho','brilhoVerde')
        playGreen()
    }
    if (this.getAttribute('id') === 'btn--red') {
        divRed.classList.add('brilho','brilhoVermelho')
        playRed()
    }
    if (this.getAttribute('id') === 'btn--yellow') {
        divYellow.classList.add('brilho','brilhoAmarelo')
        playYellow()
    }
    if (this.getAttribute('id') === 'btn--blue') {
        divBlue.classList.add('brilho','brilhoAzul')
        playBlue()
    }
    setTimeout(clearColor, 200)
}

function clearColor() {
    let divGreen = document.getElementById('btn--green')
    let divRed = document.getElementById('btn--red')
    let divYellow = document.getElementById('btn--yellow')
    let divBlue = document.getElementById('btn--blue')

    divGreen.classList.remove('brilho','brilhoVerde')
    divRed.classList.remove('brilho','brilhoVermelho')
    divYellow.classList.remove('brilho','brilhoAmarelo')
    divBlue.classList.remove('brilho','brilhoAzul')

    divGreen.style.backgroundColor = '#0ec108'
    divRed.style.backgroundColor = '#fb3840'
    divYellow.style.backgroundColor = '#ffc721'
    divBlue.style.backgroundColor = '#0dd1f1'
}

function delay() {
    removeMenu()
    createMemorize()
    corAleatoria()
    sequenciaDeCores()
}

function replay() {
    order = []
    createMemorize()
    corAleatoria()
    sequenciaDeCores()
    habilitarClick()
    pegaSequenciaJogador()
}

//----------------------------------------------------------------------------
// tela do menu

function createMenu() {

    const divControl = document.querySelector('.game__control')

    let menuTextWelcome = document.createElement('span');
    menuTextWelcome.classList.add('menuTextWelcome')
    menuTextWelcome.innerText = 'Welcome to our \nGenius Game!'

    let menuTextQuest = document.createElement('span');
    menuTextQuest.classList.add('menuTextQuest')
    menuTextQuest.innerText = 'How far can you go?'

    let menuButton = document.createElement('button')
    menuButton.classList.add('menuButton')
    menuButton.innerText = 'PLAY'
    menuButton.addEventListener('click', delay)

    divControl.appendChild(menuTextWelcome)
    divControl.appendChild(menuTextQuest)
    divControl.appendChild(menuButton)
}
createMenu()

function removeMenu() {

    const menuTextWelcome = document.querySelector('.menuTextWelcome')
    const menuTextQuest = document.querySelector('.menuTextQuest')
    const menuButton = document.querySelector('.menuButton')


    menuTextWelcome.style.display = `none`
    menuTextQuest.style.display = `none`
    menuButton.style.display = `none`

}

//----------------------------------------------------------------------------------
// tela de memorização

function createMemorize() {

    const control = document.querySelector('.game__control')

    const spanMemorize = document.createElement('span')
    spanMemorize.innerText = 'Memorize\nthe pattern'
    spanMemorize.classList.add('memorize')

    control.appendChild(spanMemorize)

}

function removeMemorize() {

    const memorize = document.querySelectorAll('.memorize')
    memorize.forEach(element => element.style.display = `none`)

}

//---------------------------------------------------------------------------------
//mensagem pro jogador digitar a resposta
function createResponse() {

    const control = document.querySelector('.game__control')

    const spanMemorize = document.createElement('span')
    spanMemorize.innerText = "It's your turn!\nClick the pads in order!"
    spanMemorize.classList.add('response')

    control.appendChild(spanMemorize)

}

function removeResponse() {
    const response = document.querySelectorAll('.response')
    response.forEach(element => element.style.display = `none`)
}

//---------------------------------------------------------------------------------
//mensagem que indica que o jogador errou
function createGameOver() {
    desabilitarClick()

    const control = document.querySelector('.game__control')

    const spanGameOver = document.createElement('span');
    spanGameOver.innerText = `Game Over!\n\n Score: ${order.length - 1}`
    spanGameOver.setAttribute('id', 'gameOver')
    spanGameOver.classList.add('gameOverPart')

    const buttonJogarNovamente = document.createElement('button')
    buttonJogarNovamente.innerText = "PLAY AGAIN"
    buttonJogarNovamente.setAttribute('id','playAgain')
    buttonJogarNovamente.classList.add('gameOverPart')
    buttonJogarNovamente.addEventListener('click', removeGameOver)
    buttonJogarNovamente.addEventListener('click', replay)
    
    control.appendChild(spanGameOver)
    control.appendChild(buttonJogarNovamente)
}

function removeGameOver() {
    const gameOver = document.querySelectorAll('.gameOverPart')
    gameOver.forEach((element) => element.style.display = `none`)
}

//---------------------------------------------------------------------------------

//sequencia aleatoria

function corAleatoria() {
    order.push(Math.floor(Math.random() * 4))

}

function sequenciaDeCores() {
    setTimeout(() => {
        for(i = 0; i < order.length; i++) {
            if(order[i] === 0) {
                setTimeout(() => {
                    piscaGreen()
                }, 800 * i);
            } else if (order[i] === 1) {
                setTimeout(() => {
                    piscaRed()
                }, 800 * i);
            } else if (order[i] === 2) {
                setTimeout(() => {
                    piscaYellow()
                }, 800 * i);
            } else if (order[i] === 3) {
                setTimeout(() => {
                    piscaBlue()
                }, 800 * i);
            }
            if(i === order.length - 1) {
                setTimeout(() => {
                    vezDoJogador()
                }, 800 * i + 800);
            }
        }
    }, 500);
}

function vezDoJogador() {
    removeMemorize()
    createResponse()
    setTimeout(() => {
        pegaSequenciaJogador()
        habilitarClick()    
    }, 200);
}

function piscaGreen() {
    let divGreen = document.getElementById('btn--green')
    divGreen.classList.add('brilho','brilhoVerde')
    playGreen()
    setTimeout(desligaGreen, 400)
}

function desligaGreen() {
    let divGreen = document.getElementById('btn--green')
    divGreen.classList.remove('brilho','brilhoVerde')
}

function piscaRed() {
    let divRed = document.getElementById('btn--red')
    divRed.classList.add('brilho','brilhoVermelho')
    playRed()
    setTimeout(desligaRed, 400)
}

function desligaRed() {
    let divRed = document.getElementById('btn--red')
    divRed.classList.remove('brilho','brilhoVermelho')
}
//---------------------------------------------------------------------------------------

function piscaYellow() {
    let divYellow = document.getElementById('btn--yellow')
    divYellow.classList.add('brilho','brilhoAmarelo')
    playYellow()
    setTimeout(desligaYellow, 400)
}

function desligaYellow() {
    let divYellow = document.getElementById('btn--yellow')
    divYellow.classList.remove('brilho','brilhoAmarelo')
}

function piscaBlue() {
    let divBlue = document.getElementById('btn--blue')
    divBlue.classList.add('brilho','brilhoAzul')
    playBlue()
    setTimeout(desligaBlue, 400)
}

function desligaBlue() {
    let divBlue = document.getElementById('btn--blue')
    divBlue.classList.remove('brilho','brilhoAzul')
}

function pegaSequenciaJogador() {

    arrayJogador = [];

    let descendentes = document.querySelectorAll('.game__btn');
    descendentes.forEach((element) => element.addEventListener('click', clickJogador))
}

function clickJogador() {
    arrayJogador.push(this.id)

    tradutorDeArray()
    checarSequencia()
}

function tradutorDeArray() {
    for (let i = 0; i < arrayJogador.length; i++) {
        if(arrayJogador[i] === 'btn--green') {
            arrayJogador[i] = 0
        }
        if(arrayJogador[i] === 'btn--red') {
            arrayJogador[i] = 1
        }
        if(arrayJogador[i] === 'btn--yellow') {
            arrayJogador[i] = 2
        }
        if(arrayJogador[i] === 'btn--blue') {
            arrayJogador[i] = 3
        }
    }
}

function checarSequencia() { 
    if(order[arrayJogador.length - 1] !== arrayJogador[arrayJogador.length - 1]) {
        removeResponse()
        createGameOver()
    }  
    if((order.length === arrayJogador.length) && (order[arrayJogador.length - 1] === arrayJogador[arrayJogador.length - 1])) {
        sequenciaCorreta()
    }
}

function sequenciaCorreta() {
    setTimeout(() => {
        desabilitarClick()
        removeResponse()
        createMemorize()
        corAleatoria()
        sequenciaDeCores()
    }, 100);
}

//-------------------------------------------------------------------------------------------