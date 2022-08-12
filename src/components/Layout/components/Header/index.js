import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import images from '@/assets/images';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import { useEffect, useState } from 'react';
import AccountItem from '@/components/AccountItem';
const cx = classNames.bind(styles);

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
                <h4 className={cx('search-title')}>
                  Accounts
                </h4>
                
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
              <svg width="24" height="24" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22 10C15.3726 10 10 15.3726 10 22C10 28.6274 15.3726 34 22 34C28.6274 34 34 28.6274 34 22C34 15.3726 28.6274 10 22 10ZM6 22C6 13.1634 13.1634 6 22 6C30.8366 6 38 13.1634 38 22C38 25.6974 36.7458 29.1019 34.6397 31.8113L43.3809 40.5565C43.7712 40.947 43.7712 41.5801 43.3807 41.9705L41.9665 43.3847C41.5759 43.7753 40.9426 43.7752 40.5521 43.3846L31.8113 34.6397C29.1019 36.7458 25.6974 38 22 38C13.1634 38 6 30.8366 6 22Z"
                ></path>
              </svg>
            </button>
          </div>
        </Tippy>
        <div className={cx('actions')}></div>
      </div>
    </header>
  );
}
