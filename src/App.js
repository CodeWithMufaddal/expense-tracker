import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddExpense from './Components/AddExpense'
import Home from './Components/Home'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<>
            <Navbar />
            <Home />
          </>} />
          <Route path="/add" element={<AddExpense />} />
        </Routes>

      </div>
    </Router>
  )
}

export default App