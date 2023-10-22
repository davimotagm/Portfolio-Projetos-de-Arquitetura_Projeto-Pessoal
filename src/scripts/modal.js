export const handleImagens = () => {
    const imagens = document.querySelectorAll('.img')
    imagens.forEach((elt, index) => {
        elt.src = `./src/assets/img/imagem_${index}.png`
    })
}

export const handleModal = () => {
    const modalController = document.querySelector('.modal__controller')
    const imagens = document.querySelectorAll('.img')
    const imgShow = document.querySelector('.modal__img--show')

    imagens.forEach((img) => {
        img.addEventListener('click', (imgSelect) => {
            imgShow.src = `${imgSelect.currentTarget.src}`
            modalController.showModal()
        })
    })
}

export const closeModal = () => {
    const closeModal = document.querySelector('.button__close');
    const modalController = document.querySelector('.modal__controller');

    closeModal.addEventListener('click', (event) => {
        modalController.close()
        console.log(event.target)
    })
    modalController.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal__controller')) {
            modalController.close()
        }
    })
}