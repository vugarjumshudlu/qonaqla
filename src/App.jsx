import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import Booking from './pages/Booking'
import Contact from './pages/Contact'
import CreateListing from './pages/CreateListing'
import Favorites from './pages/Favorites'
import HostDashboard from './pages/HostDashboard'
import Listings from './pages/Listings'
import Login from './pages/Login'
import PropertyDetails from './pages/PropertyDetails'
import Register from './pages/Register'
import Reservations from './pages/Reservations'
import SearchResults from './pages/SearchResults'
import Terms from './pages/Terms'
import UserProfile from './pages/UserProfile'
import Header from './components/Header'


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/userprofile' element={<UserProfile/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/listings' element={<Listings/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/createlisting' element={<CreateListing/>}/>
        <Route path='/hostdashboard' element={<HostDashboard/>}/>
        <Route path='/propertydetails' element={<PropertyDetails/>}/>
        <Route path='/searchresults' element={<SearchResults/>}/>
        <Route path='/reservations' element={<Reservations/>}/>
        <Route path='/terms' element={<Terms/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  )
}

export default App