import React from 'react';

import Header from './components/Header';
import Banner from './components/Banner';
import Content from './components/Content';
import Footer from './components/Footer';

class App extends React.Component {

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
      <div className="components">
        <Header windowWidth={this.state.windowWidth}/>
        <Banner/>
        <Content windowWidth={this.state.windowWidth}/>
        <Footer/>
      </div>
    );
  }
};

export default App;
