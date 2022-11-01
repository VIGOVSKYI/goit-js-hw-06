const inputRef = document.querySelector("#name-input");
console.log(inputRef);

const spanRef = document.querySelector("#name-output");
console.log(spanRef);

const handleInput = () => {
  
  if (inputRef.value === "") {
    spanRef.textContent = "Anonymous"
  } else {
    spanRef.textContent = inputRef.value
      console.log(inputRef.value);
  }
    console.log(inputRef);
}

inputRef.addEventListener("input", handleInput);