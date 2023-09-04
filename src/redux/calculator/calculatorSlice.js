import { createSlice } from "@reduxjs/toolkit";

// Constants for operation types
export const ADDITION = 'addition';
export const SUBTRACTION = 'subtraction';
export const MULTIPLICATION = 'multiplication';
export const DIVISION = 'division';

const initialState = {
  total: 0
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    calculate: (state, action) => {
      const firstNumber = action.payload.firstNumber;
      const secondNumber = action.payload.secondNumber;
      const operation = action.payload.operation;

      switch (operation) {
        case ADDITION:
          state.total = firstNumber + secondNumber;
          break;
        case SUBTRACTION:
          state.total = firstNumber - secondNumber;
          break;
        case MULTIPLICATION:
          state.total = firstNumber * secondNumber;
          break;
        case DIVISION:
          state.total = firstNumber / secondNumber;
          break;
        default:
          state.total = 'error';
      }
    },
  }
});

export const { calculate } = calculatorSlice.actions;

export default calculatorSlice.reducer;
