import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisVertical,
  faInbox,
  faMagnifyingGlass,
  faPlus,
  faRobot,
  faXmarkCircle,
} from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react/headless'; // different import path!
import 'tippy.js/dist/tippy.css'; // optional

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Link } from 'react-router-dom';
import { PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/SearchResultItem/AccountItem';
import SearchItem from '~/components/SearchResultItem/SearchItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header() {
  const [searchInput, setSearchInput] = useState([]);
  const searchInputElement = useRef();
  const loggedIn = false;

  const getHeaderAction = () => {
    if (loggedIn) {
      return (
        <>
          <div className={cx('message')}>
            <FontAwesomeIcon icon={faPaperPlane} />
          </div>
          <div className={cx('inbox')}>
            <FontAwesomeIcon icon={faInbox} />
          </div>
          <div className={cx('profile')}>
            <FontAwesomeIcon icon={faRobot} />
          </div>
        </>
      );
    } else {
      return (
        <>
          <Button primary small>
            Login
          </Button>

          <div className={cx('see-more')}>
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </div>
        </>
      );
    }
  };

  const handleReset = () => {
    setSearchInput('');
    searchInputElement.current.focus();
  };

  const getSearchPopper = () => {
    return (
      <div>
        <SearchItem search_input="Mia💫" />
        <SearchItem search_input="Mia dance girl💫" />
        <SearchItem search_input="Music dance" />
        <h3 className={cx('sug-account')}>Accounts</h3>
        <AccountItem />
      </div>
    );
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <div className={cx('logo')}>
          <Link to="/">
            <img src={images.logo} alt="TikTok"></img>
          </Link>
        </div>

        <Tippy
          delay={100}
          placement="bottom-start"
          interactive
          visible={searchInput.length > 0}
          render={(attrs) => (
            <div className={cx('search-result-suggest')} tabIndex="-1" {...attrs}>
              <PopperWrapper>{getSearchPopper()}</PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search-box')}>
            <div className={cx('search-left')}>
              <input
                className={cx('search-input')}
                placeholder="Search accounts and videos"
                value={searchInput}
                ref={searchInputElement}
                onChange={(e) => setSearchInput(e.target.value)}
              ></input>

              {searchInput.length > 0 && (
                <>
                  {/* <div className={cx('search-loading')}>
                  <FontAwesomeIcon icon={faSpinner} />
                </div> */}
                  <div className={cx('search-reset')} onClick={handleReset}>
                    <FontAwesomeIcon icon={faXmarkCircle} />
                  </div>
                </>
              )}
            </div>
            <div className={cx('search-right')}>
              <span className={cx('span-spliter')}></span>
              <button className={cx('search-button')}>
                <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
              </button>
            </div>
          </div>
        </Tippy>
        <div className={cx('header-actions')}>
          <Button to="/upload" leftIcon={<FontAwesomeIcon className={cx('btn-icon')} icon={faPlus} />}>
            Upload
          </Button>

          {getHeaderAction()}
        </div>
      </div>
    </div>
  );
}

export default Header;
