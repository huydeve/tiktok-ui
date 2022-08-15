import Button from '@/components/Button';
import Image from '@/components/Image';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import React from 'react';
import styles from './AccountPreview.module.scss';
const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <Image className={cx('avatar')} src="" alt="" />
        <Button primary className={cx('follow-btn')}>
          Follow
        </Button>
      </div>
      <div className={cx('body')}>
        <p className={cx('nickname')}>
          <strong>Conmeo</strong>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <p className={cx('name')}>Conga</p>
        <p className={cx('statistic')}>
          <strong className={cx('value')}>8.2M</strong>
          <span className={cx('label')}>Followers</span>
          <strong className={cx('value')}>8.2M</strong>
          <span className={cx('label')}>Like</span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;
