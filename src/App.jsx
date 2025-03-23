import React,{useEffect} from "react"
import './App.css'
import style from './child.module.scss'
import axios from 'axios'
import IndexRouter from "./router/IndexRouter"
import NewsSandBox from "./views/sandbox/NewsSandBox"

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
    // <IndexRouter/>
    <NewsSandBox/>
  )
}

export default App
