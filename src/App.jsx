import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import style from './child.module.scss'

function App() {
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