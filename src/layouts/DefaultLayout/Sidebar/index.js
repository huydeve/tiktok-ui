import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
const cx = classNames.bind(styles);

export default function SideBar() {
  return <aside className={cx('wrapper')}>SideBar</aside>;
}