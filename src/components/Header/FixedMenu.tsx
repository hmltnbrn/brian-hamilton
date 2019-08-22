import React, { useState, useEffect } from 'react';
import styles from './FixedMenu.module.scss';

import { connect } from 'react-redux';
import { toggleDrawer } from './actions';

import classNames from 'classnames/bind';

interface Props {
  toggleDrawer: () => void;
}

const cx = classNames.bind(styles);

const FixedMenu = ({ ...props }: Props): JSX.Element => {
  const [isHide, setIsHide] = useState<boolean>(true);
  const appearValue = 100;

  useEffect(() => {
    const hideBar = (): void => {
      if (window.scrollY < appearValue || window.innerWidth < 800) {
        setIsHide(true);
      } else {
        setIsHide(false);
      }
    };

    window.addEventListener('scroll', hideBar);

    return function cleanup(): void {
      window.removeEventListener('scroll', hideBar);
    };
  }, [isHide, appearValue]);

  return (
    <div className={cx('top-menu', isHide ? 'hide' : '')}>
      <button onClick={props.toggleDrawer}>
        <i className="material-icons">menu</i>
      </button>
    </div>
  );
};

export default connect(
  null,
  { toggleDrawer }
)(FixedMenu);
