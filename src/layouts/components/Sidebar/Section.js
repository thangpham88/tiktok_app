import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Section({ children }) {
  return <div className={cx('section-container')}>{children}</div>;
}

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
