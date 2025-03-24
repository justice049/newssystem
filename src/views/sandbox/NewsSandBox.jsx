import React from 'react'
import SideMenu from '../../components/sandbox/SideMenu'
import TopHeader from '../../components/sandbox/TopHeader'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './home/Home'
import RightList from './right-manage/RightList'
import RoleList from './right-manage/RoleList'
import UserList from './user-manage/UserList'
import Nopermisson from './nopermisson/Nopermisson'
import { Layout, theme } from 'antd'

const { Content } = Layout

function NewsSandBox() {
  const tokenData = theme.useToken?.()
  if (!tokenData) {
    console.error(
      'theme.useToken() 返回 null，请检查 `ConfigProvider` 是否正确包裹！'
    )
    return null // 防止组件继续渲染
  }
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = tokenData

  return (
    <Layout>
      <SideMenu />
      <Layout>
        <TopHeader />
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
            <Route path="*" element={<Nopermisson />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  )
}

export default NewsSandBox
