import classNames from 'classnames/bind';
import AccountItem from '~/components/AccountItem';
import { IconFollowing, IconHome, IconLive } from '~/components/Icon';
import DiscoverList from '../DiscoverList';
import Footer from '../Footer';
import List from './List';
import NavItem from './NavItem';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
  const AccountFakeData = {
    nickname: 'datvilla94',
    full_name: '🔥Đạt Villa🔥',
    avatar:
      'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f90cc529e5bacc99b1459a81ab73ca87~c5_100x100.jpeg?x-expires=1679320800&x-signature=0HfQKY11YFx0EsL1X4VsocHic8k%3D',
    tick: true,
  };

  const DiscoverFakeData = [
    {
      title: 'suthatla',
      link: '/tag/suthatla',
    },
    {
      title: 'mackedoi',
      link: '/tag/mackedoi',
    },
    {
      title: 'sansangthaydoi',
      link: '/tag/sansangthaydoi',
    },
    {
      title: 'Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n & BHMedia',
      link: '/music/Yêu-Đơn-Phương-Là-Gì-MEE-Remix-7090803692152031234?lang=en',
      musicNote: true,
    },
    {
      title: 'Thiên Thần Tình Yêu - RICKY STAR and T.R.I',
      link: '/music/Thiên-Thần-Tình-Yêu-7045285812895877890?lang=en',
      musicNote: true,
    },
    {
      title: '7749hieuung',
      link: '/tag/7749hieuung',
    },
  ];

  return (
    <aside className={cx('sideBar')}>
      <List>
        <NavItem href="/en" icon={<IconHome />}>
          For You
        </NavItem>
        <NavItem href="/following" icon={<IconFollowing />}>
          Following
        </NavItem>
        <NavItem href="/live" icon={<IconLive />}>
          LIVE
        </NavItem>
      </List>

      <List title="Suggested accounts">
        <AccountItem data={AccountFakeData} />
        <AccountItem data={AccountFakeData} />
      </List>

      <List title="Following accounts">
        <AccountItem data={AccountFakeData} />
        <AccountItem data={AccountFakeData} />
      </List>

      <List title="Discover">
        <DiscoverList data={DiscoverFakeData} />
      </List>

      <Footer />
    </aside>
  );
}

export default Sidebar;
