---
date: 2020-12-06T12:16:52.321Z
updated: 2020-12-06T12:28:31.813Z
title: 部署文档
slug: mix-space-start
subtitle: Mix-Space部署文档
type: Page
permalink: mix-space-start
---

> 致虚极，守静笃。

## 关于 Mix-Space

仓库：[https://github.com/mx-space](https://github.com/mx-space)

由于有很多人不会部署（其实我也是）于是请教了innei，编写了Mix-Space Docs文档。请仔细的跟着去做。

## ⚠️注意

1. 系统要求：Mac / Linux（本教程使用的是CentOS 7.6.1810）
2. 配置参考：2核2G
3. 环境要求：nodejs 14，MongoDB，Redis, Yarn 1.22.5

## 已实现的功能

* [X] 写作
* [X] 备份
* [X] 图床
* [X] 前端 UI
* [X] 后台与后端同步跟进

## 环境配置

如果嫌麻烦的，可以在终端运行此脚本

> MongoDB & Redis & Nginx 不安装，请前往宝塔 软件商店查找安装

```bash
# install nodejs 14 + Yarn 1.22.5
# 不安装 MongoDB & Redis & Nginx
# 只需复制下面的命令
wget https://api.iucky.cn/themes/mx-space-1.sh && sh mx-space-1.sh
```

MongoDB & Redis & Nginx 用宝塔安装，进入软件商店找找


## 克隆repo

请注意！必须要保持在同一个目录！

```bash
cd
mkdir mx
cd mx
git clone https://github.com/mx-space/kami
git clone https://github.com/mx-space/admin
git clone https://github.com/mx-space/server
```


## 准备域名

这边建议直接解析三个域名到服务器

这里假设解析的是：

前端： kami.test.cn

中端： admin.test.cn

后端： server.test.cn

> 当然，你不用也是可以的，直接IP访问，但记得宝塔开端口！

## 部署 Server

1. 进入宝塔站点设置，点击配置文件，在`access_log`那行前面加入以下代码：

![https://gitee.com/wibus/blog-assets-goo/raw/master/asset-pic/iMac_2020-11-29上午7.23.58.jpg](https://gitee.com/wibus/blog-assets-goo/raw/master/asset-pic/iMac_2020-11-29%E4%B8%8A%E5%8D%887.23.58.jpg)

```nginx
location /socket.io {
        proxy_http_version 1.1;
        proxy_buffering off;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_pass http://127.0.0.1:2333/socket.io;
    }
```


2. 在根目录输入 `cd mx/server`，定位至server文件夹
   接着我们输入`yarn`进行install
   输入`cp .env.example .env`，复制.env.example为.env
3. 输入命令：vim .env ，输入i，进入修改模式，修改内容
   配置参考在下面👇

### Server .env 配置参考

```.env
SECRET=ahsdljasdasdhaisASHLDasdassdasdasrwedwqe
PORT=2333
CORS=1
APP_MAX_MEMORY=150M
ORIGIN=kami.test.cn,admin.test.cn #修改此项为你前端,admin的访问地址，用,分割
```

4. 之后输入`:wq`退出，运行下面的命令

```bash
yarn global add pm2
yarn global add ts-node
sh ./build.sh
```


5. 我们去到宝塔的站点设置，点击反向代理选项卡，点击添加反向代理
   `代理名称`自己随便写，`目标URL`填写 **[http://127.0.0.1:2333](http://127.0.0.1:2333/)** ，其他不需要改，保存即可
   ![https://gitee.com/wibus/blog-assets-goo/raw/master/asset-pic/iMac_2020-11-29上午7.30.53.jpg](https://gitee.com/wibus/blog-assets-goo/raw/master/asset-pic/iMac_2020-11-29%E4%B8%8A%E5%8D%887.30.53.jpg)

## 部署 Admin

1. 在根目录输入以下命令`cd mx/admin/`，
   输入`yarn`进行install
2. 输入命令vim .env，输入i，修改内容


### Admin .env 配置参考

```.env
VUE_APP_BASE_API=https://server.test.cn/api/v1/
VUE_APP_WEB_URL=https://test.cn
VUE_APP_GATEWAY=https://server.test.cn
```


之后输入`:wq`退出

3. 输入命令vim vue.config.js ，输入i，删除以下的内容

```js
publicPath:
process . env . NODE_ ENV
==
production
? !process. env. VUE_ APP_ PUBLIC_ URL
? https://cdn. jsdelivr net/ gh/mx-space/ admin@gh-pages 
```


4. 之后输入`:wq`退出
5. 输入命令 `yarn build` 进行构建
   我们输入`cp -rf dist/* /www/wwwroot/admin.test.cn/`，将构建出来的包移至站点目录（请将admin.test.cn修改为你的admin域名）
   之后Admin就部署好啦，访问一下admin，初始密码是master
   具体的使用方法我会在下面一一讲述

## 部署 Kami

1. 在根目录下输入以下命令 cd mx/kami/
   之后输入`yarn`进行install

输入`cp next.config.withoutsentry.js next.config.js`，复制没有sentry的config

输入`cp .env.example .env`，复制例子

2. 输入命令：vim .env ，输入i，进入修改模式，修改里面的内容


### Kami .env 配置参考

```.env
BASEURL=https://kami.test.cn
APIURL=https://server.test.cn/api/v1
TRACKING_ID= # google analyze's ID
ASSETPREFIX=
REDIS=1
GATEWAY_URL=https://server.test.cn
ALWAYS_HTTPS=1
```
BASEURL 修改为前端

APIURL 将前面的server.test.cn修改为你的server端

GATEWAY_URL 修改这里为你的后端（Server）

### 修改Kami配置信息

0. 输入`vim configs.ts`，输入i，进入修改模式，自己修改里面的东西（我做了注释的）

```ts
import { faGithub, faQq, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faDotCircle } from '@fortawesome/free-regular-svg-icons'
import {
  faBookOpen,
  faCircleNotch,
  faComments,
  faFeatherAlt,
  faFlask,
  faGlasses,
  faHistory,
  faMusic,
  faTv,
  faUserFriends,
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
    title: '言',
    path: '/says',
    icon: faComments,
  },
  {
    title: '览',
    icon: faHistory,
    path: '/timeline',
    subMenu: [
      {
        title: '生活',
        icon: faFeatherAlt,
        path: '/timeline?type=note',
      },
      {
        title: '博文',
        icon: faBookOpen,
        path: '/timeline?type=post',
      },
    ],
  },
  {
    title: '友',
    icon: faUserFriends,
    path: '/friends',
  },
  // {
  //   title: '趣',
  //   icon: faCircleNotch,
  //   path: '/favorite/music',
  //   subMenu: [
  //     {
  //       title: '音乐',
  //       icon: faMusic,
  //       type: 'Music',
  //       path: '/favorite/music',
  //     },
  //     {
  //       title: '追番',
  //       icon: faTv,
  //       type: 'Bangumi',
  //       path: '/favorite/bangumi',
  //     },
 //      {
  //       title: '项目',
  //       icon: faFlask,
  //       type: 'Project',
  //       path: '/projects',
  //     },
  //   ],
  // },
]
const social: SocialLinkModel[] = [
  {
    url: 'https://github.com/wibus-wee', //GitHub主页Ω
    title: 'GitHub',
    icon: faGithub,
    color: 'var(--black)',
  },
  {
    url: 'https://jq.qq.com/?_wv=1027&k=Z9ovm0he', //QQ链接
    title: 'QQ',
    icon: faQq,
    color: '#12b7f5',
  },
  {
    url: '', //推特主页链接
    title: 'twitter',
    icon: faTwitter,
    color: '#02A4ED',
  },
]
export default {
  url: 'https://iucky.cn',
  alwaysHTTPS:
    process.env.NODE_ENV === 'development'
      ? false
      : process.env.ALWAYS_HTTPS && parseInt(process.env.ALWAYS_HTTPS) === 1,
  social,
  biliId: 509616661,
  homePage: 'https://iucky.cn', // footer link
  menu,
  icp: {
    name: '无备案', //icp备案号
    url: 'https://iucky.cn/', //icp备案查询网址（我由于没有就乱写了）
  },
  travellings: true, // 开往
  donate: 'https://iucky.cn', //爱发电链接
}
```


1. 进入mx/kami/public/manifest.json，修改里面的json为自己的内容
2. 之后再输入`yarn build`进行构建
3. 构建完毕后，运行`pm2 start ecosystem.config.js`即可～
4. 我们去到宝塔的站点设置，点击反向代理选项卡，点击添加反向代理
   `代理名称`自己随便写，`目标URL`填写 **[http://127.0.0.1:2323](http://127.0.0.1:2323/)** ，其他不需要改，保存即可
   ![https://gitee.com/wibus/blog-assets-goo/raw/master/asset-pic/iMac_2020-11-29上午7.35.41.jpg](https://gitee.com/wibus/blog-assets-goo/raw/master/asset-pic/iMac_2020-11-29%E4%B8%8A%E5%8D%887.35.41.jpg)

## 附加内容

如果发现admin修改了配置后没有生效

输入`redis-cli`，进入redis客户端

输入FLUSHALL，出现OK即可～


我们可以安装一下htop观察整个的占用状态

```bash
yum install htop -y
htop
```

以及运行完后，我们运行pm2 ps命令观察一下是否成功启动

```txt
┌────┬────────────────────┬──────────┬──────┬───────────┬──────────┬──────────┐
│ id │ name               │ mode     │ ↺    │ status    │ cpu      │ memory   │
├────┼────────────────────┼──────────┼──────┼───────────┼──────────┼──────────┤
│ 1  │ mx-space-graphql   │ cluster  │ 0    │ online    │ 0%       │ 54.6mb   │
│ 3  │ mx-space-graphql   │ cluster  │ 0    │ online    │ 0%       │ 55.9mb   │
│ 0  │ mx-space-server    │ cluster  │ 1    │ online    │ 0%       │ 112.0mb  │
│ 2  │ mx-space-server    │ cluster  │ 4    │ online    │ 0%       │ 109.9mb  │
│ 4  │ mx-web             │ fork     │ 5631 │ online    │ 0%       │ 40.7mb   │
│ 5  │ mx-web             │ fork     │ 8828 │ online    │ 0%       │ 1.4mb    │
└────┴────────────────────┴──────────┴──────┴───────────┴──────────┴──────────┘
```
## 使用文档

使用文档：https://iucky.cn/mix-space-use