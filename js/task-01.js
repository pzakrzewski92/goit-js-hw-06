const categories = document.querySelector('#categories');
console.log(categories.length);

categories.forEach(function (number, item) {
    console.log(`<h2> ${item}, wartość ${number}</h2>`);
  });

