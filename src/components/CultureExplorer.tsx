import React, { useState } from 'react';
import {
  DANCES_DATA,
  MUSIC_INSTRUMENTS_DATA,
  CUISINE_DATA,
  ATTIRE_CRAFTS_DATA,
  SACRED_HERITAGE_DATA,
  CultureItem,
} from '../data/cultureData';
import { Sparkles, MapPin, CheckCircle, ArrowRight, X } from 'lucide-react';
import { folkAudio } from '../utils/audio';

type CategoryTab = 'dance' | 'music' | 'cuisine' | 'attire' | 'heritage';

export const CultureExplorer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CategoryTab>('dance');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [activeItemModal, setActiveItemModal] = useState<CultureItem | null>(null);

  const getItemsForTab = (tab: CategoryTab): CultureItem[] => {
    switch (tab) {
      case 'dance':
        return DANCES_DATA;
      case 'music':
        return MUSIC_INSTRUMENTS_DATA;
      case 'cuisine':
        return CUISINE_DATA;
      case 'attire':
        return ATTIRE_CRAFTS_DATA;
      case 'heritage':
        return SACRED_HERITAGE_DATA;
      default:
        return DANCES_DATA;
    }
  };

  const currentItems = getItemsForTab(activeTab);
  const filteredItems = selectedRegion === 'All'
    ? currentItems
    : currentItems.filter(item => item.region === selectedRegion || item.region === 'Pan-Uttarakhand');

  const tabs = [
    { id: 'dance' as CategoryTab, name: 'Folk Dances', hindi: 'लोक नृत्य', icon: '💃' },
    { id: 'music' as CategoryTab, name: 'Music & Instruments', hindi: 'संगीत व वाद्य', icon: '🎺' },
    { id: 'cuisine' as CategoryTab, name: 'Pahadi Flavors', hindi: 'पारंपरिक व्यंजन', icon: '🍲' },
    { id: 'attire' as CategoryTab, name: 'Attire & Aipan', hindi: 'वेशभूषा व कला', icon: '👑' },
    { id: 'heritage' as CategoryTab, name: 'Devbhoomi Sacred', hindi: 'तीर्थ एवं धरोहर', icon: '🏔️' },
  ];

  const regions = ['All', 'Garhwal', 'Kumaon', 'Jaunsar-Bawar'];

  const handleCardClick = (item: CultureItem) => {
    setActiveItemModal(item);
    if (activeTab === 'music' || activeTab === 'dance') {
      folkAudio.playHurka();
    } else {
      folkAudio.playTempleBell();
    }
  };

  return (
    <section id="culture" className="py-20 relative bg-[#FFFDF9] border-t border-amber-200/70">
      {/* Background soft photo pattern accent */}
      <div className="absolute inset-0 aipan-pattern-subtle opacity-70 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 border border-red-300 text-red-800 text-xs font-bold mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-red-600" />
            <span>Living Heritage of Devbhoomi</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 mb-3">
            <span className="font-pahadi-display text-red-700">विराट सांस्कृतिक धरोहर</span>
            <span className="block font-serif-royal text-xl sm:text-3xl text-stone-800 mt-1 font-bold">
              Vibrant Culture of Uttarakhand
            </span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-normal">
            From the rugged crests of Garhwal to the pine-scented orchards of Kumaon and the tribal valleys of Jaunsar-Bawar, immerse yourself in our centuries-old arts, sacred dances, and indigenous culinary wisdom.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setSelectedRegion('All');
                folkAudio.playDamau();
              }}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl font-semibold text-xs sm:text-sm transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-red-600 via-amber-600 to-red-700 text-white shadow-lg shadow-red-600/25 scale-105 border-transparent'
                  : 'bg-white text-stone-700 hover:text-amber-800 hover:bg-amber-50/80 border border-amber-200 shadow-sm'
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              <div className="text-left">
                <span className="block font-bold">{tab.name}</span>
                <span className={`block text-[10px] ${activeTab === tab.id ? 'text-amber-100' : 'text-stone-500'}`}>
                  {tab.hindi}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Region Filter Bar */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto py-1">
          <span className="text-xs text-stone-600 font-bold mr-2 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-red-600" /> Filter Region:
          </span>
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedRegion === region
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'bg-white text-stone-600 hover:text-amber-800 border border-amber-200'
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Content Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item)}
              className="group bg-white rounded-3xl overflow-hidden glass-card-hover cursor-pointer border border-amber-200 shadow-md shadow-amber-900/5 flex flex-col justify-between"
            >
              <div>
                {/* Image & Badge Header */}
                <div className="relative h-56 sm:h-60 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-extrabold text-amber-900 border border-amber-300 shadow-sm flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-red-600" />
                      {item.region}
                    </span>
                  </div>

                  {item.badge && (
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 rounded-full bg-red-600/90 backdrop-blur-md text-[11px] font-bold text-white border border-red-400 shadow-sm">
                        {item.badge}
                      </span>
                    </div>
                  )}

                  {/* Card Title on Image */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="font-pahadi-display text-sm text-amber-300 drop-shadow">
                      {item.hindiName}
                    </span>
                    <h3 className="text-xl font-extrabold text-white font-serif-royal drop-shadow-md">
                      {item.name}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5">
                  <p className="text-xs text-amber-700 font-bold italic mb-2.5">
                    "{item.tagline}"
                  </p>
                  <p className="text-stone-600 text-xs sm:text-sm line-clamp-3 mb-4 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {/* Key Features Pill List */}
                  <div className="space-y-1.5 mb-4">
                    {item.keyFeatures.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                        <CheckCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1 font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="px-5 pb-5 pt-0">
                <div className="w-full py-2.5 px-3 rounded-xl bg-amber-50 group-hover:bg-amber-600 group-hover:text-white text-amber-900 border border-amber-200 group-hover:border-amber-600 text-xs font-bold flex items-center justify-between transition-colors shadow-sm">
                  <span>Explore Heritage Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Deep Dive Detail */}
        {activeItemModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white border-2 border-amber-300 rounded-3xl p-6 sm:p-8 shadow-2xl text-stone-900">
              {/* Close Button */}
              <button
                onClick={() => setActiveItemModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-stone-100 text-stone-600 hover:text-stone-900 hover:bg-stone-200 transition-colors shadow-sm"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-extrabold border border-amber-300">
                  {activeItemModal.region}
                </span>
                {activeItemModal.badge && (
                  <span className="px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-bold border border-red-300">
                    {activeItemModal.badge}
                  </span>
                )}
              </div>

              <span className="font-pahadi-display text-base text-red-700">
                {activeItemModal.hindiName}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif-royal mb-1">
                {activeItemModal.name}
              </h3>
              <p className="text-sm font-semibold text-amber-800 italic mb-4">
                "{activeItemModal.tagline}"
              </p>

              <div className="w-full h-64 rounded-2xl overflow-hidden mb-6 border border-stone-200 shadow-md">
                <img
                  src={activeItemModal.image}
                  alt={activeItemModal.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-amber-800 font-bold mb-1">
                    Cultural Lore & Overview
                  </h4>
                  <p className="text-stone-700 text-sm leading-relaxed">
                    {activeItemModal.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider text-amber-800 font-bold mb-2">
                    Key Traditional Elements
                  </h4>
                  <ul className="space-y-2">
                    {activeItemModal.keyFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                        <CheckCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                        <span className="font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
                  <h4 className="text-xs uppercase tracking-wider text-amber-900 font-bold mb-1">
                    Spiritual & Social Significance
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-700 italic">
                    {activeItemModal.culturalSignificance}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200 flex justify-end">
                <button
                  onClick={() => setActiveItemModal(null)}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold text-xs sm:text-sm transition-colors shadow-md"
                >
                  Close & Explore More
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
