const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
  
const ingredientsReff = document.querySelector("#ingredients");

console.log(ingredientsReff);

  for(const ingredient of ingredients) {

  const ingredientItem = document.createElement("li");


  ingredientItem.textContent = ingredient;

  ingredientItem.classList.add("item");
    
  ingredientsReff.append(ingredientItem);
  
}
