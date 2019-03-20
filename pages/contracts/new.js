import React,{Component} from 'react';
import { Form,Label,Button,Checkbox,TextArea,Input,Message} from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router} from '../../routes';

class CreateContract extends Component{
  state = {
  contactInfo : '',
  maxoffer: '',
  maxoffer: '',
  briefDescription:'',
  fullDescription:'',
  errorMessage:'',
  loading: false
  };

onSubmit = async (event) =>{
  event.preventDefault();


this.setState({loading:true});
try{
  const accounts = await web3.eth.getAccounts();
  await factory.methods
  .createContract(this.state.maxoffer,this.state.minoffer, this.state.briefDescription, this.state.fullDescription,this.state.contactInfo)
  .send({
    value: this.state.maxoffer,
    from:accounts[0]
  });
  Router.pushRoute('/');//redirect user back to Open Bids page(index)
}catch (err) {
  this.setState({errorMessage: err.message});
}
this.setState({loading:false});
};


  render(){
    const {Input, Group,Field} = Form;
    return (
      <Layout>
    <h3>New Contract Job</h3>
    <Form onSubmit = {this.onSubmit} error={!!this.state.errorMessage}>

      <Group widths='equal'>
      <Input fluid label='*Contact Information(This information will be secured on the blockchain, and can only be viewed by you and the bid winner of your contract)'
       placeholder='Telegram ID:1234, email:1234@email...'
      value = {this.state.contactInfo} onChange={event =>this.setState({contactInfo: event.target.value})}/>
      <Input fluid label='*Brief Description' placeholder='I am looking for a graphics designer to create a custom logo for my my website'
      value = {this.state.briefDescription} onChange={event =>this.setState({briefDescription: event.target.value})} />
        </Group>

      <Group widths='equal'>
      <Input fluid label='*Maximum Offer (Wei)' placeholder='Example 5 ether'
      value = {this.state.maxoffer} onChange={event =>this.setState({maxoffer: event.target.value})}/>
      <Input fluid label='*Minimum Offer (Wei)' placeholder='Example 5 ether'
      value = {this.state.minoffer} onChange={event =>this.setState({minoffer: event.target.value})}/>

        </Group>

      <Field control={TextArea} label='Full Description' placeholder='Tell us more about what you would like in this contract...quanity, delivery dates etc'
      value = {this.state.fullDescription} onChange={event =>this.setState({fullDescription: event.target.value})} />


    <Field >
    <label>Total deposit required</label>
    <Input style={{width:'400px'}}
    label = "wei"
    labelPosition = "right"
    value = {+this.state.maxoffer }/>
    </Field>
    <Message error header = "Error, please ensure your entries are correct" content = {this.state.errorMessage}/>
    <Button loading = {this.state.loading} type='submit'>Deploy</Button>

    </Form>
    </Layout>
  )
  }
}

export default CreateContract;
