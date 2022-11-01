

const arrayOfCategories = document.querySelectorAll(".item");

const NumberOfCategories = arrayOfCategories.length;

console.log("Number Of Categories", NumberOfCategories);

const items = document.querySelectorAll('.item');

for (const item of items) {
  // console.log('item', item);
  const title = item.querySelectorAll('h2');
  // console.log(title);
  const titleText = title[0].textContent;
  console.log('Category:', titleText);
  const list = item.querySelectorAll('li');
  const listLength = list.length;
  console.log('Element:', listLength);
}