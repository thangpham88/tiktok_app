import React from 'react';
import { IconStyledMusicNote, IconStyledNumber } from '~/components/Icon';
import styles from './DiscoverList.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function DiscoverList({ data = [] }) {
  return (
    <div>
      <ul className={cx('discoverList-container')}>
        {data.map((e, index) => {
          return (
            <li key={index} className={cx('discoverItem-container')}>
              <a className={cx('discoverItem-link')} href={e.link}>
                {!!e.musicNote ? <IconStyledMusicNote /> : <IconStyledNumber />}
                <p className={cx('discoverItem-text')}>{e.title}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DiscoverList;
