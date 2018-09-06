import React    from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
}               from 'react-router-dom';
import App      from './App';
import SignIn   from './components/SignIn';


ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/sign-in" name="sign-in" component={SignIn}/>
      <Route path="/" name="app" component={App}/>
    </Switch>
  </Router>,
  document.getElementById('root')
);
