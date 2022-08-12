import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import images, { FeedbackIcon, KeyboardIcon, LanguagueIcon, MenuIcon, SearchIcon } from '@/assets/images';

import { Wrapper as PopperWrapper } from '@/components/Popper';
import { useEffect, useState } from 'react';
import AccountItem from '@/components/AccountItem';
import Button from '@/components/Button';
import Menu from '@/components/Popper/Menu';
const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <LanguagueIcon className={cx('icon-menu')} />,
    title: 'English'
    
  },
  {
    icon: <FeedbackIcon className={cx('icon-menu')}/>,
    title: 'Feedback and help',
    to:'/feedback'
  },
  {
    icon: <KeyboardIcon className={cx('icon-menu')}/>,
    title: 'Keybroad shortcut'
  },
]


export default function Header() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {}, []);

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="Tiktok" />
        </div>

        <Tippy
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
             <SearchIcon className={cx('search-icon')}/>
            </button>
          </div>
        </Tippy>
        <div className={cx('actions')}>
          <Button outline leftIcon={<FontAwesomeIcon icon={faPlus} />} className={cx('upload-btn')}>
            Upload
          </Button>
          <Button primary medium>
            Login
          </Button>
          <Menu
            items={MENU_ITEMS}
          >
            <button className={cx('more-btn')}>
              <MenuIcon/>
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
}
