import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/reducer.js";

export const store = configureStore({
  reducer: { contactsReducer },
});
