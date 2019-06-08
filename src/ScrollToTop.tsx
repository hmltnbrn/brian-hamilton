import React, { ReactNode } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

type ChildrenProps = {
  children?: ReactNode
};

type Props = ChildrenProps & RouteComponentProps;

class ScrollToTop extends React.Component<Props> {
  componentDidUpdate(prevProps: Props) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return <>{this.props.children}</>;
  }
}

export default withRouter(ScrollToTop);
