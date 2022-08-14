import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, useMatch, useResolvedPath } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  activeIcon: PropTypes.node.isRequired,
};

function MenuItem({ title, to, icon, activeIcon }) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  const handleActive = (nav) => {
    return cx('menu-item', { active: nav.isActive });
  };

  return (
    <NavLink className={handleActive} to={to}>
      {match ? activeIcon : icon}
      <span className={cx('title')}>{title}</span>
    </NavLink>
  );
}

export default MenuItem;
