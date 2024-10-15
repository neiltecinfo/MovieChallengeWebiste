import React from 'react'
import Header from './Components/Header';
import Home from './Screens/HomeScreen/Home';
import Favourites from './Screens/FavouritesScreen/Favourites';
import Watchlist from '../src/Screens/WatchlistScreen/Watchlist'
import Profile from "../src/Screens/ProfileScreen/Profile"
import SignUp from "../src/Screens/StartingPages/SignUp"
import SignIn from "../src/Screens/StartingPages/SignIn"
import ProtectedRoutes from "../src/Services/ProtectedRoutes"
import Details from './Screens/HomeScreen/Details';

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
          <Route path="/details" element={<Details />} />
        </Route>



      </Routes>
    </Router>
  )
}

export default App
