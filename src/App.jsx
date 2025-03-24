import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import NewSandBox from './views/sandbox/NewsSandBox'
import { ConfigProvider } from 'antd'
import IndexRouter from './router/indexRouter'


function App() {
  return (
    // <ConfigProvider>
    //   <BrowserRouter>
    //     <NewsSandBox />
    //   </BrowserRouter>
    // </ConfigProvider>
    // <div>我受不了了</div>
    // <IndexRouter>ranhoundsadsadse</IndexRouter>
    <NewSandBox/>

  )
}

export default App


// import React, { Suspense } from 'react'
// import { BrowserRouter } from 'react-router-dom'
// import NewsSandBox from './views/sandbox/NewsSandBox'

// const App = () => {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <BrowserRouter>
//         <NewsSandBox />
//       </BrowserRouter>
//     </Suspense>
//   )
// }

// export default App
