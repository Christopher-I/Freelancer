import React, {Component} from 'react';
import { Table,Icon,Label,Button} from 'semantic-ui-react';
import Layout from '../../components/Layout';
import {Link, Router} from '../../routes';
import deployedContracts from '../../ethereum/deployedContracts';
import GetContractSummary from '../../ethereum/getContractSummary';
import StatusTable from '../../components/StatusTable';

class ViewContract extends Component{

  static async getInitialProps(props){
    const address = props.query.address;

    const summary = await GetContractSummary(address);
    const briefDescription = await deployedContracts(address).methods.briefDescription().call();

    var timestamp = summary[1];

    var date = new Date(timestamp*1000);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getUTCDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    

    return {
      summary,address,day, month, year,hours,minutes, briefDescription: summary[2], fullDescription: summary[3],
       manager:summary[0], maxOffer:summary[4], minOffer:summary[5], closed:summary[6], name:summary[7]
    };
  }

  render(){
    const {HeaderCell, Row, Header, Cell,Body} = Table;

    return (
      <Layout>
      
      <div>
      <Link route = {`/contracts/${this.props.address}/bid`}>
      <Button content ="View/Place Bid"  floated = "right" basic color='teal' style = {{marginBottom: '10px'}}/>
      </Link>
      <Link route = {`/contracts/${this.props.address}/submission`}>
      <Button content ="Do More.."  floated = "right" basic color='blue' style = {{marginBottom: '10px'}}/>
      </Link>
      <h3>Contract Details</h3>
      </div>
      <Table celled>
    <Header>
      <Row>
      <HeaderCell>Contract Address</HeaderCell>
        <HeaderCell>Manager's Address</HeaderCell>
        <HeaderCell>Time Stamp(dd-mm-yyyy) (hr:mm)</HeaderCell>
        </Row>
    </Header>

    <Body>
      <Row>
      <HeaderCell>{this.props.address}</HeaderCell>
        <Cell>{this.props.manager}</Cell>
        <Cell>{this.props.day}-{this.props.month }-{this.props.year}   ({this.props.hours}:{this.props.minutes})</Cell>
       </Row>
      </Body>
    </Table>

    <StatusTable 
    address = {this.props.address}
    summary = {this.props.summary}
    />

    <Table celled style = {{marginTop: '-20px'}}>
  <Header>
    <Row>
    <HeaderCell>Description</HeaderCell>
      <HeaderCell>Maximum Offer(Wei)</HeaderCell>
      <HeaderCell>Minimum Offer(Wei)</HeaderCell>
      </Row>
  </Header>

  <Body>
    <Row>
    <Cell >{this.props.briefDescription}</Cell>
      <Cell>{this.props.maxOffer}</Cell>
      <Cell>{this.props.minOffer}</Cell>
        </Row>
    </Body>
  </Table>
  <Table celled>

</Table>

<Table celled>
<Header>
<Row>
  <HeaderCell>Terms and Conditions</HeaderCell>
</Row>
</Header>

<Body>
<Row>
  <Cell>{this.props.fullDescription}</Cell>
  </Row>
</Body>
</Table>

<div>
<Link route = {`/contracts/${this.props.address}/bid`}>
<Button content ="View/Place Bid"  floated = "right" basic color='teal' style = {{marginBottom: '10px'}}/>
</Link>
<Link route = {`/contracts/${this.props.address}/submission`}>
<Button content ="Do More.."  floated = "right" basic color='blue' style = {{marginBottom: '10px'}}/>
</Link>
</div>

    </Layout>
  )
  }
}

export default ViewContract
