import classNames from 'classnames/bind';
import React from 'react';
import styles from './Popper.module.scss';

// const cx = classNames.bind(styles);
// export default function Wrapper({ children, className }) {
// }
import PropTypes from 'prop-types'
Wrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

const cx = classNames.bind(styles);

function Wrapper({ className, children }) {
 
  return <div className={cx('wrapper', className)}>{children}</div>;
}

export default Wrapper;
