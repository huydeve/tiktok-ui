import React, { useEffect, useMemo, useRef, useState } from 'react';
import Tippy, { tippy } from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';

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

  return (
    <Tippy
      interactive
      delay={[0, 700]}
      offset={[10, 12]}
      placement="bottom-end"
      hideOnClick={hideOnClick}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
      render={(attribute) => (
        <div className={cx('menu-list')} tabIndex={-1} {...attribute}>
          <PopperWrapper className={cx('menu-popper')}>
            {history.length > 1 && (
              <Header
                title="Languague"
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            <div className={history.length > 1 && cx('menu-body', 'max-height')}>{renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}
