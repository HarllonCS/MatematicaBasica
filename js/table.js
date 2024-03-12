// Global inputs variables
const start = document.querySelector('#start')
const end = document.querySelector('#end')
// Get elements
const op = document.querySelectorAll('.table-op')
// Create elements
const tableRes = document.createElement('div')

// Atribute the class "table-result"
tableRes.className = 'table-result'

// TABLE FUNCTION
document.querySelectorAll('.btn')[0].addEventListener('click', () => {
    let s = Number(start.value)
    let e = Number(end.value)
    let steps = Number(document.querySelector('#steps').value)

    // Clean result space
    tableRes.innerHTML = ''

    // Avoid infinite loop
    if (steps == 0) {steps = 1}

    // Call functions according to the condition
    s <= e ? increasingTable(s, e, steps) : decreasingTable(s, e, steps)

    table.append(tableRes)
})

// Increasing Table
function increasingTable(start, end, steps) {
    // Generate table according to the string params
    if (op[0].checked) {
        for (; start <= end; start += steps) {
            tableRes.innerHTML += generateTable(start, 'add')
        }   
    } else if (op[1].checked) {
        for (; start <= end; start += steps) {
            tableRes.innerHTML += generateTable(start, 'sub')
        }
    } else if (op[2].checked) {
        for (; start <= end; start += steps) {
            tableRes.innerHTML += generateTable(start, 'mult')
        }
    } else {
        for (; start <= end; start += steps) {
            tableRes.innerHTML += generateTable(start, 'div')
        }
    }
}

// Decreasing table
function decreasingTable(start, end, steps) {
    // Generate table according to the string params
    if (op[0].checked) {
        for (; start >= end; start -= steps) {
            tableRes.innerHTML += generateTable(start, 'add')
        }   
    } else if (op[1].checked) {
        for (; start >= end; start -= steps) {
            tableRes.innerHTML += generateTable(start, 'sub')
        }
    } else if (op[2].checked) {
        for (; start >= end; start -= steps) {
            tableRes.innerHTML += generateTable(start, 'mult')
        }
    } else {
        for (; start >= end; start -= steps) {
            tableRes.innerHTML += generateTable(start, 'div')
        }
    }
}

// Generate table
function generateTable(s, operation) {
    const n = Number(document.querySelector('#number').value).toFixed(2)

    switch (operation) {
        case 'add':
            result = `<p class='fw-bold text-center'>${s.toFixed(2)} + ${n} = ${(s + n).toFixed(2)}</p>`
            break
        case 'sub':
            result = `<p class='fw-bold text-center'>${s.toFixed(2)} - ${n} = ${(s - n).toFixed(2)}</p>`
            break
        case 'mult':
            result = `<p class='fw-bold text-center'>${s.toFixed(2)} X ${n} = ${(s * n).toFixed(2)}</p>`
            break
        case 'div': 
            result = `<p class='fw-bold text-center'>${s.toFixed(2)} ÷ ${n} = ${(s / n).toFixed(2)}</p>`
        break
    }
    return result
}