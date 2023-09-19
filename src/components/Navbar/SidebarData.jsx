import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GiIcons from 'react-icons/gi';

export const SidebarData = [
  {
    title: 'guri buruz',
    path: `/about`,
    icon: <IoIcons.IoIosFitness />,
    cName: 'nav-text'
  },
  {
    title: 'kontaktatu',
    path: `/contact`,
    icon: <AiIcons.AiOutlineInstagram />,
    cName: 'nav-text'
  },
  {
    title: 'historia',
    path: '/history',
    icon: <FaIcons.FaHistory />,
    cName: 'nav-text'
  },
  {
    title: 'zarautz saria',
    path: '/zarautz-saria',
    icon: <GiIcons.GiTrophyCup />,
    cName: 'nav-text'
  }
];