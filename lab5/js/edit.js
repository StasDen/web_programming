import {
  addCardToPage,
  clearInputs,
  renderCardList,
  getInputValues,
  clearNewInputs,
  getNewInputValues,
} from "./dom_util.js";

// import { editHamster } from "./api.js";

const submitButton = document.getElementById("submit-button");
const cardsHeader = document.getElementById("cards-h");
const newTitleInput = document.getElementById("new-title-input");
const newDescInput = document.getElementById("new-description-input");
const newCostInput = document.getElementById("new-cost-input");

// Counters
let c = 0;
let regexCounter = 0;

let hamsters = [];

const newInputRegex = () => {
  const lettersPattern = /[a-zA-Z]+/;
  const numPattern = /^[0-9]+$/;

  if (
    newTitleInput.value == "" ||
    newDescInput.value == "" ||
    newCostInput.value == ""
  ) {
    regexCounter++;
    return 0;
  } else {
    if (newTitleInput.value.search(lettersPattern) === -1) {
      alert("Title data format is invalid!");
      regexCounter++;
    } else if (newDescInput.value.search(lettersPattern) === -1) {
      alert("Description data format is invalid!");
      regexCounter++;
    } else if (newCostInput.value.search(numPattern) === -1) {
      alert("Cost data format is invalid!");
      regexCounter++;
    }
  }
};

const editCard = ({ title, desc, cost }) => {
  c = 0;

  for (const hamster of hamsters) {
    if (
      hamster.title === title ||
      hamster.desc === desc ||
      hamster.cost === cost
    ) {
      hamster.title = newTitleInput.value;
      hamster.desc = newDescInput.value;
      hamster.cost = newCostInput.value;
      localStorage.setItem(c, JSON.stringify(hamster));

      renderCardList(hamsters);
    }

    c++;
  }
};

submitButton.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default reload of the page

  regexCounter = 0;

  // Checking if new input is valid
  newInputRegex();

  // Pulling only properties of obj
  const { title, desc, cost } = getInputValues();

  // const { newTitle, newDesc, newCost } = getNewInputValues();

  if (regexCounter === 0) {
    editCard({ title, desc, cost });

    // const id = 0;
    // editHamster(id, { newTitle, newDesc, newCost });
  }

  clearInputs();
  clearNewInputs();
});

cardsHeader.addEventListener("click", (event) => {
  event.preventDefault();

  const hamster = localStorage.getItem(c);
  const hamsterObj = JSON.parse(hamster);

  hamsters.push(hamsterObj);
  addCardToPage(hamsterObj);
  c++;
});

// Main code
renderCardList(hamsters);
