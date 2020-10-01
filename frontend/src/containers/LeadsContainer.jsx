import React from 'react'
import { Table, Pagination, Segment } from 'semantic-ui-react';
import LeadListComponent from '../components/LeadListComponent'
import LeadsContainerBottom from '../containers/LeadsContainerBottom'


class LeadsContainer extends React.Component{

  state = {
    clients: [],
    loading: true,
    clientId: ''
}

handlePage = (e, { activePage}) => {
  let goToPage = { activePage }
  let pageNum = goToPage.activePage
  let pageString = pageNum.toString()

  this.setState({ 
    loading: true
  })
  const url = "/clients/?page=" + pageString
    fetch(url)
      .then(res => res.json())
      .then(this.initialState)
}
  
initialState = (resData) => {
  this.setState({
    loading: false,
    clients: resData
  })
}

componentDidMount() {
  fetch('http://localhost:8000/clients/')
    .then(res => res.json())
    .then(this.initialState)
}
  
renderClients=()=>{
    if (this.state.loading === false) {  
        const result =  this.state.clients.clients.filter(client => client.source == "website" || client.source == "cars.com" || client.source == 'manucfacturer website')
        return result.map(client =>
            {return <LeadListComponent clickHandler={this.clientClickHandler} state={this.props.state} key={client.id} client={client}/>} 
        )
    }
}

clientClickHandler=(data)=>{
  this.setState({ clientId: data})
  
}


render(){
    return(
      <>

      <Segment vertical>
        <Table celled compact > 
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Todays Leads - Name</Table.HeaderCell>
              <Table.HeaderCell>Phone</Table.HeaderCell>
              <Table.HeaderCell>Address</Table.HeaderCell>
              <Table.HeaderCell>Source</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

        <Table.Body>
        {this.renderClients()}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='4'>
            
            { this.state.loading ? 
                'Loading...'
                : 
                <Pagination 
                    floated='right' 
                    onPageChange={this.handlePage} 
                    defaultActivePage={this.state.clients.page} 
                    totalPages={this.state.clients.pages}
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
    </Segment>

      {this.state.clientId ?
      <Segment vertical> 
        <LeadsContainerBottom client={this.state.clientId}/>
      </Segment>
      :
      <Segment vertical >
        <Segment>
          Select a Lead
        </Segment>
      </Segment>}
    </>

    

    )
}
}

export default LeadsContainer