import React, { Component } from 'react';
import { Switch, Route }    from 'react-router-dom';
import NavMenu              from './components/NavMenu';
import TopMenu              from './components/TopMenu';
import Dashboard            from './components/Dashboard';


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
            </Switch>
          </div>
        </main>
      </div>
    );
  }
}


export default App;
