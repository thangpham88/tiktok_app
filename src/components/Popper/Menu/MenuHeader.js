import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuHeader({ title, icon, onBack }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('menuHeader-icon')} onClick={onBack}>
        {icon}
      </div>

      <h4 className={cx('menuHeader-text')}>{title}</h4>
    </div>
  );
}

export default MenuHeader;
