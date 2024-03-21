const tempResult = document.createElement('div')
tempResult.className = 'result'

const temperature = document.getElementById('temperature')
const tempBtn = document.querySelectorAll('.btn')[2]

tempBtn.onclick = function() {
    const num = Number(document.getElementById('tempNumber').value)
    
    const celsiusfahrenheit = 9/5 * num + 32
    const celsiusKelvin = 0
    
    const kelvin = 0

    tempResult.innerHTML = `<p class="text-center fw-bold">${num}°C = ${celsiusfahrenheit}°F</p>`

    temperature.append(tempResult)

}