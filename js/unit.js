// Get elements
const selectFrom = document.querySelector('#from select')
const selectTo = document.querySelector('#to select')
const unit = document.getElementById('unit')
// Get button
const unitBtn = document.querySelectorAll('.btn')[1]
// Create a div to the result
const unitResult = document.createElement('div')
unitResult.className = 'result'

// UNIT CONVERTER function
unitBtn.onclick = function() {
    const num = Number(document.getElementById('unitNumber').value)

    unitResult.innerHTML = ''

    if (selectFrom.value == 'km') {
        unitResult.innerHTML += convert(selectFrom.value, selectTo.value, num)
    } else if (selectFrom.value == 'hm') {
        unitResult.innerHTML += convert(selectFrom.value, selectTo.value, num)
    } else if (selectFrom.value == 'dam') {
        unitResult.innerHTML += convert(selectFrom.value, selectTo.value, num)   
    } else if (selectFrom.value == 'm') {
        unitResult.innerHTML += convert(selectFrom.value, selectTo.value, num)
    } else if (selectFrom.value == 'dm') {
        unitResult.innerHTML += convert(selectFrom.value, selectTo.value, num)
    } else if (selectFrom.value == 'cm') {
        unitResult.innerHTML += convert(selectFrom.value, selectTo.value, num)
    } else {
        unitResult.innerHTML += convert(selectFrom.value, selectTo.value, num)
    }
    
    unit.append(unitResult)
}

const convert = (from, to, n) => {
    let result = ''

    if (from == 'km') {
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
                result = `<p class="text-center fw-bold">${n} km = ${n * 100000} cm</p>`
                break
            case 'mm':
                result = `<p class="text-center fw-bold">${n} km = ${n * 1000000} mm</p>`
                break
        }
    } else if (from == 'hm') {
        switch (to) {
            case 'km':
                result = `<p class="text-center fw-bold">${n} hm = ${n / 10} km</p>`
                break
            case 'hm':
                result = `<p class="text-center fw-bold">${n} hm = ${n * 1} hm</p>`
                break
            case 'dam':
                result = `<p class="text-center fw-bold">${n} hm = ${n * 10} dam</p>`
                break
            case 'm':
                result = `<p class="text-center fw-bold">${n} hm = ${n * 100} m</p>`
                break
            case 'dm':
                result = `<p class="text-center fw-bold">${n} hm = ${n * 1000} dm</p>`
                break
            case 'cm':
                result = `<p class="text-center fw-bold">${n} hm = ${n * 10000} cm</p>`
                break
            case 'mm':
                result = `<p class="text-center fw-bold">${n} hm = ${n * 100000} mm</p>`
                break
        }
    } else if (from == 'dam') {
        switch (to) {
            case 'km':
                result = `<p class="text-center fw-bold">${n} dam = ${n / 100} km</p>`
                break
            case 'hm':
                result = `<p class="text-center fw-bold">${n} dam = ${n / 10} hm</p>`
                break
            case 'dam':
                result = `<p class="text-center fw-bold">${n} dam = ${n * 1} dam</p>`
                break
            case 'm':
                result = `<p class="text-center fw-bold">${n} dam = ${n * 10} m</p>`
                break
            case 'dm':
                result = `<p class="text-center fw-bold">${n} dam = ${n * 100} dm</p>`
                break
            case 'cm':
                result = `<p class="text-center fw-bold">${n} dam = ${n * 1000} cm</p>`
                break
            case 'mm':
                result = `<p class="text-center fw-bold">${n} dam = ${n * 10000} mm</p>`
                break
        }
    } else if (from == 'm') {
        switch (to) {
            case 'km':
                result = `<p class="text-center fw-bold">${n} m = ${n / 1000} km</p>`
                break
            case 'hm':
                result = `<p class="text-center fw-bold">${n} m = ${n / 100} hm</p>`
                break
            case 'dam':
                result = `<p class="text-center fw-bold">${n} m = ${n / 10} dam</p>`
                break
            case 'm':
                result = `<p class="text-center fw-bold">${n} m = ${n * 1} m</p>`
                break
            case 'dm':
                result = `<p class="text-center fw-bold">${n} m = ${n * 10} dm</p>`
                break
            case 'cm':
                result = `<p class="text-center fw-bold">${n} m = ${n * 100} cm</p>`
                break
            case 'mm':
                result = `<p class="text-center fw-bold">${n} m = ${n * 1000} mm</p>`
                break
        }
    } else if (from == 'dm') {
        switch (to) {
            case 'km':
                result = `<p class="text-center fw-bold">${n} dm = ${n / 10000} km</p>`
                break
            case 'hm':
                result = `<p class="text-center fw-bold">${n} dm = ${n / 1000} hm</p>`
                break
            case 'dam':
                result = `<p class="text-center fw-bold">${n} dm = ${n / 100} dam</p>`
                break
            case 'm':
                result = `<p class="text-center fw-bold">${n} dm = ${n / 10} m</p>`
                break
            case 'dm':
                result = `<p class="text-center fw-bold">${n} dm = ${n * 1} dm</p>`
                break
            case 'cm':
                result = `<p class="text-center fw-bold">${n} dm = ${n * 10} cm</p>`
                break
            case 'mm':
                result = `<p class="text-center fw-bold">${n} dm = ${n * 100} mm</p>`
                break
        }
    } else if (from == 'cm') {
        switch (to) {
            case 'km':
                result = `<p class="text-center fw-bold">${n} cm = ${n / 100000} km</p>`
                break
            case 'hm':
                result = `<p class="text-center fw-bold">${n} cm = ${n / 10000} hm</p>`
                break
            case 'dam':
                result = `<p class="text-center fw-bold">${n} cm = ${n / 1000} dam</p>`
                break
            case 'm':
                result = `<p class="text-center fw-bold">${n} cm = ${n / 100} m</p>`
                break
            case 'dm':
                result = `<p class="text-center fw-bold">${n} cm = ${n / 10} dm</p>`
                break
            case 'cm':
                result = `<p class="text-center fw-bold">${n} cm = ${n * 1} cm</p>`
                break
            case 'mm':
                result = `<p class="text-center fw-bold">${n} cm = ${n * 10} mm</p>`
                break
        }
    } else {
        switch (to) {
            case 'km':
                result = `<p class="text-center fw-bold">${n} mm = ${n / 1000000} km</p>`
                break
            case 'hm':
                result = `<p class="text-center fw-bold">${n} mm = ${n / 100000} hm</p>`
                break
            case 'dam':
                result = `<p class="text-center fw-bold">${n} mm = ${n / 10000} dam</p>`
                break
            case 'm':
                result = `<p class="text-center fw-bold">${n} mm = ${n / 1000} m</p>`
                break
            case 'dm':
                result = `<p class="text-center fw-bold">${n} mm = ${n / 100} dm</p>`
                break
            case 'cm':
                result = `<p class="text-center fw-bold">${n} mm = ${n / 10} cm</p>`
                break
            case 'mm':
                result = `<p class="text-center fw-bold">${n} mm = ${n * 1} mm</p>`
                break
        }
    }
    return result
}