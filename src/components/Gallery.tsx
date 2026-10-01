import React, { useState } from 'react';
import { Camera, X, MapPin } from 'lucide-react';
import choliyaImage from '../assets/choliya.jpeg';
import devasthaliimage from '../assets/devasthali2.jpeg';
import jaunsarImage from '../assets/jaunsar.jpeg';
import pushpeshImage from '../assets/pushpesh pant.jpeg';
import felicitationImage from '../assets/felicitation.jpeg';
import dayImage from '../assets/day.jpeg';



import { folkAudio } from '../utils/audio';

interface GalleryPhoto {
  id: string;
  title: string;
  category: 'dance' | 'nature' | 'iitr' | 'craft' | 'guest';
  location: string;
  image: string;
  caption: string;
}

const PHOTOS: GalleryPhoto[] = [
  {
    id: '1',
    title: 'Chholiya Warrior Troupes',
    category: 'dance',
    location: 'Kumaon Hills',
    image: choliyaImage,
    caption: 'Fierce Rajput sword dancers adorned in scarlet turbans and brass shields performing at the annual festival.',
  },
  {
    id: '2',
    title: 'Devasthali Group Performance',
    category: 'dance',
    location: 'Mac, IITR',
    image: devasthaliimage,
    caption: 'Experienced the high-octane energy and cultural majesty of Devasthali Group\'s performances',
  },
  {
    id: '3',
    title: 'Jaunsari Dance',
    category: 'dance',
    location: 'MAC, IITR',
    image: jaunsarImage,
    caption: 'Jaunsari team performing on their traditional folk music with live instrumentation at the IIT Roorkee campus.',
  },
  {
    id: '4',
    title: 'Prof. Pushpesh Pant',
    category: 'guest',
    location: 'MAC, IITR',
    image: pushpeshImage,
    caption: 'Prof. Pushpesh Pant ji is a Padma Shri awardee, distinguished academic, and revered food historian who beautifully bridges the worlds of international relations and India\'s rich culinary heritage',
  },
  {
    id: '5',
    title: 'Felicitation of Chief guest by Director sir',
    category: 'guest',
    location: 'MAC IITR',
    image: felicitationImage,
    caption: 'The Chief Guest was felicitated by Director sir at the MAC, IITR. The event was graced by the presence of esteemed dignitaries and faculty members, celebrating the rich cultural heritage of Uttarakhand.',
  },
  {
    id: '6',
    title: 'Celebration',
    category: 'nature',
    location: 'Boat Club, IITR',
    image: dayImage,
    caption: 'Over 600 species of high altitude wild flora blossoming along glacial meltwater streams.',
  },
  {
    id: '7',
    title: 'Pahadi Dawat Banquet at IITR',
    category: 'iitr',
    location: 'SAC Lawns, IIT Roorkee',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80',
    caption: 'Students and professors enjoying slow-cooked Kafuli, Bhatt ki Churkani, and piping hot Jhangore ki Kheer.',
  },
  {
    id: '8',
    title: 'Tehri Nathuli Goldsmithing',
    category: 'craft',
    location: 'Srinagar Garhwal',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=80',
    caption: 'Monumental 24-carat filigree gold bridal nose ring hand-carved with dancing peacock motifs.',
  },
];

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const filteredPhotos = activeFilter === 'all'
    ? PHOTOS
    : PHOTOS.filter(p => p.category === activeFilter);

  const handleOpenPhoto = (photo: GalleryPhoto) => {
    setSelectedPhoto(photo);
    folkAudio.playTempleBell();
  };

  return (
    <section id="gallery" className="py-20 relative bg-[#FFFDF9] border-t border-amber-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 border border-red-300 text-red-800 text-xs font-bold mb-3 shadow-sm">
            <Camera className="w-3.5 h-3.5 text-red-600" />
            <span>Visual Spectacle & IITR Moments</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 mb-3">
            <span className="font-pahadi-display text-red-700">स्मृतियों का संगम</span>
            <span className="block font-serif-royal text-xl sm:text-3xl text-stone-800 mt-1 font-bold">
              Celebration Gallery & Memories
            </span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-normal">
            Glimpses of sacred peaks, folk dancers, Aipan art, and vibrant celebration traditions across the IIT Roorkee campus.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'dance', label: 'Folk Dances' },
            { id: 'nature', label: 'Sacred Himalayas' },
            { id: 'iitr', label: 'IIT Roorkee' },
            { id: 'craft', label: 'Art & Jewelry' },
            { id: 'guest', label: 'Guests & Honors' },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeFilter === f.id
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'bg-white text-stone-700 hover:text-amber-800 hover:bg-amber-50 border border-amber-200 shadow-sm'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Masonry-Style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => handleOpenPhoto(photo)}
              className="group relative h-64 rounded-3xl overflow-hidden cursor-pointer border border-amber-200 shadow-md hover:shadow-2xl transition-all"
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"></div>

              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-extrabold text-amber-900 border border-amber-300 shadow-sm flex items-center gap-1">
                  <MapPin className="w-2.5 h-2.5 text-red-600" />
                  {photo.location}
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3">
                <h4 className="text-sm font-bold text-white font-serif-royal drop-shadow-md">
                  {photo.title}
                </h4>
                <p className="text-[11px] text-stone-200 line-clamp-2 mt-0.5 font-normal">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
            <div className="relative max-w-4xl w-full bg-white border-2 border-amber-300 rounded-3xl overflow-hidden shadow-2xl text-stone-900">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors shadow-md"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[65vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-contain max-h-[65vh]"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold border border-amber-300 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-red-600" />
                    {selectedPhoto.location}
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-stone-900 font-serif-royal mb-1">
                  {selectedPhoto.title}
                </h3>
                <p className="text-stone-600 text-sm">
                  {selectedPhoto.caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
