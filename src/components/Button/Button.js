import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  large: PropTypes.bool,
  medium: PropTypes.bool,
  small: PropTypes.bool,
  text: PropTypes.bool,
  outline: PropTypes.bool,
  disabled: PropTypes.bool,
  rounded: PropTypes.bool,
  color: PropTypes.string,
  className: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  onClick: PropTypes.func,
};

export default function Button({
  to,
  href,
  primary = false,
  large = false,
  medium = false,
  small = false,
  text = false,
  outline = false,
  disabled = false,
  rounded = false,
  color,
  children,
  className,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}) {
  let Components = 'button';
  const props = {
    onClick,

    ...passProps,
  };

  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Components = Link;
  } else if (href) {
    props.href = href;
  }

  const classes = cx('wrapper', {
    [className]: className,
    primary,
    outline,
    medium,
    text,
    small,
    large,
    disabled,
    rounded,
    light: color === 'light',
  });
  return (
    <Components className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Components>
  );
}
