import * as actions from "./actionTypes";

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.CLOTHES_ADDED:
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          text: action.payload.text,
          price: action.payload.price,
          category: action.payload.category,
          country: action.payload.country,
          relPrice: action.payload.relPrice,
          left: action.payload.left,
          color: action.payload.color,
          imageSrc: action.payload.imageSrc,
        },
      ];
    case actions.CLOTHES_REMOVED:
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
}

export function numReducer(state = 1, action) {
  switch (action.type) {
    case actions.NUMBER_INCREMENTED:
      return (state += 1);
    case actions.NUMBER_DECREMENTED:
      return (state -= 1);
    default:
      return state;
  }
}

export function totalReducer(state = 0, action) {
  switch (action.type) {
    case actions.TOTAL_INCREMENTED:
      return (state += action.payload.number);
    case actions.TOTAL_DECREMENTED:
      return (state -= action.payload.number);
    default:
      return state;
  }
}
