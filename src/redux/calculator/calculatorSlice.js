import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total: 0
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    calculate: (state, action) => {
      if (action.payload.operation === "addition") {
        state.total = action.payload.firstNumber + action.payload.secondNumber;
      } else if (action.payload.operation === "subtraction") {
        state.total = action.payload.firstNumber - action.payload.secondNumber;
      } else if (action.payload.operation === "multiplication") {
        state.total = action.payload.firstNumber * action.payload.secondNumber;
      } else if (action.payload.operation === "division") {
        state.total = action.payload.firstNumber / action.payload.secondNumber;
      }
    },
  }
});

export const { calculate } = calculatorSlice.actions;

export default calculatorSlice.reducer;
