import Proptypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './StyledButton.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function StyledButton({ to, href, disabled = false, effects, children, onClick, ...passProps }) {
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

  const classes = cx('styledButton-Wrapper', {
    disabled,
  });

  return (
    <Comp
      style={
        effects && {
          backgroundImage: `url(${images.effects_bg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }
      }
      className={classes}
      {...props}
    >
      <span className={cx('styledButton-Child')}>{children}</span>
    </Comp>
  );
}

StyledButton.propTypes = {
  to: Proptypes.string,
  href: Proptypes.string,
  effects: Proptypes.bool,
  disabled: Proptypes.bool,
  children: Proptypes.node.isRequired,
  onClick: Proptypes.func,
};

export default StyledButton;
