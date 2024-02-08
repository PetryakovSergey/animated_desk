const board = document.querySelector('#board');
const colors = ['#DC143C', '#C71585', '#FF4500', '#32CD32', '#20B2AA', '#4169E1']
const SQUARES_NUMBER = 810

for (let index = 0; index < SQUARES_NUMBER; index++) {
    const square = document.createElement('div');
    square.classList.add('square')

    square.addEventListener('mouseover', function (e) {
        setColor(square)
    });

    square.addEventListener('mouseleave', function (e) {
        removeColor(square)
    });

    board.append(square)

}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}