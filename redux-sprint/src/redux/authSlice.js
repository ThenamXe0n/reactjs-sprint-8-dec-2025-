import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userDetails: null,
  isLoading: false,
  role: "user",
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers:{},
  extraReducers:()=>{
    
  } //async function and logic execution
});


export default AuthSlice.reducer
