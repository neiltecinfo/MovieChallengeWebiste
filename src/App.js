import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home';
import Favourites from './Components/Favourites';
import Watchlist from './Components/Watchlist';
import Profile from './Components/Profile';
// import {useDispatch} from 'react-redux';
// import {Provider} from 'react-redux';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import ProtectedRoutes from './Services/ProtectedRoutes';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />


        <Route path='/' element={<ProtectedRoutes />}>

          <Route path="/header" element={<Header />} />
          <Route path="/home" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/profile" element={<Profile />} />
        </Route>



      </Routes>
    </Router>
  )
}

export default App
