import Tippy from '@tippyjs/react/headless'; // different import path!
import 'tippy.js/dist/tippy.css'; // optional
import { PopperWrapper } from '~/components/Popper';
import classNames from 'classnames/bind';
import styles from './SearchBox.module.scss';
import SearchItem from './SearchItem';
import AccountItem from '../../AccountItem';
import { useEffect, useMemo, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconSearch } from '~/components/Icon';
import { faSpinner, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { useDebounce } from '~/hooks';
import search from '~/services/search';

const cx = classNames.bind(styles);

function SearchBox() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [searchActive, setSearchActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const searchInputElement = useRef();
  const debouncedSearchValue = useDebounce(searchValue, 600);

  useEffect(() => {
    if (!!debouncedSearchValue) {
      const searchAPI = async () => {
        setLoading(true);
        const res = await search(debouncedSearchValue);
        setSearchResult(res.filter((data) => data.full_name.length > 0));
        setLoading(false);
      };
      searchAPI();
    } else {
      setSearchResult([]);
    }
  }, [debouncedSearchValue]);

  const displaySearchValues = useMemo(() => {
    const result = searchResult.map((result, index) => {
      return <SearchItem key={index} data={result.full_name} />;
    });
    return result;
  }, [searchResult]);

  const displaySearchAccounts = useMemo(() => {
    const result = searchResult.map((result, index) => {
      return <AccountItem key={index} data={result} />;
    });
    return result;
  }, [searchResult]);

  const handleReset = () => {
    setSearchValue('');
    searchInputElement.current.focus();
  };

  const handleSearchChange = (query) => {
    if (!query.startsWith(' ')) {
      setSearchValue(query);
    }
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
            <div>
              {displaySearchValues}
              <h3 className={cx('sug-account')}>Accounts</h3>
              {displaySearchAccounts}
            </div>
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
          onChange={(e) => handleSearchChange(e.target.value)}
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
        <button className={cx('search-button')} onMouseDown={(e) => e.preventDefault()}>
          <IconSearch />
        </button>
      </div>
    </Tippy>
  );
}

export { default as AccountItem } from '../../AccountItem/AccountItem';
export { default as SearchItem } from './SearchItem/SearchItem';
export default SearchBox;
