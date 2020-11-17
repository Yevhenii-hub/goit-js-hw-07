// В JS есть массив строк.

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];

// Напиши скрипт, который для каждого элемента массива ingredients 
// создаст отдельный li, после чего вставит все li за одну операцию в
// список ul.ingredients.Для создания DOM - узлов используй document.createElement().

const ingredientsRef = document.querySelector('#ingredients')

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingridientsVegetables = ingredients.reduce(
   (string, item) => string + `<li>${item}</li>`,
  ""
);
console.log(ingridientsVegetables)

ingredientsRef.innerHTML = ingridientsVegetables
 


// ingredients.forEach(element => console.log(element));
// const addLiIngredients = document.createElement('li')
// console.log(addLiIngredients)
// addLiIngredients.textContent = ingredients;
// //  ////////////////////


// const addLiIngredients = document.createElement('li')

// addLiIngredients.textContent = ingredients
// console.log(addLiIngredients)

// const ingredientsRef = document.querySelector('ingredients')
// ingredientsRef.forEach(element => console.log(element))



// const createListIngredients = ingredient => {
//   const ingredientName = document.createElement('li');
//   ingredientName.textContent = ingredient;

//   return ingredientName;
// };

// const ingredientsRef = document.querySelector('#ingredients');

// const ingredientList = ingredients.map(el => createListIngredients(el));

// ingredientsRef.append(...ingredientList);

