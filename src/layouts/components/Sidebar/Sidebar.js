import { FollowingBoldIcon, FollowingIcon, HomeBoldIcon, HomeIcon, LiveBoldIcon, LiveIcon } from '@/components/Icons';
import SuggestedAccounts from '@/components/SuggestedAccounts';
import config from '@/config';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';
const cx = classNames.bind(styles);

export default function SideBar() {
  return (
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
      <SuggestedAccounts label="Suggested accounts" popper />
      <SuggestedAccounts label="Following accounts" />
    </aside>
  );
}
