import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function List({ title, children }) {
  return (
    <div className={cx('nav-DivContainer')}>
      {title && <h2 className={cx('nav-title')}>{title}</h2>}
      <div className={cx('nav-list')}>{children}</div>
    </div>
  );
}

List.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default List;
