import React from 'react'
import { Table, Pagination } from 'semantic-ui-react';
import NewInventoryListComponent from '../components/NewInventoryListComponent'

class InventoryContainer extends React.Component{

  state = {
    new_inventories: [],
    loading: true
  }

  handlePage = (e, { activePage}) => {
    let goToPage = { activePage }
    let pageNum = goToPage.activePage
    let pageString = pageNum.toString()

    this.setState({ 
      loading: true
    })
    const url = "/new_inventories/?page=" + pageString
      fetch(url)
        .then(res => res.json())
        .then(this.initialState)
      }

  initialState = (resData) => {
    this.setState({
      loading: false,
      new_inventories: resData
    })
  }

  componentDidMount() {
    fetch('/new_inventories/')
      .then(res => res.json())
      .then(this.initialState)
  }

renderInventory=()=>{
    if (this.state.loading === false) {
        return this.state.new_inventories.new_inventories.map(inventory =>
            {return <NewInventoryListComponent key={inventory.id} inventory={inventory}/>} 
        )
    }
     

}


render(){
    return(
        <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Make & Model</Table.HeaderCell>
            <Table.HeaderCell>Year</Table.HeaderCell>
            <Table.HeaderCell>Mileage</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Stock Number</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
        {this.renderInventory()}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='5'>
            
            { this.state.loading ? 
                'Loading...'
                : 
                <Pagination 
                    floated='right' 
                    onPageChange={this.handlePage} 
                    defaultActivePage={this.state.new_inventories.page} 
                    totalPages={this.state.new_inventories.pages}
                    siblingRange={1}
                    ellipsisItem={null}
                    firstItem={null}
                    lastItem={null}
                />
            }


            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>

    )
}
}


export default InventoryContainer