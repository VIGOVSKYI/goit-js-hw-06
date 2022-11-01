
const inputRef = document.querySelector("#validation-input");
console.log(inputRef);

const handleClickBlur = () => {
  console.log("Получил Блур");

  const inputRefLength = inputRef.value.length;
  console.log(inputRefLength);

  const numberDataLength = Number(inputRef.dataset.length); 
  console.log(numberDataLength);

  inputRef.classList.add("invalid");
  
  if (inputRefLength === numberDataLength) {
    console.log(inputRefLength);
    console.log(numberDataLength);
   
    inputRef.classList.replace("invalid", "valid");
    console.log("valid",inputRef.classList);
  } else {

  inputRef.classList.replace("valid", "invalid");
  console.log("invalid",inputRef.classList);
  }
};

inputRef.addEventListener("blur", handleClickBlur);
