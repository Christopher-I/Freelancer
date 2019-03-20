import React, {Component} from 'react';
import web3 from '../../ethereum/web3';
import { Table,Icon,Label,Grid,Button, Input} from 'semantic-ui-react';
import Layout from '../../components/Layout';
import {Link, Router} from '../../routes';
import GetContractSummary from '../../ethereum/getContractSummary';
import deployedContracts from '../../ethereum/deployedContracts';
import RequestRow from '../../components/RequestRow';



class BidOnContract extends Component{
  state = {
  contactInfo: '',
  Bid: '',
  loadingPlaceBid:false,
  errorMessage:'',
  };

  static async getInitialProps(props){
    const address = props.query.address;
    const summary = await GetContractSummary(address);
    const contract = deployedContracts(address);
    const bidCount = await contract.methods.getNumberOfBids().call();

    const bids = await Promise.all(
      Array(parseInt(bidCount))
      .fill()
      .map((element, index) =>{
        return contract.methods.allBids(index).call();
      })
    );
    console.log(summary);

    return {
      bids, address,maxOffer:summary[4], minOffer:summary[5]

    };
  }

  placeBid= async (event) =>{
    this.setState({loadingPlaceBid:true});
    let value = this.state.Bid;

  try{
    const accounts = await web3.eth.getAccounts();
    await deployedContracts(this.props.address).methods
    .bidOnJob(this.state.contactInfo)
    .send({
      value: value,
      from:accounts[0]
    });

  }catch (err) {
    this.setState({errorMessage: err.message});
    console.log(err);
  }
  this.setState({loadingPlaceBid:false});
  };


  renderRow(){
    const {Row, Cell} = Table;
    return this.props.bids.map((bid, index)=>{
        return (
      <RequestRow
      bid ={bid}
      key = {index}
      index = {index}
      address = {this.props.address}
    
      />
      )
    });
  }

  render(){
    const {Row, HeaderCell,Header, Body} = Table;
    return (
      <Layout>
      <div>
      <Link route = {`/contracts/${this.props.address}`}>
      <i class="large angle double left icon"></i>
      </Link>
      </div>
        <Grid container columns={3}>
        <Grid.Column>
        <div onSubmit = {this.onSubmit}>
        <Input fluid label='*Contact Information'
        placeholder='Telegram ID:1234, email:1234@email...' value = {this.state.contactInfo} onChange={event =>this.setState({contactInfo: event.target.value})}/>
        <Label>(Contact information will be visible to only you and the contract creator)</Label>
        <Input fluid label='Bid (Wei)' placeholder='Example 500 '
        value = {this.state.Bid} onChange={event =>this.setState({Bid: event.target.value})}/>
        </div>
        <Button basic color='green' onClick={this.placeBid} loading = {this.state.loadingPlaceBid} style = {{marginTop: '10px', width: "200px", fontSize:"12px"}} >
          Place Bid
        </Button>
        </Grid.Column>
      </Grid>
      <h4>Job Bids. <Label>Max Offer:{this.props.maxOffer}(Wei). Min Offer:{this.props.minOffer}(Wei)</Label></h4>

      <Table celled>
    <Header>
      <Row>
        <HeaderCell>ID</HeaderCell>
        <HeaderCell>Address</HeaderCell>
        <HeaderCell>Bid(Wei)</HeaderCell>
        <HeaderCell>Status</HeaderCell>
        </Row>
    </Header>

    <Body>
      {this.renderRow()}
      </Body>
    </Table>

    </Layout>
  )
  }
}

export default BidOnContract
