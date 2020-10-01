import React from 'react'
import { Button, Form, Grid, Header, Image, Segment,  } from 'semantic-ui-react'
import Logo from '../Logo.png'
import { NavLink } from 'react-router-dom';

class LoginForm extends React.Component {


  state = {
    username: '',
    password: ''
  }
  
changeHandler = (e) => {
  // this.setState({ [e.target.name]: e.target.value})
}


submitHandler = () => {
  // e.preventDefault()
  // this.props.submitHandler(this.state)
  // this.props.demo()
}


render() {

  return (

<> 
<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' columns={5} divided>
  <Grid.Column style={{ maxWidth: 450 }}>
 
      <Image src={Logo} size='medium' centered/> 
 
    <Form size='large' onSubmit={this.submitHandler}>
            <Form.Input 
            fluid 
            icon='user' 
            iconPosition='left' 
            placeholder='Username'
            onChange={this.changeHandler}
            value={this.state.username} 
            name='username'
          />

          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            onChange={this.changeHandler}
            value={this.state.password}
            name='password'
          />
              <Grid.Column width='3'>
                <Button color='grey' fluid size='large' type='submit' disabled>
                    Login
                 </Button>
              </Grid.Column>

              <hr></hr>

              <Grid.Column width='3'>
                <Button fluid size='large' color='grey' type='submit' as={NavLink} to={"/dashboard"}>
                    Demo
                </Button>
              </Grid.Column>
            </Form>    
  </Grid.Column>
</Grid>

</>
  )
}}

export default LoginForm