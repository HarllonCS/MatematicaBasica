// Get elements
const selectFrom = document.querySelector('#from select')
const selectTo = document.querySelector('#to select')
const unit = document.getElementById('unit')

const unitTable = document.getElementById('unitNumber')

// Create a div to the result
const unitResult = document.createElement('div')
unitResult.className = 'result'

// Result function
resultBtn[1].onclick = () => {
    // Clean result box
    unitResult.innerHTML = ''
    
    // Convert number
    const num = Number(unitTable.value)

    // Check if the field is empty
    if (unitTable.value.length > 0 && num > 0) {
        unitResult.innerHTML += `<p class="text-center fw-bold">${convert(selectFrom.value, selectTo.value, num)}</p>`

    // Check if the valor is negative
    } else if (num < 0) {
        alert('There is no negative length!')

    } else {
        alert('The field should not be empty!')
    }

    unit.appendChild(unitResult)
}

let currentFrom = selectFrom.value
// Function to "Select From"
selectFrom.onchange = () => {
    let previousFrom = currentFrom
    currentFrom = selectFrom.value

    if (currentFrom == selectTo.value) {
        selectTo.value = previousFrom
    }
}

let currentTo = selectTo.value
// Function to "Select To"
selectTo.onchange = () => {
    let previousTo = currentTo
    currentTo = selectTo.value

    if (currentTo == selectFrom.value) {
        selectFrom.value = previousTo
    }
}

function convert(from, to, n) {
    let result = ''

    if (from == 'km') {
        switch (to) {
            case 'km':
                result = `${n} km = ${n * 1} km`
                break
            case 'hm':
                result = `${n} km = ${n * 10} hm`
                break
            case 'dam':
                result = `${n} km = ${n * 100} dam`
                break
            case 'm':
                result = `${n} km = ${n * 1000} m`
                break
            case 'dm':
                result = `${n} km = ${n * 10000} dm`
                break
            case 'cm':
                result = `${n} km = ${n * 100000} cm`
                break
            case 'mm':
                result = `${n} km = ${n * 1000000} mm`
                break
        }
    } else if (from == 'hm') {
        switch (to) {
            case 'km':
                result = `${n} hm = ${n / 10} km`
                break
            case 'hm':
                result = `${n} hm = ${n * 1} hm`
                break
            case 'dam':
                result = `${n} hm = ${n * 10} dam`
                break
            case 'm':
                result = `${n} hm = ${n * 100} m`
                break
            case 'dm':
                result = `${n} hm = ${n * 1000} dm`
                break
            case 'cm':
                result = `${n} hm = ${n * 10000} cm`
                break
            case 'mm':
                result = `${n} hm = ${n * 100000} mm`
                break
        }
    } else if (from == 'dam') {
        switch (to) {
            case 'km':
                result = `${n} dam = ${n / 100} km`
                break
            case 'hm':
                result = `${n} dam = ${n / 10} hm`
                break
            case 'dam':
                result = `${n} dam = ${n * 1} dam`
                break
            case 'm':
                result = `${n} dam = ${n * 10} m`
                break
            case 'dm':
                result = `${n} dam = ${n * 100} dm`
                break
            case 'cm':
                result = `${n} dam = ${n * 1000} cm`
                break
            case 'mm':
                result = `${n} dam = ${n * 10000} mm`
                break
        }
    } else if (from == 'm') {
        switch (to) {
            case 'km':
                result = `${n} m = ${n / 1000} km`
                break
            case 'hm':
                result = `${n} m = ${n / 100} hm`
                break
            case 'dam':
                result = `${n} m = ${n / 10} dam`
                break
            case 'm':
                result = `${n} m = ${n * 1} m`
                break
            case 'dm':
                result = `${n} m = ${n * 10} dm`
                break
            case 'cm':
                result = `${n} m = ${n * 100} cm`
                break
            case 'mm':
                result = `${n} m = ${n * 1000} mm`
                break
        }
    } else if (from == 'dm') {
        switch (to) {
            case 'km':
                result = `${n} dm = ${n / 10000} km`
                break
            case 'hm':
                result = `${n} dm = ${n / 1000} hm`
                break
            case 'dam':
                result = `${n} dm = ${n / 100} dam`
                break
            case 'm':
                result = `${n} dm = ${n / 10} m`
                break
            case 'dm':
                result = `${n} dm = ${n * 1} dm`
                break
            case 'cm':
                result = `${n} dm = ${n * 10} cm`
                break
            case 'mm':
                result = `${n} dm = ${n * 100} mm`
                break
        }
    } else if (from == 'cm') {
        switch (to) {
            case 'km':
                result = `${n} cm = ${n / 100000} km`
                break
            case 'hm':
                result = `${n} cm = ${n / 10000} hm`
                break
            case 'dam':
                result = `${n} cm = ${n / 1000} dam`
                break
            case 'm':
                result = `${n} cm = ${n / 100} m`
                break
            case 'dm':
                result = `${n} cm = ${n / 10} dm`
                break
            case 'cm':
                result = `${n} cm = ${n * 1} cm`
                break
            case 'mm':
                result = `${n} cm = ${n * 10} mm`
                break
        }
    } else {
        switch (to) {
            case 'km':
                result = `${n} mm = ${n / 1000000} km`
                break
            case 'hm':
                result = `${n} mm = ${n / 100000} hm`
                break
            case 'dam':
                result = `${n} mm = ${n / 10000} dam`
                break
            case 'm':
                result = `${n} mm = ${n / 1000} m`
                break
            case 'dm':
                result = `${n} mm = ${n / 100} dm`
                break
            case 'cm':
                result = `${n} mm = ${n / 10} cm`
                break
            case 'mm':
                result = `${n} mm = ${n * 1} mm`
                break
        }
    }
    return result
}