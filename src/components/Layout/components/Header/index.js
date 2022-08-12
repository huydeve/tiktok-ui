import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import 'tippy.js/dist/tippy.css'; // optional
import images, {
  CoinIcon,
  FeedbackIcon,
  InboxIcon,
  KeyboardIcon,
  LanguagueIcon,
  LogoutIcon,
  MenuIcon,
  MessagesIcon,
  ProfileIcon,
  SearchIcon,
  SettingIcon,
} from '@/assets/images';

import { Wrapper as PopperWrapper } from '@/components/Popper';
import { Children, useEffect, useState } from 'react';
import AccountItem from '@/components/AccountItem';
import Button from '@/components/Button';
import Menu from '@/components/Popper/Menu';
import Image from '@/components/Image';
const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    icon: <LanguagueIcon className={cx('icon-menu')} />,
    title: 'English',
    children: {
      title: 'Languague',
      data: [
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng việt',
        },
      ],
    },
  },
  {
    icon: <FeedbackIcon className={cx('icon-menu')} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <KeyboardIcon className={cx('icon-menu')} />,
    title: 'Keybroad shortcuts',
  },
];

export default function Header() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {}, []);
  const currentUser = true;

  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
  };

  const USER_MENU = [
    {
      icon: <ProfileIcon className={cx('icon-menu')} />,
      title: 'View profile',
      to: '/feedback',
    },
    {
      icon: <CoinIcon className={cx('icon-menu')} />,
      title: 'Get coins',
      to: '/feedback',
    },
    {
      icon: <SettingIcon className={cx('icon-menu')} />,
      title: 'Settings',
      to: '/feedback',
    },
    ...MENU_ITEMS,
    {
      icon: <LogoutIcon className={cx('icon-menu')} />,
      title: 'Log out',
      to: '/feedback',
      separate: true,
    },
  ]

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="Tiktok" />
        </div>

        <TippyHeadless
          interactive
          visible={searchResult.length > 0}
          render={(attribute) => (
            <div className={cx('search-results')} tabIndex={-1} {...attribute}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                {searchResult.map((result, index) => (
                  <AccountItem />
                ))}
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input id="search-input" placeholder="Search accounts and videos" spellCheck={false} />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

            <button className={cx('search-btn')}>
              {/* <FontAwesomeIcon icon={faMagnifyingGlass}/> */}
              <SearchIcon className={cx('search-icon')} />
            </button>
          </div>
        </TippyHeadless>
        <div className={cx('actions')}>
          <Button outline leftIcon={<FontAwesomeIcon icon={faPlus} />} className={cx('upload-btn')}>
            Upload
          </Button>
          {currentUser ? (
            <>
              <Tippy content="Messages" placement="bottom">
                <button className={cx('action-btn', 'message-btn')}>
                  <MessagesIcon />
                </button>
              </Tippy>
              <Tippy content="Inbox" placement="bottom">
                <button className={cx('action-btn')}>
                  <InboxIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button primary medium>
                Login
              </Button>
            </>
          )}
          <Menu items={currentUser ? USER_MENU : MENU_ITEMS} onChange={handleMenuChange}>
            <button className={cx('more-btn')}>
              {currentUser ? (
                <>
                  <Image
                    className={cx('user-avatar')}
                    alt=""
                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7130916756222132229~c5_720x720.jpeg?x-expires=1660467600&x-signature=Yta2k7jYuSzJlTj4D2VwELJRnMM%3D"
                  />
                </>
              ) : (
                <MenuIcon />
              )}
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
}
