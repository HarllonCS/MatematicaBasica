// Create elements
const tempResult = document.createElement('div')
tempResult.className = 'result'

const tempNumber = document.getElementById('tempNumber')

// Get elements
const temperature = document.getElementById('temperature')
const selectTemp = document.querySelector('#temperature select')
const radioTemp = document.querySelectorAll('#temperature .form-check-input')

// Result function
resultBtn[2].onclick = () => {
    const num = Number(tempNumber.value)

    // Initialize the variable to get the result
    let result = ''

    // Check if the field is empty
    if (tempNumber.value.length > 0) {
        switch (selectTemp.value) {
            // Convert from fahrenheit
            case 'fahrenheit':
                result = fahrenheit(num)
                break
            // Convert from celsius
            case 'celsius':
                result = celsius(num)
                break
            // Convert from kelvin
            default:
                result = kelvin(num)
                break
        }
    } else {
        alert('The field should not be empty!')
    }

    tempResult.innerHTML = `<p class="text-center fw-bold">${result}</p>`

    temperature.appendChild(tempResult)
}

// Fahrenheit function
function fahrenheit(num) {
    // Fahrenheit formulas
    const fahrenheitCelsius = (num - 32) * 5/9
    const fahrenheitKelvin = fahrenheitCelsius + 273.15
    let fah = `${num}°F = `
    
    // Check radios
    if (radioTemp[1].checked) {
        fah += `${fahrenheitCelsius.toFixed(2)}°C`

    } else if (radioTemp[2].checked) {
        fah += `${fahrenheitKelvin.toFixed(2)}K`
    // Error message
    } else {
        fah = error()
    }

    return fah
}

// Celsius function
function celsius(num) {
    // Celsius formulas
    const celsiusFahrenheit = 9/5 * num + 32
    const celsiusKelvin = num + 273.15
    let cel = `${num}°C = `

    // Check radios
    if (radioTemp[0].checked) {
        cel += `${celsiusFahrenheit.toFixed(2)}°F`

    } else if (radioTemp[2].checked) {
        cel += `${celsiusKelvin.toFixed(2)}K`
    // Error message
    } else {
        cel = error()
    }

    return cel
}

// Kelvin function
function kelvin(num) {
    // Kelvin formulas
    const kelvinCelsius = num - 273.15
    const kelvinFahrenheit = kelvinCelsius * 9/5 + 32
    let kel =  `${num}K = `

    // Check radios
    if (radioTemp[0].checked) {
        kel += `${kelvinFahrenheit.toFixed(2)}°F`
    
    } else if (radioTemp[1].checked) {
        kel += `${kelvinCelsius.toFixed(2)}°C`
    // Error message
    } else {
        kel = error()
    }
    
    return kel
}

const error = () => `<span class="text-danger">[ERROR]: Invalid option!</span>`