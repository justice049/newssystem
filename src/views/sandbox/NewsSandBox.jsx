import React from 'react'
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

export default function NewsSandBox() {
  return (
    <div>
      <SideMenu></SideMenu>
      <TopHeader></TopHeader>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/user-manage/list" element={<UserList />} />
          <Route path="/right-manage/role/list" element={<RoleList />} />
          <Route path="/right-manage/right/list" element={<RightList />} />

          <Route path="/" element={<Navigate to="/home" />} />
          <Route path='*' element={<Nopermisson/>}/>
        </Routes>
      </Router>
    </div>
  )
}
