import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
AccountItem.propTypes = {
  data: PropTypes.object,
};
export default function AccountItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
      <Image className={cx('avatar')} src={data.avatar} alt="" />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>{data.nickname}</span>
          {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
        </h4>
        <span className={cx('username')}>{data.full_name}</span>
      </div>
    </Link>
  );
}
