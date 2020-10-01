import React from 'react'
import CommunicationCardComponent from '../components/CommunicationCardComponent'
import { Segment } from 'semantic-ui-react'

class ClientContainerBottom extends React.Component{

    state = {
        communications: [],
        isLoading: true
    }

    fetchCommunications=()=>{
        fetch('/communications')
            .then(res => res.json())
            .then(data => { 
                this.setState({ 
                    communications: data,
                    isLoading: false
                 })
                })
        }

    filterCommunications=()=>{

        let filteredComm;
        let id = window.location.href.split('/')[4]
        if (this.state.isLoading === true) {
            this.fetchCommunications()
        } else {
            filteredComm = this.state.communications.communications.filter(communication => communication.client_id == id);
            return ( filteredComm.map(communication => {
                return <CommunicationCardComponent key={communication.id} communication={communication} />}))
        }    
    }


    render(){
        return(
            <Segment vertical style={{overflow: 'auto', maxHeight: 500 }}>
                {this.filterCommunications()}
            </Segment>
        )
    }
}

export default ClientContainerBottom