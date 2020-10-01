import React from 'react'
import { Table, Pagination, Segment } from 'semantic-ui-react';
import DailyTaskListComponent from '../components/DailyTaskListComponent'

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

class DailyTasksContainer extends React.Component{

    state = {
        loading: true
      }

    
  componentDidMount() {
    fetch('/appointments/')
      .then(res => res.json())
      .then(this.initialState)
  }

  initialState = (resData) => {
    this.setState({
      loading: false,
      appointments: resData
    })
  }

  
  renderAppointments=()=>{
      if (this.state.loading === false) {
          const result = this.state.appointments.appointments.filter(task => task.date_due == this.props.date)
          return result.map(task => <DailyTaskListComponent date={this.props.date} clickHandler={this.props.clickHandler} key={task.id} task={task} />)

      }
  }



    render(){
        return(
            
            <>

            <Segment vertical>
              <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Daily Appointments</Table.HeaderCell>
                  <Table.HeaderCell>Due Date</Table.HeaderCell>
                  <Table.HeaderCell>Client</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
  
              <Table.Body>
              {this.renderAppointments()}
              </Table.Body>
  
              <Table.Footer>
                <Table.Row>
                  <Table.HeaderCell colSpan='3'>
                
  
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
            </Segment>
  
            
            </>

        )
    }
}

export default DailyTasksContainer