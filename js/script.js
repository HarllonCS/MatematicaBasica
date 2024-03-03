// Buttons of input boxes in a vector
btn = document.querySelectorAll('.btn')
// Function table
btn[0].addEventListener('click', () => {
    // Inputs variables
    let start = Number(document.querySelector('#start').value),
        end = Number(document.querySelector('#end').value),
        num = Number(document.querySelector('#number').value),
        steps = Number(document.querySelector('#steps').value)
    /* Verify if the START variable is smaller or
    larger than the END variable */ 
    start <= end ? increasingTable(start, end, num, steps) : decreasingTable(start, end, num, steps)
})
// Increasing table
function increasingTable (start, end, num, steps) {
    const table = document.querySelector('#table'),
        op = document.querySelectorAll('.table-op')

    if (op[0].checked) {
        for (; start <= end; start += steps) {
            table.innerHTML += generateTable(start, num, 0)
        }
    } else if (op[1].checked) {
        for (; start <= end; start += steps) {
            table.innerHTML += generateTable(start, num, 1)
        }
    } else if (op[2].checked) {
        for (; start <= end; start += steps) {
            table.innerHTML += generateTable(start, num, 2)
        }
    } else {
        for (; start <= end; start += steps) {
            table.innerHTML += generateTable(start, num, 3)
        }
    }
}
// Decreasing table
function decreasingTable (start, end, num, steps) {
    const table = document.querySelector('#table'),
        op = document.querySelector('.table-op')

    if (op[0].checked) {
        for (; start >= end; start -= steps) {
            table.innerHTML += generateTable(start, num, 0)
        }
    } else if (op[1].checked) {
        for (; start >= end; start -= steps) {
            table.innerHTML += generateTable(start, num, 1)
        }
    } else if (op[2].checked) {
        for (; start >= end; start -= steps) {
            table.innerHTML += generateTable(start, num, 2)
        }
    } else {
        for (; start >= end; start -= steps) {
            table.innerHTML += generateTable(start, num, 3)
        }
    }
}
// Generate table
function generateTable (start, num, op) {
    let result
    switch (op) {
        case 0:
            result = `<p>${start} + ${num} = ${(start + num).toFixed(2)}</p>`
            break
        case 1:
            result = `<p>${start} - ${num} = ${(start - num).toFixed(2)}</p>`
            break
        case 2:
            result = `<p>${start} X ${num} = ${(start * num).toFixed(2)}</p>`
            break
        case 3:
            result = `<p>${start} ÷ ${num} = ${(start / num).toFixed(2)}</p>`
            break
    }
    return result
}