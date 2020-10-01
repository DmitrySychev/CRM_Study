import React from 'react'
import { Table, Pagination, Segment, Loader } from 'semantic-ui-react';
import ClientListComponent from '../components/ClientListComponent'
import ClientComponent from '../components/ClientComponent'

class ClientContainer extends React.Component{


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
    const url = "/client_cont/?page=" + pageString
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
    fetch('/client_cont/')
      .then(res => res.json())
      .then(this.initialState)
  }



renderClients=()=>{
    if (this.state.loading === false) {
        return this.state.clients.clients.map(client =>
            {return <ClientListComponent deletePrompt={this.props.deletePrompt} clickHandler={this.clientClickHandler} state={this.props.state} key={client.id} client={client}/>} 
        )
    }
}

clientClickHandler=(data)=>{
    this.setState({ clientId: data})
  }



render(){
  // console.log(this.props)
    return(
      this.state.clientId ? 
      <ClientComponent deletePrompt={this.props.deletePrompt} />
      :
        <>
        <Segment vertical>
          <Table celled compact > 
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
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
                  <Loader />
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




    </>
    )
}
}


export default ClientContainer