import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisVertical,
  faPlus,
  faKeyboard,
  faLanguage,
  faMoon,
  faQuestionCircle,
  faVideoCamera,
  faUserCog,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import SearchBox from '~/components/Popper/SearchBox';
import { IconEffects, IconInbox, IconSendMessage } from '~/components/Icon';
import Image from '~/components/Image';
import config from '~/config';

const cx = classNames.bind(styles);

function Header() {
  const defaultUser = { id: '12345', name: 'thang_pham88' };
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

  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <div className={cx('leftContainer')}>
          <div className={cx('logo')}>
            <Link to={config.routers.root}>
              <img src={images.logo} alt="TikTok"></img>
            </Link>
          </div>
        </div>

        <div className={cx('centerContainer')}>
          {/* Search div */}
          <SearchBox />
        </div>

        <div className={cx('rightContainer')}>
          <div className={cx('header-actions')}>
            <Button
              greyOutline
              to={config.routers.upload}
              leftIcon={<FontAwesomeIcon className={cx('btn-icon')} icon={faPlus} />}
            >
              Upload
            </Button>

            {currentUser ? (
              <>
                <span className={cx('span-tippy')}>
                  <Tippy content={<span>Create effects</span>} delay={100} interactive>
                    <a className={cx('btn-create-effects')} href={config.routers.effect}>
                      <IconEffects />
                    </a>
                  </Tippy>
                </span>

                <span className={cx('span-tippy')}>
                  <Tippy content={<span>Messages</span>} delay={100} interactive>
                    <div className={cx('message')}>
                      <IconSendMessage />
                    </div>
                  </Tippy>
                </span>

                <span className={cx('span-tippy')}>
                  <Tippy content={<span>Inbox</span>} delay={100} interactive>
                    <div className={cx('inbox')}>
                      <IconInbox />
                      <span className={cx('inboxSupBadge')}>8</span>
                    </div>
                  </Tippy>
                </span>

                <span className={cx('span-tippy')}>
                  <Menu items={MENU_USER}>
                    <div className={cx('profile')}>
                      <Image src={images.profile_ava_demo} className={cx('profileImg')} alt="Profile" />
                    </div>
                  </Menu>
                </span>
              </>
            ) : (
              <>
                <Button primary onClick={() => setTimeout(() => setCurrentUser(defaultUser), 500)}>
                  Login
                </Button>

                <span className={cx('span-tippy')}>
                  <Tippy content={<span>Create effects</span>} delay={100} interactive>
                    <a className={cx('btn-create-effects')} href={config.routers.effect}>
                      <IconEffects />
                    </a>
                  </Tippy>
                </span>

                <span className={cx('span-tippy')}>
                  <Menu items={MENU_HEADER}>
                    <div className={cx('see-more')}>
                      <FontAwesomeIcon icon={faEllipsisVertical} />
                    </div>
                  </Menu>
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
