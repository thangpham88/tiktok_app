import Tippy from '@tippyjs/react/headless'; // different import path!
import 'tippy.js/dist/tippy.css'; // optional
import { PopperWrapper } from '~/components/Popper';
import classNames from 'classnames/bind';
import styles from './SearchResults.module.scss';
import SearchItem from './SearchItem';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SearchResults({ children, visible }) {
  console.log(visible);
  return (
    <Tippy
      delay={100}
      placement="bottom-start"
      interactive
      visible={visible}
      render={(attrs) => (
        <div className={cx('search-result-suggest')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <SearchItem search_input="Mia💫" />
            <SearchItem search_input="Mia dance girl💫" />
            <SearchItem search_input="Music dance" />
            <h3 className={cx('sug-account')}>Accounts</h3>
            <AccountItem />
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export { default as AccountItem } from './AccountItem';
export { default as SearchItem } from './SearchItem';
export default SearchResults;
