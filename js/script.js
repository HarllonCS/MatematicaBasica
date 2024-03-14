// Get elements
const card = document.querySelectorAll('.card')
const backLink = document.querySelectorAll('.back-link')
const box = document.querySelectorAll('.input-box')
const sec = document.querySelector('section')

// Calculation Table Generator functions
card[0].addEventListener('click', () => {
    sec.style.display = 'none'
    box[0].style.display = 'block'
})
backLink[0].addEventListener('click', () => {
    sec.style.display = 'block'
    box[0].style.display = 'none'
})

// Unit Converter functions
card[1].addEventListener('click', () => {
    sec.style.display = 'none'
    box[1].style.display = 'block'
})
backLink[1].addEventListener('click', () => {
    sec.style.display = 'block'
    box[1].style.display = 'none'
})