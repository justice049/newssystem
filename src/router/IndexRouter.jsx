import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom"; 
import NewsSandBox from "../views/sandbox/NewsSandBox";
import Login from '../views/login/Login';

export default function IndexRouter() {
  return (
    <HashRouter>
      <Routes>  
        {/* 登录页 */}
        <Route path="/login" element={<Login />} /> 
        
        {/* 受保护路由：如果没有 token，重定向到 /login */}
        <Route path="/*" element={
          localStorage.getItem("token") ? 
          <NewsSandBox /> : 
          <Navigate to="/login" replace />
        } />
      </Routes>
    </HashRouter>
  );
}