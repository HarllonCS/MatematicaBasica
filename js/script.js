// Get elements
const card = document.querySelectorAll('.card')
const backLink = document.querySelectorAll('.back-link')
const table = document.querySelector('#table')
const sec = document.querySelector('section')

// Calculation Table Generator functions
card[0].addEventListener('click', () => {
    sec.style.display = 'none'
    table.style.display = 'block'
})
backLink[0].addEventListener('click', () => {
    sec.style.display = 'block'
    table.style.display = 'none'
})