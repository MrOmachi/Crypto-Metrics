import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'https://api.coinstats.app/public/v1/coins';

export const fetchCryptos = createAsyncThunk(
  'features/fetchCrypto',
  async () => {
    const res = await fetch(baseURL);
    const data = await res.json();
    return data.coins;
  },
);

export const crytopSlice = createSlice({
  name: 'crypto',
  initialState: { crypto: [], status: 'idle' },

  extraReducers: {
    [fetchCryptos.fulfilled]: (state, { payload }) => ({
      ...state,
      status: 'idle',
      crypto: payload,
    }),
    [fetchCryptos.pending]: ((state) => ({
      ...state, status: 'pending',
    })),
  },
});

export default crytopSlice.reducer;
