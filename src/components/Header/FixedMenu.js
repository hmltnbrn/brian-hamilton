// @flow

import React from 'react';
import styles from './FixedMenu.module.scss';

import { connect } from 'react-redux';
import { toggleDrawer } from './actions';

import classNames from 'classnames/bind';

type Props = {
  drawer: boolean,
  windowWidth: number,
  toggleDrawer: () => void
};

type State = {
  isHide: boolean,
  appearValue: number
};

let cx = classNames.bind(styles);

class FixedMenu extends React.Component<Props, State> {

  state = {
    isHide: true,
    appearValue: 100
  };

  hideBar = () => {
    const { isHide, appearValue } = this.state;
    if (window.scrollY < appearValue || window.innerWidth < 800) {
      !isHide && this.setState({ isHide: true });
    }
    else {
      isHide && this.setState({ isHide: false });
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.hideBar);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.hideBar);
  }

  render() {
    const classHide = this.state.isHide ? 'hide' : '';
    return (
      <div className={cx("top-menu", classHide)}>
        <button onClick={() => this.props.toggleDrawer()}>
          <i className="material-icons">menu</i>
        </button>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  drawer: state.header.drawer
});

export default connect(mapStateToProps, { toggleDrawer })(FixedMenu);
