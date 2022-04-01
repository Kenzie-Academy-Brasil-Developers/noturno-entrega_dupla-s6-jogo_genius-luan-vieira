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

    divGreen.addEventListener('click', coverColors)
    divRed.addEventListener('click', coverColors)
    divYellow.addEventListener('click', coverColors)
    divBlue.addEventListener('click', coverColors)


}

createItems()




function coverColors() {

    let divGreen = document.getElementById('btn--green')
    let divRed = document.getElementById('btn--red')
    let divYellow = document.getElementById('btn--yellow')
    let divBlue = document.getElementById('btn--blue')

    if (this.getAttribute('id') === 'btn--green') {
        divGreen.style.backgroundColor = '#145011'

    }
    if (this.getAttribute('id') === 'btn--red') {
        divRed.style.backgroundColor = '#521517'

    }
    if (this.getAttribute('id') === 'btn--yellow') {
        divYellow.style.backgroundColor = '#645731'

    }
    if (this.getAttribute('id') === 'btn--blue') {
        divBlue.style.backgroundColor = '#22575f'

    }
    setTimeout(clearColor, 200)
}

function clearColor() {
    let divGreen = document.getElementById('btn--green')
    let divRed = document.getElementById('btn--red')
    let divYellow = document.getElementById('btn--yellow')
    let divBlue = document.getElementById('btn--blue')


    divGreen.style.backgroundColor = '#0ec108'
    divRed.style.backgroundColor = '#fb3840'
    divYellow.style.backgroundColor = '#ffc721'
    divBlue.style.backgroundColor = '#0dd1f1'
}

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



function delay() {


    removeMenu()
    createMemorize()
    setTimeout(removeMemorize, 600)
    setTimeout(piscaGreen, 1000)
    setTimeout(createResponse, 3000)

    pegaSequenciaJogador()


}

//----------------------------------------------------------------------------


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

    const memorize = document.querySelector('.memorize')
    memorize.style.display = `none`

}

//---------------------------------------------------------------------------------
//mensagem pro jogador digitar a resposta
function createResponse() {

    const control = document.querySelector('.game__control')

    const spanMemorize = document.createElement('span')
    spanMemorize.innerText = "It's your turn!\nClick the pads in order!"
    spanMemorize.classList.add('memorize')

    control.appendChild(spanMemorize)

}

//------------------------------------------------------------------------

//sequencia aleatoria

let order = []
let score = 0


/*
//gera numero aleatorio de 0 a 3 (positions)
function getRandomArbitrary(a, b) {
    let teste = Math.floor(Math.random() * 4)
    let retorno = order.push(teste)
    return retorno
}
getRandomArbitrary()
*/



function randomColorPicker() {
    let teste = order.push(Math.floor(Math.random() * 4))

    console.log(teste)
}




function piscaGreen() {
    let divGreen = document.getElementById('btn--green')
    divGreen.style.backgroundColor = '#145011'
    setTimeout(desligaGreen, 200)
}

function desligaGreen() {
    let divGreen = document.getElementById('btn--green')
    divGreen.style.backgroundColor = '#0ec108'
}

function piscaRed() {
    let divRed = document.getElementById('btn--red')
    divRed.style.backgroundColor = '#521517'
    setTimeout(desligaRed, 200)
}

function desligaRed() {
    let divRed = document.getElementById('btn--red')
    divRed.style.backgroundColor = '#fb3840'
}
//---------------------------------------------------------------------------------------


function piscaYellow() {
    let divYellow = document.getElementById('btn--yellow')
    divYellow.style.backgroundColor = '#645731'
    setTimeout(desligaYellow, 200)
}

function desligaYellow() {
    let divYellow = document.getElementById('btn--yellow')
    divYellow.style.backgroundColor = '#ffc721'
}

function piscaBlue() {
    let divBlue = document.getElementById('btn--blue')
    divBlue.style.backgroundColor = '#22575f'
    setTimeout(desligaBlue, 200)
}

function desligaBlue() {
    let divBlue = document.getElementById('btn--blue')
    divBlue.style.backgroundColor = '#0dd1f1'
}



function sequence() {

    setTimeout(piscaGreen, 1000)
    setTimeout(piscaBlue, 1500)
    setTimeout(piscaGreen, 2000)
    setTimeout(piscaRed, 2500)
    setTimeout(piscaYellow, 3000)
    setTimeout(piscaBlue, 3500)
    setTimeout(piscaGreen, 4000)
    setTimeout(piscaYellow, 4500)
    setTimeout(piscaBlue, 5000)
    setTimeout(piscaRed, 5500)
    setTimeout(piscaBlue, 6000)
    setTimeout(piscaRed, 6500)
    setTimeout(piscaBlue, 7000)
    setTimeout(piscaYellow, 7500)

}

let arrayJogador = []
console.log(arrayJogador)



function pegaSequenciaJogador() {

    let descendentes = document.querySelectorAll('.game__btn');

    for (let i = 0; i < descendentes.length; i++) {
        descendentes[i].addEventListener("click", function(e) {

            arrayJogador.push(this.id)
            console.log(arrayJogador)


        })

    }

}

//-------------------------------------------------------------------------------------------