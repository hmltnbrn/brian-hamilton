import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';

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
      <div className="app-components">
        <Header windowWidth={this.state.windowWidth}/>
          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/resume" component={Resume}/>
              <Route path="/portfolio" component={Portfolio}/>
              <Route path="/contact" component={Contact}/>
              <Route component={NotFound}/>
            </Switch>
          </main>
        <Footer/>
      </div>
    );
  }
}

export default App;
