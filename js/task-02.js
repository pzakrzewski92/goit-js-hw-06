const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');
ingredients.forEach(element => {
  const newElement = document.createElement("li");
  newElement.textContent = (element);
  class item {element};
list.append(newElement)});
console.log(list);