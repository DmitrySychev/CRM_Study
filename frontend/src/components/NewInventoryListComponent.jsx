import React from 'react'
import { Table, Container } from 'semantic-ui-react'
import InventoryContainerBottom from '../containers/InventoryContainerBottom';



class NewInventoryListComponent extends React.Component{


  state = {
    clicked: false
  }

  renderBottom=() => {
    return <InventoryContainerBottom car={this.props.inventory}/>
  }


    render(){
        return(


              <Table.Row>
                <Table.Cell><Container fluid onClick={this.renderBottom}>{this.props.inventory.make_model}</Container></Table.Cell>
                <Table.Cell>{this.props.inventory.year}</Table.Cell>
                <Table.Cell>{this.props.inventory.mileage}</Table.Cell>
                <Table.Cell>$ {this.props.inventory.price}</Table.Cell>
                <Table.Cell>{this.props.inventory.id}</Table.Cell>
              </Table.Row>
        

            
        

        )
    }
}

export default NewInventoryListComponent