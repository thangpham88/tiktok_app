import { useState } from 'react';
import images from '~/assets/images';
import classNames from 'classnames';
import styles from './Image.module.scss';

function Image({ src, alt, className, ...props }) {
  const [fallback, setFallback] = useState('');

  const handleError = () => {
    setFallback(images.profile_ava_default);
  };

  return (
    <img
      className={classNames(styles.wrapper, className)}
      src={fallback || src}
      alt={alt}
      {...props}
      onError={handleError}
    ></img>
  );
}

export default Image;
