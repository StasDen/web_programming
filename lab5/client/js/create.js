import { postHamster } from "./api/api.js";
import { clearInputs, renderCardList, getInputValues } from "./dom_util.js";

const submitButton = document.getElementById("submit-button");
const titleInput = document.getElementById("title-input");
const descInput = document.getElementById("description-input");
const costInput = document.getElementById("cost-input");

let regexCounter = 0;
let hamsters = [];

// Validating input
const inputRegex = () => {
  const lettersPattern = /[a-zA-Z]+/;
  const numPattern = /^[0-9]+$/;

  if (
    titleInput.value == "" ||
    descInput.value == "" ||
    costInput.value == ""
  ) {
    return regexCounter++;
  } else {
    if (titleInput.value.search(lettersPattern) === -1) {
      alert("Title data format is invalid!");
      regexCounter++;
    } else if (descInput.value.search(lettersPattern) === -1) {
      alert("Description data format is invalid!");
      regexCounter++;
    } else if (costInput.value.search(numPattern) === -1) {
      alert("Cost data format is invalid!");
      regexCounter++;
    }
  }
};

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  regexCounter = 0;

  // Checking input
  inputRegex();

  const { title, description, cost } = getInputValues();

  if (regexCounter === 0) {
    postHamster({ title, description, cost });
  } else {
    alert("Please, input information!");
  }

  clearInputs();
});

// Main code
renderCardList(hamsters);
