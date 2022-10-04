import { configureStore } from '@reduxjs/toolkit';
import CryptoReducer, {
  fetchCryptos,
} from '../features/cryptoFetch/CryptoSlice';

export const store = configureStore({
  reducer: {
    crypto: CryptoReducer,
  },
});

store.dispatch(fetchCryptos());
