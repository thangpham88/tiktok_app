import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function NavItem({ href, to, title, icon, onClick, children }) {
  let Comp = 'button';
  const props = {
    onClick,
  };

  if (href) {
    Comp = 'a';
    props.href = href;
  } else if (to) {
    Comp = Link;
    props.to = to;
  }

  return (
    <div className={cx('nav-wrapper')} onClick={onClick}>
      <Comp {...props}>
        {!!icon && <div className={cx('navItem-icon')}>{icon}</div>}
        <span className={cx('navItem-text')}>
          {!!title && <span>{title}</span>}
          {children}
        </span>
      </Comp>
    </div>
  );
}

NavItem.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.node,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default NavItem;
