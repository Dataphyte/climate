import React from 'react';
import FacebookIcon from '@/icons/facebookIcon';
import GithubIcon from '@/icons/githubIcon';
import InstagramIcon from '@/icons/instagramIcon';
import TwitterIcon from '@/icons/twitterIcon';
import { classNames } from '@/utils/classNames';

const navigation = {
  main: [
    { name: 'Reports', href: 'reports' },
    { name: 'Resources', href: 'resources' },
    { name: 'Data', href: 'data' },
    { name: 'Dataphyte', href: 'https://dataphyte.com' },
    { name: 'Data Store', href: '/' },
    { name: 'Climate', href: '/' },
  ],

  social: [
    {
      name: 'Facebook',
      href: '/',
      hover: 'hover:text-blue-600',
      icon: FacebookIcon,
    },
    {
      name: 'Instagram',
      href: '/',
      hover: 'hover:text-pink-500',
      icon: InstagramIcon,
    },
    {
      name: 'Twitter',
      href: '/',
      hover: 'hover:text-blue-400',
      icon: TwitterIcon,
    },
    {
      name: 'GitHub',
      href: '/',
      hover: 'hover:text-gray-50',
      icon: GithubIcon,
    },
  ],
};

const Footer = () => {
  return (
    <footer className='bg-dark-2 w-full'>
      <div className='mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8'>
        <nav
          className='-mx-5 -my-2 flex flex-wrap justify-center'
          aria-label='Footer'
        >
          {/* ====== LINKS */}
          {navigation.main.map((item) => (
            <div key={item.name} className='px-5 py-2'>
              <a
                href={item.href}
                className='text-base text-gray-400 ease-out duration-150 hover:text-gray-50'
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>

        {/* ====== SOCIAL ICONS */}
        <div className='mt-8 flex justify-center space-x-6'>
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                'text-gray-400 duration-150 ease-out',
                item.hover
              )}
            >
              <span className='sr-only'>{item.name}</span>
              <item.icon className='h-6 w-6' aria-hidden='true' />
            </a>
          ))}
        </div>
        <p className='mt-8 text-center text-base text-gray-400'>
          &copy; 2022 Dataphyte, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
