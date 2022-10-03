import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = "https://api.coinstats.app/public/v1/coins";

export const fetchCryptos = createAsyncThunk(
  "features/fetchCrypto",
  async () => {
    const res = await fetch(baseURL);
    const data = await res.json();
    return data.coins;
  }
);

const initialState = [];
export const crytopSlice = createSlice({
  name: "crypto",
  initialState,

  extraReducers: {
    [fetchCryptos.fulfilled]: (state, action) => action.payload,
  },
});

export default crytopSlice.reducer;
