const TableRow = ({ asset }) => {
    const getColor = (val) => val >= 0 ? 'text-green-500' : 'text-red-500';
  
    return (
      <tr>
        <td>{asset.id}</td>
        <td><img src={asset.logo} alt={asset.symbol} width="20" /></td>
        <td>{asset.name}</td>
        <td>{asset.symbol}</td>
        <td>${asset.price}</td>
        <td className={getColor(asset.change1h)}>{asset.change1h}%</td>
        <td className={getColor(asset.change24h)}>{asset.change24h}%</td>
        <td className={getColor(asset.change7d)}>{asset.change7d}%</td>
        <td>${asset.marketCap}</td>
        <td>${asset.volume}</td>
        <td>{asset.supply}</td>
        <td><img src={asset.chart} alt="chart" width="100" /></td>
      </tr>
    );
  };
  
  export default TableRow;
  