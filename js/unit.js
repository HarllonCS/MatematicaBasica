const unitRes = document.createElement('div')
unitRes.className = 'unit-res'

document.querySelectorAll('.btn')[1].addEventListener('click', () => {
    const num = Number(unitNumber.value)
    const convFrom = document.querySelector('#from select').value
    const convTo = document.querySelector('#to select').value

    unitRes.innerHTML = ''

    if (convFrom == 'km') {
        unitRes.innerHTML += kilometer(num, convTo)
    } else {
        unitRes.innerHTML += `<p class="text-center fw-bold text-danger">Invalid option (for now)</p>`
    }
    
    unit.append(unitRes)
})

const kilometer = (n, to) => {
    let result = ''

    switch (to) {
        case 'km':
            result = `<p class="text-center fw-bold">${n} km = ${n * 1} km</p>`
            break
        case 'hm':
            result = `<p class="text-center fw-bold">${n} km = ${n * 10} hm</p>`
            break
        case 'dam':
            result = `<p class="text-center fw-bold">${n} km = ${n * 100} dam</p>`
            break
        case 'm':
            result = `<p class="text-center fw-bold">${n} km = ${n * 1000} m</p>`
            break
        case 'dm':
            result = `<p class="text-center fw-bold">${n} km = ${n * 10000} dm</p>`
            break
        case 'cm':
            result = `<p class="text-center fw-bold">${num} km = ${num * 100000} cm</p>`
            break
        case 'mm':
            result = `<p class="text-center fw-bold">${num} km = ${num * 1000000} mm</p>`
    }
    return result
}