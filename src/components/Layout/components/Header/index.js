import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisVertical,
  faInbox,
  faMagnifyingGlass,
  faPlus,
  faRobot,
  faSpinner,
  faXmarkCircle,
} from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header() {
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
          <Link className={cx('login-container')} to="/login">
            <button className={cx('login-btn')}>Login</button>
          </Link>

          <div className={cx('see-more')}>
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </div>
        </>
      );
    }
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <div className={cx('logo')}>
          <Link to="/">
            <img src={images.logo} alt="TikTok"></img>
          </Link>
        </div>
        <div className={cx('search-box')}>
          <input type="search" className={cx('search-input')} placeholder="Search accounts and videos"></input>

          <div className={cx('search-loading')}>
            <FontAwesomeIcon icon={faSpinner} />
          </div>
          <div className={cx('search-reset')}>
            <FontAwesomeIcon icon={faXmarkCircle} />
          </div>

          <span className={cx('span-spliter')}></span>
          <button className={cx('search-button')}>
            <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className={cx('header-actions')}>
          <Link className={cx('upload-container')} to="/upload">
            <div className={cx('upload')}>
              <FontAwesomeIcon className={cx('upload-icon')} icon={faPlus} />
              <span className={cx('span-upload')}>Upload</span>
            </div>
          </Link>

          {getHeaderAction()}
        </div>
      </div>
    </div>
  );
}

export default Header;
