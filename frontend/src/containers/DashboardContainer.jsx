import React from 'react'
import { Table, Pagination, Segment, Loader, Button, Container } from 'semantic-ui-react';
import ClientComponent from '../components/ClientComponent'
import DashboardContainerBottom from './DashboardContainerBottom'
import NewClientForm from '../components/NewClientForm'
import { NavLink, Route } from 'react-router-dom';

class Dashboard extends React.Component{


  state = {
    clients: [],
    loading: true,
    clientId: '',
    addClicked: false
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
    fetch('/clients/')
      .then(res => res.json())
      .then(this.initialState)
      
  }
  
  addClientHandler=()=>{
    if (this.state.addClicked) {
      return <NewClientForm />
    }
  }

renderClients=()=>{
    if (this.state.loading) {
      return null
    } else {
      return this.state.clients.clients.map(client =>  
        
          <Table.Row>
          <Table.Cell ><Container fluid as={NavLink} to={'/clients/'+ client.id} onClick={() => this.props.clickHandler(client.id)} >{client.first_name +" " + client.last_name}</Container></Table.Cell>
          <Table.Cell>{client.phone1}</Table.Cell>
          <Table.Cell>{client.address}</Table.Cell>
          <Table.Cell>{client.source}</Table.Cell>
          </Table.Row>

      )
    }
}



render(){
  
    return(
      this.state.addClicked ?

        <NewClientForm />

        :

        this.state.clientId ? 
        
        <ClientComponent deletePrompt={this.props.deletePrompt} />

        :

        <>
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
              <Button
                content='Add Client'
                onClick={() => this.setState(prevState => ({ addClicked: !prevState.addClicked }))}
              ></Button>

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

        <Segment vertical>
        </Segment>

        {this.state.clientId ?
          null
        :
          <DashboardContainerBottom clickHandler={this.props.clickHandler} date={this.props.date}/>
        }
        </>

    )
}
}

export default Dashboard