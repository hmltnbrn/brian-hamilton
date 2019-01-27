//@flow

import * as React from 'react';

type State = {
  windowWidth: ?number
};

function windowWidth<Config: {}>(
  InnerComponent: React.ComponentType<Config>
): React.ComponentType<$Diff<Config, State>> {
  class WindowWidth extends React.Component<$Diff<Config, State>, State> {
    state: State = {
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
