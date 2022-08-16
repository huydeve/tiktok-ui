import Button from '@/components/Button';
import classNames from 'classnames/bind';
import React from 'react';
import styles from './Frame.module.scss';

const cx = classNames.bind(styles);

function Frame() {
  return <div className={cx('wrapper')}>
    <p className={cx('login-hint')}>Log in to follow creators, like videos, and view comments.</p>
    <Button className={cx('login-btn')} outline>Log in</Button>
  </div>;
}

export default Frame;
