//get elements
const grid = document.querySelector('.grid')
const startButton = document.querySelector('#start')
const score = document.querySelector('#score')
let squares = []

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