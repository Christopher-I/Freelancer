import web3 from './web3';
import supplyContract from './build/SupplyContract.json';
import deployedContracts from './deployedContracts';


export default async(address) =>{
  const supplyContract = deployedContracts(address);

  return await supplyContract.methods.getSummary().call();

};
