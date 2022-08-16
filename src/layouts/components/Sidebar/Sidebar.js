import { FollowingBoldIcon, FollowingIcon, HomeBoldIcon, HomeIcon, LiveBoldIcon, LiveIcon } from '@/components/Icons';
import SuggestedAccounts from '@/components/SuggestedAccounts';
import config from '@/config';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import Discover from './Discover';
import Footer from './Footer';
import Frame from './Frame';
import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';
const cx = classNames.bind(styles);

export default function SideBar() {
  const user = useSelector((state) => state.persistedReducer.user.profile.data);
  const style = {
    height: '75vh',
    transform:
      'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, -1) scale(1.42463) translateZ(-0.424626px) translateZ(-2px)',
  };
  return (
    <div className={cx('scrollbar-container')}>
      <aside className={cx('wrapper')}>
        <Menu>
          <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeBoldIcon />} />
          <MenuItem
            title="Following"
            to={config.routes.following}
            icon={<FollowingIcon />}
            activeIcon={<FollowingBoldIcon />}
          />
          <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveBoldIcon />} />
        </Menu>
        {!user && <Frame />}
        <SuggestedAccounts label="Suggested accounts" popper />
        {user && <SuggestedAccounts label="Following accounts" message="Accounts you follow will appear here" />}
        <Discover label="Discover" />
        <Footer />
      </aside>
      <div style={style} className={cx('scrollbar')}>
        <div className={cx('scrollbar-thumb')}></div>
      </div>
    </div>
  );
}
