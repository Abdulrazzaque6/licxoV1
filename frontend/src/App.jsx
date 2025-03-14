import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import AddHotels from './pages/AddHotels'
import FeedbackPage from './pages/FeedbackPage'
import HotelDetail from './components/HotelDetail'
import About from './pages/About'
import Properties from './pages/Properties'

import FAQ from './pages/FAQ'
import Myrooms from './pages/Myrooms'

import Profile from './pages/Profile'
import NotFound from './components/Notfound'
import ErrorBoundary from './components/ErrorBoundry'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import ContactUs from './pages/ContactUs'

function App() {
  return (

    <BrowserRouter>
       <ErrorBoundary>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/private_policy' element={<PrivacyPolicy/>} />
          
          <Route path='/terms_of_service' element={<TermsOfService/>} />
          <Route path='/myrooms' element={<Myrooms />} />
          <Route path='/profile' element={<Profile/>}/>
          <Route path="/about" element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faqs" element={<FAQ />} />
          <Route path='/addhotel' element={<AddHotels />} />
          <Route path='/feedback' element={<FeedbackPage />} />
          <Route path="/hotel/:id" element={<HotelDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </ErrorBoundary>
      
    </BrowserRouter>
  );
}

export default App
