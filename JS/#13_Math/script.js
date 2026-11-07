const result = document.getElementById("result");

function check(answer) {
    if (answer === 8) {
        result.textContent = "CORRECT!";
        result.classList.add("win");
        result.classList.remove("lose");
    } else {
        result.textContent = "WRONG! Try Again";
        result.classList.add("lose");
        result.classList.remove("win");
    }
}