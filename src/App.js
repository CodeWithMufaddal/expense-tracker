import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddExpense from './Components/AddExpense'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import './App.css'
import ProtectedRoute from './Components/Auth/ProtectedRoute'
import Login from './Components/Auth/Login'
import SignUp from './Components/Auth/SignUp'

const App = () => {
  return (
    <Router>
      <div className='page-center'>
        <Routes>
          <Route path="/" element={<>
            <ProtectedRoute>
              <Navbar />
              <Home />
            </ProtectedRoute>
          </>} />
          <Route path="/add" element={<AddExpense />} />
          <Route path="/accounts/login" element={<Login />} />
          <Route path="/accounts/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App