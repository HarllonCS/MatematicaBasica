// Buttons of input boxes in a vector
btn = document.querySelectorAll('.btn')

// Function table
btn[0].addEventListener('click', () => {
    // Variables
    let start = Number(document.querySelector('#start').value),
        end = Number(document.querySelector('#end').value),
        num = Number(document.querySelector('#number').value),
        steps = Number(document.querySelector('#steps').value)

    // Generate increasing table
    if (start <= end) {
        for (; start <= end; start += steps) {
            console.log(generateTable(start, num))
        }
    // Generate decreasing table
    } else {
        for (; start >= end; start -= steps) {
            console.log(generateTable(start, num))
        }
    }
})

function generateTable(start, num) {return `${start} X ${num} = ${(start * num).toFixed(2)}\n`}