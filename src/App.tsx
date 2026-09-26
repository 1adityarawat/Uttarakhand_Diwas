import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CultureExplorer } from './components/CultureExplorer';
import { AipanCanvas } from './components/AipanCanvas';
import { EventSchedule } from './components/EventSchedule';
import { Gallery } from './components/Gallery';
import { RegistrationModal } from './components/RegistrationModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-stone-900 flex flex-col font-sans selection:bg-amber-600 selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenRegister={() => setIsRegisterOpen(true)} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section with Background Himalayan Photo & Countdown */}
        <Hero onOpenRegister={() => setIsRegisterOpen(true)} />

        {/* Vibrant Culture Explorer (Folk Dances, Music & Instruments, Pahadi Flavors, Attire, Sacred) */}
        <CultureExplorer />

        {/* Interactive Virtual Aipan Canvas Studio */}
        <AipanCanvas />

        {/* IIT Roorkee 9th Nov Event Schedule & Venues */}
        <EventSchedule />

        {/* Photo Gallery & IITR Memories */}
        <Gallery />
      </main>

      {/* Footer */}
      <Footer />

      {/* Registration & Pass Modal */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />
    </div>
  );
}
