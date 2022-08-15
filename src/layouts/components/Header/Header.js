import { Link } from 'react-router-dom';
import config from '@/config';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import  {
  CoinIcon,
  FeedbackIcon,
  images,
  InboxIcon,
  KeyboardIcon,
  LanguageIcon,
  LogoutIcon,
  MenuIcon,
  MessagesIcon,
  ProfileIcon,
  SettingIcon,
} from '@/components/Icons';

import Button from '@/components/Button';
import Menu from '@/components/Popper/Menu';
import Image from '@/components/Image';
import Search from '@/components/Search';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    icon: <LanguageIcon className={cx('icon-menu')} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'বাঙ্গালি',
        },
        {
          code: 'vi',
          title: 'Cebuano',
        },
        {
          code: 'vi',
          title: 'Čeština',
        },
        {
          code: 'vi',
          title: 'Українська',
        },
        {
          code: 'vi',
          title: 'Português',
        },
        {
          code: 'vi',
          title: 'Polski',
        },
        {
          code: 'vi',
          title: 'Bahasa',
        },
        {
          code: 'vi',
          title: '한국어',
        },
        {
          code: 'vi',
          title: 'Tiếng việt',
        },
        {
          code: 'vi',
          title: 'עברית',
        },
        {
          code: 'vi',
          title: 'Română',
        },
        {
          code: 'vi',
          title: 'Nederlands',
        },
        {
          code: 'vi',
          title: 'Русский',
        },
        {
          code: 'vi',
          title: 'ไทย',
        },
        {
          code: 'vi',
          title: '繁體中文',
        },
        {
          code: 'vi',
          title: '简体中文',
        },
        {
          code: 'vi',
          title: 'Türkçe',
        },
        {
          code: 'vi',
          title: '日本語（日本)',
        },
        {
          code: 'vi',
          title: 'ខ្មែរ',
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
    title: 'Keyboard shortcuts',
  },
];

export default function Header() {
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
  ];

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <Link to={config.routes.home} className={cx('logo-link')}>
            <img src={images.logo} alt="TikTok" />
          </Link>
        </div>
        <Search />
        <div className={cx('actions')}>
          <Button
            outline
            leftIcon={<FontAwesomeIcon height={20} width={20} icon={faPlus} />}
            className={cx('upload-btn')}
          >
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
                <button className={cx('action-btn', 'inbox-btn')}>
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
            <div>
              {currentUser ? (
                <button className={cx('avatar-btn')}>
                  <Image
                    className={cx('user-avatar')}
                    alt=""
                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7130916756222132229~c5_720x720.jpeg?x-expires=1660467600&x-signature=Yta2k7jYuSzJlTj4D2VwELJRnMM%3D"
                  />
                </button>
              ) : (
                <button className={cx('more-btn')}>
                  <MenuIcon />
                </button>
              )}
            </div>
          </Menu>
        </div>
      </div>
    </header>
  );
}
