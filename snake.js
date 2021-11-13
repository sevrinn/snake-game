//get elements
const grid = document.querySelector('.grid')
const startButton = document.querySelector('#start')
const score = document.querySelector('#score')
let squares = []
let currentSnake = [2, 1, 0]
let direction = 1

//to generate the playing field 
const createGrid = () => {
  //run for loop 100 times
  for (let i = 0; i < 100; i++) {
    //create div element
    const square = document.createElement('div')
    //add style to the element
    square.classList.add('square')
    //put element into grid
    grid.appendChild(square)
    //push square to array
    squares.push(square)
  }
}
createGrid()

//this draws the snake on the page
currentSnake.forEach(index => squares[index].classList.add('snake'))

//move the snake
const move = () => {
  //remove the tail
  const tail = currentSnake.pop()
  //remove the styling
  squares[tail].classList.remove('snake')
  //add square in direction we're moving
  currentSnake.unshift(currentSnake[0] + direction)
  //add styling
  squares[currentSnake[0]].classList.add('snake')
}

const timerId = setInterval(move, 1000)
clearInterval(timerId)


