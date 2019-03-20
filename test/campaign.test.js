const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require ('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/SupplyContractFactory.json');
const compiledContract = require('../ethereum/build/SupplyContract.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () =>{
  accounts = await web3.eth.getAccounts();

  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
  .deploy({data: '0x' + compiledFactory.bytecode})
  .send({from: accounts[0], gas:'1500000'});

  await factory.methods.createContract("Supply 200 black wardrobe hinges",'100','100','100','100')
  .send({from: accounts[0], gas:'1500000'});


  [contractAddress] = await factory.methods.getDeployedContractsLength().call();

  SupplyContract = await new web3.eth.Contract(
    JSON.parse(compiledContract.interface),
    contractAddress
  );
  });


  describe('SupplyContracts', ()=>{
    it('deploys a factory and a Supply Contract',()=>{
    assert.ok(factory.options.address);
    assert.ok(SupplyContract.options.address);
    });

    it('marks caller as the contract manager', async () =>{
      const manager = await SupplyContract.methods.manager().call();
      assert.equal(accounts[0],manager);
    });

    it('accepts and registers bids from other accounts', async () =>{
      await SupplyContract.methods.bidOnManufacturing("Exxon Mobil").send({
        value: '100',
        from:accounts[1],
        gas:'1500000'
        });
        assert(await SupplyContract.methods.currentBids(accounts[1]).call());
      });

      it('succesfully picks a winner', async () =>{
        await SupplyContract.methods.bidOnManufacturing("Exxon Mobil").send({
          value: '100',
          from:accounts[2],
          gas:'1500000'
          });
        await SupplyContract.methods.pickManufacturingBidWinner('0').send({
          from:accounts[0],
          gas:'1500000'
          });
      const bid = await SupplyContract.methods.manufacturingBidWinner().call();
      console.log(bid);
      assert.equal(bid.companyName, "Exxon Mobil");
        });

  });
