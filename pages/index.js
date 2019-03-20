import React,{Component} from 'react';
import Layout from '../components/Layout';
import { Button,Icon, Card, Image,Label  } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import getFactorySummary from '../ethereum/getFactorySummary';
import { Link, Router} from '../routes';

class ContractIndex extends Component{
  static async getInitialProps(){
    
    const deployedContractsLength = await factory.methods.getDeployedContractsLength().call();

    const summary = await Promise.all(
      Array(parseInt(deployedContractsLength))
      .fill()
      .map((element, index) =>{
        return factory.methods.deployedContracts(index).call();
      })
    );
  

    return{summary,deployedContractsLength};
  }

renderHeader(){
  const LabelExampleDetail = () => (
  <Label style = {{marginBottom: '10px'}}>
    Deployed Contracts
    <Label.Detail>{this.props.deployedContractsLength}</Label.Detail>
  </Label>
)

return <LabelExampleDetail/>;
}


  renderContracts(){
    //

   const CardExampleGroups = () => (
  <Card.Group>
  {this.props.summary.map(summary =>{


    return(
    <Card  style={{width:'400px',height:'200px'}}>

      <Card.Content>
        <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
        <Card.Header></Card.Header>
        <Card.Meta style={{fontSize:'10px'}} >
        Max Offer : <strong style={{fontSize:'10px',color:'black'}}>{ summary[2] } Wei</strong>. Min Offer : <strong style={{fontSize:'10px',color:'black'}}>{ summary[3] }Wei</strong><br></br>
        Contract ID : { summary[1] }
        </Card.Meta>
        <Card.Description>
        {summary[0]}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
        <Link route = {`/contracts/${summary[1]}`}>
          <Button basic color='green'>
            View
          </Button>
          </Link>
          <Link route = {`/contracts/${summary[1]}/bid`}>
          <Button basic color='red'>
            Bid
          </Button>
          </Link>
        </div>
      </Card.Content>
    </Card>
)
    })
  }
        </Card.Group>
)
  return <CardExampleGroups/>;
  }

  render(){
      return(
        <Layout>
        <div>
        {this.renderHeader()}
        {this.renderContracts()}
        </div>
        </Layout>
      );

  }
}
export default ContractIndex;
