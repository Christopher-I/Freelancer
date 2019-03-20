import React,{Component} from 'react';
import Layout from '../../components/Layout';
import { Button,Container,Table, Card,Icon,Label  } from 'semantic-ui-react';
import { Link, Router} from '../../routes';
import deployedContracts from '../../ethereum/deployedContracts';
import web3 from '../../ethereum/web3';
import StatusTable from '../../components/StatusTable';
import GetContractSummary from '../../ethereum/getContractSummary';

class ContractIndex extends Component{
  state = {
  contactInfo: '',
  Bid: '',
  loadingPlaceBid:false,
  errorMessage:'',
  };

   static async getInitialProps(props){
    const address = props.query.address;
    const summary = await GetContractSummary(address);
    
    return {
      address,summary

    };
  }


  onSubmit = async (event) =>{

try{
  const accounts = await web3.eth.getAccounts();
  await deployedContracts(this.props.address).methods
  .submitJob()
  .send({
    from:accounts[0]
  });
 
}catch (err) {
  this.setState({errorMessage: err.message});
}

};  


  onAcceptSubmission = async (event) =>{

try{
  const accounts = await web3.eth.getAccounts();
  await deployedContracts(this.props.address).methods
  .acceptSubmission()
  .send({
    from:accounts[0]
  });
 
}catch (err) {
  this.setState({errorMessage: err.message});
}

};  



  onRejectSubmission = async (event) =>{

try{
  const accounts = await web3.eth.getAccounts();
  await deployedContracts(this.props.address).methods
  .rejectSubmission()
  .send({
    from:accounts[0]
  });
 
}catch (err) {
  this.setState({errorMessage: err.message});
}

};  




  winnnerVoteToNullifyContract = async (event) =>{

try{
  const accounts = await web3.eth.getAccounts();
  await deployedContracts(this.props.address).methods
  .winnnerVoteToNullifyContract()
  .send({
    from:accounts[0]
  });
 
}catch (err) {
  this.setState({errorMessage: err.message});
}

}; 


  mangerVoteToNullifyContract = async (event) =>{

try{
  const accounts = await web3.eth.getAccounts();
  await deployedContracts(this.props.address).methods
  .mangerVoteToNullifyContract()
  .send({
    from:accounts[0]
  });
 
}catch (err) {
  this.setState({errorMessage: err.message});
}

}; 



nullifyContractAfterBidClosed = async (event) =>{

try{
  const accounts = await web3.eth.getAccounts();
  await deployedContracts(this.props.address).methods
  .nullifyContractAfterBidClosed()
  .send({
    from:accounts[0]
  });
 
}catch (err) {
  this.setState({errorMessage: err.message});
}
}; 

nullifyContractBeforeBidClosed = async (event) =>{

try{
  const accounts = await web3.eth.getAccounts();
  await deployedContracts(this.props.address).methods
  .nullifyContractBeforeBidClosed()
  .send({
    from:accounts[0]
  });
 
}catch (err) {
  this.setState({errorMessage: err.message});
}
}; 
 

  render(){    
     
    const {Description, Group,Content,Meta} = Card;
    const {Row, HeaderCell,Header,Cell, Body} = Table;
      return(        
        <Layout>               
      <Link route = {`/contracts/${this.props.address}`}>
      <i class="large angle double left icon"></i>
      </Link> 
      <StatusTable 
      address = {this.props.address}
      summary = {this.props.summary}


      />

      <Container  style = {{width: "1500px",marginTop: '-40px',marginBottom: '100px',  height: "80px"}}>   

        <h4>Creator's Section</h4>
       <Group>

    <Card style = {{width: "230px", height: "150px"}}>
      <Content>
        <Meta>Job Submission</Meta>
        <Description></Description>
        <Button basic color='green' onClick={this.onAcceptSubmission} style = {{marginTop: '10px', width: "200px", fontSize:"12px"}} >
          Accept Submission
        </Button>
        <Button basic color='red'  onClick={this.onRejectSubmission} style = {{marginTop: '10px', width: "200px", fontSize:"12px"}} >
          Reject Submission
        </Button>
      </Content>
    </Card>

    <Card style = {{width: "230px", height: "150px"}}>
      <Content>
        <Meta>Nullify contract before winner is chosen</Meta>
        <Description></Description>
        <Button basic color='red' onClick={this.nullifyContractBeforeBidClosed} style = {{marginTop: '10px', width: "200px", fontSize:"12px"}} >
          Nullify
        </Button>
        </Content>
    </Card>

    <Card style = {{width: "230px", height: "150px"}}>
      <Content>
        <Meta>Nullify Contract after winner is chosen</Meta>
        <Description></Description>
        <Button basic color='green' onClick ={this.mangerVoteToNullifyContract}  style = {{marginTop: '10px', width: "200px", fontSize:"12px"}} >
          Vote to Nullify
        </Button>
        <Button basic color='red' onClick={this.nullifyContractAfterBidClosed} style = {{marginTop: '10px', width: "200px", fontSize:"12px"}} >
          Nullify
        </Button>
      </Content>
    </Card>
    </Group>
    


    <h4>Bid Winner's Section</h4>
    <Group>
    <Card style = {{width: "230px", height: "150px"}}>
      <Content>
        <Meta>Job Submission</Meta>
        <Description></Description>
        <Button basic color='green' onClick={this.onSubmit} style = {{marginTop: '10px', width: "200px", fontSize:"12px"}} >
          Click After Submission
        </Button>
         </Content>
    </Card>

    

    <Card style = {{width: "230px", height: "150px"}}>
      <Content>
        <Meta>Nullify contract after winner is chosen</Meta>
        <Description></Description>
        <Button basic color='green' onClick ={this.winnnerVoteToNullifyContract} style = {{marginTop: '10px', width: "200px", fontSize:"12px"}} >
          Vote to Nullify
        </Button>
        </Content>
    </Card>
    </Group>
    

        </Container>
        </Layout>
      );

  }
}
export default ContractIndex;
