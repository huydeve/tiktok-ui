import Button from '@/components/Button';
import {  MusicNoteIcon } from '@/components/Icons';
import Image from '@/components/Image';
import Video from '@/components/Video';
import config from '@/config';
import {  faCommentDots, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
const cx = classNames.bind(styles);

export default function Home() {




  const TextItem = () => (
    <div>
      <div className={cx('author-container')}>
        {/* <a></a> */}
        <Link className={cx('author-anchor')} to={`/@`}>
          <h3 className={cx('author-title')}>cheemslord</h3>
          <h4 className={cx('author-name')}>CheemsChannel✅</h4>
        </Link>
      </div>
      <Button outline className={cx('item-button')}>
        Follow
      </Button>
      <div className={cx('video-desc')}>
        <span className={cx('text')}>Ăn 3 tô cơm</span>
        <Link className={cx('common-link')} to="/tag/tinhhuongtv">
          <strong className={cx('strong-text')}>#cheemslord </strong>
        </Link>
      </div>
      <h4 className={cx('heading-link')}>
        <Link to={config.routes.profile} className={cx('video-link')}>
          <MusicNoteIcon className={cx('icon')} />
          Bật chế độ bay lên bay lên✅
        </Link>
      </h4>
    </div>
  );

  const VideoItem = () => {
    const videoRef = useRef();

    const handlePlay = () => {
      videoRef.current.play();
    };
    const handlePause = () => {
      videoRef.current.pause();
    };

    return (
      <div className={cx('video-wrapper')}>
        <div className={cx('video-container')}>
          <Video ref={videoRef} />
          <button onClick={handlePlay}>Play</button>
          <button onClick={handlePause}>pause</button>
        </div>
        <div className={cx('action-items-container')}>
          <button className={cx('action-btn')} onClick={() => {}}>
            <span className={cx('action-icon')}>
              <FontAwesomeIcon icon={faHeart} />
            </span>
            <strong  className={cx('action-text')}>
              97.6K
            </strong>
          </button>
          <button className={cx('action-btn')} onClick={() => {}}>
            <span className={cx('action-icon')}>
              <FontAwesomeIcon icon={faCommentDots} />

            </span>
            <strong  className={cx('action-text')}>
              97.6K
            </strong>
          </button>
          <button className={cx('action-btn')} onClick={() => {}}>
            <span className={cx('action-icon')}>
              <FontAwesomeIcon icon={faShare} />
            </span>
            <strong  className={cx('action-text')}>
              97.6K
            </strong>
          </button>

        </div>
      </div>
    );
  };

  const RecommendListItem = () => (
    <div className={cx('item-container')}>
      <Link to={config.routes.profile}>
        <Image src="" alt="" className={cx('avatar')} />
      </Link>
      <div className={cx('content-container')}>
        <TextItem />
        <VideoItem />
      </div>
    </div>
  );
  return (
    <div className={cx('container')}>
      <RecommendListItem />
    </div>
  );
}
