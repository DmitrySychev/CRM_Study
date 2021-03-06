import _ from 'lodash'
import React from 'react'
import { Search, Grid, Button, Input, Container, Segment } from 'semantic-ui-react'
import ClientComponent from '../components/ClientComponent'
import { NavLink, Route } from 'react-router-dom';



let clients = []
let clientId;


const fetchClients = () => {
    fetch('/clients/')
    .then(res => res.json())
    .then(data =>  { 
        clients = data.all_clients;
        return Promise.resolve(clients)  })
}

const initialState = {
  loading: false,
  results: [],
  value: '',
}

function exampleReducer(state, action) {
  switch (action.type) {
    case 'CLEAN_QUERY':
      return initialState
    case 'START_SEARCH':
      return { ...state, loading: true, value: action.query }
    case 'FINISH_SEARCH':
      return { ...state, loading: false, results: action.results }
    case 'UPDATE_SELECTION':
      return { ...state, value: action.selection }

    default:
      throw new Error()
  }
}

function SearchComponent(props) {

  fetchClients()

  const [state, dispatch] = React.useReducer(exampleReducer, initialState)
  const { loading, results, value } = state

  const timeoutRef = React.useRef()
  
  const handleSearchChange = React.useCallback((e, data) => {
    clearTimeout(timeoutRef.current)
    dispatch({ type: 'START_SEARCH', query: data.value })

    
    timeoutRef.current = setTimeout(() => {
      if (data.value.length === 0) {
        dispatch({ type: 'CLEAN_QUERY' })
        return
      }

      const re = new RegExp(_.escapeRegExp(data.value), 'i')
      const isMatch = (result) => re.test(result.title)

      dispatch({
        type: 'FINISH_SEARCH',
        results: _.filter(clients, isMatch),
      })
    }, 300)
  }, [])
  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [])


  function submitHandler(){
    console.log(clientId)
  }



  return (
 
   
      <Grid>
        <Grid.Column width={20}>
        <Segment.Inline  >
          <Search
            id='searchBox'
            loading={loading}
            onResultSelect={(e, data) =>
              dispatch({ 
              type: 'UPDATE_SELECTION', selection: data.result.title }, 
              clientId = data.result.id,
              props.clickHandler(data.result.id),       
              )}

            onSearchChange={handleSearchChange}
            results={results}
            value={value}
            icon="search"
            type='submit'
            
            
          />
           
          <Button as={NavLink} to={'/clients/'+ clientId} >Search</Button>
          </Segment.Inline>
        </Grid.Column>
      </Grid>
  
  )
}
export default SearchComponent