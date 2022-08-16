import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import videoDemo from '@/assets/video/video.mp4';
import styles from './Video.module.scss'
import classNames from 'classnames/bind';
const cx = classNames.bind(styles)
function Video({ className, src }, ref) {
  const videoRef = useRef();

  const classes = cx ('video', className)

  useImperativeHandle(ref, () => {
    return {
      play() {
        videoRef.current.play();
      },
      pause() {
        videoRef.current.pause();
      },
    };
  });

  return <video ref={videoRef} className={classes} src={videoDemo} />;
}

export default forwardRef(Video);
