import React from 'react'
import DashboardContainer from '../containers/DashboardContainer'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

function DeletePromptComponent(props) {
  const [open, setOpen] = React.useState(false)


  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
      trigger={<Button style={{minWidth:"16.5em"}} >Delete Record</Button>}
    >
      <Header icon>
        <Icon name='trash alternate' />
      </Header>
      <Modal.Content content='Delete Client Record?'>

      </Modal.Content>
      <Modal.Actions >
        <Button basic color='red' inverted onClick={() => setOpen(false)}>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' inverted onClick={()=> {setOpen(false); props.delete();  }} as={NavLink} to='/dashboard'>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default DeletePromptComponent