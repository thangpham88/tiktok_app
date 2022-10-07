import Header from '../components/Header';
import Sidebar from './Sidebar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
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

export default DefaultLayout;
