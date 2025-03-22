import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';
import style from './child.module.scss';
import IndexRouter from './router/IndexRouter';

function App() {
  // useEffect(() => {
  //   axios
  //     .get('http://localhost:3001/api/mmdb/movie/v3/list/hot.json?ct=西安&ci=42&channelId=4')
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((error) => {
  //       console.error('请求出错:', error);
  //     });
  // }, []);
  
  return (
    <div>
      <IndexRouter></IndexRouter>
    </div>
  );
}

export default App;