import { configureStore } from "@reduxjs/toolkit";
import { clothesReducer, totalReducer } from "./reducer";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

// Development tools
import logger from "redux-logger";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  clothesReducer,
  totalReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, logger],
});

export default store;
