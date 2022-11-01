const inputRef = document.querySelector("#font-size-control");
console.log(inputRef);

const spanRef = document.querySelector("#text");
console.log(spanRef);

const inputEventRange = () => {

    const numberInput = Number(inputRef.value);
    // console.log(typeof numberInput);
    // console.log("Ввод значения");

    spanRef.style.fontSize = numberInput + "px";
    console.log(typeof spanRef.style.fontSize);
};

inputRef.addEventListener("input", inputEventRange);