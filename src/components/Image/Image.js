import classNames from 'classnames/bind';
import React, { forwardRef, useState } from 'react';
import { images } from '../Icons';
import styles from './Image.module.scss';
const cx = classNames.bind(styles);

function Image({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) {
  const [fallback, setFallback] = useState('');
  const handleError = () => {
    setFallback(customFallback);
  };
  return (
    <img
      ref={ref}
      src={fallback || src}
      className={cx('wrapper', className)}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
}

export default forwardRef(Image);
