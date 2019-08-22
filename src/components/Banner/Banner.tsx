import React from 'react';
import styles from './Banner.module.scss';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Banner = (): JSX.Element => {
  return (
    <div className={cx('banner-container')}>
      <div className={cx('banner-words')}>
        <div className={cx('banner-name')}>Brian Hamilton</div>
        <div className={cx('banner-title')}>web developer</div>
      </div>
    </div>
  );
};

export default Banner;
