import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless'; // different import path!
import 'tippy.js/dist/tippy.css'; // optional
import { PopperWrapper } from '..';
import MenuItem from './MenuItem';
import MenuHeader from './MenuHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderMenu = () => {
    return current.data.map((menuItem, index) => {
      const isParent = !!menuItem.children;
      return (
        <MenuItem
          key={index}
          title={menuItem.title}
          icon={menuItem.icon}
          toogleOnOff={menuItem.toogleOnOff}
          splitterTop={menuItem.splitterTop}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, menuItem.children]);
            } else {
              console.log(menuItem);
              menuItem.onClick && menuItem.onClick();
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      delay={[100, 500]}
      placement="bottom-end"
      offset={[10, 10]}
      interactive
      render={(attrs) => (
        <div className={cx('see-more-menu')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            {history.length > 1 && (
              <MenuHeader
                title={current.title}
                icon={<FontAwesomeIcon icon={faChevronLeft} />}
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            <div className={cx('menu-container')}>{renderMenu()}</div>
          </PopperWrapper>
        </div>
      )}
      onHide={() => {
        history.length > 1 && setHistory((prev) => prev.slice(0, prev.length - 1));
      }}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
