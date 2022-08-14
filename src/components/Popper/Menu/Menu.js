import React, { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
Menu.propTypes = {
  // children: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
};
const cx = classNames.bind(styles);

const defaultFn = () => {};

export default function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn, ...props }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
  
  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          className={history.length > 1 ? 'menu-item-languages' : null}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  const handleBack = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  }

  const renderResult = (attribute) => (
    <div className={cx('menu-list')} tabIndex={-1} {...attribute}>
      <PopperWrapper className={cx('menu-popper')}>
        {history.length > 1 && (
          <Header
            title={current.title}
            onBack={handleBack}
          />
        )}
        <div className={history.length > 1 ? cx('menu-body', 'max-height') : ''}>{renderItems()}</div>
      </PopperWrapper>
    </div>
  );

  const handleReset = () => {
    setHistory((prev) => prev.slice(0, 1));
  };

  return (
    <Tippy
      interactive
      delay={[0, 700]}
      offset={[10, 12]}
      placement="bottom-end"
      hideOnClick={hideOnClick}
      onHide={handleReset}
      render={renderResult}
    >
      {children}
    </Tippy>
  );
}
