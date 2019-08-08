import React from 'react';
import styles from './SideNav.module.scss';

import { connect } from 'react-redux';
import { toggleDrawer } from './actions';

import { AppState } from "../../store";

import classNames from 'classnames/bind';

import { Button } from '../Local/Button/Button';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

type Props = {
  drawer: boolean,
  toggleDrawer: () => void
};

let cx = classNames.bind(styles);

const SideNav = ({ drawer, toggleDrawer }: Props) => {
  return (
    <SwipeableDrawer
      open={drawer}
      onClose={() => toggleDrawer()}
      onOpen={() => toggleDrawer()}
    >
      <div
        tabIndex={0}
        role="button"
        onClick={() => toggleDrawer()}
        onKeyDown={() => toggleDrawer()}
      >
        <div className={cx("links-container")}>
          <div className={cx("drawer-exit")}><i className="material-icons" tabIndex={0}>clear</i></div>
          <Button type="nav-link" exact to="/" classNames={[cx("drawer-link")]} activeClassName={cx("active")}>Home</Button>
          <Button type="nav-link" to="/resume" classNames={[cx("drawer-link")]} activeClassName={cx("active")}>Resume</Button>
          <Button type="nav-link" to="/portfolio" classNames={[cx("drawer-link")]} activeClassName={cx("active")}>Portfolio</Button>
          <Button type="nav-link" to="/contact" classNames={[cx("drawer-link")]} activeClassName={cx("active")}>Contact</Button>
        </div>
      </div>
    </SwipeableDrawer>
  );
};

const mapStateToProps = (state: AppState) => ({
  drawer: state.header.drawer
});

export default connect(mapStateToProps, { toggleDrawer })(SideNav);
