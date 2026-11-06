import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FacilityGrid } from './components/FacilityGrid';
import { CancerCenterPillar } from './components/CancerCenterPillar';
import { CriticalCareSection } from './components/CriticalCareSection';
import { OrthopedicShowcase } from './components/OrthopedicShowcase';
import { DoctorRoster } from './components/DoctorRoster';
import { LocalCatchmentSilo } from './components/LocalCatchmentSilo';
import { PatientGuideAndTPA } from './components/PatientGuideAndTPA';
import { LocationAndMap } from './components/LocationAndMap';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { EmergencyFloatingBar } from './components/EmergencyFloatingBar';

export const App: React.FC = () => {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState<string>('');
  const [activeSection, setActiveSection] = useState<string>('home');

  const handleOpenAppointment = (dept?: string) => {
    setSelectedDepartment(dept || '');
    setIsAppointmentModalOpen(true);
  };

  const handleCloseAppointment = () => {
    setIsAppointmentModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 antialiased">
      {/* Sticky Top Header & Utility Bar */}
      <Header
        onOpenAppointment={handleOpenAppointment}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Page Layout */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenAppointment={handleOpenAppointment} />

        {/* 15 Clinical Facilities from Real Board */}
        <FacilityGrid onOpenAppointment={handleOpenAppointment} />

        {/* Cancer Center Pillar: Chemotherapy & Surgical Oncology */}
        <CancerCenterPillar onOpenAppointment={handleOpenAppointment} />

        {/* Critical Care: 24/7 ICU, Level-III NICU & Mechanical Ventilator Support */}
        <CriticalCareSection onOpenAppointment={handleOpenAppointment} />

        {/* Orthopedic Joint Replacement & Laparoscopic Keyhole Surgeries (C-ARM Guided) */}
        <OrthopedicShowcase onOpenAppointment={handleOpenAppointment} />

        {/* Doctor Roster & Board-Certified Specialists */}
        <DoctorRoster onOpenAppointment={handleOpenAppointment} />

        {/* Local Landing Silo: Tedhi Pulia, Ring Road, Aliganj, Jankipuram Catchment */}
        <LocalCatchmentSilo />

        {/* Cashless TPA & Patient Visitor Guide */}
        <PatientGuideAndTPA />

        {/* Location & Embedded Google Map Navigation */}
        <LocationAndMap />

        {/* FAQs with JSON-LD FAQPage Schema */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Appointment & Bed Inquiry Modal */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={handleCloseAppointment}
        defaultDepartment={selectedDepartment}
      />

      {/* Mobile Emergency Floating Bar */}
      <EmergencyFloatingBar onOpenAppointment={() => handleOpenAppointment()} />
    </div>
  );
};

export default App;
