import classNames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';
import { MusicNoteIcon, NumberIcon } from '../../../../components/Icons';
import styles from './Discover.module.scss';

const cx = classNames.bind(styles);
function DiscoverItem({ data, label, type }) {
  return (
    <Link to={`/tag/${label}`} className={cx('discover-link')}>
      <div className={cx('discover-item')}>
        {type === 'music' ? <MusicNoteIcon className={cx('discover-music-note')} /> : <NumberIcon />  }
        <p className={cx('discover-label')}>{label}</p>
      </div>
    </Link>
  );
}

export default DiscoverItem;
