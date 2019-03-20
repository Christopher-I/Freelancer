import web3 from './web3';
import ContractFactory from './build/SupplyContractFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(ContractFactory.interface),
  '0x70D65f22A2D1DDBBf768c12aE8c0217A393E36a7'
);

export default instance;
