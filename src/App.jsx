import { Route, Routes, useLocation } from 'react-router';
import { useState } from 'react';
import './App.css'
import { AnimatePresence as MotionPresence } from 'motion/react';
import { AnimatePresence as FramerPresence } from 'framer-motion';
import LandingPage from './pages/landing_page/LandingPage';
import ServicesPage from './pages/services_page/ServicesPage';
import WorkPage from './pages/work_page/WorkPage';
import { ArtistGallary } from './pages/artists_page/ArtistGallary';
import AboutPage from './pages/about_page/AboutPage';
import LoaderPage from './pages/loader_page/LoaderPage';

function App() {
  const location = useLocation();
  const [showLoader, setShowLoader] = useState(true);

  const handleLoaderComplete = () => {
    setShowLoader(false);
  };

  return (
    <>
      <FramerPresence>
        {showLoader && (
          <LoaderPage key="loader" onComplete={handleLoaderComplete} />
        )}
      </FramerPresence>
      {!showLoader && (
        <MotionPresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route index element={<LandingPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/artists" element={<ArtistGallary />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </MotionPresence>
      )}
    </>
  )
}

export default App
