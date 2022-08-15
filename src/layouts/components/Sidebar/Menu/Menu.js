import React from 'react';
import PropTypes from 'prop-types';
Menu.propTypes = {
  children: PropTypes.node.isRequired,
};

function Menu({ children }) {
  return <nav style={{ marginBottom: 8 }}>{children}</nav>;
}

export default Menu;
