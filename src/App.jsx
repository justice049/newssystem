import React,{useEffect} from "react"
import './App.css'
import style from './child.module.scss'
import axios from 'axios'

function App() {
  // useEffect(() => {
  //   axios
  //     .get(
  //       'http://localhost:3001/api/mmdb/movie/v3/list/hot.json?ct=西安&ci=42&channelId=4'
  //     )
  //     .then((res) => {
  //       console.log(res.data)
  //     })
  //     .catch((error) => {
  //       console.error('请求出错:', error)
  //     })
  // }, [])

  return (
    <div>
      app
      <ul>
        <li className={style.list}></li>
        <li></li>
        <li></li>
      </ul>
      <li>111</li>
      <li>111</li>
    </div>
  )
}

export default App
