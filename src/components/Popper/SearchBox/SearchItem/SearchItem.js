import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SearchItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function SearchItem({ data }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('search-icon')}>
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <div className={cx('search-text')}>
        <span>{data}</span>
      </div>
    </div>
  );
}

SearchItem.propTypes = {
  data: PropTypes.node.isRequired,
};

export default SearchItem;
