/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
const colorList = [
    'cyan',
    'red',
    'blue',
    'yellow',
    'gray',
    'green',
    'orange',
    'purple',
    'pink',
    'magenta',
  ];
  function generatePalette() {
    const palette = document.getElementById('color-palette');
    palette.innerHTML = '';
    let element = document.createElement('div');
    element.className = 'color';
    element.id = 'black';
    element.style.backgroundColor = 'rgb(0, 0, 0)';
    palette.appendChild(element);
    for (let i = 0; i < 3; i +=1) {
        const value = Math.floor(Math.random()* colorList.length);
        const color = colorList[value];
        
     element = document.createElement('div');
      element.className = 'color';
      element.id = color;
      element.style.backgroundColor = color;
      palette.appendChild(element);
      colorList.splice(value);
    }
  }
  generatePalette()
const colorElements = document.getElementsByClassName('color');
for (const element of colorElements) {
  element.addEventListener('click', () => {
    setPenColour(element.id);
    for (const otherElement of colorElements) {
      otherElement.className = 'color';
    }
    element.className = 'color selected';
  });
}
document.getElementById('black').className = 'color selected';
let penColour = 'rgb(0, 0, 0)';

function setPenColour(pen) {
  penColour = pen;
}

function setPixelColour(pixel) {
  pixel.style.backgroundColor = penColour;
}
const pixelElements = document.getElementsByClassName('pixel');
document.getElementById('clear-board').addEventListener('click', function () {
  for (const element of pixelElements) {
    element.style.backgroundColor = 'rgb(255, 255, 255)';
  }
});

function generateBoard(size) {
  if (size < 5) {
    size = 5;
  }
  if (size > 50) {
    size = 50;
  }
  const board = document.getElementById('pixel-board');
  board.innerHTML = '';
  for (let i = 0; i < size; i++) {
    const row = document.createElement('div');
    row.className = 'row';
    for (let j = 0; j < size; j++) {
      const element = document.createElement('div');
      element.className = 'pixel';
      element.addEventListener('click', function () {
        element.style.backgroundColor = penColour;
      });
      row.appendChild(element);
    }
    board.appendChild(row);
  }
}
generateBoard(5);
document
  .getElementById('generate-board')
  .addEventListener('click', function () {
    if (!document.getElementById('board-size').value) {
      alert('Board inválido!');
      return;
    }
    const size = Number(document.getElementById('board-size').value);
    generateBoard(size);
  });
