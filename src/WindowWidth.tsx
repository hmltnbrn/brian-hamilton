import React from 'react';

type State = {
  windowWidth: number | null
};

const windowWidth = <P extends object>(Component: React.ComponentType<P>) =>
  class WindowWidth extends React.Component<State> {
    state = {
      windowWidth: window.innerWidth
    };

    componentDidMount = ():void => {
      window.addEventListener('resize', this.handleResize);
    }
  
    componentWillUnmount = ():void => {
      window.removeEventListener('resize', this.handleResize);
    }
  
    handleResize = ():void => {
      this.setState({windowWidth: window.innerWidth});
    }

    render() {
      return (
        <Component
          windowWidth={this.state.windowWidth}
          {...this.props as P}
        />
      );
    }
  }

export default windowWidth;
