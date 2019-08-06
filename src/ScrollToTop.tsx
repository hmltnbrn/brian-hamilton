import React, { useEffect, ReactNode } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

type ChildrenProps = {
  children?: ReactNode
};

type Props = ChildrenProps & RouteComponentProps;

const ScrollToTop = ({ children }: Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>{children}</>
  );
};

export default withRouter(ScrollToTop);
