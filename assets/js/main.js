/* const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true, */
  
    // If we need pagination
/*     pagination: {
      el: '.swiper-pagination',
    }, */
  
    // Navigation arrows
/*     navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }, */
  
    // And if we need scrollbar
/*     scrollbar: {
      el: '.swiper-scrollbar',
    }, */
/*   }); */

// Налаштування
const myArray = [];

// Змініть код лише під цим рядком
let i = 0 

while (i < 5 ){
  myArray.unshift (i)
  i++
}

console.log(myArray)