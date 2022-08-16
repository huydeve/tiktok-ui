import classNames from 'classnames/bind';
import React from 'react';
import styles from './Discover.module.scss';
import DiscoverItem from './DiscoverItem';
const cx = classNames.bind(styles);
const discovers = [
  {
    label: 'suthatla',
    type: 'life',
  },
  {
    label: 'mackedoi',
    type: 'life',
  },
  {
    label: 'sansangthaydoi',
    type: 'life',
  },
  {
    label: 'Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n',
    type: 'music',
  },
  {
    label: 'Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng',
    type: 'music',
  },
  {
    label: 'genzlife',
    type: 'life',
  },
  {
    label: 'Tình Đã Đầy Một Tim - Huyền Tâm Môn',
    type: 'music',
  },
  {
    label: 'Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham',
    type: 'music',
  },
];

function Discover({ label }) {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>
      <div className={cx('discover-list')}>
        {discovers.map((item, index) => {
          return <DiscoverItem key={index} label={item.label}  type={item.type}/>;
        })}
      </div>
    </div>
  );
}

export default Discover;
