import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('avatar')}>
        <img src={images.ava_demo} alt="avatar"></img>
      </div>
      <div className={cx('account')}>
        <h4 className={cx('account-title')}>miawaiifuxo ✅</h4>
        <p className={cx('account-subtitle')}>Mia💫</p>
      </div>
    </div>
  );
}

export default AccountItem;
