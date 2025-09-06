import React from 'react'
import Home from './pages/Home'
import {Routes ,Route} from 'react-router-dom'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import Writearticle from './pages/Writearticle'
import Blogtitle from './pages/Blogtitle'
import Generateimages from './pages/GenerateImages'
import Removebg from './pages/Removebg'
import Removeobject from './pages/RemoveObject'
import Reviewresume from './pages/Reviewresume'
import Community from './pages/Community'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path= '/' element={<Home />} />
        <Route path= '/ai' element={<Layout />}>
          <Route index element= {<Dashboard />} />
          <Route path='write-article' element= {<Writearticle />} />
          <Route path='blog-title' element= {<Blogtitle/>} />
          <Route path='generate-images' element= {<Generateimages />} />
          <Route path='remove-background' element= {<Removebg/>} />
          <Route path='remove-object' element= {<Removeobject/>} />
          <Route path='review-resume' element= {<Reviewresume/>} />
          <Route path='community' element= {<Community/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App

