// Create elements
const tempResult = document.createElement('div')
tempResult.className = 'result'
// Get elements
const temperature = document.getElementById('temperature')
const tempBtn = document.querySelectorAll('.btn')[2]
const selectTemp = document.querySelector('#temperature select')
const radioTemp = document.querySelectorAll('#temperature .form-check-input')

// TEMPERATURE function
resultButton[2].onclick = function() {
    const errorMsg = 'Invalid Operation!'
    const num = Number(document.getElementById('tempNumber').value)
    // Celsius formulas
    const celsiusFahrenheit = 9/5 * num + 32
    const celsiusKelvin = num + 273.15
    // Fahrenheit formulas
    const fahrenheitCelsius = (num - 32) * 5/9
    const fahrenheitKelvin = fahrenheitCelsius + 273.15
    // Kelvin formulas
    const kelvinCelsius = num - 273.15
    const kelvinFahrenheit = kelvinCelsius * 9/5 + 32
    // Initialize the variable to get the result
    let result = null

    // Fahrenheit conversion
    if (selectTemp.value == 'fahrenheit') {
        result = `${num}°F = `
        // Fahrenheit to celsius
        if (radioTemp[1].checked) {
            result += `${fahrenheitCelsius.toFixed(2)}°C`
        // Fahrenheit to kelvin
        } else if (radioTemp[2].checked) {
            result += `${fahrenheitKelvin.toFixed(2)}K`
        // Fahrenheit to itself
        } else {
            result = `<span class="text-danger">[ERRO]: ${errorMsg}</span>`
        }
    // Celsius conversion
    } else if (selectTemp.value == 'celsius') {
        result = `${num}°C = `
        // Celsius to fahrenheit
        if (radioTemp[0].checked) {
            result += `${celsiusFahrenheit.toFixed(2)}°F`
        // Celsius to kelvin
        } else if (radioTemp[2].checked) {
            result += `${celsiusKelvin.toFixed(2)}K`
        // Celsius to itself
        } else {
            result = `<span class="text-danger">[ERRO]: ${errorMsg}</span>`
        }
    // Kelvin conversion
    } else {
        result = `${num}K = `
        // Kelvin to celsius
        if (radioTemp[0].checked) {
            result += `${kelvinFahrenheit.toFixed(2)}°F`
        // Kelvin to celsius
        } else if (radioTemp[1].checked) {
            result += `${kelvinCelsius.toFixed(2)}°C`
        // Kelvin to itself
        } else {
            result = `<span class="text-danger">[ERRO]: ${errorMsg}</span>`
        }
    }
    tempResult.innerHTML = `<p class="text-center fw-bold">${result}</p>`

    temperature.append(tempResult)
}