import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    add: (state, action) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id)

      if(existingItem){
        existingItem.quantity += 1
      }
      else{
       state.cartItems.push({...action.payload , quantity :1})
      }

    },
    remove: (state, action) => {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    },
  },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
