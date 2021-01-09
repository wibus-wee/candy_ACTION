/*
 * @Author: Innei
 * @Date: 2020-09-05 09:27:38
 * @LastEditTime: 2020-09-05 19:25:25
 * @LastEditors: Innei
 * @FilePath: /candy/configs.ts
 * @Coding with Love
 */

import { faGithub, faQq, faTwitter } from '@fortawesome/free-brands-svg-icons'
import {
  faDotCircle,
  faFeatherAlt,
  faGlasses,
  faHistory,
} from '@fortawesome/free-solid-svg-icons'
import { MenuModel, SocialLinkModel } from 'common/store/types'

const menu: MenuModel[] = [
  {
    title: '源',
    path: '/',
    type: 'Home',
    icon: faDotCircle,
    subMenu: [],
  },
  {
    title: '文',
    path: '/posts',
    type: 'Post',
    subMenu: [],
    icon: faGlasses,
  },
  {
    title: '记',
    type: 'Note',
    path: '/notes',
    icon: faFeatherAlt,
  },
  {
    title: '览',
    icon: faHistory,
    path: '/timeline',
    // subMenu: [
    //   {
    //     title: '生活',
    //     icon: faFeatherAlt,
    //     path: '/timeline?type=note',
    //   },
    //   {
    //     title: '博文',
    //     icon: faBookOpen,
    //     path: '/timeline?type=post',
    //   },
    // ],
  },
  // {
  //   title: '友',
  //   icon: faUserFriends,
  //   path: '/friends',
  // },
]

const social: SocialLinkModel[] = [
  {
    url: 'https://github.com/wibus-wee',
    title: 'GitHub',
    icon: faGithub,
    color: 'var(--black)',
  },
  {
    url: 'https://jq.qq.com/?_wv=1027&k=iZxOGzDW',
    title: 'QQ',
    icon: faQq,
    color: '#12b7f5',
  },
  {
    url: '#',
    title: 'twitter',
    icon: faTwitter,
    color: '#02A4ED',
  },
]
export const configs = {
  title: '糖果屋',
  description: '一个测试站点',
  keywords: ['blog'],
  menu,
  url: 'https://iucky.cn',
  author: 'Wibus',
  social,
  icp: {
    name: ' ',
    url: ' ',
  },
  travellings: true, // 开往
  avatar:
    'https://q.qlogo.cn/g?b=qq&nk=1596355173&s=640',
}

export default configs
