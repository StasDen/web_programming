import {
  addCardToPage,
  clearInputs,
  renderCardList,
  getInputValues,
  addCostToPage,
} from "./dom_util.js";

const submitButton = document.getElementById("submit-button");
const findButton = document.getElementById("find-button");
const cancelButton = document.getElementById("cancel-button");
const findInput = document.getElementById("find-input");
const sortButton = document.getElementById("sort-button");
const countButton = document.getElementById("count-button");

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

submitButton.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default reload of the page

  // Pulling only properties of obj
  const { title, description, cost } = getInputValues();

  clearInputs();

  addCard({ title, desc: description, cost });
});

findButton.addEventListener("click", (event) => {
  event.preventDefault();

  const foundCard = hamsters.filter(
    (hamster) => hamster.title.search(findInput.value) !== -1
  );

  renderCardList(foundCard);
});

cancelButton.addEventListener("click", (event) => {
  event.preventDefault();

  renderCardList(hamsters);

  findInput.value = "";
});

sortButton.addEventListener("click", (event) => {
  event.preventDefault();

  // Sorting arr by card title
  const sortedHamsters = hamsters.sort((a, b) => {
    const la = a.title.toLowerCase();
    const lb = b.title.toLowerCase();

    // Sorting in desc order
    if (la > lb) {
      return -1;
    } else if (la < lb) {
      return 1;
    } else {
      return 0;
    }
  });

  renderCardList(sortedHamsters);
});

const getSum = (total, num) => {
  return total + Math.round(num);
};

countButton.addEventListener("click", (event) => {
  event.preventDefault();

  const hamstersCost = [];

  for (const hamster of hamsters) {
    const hamsterCost = hamster.cost;

    hamstersCost.push(hamsterCost);
  }

  const totalCost = hamstersCost.reduce(getSum, 0);
  addCostToPage(totalCost);
});

// Main code
renderCardList(hamsters);
