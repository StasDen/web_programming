import { renderCardList, addCostToPage, addCardToPage } from "./dom_util.js";

const findButton = document.getElementById("find-button");
const cancelButton = document.getElementById("cancel-button");
const sortButton = document.getElementById("sort-button");
const countButton = document.getElementById("count-button");
const findInput = document.getElementById("find-input");
const cardsHeader = document.getElementById("cards-h");

// Every obj will be here
let hamsters = [];

// Counter
let c = 0;

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
