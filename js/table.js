// Global variables to inputs
const start = document.querySelector('#start'),
    end = document.querySelector('#end'),
    // Get elements
    table = document.querySelector('#table'),
    op = document.querySelectorAll('.table-op'),
    // Create elements
    tableRes = document.createElement('div')

// Atribute the class "table-result"
tableRes.className = 'table-result'

// TABLE FUNCTION
document.querySelectorAll('.btn')[0].addEventListener('click', () => {
    let s = Number(start.value),
        e = Number(end.value),
        steps = Number(document.querySelector('#steps').value)

    // Clean result space
    tableRes.innerHTML = ''
    
    // Call functions according to the condition
    // s <= e ? increasingTable(s, e, steps) : decreasingTable(s, e, steps)

    if (start.value.length == 0) {
        tableRes.innerHTML = '<p class=\'fw-bold text-danger text-center\'>The start field must not be empty.</p>'
    }

    // console.log();

    table.append(tableRes)
})

// Increasing Table
function increasingTable(start, end, steps) {
    // Generate table according to the string params
    if (op[0].checked) {
        for (; start <= end; start += steps) {
            tableRes.innerHTML += generateTable('add')
        }   
    } else if (op[1].checked) {
        for (; start <= end; start += steps) {
            tableRes.innerHTML += generateTable('sub')
        }
    } else if (op[2].checked) {
        for (; start <= end; start += steps) {
            tableRes.innerHTML += generateTable('mult')
        }
    } else {
        for (; start <= end; start += steps) {
            tableRes.innerHTML += generateTable('div')
        }
    }
}

// Decreasing table
function decreasingTable(start, end, steps) {
    // Generate table according to the string params
    if (op[0].checked) {
        for (; start >= end; start -= steps) {
            tableRes.innerHTML += generateTable('add')
        }   
    } else if (op[1].checked) {
        for (; start >= end; start -= steps) {
            tableRes.innerHTML += generateTable('sub')
        }
    } else if (op[2].checked) {
        for (; start >= end; start -= steps) {
            tableRes.innerHTML += generateTable('mult')
        }
    } else {
        for (; start >= end; start -= steps) {
            tableRes.innerHTML += generateTable('div')
        }
    }
}

// Generate table
function generateTable(sign) {
    let s = Number(start.value),
        n = Number(document.querySelector('#number').value)

    switch (sign) {
        case 'add':
            result = `<p class='fw-bold text-center'>${s} + ${n} = ${(s + n).toFixed(2)}</p>`
            break
        case 'sub':
            result = `<p class='fw-bold text-center'>${s} - ${n} = ${(s - n).toFixed(2)}</p>`
            break
        case 'mult':
            result = `<p class='fw-bold text-center'>${s} X ${n} = ${(s * n).toFixed(2)}</p>`
            break
        case 'div': 
            result = `<p class='fw-bold text-center'>${s} ÷ ${n} = ${(s / n).toFixed(2)}</p>`
        break
    }

    return result
}