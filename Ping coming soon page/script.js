const form = document.querySelector("#form-control")
const button = document.querySelector(".btn")
const errorText = document.querySelector("small")

button.addEventListener("click", validate)

function validate() {
  if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/) {
    return true
  } else {
    errorText.style.display = "block"
  }
}
