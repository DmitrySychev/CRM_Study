import React from 'react'
import { Table, Container, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class ClientListComponent extends React.Component{


  state ={
    clientId: ''
  }


    render(){
        return(
            <>
  
              <Table.Row>
                
                  <Table.Cell ><Container fluid as={Link} to={'/clients/'+ this.props.client.id} onClick={()=>this.props.clickHandler(this.props.client.id)}>{this.props.client.first_name +" " + this.props.client.last_name}</Container></Table.Cell>
                  <Table.Cell>{this.props.client.phone1}</Table.Cell>
                  <Table.Cell>{this.props.client.address}</Table.Cell>
                  <Table.Cell>{this.props.client.source}</Table.Cell>
              </Table.Row>

   
        
          </>
        )
    }
}

export default ClientListComponent


