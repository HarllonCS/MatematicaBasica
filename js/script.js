const resultButton = document.querySelectorAll('.btn')

// Get elements
const card = document.querySelectorAll('.card')
const backLink = document.querySelectorAll('.back-link')
const box = document.querySelectorAll('.input-box')
const sec = document.querySelector('section')

// Get searh area
const search = document.getElementById('searchArea')

// Create datalist for the search bar
const dataList = document.createElement('datalist')
dataList.id = 'mathList'

search.appendChild(dataList)

// Get all card titles
const cardTitles = document.querySelectorAll('.card-title')
for (let i = 0; i < cardTitles.length; i++) {
    const elm = cardTitles[i];
    // Put all card titles in the "options" element of datalist
    if (!elm.textContent.includes('Card')) {
        dataList.innerHTML += `<option value="${elm.textContent}"></option>`
    }
}

// Calculation Table Generator functions
card[0].onclick = () => {
    sec.style.display = 'none'
    box[0].style.display = 'block'
}
backLink[0].onclick = () => {
    sec.style.display = 'block'
    box[0].style.display = 'none'
}

// Unit Converter functions
card[1].onclick = () => {
    sec.style.display = 'none'
    box[1].style.display = 'block'
}
backLink[1].onclick = () => {
    sec.style.display = 'block'
    box[1].style.display = 'none'
}

// Temperature functions
card[2].onclick = () => {
    sec.style.display = 'none'
    box[2].style.display = 'block'
}
backLink[2].onclick = () => {
    sec.style.display = 'block'
    box[2].style.display = 'none'
}

// Type of trinagle functions
card[3].onclick = () => {
    sec.style.display = 'none'
    box[3].style.display = 'block'
}
backLink[3].onclick = () => {
    sec.style.display = 'block'
    box[3].style.display = 'none'
}

// BMI Calculator functions
card[4].onclick = () => {
    sec.style.display = 'none'
    box[4].style.display = 'block'
}
backLink[4].onclick = () => {
    sec.style.display = 'block'
    box[4].style.display = 'none'
}