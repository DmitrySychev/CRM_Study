import React from 'react'
import { Form, Segment, Button, Grid, Header, Icon, Modal } from 'semantic-ui-react'
import DashboardContainer from '../containers/DashboardContainer'
import ClientContainerBottom from '../containers/ClientContainerBottom'
import MailboxContainerBottom from '../containers/MailboxContainerBottom'
import TextComponent from './TextComponent'
import DeletePromptComponent from './DeletePromptComponent'

const options = [
    { key: 'ALABAMA', text: 'AL', value: 'AL' },
    { key: 'ALASKA', text: 'AK', value: 'AK' },
    { key: 'AMERICAN SAMOA', text: 'AS', value: 'AS' },
    { key: 'ARIZONA', text: 'AZ', value: 'AZ' },
    { key: 'ARKANSAS', text: 'AR', value: 'AR' },
    { key: 'CALIFORNIA', text: 'CA', value: 'CA' },
    { key: 'COLORADO', text: 'CO', value: 'CO' },
    { key: 'CONNECTICUT', text: 'CT', value: 'CT' },
    { key: 'DELAWARE', text: 'DE', value: 'DE' },
    { key: 'DISTRICT OF COLUMBIA', text: 'DC', value: 'DC' },
    { key: 'FLORIDA', text: 'FL', value: 'FL' },
    { key: 'GEORGIA', text: 'GA', value: 'GA' },
    { key: 'GUAM', text: 'GU', value: 'GU' },
    { key: 'HAWAII', text: 'HI', value: 'HI' },
    { key: 'IDAHO', text: 'ID', value: 'ID' },
    { key: 'ILLINOIS', text: 'IL', value: 'IL' },
    { key: 'INDIANA', text: 'IN', value: 'IN' },
    { key: 'IOWA', text: 'IA', value: 'IA' },
    { key: 'KANSAS', text: 'KS', value: 'KS' },
    { key: 'KENTUCKY', text: 'KY', value: 'KY' },
    { key: 'LOUISIANA', text: 'LA', value: 'LA' },
    { key: 'MAINE', text: 'ME', value: 'ME' },
    { key: 'MARYLAND', text: 'MD', value: 'MD' },
    { key: 'MASSACHUSETTS', text: 'MA', value: 'MA' },
    { key: 'MICHIGAN', text: 'MI', value: 'MI' },
    { key: 'MINNESOTA', text: 'MN', value: 'MN' },
    { key: 'MISSISSIPPI', text: 'MS', value: 'MS' },
    { key: 'MISSOURI', text: 'MO', value: 'MO' },
    { key: 'MONTANA', text: 'MT', value: 'MT' },
    { key: 'NEBRASKA', text: 'NE', value: 'NE' },
    { key: 'NEVADA', text: 'NV', value: 'NV' },
    { key: 'NEW HAMPSHIRE', text: 'NH', value: 'NH' },
    { key: 'NEW JERSEY', text: 'NJ', value: 'NJ' },
    { key: 'NEW MEXICO', text: 'NM', value: 'NM' },
    { key: 'NEW YORK', text: 'NY', value: 'NY' },
    { key: 'NORTH CAROLINA', text: 'NC', value: 'NC' },
    { key: 'NORTH DAKOTA', text: 'ND', value: 'ND' },
    { key: 'OHIO', text: 'OH', value: 'OH' },
    { key: 'OKLAHOMA', text: 'OK', value: 'OK' },
    { key: 'OREGON', text: 'OR', value: 'OR' },
    { key: 'PENNSYLVANIA', text: 'PA', value: 'PA' },
    { key: 'PUERTO RICO', text: 'PR', value: 'PR' },
    { key: 'RHODE ISLAND', text: 'RI', value: 'RI' },
    { key: 'SOUTH CAROLINA', text: 'SC', value: 'SC' },
    { key: 'SOUTH DAKOTA', text: 'SD', value: 'SD' },
    { key: 'TENNESSEE', text: 'TN', value: 'TN' },
    { key: 'TEXAS', text: 'TX', value: 'TX' },
    { key: 'UTAH', text: 'UT', value: 'UT' },
    { key: 'VERMONT', text: 'VT', value: 'VT' },
    { key: 'VIRGINIA', text: 'VA', value: 'VA' },
    { key: 'WASHINGTON', text: 'WA', value: 'WA' },
    { key: 'WEST VIRGINIA', text: 'WV', value: 'WV' },
    { key: 'WISCONSIN', text: 'WI', value: 'WI' },
    { key: 'WYOMING', text: 'WY', value: 'WY' }
  ]


class ClientComponent extends React.Component{

    state = {
        loading: true,
        readOnly: true,
        activeItem: '',
        textClicked: false,
        emailClicked: false,
  
    }

    handleItemClick = (e, { value }) => this.setState({ activeItem: value })

    fetchClient = () => {
        const id = window.location.href.split('/')[4]
        if (id > 0) {
          fetch('/clients/' + id)
              .then(res => res.json())
              .then(client => { this.setState({
                  client
              })
            }
            )
        }
    }

    updateClient = () => {
      const id = window.location.href.split('/')[4]
        fetch("/clients/" + id, { 
          method: 'PUT',
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(this.state.client.client)
        })
    }


      componentDidMount() {
          this.fetchClient()
      }

      handleUpdate = (e) => this.setState(prevState => ({ readOnly: !prevState.readOnly }))

      changeHandler = (e) => {
        let currentState = this.state.client
        let newState = (currentState.client[e.target.name] = e.target.value)
        this.setState({ newState })
    }

    deletePrompt=()=>{
      const id = window.location.href.split('/')[4]
        fetch("/clients/" + id, { 
          method: 'DELETE',
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
        })
    }

