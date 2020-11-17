// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// <ul id="gallery"></ul>
// Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryRef = document.querySelector('#gallery')
console.log(galleryRef)

const firstGallery = img => {
  const itemRef = document.createElement('li')
  itemRef.classList.add('item-gallery')


  const itemRef = document.createElement('img'
  imgRef.src = img.url;
  
  )
}



// const createGallery = img => {
//     const itemRef = document.createElement('li');
//     itemRef.classList.add('item-gallery');

//     const imgRef = document.createElement('img');
//     imgRef.src = img.url;
//     imgRef.alt = img.alt;
//     imgRef.classList.add('img-gallery');

//     itemRef.append(imgRef);
//     return itemRef; 
// };

// const imageGallery = images.map(img => createGallery(img));
// galleryRef.append(...imageGallery);

// // add styles

// galleryRef.style.display = "flex";
// galleryRef.style.justifyContent = 'space-between';

// const imgItems = document.querySelectorAll('.img-gallery');
// imgItems.forEach((el) => {
//     el.style.width = '300px';
//     el.style.height = '200px';
    
// });