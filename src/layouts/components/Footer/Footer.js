import classNames from 'classnames/bind';
import { IconEffects } from '~/components/Icon';
import StyledButton from '../StyledButton';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx('Footer-Container')}>
      <div className={cx('Footer-Banner')}>
        <StyledButton href="https://effecthouse.tiktok.com/" target="_blank" effects>
          <IconEffects width="19px" height="19px" />
          <h4>Create effects</h4>
        </StyledButton>
      </div>

      <div className={cx('Footer-LinkContainer')}>
        <a href="https://www.tiktok.com/about?lang=en" target="_blank" rel="noreferrer">
          About
        </a>
        <a href="https://newsroom.tiktok.com/" target="_blank" rel="noreferrer">
          Newsroom
        </a>
        <a href="https://www.tiktok.com/about/contact?lang=en" target="_blank" rel="noreferrer">
          Contact
        </a>
        <a href="https://careers.tiktok.com" target="_blank" rel="noreferrer">
          Careers
        </a>
        <a href="https://www.bytedance.com/" target="_blank" rel="noreferrer">
          ByteDance
        </a>
      </div>
      <div className={cx('Footer-LinkContainer')}>
        <a href="https://www.tiktok.com/forgood" target="_blank" rel="noreferrer">
          TikTok for Good
        </a>
        <a
          href="https://www.tiktok.com/business/?attr_medium=tt_official_site_guidance&amp;attr_source=tt_official_site&amp;refer=tiktok_web"
          target="_blank"
          rel="noreferrer"
        >
          Advertise
        </a>
        <a href="https://developers.tiktok.com/?refer=tiktok_web" target="_blank" rel="noreferrer">
          Developers
        </a>
        <a href="https://www.tiktok.com/transparency?lang=en" target="_blank" rel="noreferrer">
          Transparency
        </a>
        <a href="https://www.tiktok.com/tiktok-rewards/en" target="_blank" rel="noreferrer">
          TikTok Rewards
        </a>
        <a href="https://www.tiktok.com/browse" target="_blank" rel="noreferrer">
          TikTok Browse
        </a>
        <a href="https://www.tiktok.com/embed" target="_blank" rel="noreferrer">
          TikTok Embeds
        </a>
      </div>
      <div className={cx('Footer-LinkContainer')}>
        <a href="https://support.tiktok.com/en" target="_blank" rel="noreferrer">
          Help
        </a>
        <a href="https://www.tiktok.com/safety?lang=en" target="_blank" rel="noreferrer">
          Safety
        </a>
        <a href="https://www.tiktok.com/legal/terms-of-service?lang=en" target="_blank" rel="noreferrer">
          Terms
        </a>
        <a href="https://www.tiktok.com/legal/privacy-policy-row?lang=en" target="_blank" rel="noreferrer">
          Privacy
        </a>
        <a href="https://www.tiktok.com/creators/creator-portal/en-us/" target="_blank" rel="noreferrer">
          Creator Portal
        </a>
        <a href="https://www.tiktok.com/community-guidelines?lang=en" target="_blank" rel="noreferrer">
          Community Guidelines
        </a>
      </div>
      <p>
        <span className={cx('SpanCopyright')}>© {new Date().getFullYear()} TikTok</span>
      </p>
    </div>
  );
}

export default Footer;