    renderBottom = () => {
      const id = window.location.href.split('/')[4]
        if (this.state.textClicked) { 
        return (
          <Segment>
            <TextComponent />
          </Segment>
          )
      } else if (this.state.emailClicked) {
        return (
          <Segment>
            <MailboxContainerBottom email={this.state.client.client.email} />
          </Segment>
        )
      } else {
        return (
          <Segment vertical> 
            <ClientContainerBottom client={id} communications={this.state.communications}/>
          </Segment>
          )
      }
    }




    render(){
             return (
              this.state.client !== undefined ?
              <>

              <Grid columns={5} divided>
              
                  <Grid.Row>
                    <Grid.Column width='4'>
                      <Form.Input fluid label='First name' name='first_name' onChange={this.changeHandler} value={this.state.client.client.first_name} width='3' readOnly={this.state.readOnly} />
                    </Grid.Column>

                    <Grid.Column width='2'>
                      <Form.Select
                        fluid
                        label='State'
                        name='state'
                        options={options}
                        value={this.state.client.client.state}
                        onChange={this.changeHandler}
                        width='1'
                        readOnly={this.state.readOnly}   
                      />
                    </Grid.Column>

                    <Grid.Column width='2'>
                      <Form.Input fluid label='Zip' name='zip' onChange={this.changeHandler} value={this.state.client.client.zip} width='2' readOnly={this.state.readOnly}/>
                    </Grid.Column>

                    <Grid.Column width='4'>
                      <Form.Input fluid label='City' name='city' onChange={this.changeHandler} value={this.state.client.client.city}  width='3' readOnly={this.state.readOnly}/>
                    </Grid.Column>

                    <Grid.Column width='4'>
                      <Form.Input fluid label='Client ID' name='id' onChange={this.changeHandler} value={this.state.client.client.id} width='3' readOnly/>
                    </Grid.Column>
                  </Grid.Row>


                  <Grid.Row>
                    <Grid.Column width='4'>
                      <Form.Input fluid label='Last name' name='last_name' onChange={this.changeHandler} value={this.state.client.client.last_name}  readOnly={this.state.readOnly}/>
                    </Grid.Column>

                    <Grid.Column width='4'>
                      <Form.Input fluid label='Address' name='address' onChange={this.changeHandler} value={this.state.client.client.address}  width='3' readOnly={this.state.readOnly}/>
                    </Grid.Column>

                    <Grid.Column width='4'>
                      <Form.Input fluid label='Phone Number 1' name='phone1' onChange={this.changeHandler} value={this.state.client.client.phone1} readOnly={this.state.readOnly}/>
                    </Grid.Column>

                    <Grid.Column width='3'>
                      {
                        this.state.readOnly ? 

                        <Button style={{minWidth:"16.5em"}} onClick={this.handleUpdate} width='3'>Update Record</Button>
                        :
                        <Button style={{minWidth:"16.5em"}} onClick={() => {this.handleUpdate(); this.updateClient()}} type='submit' width='3'>Save</Button>

                      }
                      <DeletePromptComponent delete={()=>this.deletePrompt(this.state.delete)}/>
                    </Grid.Column>

                  </Grid.Row>

                  <Grid.Row>
                    <Grid.Column width='4'>
                      <Form.Input fluid label='Business' name='first_name' onChange={this.changeHandler} placeholder='Business'  width='3' readOnly={this.state.readOnly} />
                    </Grid.Column>

                    <Grid.Column width='4'>
                      <Form.Input fluid label='Email' name='email' onChange={this.changeHandler} value={this.state.client.client.email}  width='3' readOnly={this.state.readOnly}/>
                    </Grid.Column>

                    <Grid.Column width='4'> 
                      <Form.Input fluid label='Phone Number 2' name='phone2' onChange={this.changeHandler} value={this.state.client.client.phone2}  width='3' readOnly={this.state.readOnly}/>
                    </Grid.Column>

                    <Grid.Column width='4'>
                    <Button 
                      style={{minWidth: "16.5em", height: '2.7em', marginTop: '1.6em'}} 
                      onClick={() => this.setState(prevState => ({ emailClicked: !prevState.emailClicked, textClicked: false }))} 
                      >Email Client
                    </Button>
                    </Grid.Column>
                    
                  </Grid.Row>

                  <Grid.Row>
                    <Grid.Column width='4'>
                      <Form.Input fluid label='Current Vehicle' name='vehicle_now' onChange={this.changeHandler} value={this.state.client.client.vehicle_now} width='3' readOnly={this.state.readOnly}/>
                    </Grid.Column>

                    <Grid.Column width='4'>
                      <Form.Input fluid label='Past Vehicle' name='vehicle_past' onChange={this.changeHandler} value={this.state.client.client.vehicle_past}  readOnly={this.state.readOnly} />
                    </Grid.Column>

                    <Grid.Column width='4'>
                      <Form.Input fluid label='Interested Vehicle' placeholder='Interested Vehicle'  width='3' value={this.state.client.client.vehicle_interest} readOnly={this.state.readOnly}/>
                    </Grid.Column>

                    <Grid.Column width='4'>
                    <Button 
                      style={{minWidth:"16.5em", height: '2.7em', marginTop: '1.6em'}} 
                      onClick={() => this.setState(prevState => ({ textClicked: !prevState.textClicked, emailClicked: false }))} 
                      >Text Client
                      </Button>
                    </Grid.Column>
                    
                  </Grid.Row>

                </Grid>
                <Segment vertical>
                </Segment>

                <Segment vertical>
                  {this.renderBottom()}
                </Segment>
            </>
               
            :

              <DashboardContainer />
             )
    }
}

export default ClientComponent



