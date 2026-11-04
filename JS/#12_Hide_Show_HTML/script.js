const myImage = document.getElementById("myImage");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", () => {
    
  myImage.classList.toggle("hidden");

  if (myImage.classList.contains("hidden")) {
    myButton.textContent = "Show";
  } else {
    myButton.textContent = "Hide";
  }
});