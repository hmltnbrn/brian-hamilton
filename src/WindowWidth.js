import React from 'react';

const windowWidth = (InnerComponent) => {
  class WindowWidth extends React.Component {
    state = {
      windowWidth: window.innerWidth
    };

    componentDidMount() {
      window.addEventListener('resize', this.handleResize);
    }
  
    componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
    }
  
    handleResize = () => {
      this.setState({windowWidth: window.innerWidth});
    }

    render() {
      return (
        <InnerComponent
          windowWidth={this.state.windowWidth}
          {...this.props}
        />
      );
    }
  }

  return WindowWidth;
}

export default windowWidth;
