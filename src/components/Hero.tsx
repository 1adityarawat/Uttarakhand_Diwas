import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Sparkles, Music, ChevronDown, Award } from 'lucide-react';
import { folkAudio } from '../utils/audio';

interface HeroProps {
  onOpenRegister: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegister }) => {
  // Target date: November 9 (Uttarakhand Diwas)
  const [timeLeft, setTimeLeft] = useState({
    days: 44,
    hours: 8,
    minutes: 32,
    seconds: 15,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setMonth(10); // November is month 10 (0-indexed)
    targetDate.setDate(9);
    targetDate.setHours(10, 0, 0, 0);

    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = targetDate.getTime() - now;

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleHeroSound = () => {
    folkAudio.playTempleBell();
    setTimeout(() => {
      folkAudio.playRansingha();
    }, 400);
  };

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-center items-center overflow-hidden">
      {/* Background Scenic Himalayan Photo with Luminous Warm Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://www.easeindiatrip.com/blog/wp-content/uploads/2024/12/Uttarakhand-travel-guide.jpg"
          alt="Himalayan Mountain Peaks Uttarakhand"
          className="w-full h-full object-cover object-center filter saturate-120 contrast-110 brightness-95"
        />
        {/* Keep the scenic Himalayan photo visible while still making the text crisp and legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fffdf8]/35 via-[#fdf4d8]/40 to-[#fffdf9]/75 backdrop-blur-[1px]"></div>

        {/* Subtle decorative Aipan pattern watermark */}
        <div className="absolute inset-0 aipan-pattern-subtle opacity-35 pointer-events-none"></div>

        {/* Golden Sun Flare ambient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] rounded-full bg-gradient-to-tr from-amber-400/20 via-orange-300/25 to-yellow-200/30 blur-3xl pointer-events-none animate-pulse-glow"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center z-10 flex flex-col items-center">
        {/* Top Celebration Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-amber-300 shadow-md text-amber-900 text-xs sm:text-sm font-bold backdrop-blur-md mb-6">
          <Sparkles className="w-4 h-4 text-amber-600 animate-spin" style={{ animationDuration: '6s' }} />
          <span>Annual Celebration of Devbhoomi Culture & Himalayan Heritage</span>
          <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
          <span className="text-red-700 font-extrabold">IIT Roorkee</span>
        </div>

        {/* Main Sanskrit/Hindi Invocation & Title */}
        <h2 className="font-pahadi-display text-2xl sm:text-4xl text-amber-800 tracking-wide mb-2 drop-shadow-sm font-bold">
          ॥ जय बद्री विशाल • जय बाबा केदार ॥
        </h2>
        
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-stone-900 mb-4 leading-tight">
          <span className="block font-pahadi-display text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-amber-700 to-amber-800 drop-shadow-sm">
            उत्तराखण्ड दिवस
          </span>
          <span className="text-2xl sm:text-4xl md:text-5xl font-serif-royal block mt-1 text-stone-800 font-black tracking-wider">
            UTTARAKHAND DIWAS 2026
          </span>
        </h1>

        {/* Description Subtitle */}
        <p className="max-w-3xl text-base sm:text-lg md:text-xl text-stone-700 font-medium mb-8 leading-relaxed">
          Experience the untamed spirit and sacred rhythm of the Himalayas at <span className="text-amber-800 font-bold">IIT Roorkee</span>—the historic Gateway to Devbhoomi. From the thunderous warrior rhythm of the <span className="text-red-700 font-semibold">Chholiya dance</span> to sacred <span className="text-red-700 font-semibold">Aipan art</span>, iron-kadhai <span className="text-red-700 font-semibold">Kafuli banquets</span>, and the timeless folk melodies of Garhwal, Kumaon and Jaunsar.
        </p>

        {/* Date & Venue Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8 text-xs sm:text-sm">
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/95 border border-amber-300 shadow-sm text-stone-800">
            <Calendar className="w-4 h-4 text-red-600" />
            <span className="font-bold text-amber-900">9th November 2026</span>
            <span className="text-stone-500 font-medium">(Statehood Day)</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/95 border border-amber-300 shadow-sm text-stone-800">
            <MapPin className="w-4 h-4 text-red-600" />
            <span className="font-semibold text-stone-800"> MAC, IIT Roorkee</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/95 border border-amber-300 shadow-sm text-stone-800">
            <Award className="w-4 h-4 text-amber-600" />
            <span className="font-semibold text-stone-800">Students, Faculty & Alumni Welcome</span>
          </div>
        </div>

        {/* Real-time Countdown Timer in Bright Glass Card */}
        <div className="w-full max-w-xl mb-10 p-6 rounded-3xl glass-card border border-amber-200 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-red-600 to-amber-500"></div>
          <p className="text-xs uppercase tracking-widest text-amber-800 font-extrabold mb-3">
            Countdown to Grand Celebration
          </p>
          <div className="grid grid-cols-4 gap-2 sm:gap-4">
            <div className="bg-amber-50/80 p-3 rounded-2xl border border-amber-200/80 shadow-sm">
              <span className="block text-2xl sm:text-4xl font-black text-amber-800 font-mono">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="text-[11px] uppercase tracking-wider text-stone-600 font-bold">Days</span>
            </div>
            <div className="bg-amber-50/80 p-3 rounded-2xl border border-amber-200/80 shadow-sm">
              <span className="block text-2xl sm:text-4xl font-black text-amber-800 font-mono">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[11px] uppercase tracking-wider text-stone-600 font-bold">Hours</span>
            </div>
            <div className="bg-amber-50/80 p-3 rounded-2xl border border-amber-200/80 shadow-sm">
              <span className="block text-2xl sm:text-4xl font-black text-amber-800 font-mono">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[11px] uppercase tracking-wider text-stone-600 font-bold">Minutes</span>
            </div>
            <div className="bg-amber-50/80 p-3 rounded-2xl border border-amber-200/80 shadow-sm">
              <span className="block text-2xl sm:text-4xl font-black text-red-600 font-mono">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[11px] uppercase tracking-wider text-stone-600 font-bold">Seconds</span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenRegister}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 via-amber-600 to-red-700 hover:from-red-500 hover:to-amber-500 text-white font-bold text-base shadow-xl shadow-red-600/30 hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group"
          >
            <Sparkles className="w-5 h-5 text-amber-200 group-hover:rotate-12 transition-transform" />
            <span>Register & Get Digital Pass</span>
          </button>

          <a
            href="#schedule"
            className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white hover:bg-amber-50 text-amber-900 border-2 border-amber-300 font-bold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
          >
            <Calendar className="w-5 h-5 text-red-600 group-hover:scale-110 transition-transform" />
            <span>IITR Event Schedule</span>
          </a>

          <a
            href="#culture"
            className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-amber-100/60 hover:bg-amber-100 text-stone-800 border border-amber-200 font-semibold text-base transition-colors flex items-center justify-center gap-2"
          >
            <span>Explore Culture</span>
            <ChevronDown className="w-4 h-4 text-stone-600" />
          </a>
        </div>

        {/* Highlight Stats Ribbon */}
        <div className="mt-14 pt-8 border-t border-amber-200/80 w-full grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          <div className="p-3 bg-white/70 rounded-2xl border border-amber-200/60 shadow-sm backdrop-blur-sm">
            <span className="block text-2xl sm:text-3xl font-black text-amber-800 font-serif-royal">13 Districts</span>
            <span className="text-xs text-stone-600 font-bold">Garhwal & Kumaon United</span>
          </div>
          <div className="p-3 bg-white/70 rounded-2xl border border-amber-200/60 shadow-sm backdrop-blur-sm">
            <span className="block text-2xl sm:text-3xl font-black text-red-600 font-serif-royal">32+ Taals</span>
            <span className="text-xs text-stone-600 font-bold">Sacred Dhol-Damau Rhythms</span>
          </div>
          <div className="p-3 bg-white/70 rounded-2xl border border-amber-200/60 shadow-sm backdrop-blur-sm">
            <span className="block text-2xl sm:text-3xl font-black text-amber-800 font-serif-royal">Pahadi Dawat</span>
            <span className="text-xs text-stone-600 font-bold">Kafuli, Churkani & Bal Mithai</span>
          </div>
          <div className="p-3 bg-white/70 rounded-2xl border border-amber-200/60 shadow-sm backdrop-blur-sm">
            <span className="block text-2xl sm:text-3xl font-black text-red-600 font-serif-royal">IIT Roorkee</span>
            <span className="text-xs text-stone-600 font-bold">Est. 1847 • Himalayan Pride</span>
          </div>
        </div>
      </div>
    </section>
  );
};
