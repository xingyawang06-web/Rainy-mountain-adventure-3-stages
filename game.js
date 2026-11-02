'use strict';
let currentStage = 0;
const collectedKeys = new Set();
const stageButtons = [...document.querySelectorAll('[data-stage]')];
const previous = document.querySelector('#previous');
const next = document.querySelector('#next');

function showStage(stage, focus = true) {
  currentStage = Math.max(0, Math.min(2, stage));
  document.querySelectorAll('main section').forEach((section, index) => {
    section.hidden = index !== currentStage;
  });
  stageButtons.forEach((button, index) => {
    if (index === currentStage) button.setAttribute('aria-current', 'step');
    else button.removeAttribute('aria-current');
  });
  previous.disabled = currentStage === 0;
  next.disabled = currentStage === 2;
  document.querySelector('#progress').textContent = `Stage ${currentStage + 1} of 3`;
  if (focus) document.querySelector(`#heading-${currentStage}`).focus();
}
stageButtons.forEach(button => button.addEventListener('click', () => showStage(Number(button.dataset.stage))));
previous.addEventListener('click', () => showStage(currentStage - 1));
next.addEventListener('click', () => showStage(currentStage + 1));
document.querySelectorAll('[data-answer]').forEach(button => button.addEventListener('click', () => {
  document.querySelector('#answer-feedback').textContent = button.dataset.answer === 'correct'
    ? 'Yes! His return connects family memory with a place and its history. Continue to discover the keys.'
    : 'Try again. Think about Aho and why this place matters to Momaday.';
}));
document.querySelectorAll('[data-key]').forEach(button => button.addEventListener('click', () => {
  collectedKeys.add(button.dataset.key);
  button.setAttribute('aria-pressed', 'true');
  document.querySelector('#key-feedback').textContent = collectedKeys.size === 3
    ? '3 of 3 keys collected. The gate opens! Continue to find your roots.'
    : `${collectedKeys.size} of 3 keys collected.`;
}));
document.querySelector('#finish').addEventListener('click', () => {
  const reflection = document.querySelector('#reflection').value.trim();
  document.querySelector('#reflection-feedback').textContent = reflection
    ? `Your leaf: ${reflection} — Your adventure is complete. Keep growing!`
    : 'Write a thought before adding your leaf.';
});
document.querySelector('#restart').addEventListener('click', () => {
  collectedKeys.clear();
  document.querySelectorAll('[data-key]').forEach(button => button.setAttribute('aria-pressed', 'false'));
  document.querySelector('#key-feedback').textContent = '0 of 3 keys collected.';
  document.querySelector('#answer-feedback').textContent = '';
  document.querySelector('#reflection-feedback').textContent = '';
  document.querySelector('#reflection').value = '';
  showStage(0);
});
showStage(0, false);
