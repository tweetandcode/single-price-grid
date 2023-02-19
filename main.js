import "./style.css";
import { inject } from '@vercel/analytics';

inject();

const ratingOpts = [...document.querySelectorAll('.rating > div')];
const submit = document.querySelector('#submit-rating');

const ratingContainer = document.querySelector('#rating-main');
const resultContainer = document.querySelector('#result');

const resultText = document.querySelector('#result-text');
resultText.innerText = `You selected 0 out of 5`;

ratingContainer.style.display = 'block';
resultContainer.style.display = 'none';

function resetActive() {
  ratingOpts.forEach(r => {
    r.classList.remove('active');
  });
}

ratingOpts.forEach(r => {
  r.addEventListener('click', (e) => {
    resetActive();
    resultText.innerText = `You selected ${e.target.innerText} out of 5`;
    e.target.classList.add('active');
  });
})

function toggleDisplay(element) {
  if(element.style.display !== 'none') element.style.display = 'none';
  else element.style.display = 'block';
}

submit.addEventListener('click', () => {
  toggleDisplay(ratingContainer);
  toggleDisplay(resultContainer);
});