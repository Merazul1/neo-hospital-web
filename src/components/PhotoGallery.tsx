import React, { useState, useEffect, useCallback } from 'react';
import { 
  Camera, Eye, X, ChevronLeft, ChevronRight, ZoomIn, 
  Phone, Calendar, CheckCircle2, Building, ShieldCheck, 
  Sparkles, Layers, Maximize2 
} from 'lucide-react';
import { GALLERY_PHOTOS, GALLERY_CATEGORIES, GalleryPhoto } from '../data/galleryData';
import { HOSPITAL_INFO } from '../data/hospitalData';

interface PhotoGalleryProps {
  onOpenAppointment: (dept?: string) => void;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ onOpenAppointment }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  // Filter photos based on selected category
  const filteredPhotos = GALLERY_PHOTOS.filter((photo) => 
    selectedCategory === 'all' || photo.category === selectedCategory
  );

  const activePhoto = activePhotoIndex !== null ? filteredPhotos[activePhotoIndex] : null;

  // Navigation handlers for Lightbox
  const handlePrev = useCallback(() => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) => 
      prev !== null ? (prev === 0 ? filteredPhotos.length - 1 : prev - 1) : null
    );
  }, [activePhotoIndex, filteredPhotos.length]);

  const handleNext = useCallback(() => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) => 
      prev !== null ? (prev === filteredPhotos.length - 1 ? 0 : prev + 1) : null
    );
  }, [activePhotoIndex, filteredPhotos.length]);

  const handleClose = () => {
    setActivePhotoIndex(null);
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex, handlePrev, handleNext]);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-white relative overflow-hidden border-t border-slate-100">
      
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-50/50 rounded-full blur-3xl pointer-events-none -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-50/40 rounded-full blur-3xl pointer-events-none -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Camera className="w-4 h-4 text-teal-600" />
            <span>Hospital Photo Tour &amp; Facility Gallery</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Explore Our Modern Hospital &amp; Surgical Facilities
          </h2>
          
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Take a visual tour of NEO Hospital at 3, Pratap Nagar, Tedhi Pulia, Ring Road, Lucknow. 
            View authentic photographs of our 24/7 emergency facade, laminar modular operating theaters, 
            intensive care units, patient rooms, and official hospital directories.
          </p>

          <p className="text-xs sm:text-sm text-teal-700 font-semibold">
            नियो हॉस्पिटल के आधुनिक भवन, मॉड्यूलर ऑपरेशन थिएटर, आईसीयू एवं स्वागत कक्ष की वास्तविक तस्वीरें।
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {GALLERY_CATEGORIES.map((cat) => {
            const count = cat.id === 'all' 
              ? GALLERY_PHOTOS.length 
              : GALLERY_PHOTOS.filter(p => p.category === cat.id).length;
            const isActive = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 shadow-sm ${
                  isActive
                    ? 'bg-teal-600 text-white shadow-teal-600/30 shadow-md ring-2 ring-teal-600 ring-offset-2'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200 hover:border-slate-300'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-extrabold ${
                  isActive ? 'bg-teal-700/80 text-white' : 'bg-slate-200 text-slate-600'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setActivePhotoIndex(index)}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col transform hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                />

                {/* Dark Vignette Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3.5">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold text-white bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20">
                      {photo.categoryLabel}
                    </span>
                    <span className="p-1.5 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition">
                      <ZoomIn className="w-4 h-4" />
                    </span>
                  </div>

                  <div className="text-white space-y-1">
                    <p className="text-xs font-bold leading-snug line-clamp-2 drop-shadow">
                      {photo.titleHi}
                    </p>
                    <span className="text-[10px] text-teal-300 flex items-center gap-1 font-semibold">
                      <Eye className="w-3 h-3" /> Click to enlarge &amp; read details
                    </span>
                  </div>
                </div>

                {/* Featured Badge if applicable */}
                {photo.featured && (
                  <div className="absolute top-2.5 left-2.5 group-hover:opacity-0 transition-opacity">
                    <span className="inline-flex items-center gap-1 bg-red-600/95 text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md shadow-sm backdrop-blur-sm">
                      <Sparkles className="w-3 h-3" /> Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Card Meta Content */}
              <div className="p-4 flex flex-col flex-grow justify-between bg-white">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-700 block">
                    {photo.categoryLabelHi}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors line-clamp-2 leading-snug">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {photo.caption}
                  </p>
                </div>

                {/* Badges strip */}
                <div className="flex flex-wrap gap-1.5 pt-3 mt-3 border-t border-slate-100">
                  {photo.badges.slice(0, 2).map((b, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded"
                    >
                      {b}
                    </span>
                  ))}
                  {photo.badges.length > 2 && (
                    <span className="text-[10px] font-semibold text-slate-400 self-center">
                      +{photo.badges.length - 2}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Hospital Reassurance Strip */}
        <div className="mt-12 p-6 bg-slate-50 rounded-3xl border border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-md">
              <Building className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">
                Plan an In-Person Hospital Visit or Consultation
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Located on Ring Road, 3 Pratap Nagar, Tedhi Pulia, Lucknow. 24/7 Emergency &amp; Ambulance dispatch ready.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => onOpenAppointment()}
              className="flex-1 md:flex-none bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow transition flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Doctor OPD</span>
            </button>
            <a
              href={`tel:${HOSPITAL_INFO.helpline}`}
              className="flex-1 md:flex-none bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow transition flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {HOSPITAL_INFO.helpline}</span>
            </a>
          </div>
        </div>

      </div>

      {/* Lightbox Modal for Fullscreen Photo Viewing */}
      {activePhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={handleClose}
        >
          <div 
            className="bg-slate-900 border border-slate-800 rounded-3xl max-w-5xl w-full max-h-[94vh] overflow-hidden shadow-2xl flex flex-col relative text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-5 py-3.5 border-b border-slate-800 flex items-center justify-between bg-slate-900/90 shrink-0">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-400 bg-teal-950/60 border border-teal-800/60 px-2.5 py-1 rounded-md">
                  {activePhoto.categoryLabel}
                </span>
                <span className="text-xs text-slate-400 hidden sm:inline">
                  Photo {activePhotoIndex !== null ? activePhotoIndex + 1 : 0} of {filteredPhotos.length}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={activePhoto.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
                  title="Open full resolution in new tab"
                >
                  <Maximize2 className="w-4 h-4" />
                </a>
                <button
                  onClick={handleClose}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image Viewer Area */}
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] max-h-[62vh]">
              <img
                src={activePhoto.src}
                alt={activePhoto.alt}
                className="max-w-full max-h-[60vh] object-contain select-none"
              />

              {/* Prev / Next Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white transition backdrop-blur-sm border border-white/10 shadow-lg"
                aria-label="Previous Photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white transition backdrop-blur-sm border border-white/10 shadow-lg"
                aria-label="Next Photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Bottom Metadata & Clinical Explanation */}
            <div className="p-5 sm:p-6 bg-slate-900 space-y-3 shrink-0 overflow-y-auto max-h-[28vh]">
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {activePhoto.title}
                </h3>
                <p className="text-xs sm:text-sm text-teal-400 font-semibold">
                  {activePhoto.titleHi}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activePhoto.caption}
              </p>

              {/* Badges and CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {activePhoto.badges.map((b, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-semibold bg-slate-800 text-slate-300 border border-slate-700 px-2 py-0.5 rounded-md"
                    >
                      {b}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => {
                      handleClose();
                      onOpenAppointment();
                    }}
                    className="bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition shadow flex items-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5" /> Book Consultation
                  </button>
                  <a
                    href={`tel:${HOSPITAL_INFO.helpline}`}
                    className="bg-red-600 hover:bg-red-500 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition shadow flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" /> 24/7 Helpline
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
