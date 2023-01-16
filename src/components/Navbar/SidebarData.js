import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Profile',
    path: '/app/profile',
    icon: <FaIcons.FaPortrait/>,
    cName: 'nav-text'
  },
  {
    title: 'Tasks',
    path: '/app/tasks',
    icon: <FaIcons.FaTasks />,
    cName: 'nav-text'
  }
];