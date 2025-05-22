import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const Slices = createSlice({
  name: "userdata",
  initialState: {
    userviewpindata: [],
    userdata: [{ userid: "", name: "" }],
    ammountdata: [],
    password:"",
    newPassword:"",
    confirmPassword:"",
    fromdate:null,
    todate:null,
    transactionPassword:"",
    userid:"",
    loader:false
    
  },
  reducers: {
    setuserviewpindata: (state, action) => {
      state.userviewpindata = action.payload;
    },
    setuserdata: (state, action) => {
      state.userdata = action.payload;
    },
    setammoutdata: (state, action) => {
      state.ammountdata = action.payload;
    },
    setpassword: (state, action) => {
      state.password = action.payload;
    },
    setnewPasword: (state, action) => {
      state.newPassword = action.payload;
    },
    setconfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },
    setfromdate:(state,action) => {
      state.fromdate = action.payload
    },
    settodate:(state,action) => {
      state.todate = action.payload
    },
    setTransactionPass:(state,action)=>{
      state.transactionPassword=action.payload
    },
    setloader:(state,action) => {
      state.loader = action.payload
    }
  },
});
export const userdataActions = Slices.actions;
export default Slices.reducer;

 