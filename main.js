// LISTA DE NÚMEROS QUE CLICADO FICA AMARELO

const li = document.querySelectorAll('li');

li.forEach( num =>{
    num.addEventListener('click', (e) =>{

        for (let i = 0; i < li.length; i++) {
            li[i].classList.remove('btn-ativo')

        const span = document.getElementById('span')
        const rating = e.target.textContent
        span.textContent = rating
        }
        num.classList.add('btn-ativo')

    })
})

// BOTÃO SUBMIT PARA TROCAR DE CARD

const submit = document.getElementById('submit');
const card2 = document.getElementById('card2');

submit.addEventListener('click', () => {
    card2.classList.add('card-back-ativo')
})