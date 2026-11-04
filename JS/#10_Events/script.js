const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", () => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH! 😣";
});

myButton.addEventListener("mouseover", ()  => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Don't do it 😲";
});

myButton.addEventListener("mouseout", () => {
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click Me 😀";
});