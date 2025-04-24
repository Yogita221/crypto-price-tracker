
import { createSlice } from '@reduxjs/toolkit';
import { getInitialCryptoData } from '../../utils/generateData';

const initialState = {
  assets: getInitialCryptoData(),
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updateCryptoPrices: (state) => {
      state.assets = state.assets.map(asset => {
        const randomPercent = () => (Math.random() * 2 - 1).toFixed(2); 
        const priceChange = 1 + randomPercent() / 100;
        const newPrice = (parseFloat(asset.price) * priceChange).toFixed(2);
        const newVolume = (parseFloat(asset.volume) * (1 + Math.random() * 0.05)).toFixed(0);

        return {
          ...asset,
          price: newPrice,
          change1h: randomPercent(),
          change24h: randomPercent(),
          change7d: randomPercent(),
          volume: newVolume,
        };
      });
    },
  },
});

export const { updateCryptoPrices } = cryptoSlice.actions;
export default cryptoSlice.reducer;
