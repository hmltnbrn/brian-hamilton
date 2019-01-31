//@flow

import * as React from 'react';
import { withRouter } from 'react-router-dom';
import type { ContextRouter } from 'react-router-dom';

type ChildrenProps = {
  children?: React.Node
};

type Props = ChildrenProps & ContextRouter;

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
