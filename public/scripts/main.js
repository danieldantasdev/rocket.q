import Modal from './modal.js'

const modal = Modal()

//pegar todos os botões que existem com a classe check
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach((button) => {
    //adicionar escuta
    button.addEventListener('click', (event) => {
        //abrir modal
        modal.open()
    })
})

//pegar quando o marcar quando lido for clicado
