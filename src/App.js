import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setState({windowWidth: window.innerWidth});
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App-components">
          <Header windowWidth={this.state.windowWidth}/>
            <Route exact path="/" component={Home}/>
            <Route path="/portfolio" component={Portfolio}/>
          <Footer/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
