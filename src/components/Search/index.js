import React, { memo, useRef } from 'react';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '@/components/Popper';
import { useEffect, useState } from 'react';
import AccountItem from '@/components/AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { ClearIcon, LoadingIcon, SearchIcon } from '@/components/Icons';
import { searchApi } from '@/services';
import useDebounce from '@/hooks/useDebounce';

const cx = classNames.bind(styles);

function Search({ ...props }) {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const debounced = useDebounce(searchValue, 500);

  const inputRef = useRef();
  const searchBox = useRef();

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }

    setLoading(true);
    (async () => {
      await searchApi
        .getSearchResult({
          q: debounced,
          type: 'less',
        })
        .then((response) => {
          setSearchResult(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    })();
  }, [debounced]);
  function validate(input) {
    if (/^\s/.test(input.value)) input.value = '';
  }
  const handleChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  const handleHideResult = () => {
    setShowResult(false);
  };
  const handleClear = () => {
    setSearchValue('');
    inputRef.current.focus();
  };
  const handleSearch = () => {};

  return (
    //Using a wrapper <div> tag around the reference element solves
    //this by creating a new parentNode context.
    <div>
      <TippyHeadless
        {...props}
        interactive
        visible={showResult && searchResult.length > 0}
        onClickOutside={handleHideResult}
        render={(attribute) => (
          <div className={cx('search-results')} tabIndex={-1} {...attribute}>
            <PopperWrapper>
              <h4 className={cx('search-title')}>Accounts</h4>
              <div className={cx('search-body', 'max-height')}>
                {searchResult.map((result) => (
                  <AccountItem key={result.id} data={result} />
                ))}
              </div>
            </PopperWrapper>
          </div>
        )}
      >
        <div ref={searchBox} className={cx('search')}>
          <input
            ref={inputRef}
            autoComplete="off"
            id="search-input"
            placeholder="Search accounts and videos"
            value={searchValue}
            onChange={handleChange}
            onInput={(e) => validate(e.target)}
            onFocus={() => {
              setShowResult(true);
            }}
            spellCheck={false}
          />
          {!!searchValue && !loading && (
            <button className={cx('clear')} onClick={handleClear}>
              <ClearIcon />
            </button>
          )}

          {loading && <LoadingIcon className={cx('loading')} />}
          <button className={cx('search-btn')} onClick={handleSearch} onMouseDown={(e) => e.preventDefault()}>
            {/* <FontAwesomeIcon icon={faMagnifyingGlass}/> */}
            <SearchIcon className={cx('search-icon')} />
          </button>
        </div>
      </TippyHeadless>
    </div>
  );
}

export default memo(Search);
