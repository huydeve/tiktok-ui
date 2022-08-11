import styles from '@/components/Layout/DefaultLayout/DefaultLayout.module.scss'
import className from 'classnames/bind'
import Header from '@/components/Layout/components/Header';
import Sidebar from './Sidebar';
import React from 'react';

const cx = className.bind(styles)

export default function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Sidebar />
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  );
}
