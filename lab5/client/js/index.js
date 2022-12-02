import { getAllHamsters, deleteHamster, editHamster } from "./api/api.js";
import {
  clearInputs,
  renderCardList,
  addCostToPage,
  getInputValues,
  EDIT_BUTTON_PREFIX,
} from "./dom_util.js";

const findButton = document.getElementById("find-button");
const cancelButton = document.getElementById("cancel-button");
const sortButton = document.getElementById("sort-button");
const countButton = document.getElementById("count-button");
const findInput = document.getElementById("find-input");

let hamsters = [];

const onEditItem = (element) => {
  const id = element.target.id.replace(EDIT_BUTTON_PREFIX, ""); // Extracting "id"

  const { title, description, cost } = getInputValues();
  clearInputs();

  editHamster(id, { title, description, cost }).then(refetchAllHamsters);
};

const onRemoveItem = (id) => deleteHamster(id).then(refetchAllHamsters);

const refetchAllHamsters = async () => {
  const allHamsters = await getAllHamsters();

  hamsters = allHamsters;
  renderCardList(hamsters, onRemoveItem, onEditItem);
};

const getSum = (total, num) => {
  return total + Math.round(num);
};

findButton.addEventListener("click", (event) => {
  event.preventDefault();

  const foundCard = hamsters.filter(
    (hamster) => hamster.title.search(findInput.value) !== -1
  );

  renderCardList(foundCard, onRemoveItem, onEditItem);
});

cancelButton.addEventListener("click", (event) => {
  event.preventDefault();

  renderCardList(hamsters, onRemoveItem, onEditItem);

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

  renderCardList(sortedHamsters, onRemoveItem, onEditItem);
});

countButton.addEventListener("click", (event) => {
  event.preventDefault();

  const hamstersCost = [];

  for (const hamster of hamsters) {
    hamstersCost.push(hamster.cost);
  }

  const totalCost = hamstersCost.reduce(getSum, 0);
  addCostToPage(totalCost);
});

// Main code
refetchAllHamsters();
