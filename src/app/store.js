import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from '../redux/calculator/calculatorSlice';

export const store = configureStore({
  reducer: {
    calculator: calculatorReducer
  }
});
