import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import './App.css';
import Menu from './Component/Menu';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Component/Home';
import Footer from './Component/Footer';



class App extends Component {
  render() {
    return (
          <div className="main_page">
              <BrowserRouter>
                  <Menu />
                  <Switch>
                    <Route path='/' exact component = {Home}></Route>
                  </Switch>
              </BrowserRouter>
              <Footer />
          </div>
    );
  }
}

export default App;
