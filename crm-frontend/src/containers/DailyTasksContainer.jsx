import React from 'react'
import { Table, Pagination, Segment } from 'semantic-ui-react';
import DailyTaskListComponent from '../components/DailyTaskListComponent'
import ClientComponent from '../components/ClientComponent'
import DailyTasksContainerBottom from '../containers/DailyTasksContainerBottom'


class DailyTasksContainer extends React.Component{




    state = {
      loading: true
    }

  
  componentDidMount() {
    fetch('/tasks_all/')
      .then(res => res.json())
      .then(this.initialState)
  }

  initialState = (resData) => {
    this.setState({
      loading: false,
      tasks: resData
    })
  }


  renderTasks=()=>{
      if (this.state.loading === false) {
          const result = this.state.tasks.tasks.filter(task => task.date_due == this.props.date)
          return result.map(task => <DailyTaskListComponent date={this.props.date} clickHandler={this.props.clickHandler} key={task.id} task={task}/>)

      }
  }





    render(){
        return(

          this.state.clientId ? 
          <ClientComponent />
          :
          <>
          <Segment vertical>
            <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Daily Tasks</Table.HeaderCell>
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
                

                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
          </Segment>

          {this.state.clientId ?
            null
          :
            <DailyTasksContainerBottom clickHandler={this.props.clickHandler} date={this.props.date} />
          }

          
          </>

        )
    }
}

export default DailyTasksContainer