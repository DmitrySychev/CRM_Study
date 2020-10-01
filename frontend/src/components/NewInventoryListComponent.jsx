import React from 'react'
import { Table } from 'semantic-ui-react'




class NewInventoryListComponent extends React.Component{


  state = {
    clicked: false
  }



    render(){
        return(


              <Table.Row>
                <Table.Cell>{this.props.inventory.make_model}</Table.Cell>
                <Table.Cell>{this.props.inventory.year}</Table.Cell>
                <Table.Cell>{this.props.inventory.mileage}</Table.Cell>
                <Table.Cell>$ {this.props.inventory.price}</Table.Cell>
                <Table.Cell>{this.props.inventory.id}</Table.Cell>
              </Table.Row>
        

            
        

        )
    }
}

export default NewInventoryListComponent