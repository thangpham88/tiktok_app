import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisVertical,
  faPlus,
  faXmarkCircle,
  faKeyboard,
  faLanguage,
  faMoon,
  faQuestionCircle,
  faVideoCamera,
  faUserCog,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import SearchResults from '~/components/Popper/SearchResults';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { IconEffects, IconInbox, IconSearch, IconSendMessage } from '~/components/Icon';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function Header() {
  const defaultUser = { id: '12345', name: 'thang_pham88' };
  const [searchInput, setSearchInput] = useState([]);
  const searchInputElement = useRef();
  const [currentUser, setCurrentUser] = useState(defaultUser);

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
    { title: 'Feedback and help', icon: <FontAwesomeIcon icon={faQuestionCircle} /> },
    { title: 'Keyboard shortcuts', icon: <FontAwesomeIcon icon={faKeyboard} /> },
    { title: 'Dark mode', icon: <FontAwesomeIcon icon={faMoon} />, toogleOnOff: true },
  ];

  const MENU_USER = [
    { title: 'View Profile', icon: <FontAwesomeIcon icon={faUser} /> },
    { title: 'Get Coins', icon: <FontAwesomeIcon icon={faTiktok} /> },
    { title: 'LIVE Studio', icon: <FontAwesomeIcon icon={faVideoCamera} /> },
    { title: 'Settings', icon: <FontAwesomeIcon icon={faUserCog} /> },
    ...MENU_HEADER,
    {
      title: 'Log out',
      icon: <FontAwesomeIcon icon={faSignOut} />,
      splitterTop: true,
      onClick: () => {
        setTimeout(() => setCurrentUser(), 500);
      },
    },
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
                  <IconSearch />
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

            {currentUser ? (
              <>
                <Tippy content={<span>Create effects</span>} delay={100} interactive>
                  <a className={cx('btn-create-effects')} href="https://effecthouse.tiktok.com/">
                    <IconEffects />
                  </a>
                </Tippy>

                <Tippy content={<span>Messages</span>} delay={100} interactive>
                  <div className={cx('message')}>
                    <IconSendMessage />
                  </div>
                </Tippy>

                <Tippy content={<span>Inbox</span>} delay={100} interactive>
                  <div className={cx('inbox')}>
                    <IconInbox />
                  </div>
                </Tippy>
                <Menu items={MENU_USER}>
                  <div className={cx('profile')}>
                    <Image src={images.profile_ava_demo} className={cx('profileImg')} alt="Profile" />
                  </div>
                </Menu>
              </>
            ) : (
              <>
                <Button primary onClick={() => setTimeout(() => setCurrentUser(defaultUser), 500)}>
                  Login
                </Button>

                <Tippy content={<span>Create effects</span>} delay={100} interactive>
                  <a className={cx('btn-create-effects')} href="https://effecthouse.tiktok.com/">
                    <IconEffects />
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
