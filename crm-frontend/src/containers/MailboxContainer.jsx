import React from 'react'
import { Segment, Loader } from 'semantic-ui-react';
import MailboxContainerBottom from '../containers/MailboxContainerBottom'
import EmailCardComponent from '../components/EmailCardComponent'

class MailboxContainer extends React.Component{

  state = {
    emails: [],

  }

  fetchEmails= () => {
    fetch("/emails/")
      .then(res => res.json())
      .then(emails => {this.setState({ emails: emails })})
    }

  componentDidMount(){
    this.fetchEmails()
  }

  renderEmails=()=>{
    if (this.state.emails.length === 0){
      return (
        <Loader active inline='centered' />
      ) 
    } else {
      let reversedArr = this.state.emails.reverse();
      return (
        reversedArr.map(email => <EmailCardComponent key={email.id} email={email}/>)
      )

    }
  }

  clickHandler = () => {
    setTimeout(() => this.componentDidMount(), 10000)
    
  }

  render() {
      return (
        <>
            <Segment style={{ height : '60em' }} style={{overflow: 'auto', maxHeight: '60em' }}>  

              {this.renderEmails()}

            </Segment>

        <Segment vertical> 
          <MailboxContainerBottom client={this.state.clientId} clickHandler={this.clickHandler} />
        </Segment>

        </>
      )
  }

}

export default MailboxContainer

