import * as actions from "./actionTypes";

export const addClothes = (clothes) => ({
  type: actions.CLOTHES_ADDED,
  payload: {
    id: clothes.id,
    title: clothes.title,
    text: clothes.text,
    price: clothes.price,
    category: clothes.category,
    country: clothes.country,
    relPrice: clothes.relPrice,
    left: clothes.left,
    color: clothes.color,
    imageSrc: clothes.imageSrc,
    inCart: clothes.inCart,
  },
});

export const removeClothes = (id) => ({
  type: actions.CLOTHES_REMOVED,
  payload: {
    id,
  },
});

export const incrementTotal = (number) => ({
  type: actions.TOTAL_INCREMENTED,
  payload: {
    number,
  },
});

export const decrementTotal = (number) => ({
  type: actions.TOTAL_DECREMENTED,
  payload: {
    number,
  },
});
