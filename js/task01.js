// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const categoriesRef = document.querySelector('#categories');

const itemRef = categoriesRef.querySelectorAll('.item');

itemRef.forEach( elem => {
  console.log(`Категория: ${elem.firstElementChild.textContent}
Количество элементов: ${elem.lastElementChild.children.length}`);
});

////////////////////////////////////////////////////////
// const numbers = [1, 2, 3];


// // Функциональный forEach
// numbers.forEach(aaa => console.log(aaa));

// // Указываем параметр idx если нужен доступ к счетчику
// numbers.forEach((aaa, idx) => console.log(`index ${idx}, value ${aaa}`));

