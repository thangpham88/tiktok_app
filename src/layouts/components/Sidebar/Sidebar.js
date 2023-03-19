import classNames from 'classnames/bind';
import { useContext } from 'react';
import AccountItem from '~/components/AccountItem';
import { IconFollowing, IconHome, IconLive } from '~/components/Icon';
import { UserDataContext } from '~/context/UserDataContext';
import DiscoverList from '../DiscoverList';
import Footer from '../Footer';
import StyledButton from '../StyledButton';
import List from './List';
import NavItem from './NavItem';
import Section from './Section';
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

  const defaultUser = { id: '12345', name: 'thang_pham88' };

  const { userInfo, setUserInfo } = useContext(UserDataContext);

  const handleLogin = () => {
    setTimeout(() => {
      setUserInfo(defaultUser);
    }, 500);
  };

  return (
    <aside className={cx('sideBar')}>
      <Section>
        <List>
          <NavItem to="/en" icon={<IconHome />}>
            For You
          </NavItem>
          <NavItem to="/following" icon={<IconFollowing />}>
            Following
          </NavItem>
          <NavItem to="/live" icon={<IconLive />}>
            LIVE
          </NavItem>
        </List>
      </Section>

      {!userInfo && (
        <Section>
          <p className={cx('section-desc')}>Log in to follow creators, like videos, and view comments.</p>
          <StyledButton outline onClick={handleLogin}>
            Log in
          </StyledButton>
        </Section>
      )}

      <Section>
        <List title="Suggested accounts">
          <AccountItem data={AccountFakeData} />
          <AccountItem data={AccountFakeData} />
        </List>
      </Section>

      {!!userInfo && (
        <Section>
          <List title="Following accounts">
            <AccountItem data={AccountFakeData} />
            <AccountItem data={AccountFakeData} />
          </List>
        </Section>
      )}

      <Section>
        <List title="Discover">
          <DiscoverList data={DiscoverFakeData} />
        </List>
      </Section>

      <Footer />
    </aside>
  );
}

export default Sidebar;
