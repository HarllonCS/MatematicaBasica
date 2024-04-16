// Get elements
const op = document.querySelectorAll('.table-op')
const table = document.getElementById('table')

// Get inputs
const tableStart = document.getElementById('tableStart')
const tableEnd = document.getElementById('tableEnd')
const tableSteps = document.getElementById('tableSteps')
const tableNumber =  document.getElementById('tableNumber')

// Create div to the result
const tableResult = document.createElement('div')
tableResult.className = 'result'

// Result function
resultBtn[0].onclick = () => {
    // Clean result box
    tableResult.innerHTML = ''

    // Input variables 
    let start = Number(tableStart.value)
    let end = Number(tableEnd.value)
    let steps = Number(tableSteps.value)

    const startLength = tableStart.value.length
    const endLength = tableEnd.value.length
    const numberLength = tableNumber.value.length
    const stepsLength = tableSteps.value.length
    
    // Condition to check if the fields are empty
    if (startLength == 0 || endLength == 0 || numberLength == 0 || stepsLength == 0) {
        isEmptyTable(startLength, endLength, numberLength, stepsLength)
    } else {
        // Call functions according to the condition
        start <= end ? increasingTable(start, end, steps) : decreasingTable(start, end, steps)
    }

    table.appendChild(tableResult)
}

// Function to check if any field is empty
function isEmptyTable(start, end, number, steps) {
    let field = null

    if (start == 0 || end == 0 || number == 0 || steps == 0) {
        if (steps == 0) { field = 'steps' }

        if (number == 0) { field = 'number' }

        if (end == 0) { field = 'end' }

        if (start == 0) { field = 'start' }

        alert(`The ${field.toUpperCase()} field should not be empty!`)

        return true
    }
    return false
}

// Increasing Table
function increasingTable(start, end, steps) {
    // Generate table according to the params
    if (op[0].checked) {
        for (start; start <= end; start += steps) {
            tableResult.innerHTML += generateTable(start, 'add')
        }   
    } else if (op[1].checked) {
        for (start; start <= end; start += steps) {
            tableResult.innerHTML += generateTable(start, 'sub')
        }
    } else if (op[2].checked) {
        for (start; start <= end; start += steps) {
            tableResult.innerHTML += generateTable(start, 'mult')
        }
    } else {
        for (start; start <= end; start += steps) {
            tableResult.innerHTML += generateTable(start, 'div')
        }
    }
}

// Decreasing table
function decreasingTable(start, end, steps) {
    // Generate table according to the params
    if (op[0].checked) {
        for (start; start >= end; start -= steps) {
            tableResult.innerHTML += generateTable(start, 'add')
        }   
    } else if (op[1].checked) {
        for (start; start >= end; start -= steps) {
            tableResult.innerHTML += generateTable(start, 'sub')
        }
    } else if (op[2].checked) {
        for (start; start >= end; start -= steps) {
            tableResult.innerHTML += generateTable(start, 'mult')
        }
    } else {
        for (start; start >= end; start -= steps) {
            tableResult.innerHTML += generateTable(start, 'div')
        }
    }
}

// Generate table
function generateTable (s, operation) {
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