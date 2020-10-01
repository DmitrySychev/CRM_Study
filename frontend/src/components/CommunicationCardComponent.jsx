import React from 'react'
import { Item, Segment } from 'semantic-ui-react'


class CommunicationCardComponent extends React.Component {

  render() {
    return (
        <Segment>
          <Item>
          <Item.Content>
            <Item.Header as='a' >{this.props.communication.category}</Item.Header>
            <Item attached='right'>{this.props.communication.created_at.split('T')[0]}</Item>
              <Segment>
                <Item.Meta>{this.props.communication.content}</Item.Meta>
              </Segment>
          </Item.Content>
        </Item>
      </Segment>
    )
}
}
export default CommunicationCardComponent