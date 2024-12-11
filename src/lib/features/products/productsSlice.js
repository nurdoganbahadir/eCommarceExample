import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProducts } from "./productsApi"; // API fonksiyonunu import et

// Async thunk: getAllProducts için async işlemi yapar
export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async () => {
    const response = await getAllProducts();
    return response; // response'u payload olarak döndür
  }
);

const initialState = {
  products: [],
  status: "idle",
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setProducts } = productSlice.actions;

export const selectProducts = (state) => state.products.products;
export const selectStatus = (state) => state.products.status;

export default productSlice.reducer;
