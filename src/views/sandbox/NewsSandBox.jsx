import SideMenu from '../../components/sandbox/SideMenu'
import TopHeader from '../../components/sandbox/TopHeader'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Home from './home/Home'
import RightList from './right-manage/RightList'
import RoleList from './right-manage/RoleList'
import UserList from './user-manage/UserList'
import Nopermisson from './nopermisson/Nopermisson'

import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';

const { Header, Sider, Content } = Layout;

export default function NewsSandBox() {
  return (
    <Layout>
      <SideMenu></SideMenu>
      <Layout>
      <TopHeader></TopHeader>
      <Router>
      <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/user-manage/list" element={<UserList />} />
          <Route path="/right-manage/role/list" element={<RoleList />} />
          <Route path="/right-manage/right/list" element={<RightList />} />

          <Route path="/" element={<Navigate to="/home" />} />
          <Route path='*' element={<Nopermisson/>}/>
        </Routes>
        </Content>
      </Router>
      </Layout>
    </Layout>
  )
}
