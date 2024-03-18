// Get elements
const op = document.querySelectorAll('.table-op')
// Create elements
const tableRes = document.createElement('div')

// Atribute the class "table-result"
tableRes.className = 'table-result'

// TABLE FUNCTION
document.querySelectorAll('.btn')[0].addEventListener('click', () => {
    let start = Number(tableStart.value)
    let end = Number(tableEnd.value)
    let steps = Number(document.querySelector('#tableSteps').value)

    // Clean result space
    tableRes.innerHTML = ''

    // Avoid infinite loop
    if (steps == 0) {steps = 1}

    // Call functions according to the condition
    start <= end ? increasingTable(start, end, steps) : decreasingTable(start, end, steps)

    table.append(tableRes)
})

// Increasing Table
const increasingTable = (start, end, steps) => {
    // Generate table according to the params
    if (op[0].checked) {
        for (start; start <= end; start += steps) {
            tableRes.innerHTML += generateTable(start, 'add')
        }   
    } else if (op[1].checked) {
        for (start; start <= end; start += steps) {
            tableRes.innerHTML += generateTable(start, 'sub')
        }
    } else if (op[2].checked) {
        for (start; start <= end; start += steps) {
            tableRes.innerHTML += generateTable(start, 'mult')
        }
    } else {
        for (start; start <= end; start += steps) {
            tableRes.innerHTML += generateTable(start, 'div')
        }
    }
}

// Decreasing table
const decreasingTable = (start, end, steps) => {
    // Generate table according to the params
    if (op[0].checked) {
        for (start; start >= end; start -= steps) {
            tableRes.innerHTML += generateTable(start, 'add')
        }   
    } else if (op[1].checked) {
        for (start; start >= end; start -= steps) {
            tableRes.innerHTML += generateTable(start, 'sub')
        }
    } else if (op[2].checked) {
        for (start; start >= end; start -= steps) {
            tableRes.innerHTML += generateTable(start, 'mult')
        }
    } else {
        for (start; start >= end; start -= steps) {
            tableRes.innerHTML += generateTable(start, 'div')
        }
    }
}

// Generate table
const generateTable = (s, operation) => {
    const n = Number(tableNumber.value)

    switch (operation) {
        case 'add':
            result = `<p class='fw-bold text-center'>${s} + ${n} = ${s + n}</p>`
            break
        case 'sub':
            result = `<p class='fw-bold text-center'>${s} - ${n} = ${s - n}</p>`
            break
        case 'mult':
            result = `<p class='fw-bold text-center'>${s} X ${n} = ${s * n}</p>`
            break
        case 'div': 
            result = `<p class='fw-bold text-center'>${s} ÷ ${n} = ${s / n}</p>`
        break
    }
    return result
}