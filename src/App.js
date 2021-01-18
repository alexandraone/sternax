import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './common/Footer';
import Header from './common/header/Header';
import Home from './containers/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Header />
          <Switch>
            <Route path='/' component={Home} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
