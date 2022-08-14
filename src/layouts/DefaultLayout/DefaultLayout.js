import styles from './DefaultLayout.module.scss'
import className from 'classnames/bind'
import Header from '@/layouts/components/Header';
import Sidebar from '../components/Sidebar';
import React from 'react';
import PropTypes from 'prop-types'

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired
}
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
