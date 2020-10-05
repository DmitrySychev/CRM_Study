import React from 'react'
import { Segment, Button, Form, Message, Grid, Loader } from 'semantic-ui-react';

class TextComponent extends React.Component{
  
  state = {
    texts: [],
      message: {
          body: '',
          client_id: 51,
          user_id: 1,
          from: 1,
          to: 51
        }
  }

  handleSubmit = () => {
    this.setState({ body: '' })
  }

  sendText = () => {
        fetch("/messages/", { 
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(this.state.message)
        })       
    }

  fetchTexts= () => {
    fetch("/messages/")
      .then(res => res.json())
      .then(texts => {this.setState({ texts: texts })})
    }

  componentDidMount(){
    this.fetchTexts()
    // setInterval(this.fetchTexts, 10000)
  }



  renderMessages=()=>{
    
    let clientId = window.location.href.split('/')[4]
    if (this.state.texts.length !== 0) {
      let result = this.state.texts.filter(text => text.client.id == clientId)
      return result.map(text => {
        let eventDate = text.created_at.split('T')
          if (text.from == clientId) {
              return (
                  <Message color='orange' size='mini' style={{ width : '20em' }} floated='right'>
                    <Message.Header>{text.client.first_name} - {eventDate[0]}</Message.Header>
                    <p>{text.body}</p>
                    </Message>
                  )

                  } else {
                    
              return (
                    <Grid columns={2} divided>
                      <Grid.Row>
                        <Grid.Column>
                        </Grid.Column>
                      <Grid.Column>
                        <Message color='green' size='mini' floated='left' style={{ width : '20em' }}>
                        <Message.Header>{text.user.username} - {eventDate[0]}</Message.Header>
                          <p>{text.body}</p>
                        </Message>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid> )                                
                  }
      })
    }
  }

  render() {
    const { body } = this.state
      return (
          <Form onSubmit={this.handleSubmit}>
            <Grid columns={3} divided>
                      <Grid.Row>
                        <Grid.Column width="3">
                        </Grid.Column>
                      <Grid.Column width="8">
                        <Segment style={{ height : '20em' }} style={{overflow: 'auto', maxHeight: '20em' }}>  
                          {this.renderMessages()}
                        </Segment>
                      </Grid.Column>
                      <Grid.Column width="3">
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>

            
                  <Grid columns={3} divided>
                      <Grid.Row>
                        <Grid.Column width="3">
                        </Grid.Column>
                      <Grid.Column  width="8"> 
                        <Segment style={{ height : '20em' }} style={{overflow: 'auto', maxHeight: '20em' }}>  
                        <Form.Field>
                          <input placeholder='Your message...' name='text_content' value={body} onChange={(e) => this.setState({message: {...this.state.message, body: e.target.value }})} />
                        </Form.Field>
                        <Button disabled type='submit' onClick={this.sendText}>Send</Button>
                        </Segment>
                      </Grid.Column>
                      <Grid.Column width="3">
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>

        </Form>
      )
  }

}


export default TextComponent

