
let counterValue = 0;

const counterRef = document.querySelector("#counter");
console.log(counterRef);

const buttonDecrement = document.querySelector(`button[data-action="decrement"]`);
console.log(buttonDecrement);

const buttonIncrement = document.querySelector('button[data-action="increment"]');
console.log(buttonIncrement);

const spanRef = document.querySelector("#value");
spanRef.textContent = counterValue;
console.log(spanRef);

const handleClickDecrement = () => {
    // Для призупинення рахунку нижче нуля можна додати цей "if". За бажанням..
//   if (counterValue > 0) {
//   counterValue-=1
//   spanRef.textContent = counterValue;
//     }
    
  counterValue-=1
  spanRef.textContent = counterValue;
  console.log("Button -1 was clicked");
};

const handleClickIncrement = () => {
  console.log("Button +1 was clicked");
  counterValue += 1
  spanRef.textContent = counterValue;
  console.log(counterValue)
};

buttonDecrement.addEventListener("click", handleClickDecrement);

buttonIncrement.addEventListener("click", handleClickIncrement);