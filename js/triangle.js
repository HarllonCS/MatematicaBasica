// Create element
const triangleResult = document.createElement('div')
triangleResult.className = 'result'
// Get elements
const triangle = document.getElementById('triangle')
// Triangle lines (string)
const triangleLine = []
triangleLine.push(document.getElementById('triangleLine1'))
triangleLine.push(document.getElementById('triangleLine2'))
triangleLine.push(document.getElementById('triangleLine3'))

// TRIANGLE functions
resultButton[3].onclick = () => {
    let l1 = Number(triangleLine[0].value)
    let l2 = Number(triangleLine[1].value)
    let l3 = Number(triangleLine[2].value)
    
    // Clean result
    triangleResult.innerHTML = ''

    if (notEmptyAll() && greaterThanZero(l1, l2, l3)) {
        triangleResult.innerHTML += `<p class="text-center fw-bold">${getTriangleType(l1, l2, l3)}</p>`
        triangle.append(triangleResult)
    } else {
        if (triangleLine[0].value.length == 0) {
            alert(`Line 1 is empty!`)
        } else if (triangleLine[1].value.length == 0) {
            alert(`Line 2 is empty!`)
        } else if (triangleLine[2].value.length == 0) {
            alert(`Line 3 is empty!`)
        }
    }
}

const notEmptyAll = function() {
    const triangleBool = []
    triangleBool.push(triangleLine[0].value.length > 0)
    triangleBool.push(triangleLine[1].value.length > 0)
    triangleBool.push(triangleLine[2].value.length > 0)

    return triangleBool[0] && triangleBool[1] && triangleBool[2]
}

const greaterThanZero = function(line1, line2, line3) {
    if (line1 < 0) {
        alert('Line 1 is less than 0')
        return false
    } else if (line2 < 0) {
        alert('Line 2 is less than 0')
        return false
    } else if (line3 < 0) {
        alert('Line 3 is less than 0')
        return false
    } else {
        return true
    }
    
}

function getTriangleType(line1, line2, line3) {
    let sideA = line1 + line2
    let sideB = line1 + line3
    let sideC = line2 + line3

    let result = null

    if ((line1 < sideC) && (line2 < sideB) && (line3 < sideA)) {
        if (sideA == sideB && sideB == sideC) {
            result = 'equilateral'
        } else if (sideA != sideB && sideB != sideC) {
            result = 'scalene'
        } else {
            result = 'isosceles'
        }
    } else {
        result = "<span class=\"text-danger\">It's not a triangle!</span>"
    }
    
    return result
}