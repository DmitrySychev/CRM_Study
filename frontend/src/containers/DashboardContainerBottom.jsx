import React from 'react'
import { Table, Pagination, Segment } from 'semantic-ui-react';
import DailyTaskListComponent from '../components/DailyTaskListComponent'
import ClientComponent from '../components/ClientComponent';

class DashboardContainerBottom extends React.Component{

  state = {
    tasks: [],
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
    const url = "/appointments_dash/?page=" + pageString
      fetch(url)
        .then(res => res.json())
        .then(this.initialState)
      }

  initialState = (resData) => {
    this.setState({
      loading: false,
      tasks: resData
    })
  }

  componentDidMount() {
    fetch('/appointments_dash/')
      .then(res => res.json())
      .then(this.initialState)
  }

renderTasks=()=>{
    if (this.state.loading === false) {
        const result =  this.state.tasks.appointments.filter(task => task.content === 'Appointment')
        return result.map(task => <DailyTaskListComponent clickHandler={this.props.clickHandler} key={task.id} task={task}/>)
    }
}


render(){
    return(

        <>
        <Segment vertical>
          <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Task</Table.HeaderCell>
              <Table.HeaderCell>Due Date</Table.HeaderCell>
              <Table.HeaderCell>Client</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
          {this.renderTasks()}
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>
              
              { this.state.loading ? 
                  'Loading...'
                  : 
                  <Pagination 
                      floated='right' 
                      onPageChange={this.handlePage} 
                      defaultActivePage={this.state.tasks.page} 
                      totalPages={this.state.tasks.pages}
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


export default DashboardContainerBottom