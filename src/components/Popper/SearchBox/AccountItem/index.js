import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx('wrapper')} onClick={() => console.log(data)}>
      <div className={cx('avatar')}>
        <Image src={data.avatar} alt="avatar"></Image>
      </div>
      <div className={cx('account')}>
        <h4 className={cx('account-title')}>
          {data.nickname} {data.tick && '✅'}
        </h4>
        <p className={cx('account-subtitle')}>{data.full_name}</p>
      </div>
    </Link>
  );
}

export default AccountItem;
