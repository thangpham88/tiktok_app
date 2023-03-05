import Tippy from '@tippyjs/react/headless'; // different import path!
import 'tippy.js/dist/tippy.css'; // optional
import { PopperWrapper } from '~/components/Popper';
import classNames from 'classnames/bind';
import styles from './SearchBox.module.scss';
import SearchItem from './SearchItem';
import AccountItem from './AccountItem';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconSearch } from '~/components/Icon';
import { faSpinner, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { useDebounce } from '~/hooks';
import searchService from '~/apis/search';

const cx = classNames.bind(styles);

function SearchBox() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [searchActive, setSearchActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const searchInputElement = useRef();
  const debounceSearchValue = useDebounce(searchValue, 600);

  useEffect(() => {
    if (!!debounceSearchValue) {
      const searchAPI = async () => {
        setLoading(true);
        const res = await searchService(debounceSearchValue);
        setSearchResult(res.filter((data) => data.full_name.length > 0));
        setLoading(false);
      };
      searchAPI();
    } else {
      setSearchResult([]);
    }
  }, [debounceSearchValue]);

  const handleReset = () => {
    setSearchValue('');
    searchInputElement.current.focus();
  };

  return (
    <Tippy
      delay={100}
      placement="bottom-start"
      interactive
      visible={!loading && searchActive && searchResult.length > 0}
      render={(attrs) => (
        <div className={cx('search-result-suggest')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            {searchResult.map((result, index) => {
              return <SearchItem key={index} data={result.full_name} />;
            })}
            <h3 className={cx('sug-account')}>Accounts</h3>
            {searchResult.map((result, index) => {
              return <AccountItem key={index} data={result} />;
            })}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={() => setSearchActive(false)}
    >
      <div className={cx('search-box')}>
        <input
          className={cx('search-input')}
          placeholder="Search accounts and videos"
          value={searchValue}
          ref={searchInputElement}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setSearchActive(true)}
        ></input>

        {searchValue.length > 0 && (
          <>
            {loading ? (
              <div className={cx('search-loading')}>
                <FontAwesomeIcon icon={faSpinner} />
              </div>
            ) : (
              <div className={cx('search-reset')} onClick={handleReset}>
                <FontAwesomeIcon icon={faXmarkCircle} />
              </div>
            )}
          </>
        )}
        <span className={cx('span-spliter')}></span>
        <button className={cx('search-button')}>
          <IconSearch />
        </button>
      </div>
    </Tippy>
  );
}

export { default as AccountItem } from './AccountItem';
export { default as SearchItem } from './SearchItem';
export default SearchBox;
