import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Switch from 'react-switch';

const cx = classNames.bind(styles);

function MenuItem({ title, icon, toogleOnOff = false, splitterTop = false, onClick }) {
  const [checked, setChecked] = useState(false);
  const handleToogleChange = (nextChecked) => {
    setChecked(nextChecked);
  };

  return (
    <div className={cx('wrapper', { splitterTop })} onClick={onClick}>
      {!!icon && <div className={cx('menuItem-icon')}>{icon}</div>}

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

export default MenuItem;
