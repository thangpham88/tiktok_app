import PropTypes from 'prop-types';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import classNames from 'classnames/bind';
import styles from './MainLayout.module.scss';

const cx = classNames.bind(styles);

function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <div className={cx('wrapper')}>
        <div className={cx('container')}>
          <Sidebar></Sidebar>
          <div className={cx('content')}>{children}</div>
        </div>
      </div>
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
