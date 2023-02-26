import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  outline = false,
  greyOutline = false,
  rounded = false,
  large = false,
  small = false,
  disabled = false,
  leftIcon,
  rightIcon,
  children,
  onClick,
  ...passProps
}) {
  let Comp = 'button';

  const props = {
    onClick,
    ...passProps,
  };

  if (disabled) {
    Object.keys(props).forEach((prop) => {
      if (prop.startsWith('on') && typeof props[prop] === 'function') {
        delete props[prop];
      }
    });
  }

  if (to) {
    if (!disabled) {
      props.to = to;
    }
    Comp = Link;
  } else {
    if (!disabled) {
      props.href = href;
    }
    Comp = 'a';
  }

  const classes = cx('wrapper', {
    outline,
    greyOutline,
    primary,
    rounded,
    large,
    small,
    disabled,
  });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
