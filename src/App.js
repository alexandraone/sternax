import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './common/footer/Footer';
import Header from './common/header/Header';
import Home from './components/Home';

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
