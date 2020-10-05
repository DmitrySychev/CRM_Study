import React from 'react';
import DashboardContainer from './containers/DashboardContainer'
import ClientContainer from './containers/ClientContainer'
import ClientComponent from './components/ClientComponent'
import Login from './components/Login'
import DailyTasksContainer from './containers/DailyTasksContainer'
import LeadsContainer from './containers/LeadsContainer'
import InventoryContainer from './containers/InventoryContainer'
import MailboxContainer from './containers/MailboxContainer'
import SearchComponent from './components/SearchComponent'
import Heading from './components/Heading'
import Cal from './components/Cal'
import { Tab, Container } from "semantic-ui-react";
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import {
  enable as enableDarkMode,
  auto as followSystemColorScheme,
} from 'darkreader';


class App extends React.Component{


  state = { 

  }

  setDate=()=>{
    const today  = new Date();
    this.setState({ date: today.toLocaleDateString("en-US") }) 
  }

  dateChange=(date)=>{
    this.setState({ date: date.toLocaleDateString("en-US") })
  }

  clickHandler=(data)=>{
    this.setState({ clientId: data, activeItem: 'Client/:id' })
    
  }

  componentDidMount() {
    this.setDate()
  }

  render() {
    const panes = [
        {
          menuItem: {

            id: "tab1",
            content: <Container><SearchComponent clickHandler={this.clickHandler}/></Container>,
        }},
        {
          menuItem: {
            as: NavLink,
            id: "tab2",
            content: "Dashboard",
            to: "/dashboard",
            exact: true,
            key: "dashboard"
          },
          pane: (
            <Route
              path="/dashboard"
              exact
              render={() => (
                <Tab.Pane>
                  <DashboardContainer  clickHandler={this.clickHandler}/>
                </Tab.Pane>
              )}
            />
          )
        },
        {
          menuItem: {
            as: NavLink,
            id: "tab3",
            content: "Daily Tasks",
            to: "/tasks",
            exact: true,
            key: "tasks"
          },
          pane: (
            <Route
              path="/tasks"
              exact
              render={() => (
                <Tab.Pane>
                  <DailyTasksContainer  clickHandler={this.clickHandler} date={this.state.date} />
                </Tab.Pane>
              )}
            />
          )
        },
        {
          menuItem: {
            as: NavLink,
            id: "tab4",
            content: "Clients",
            to: "/clients",
            exact: true,
            key: "clients"
          },
          pane: (
            <Route
              path="/clients"
              exact
              render={() => (
                <Tab.Pane>
                  <ClientContainer  clickHandler={this.clickHandler}/>
                </Tab.Pane>
              )}
            />
          )
        },
        {
          menuItem: {
            as: NavLink,
            id: "tab5",
            content: "Leads",
            to: "/leads",
            exact: true,
            key: "leads"
          },
          pane: (
            <Route
              path="/leads"
              exact
              render={() => (
                <Tab.Pane>
                  <LeadsContainer  clickHandler={this.clickHandler}/>
                </Tab.Pane>
              )}
            />
          )
        },
        {
          menuItem: {
            as: NavLink,
            id: "tab6",
            content: "Inventory",
            to: "/inventory",
            exact: true,
            key: "inventory"
          },
          pane: (
            <Route
              path="/inventory"
              exact
              render={() => (
                <Tab.Pane>
                  <InventoryContainer />
                </Tab.Pane>
              )}
            />
          )
        },
        {
          menuItem: {
            as: NavLink,
            id: "tab7",
            content: "Mailbox",
            to: "/mailbox",
            exact: true,
            key: "mailbox"
          },
          pane: (
            <Route
              path="/mailbox"
              exact
              render={() => (
                <Tab.Pane>
                  <MailboxContainer />
                </Tab.Pane>
              )}
            />
          )
        },
        {
          Segment: {
            as: NavLink,
            id: "tab8",
            content: "Client",
            to: "/clients/" + this.state.clientId,
            exact: true,
            key: "client/:id",
            hidden: true
          },
          pane: (
            <Route
              path="/clients/:id"
              exact
              render={() => (
                <Tab.Pane>
                  <ClientComponent />
                </Tab.Pane>
              )}
            />
          )
        },
        {
          Segment: {
            as: NavLink,
            id: "tab9",
            content: "Login",
            to: "/login",
            exact: true,
            key: "login",
            hidden: true
          },
          pane: (
            <Route
              path="login"
              exact
              render={() => (
                <Tab.Pane>
                  <Login />
                </Tab.Pane>
              )}
            />
          )
        },
        {
          menuItem: {
            id: "tab10",
            content: <Container style={{ marginLeft: '1px'}}><Cal date={this.dateChange}/></Container>,
            exact: true,
            key: "cal"
            
        }},
    
      ];
  


    enableDarkMode({
      brightness: 100,
      contrast: 90,
      sepia: 10,
    });

    followSystemColorScheme();

    return (

      window.location.href.split('/')[3] ?

      <>
      <Heading />
        <Router>
          <div className="App" style={{ marginTop: "10px" }}>
            <Switch>
              <Tab  menu={{ fluid: true, vertical: true, tabular: true }} grid={{ paneWidth: 12, tabWidth: 3}} renderActiveOnly={false} activeIndex={-1} panes={panes} />
            </Switch>
          </div>
        </Router>
      </>

      :
      
      <Login />
      
    );
  }
}

export default App;



