// Create a "box" for the result
const bmiResult = document.createElement('div')
bmiResult.className = 'result'

// BMI input box
const bmi = document.getElementById('bmi')

// Get inputs
const bmiHeight = document.getElementById('bmiHeight')
const bmiWeight = document.getElementById('bmiWeight')

// Result function
resultBtn[4].onclick = () => {
    // HEIGHT and WEIGHT values
    let height = Number(bmiHeight.value)
    let weight = Number(bmiWeight.value)

    // Variables for ternary operator
    const textError = "Both WEIGHT and HEIGHT must be greater than 0."
    const fieldsBoolean = weight < 0 || height < 0

    // Ternary operator
    !isEmptyBMI() && fieldsBoolean ? alert(textError) : getBMI(height, weight)
}

// Check if any field is empty
const isEmptyBMI = () => {
    // Boolean variables for conditions
    let heightBoo = bmiHeight.value.length == 0
    let weightBoo = bmiWeight.value.length == 0

    let field = null

    // Return "true" if one of the fields is empty
    if (heightBoo || weightBoo) {
        if (weightBoo) {
            field = "weight"
        } if (heightBoo) {
            field = "height"
        }

        alert(`The ${field.toUpperCase()} field should not be empty!`)

        return true
    }

    // Return "false" if not
    return false
}

// Function to get the BMI
function getBMI(height, weight) {
    // Result variables
    let result = weight/(height**2)
    let classification = ''
    let grade = 0

    // Variables receive the value according to the condition.
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