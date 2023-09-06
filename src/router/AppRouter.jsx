import React from 'react'
import {Routes, Route} from "react-router-dom"
import Login from '../pages/Login'

const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Login/>}></Route>

        </Routes>
    </div>
  )
}

export default AppRouter