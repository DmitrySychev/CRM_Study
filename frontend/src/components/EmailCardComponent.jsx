import React from 'react'
import { Segment, Accordion, Icon, Grid } from 'semantic-ui-react'


class EmailCardComponent extends React.Component {

  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
      const { activeIndex } = this.state
      return (
      <Segment>
      <Accordion>
      <Accordion.Title
        active={activeIndex === -1}
        index={0}
        onClick={this.handleClick}
      >


        <Grid columns={4} divided>
          <Grid.Row>

              <Grid.Column>
                  <Icon name='dropdown' />
                  {this.props.email.subject}
              </Grid.Column>

              <Grid.Column>
                From: {this.props.email.from}
              </Grid.Column>

              <Grid.Column>
                To: {this.props.email.to}
              </Grid.Column>

              <Grid.Column textAlign='right'>
                  <p>{this.props.email.created_at.split('T')[0]}</p>
              </Grid.Column>
          </Grid.Row>
      </Grid>
      </Accordion.Title>
      <Accordion.Content active={activeIndex === -1}>
        <Segment>
        <p>
        {this.props.email.body}
        </p>
        </Segment>
      </Accordion.Content>
      </Accordion>

        </Segment>
      )
  }
}

export default EmailCardComponent