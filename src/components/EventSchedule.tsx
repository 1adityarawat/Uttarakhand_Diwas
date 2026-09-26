import React, { useState } from 'react';
import { IITR_SCHEDULE } from '../data/cultureData';
import {
  Clock,
  MapPin,
  Sparkles,
  CalendarPlus,
  UtensilsCrossed,
  Flame,
  Music,
  Users,
  Palette,
  Shirt,
  CheckCircle,
} from 'lucide-react';
import { folkAudio } from '../utils/audio';

export const EventSchedule: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [savedEventIds, setSavedEventIds] = useState<string[]>([]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-600" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-red-600" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5 text-amber-700" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-red-600" />;
      case 'Shirt':
        return <Shirt className="w-5 h-5 text-purple-600" />;
      case 'Music':
        return <Music className="w-5 h-5 text-emerald-700" />;
      case 'Users':
        return <Users className="w-5 h-5 text-amber-800" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-600" />;
    }
  };

  const filteredSchedule = filterCategory === 'all'
    ? IITR_SCHEDULE
    : IITR_SCHEDULE.filter(evt => evt.category === filterCategory);

  const toggleSaveEvent = (title: string) => {
    folkAudio.playTempleBell();
    if (savedEventIds.includes(title)) {
      setSavedEventIds(savedEventIds.filter(id => id !== title));
    } else {
      setSavedEventIds([...savedEventIds, title]);
    }
  };

  const handleDownloadCalendar = () => {
    const icsData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//IIT Roorkee//Uttarakhand Diwas 2026//EN
CALSCALE:GREGORIAN
BEGIN:VEVENT
SUMMARY:Uttarakhand Diwas 2026 @ IIT Roorkee
DESCRIPTION:Grand celebration of Devbhoomi culture\\, Chholiya dance\\, Pahadi feast\\, and musical night at IIT Roorkee.
LOCATION:IIT Roorkee Campus (James Thomason Building & MAC)
DTSTART:20261109T043000Z
DTEND:20261109T170000Z
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Uttarakhand-Diwas-IIT-Roorkee.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    folkAudio.playRansingha();
  };

  return (
    <section id="schedule" className="py-24 relative overflow-hidden border-t border-amber-200/80">
      {/* Background Campus Foothills / Himalayan Photo */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&w=2400&q=80"
          alt="Himalayan Campus Foothills"
          className="w-full h-full object-cover filter saturate-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF9]/95 via-white/92 to-[#FFFDF9]/96 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 border border-red-300 text-red-800 text-xs font-bold mb-3 shadow-sm">
            <Clock className="w-3.5 h-3.5 text-red-600" />
            <span>Official Celebration Itinerary</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 mb-3">
            <span className="font-pahadi-display text-red-700">आईआईटी रुड़की कार्यक्रम</span>
            <span className="block font-serif-royal text-xl sm:text-3xl text-stone-800 mt-1 font-bold">
              Celebration Schedule • 9th November
            </span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-normal">
            Join the grand lineup of events from sunrise Shobha Yatra to the nocturnal campfire Jhora on the historic IIT Roorkee campus.
          </p>

          <div className="mt-6 flex justify-center">
            <button
              onClick={handleDownloadCalendar}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white hover:bg-amber-50 text-amber-900 border-2 border-amber-300 text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all group"
            >
              <CalendarPlus className="w-4 h-4 text-amber-600 group-hover:scale-110 transition-transform" />
              <span>Add All Events to Google / Outlook Calendar (.ics)</span>
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Events (7)' },
            { id: 'ceremony', label: 'Inaugural & Rallies' },
            { id: 'food', label: 'Pahadi Dawat' },
            { id: 'cultural', label: 'Veshbhusha & Jhora' },
            { id: 'musical', label: 'Mega Folk Eve' },
            { id: 'interactive', label: 'Art Workshops' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setFilterCategory(cat.id);
                folkAudio.playDamau();
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filterCategory === cat.id
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'bg-white text-stone-700 hover:text-amber-800 hover:bg-amber-50 border border-amber-200 shadow-sm'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-amber-300 ml-4 sm:ml-32 space-y-8 pl-6 sm:pl-10">
          {filteredSchedule.map((evt, index) => {
            const isSaved = savedEventIds.includes(evt.title);
            return (
              <div key={index} className="relative group">
                {/* Timeline Node Icon */}
                <div className="absolute -left-[37px] sm:-left-[53px] top-1.5 w-8 h-8 rounded-full bg-white border-2 border-amber-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  {getIcon(evt.icon)}
                </div>

                {/* Event Card in Bright Light Theme */}
                <div className="bg-white/95 rounded-3xl p-6 sm:p-7 border border-amber-200/90 shadow-md group-hover:border-amber-400 group-hover:shadow-xl transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-xl bg-amber-100 text-amber-900 text-xs font-bold font-mono border border-amber-300">
                        {evt.time}
                      </span>
                      <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
                        • {evt.category}
                      </span>
                    </div>

                    <button
                      onClick={() => toggleSaveEvent(evt.title)}
                      className={`text-xs px-3.5 py-1.5 rounded-xl border flex items-center gap-1.5 transition-colors self-start sm:self-auto font-bold ${
                        isSaved
                          ? 'bg-emerald-100 border-emerald-400 text-emerald-800'
                          : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-amber-50 hover:text-amber-900'
                      }`}
                    >
                      <CheckCircle className={`w-3.5 h-3.5 ${isSaved ? 'text-emerald-600' : 'text-stone-400'}`} />
                      <span>{isSaved ? 'Saved to My Day' : 'Save Event'}</span>
                    </button>
                  </div>

                  <span className="font-pahadi-display text-sm text-red-700 font-bold">
                    {evt.hindiTitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900 font-serif-royal mb-2">
                    {evt.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-red-700 font-semibold mb-3">
                    <MapPin className="w-3.5 h-3.5 text-red-600 shrink-0" />
                    <span>{evt.venue}</span>
                  </div>

                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {evt.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Campus Venues Info Footer in Light Cards */}
        <div className="mt-14 p-6 rounded-3xl bg-white/90 border border-amber-200 shadow-md grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-stone-700">
          <div className="p-3 bg-amber-50/60 rounded-2xl border border-amber-200/60">
            <span className="font-bold text-amber-900 block mb-1 text-sm">🏛️ James Thomason Building</span>
            Starting point for the morning Shobha Yatra and evening open-air star-lit bonfire.
          </div>
          <div className="p-3 bg-amber-50/60 rounded-2xl border border-amber-200/60">
            <span className="font-bold text-amber-900 block mb-1 text-sm">🎭 MAC Auditorium & OAT</span>
            Multi-Activity Centre hosting the grand inaugural, folk fusion concerts, and Aipan studios.
          </div>
          <div className="p-3 bg-amber-50/60 rounded-2xl border border-amber-200/60">
            <span className="font-bold text-amber-900 block mb-1 text-sm">🍲 SAC Lawns</span>
            Student Activity Centre venue hosting the community Pahadi Dawat lunch feast.
          </div>
        </div>
      </div>
    </section>
  );
};
