import React from 'react'
import { Table, Container, Loader } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';



class DailyTaskListComponent extends React.Component{

  state = {
    first_name: '',
    last_name: ''
  }


  fetchClient=()=> {
    const id = this.props.task.client_id
    fetch('/clients/' + id)
    .then(res => res.json())
    .then(data => {
      this.setState({first_name: data.client.first_name, last_name: data.client.last_name})
    })
  }

  componentDidMount() {
    this.fetchClient()
  }

    render(){

        return(

              <Table.Row>
                <Table.Cell >{this.props.task.content}</Table.Cell>
                <Table.Cell>{this.props.task.date_due}</Table.Cell>
                <Table.Cell>{
                this.state.first_name ?
                <Container fluid as={NavLink} to={'/clients/'+ this.props.task.client_id} onClick={()=>this.props.clickHandler(this.props.task.client_id)}>{this.state.first_name +" " + this.state.last_name}</Container>
                :
                <Loader />
                }</Table.Cell>
              </Table.Row>

        )
    }
}

export default DailyTaskListComponent