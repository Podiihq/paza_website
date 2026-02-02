import { Route, Routes, useLocation } from 'react-router';
import './App.css'
import { AnimatePresence } from 'motion/react';
import LandingPage from './pages/landing_page/LandingPage';
import ServicesPage from './pages/services_page/ServicesPage';
import WorkPage from './pages/work_page/WorkPage';
import { ArtistGallary } from './pages/artists_page/ArtistGallary';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route index element={<LandingPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/artists" element={<ArtistGallary />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App