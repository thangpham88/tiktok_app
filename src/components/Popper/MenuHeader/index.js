import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './MenuHeader.module.scss';
import Tippy from '@tippyjs/react/headless'; // different import path!
import 'tippy.js/dist/tippy.css'; // optional
import { PopperWrapper } from '..';
import Switch from 'react-switch';

const cx = classNames.bind(styles);

function MenuHeaderItem({ title, icon, toogleOnOff = false }) {
  const [checked, setChecked] = useState(false);
  const handleToogleChange = (nextChecked) => {
    setChecked(nextChecked);
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('menuItem-icon')}>{icon}</div>

      {!toogleOnOff && (
        <div className={cx('menuItem-text')}>
          <span>{title}</span>
        </div>
      )}

      {toogleOnOff && (
        <div className={cx('menuItem-switch')}>
          <span className={cx('menuItem-switch-title')}>{title}</span>

          <Switch
            className={cx('menuItem-switch-btn')}
            uncheckedIcon={false}
            checkedIcon={false}
            checked={checked}
            onChange={handleToogleChange}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            height={24}
            width={44}
          />
        </div>
      )}
    </div>
  );
}

function MenuHeader({ children, items = [] }) {
  const renderMenu = () => {
    return items.map((menuItem, index) => (
      <MenuHeaderItem key={index} title={menuItem.title} icon={menuItem.icon} toogleOnOff={menuItem.toogleOnOff} />
    ));
  };

  return (
    <Tippy
      delay={[100, 500]}
      placement="bottom-end"
      interactive
      render={(attrs) => (
        <div className={cx('see-more-menu')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <div>{renderMenu()}</div>
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default MenuHeader;
