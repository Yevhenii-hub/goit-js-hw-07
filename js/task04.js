// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса


const counterRef = document.getElementById('value');
const btnIncrementRef = document.querySelector('[data-action="increment"]');
const btnDecrementRef = document.querySelector('[data-action="decrement"]');

let counterValue = 0;
const currentValue = () => {
  counterRef.textContent = counterValue;
};
const increment = () => {
  counterValue += 1;
};
const decrement = () => {
  counterValue -= 1;
};

btnIncrementRef.addEventListener('click', () => {
  increment();
  currentValue();
});

btnDecrementRef.addEventListener('click', () => {
  decrement();
  currentValue();
});

