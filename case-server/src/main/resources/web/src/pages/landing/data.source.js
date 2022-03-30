import React from 'react'
import logoImg from './img/atclogo4.png'
import getQueryString from '@/utils/getCookies'
const getCookies = getQueryString.getCookie
export const Banner30DataSource = {
  wrapper: { className: 'banner3' },
  textWrapper: {
    className: 'banner3-text-wrapper',
    children: [
      {
        name: 'slogan',
        className: 'banner3-slogan',
        children: (
          <div>
            <img src={logoImg} className="banner3-logo" />
            <br />
            <span>Zeek</span>
          </div>
        ),
      },
      {
        name: 'name',
        className: 'banner3-name',
        children: (
          <span>
            <p>一套敏捷的測試用例管理平台</p>
          </span>
        ),
      },
      {
        name: 'nameEn',
        className: 'banner3-name-en',
        children: (
          <span style={{ color: '#7d899b' }}>
            以腦圖方式編輯可快速上手，用例關聯需求形成流程閉環，並支持組件化引用，
            <br />
            可在各個平台嵌入使用，是測試人員的貼心助手
          </span>
        ),
      },
      {
        name: 'button',
        className: 'banner3-button',
        children: (
          <span>
            <p>開始使用</p>
          </span>
        ),
        href: getCookies('username') ? '/case/caseList/1' : `/login?/case/caseList/1`,
      },
    ],
  },
}
export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        <p>
          <span>©2022 Zeek</span>
        </p>
      </span>
    ),
  },
}
