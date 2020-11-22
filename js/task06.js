// Напиши скрипт, который бы при потере фокуса на
// инпуте, проверял его содержимое на правильное
// количество символов.
// Сколько символов должно быть в инпуте,
// указывается в его атрибуте data - length.
// Если введено подходящее количество, то
// border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы
// valid и invalid.

const validationInputRef = document.getElementById('validation-input');
const lengthRef = +validationInputRef.attributes['data-length'].value;

function checkValid() {
    const currentInput = validationInputRef.value.length;

    if (currentInput === lengthRef) {
        validationInputRef.classList.add('valid');
        validationInputRef.classList.remove('invalid');
    } else {
        validationInputRef.classList.add('invalid');
        validationInputRef.classList.remove('valid');
    }
}

validationInputRef.addEventListener('blur', checkValid);


