const titleInput = document.getElementById("title-input");
const descInput = document.getElementById("description-input");
const costInput = document.getElementById("cost-input");

const newTitleInput = document.getElementById("new-title-input");
const newDescInput = document.getElementById("new-description-input");
const newCostInput = document.getElementById("new-cost-input");

const cardsContainer = document.getElementById("cards-container");
const cardsCost = document.getElementById("card-cost-p");

export const getInputValues = () => {
  return {
    title: titleInput.value,
    description: descInput.value,
    cost: costInput.value,
  };
};

export const getNewInputValues = () => {
  return {
    newTitle: newTitleInput.value,
    newDesc: newDescInput.value,
    newCost: newCostInput.value,
  };
};

// Local func
export const getCardId = (id) => `item-${id}`;

// Func to insert into page
export const cardTemplate = ({ id, title, description, cost }) => `
<li id="${getCardId(id)}">
  <div>
    <img src="img/hamster.jpg" alt="Guinea pig" class="hamster-img" />
    <h5>${title}</h5>
    <p>${description}</p>
    <p>${cost}</p>
    <p>
      <button class="btn btn-primary" id='edit-button'><a href="http://127.0.0.1:5500/edit.html?">Edit</a></button>
      <button class="btn btn-danger" id="delete-button">Delete</button>
    </p>
  </div>
</li>`;

export const clearInputs = () => {
  titleInput.value = "";
  descInput.value = "";
  costInput.value = "";
};

export const clearNewInputs = () => {
  newTitleInput.value = "";
  newDescInput.value = "";
  newCostInput.value = "";
};

export const addCardToPage = ({ id, title, description, cost }) => {
  cardsContainer.insertAdjacentHTML(
    "afterbegin",
    cardTemplate({ id, title, description, cost })
  );
};

// Cards === hamsters
export const renderCardList = (cards) => {
  cardsContainer.innerHTML = "";

  for (const card of cards) {
    addCardToPage(card);
  }
};

export const addCostToPage = (cost) => {
  cardsCost.innerHTML = `Total cost is ${cost}`;
};
