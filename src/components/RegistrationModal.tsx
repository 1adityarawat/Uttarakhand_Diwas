import React, { useState } from 'react';
import { X, Sparkles, Check, Download, QrCode, Calendar, MapPin, User, Mail, School, Utensils } from 'lucide-react';
import confetti from 'canvas-confetti';
import { folkAudio } from '../utils/audio';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface RegistrationFormData {
  fullName: string;
  affiliation: string;
  rollOrDept: string;
  hostel: string;
  email: string;
  phone: string;
  wantsFoodPass: boolean;
  activities: string[];
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    affiliation: 'IIT Roorkee Student',
    rollOrDept: '',
    hostel: 'Govind Bhawan',
    email: '',
    phone: '',
    wantsFoodPass: true,
    activities: ['Pahadi Dawat Feast', 'Mega Cultural Evening'],
  });

  const [isGenerated, setIsGenerated] = useState(false);
  const [passId, setPassId] = useState('');

  if (!isOpen) return null;

  const handleActivityToggle = (act: string) => {
    if (formData.activities.includes(act)) {
      setFormData({ ...formData, activities: formData.activities.filter(a => a !== act) });
    } else {
      setFormData({ ...formData, activities: [...formData.activities, act] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim()) {
      alert('Please fill in your name and email');
      return;
    }

    const randomId = `IITR-UKD-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setPassId(randomId);
    setIsGenerated(true);

    folkAudio.playTempleBell();
    setTimeout(() => {
      folkAudio.playRansingha();
    }, 300);

    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#F59E0B', '#EF4444', '#10B981', '#ffffff'],
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white border-2 border-amber-300 rounded-3xl p-6 sm:p-8 shadow-2xl text-stone-900 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-stone-100 text-stone-600 hover:text-stone-900 hover:bg-stone-200 transition-colors shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        {!isGenerated ? (
          <div>
            {/* Modal Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold mb-2 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>Free Entry & Pahadi Dawat Registration</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif-royal">
                Uttarakhand Diwas Digital Pass
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 font-medium">
                Register to attend the celebrations, secure your authentic Pahadi Dawat lunch token, and participate in campus workshops.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-stone-800 block mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-stone-400 absolute left-3 top-3.5" />
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Priyanshu Joshi"
                    className="w-full pl-9 pr-3 py-2.5 rounded-2xl bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:outline-none focus:border-amber-500 focus:bg-white shadow-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-stone-800 block mb-1">
                    Affiliation
                  </label>
                  <select
                    value={formData.affiliation}
                    onChange={(e) => setFormData({ ...formData, affiliation: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-2xl bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:outline-none focus:border-amber-500 focus:bg-white shadow-sm"
                  >
                    <option>IIT Roorkee Student</option>
                    <option>IIT Roorkee Faculty / Staff</option>
                    <option>IIT Roorkee Alumnus</option>
                    <option>Visiting Guest / Cultural Enthusiast</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-800 block mb-1">
                    Roll No / Department
                  </label>
                  <div className="relative">
                    <School className="w-4 h-4 text-stone-400 absolute left-3 top-3.5" />
                    <input
                      type="text"
                      value={formData.rollOrDept}
                      onChange={(e) => setFormData({ ...formData, rollOrDept: e.target.value })}
                      placeholder="e.g. 23114088 / CSE"
                      className="w-full pl-9 pr-3 py-2.5 rounded-2xl bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:outline-none focus:border-amber-500 focus:bg-white shadow-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-stone-800 block mb-1">
                    Hostel / Bhawan (IITR)
                  </label>
                  <select
                    value={formData.hostel}
                    onChange={(e) => setFormData({ ...formData, hostel: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-2xl bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:outline-none focus:border-amber-500 focus:bg-white shadow-sm"
                  >
                    <option>Govind Bhawan</option>
                    <option>Ravindra Bhawan</option>
                    <option>Kasturba Bhawan</option>
                    <option>Sarojini Bhawan</option>
                    <option>Rajendra Bhawan</option>
                    <option>Cautley Bhawan</option>
                    <option>Radhakrishnan Bhawan</option>
                    <option>Jawahar Bhawan</option>
                    <option>Azad Bhawan</option>
                    <option>Faculty/Campus Residence</option>
                    <option>Non-Resident / Guest</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-800 block mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-3.5" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@iitr.ac.in"
                      className="w-full pl-9 pr-3 py-2.5 rounded-2xl bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:outline-none focus:border-amber-500 focus:bg-white shadow-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Food Preference Checkbox */}
              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-300 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-2.5">
                  <Utensils className="w-5 h-5 text-amber-700 shrink-0" />
                  <div>
                    <span className="text-xs font-extrabold text-stone-900 block">
                      Include Complimentary Pahadi Dawat Token?
                    </span>
                    <span className="text-[11px] text-stone-600 font-medium">
                      Authentic Kafuli, Bhatt ki Churkani & Bal Mithai feast.
                    </span>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={formData.wantsFoodPass}
                  onChange={(e) => setFormData({ ...formData, wantsFoodPass: e.target.checked })}
                  className="w-5 h-5 text-amber-600 rounded bg-white border-stone-300"
                />
              </div>

              {/* Activities Interest */}
              <div>
                <label className="text-xs font-bold text-stone-800 block mb-2">
                  Select Activities You Plan to Attend:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'Devbhoomi Shobha Yatra',
                    'Pahadi Dawat Feast',
                    'Aipan Art Studio Workshop',
                    'Veshbhusha Traditional Ramp Walk',
                    'Mega Cultural Evening & Negi Ji Tribute',
                    'Bonfire & Community Jhora',
                  ].map((act) => (
                    <button
                      type="button"
                      key={act}
                      onClick={() => handleActivityToggle(act)}
                      className={`p-2.5 rounded-xl border text-left text-[11px] font-semibold transition-colors ${
                        formData.activities.includes(act)
                          ? 'bg-amber-100 border-amber-500 text-amber-900 font-bold'
                          : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100'
                      }`}
                    >
                      {act}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-red-600 via-amber-600 to-red-700 hover:from-red-500 hover:to-amber-500 text-white font-bold text-sm shadow-xl shadow-red-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>Generate My Digital Celebration Pass</span>
              </button>
            </form>
          </div>
        ) : (
          /* Generated Pass Badge View in Light Regal Aesthetic */
          <div className="text-center py-2 animate-fadeIn">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-400 text-emerald-900 text-xs font-bold mb-4 shadow-sm">
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span>Registration Confirmed • Welcome to Devbhoomi!</span>
            </div>

            {/* The Pass Card */}
            <div className="relative mx-auto rounded-3xl bg-gradient-to-br from-amber-50 via-white to-amber-100 border-2 border-amber-500 p-6 text-left shadow-2xl overflow-hidden mb-6">
              {/* Pass header banner */}
              <div className="flex items-center justify-between border-b border-amber-300 pb-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-amber-500/20 p-1 border border-amber-400">
                    <img src="/brahmakamal.svg" alt="Brahma Kamal" className="w-full h-full" />
                  </div>
                  <div>
                    <span className="font-pahadi-display text-base text-red-700 font-bold block">
                      उत्तराखण्ड दिवस 2026
                    </span>
                    <span className="text-[10px] text-stone-600 font-bold tracking-wider">
                      IIT ROORKEE DEVBHOOMI FEST
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="px-2.5 py-0.5 rounded bg-red-600 text-white font-mono font-bold text-[10px] shadow-sm">
                    VIP PASS
                  </span>
                  <span className="block text-[11px] font-mono text-amber-900 font-extrabold mt-0.5">
                    {passId}
                  </span>
                </div>
              </div>

              {/* Attendee Details */}
              <div className="grid grid-cols-2 gap-4 text-xs mb-4">
                <div>
                  <span className="text-[10px] text-stone-500 uppercase tracking-wider block font-bold">Attendee</span>
                  <span className="font-extrabold text-stone-900 text-sm">{formData.fullName}</span>
                  <span className="text-[11px] text-amber-800 font-semibold block">{formData.affiliation}</span>
                </div>
                <div>
                  <span className="text-[10px] text-stone-500 uppercase tracking-wider block font-bold">Hostel / Location</span>
                  <span className="font-extrabold text-stone-900">{formData.hostel}</span>
                  <span className="text-[11px] text-stone-600 block">{formData.rollOrDept || 'IIT Roorkee Campus'}</span>
                </div>
              </div>

              {/* Event Time & Venue */}
              <div className="p-3.5 rounded-2xl bg-white border border-amber-200 text-xs mb-4 flex items-center justify-between shadow-sm">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5 text-stone-800 font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-red-600" />
                    <span>Sunday, 9th November 2026</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-stone-600 text-[11px]">
                    <MapPin className="w-3.5 h-3.5 text-red-600" />
                    <span>Thomason Lawn & MAC, IIT Roorkee</span>
                  </div>
                </div>
                <div className="text-right">
                  {formData.wantsFoodPass && (
                    <span className="px-2.5 py-1 rounded-lg bg-amber-100 text-amber-900 border border-amber-300 text-[10px] font-extrabold block">
                      🍱 Food Token Included
                    </span>
                  )}
                </div>
              </div>

              {/* Simulated QR Code & Barcode */}
              <div className="flex items-center justify-between pt-2 border-t border-amber-200">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-xl bg-stone-900 text-white shadow-sm">
                    <QrCode className="w-9 h-9" />
                  </div>
                  <div className="text-[10px] text-stone-600">
                    <span className="font-medium">Scan at MAC / SAC entrance</span>
                    <span className="block font-mono text-red-700 font-bold">VERIFIED #IITR2026</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-pahadi-display text-sm text-red-700 font-bold">
                    जय बद्री विशाल
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs sm:text-sm shadow-md transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Save / Print Pass</span>
              </button>
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs sm:text-sm transition-colors border border-stone-200"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
