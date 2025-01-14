import { createSlice } from "@reduxjs/toolkit";
// import plant-1 from "../public/plant-1"

export const productsSlice = createSlice({
  name: "products",
  initialState: [
    {
      img: "https://cdn.pixabay.com/photo/2024/03/05/14/55/ai-generated-8614707_1280.jpg",
      name: "Product 1",
      cost: 10,
      quantity: 0,
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/11/20/08/03/cactus-1842095_1280.jpg",
      name: "Product 2",
      cost: 20,
      quantity: 0,
    },
    {
      img: "https://cdn.pixabay.com/photo/2022/01/18/16/03/pigmyweeds-6947384_1280.jpg",
      name: "Product 3",
      cost: 40,
      quantity: 0,
    },
    {
      img: "https://www.shutterstock.com/image-photo/monstera-jungle-plant-pot-260nw-2493033925.jpg",
      name: "Product 4",
      cost: 60,
      quantity: 0,
    },
    {
      img: "https://img.freepik.com/free-photo/monstera-deliciosa-plant-pot_53876-133116.jpg?semt=ais_hybrid",
      name: "Product 5",
      cost: 35,
      quantity: 0,
    },
    {
      img: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHBsYW50fGVufDB8fDB8fHww",
      name: "Product 6",
      cost: 25,
      quantity: 0,
    },
  ],
  reducers: {
    addQuantity: (state, action) => {
      const { payload: index } = action;
      state[index].quantity++;
    },
    subtractQuantity: (state, action) => {
      const { payload: index } = action;
      state[index].quantity--;
    },
    deleteQuantity: (state, action) => {
      const { payload: index } = action;
      state[index].quantity = 0;
    },
  },
});

export const { addQuantity, subtractQuantity, deleteQuantity } = productsSlice.actions;

export default productsSlice.reducer;
