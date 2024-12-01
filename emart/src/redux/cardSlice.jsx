import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const itemIndex = state.products.find((item) => item.id === newItem.id)

      if (itemIndex) {
           itemIndex.quantity++;
           itemIndex.totalPrice += newItem.price;
      } else {
           state.products.push({
              id: newItem.id,
              image: newItem.image,
              name: newItem.name,
              price: newItem.price,
              category: newItem.category,
              quantity: 1,
              totalPrice: newItem.price,
              
        });
      }
      state.totalPrice += newItem.price;
      state.totalQuantity ++;
    },
  },
});

export const { addToCart } = cardSlice.actions;
export default cardSlice.reducer;
