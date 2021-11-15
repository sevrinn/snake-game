//get DOM elements
const grid = document.querySelector('.grid')
const startButton = document.querySelector('#start')
const scoreDisplay = document.querySelector('#score')

//create some required variables
//player score
let score = 0
// a place to generate grid
let squares = []

//our beginning baby snek 🐍
let currentSnake = [2, 1, 0]

//x axis
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

//this draws that ol snake on the page
currentSnake.forEach(index => squares[index].classList.add('snake'))

//move the snake
const move = () => {
  //check if snakes head has hit wall or itself
  if (
    (currentSnake[0] + width >= width * width && direction === width) || //if snake hits top
    (currentSnake[0] % width === width - 1 && direction === 1) || //if snake hits right
    (currentSnake[0] % width === 0 && direction === -1) || //if snake hits left
    (currentSnake[0] - width <= 0 && direction === -width) || //if snake hits bottom
    squares[currentSnake[0] + direction].classList.contains('snake') //if snake hits itself
  )
  //stops game if any of the above is detected
  return clearInterval(timerId)

  //remove the tail
  const tail = currentSnake.pop()

  //remove the styling
  squares[tail].classList.remove('snake')

  //add square (new head) in direction we're moving
  currentSnake.unshift(currentSnake[0] + direction)

  //snake head eating apple 
  if (squares[currentSnake[0]].classList.contains('fruit')) {
    //remove apple class
    squares[currentSnake[0]].classList.remove('fruit')
    //grow snake by adding snake class
    squares[tail].classList.add('snake')
    
    //grow snake array
    currentSnake.push(tail)
    //generate new fruit
    generateFruit()
    //add 1 to score
    score++
    scoreDisplay.textContent = score
    //speed up game
  }
  //add styling
  squares[currentSnake[0]].classList.add('snake')
}

//snake moves automatically every second (slow af, lol)
const timerId = setInterval(move, 1000)

//generate fruit on screen
const generateFruit = () => {
  do {
    fruitIndex = Math.floor(Math.random() * squares.length)
    } while (squares[fruitIndex].classList.contains('snake'))
  squares[fruitIndex].classList.add('fruit')
}
generateFruit()

//directional control
const control = (e) => {
  if (e.key === 'ArrowRight') {
    console.log('right pressed')
    //move right
    direction = 1
  } else if (e.key === 'ArrowUp') {
    console.log('up pressed')
    //move up
    direction = -width
    console.log(direction)
  } else if (e.key === 'ArrowDown') {
    console.log('down pressed')
    //move down
    direction = +width
    
  } else if (e.key === 'ArrowLeft') {
    console.log('left pressed')
    //move left
    direction = -1
    
  }
}
//document is listening for anytime a key is pressed down and then it runs control()
document.addEventListener('keydown', control)


