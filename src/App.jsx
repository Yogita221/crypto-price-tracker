// src/App.jsx
import React, { useEffect } from 'react';
import CryptoTable from './components/CryptoTable';
import { useDispatch } from 'react-redux';
import { updateCryptoPrices } from './features/crypto/cryptoSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateCryptoPrices());
    }, 2000); 

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold text-center p-6">Real-Time Crypto Price Tracker</h1>
      <CryptoTable />
    </div>
  );
}

export default App;
