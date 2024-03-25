const triangleResult = document.createElement('div')
triangleResult.className = 'result'

// const triangleLine = []
// triangleLine[0] = document.getElementById('triangleLine1')
// triangleLine[1] = document.getElementById('triangleLine2')
// triangleLine[2] = document.getElementById('triangleLine3')

const triangle = document.getElementById('triangle')
const triangleBtn = document.querySelectorAll('.btn')[3]

triangleBtn.onclick = () => {
    let line1 = Number(document.getElementById('triangleLine1').value)
    let line2 = Number(document.getElementById('triangleLine2').value)
    let line3 = Number(document.getElementById('triangleLine3').value)

    let sideA = line1 + line2
    let sideB = line1 + line3
    let sideC = line2 + line3

    // let result = null

    console.log(sideA == sideB && sideB == sideC)

    // if ((line1 < line2 + line3) && (line2 < line1 + line3) && (line3 < line1 + line2)) {
        
    // } else {
        
    // }

    // triangleResult.innerHTML = ''
    // triangleResult.innerHTML += `<p class="text-center fw-bold">${straight[0].value}</p>`

    // triangle.append(triangleResult)
}