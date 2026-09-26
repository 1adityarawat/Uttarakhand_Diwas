import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Calendar, Sparkles } from 'lucide-react';
import { folkAudio } from '../utils/audio';

interface NavbarProps {
  onOpenRegister: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAudioMuted, setIsAudioMuted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const nextMuted = !isAudioMuted;
    setIsAudioMuted(nextMuted);
    folkAudio.setMuted(nextMuted);
    if (!nextMuted) {
      folkAudio.playTempleBell();
    }
  };

  const navLinks = [
    { name: 'Heritage & Culture', href: '#culture' },
    { name: 'Aipan Studio', href: '#aipan' },
    { name: 'IITR Schedule', href: '#schedule' },
    { name: 'Memories', href: '#gallery' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-amber-200 shadow-md shadow-amber-900/5 py-2.5'
          : 'bg-gradient-to-b from-white/95 via-white/80 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-amber-500 via-red-600 to-amber-400 p-0.5 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center p-1.5 shadow-inner">
                <img src="https://quatrohive.com/wp-content/uploads/2024/10/iit-roorkee.png" alt="Brahma Kamal" className="w-full h-full" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-pahadi-display text-lg sm:text-xl font-bold tracking-wide text-amber-900">
                  उत्तराखण्ड दिवस
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-red-100 text-red-700 border border-red-300">
                  2026
                </span>
              </div>
              <p className="text-[11px] text-stone-600 tracking-wider font-semibold flex items-center gap-1">
                <span className="text-amber-800">IIT ROORKEE</span>
                <span className="w-1 h-1 rounded-full bg-red-500"></span>
                <span className="text-amber-700">Devbhoomi Heritage</span>
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone-700 hover:text-amber-800 text-sm font-semibold px-3 py-1.5 rounded-lg hover:bg-amber-100/70 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              title={isAudioMuted ? 'Unmute Folk Sounds' : 'Mute Folk Sounds'}
              className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 hover:bg-amber-100 transition-colors shadow-sm"
            >
              {isAudioMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-amber-600 animate-pulse" />}
            </button>

            {/* RSVP / Pass Button */}
            <button
              onClick={onOpenRegister}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 via-red-600 to-amber-700 hover:from-amber-500 hover:to-red-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-red-600/20 hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-4 h-4 text-amber-200" />
              <span>Get Digital Pass</span>
            </button>
          </div>

          {/* Mobile Menu & Sound Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleSound}
              className="p-2 rounded-lg bg-amber-50 border border-amber-200 text-amber-700"
            >
              {isAudioMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-amber-600" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-stone-100 border border-stone-300 text-stone-700 hover:text-amber-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-white border border-amber-200 shadow-xl">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-stone-700 hover:text-amber-800 hover:bg-amber-50 px-3 py-2 rounded-lg text-sm font-semibold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-stone-200">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenRegister();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-red-600 text-white font-bold text-sm shadow-md"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Get Celebration Pass & RSVP</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
