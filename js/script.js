const resultBtn = document.querySelectorAll('.resultButton')

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
// FOR LOOP for the Search Bar and Cards
for (let i = 0; i < box.length; i++) {
    // Search bar
    dataList.innerHTML += `<option value="${cardTitles[i].textContent}"></option>`

    // Cards
    const cardIndex = card[i]
    const boxIndex = box[i]
    const linkIndex = backLink[i]

    // Calculation Table Generator functions
    cardIndex.onclick = () => {
        sec.style.display = 'none'
        boxIndex.style.display = 'block'
    }
    linkIndex.onclick = () => {
        sec.style.display = 'block'
        boxIndex.style.display = 'none'
    }
}