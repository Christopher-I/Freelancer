import React, {Component} from 'react';
import { Table,Button} from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import deployedContracts from '../ethereum/deployedContracts';

class RequestRow extends Component {
  state = {
  Winner:'bidder',
  loadingWithdrawBid:false,
  loadingPickWinner:false,
  };
  static async getInitialProps(){
    const address1 = address;

    return {
      address1

    };
  }




  pickWinner= async (event) =>{
  this.setState({loadingPickWinner:true});
  try{
    const accounts = await web3.eth.getAccounts();
    await deployedContracts(this.props.address).methods
    .pickBidWinner(this.props.index)
    .send({
      from:accounts[0]
    });

  }catch (err) {
    this.setState({errorMessage: err.message});
    console.log(err);
  }
  this.setState({loadingPickWinner:false});
  };


  withdrawBid = async (event) =>{
  this.setState({loadingWithdrawBid:true});
  try{
    const accounts = await web3.eth.getAccounts();
    await deployedContracts(this.props.address).methods
    .withdrawBid(this.props.index)
    .send({
      from:accounts[0]
    });

  }catch (err) {
    this.setState({errorMessage: err.message});
    console.log(err);
  }
  this.setState({loadingWithdrawBid:false});
  };

  getState(){
    if (this.props.bid[3] ==false){
      return "bidder";
    }else{
      return "winner";
    }
  }


render(){
  const {Row, Cell} = Table;

    return (
      <Row disabled ={this.props.bid[3]}>
      <Cell>{this.props.index}</Cell>
      <Cell>{this.props.bid[1]}</Cell>
      <Cell>{this.props.bid[2]}</Cell>
           
      <Cell>{this.getState()}</Cell>      
     
      <Cell>
      {this.props.bid[3] ? null :(
      <Button basic color='green' onClick={this.pickWinner} loading = {this.state.loadingPickWinner} style = {{marginTop: '10px', width: "200px", fontSize:"12px"}} >
        Pick as Winner
      </Button>)}
    {this.props.bid[3] ? null :(
      <Button basic color='red' onClick={this.withdrawBid} loading = {this.state.loadingWithdrawBid} style = {{marginTop: '10px', width: "151px", fontSize:"12px"}}>
        Withdraw Bid
      </Button>)}
      </Cell>
      </Row>
    )

}
}
export default RequestRow;
