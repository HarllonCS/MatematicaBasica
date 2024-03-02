// Table constants
const start = document.querySelector('#start')
const end = document.querySelector('#end')
const num = document.querySelector('#number')
const steps = document.querySelector('#steps')
// Buttons of input boxes in a vector
btn = document.querySelectorAll('.btn')

// Function table
btn[0].addEventListener('click', () => {
    // Numbers for variables
    let startNum = Number(start.value)
    let endNum = Number(end.value)
    let numNum = Number(num.value)
    let stepsNum = Number(steps.value)

    // Generate increasing table
    if (startNum <= endNum) {
        for (startNum; startNum <= endNum; startNum += stepsNum) {
            console.log(`${startNum} X ${numNum} = ${startNum * numNum}\n`);
        }
    // Generate decreasing table
    } else {
        for (startNum; startNum >= endNum; startNum -= stepsNum) {
            console.log(`${startNum} X ${numNum} = ${startNum * numNum}\n`);
        }
    }
})