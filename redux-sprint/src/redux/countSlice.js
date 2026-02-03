import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 50,
  clicked: 0,
};

const CountSlice = createSlice({
  name: "counter activity",
  initialState,
  reducers: {
    counterIncrement: (state) => {
      console.log("increment started");
      state.clicked += 1;
      state.count += 1;
    },
    counterDecrement: (state) => {
      console.log("increment started");
      state.clicked += 1;
      state.count -= 1;
    },
    resetCounter: (state) => {
      state.count = 0;
      state.clicked = 0;
    },
    customValueCounter: (state, action) => {
      state.count = parseInt(action.payload);
    },
  },
  extraReducers: (builder) => {},
});

export const {
  counterIncrement,
  counterDecrement,
  resetCounter,
  customValueCounter,
} = CountSlice.actions;

export default CountSlice.reducer;
