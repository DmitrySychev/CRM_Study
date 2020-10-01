import React from 'react'
import { Button, Form, TextArea } from 'semantic-ui-react';

class EmailComponent extends React.Component{


    
  state = {

  }

  sendEmail = () => {
        fetch("/emails/", { 
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(this.state)
        })

    }
    
  
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleSubmit = () => this.setState({ subject: '', body: '', to: '' })
    
  render() {
    const { subject, body, to } = this.state
      return (
        <Form onSubmit={this.handleSubmit} >  

          <Form.Field>
            <label>To</label>
          <Form.Input                   
                  placeholder={this.props.email}
                  name='To'
                  value={to}
                  onChange={this.handleChange} 
                  disabled />
        </Form.Field>

        <Form.Field>
          <label>Subject</label>
          <Form.Input                   
                  placeholder='Subject'
                  name='subject'
                  value={subject}
                  onChange={this.handleChange} />
        </Form.Field>

        <Form.Field>
          <label>Body</label>
          <TextArea                   
                  placeholder='Body'
                  name='body'
                  value={body}
                  onChange={this.handleChange} />
        </Form.Field>

        <Form.Field>
    
        </Form.Field>
        <Button type='submit' content='Send Email' onClick={()=>{this.sendEmail(); this.props.clickHandler()}}>Send Email</Button>
      </Form>
  
      )
  }

} 

export default EmailComponent