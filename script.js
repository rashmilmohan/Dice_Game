'use strict';
const player1el = document.querySelector('.player--0');
const player2el = document.querySelector('.player--1');
const score1element = document.querySelector('#score--0');
const score2element = document.querySelector('#score--1');
const current1 = document.getElementById('current--0');
const current2 = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');
const btnnew = document.querySelector('.btn--new');

const switch_player = function () {
  document.getElementById(`current--${active_player}`).textContent = 0;
  current_score = 0;
  active_player = active_player === 0 ? 1 : 0;

  player1el.classList.toggle('player--active');
  player2el.classList.toggle('player--active');
};

let player, current_score, active_player, score;
const init = function () {
  score = [0, 0];
  current_score = 0;
  active_player = 0;
  player = true;
  score1element.textContent = 0;
  score2element.textContent = 0;
  current1.textContent = 0;
  current2.textContent = 0;
  diceEl.classList.add('hidden');
  active_player = 0;
  player1el.classList.remove('player--winner');
  player2el.classList.remove('player--winner');
  player1el.classList.add('player--active');
  player2el.classList.remove('player--active');
};

init();

btnroll.addEventListener('click', function () {
  if (player) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      current_score += dice;

      document.getElementById(`current--${active_player}`).textContent =
        current_score;
    } else {
      switch_player();
    }
  }
});
btnhold.addEventListener('click', function () {
  if (player) {
    score[active_player] += current_score;
    document.getElementById(`score--${active_player}`).textContent =
      score[active_player];
    if (score[active_player] >= 20) {
      player = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${active_player}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${active_player}`)
        .classList.remove('player--active');
    } else {
      switch_player();
    }
  }
});

btnnew.addEventListener('click', init);
