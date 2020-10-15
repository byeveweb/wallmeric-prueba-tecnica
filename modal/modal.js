const link = document.querySelector('#modal')
const modal = document.querySelector('.modalDialog')
const closeModal = document.querySelector('.close')
const tupid = document.querySelector('.tupid')




link.addEventListener('click', e => {
    modal.style.opacity = 1
    tupid.style.opacity = .5
})


closeModal.addEventListener('click', e => {
    modal.style.opacity = 0
    tupid.style.opacity = 0
})

