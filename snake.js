//get elements
const grid = document.querySelector('.grid')
const startButton = document.querySelector('#start')
const score = document.querySelector('#score')
let squares = []
let currentSnake = [2, 1, 0]
let direction = 1
const width = 10
let fruitIndex = 0

//to generate the playing field grid
const createGrid = () => {
  //run for loop 100 times
  for (let i = 0; i < width * width; i++) {
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
  //check if snake head has hit wall or itself
  if (
    (currentSnake[0] + width >= width * width && direction === width) || //if snake hits top
    (currentSnake[0] % width === width - 1 && direction === 1) || //if snake hits right
    (currentSnake[0] % width === 0 && direction === -1) || //if snake hits left
    (currentSnake[0] - width <= 0 && direction === -width) || //if snake hits bottom
    squares[currentSnake[0] + direction].classList.contains('snake') //if snake hits itself
  )
  //stops game if any of this is detected
  return clearInterval(timerId)

  //remove the tail
  const tail = currentSnake.pop()
  //remove the styling
  squares[tail].classList.remove('snake')
  //add square (new head) in direction we're moving
  currentSnake.unshift(currentSnake[0] + direction)
  //add styling
  squares[currentSnake[0]].classList.add('snake')
}

//has move run every second (slow af, lol)
const timerId = setInterval(move, 1000)

//generate fruit on screen
const generateFruit = () => {
  do {
    fruitIndex = Math.floor(Math.random() * squares.length)
    } while (squares[fruitIndex].classList.contains('snake'))
  squares[fruitIndex].classList.add('fruit')
}
generateFruit()


const control = (e) => {
  if (e.key === 'ArrowRight') {
    console.log('right pressed')
    direction = 1
  } else if (e.key === 'ArrowUp') {
    console.log('up pressed')
    direction = -width
    console.log(direction)
  } else if (e.key === 'ArrowDown') {
    console.log('down pressed')
    direction = +width
    
  } else if (e.key === 'ArrowLeft') {
    console.log('left pressed')
    direction = -1
    
  }
}
document.addEventListener('keyup', control)


