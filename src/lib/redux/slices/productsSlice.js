import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (payload, thunkAPI) => {
    const { categoryName } = payload;
    const res = fetch(`../../api/products/category/${categoryName}`)
      .then((res) => res.json())
      .catch((err) => console.log(err));
    return res;
  }
);

export const productsSlide = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(HYDRATE, (state, action) => {
      return {
        ...state,
        ...action.payload.products,
      };
    });
  },
});
const { reducer } = productsSlide;
export default reducer;
