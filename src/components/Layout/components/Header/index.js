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
import Menu from '~/components/Popper/Menu';
import SearchResults from '~/components/Popper/SearchResults';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

const cx = classNames.bind(styles);

function Header() {
  const [searchInput, setSearchInput] = useState([]);
  const searchInputElement = useRef();
  const loggedIn = false;

  const MENU_HEADER = [
    {
      title: 'English',
      icon: <FontAwesomeIcon icon={faLanguage} />,
      toogleOnOff: false,
      children: {
        title: 'Language',
        data: [
          { code: 'ln1', title: 'English' },
          { code: 'ln2', title: 'العربية<' },
          { code: 'ln3', title: 'Cebuano (Pilipinas)' },
          { code: 'ln4', title: 'Čeština (Česká republika)' },
          { code: 'ln5', title: 'Deutsch' },
          { code: 'ln6', title: 'Ελληνικά (Ελλάδα)' },
          { code: 'ln7', title: 'Español' },
          { code: 'ln8', title: 'Suomi (Suomi)' },
          { code: 'ln9', title: 'Filipino (Pilipinas)' },
          { code: 'ln10', title: 'Français' },
          { code: 'ln11', title: 'Tiếng Việt (Việt Nam)' },
          { code: 'ln12', title: 'עברית (ישראל)' },
          { code: 'ln13', title: 'हिंदी' },
          { code: 'ln14', title: 'Magyar (Magyarország)' },
          { code: 'ln15', title: 'Bahasa Indonesia (Indonesia)' },
          { code: 'ln16', title: 'Italiano (Italia)' },
          { code: 'ln17', title: '日本語（日本）' },
          { code: 'ln18', title: 'Basa Jawa (Indonesia)' },
          { code: 'ln19', title: 'ខ្មែរ (កម្ពុជា)' },
          { code: 'ln20', title: '한국어 (대한민국)' },
          { code: 'ln21', title: 'Bahasa Melayu (Malaysia)' },
          { code: 'ln22', title: 'မြန်မာ (မြန်မာ)' },
          { code: 'ln23', title: 'Nederlands (Nederland)' },
          { code: 'ln24', title: 'Polski (Polska)' },
          { code: 'ln25', title: 'Português (Brasil)' },
          { code: 'ln26', title: 'Română (Romania)' },
          { code: 'ln27', title: 'Русский (Россия)' },
          { code: 'ln28', title: 'Svenska (Sverige)' },
          { code: 'ln29', title: 'ไทย (ไทย)' },
          { code: 'ln30', title: 'Türkçe (Türkiye)' },
          { code: 'ln31', title: 'Українська (Україна)' },
          { code: 'ln32', title: 'اردو' },
          { code: 'ln33', title: '简体中文' },
          { code: 'ln34', title: '繁體中文' },
          { code: 'ln35', title: 'العربيবাঙ্গালি (ভারত)' },
        ],
      },
    },
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
        <div className={cx('leftContainer')}>
          <div className={cx('logo')}>
            <Link to="/">
              <img src={images.logo} alt="TikTok"></img>
            </Link>
          </div>
        </div>

        <div className={cx('centerContainer')}>
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
        </div>

        <div className={cx('rightContainer')}>
          <div className={cx('header-actions')}>
            <Button greyOutline to="/upload" leftIcon={<FontAwesomeIcon className={cx('btn-icon')} icon={faPlus} />}>
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
                <Button primary>Login</Button>

                <Tippy content={<span>Create effects</span>} delay={100} interactive>
                  <a className={cx('btn-create-effects')} href="https://effecthouse.tiktok.com/">
                    <img src={images.effects} alt="Create effects" />
                  </a>
                </Tippy>

                <Menu items={MENU_HEADER}>
                  <div className={cx('see-more')}>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </div>
                </Menu>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
