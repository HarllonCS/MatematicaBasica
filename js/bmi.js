// Create a "box" for the result
const bmiResult = document.createElement('div')
bmiResult.className = 'result'

// BMI input box
const bmi = document.getElementById('bmi')

// Get inputs
const bmiHeight = document.getElementById('bmiHeight')
const bmiWeight = document.getElementById('bmiWeight')

// Result function
resultButton[4].onclick = () => {
    bmiResult.innerHTML = ''
    let height = Number(bmiHeight.value)
    let weight = Number(bmiWeight.value)

    const textError = "Both WEIGHT and HEIGHT must be greater than 0."
    const fieldsBoolean = weight < 0 || height < 0

    !isEmptyBMI() && fieldsBoolean ? alert(textError) : getBMI(height, weight)
}

const isEmptyBMI = () => {
    let heightBoo = bmiHeight.value.length == 0
    let weightBoo = bmiWeight.value.length == 0

    let field = null

    if (heightBoo || weightBoo) {
        if (weightBoo) {
            field = "weight"
        }
        if (heightBoo) {
            field = "height"
        }

        alert(`The ${field.toUpperCase()} field should not be empty!`)

        return true
    }

    return false
}

function getBMI(height, weight) {
    let result = weight/(height**2)
    let classification = ''
    let grade = 0

    if (result <= 18.5) {
        classification = 'thinness'
    } else if (result <= 24.9) {
        classification = 'normal'
    } else if (result <= 29.9) {
        classification = 'overweight'
        grade = 1
    } else if (result <= 39.9) {
        classification = 'obesity'
        grade = 2
    } else if (result > 40) {
        classification = 'severe obesity'
        grade = 3
    } else {
        result = 0
    }

    bmiResult.innerHTML = `<p class='text-center fw-bold'>Your BMI: ${result.toFixed(2)}</p>`
    bmiResult.innerHTML += `<p class='text-center fw-bold'>Classification: ${classification.toUpperCase()} (grade ${grade})</p>`

    bmi.appendChild(bmiResult)
}