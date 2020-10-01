import React from 'react'
import { Segment, Button, Form, Divider, Grid } from 'semantic-ui-react';
import TextComponent from '../components/TextComponent'
import EmailComponent from '../components/EmailComponent'

class LeadsContainerBottom extends React.Component{

    state = {
        foundClient: '',
        textClicked: false,
        emailClicked: false
    }

    // 

    componentDidMount() {
        fetch('/clients/')
          .then(res => res.json())
          .then(data => {this.setState({ data })})
        //   
      }

  renderCommunication=()=>{
     if (this.state.textClicked) {
      return <Segment.Inline >
        <TextComponent />
      </Segment.Inline> 
    } else if (this.state.emailClicked) {
      return <Segment.Inline >
        <EmailComponent />
      </Segment.Inline> 
    }
                                                               
  }



      findClient=()=>{
          if (this.state.data) {
            let foundClient = this.state.data.all_clients.find(client => client.id === this.props.client)
                return ( <> <Segment vertical>
                              <Grid columns={2} stackable textAlign='center'>
                              <Divider vertical></Divider>
                              <Grid.Row verticalAlign='middle'>
                                          <Grid.Column>
                                          <Form >
                                <Form.Group >
                                  <Form.Input fluid label='First name' name='first_name' value={foundClient.first_name} width='5' />
                                  <Form.Input fluid label='Zip' name='state' value={foundClient.state} width='2' readOnly  />
                                  <Form.Input fluid label='Zip' name='zip' value={foundClient.zip} width='3' />
                                  <Form.Input fluid label='Current Vehicle' name='vehicle_now' value={foundClient.vehicle_now} width='5' readOnly/>
                                </Form.Group>

                                <Form.Group >
                                <Form.Input fluid label='Last name' name='last_name' value={foundClient.last_name} width='5' readOnly/>
                                <Form.Input fluid label='Phone Number 1' name='phone1' value={foundClient.phone1}  width='5' readOnly/>
                                <Form.Input fluid label='Past Vehicle' name='vehicle_past' value={foundClient.vehicle_past}  width='5'readOnly />
                                </Form.Group>
                
                                <Form.Group >
                                <Form.Input fluid label='Business' name='first_name' placeholder='Business'  width='5' readOnly />
                                <Form.Input fluid label='Phone Number 2' name='phone2' value={foundClient.phone2}  width='5' readOnly/>
                                <Form.Input fluid label='Interested Vehicle' placeholder='Interested Vehicle'  width='5' readOnly/>
                                </Form.Group>
                
                                <Form.Group  >
                                  <Form.Input fluid label='Address' name='address' value={foundClient.address}  width='5' readOnly/>
                                  <Form.Input fluid label='Email' name='email' value={foundClient.email}  width='5' readOnly/>

                                  <Button 
                                    style={{minWidth:"11.5em", height: '2.7em', marginTop: '1.6em'}} 
                                    width='5'
                                    onClick={() => this.setState(prevState => ({ emailClicked: !prevState.emailClicked, textClicked: false }))} >
                                    Email Client
                                  </Button>
                                </Form.Group>
                

                                <Form.Group >
                                  <Form.Input fluid label='City' name='city' value={foundClient.city}  width='5' readOnly/>
                                  <Form.Input fluid label='Client ID' name='id' value={foundClient.id} width='5' readOnly/>

                                  <Button 
                                    style={{minWidth:"11.5em", height: '2.7em', marginTop: '1.6em'}} 
                                    onClick={() => this.setState(prevState => ({ textClicked: !prevState.textClicked, emailClicked: false }))} 
                                    width='3'>
                                    Text Client
                                  </Button>
                                </Form.Group>

                                </Form>
                                          </Grid.Column>

                                          <Grid.Column>
                                            {this.renderCommunication()}
                                          </Grid.Column>
                                        </Grid.Row>


                                </Grid>
                                </Segment>
                                </>
                                
                                )

          } else {
              console.log('empty state in leads bottom')
          } 
      }

      renderClient=()=>{
        this.findClient()
      }

    render(){
        return(

           <Segment >{this.findClient()}</Segment> 

        )
    }
}

export default LeadsContainerBottom