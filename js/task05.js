// Напиши скрипт который, при наборе текста в инпуте
// input#name - input(событие input), подставляет его 
// текущее значение в span#name - output.Если инпут пустой, в спане 
// должна отображаться строка 'незнакомец'.


const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

nameInputRef.addEventListener('input', i => {
  nameOutputRef.textContent = i.target.value ? i.target.value : 'незнайомець';
});
