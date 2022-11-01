function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const btnRef = document.querySelector(".change-color");
console.log(btnRef);

const spanRef = document.querySelector(".color");
console.log(spanRef);

const divRef = document.querySelector(".widget");
console.log(divRef);

function handleClick () {

divRef.style.backgroundColor = getRandomHexColor();

spanRef.textContent = `${divRef.style.backgroundColor}`;

console.log(spanRef.textContent);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

}

btnRef.addEventListener("click",handleClick);
