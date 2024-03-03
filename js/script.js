// Buttons of input boxes in a vector
btn = document.querySelectorAll('.btn')

// Function table
btn[0].addEventListener('click', () => {
    // Inputs variables
    let start = Number(document.querySelector('#start').value),
        end = Number(document.querySelector('#end').value),
        num = Number(document.querySelector('#number').value),
        steps = Number(document.querySelector('#steps').value)
    
    const table = document.querySelector('#table'),
        op = document.querySelectorAll('.table-op')

    if (start <= end) {
        if (op[0].checked) {
            for (; start <= end; start += steps) {
                console.log(generateTable(start, num, 0))
            }
        } else if (op[1].checked) {
            for (; start <= end; start += steps) {
                console.log(generateTable(start, num, 1))
            }
        } else if (op[2].checked) {
            for (; start <= end; start += steps) {
                console.log(generateTable(start, num, 2))
            }
        } else {
            for (; start <= end; start += steps) {
                console.log(generateTable(start, num, 3))
            }
        }
    } else {
        if (op[0].checked) {
            for (; start >= end; start -= steps) {
                console.log(generateTable(start, num, 0))
            }
        } else if (op[1].checked) {
            for (; start >= end; start -= steps) {
                console.log(generateTable(start, num, 1))
            }
        } else if (op[2].checked) {
            for (; start >= end; start -= steps) {
                console.log(generateTable(start, num, 2))
            }
        } else {
            for (; start >= end; start -= steps) {
                console.log(generateTable(start, num, 3))
            }
        }
    }
})

function generateTable (start, num, op) {
    result = ''

    switch (op) {
        case 0:
            result = `${start} + ${num} = ${(start + num).toFixed(2)}\n`
            break
        case 1:
            result = `${start} - ${num} = ${(start - num).toFixed(2)}\n`
            break
        case 2:
            result = `${start} X ${num} = ${(start * num).toFixed(2)}\n`
            break
        case 3:
            result = `${start} ÷ ${num} = ${(start / num).toFixed(2)}\n`
            break
    }

    return result
}