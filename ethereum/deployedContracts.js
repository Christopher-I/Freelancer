import web3 from './web3';
import supplyContract from './build/SupplyContract.json';


export default(address) =>{
  return new web3.eth.Contract(
    JSON.parse(supplyContract.interface),
    address
  );
};
