import {
  addCardToPage,
  clearInputs,
  renderCardList,
  getInputValues,
} from "./dom_util.js";

const submitButton = document.getElementById("submit-button");
const titleInput = document.getElementById("title-input");
const descInput = document.getElementById("description-input");
const costInput = document.getElementById("cost-input");

// Counters
let c = 0;
let regexCounter = 0;

// Every obj will be here
let hamsters = [];

const addCard = ({ title, desc, cost }) => {
  let generatedId = uuid.v1(); // Unique value

  const newObj = {
    id: generatedId,
    title,
    desc,
    cost,
  };

  hamsters.push(newObj);
  addCardToPage(newObj);
};

const addCardToLocalStorage = (event) => {
  event.preventDefault();

  localStorage.setItem(c, JSON.stringify(hamsters[c]));
  c++;
};

const inputRegex = () => {
  const lettersPattern = /[a-zA-Z]+/;
  const numPattern = /^[0-9]+$/;

  if (
    titleInput.value == "" ||
    descInput.value == "" ||
    costInput.value == ""
  ) {
    regexCounter++;
    return 0;
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
  event.preventDefault(); // Prevent default reload of the page

  regexCounter = 0;

  // Checking if input format is correct
  inputRegex();

  // Pulling only properties of obj
  const { title, description, cost } = getInputValues();

  if (regexCounter === 0) {
    addCard({ title, desc: description, cost });
    addCardToLocalStorage(event);
  } else {
    alert("Please, input information!");
  }

  clearInputs();
});

// Main code
renderCardList(hamsters);
