import React from 'react';
import { Heart, MapPin, Mail, Globe, ArrowUp } from 'lucide-react';
import { folkAudio } from '../utils/audio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    folkAudio.playTempleBell();
  };

  return (
    <footer className="relative bg-[#FFF8EE] text-stone-800 pt-16 pb-12 border-t-2 border-amber-300 aipan-pattern-subtle">
      {/* Decorative Aipan wave trim */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 via-amber-500 to-red-600"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Mandate */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-amber-500 to-red-600 p-0.5 shadow-md">
                <div className="w-full h-full rounded-full bg-white p-1.5 flex items-center justify-center">
                  <img src="/brahmakamal.svg" alt="Brahma Kamal" className="w-full h-full" />
                </div>
              </div>
              <div>
                <span className="font-pahadi-display text-2xl text-amber-900 font-bold block">
                  उत्तराखण्ड दिवस 2026
                </span>
                <span className="text-xs text-stone-600 font-bold">
                  IIT Roorkee Himalayan Cultural Initiative
                </span>
              </div>
            </div>

            <p className="text-stone-700 text-xs sm:text-sm leading-relaxed max-w-md font-medium">
              Celebrated every year on 9th November at IIT Roorkee to honor the sacred land of Devbhoomi, foster mountain fraternity, and share the immortal folk traditions of Garhwal, Kumaon, and Jaunsar-Bawar with the world.
            </p>

            <div className="font-pahadi-display text-red-700 text-base tracking-wide font-bold">
              "जय बद्री विशाल • जय बाबा केदार • जय माँ नंदा सुनंदा"
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase font-extrabold text-amber-900 tracking-wider mb-3">
              Celebration Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-semibold">
              <li>
                <a href="#culture" className="text-stone-700 hover:text-red-700 transition-colors">
                  Folk Dances & Traditional Music
                </a>
              </li>
              <li>
                <a href="#aipan" className="text-stone-700 hover:text-red-700 transition-colors">
                  Virtual Aipan Art Canvas
                </a>
              </li>
              <li>
                <a href="#schedule" className="text-stone-700 hover:text-red-700 transition-colors">
                  IITR 9th Nov Event Schedule
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-stone-700 hover:text-red-700 transition-colors">
                  Celebration Memories & Photos
                </a>
              </li>
            </ul>
          </div>

          {/* IITR Contact & Location */}
          <div>
            <h4 className="text-xs uppercase font-extrabold text-amber-900 tracking-wider mb-3">
              Venue & Secretariat
            </h4>
            <div className="space-y-2.5 text-xs text-stone-700 font-medium">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span>
                  Indian Institute of Technology Roorkee, Roorkee, Haridwar District, Uttarakhand - 247667
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-700 shrink-0" />
                <span>uttarakhand-diwas@iitr.ac.in</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-amber-700 shrink-0" />
                <span>www.iitr.ac.in</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-amber-200">
              <span className="text-[11px] text-amber-900 font-bold block">
                Traditional Blessing:
              </span>
              <p className="text-xs text-stone-600 italic font-semibold">
                "भलो रया, सुख रया, सदबुद्धि रया!" (May you remain blessed, happy, and wise!)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-600 font-semibold">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <span>Organized with</span>
            <Heart className="w-4 h-4 text-red-600 fill-red-600" />
            <span>by the Himalayan Cultural Community at IIT Roorkee</span>
          </div>

          <div className="flex items-center gap-4">
            <span>© 2026 IIT Roorkee Uttarakhand Diwas</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white hover:bg-amber-50 text-amber-900 border border-amber-300 shadow-sm transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4 text-amber-700" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
