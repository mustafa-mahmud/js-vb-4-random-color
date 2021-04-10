'use strict';

const btn = document.querySelector('button');
const letters = '0123456789abcdef';

function randomColor() {
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }

  return color;
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = randomColor();
}

btn.addEventListener('click', changeBackgroundColor);
