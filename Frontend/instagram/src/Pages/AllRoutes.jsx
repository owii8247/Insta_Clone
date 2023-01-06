import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import SignUp from './SignUp'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/signup" element={<SignUp/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes