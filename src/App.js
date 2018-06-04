import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Content from './components/Content/Content';
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
          <Banner/>
          <Content windowWidth={this.state.windowWidth}/>
          <Footer/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
