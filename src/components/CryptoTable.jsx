
import React from 'react';
import { useSelector } from 'react-redux';

const CryptoTable = () => {
  const assets = useSelector(state => state.crypto.assets);

  const getColor = (value) => value >= 0 ? 'text-green-500' : 'text-red-500';

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-[1000px] w-full table-auto border-collapse bg-white shadow-md rounded-lg">
        <thead className="bg-gray-100">
          <tr className="text-left text-sm font-medium text-gray-600">
            <th className="p-3">#</th>
            <th className="p-3">Name</th>
            <th className="p-3">Price</th>
            <th className="p-3">1h %</th>
            <th className="p-3">24h %</th>
            <th className="p-3">7d %</th>
            <th className="p-3">Market Cap</th>
            <th className="p-3">Volume(24h)</th>
            <th className="p-3">Circulating Supply</th>
            <th className="p-3">Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, index) => (
            <tr key={asset.id} className="border-b text-sm hover:bg-gray-50 transition">
              <td className="p-3">{index + 1}</td>

              {/* Combined Name, Logo & Symbol */}
              <td className="p-3">
                <div className="flex items-center gap-3">
                  <img src={asset.logo} alt={asset.symbol} className="w-6 h-6" />
                  <div>
                    <div className="font-medium text-sm">{asset.name}</div>
                    <div className="text-xs text-gray-500 uppercase">{asset.symbol}</div>
                  </div>
                </div>
              </td>

              <td className="p-3">${asset.price}</td>
              <td className={`p-3 ${getColor(asset.change1h)}`}>{asset.change1h}%</td>
              <td className={`p-3 ${getColor(asset.change24h)}`}>{asset.change24h}%</td>
              <td className={`p-3 ${getColor(asset.change7d)}`}>{asset.change7d}%</td>
              <td className="p-3">${Number(asset.marketCap).toLocaleString()}</td>

           
              <td className="p-3">
                <div className="flex flex-col text-sm">
                  <span>${Number(asset.volume).toLocaleString()}</span>
                  <span className="text-xs text-gray-500">{asset.volumeText}</span>
                </div>
              </td>

           
              <td className="p-3">
                <div className="flex flex-col text-sm">
                  <span>{asset.supply}</span>
                  <span className="text-xs text-gray-500">{asset.symbol}</span>
                </div>
              </td>

              
              <td className="p-3">
                <img src={asset.chart} alt={`${asset.symbol} chart`} className="h-15 w-full max-w-[100px]" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;

