const start = document.querySelector('#start'),
    end = document.querySelector('#end'),
    num = document.querySelector('#number'),
    steps = document.querySelector('#steps'),

    table = document.querySelector('#table'),
    res = document.createElement('div'),
    op = document.querySelectorAll('.table-op')

// Table function
document.querySelectorAll('.btn')[0].addEventListener('click', () => {
    let s = Number(start.value),
        e = Number(end.value),
        n = Number(num.value),
        st = Number(steps.value)

    res.style.marginTop = '2vw'
    res.innerHTML = ''

    // Increasing Table
    if (s <= e) {
        if (op[0].checked) {
            for (; s <= e; s += st) {
                res.innerHTML += `<p class='fw-bold text-center'>${s} + ${n} = ${(s + n).toFixed(2)}</p>`
            }   
        } else if (op[1].checked) {
            for (; s <= e; s += st) {
                res.innerHTML += `<p class='fw-bold text-center'>${s} - ${n} = ${(s - n).toFixed(2)}</p>`
            }
        } else if (op[2].checked) {
            for (; s <= e; s += st) {
                res.innerHTML += `<p class='fw-bold text-center'>${s} X ${n} = ${(s * n).toFixed(2)}</p>`
            }
        } else {
            for (; s <= e; s += st) {
                res.innerHTML += `<p class='fw-bold text-center'>${s} ÷ ${n} = ${(s / n).toFixed(2)}</p>`
            }
        }
    // Decreasing table
    } else {
        if (op[0].checked) {
            for (; s >= e; s -= st) {
                res.innerHTML += `<p class='fw-bold text-center'>${s} + ${n} = ${(s + n).toFixed(2)}</p>`
            }   
        } else if (op[1].checked) {
            for (; s >= e; s -= st) {
                res.innerHTML += `<p class='fw-bold text-center'>${s} - ${n} = ${(s - n).toFixed(2)}</p>`
            }
        } else if (op[2].checked) {
            for (; s >= e; s -= st) {
                res.innerHTML += `<p class='fw-bold text-center'>${s} X ${n} = ${(s * n).toFixed(2)}</p>`
            }
        } else {
            for (; s >= e; s -= st) {
                res.innerHTML += `<p class='fw-bold text-center'>${s} ÷ ${n} = ${(s / n).toFixed(2)}</p>`
            }
        }
    }

    table.append(res)
})