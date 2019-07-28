import React, { useState, useEffect } from 'react';
import styles from './FixedMenu.module.scss';

import { connect } from 'react-redux';
import { toggleDrawer } from './actions';

import classNames from 'classnames/bind';

type Props = {
  toggleDrawer: () => void
};

let cx = classNames.bind(styles);

const FixedMenu = ({ toggleDrawer }: Props) => {
  const [isHide, setIsHide] = useState<boolean>(true);
  const appearValue: number = 100;

  useEffect(() => {
    const hideBar = () => {
      if (window.scrollY < appearValue || window.innerWidth < 800) {
        setIsHide(true);
      }
      else {
        setIsHide(false);
      }
    }

    window.addEventListener('scroll', hideBar);

    return function cleanup() {
      window.removeEventListener('scroll', hideBar);
    };
  }, [isHide, appearValue]);

  return (
    <div className={cx("top-menu", isHide ? 'hide' : '')}>
      <button onClick={() => toggleDrawer()}>
        <i className="material-icons">menu</i>
      </button>
    </div>
  );
};

export default connect(null, { toggleDrawer })(FixedMenu);
