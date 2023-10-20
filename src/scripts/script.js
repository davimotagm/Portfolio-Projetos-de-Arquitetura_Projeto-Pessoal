const handleImagens = () => {
    const imagens = document.querySelectorAll('.img')
    imagens.forEach((elt, index) => {
        elt.src = `./src/assets/img/imagem_${index}.png`
    })
}

const handleModal = () => {
    const modalController = document.querySelector('.modal__controler')
    const buttonImg = document.querySelectorAll('.button__img')
    const imgShow = document.querySelectorAll('.modal__img--show')
    

    
    buttonImg.forEach((elt) => {
        elt.addEventListener('click', () => {
            const imagens = document.querySelectorAll('.img')

            imagens.forEach((elt, index) => {
                const imgSelecionadaTeste = elt.src
                imgShow.src = `${imgSelecionadaTeste[index]}`
                console.log(index)
            })
            modalController.showModal()
        })
    })
}

handleImagens()
handleModal()