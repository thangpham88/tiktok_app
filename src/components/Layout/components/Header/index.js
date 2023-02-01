import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisVertical,
  faInbox,
  faMagnifyingGlass,
  faPlus,
  faRobot,
  faXmarkCircle,
  faKeyboard,
  faLanguage,
  faMoon,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import MenuHeader from '~/components/Popper/MenuHeader';
import SearchResults from '~/components/Popper/SearchResults';

const cx = classNames.bind(styles);

function Header() {
  const [searchInput, setSearchInput] = useState([]);
  const searchInputElement = useRef();
  const loggedIn = false;

  const MENU_HEADER = [
    { title: 'English', icon: <FontAwesomeIcon icon={faLanguage} />, toogleOnOff: false },
    { title: 'Feedback and help', icon: <FontAwesomeIcon icon={faQuestionCircle} />, toogleOnOff: false },
    { title: 'Keyboard shortcuts', icon: <FontAwesomeIcon icon={faKeyboard} />, toogleOnOff: false },
    { title: 'Dark mode', icon: <FontAwesomeIcon icon={faMoon} />, toogleOnOff: true },
  ];

  const handleReset = () => {
    setSearchInput('');
    searchInputElement.current.focus();
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <div className={cx('logo')}>
          <Link to="/">
            <img src={images.logo} alt="TikTok"></img>
          </Link>
        </div>

        <SearchResults visible={searchInput.length > 0}>
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
        </SearchResults>

        <div className={cx('header-actions')}>
          <Button to="/upload" leftIcon={<FontAwesomeIcon className={cx('btn-icon')} icon={faPlus} />}>
            Upload
          </Button>
          {loggedIn && (
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
          )}
          {!loggedIn && (
            <>
              <Button primary small>
                Login
              </Button>

              <MenuHeader items={MENU_HEADER}>
                <div className={cx('see-more')}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </div>
              </MenuHeader>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
