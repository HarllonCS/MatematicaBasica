// Create a "box" for the result
const triangleResult = document.createElement('div')
triangleResult.className = 'result'

// Get box to of the inputs
const triangle = document.getElementById('triangle')

// Get triangle inputs in a vector
const triangleField = []
triangleField.push(document.getElementById('triangleLine1'))
triangleField.push(document.getElementById('triangleLine2'))
triangleField.push(document.getElementById('triangleLine3'))

// Create image for each triangle
const img = document.createElement('img')
img.className = 'mx-auto d-block'

// Result function
resultButton[3].onclick = function() {
    // Clean result
    triangleResult.innerHTML = ''
    img.src = ''

    // lines of the triangle
    let l1 = Number(triangleField[0].value)
    let l2 = Number(triangleField[1].value)
    let l3 = Number(triangleField[2].value)

    // Constant variables for the ternary operator 
    const textError = "The lines must be greater than 0."
    const lineBoolean = l1 < 0 || l2 < 0 || l3 < 0

    // Ternary operator
    !isEmptyTriangle() && lineBoolean ? alert(textError) : getTriangleType(l1, l2, l3)
}

// Function to check if any field is empty
const isEmptyTriangle = () => {
    // Boolean variables for triangle inputs
    let triangleBoo1 = triangleField[0].value.length == 0
    let triangleBoo2 = triangleField[1].value.length == 0
    let triangleBoo3 = triangleField[2].value.length == 0

    // Variable to return wich input is empty
    let line = null

    // return true
    if (triangleBoo1 || triangleBoo2 || triangleBoo3) {
        // line 3
        if (triangleBoo3) { line = 3 }
        // line 2
        if (triangleBoo2) { line = 2 }
        // line 1
        if (triangleBoo1) { line = 1 }

        alert(`Line ${line} is empty!`)
        
        return true
    }
    // return false

    return false
}

// Function to get the type of the triangle
function getTriangleType(line1, line2, line3) {
    // Sides of the triangle
    let sideA = line1 + line2
    let sideB = line1 + line3
    let sideC = line2 + line3

    // Variables to the condition
    let type = null
    let result = null

    // Check if it's a triangle 
    if (line1 < sideC && line2 < sideB && line3 < sideA) {
        // Equilateral triangle
        if (sideA == sideB && sideB == sideC) {
           type = 'Equilateral'
        // Isosceles triangle
        } else if (sideA == sideB || sideA == sideC || sideB == sideC) {
            type = 'Isosceles'
        // Scalene triangle
        } else {
            type = 'Scalene'
        }

        // Variable to receive the values according to the conditions
        result = `It's a ${type.toUpperCase()} triangle.`
        img.src = `../src/imgs/triangles/${type}.png`
    } else {
        // If it's not a triangle
        result = "<span class='text-danger'>It\'s not a triangle!</span>"
    }
    
    // Put the result in the result box
    triangleResult.innerHTML += `<p class='text-center fw-bold'>${result}</p>`

    triangle.append(triangleResult, img)
    // triangle.append(img)
}