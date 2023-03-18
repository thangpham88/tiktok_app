import PropTypes from 'prop-types';
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

MenuHeader.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node,
  onBack: PropTypes.func,
};

export default MenuHeader;
