import React from 'react'
import SideMenu from '../../components/sandbox/SideMenu'
import TopHeader from '../../components/sandbox/TopHeader'
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

export default function NewsSandBox() {
  return (
    <div>
      <SideMenu></SideMenu>
      <TopHeader></TopHeader>
      <Routes>
          <Route path="/home" component={Home}/>
          <Route path="/home" component={Home}/>
      </Routes>
    </div>
  )
}
