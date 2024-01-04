import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmt: 0,
  },
  reducers: {
    ADD_ITEM: (state, action) => {
      // payload = item
      const items = [...state.items];
      const { payload } = action;
      const index = items.findIndex((item) => item.id === payload.id);
      if (index > -1) {
        items[index] = {
          ...items[index],
          quantity: items[index].quantity + 1,
        };
      } else {
        items.push({
          ...payload,
          quantity: 1,
        });
      }
      state.items = items;
      state.totalAmt = state.totalAmt + payload.discountedPrice;
    },
    REMOVE_ITEM: (state, action) => {
      //payload = id
      const items = [...state.items];
      const { payload } = action;
      const index = items.findIndex((item) => item.id === payload);
      state.totalAmt = state.totalAmt - items[index].discountedPrice;

      if (items[index].quantity === 1) {
        items.splice(index, 1);
      } else {
        items[index] = {
          ...items[index],
          quantity: items[index].quantity - 1,
        };
      }
      state.items = items;
    },
    CLEAR_CART: (state) => {
      state.items = [];
      state.totalAmt = 0;
    },
  },
});

export const { ADD_ITEM, REMOVE_ITEM, CLEAR_CART } = cartSlice.actions;

export default cartSlice.reducer;
