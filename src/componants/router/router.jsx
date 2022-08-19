import React from 'react'
import{ BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from '../dashboard/dashboard'
import Signin from '../signin/signin'
import Signup from '../signup/signup'

function Router1() {
  return (
    <div>
        <Router>
            <Routes>
                <Route exact path='/' element={<Signin/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
            </Routes>
        </Router>
    </div>
  )
}
export default Router1