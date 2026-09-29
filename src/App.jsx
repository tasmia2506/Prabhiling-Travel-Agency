import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout & Global Helper
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SlowmoScrollObserver from './components/SlowmoScrollObserver';
import SmoothScroll from './components/SmoothScroll';

// Modals & Config Drawer
import BookingModal from './components/Modals/BookingModal';
import BusDetailModal from './components/Modals/BusDetailModal';
import PackageDetailModal from './components/Modals/PackageDetailModal';
import ConfigDrawer from './components/ConfigDrawer';

// Dedicated Page Components
import HomePage from './pages/HomePage';
import BusesPage from './pages/BusesPage';
import BusDetailPage from './pages/BusDetailPage';
import FlightBookingPage from './pages/FlightBookingPage';
import TrainBookingPage from './pages/TrainBookingPage';
import ToursPage from './pages/ToursPage';
import TourDetailPage from './pages/TourDetailPage';
import DestinationsPage from './pages/DestinationsPage';
import ServicesPage from './pages/ServicesPage';
import DestinationDetailPage from './pages/DestinationDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import GeneralBookingPage from './pages/GeneralBookingPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

// Default Business Config
import { DEFAULT_CONFIG } from './data/config';

export default function App() {
  const [config, setConfig] = useState(DEFAULT_CONFIG);

  // Global Modals State
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingInitialData, setBookingInitialData] = useState(null);

  const [isBusDetailModalOpen, setIsBusDetailModalOpen] = useState(false);
  const [selectedBusData, setSelectedBusData] = useState(null);

  const [isPackageModalOpen, setIsPackageModalOpen] = useState(false);
  const [selectedPackageData, setSelectedPackageData] = useState(null);

  const [isConfigDrawerOpen, setIsConfigDrawerOpen] = useState(false);

  // Handlers
  const handleOpenBookingModal = (data = {}) => {
    setBookingInitialData(data);
    setIsBookingModalOpen(true);
  };

  const handleOpenBusDetailModal = (bus) => {
    setSelectedBusData(bus);
    setIsBusDetailModalOpen(true);
  };

  const handleOpenPackageModal = (pkg) => {
    setSelectedPackageData(pkg);
    setIsPackageModalOpen(true);
  };

  const handleUpdateConfig = (newConfig) => {
    setConfig((prev) => ({ ...prev, ...newConfig }));
  };

  return (
    <Router>
      <ScrollToTop />
      <SmoothScroll />
      <SlowmoScrollObserver />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-bg-main)' }}>
        {/* Navigation Header */}
        <Header
          config={config}
          onOpenBookingModal={handleOpenBookingModal}
        />

        {/* Main Route Content */}
        <main style={{ flex: 1 }}>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  config={config}
                  onOpenBookingModal={handleOpenBookingModal}
                  onOpenBusDetailModal={handleOpenBusDetailModal}
                  onOpenPackageModal={handleOpenPackageModal}
                />
              }
            />

            <Route
              path="/buses"
              element={
                <BusesPage
                  onOpenBookingModal={handleOpenBookingModal}
                />
              }
            />

            <Route
              path="/buses/:id"
              element={
                <BusDetailPage
                  config={config}
                  onOpenBookingModal={handleOpenBookingModal}
                />
              }
            />

            <Route
              path="/flight-booking"
              element={
                <FlightBookingPage
                  config={config}
                  onOpenBookingModal={handleOpenBookingModal}
                />
              }
            />

            <Route
              path="/train-booking"
              element={
                <TrainBookingPage
                  config={config}
                  onOpenBookingModal={handleOpenBookingModal}
                />
              }
            />

            <Route
              path="/packages"
              element={
                <ToursPage
                  onOpenBookingModal={handleOpenBookingModal}
                />
              }
            />

            <Route
              path="/packages/:id"
              element={
                <TourDetailPage
                  config={config}
                  onOpenBookingModal={handleOpenBookingModal}
                />
              }
            />

            <Route
              path="/destinations"
              element={<DestinationsPage />}
            />

            <Route
              path="/services"
              element={
                <ServicesPage
                  onOpenBookingModal={handleOpenBookingModal}
                />
              }
            />

            <Route
              path="/destinations/:id"
              element={
                <DestinationDetailPage
                  onOpenBookingModal={handleOpenBookingModal}
                />
              }
            />

            <Route
              path="/about"
              element={
                <AboutPage
                  config={config}
                  onOpenBookingModal={handleOpenBookingModal}
                />
              }
            />

            <Route
              path="/contact"
              element={
                <ContactPage
                  config={config}
                />
              }
            />

            <Route
              path="/booking"
              element={
                <GeneralBookingPage
                  config={config}
                />
              }
            />

            <Route
              path="/privacy-policy"
              element={
                <PrivacyPolicyPage
                  config={config}
                />
              }
            />
          </Routes>
        </main>

        {/* Footer */}
        <Footer
          config={config}
          onToggleConfigDrawer={() => setIsConfigDrawerOpen(true)}
        />

        {/* Global Modals & Evaluation Config Drawer */}
        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          initialData={bookingInitialData}
          config={config}
        />

        <BusDetailModal
          bus={selectedBusData}
          isOpen={isBusDetailModalOpen}
          onClose={() => setIsBusDetailModalOpen(false)}
          onBookBus={handleOpenBookingModal}
        />

        <PackageDetailModal
          packageData={selectedPackageData}
          isOpen={isPackageModalOpen}
          onClose={() => setIsPackageModalOpen(false)}
          onEnquirePackage={handleOpenBookingModal}
        />

        <ConfigDrawer
          config={config}
          isOpen={isConfigDrawerOpen}
          onClose={() => setIsConfigDrawerOpen(false)}
          onUpdateConfig={handleUpdateConfig}
        />
      </div>
    </Router>
  );
}
