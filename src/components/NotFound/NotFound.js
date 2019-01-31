// @flow

import React from 'react';
import styles from './NotFound.module.scss';

import classNames from 'classnames/bind';

import { withRouter } from 'react-router-dom';
import type { ContextRouter } from 'react-router-dom';

let cx = classNames.bind(styles);

class NotFound extends React.Component<ContextRouter> {

  goBack = ():void => {
    this.props.history.goBack();
  }

  render() {
    return (
      <div className={cx("not-found")}>
        <div className={cx("error-section")}>
          <h1>404</h1>
          <p className={cx("small")}>Page Not Found</p>
        </div>
        <p className={cx("description")}>The page you're looking for doesn't exist. Sorry.</p>
        <p className={cx("contact")}><span className={cx("span-link")} onClick={this.goBack}>Go back</span> or <a href="mailto:hmltnbrn@gmail.com">contact me</a> with details.</p>
      </div>
    );
  }
};

export default withRouter(NotFound);
