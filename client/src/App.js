import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import {Route, Switch} from 'react-router-dom'; 


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={about} />
          <Route component={NoMatch}/>
        </Switch>
      </div>
    );
  }
}

export default App;
