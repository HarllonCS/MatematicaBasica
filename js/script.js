// Get elements
const card = document.querySelectorAll('.card'),
    backLink = document.querySelectorAll('.back-link'),
    table = document.querySelector('#table'),
    sec = document.querySelector('section')

card[0].addEventListener('click', () => {
    sec.style.display = 'none'
    table.style.display = 'block'
})

backLink[0].addEventListener('click', () => {
    sec.style.display = 'block'
    table.style.display = 'none'
})