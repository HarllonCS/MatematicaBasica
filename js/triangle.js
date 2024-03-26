// Create element
const triangleResult = document.createElement('div')
triangleResult.className = 'result'
// Get elements
const triangle = document.getElementById('triangle')
const triangleBtn = document.querySelectorAll('.btn')[3]
// Triangle lines (string)
const triangleLine = []
triangleLine[0] = document.getElementById('triangleLine1')
triangleLine[1] = document.getElementById('triangleLine2')
triangleLine[2] = document.getElementById('triangleLine3')

// TRIANGLE functions
triangleBtn.onclick = () => {
    // Lines of the triangle (integer / float)
    let line1 = Number(triangleLine[0].value)
    let line2 = Number(triangleLine[1].value)
    let line3 = Number(triangleLine[2].value)
    // Sides of the triangle
    let sideA = line1 + line2
    let sideB = line1 + line3
    let sideC = line2 + line3
    // Result variable initialization
    let result = null

    // Clean screen
    triangleResult.innerHTML = '' 
    // Verify if it's a triangle
    if ((line1 < sideC) && (line2 < sideB) && (line3 < sideA)) {
        // EQUILATERAL triangle
        if (sideA == sideB && sideB == sideC) {
            result = 'Equilateral'
        // SCALENE triangle
        } else if (sideA != sideB && sideB != sideC) {
            result = 'Scalene'
        // ISOSCELES triangle
        } else {
            result = 'Isosceles'
        }
    // If it's not a triangle
    } else {
        result = '<span class="text-danger">It\'s not a triangle!</span>'
    }

    triangleResult.innerHTML += `<p class="text-center fw-bold">${result}</p>`

    triangle.append(triangleResult)
}