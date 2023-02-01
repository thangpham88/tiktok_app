import React from 'react';
import classNames from 'classnames/bind';
import styles from './SearchItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function SearchItem({ search_input }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('search-icon')}>
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <div className={cx('search-text')}>
        <span>{search_input}</span>
      </div>
    </div>
  );
}

export default SearchItem;