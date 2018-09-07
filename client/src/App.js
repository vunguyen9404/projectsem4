import React, { Component } from 'react';
import { Switch, Route }    from 'react-router-dom';
import NavMenu              from './components/NavMenu';
import TopMenu              from './components/TopMenu';
import Dashboard            from './components/Dashboard';
import UserList             from './components/UserList';
import AddUser              from './components/AddUser';
import Prize                from './components/Prize';
import Profile              from './components/Profile';


class App extends Component {
  render() {
    return (
      <div className="app">
        <NavMenu/>
        <TopMenu/>
        <main style={{ paddingTop: 64 }}>
          <div className="main-content">
            <Switch>
              <Route path="/dashboard" name="dashboard" component={Dashboard}/>
              <Route path="/prize" name="prize" component={Prize}/>
              <Route path="/user-list" name="user-list" component={UserList}/>
              <Route path="/add-user" name="add-user" component={AddUser}/>
              <Route path="/profile" name="profile" component={Profile}/>
            </Switch>
          </div>
        </main>
      </div>
    );
  }
}


export default App;
