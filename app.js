'use strict';

const btn = document.querySelector('button');
const h1 = document.querySelector('h1');
const letters = '0123456789abcdef';

function randomColor() {
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }

  return color;
}

function changeBackgroundColor() {
  h1.textContent = randomColor();
  document.body.style.backgroundColor = randomColor();
}

btn.addEventListener('click', changeBackgroundColor);
