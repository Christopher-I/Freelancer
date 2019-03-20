import React,{Component} from 'react';
import Layout from '../components/Layout';
import { Button, Card, Image,Label  } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import getFactorySummary from '../ethereum/getFactorySummary';
import { Link, Router} from '../routes';

class ContractIndex extends Component{
  state = {
  status : ''

  };
  static async getInitialProps(){

    return{};
  }


  render(){
      return(
        <Layout>

        <Card.Group>
          <Card  style={{width:'1000px',height:'400px'}}>
            <Card.Content>
            <h4>Guidelines</h4>


            </Card.Content>
          </Card>

          <Card  style={{width:'1000px',height:'400px'}}>
            <Card.Content>
            <h4>About</h4>

            </Card.Content>
      </Card>

                </Card.Group>

        </Layout>
      );

  }
}
export default ContractIndex;
