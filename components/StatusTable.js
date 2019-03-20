import React,{Component} from 'react';
import Layout from '../components/Layout';
import { Container,Button,Table, Card,Icon, Image,Label  } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import getFactorySummary from '../ethereum/getFactorySummary';
import { Link, Router} from '../routes';
import GetContractSummary from '../ethereum/getContractSummary';


class StatusTable extends Component {
  state = {
  BidStatus: false,  BidMessage: '',  BidColor:'',  BidShape:'',
  SubmissionStatus:false ,  SubmissionMessage: '', SubmissionColor:'',  SubmissionShape:'',
  CompletionStatus:false,  CompletionMessage:'', CompletionColor:'',  CompletionShape:'',
  ValidStatus:true,  ValidMessage:'', ValidColor:'',  ValidShape:''
  };

  static async getInitialProps(props){
    

    


    return {
      address,summary,bidStatus, submissionStatus, completionStatus, validStatus

    };
  } 

      changeState= async (event) =>{
        console.log(this.props.address)
        console.log(this.props.summary)
    if(!this.props.summary[6]){
    this.setState({BidMessage: 'Bidding Open'});
    this.setState({BidShape: 'checkmark'});
    this.setState({BidColor: 'green'});
  }else{
    this.setState({BidMessage: 'Bidding Closed'});
    this.setState({BidShape: 'close'});
    this.setState({BidColor: 'red'});'close'
  }

  if(!this.props.summary[7]){
    this.setState({SubmissionMessage: 'Awaiting'});
    this.setState({SubmissionShape: 'close'});
    this.setState({SubmissionColor: ''});
  }else{
    this.setState({SubmissionMessage: 'Submitted'});
    this.setState({SubmissionShape: 'checkmark'});
    this.setState({SubmissionColor: 'green'});'close'
  }

  if(!this.props.summary[8]){
    this.setState({CompletionMessage: 'Not Completed'});
    this.setState({CompletionShape: 'close'});
    this.setState({CompletionColor: ''});
  }else{
    this.setState({CompletionMessage: 'Completed'});
    this.setState({CompletionShape: 'checkmark'});
    this.setState({CompletionColor: 'green'});'close'
  }

  if(!this.props.summary[9]){
    this.setState({ValidMessage: 'Valid'});
    this.setState({ValidShape: 'checkmark'});
    this.setState({ValidColor:'green' });
  }else{
    this.setState({ValidMessage: 'not Valid'});
    this.setState({ValidShape: 'close'});
    this.setState({ValidColor: 'red'});
  }

  return ""
   
  };


render(){
  const {Row, HeaderCell,Header,Cell, Body} = Table;
 

    return (
    	<Container  style = {{width: "1500px",marginTop: '-60px',marginBottom: '-50px', height: "260px"}}>
    	<br></br>
    	<br></br>
    	<br></br>
         <Table celled  >
    <Header>
      <Row>
        <HeaderCell>Bid Status</HeaderCell>
        <HeaderCell>Submission Status</HeaderCell>
        <HeaderCell>Completion Status</HeaderCell>
        <HeaderCell>Valid Contract</HeaderCell>
        <HeaderCell>
        <Button secondary floated = "right" onClick={this.changeState}  style = {{marginTop: '10px', width: "151px", fontSize:"12px"}}>
        View More Details
      </Button>
        </HeaderCell>
        </Row>
    </Header>
    <Body>
      <Row>
    <Cell>{this.state.BidMessage}
    <Icon color={this.state.BidColor} name={this.state.BidShape} size='large' />
    </Cell>
      <Cell>{this.state.SubmissionMessage}
      <Icon color={this.state.SubmissionColor} name={this.state.SubmissionShape} size='large' />
      </Cell>
      <Cell>{this.state.CompletionMessage}
      <Icon color={this.state.CompletionColor} name={this.state.CompletionShape} size='large' />
      </Cell>
      <Cell>{this.state.ValidMessage}
      <Icon color={this.state.ValidColor} name={this.state.ValidShape} size='large' /></Cell>
        </Row>
      </Body>
      
    </Table>
    
    </Container>
    )
}
}

export default StatusTable;
