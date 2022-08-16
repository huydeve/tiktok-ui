import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
const cx = classNames.bind(styles);

const subPages = [
  [
    {
      url: 'https://www.tiktok.com/about?lang=en',
      title: 'About',
    },
    {
      url: 'https://www.tiktok.com/browse?lang=en',
      title: 'TikTok Browse',
    },
    {
      url: 'https://www.tiktok.com/about?lang=en',
      title: 'Newsroom',
    },
    {
      url: 'https://www.tiktok.com/about?lang=en',
      title: 'Contact',
    },
    {
      url: 'https://www.tiktok.com/about?lang=en',
      title: 'Careers',
    },
    {
      url: 'https://www.tiktok.com/about?lang=en',
      title: 'ByteDance',
    },
  ],
  [
    {
      url: 'https://www.tiktok.com/about?lang=en',
      title: 'TikTok for Good',
    },
    {
      url: 'https://www.tiktok.com/browse?lang=en',
      title: 'Advertise',
    },
    {
      url: 'https://www.tiktok.com/about?lang=en',
      title: 'Developers',
    },
    {
      url: 'https://www.tiktok.com/about?lang=en',
      title: 'Transparency',
    },
    {
      url: 'https://www.tiktok.com/about?lang=en',
      title: 'TikTok Rewards',
    },
  ],
  [
    {
      url: 'https://www.tiktok.com/about?lang=en',
      title: 'Help',
    },
    {
      url: 'https://www.tiktok.com/browse?lang=en',
      title: 'Safety',
    },
    {
      url: 'https://www.tiktok.com/about?lang=en',
      title: 'Terms',
    },
    {
      url: 'https://www.tiktok.com/about?lang=en',
      title: 'Privacy',
    },
    {
      url: 'https://www.tiktok.com/about?lang=en',
      title: 'Creator Portal',
    },
    {
      url: 'https://www.tiktok.com/about?lang=en',
      title: 'Community Guidelines',
    },
  ],
];

function Footer() {
  return (
    <div className={cx('wrapper')}>
      {subPages.map((subPage, index) => (
        <div key={index} className={cx('link-container')}>
          {subPage.map((page, index) => (
            <a
              key={index}
              href={page.url}
              data-e2e="program-link"
              target="_blank"
              className={cx('nav-link')}
              rel="noreferrer"
            >
              {page.title}
            </a>
          ))}
        </div>
      ))}

      <span data-e2e="copyright" className={cx('copyright')}>
        © 2022 TikTok
      </span>
    </div>
  );
}

export default Footer;
