import { onDragAndDrop } from "./drag_and_drop.js";

const titleInput = document.getElementById("title-input");
const descInput = document.getElementById("description-input");
const costInput = document.getElementById("cost-input");
const cardsContainer = document.getElementById("cards-container");
const cardsCost = document.getElementById("card-cost-p");
export const EDIT_BUTTON_PREFIX = "edit-button-";

export const getInputValues = () => {
  return {
    title: titleInput.value,
    description: descInput.value,
    cost: costInput.value,
  };
};

// Func to insert into page
export const cardTemplate = ({ id, title, description, cost }) => `
<li class="card-li" id="${id}">
  <div>
    <img src="./img/hamster.jpg" alt="Guinea pig" class="hamster-img" />
    <h5>${title}</h5>
    <p>${description}</p>
    <p>${cost}</p>
    <button class="btn btn-primary" id='${EDIT_BUTTON_PREFIX}${id}'>Edit</button>
  </div>
</li>`;

export const clearInputs = () => {
  titleInput.value = "";
  descInput.value = "";
  costInput.value = "";
};

export const addCardToPage = (
  { id, title, description, cost },
  onRemoveItem,
  onEdit
) => {
  cardsContainer.insertAdjacentHTML(
    "afterbegin",
    cardTemplate({ id, title, description, cost })
  );

  const element = document.getElementById(id);
  element.onmousedown = onDragAndDrop(element, onRemoveItem, onEdit);

  const editButton = document.getElementById(`${EDIT_BUTTON_PREFIX}${id}`);
  editButton.addEventListener("click", onEdit);

  // IMPORTANT when using drag-and-drop
  editButton.onmousedown = (e) => e.stopPropagation();
};

// Cards === hamsters
export const renderCardList = (cards, onRemoveItem, onEdit) => {
  cardsContainer.innerHTML = "";

  for (const card of cards) {
    addCardToPage(card, onRemoveItem, onEdit);
  }
};

export const addCostToPage = (cost) =>
  (cardsCost.innerHTML = `Total cost is ${cost}`);
