import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('avatar')}>
        <img
          src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/f95862603b44157d571d435d9bc45262~c5_300x300.webp?x-expires=1674792000&x-signature=g%2Bud2jNBwmgyFap%2FBj83elfii4w%3D"
          alt="avatar"
        ></img>
      </div>
      <div className={cx('account')}>
        <h4 className={cx('account-title')}>miawaiifuxo ✅</h4>
        <p className={cx('account-subtitle')}>Mia💫</p>
      </div>
    </div>
  );
}

export default AccountItem;
