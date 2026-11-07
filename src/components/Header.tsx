import React, { useState, useRef, useEffect } from 'react';
import { 
  Phone, MapPin, Menu, X, Calendar, ChevronDown, Activity, 
  Pill, ShieldAlert, Bone, Eye, Brain, Stethoscope, Clock,
  Sparkles, CheckCircle2
} from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

interface HeaderProps {
  onOpenAppointment: (dept?: string) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAppointment, activeSection, setActiveSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [specialtiesDropdownOpen, setSpecialtiesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSpecialtiesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    setSpecialtiesDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md shadow-sm border-b border-slate-200/80 w-full max-w-full overflow-x-clip transition-all">
      
      {/* 1. Top Emergency Utility Bar */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-teal-950 text-white py-1.5 px-3 sm:px-6 w-full max-w-full overflow-hidden border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          
          {/* Left: 24/7 Status & Physical Address */}
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="flex items-center gap-1.5 text-teal-300 font-bold shrink-0 text-[11px] sm:text-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>24/7 Emergency &amp; Trauma Ready</span>
            </span>

            <span className="hidden lg:flex items-center gap-1.5 text-slate-300 text-xs truncate">
              <span className="text-slate-600">•</span>
              <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span className="truncate">3, Pratap Nagar, Tedhi Pulia, Ring Road, Lucknow – 226022</span>
            </span>
          </div>

          {/* Right: Quick Emergency Ambulance Hotline */}
          <div className="flex items-center shrink-0 ml-auto">
            <a 
              href={`tel:${HOSPITAL_INFO.helpline}`}
              className="flex items-center gap-1.5 font-bold text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded-full shadow-sm transition text-xs whitespace-nowrap"
              title="Call 24/7 Emergency Helpline"
            >
              <Phone className="w-3 h-3 text-white animate-bounce shrink-0" />
              <span>24/7 Helpline: <span className="underline font-black tracking-wide">{HOSPITAL_INFO.helpline}</span></span>
            </a>
          </div>

        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="w-full max-w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between gap-4">
          
          {/* Brand Logo & Name (Protected with shrink-0, never collides) */}
          <a 
            href="#home" 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 shrink-0 select-none group"
          >
            <img 
              src="/images/neo-logo.png" 
              alt="NEO Hospital Logo" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105 shrink-0" 
            />
            <div className="flex flex-col shrink-0 justify-center">
              <div className="flex items-center gap-1.5 leading-none">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">NEO</span>
                <span className="text-xl sm:text-2xl font-black tracking-tight text-red-600">HOSPITAL</span>
              </div>
              <span className="text-[9px] sm:text-[10px] font-bold text-teal-700 tracking-wider uppercase mt-1">
                Superspeciality &amp; Cancer Center
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Clean, streamlined, 0 overlapping) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            
            {/* Specialties & Facilities Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setSpecialtiesDropdownOpen(!specialtiesDropdownOpen)}
                onMouseEnter={() => setSpecialtiesDropdownOpen(true)}
                className={`px-3 py-2 text-xs xl:text-sm font-bold rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  activeSection === 'facilities' || activeSection === 'surgeries' || activeSection === 'cancer-center' || activeSection === 'critical-care' || specialtiesDropdownOpen
                    ? 'text-teal-800 bg-teal-50 ring-1 ring-teal-200'
                    : 'text-slate-700 hover:text-teal-700 hover:bg-slate-100/80'
                }`}
              >
                <span>Specialties &amp; Facilities</span>
                <span className="text-[10px] bg-teal-100 text-teal-800 px-1.5 py-0.2 rounded font-extrabold">15</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${specialtiesDropdownOpen ? 'rotate-180 text-teal-600' : 'text-slate-400'}`} />
              </button>

              {/* Mega Dropdown Menu */}
              {specialtiesDropdownOpen && (
                <div 
                  onMouseLeave={() => setSpecialtiesDropdownOpen(false)}
                  className="absolute left-0 mt-2 w-[480px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-150 grid grid-cols-2 gap-3"
                >
                  {/* Left Column: Emergency & Critical Specialities */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 block px-2 mb-1">
                      Critical &amp; Oncology
                    </span>
                    <a
                      href="#critical-care"
                      onClick={() => handleNavClick('critical-care')}
                      className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-teal-50/80 text-xs font-semibold text-slate-800 transition"
                    >
                      <div className="w-7 h-7 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                        <Activity className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 block">ICU &amp; Ventilator</span>
                        <span className="text-[10px] text-slate-500 font-normal">आई.सी.यू., एन.आई.सी.यू.</span>
                      </div>
                    </a>

                    <a
                      href="#cancer-center"
                      onClick={() => handleNavClick('cancer-center')}
                      className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-teal-50/80 text-xs font-semibold text-slate-800 transition"
                    >
                      <div className="w-7 h-7 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                        <Pill className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 block">Chemotherapy Daycare</span>
                        <span className="text-[10px] text-slate-500 font-normal">कीमोथेरेपी यूनिट</span>
                      </div>
                    </a>

                    <a
                      href="#cancer-center"
                      onClick={() => handleNavClick('cancer-center')}
                      className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-teal-50/80 text-xs font-semibold text-slate-800 transition"
                    >
                      <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                        <ShieldAlert className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 block">Surgical Oncology</span>
                        <span className="text-[10px] text-slate-500 font-normal">कैंसर सर्जरी</span>
                      </div>
                    </a>
                  </div>

                  {/* Right Column: Surgical & Clinical */}
                  <div className="space-y-1 border-l border-slate-100 pl-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 block px-2 mb-1">
                      Advanced Surgery
                    </span>
                    <a
                      href="#surgeries"
                      onClick={() => handleNavClick('surgeries')}
                      className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-teal-50/80 text-xs font-semibold text-slate-800 transition"
                    >
                      <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                        <Bone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 block">Orthopedics &amp; Joint</span>
                        <span className="text-[10px] text-slate-500 font-normal">C-ARM घुटना व कूल्हा</span>
                      </div>
                    </a>

                    <a
                      href="#surgeries"
                      onClick={() => handleNavClick('surgeries')}
                      className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-teal-50/80 text-xs font-semibold text-slate-800 transition"
                    >
                      <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                        <Eye className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 block">Laparoscopic Surgery</span>
                        <span className="text-[10px] text-slate-500 font-normal">दूरबीन द्वारा आपरेशन</span>
                      </div>
                    </a>

                    <a
                      href="#doctors"
                      onClick={() => handleNavClick('doctors')}
                      className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-teal-50/80 text-xs font-semibold text-slate-800 transition"
                    >
                      <div className="w-7 h-7 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                        <Brain className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 block">Neuro Surgery</span>
                        <span className="text-[10px] text-slate-500 font-normal">मस्तिष्क एवं रीढ़ रोग</span>
                      </div>
                    </a>
                  </div>

                  {/* Dropdown Footer CTA */}
                  <div className="col-span-2 pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500 font-medium">All 15 board-verified hospital facilities</span>
                    <a
                      href="#facilities"
                      onClick={() => handleNavClick('facilities')}
                      className="text-teal-700 hover:text-teal-800 text-xs font-bold hover:underline flex items-center gap-1"
                    >
                      <span>Explore Facilities Board</span>
                      <span>&rarr;</span>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Doctors & OPD */}
            <a
              href="#doctors"
              onClick={() => handleNavClick('doctors')}
              className={`px-3 py-2 text-xs xl:text-sm font-bold rounded-xl transition-all whitespace-nowrap ${
                activeSection === 'doctors'
                  ? 'text-teal-800 bg-teal-50 ring-1 ring-teal-200'
                  : 'text-slate-700 hover:text-teal-700 hover:bg-slate-100/80'
              }`}
            >
              Doctors &amp; OPD
            </a>

            {/* Photo Gallery */}
            <a
              href="#gallery"
              onClick={() => handleNavClick('gallery')}
              className={`px-3 py-2 text-xs xl:text-sm font-bold rounded-xl transition-all whitespace-nowrap ${
                activeSection === 'gallery'
                  ? 'text-teal-800 bg-teal-50 ring-1 ring-teal-200'
                  : 'text-slate-700 hover:text-teal-700 hover:bg-slate-100/80'
              }`}
            >
              Photo Gallery
            </a>

            {/* Cashless TPA */}
            <a
              href="#patient-guide"
              onClick={() => handleNavClick('patient-guide')}
              className={`px-3 py-2 text-xs xl:text-sm font-bold rounded-xl transition-all whitespace-nowrap ${
                activeSection === 'patient-guide'
                  ? 'text-teal-800 bg-teal-50 ring-1 ring-teal-200'
                  : 'text-slate-700 hover:text-teal-700 hover:bg-slate-100/80'
              }`}
            >
              Cashless TPA
            </a>

            {/* Contact & Map */}
            <a
              href="#contact"
              onClick={() => handleNavClick('contact')}
              className={`px-3 py-2 text-xs xl:text-sm font-bold rounded-xl transition-all whitespace-nowrap ${
                activeSection === 'contact'
                  ? 'text-teal-800 bg-teal-50 ring-1 ring-teal-200'
                  : 'text-slate-700 hover:text-teal-700 hover:bg-slate-100/80'
              }`}
            >
              Contact &amp; Map
            </a>

          </nav>

          {/* Right Action: Clean Responsive Actions */}
          <div className="flex items-center gap-2 shrink-0">
            
            {/* Desktop & Tablet: Book Appointment Button */}
            <button
              onClick={() => onOpenAppointment()}
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all shrink-0 whitespace-nowrap"
            >
              <Calendar className="w-4 h-4 shrink-0" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile-only Quick Emergency Call Icon */}
            <a
              href={`tel:${HOSPITAL_INFO.helpline}`}
              className="sm:hidden p-2 rounded-xl bg-red-50 text-red-600 border border-red-200 shrink-0"
              title="Call Emergency"
              aria-label="Call Emergency Helpline"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Hamburger Menu Toggle (for viewports below lg) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none shrink-0 border border-slate-200"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-red-600" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* 3. Mobile / Tablet Responsive Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top-3 duration-200 max-h-[85vh] overflow-y-auto w-full">
          
          {/* Emergency Alert Box inside Mobile Nav */}
          <div className="bg-red-50 border border-red-200 p-3 rounded-2xl flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block">
                24/7 Emergency &amp; Ambulance
              </span>
              <a href={`tel:${HOSPITAL_INFO.helpline}`} className="text-lg font-black text-red-600">
                {HOSPITAL_INFO.helpline}
              </a>
            </div>
            <a 
              href={`tel:${HOSPITAL_INFO.helpline}`}
              className="bg-red-600 hover:bg-red-700 text-white px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow"
            >
              <Phone className="w-3.5 h-3.5" /> Call Now
            </a>
          </div>

          {/* Navigation Links list */}
          <div className="space-y-1">
            {[
              { label: "Home", href: "#home", id: "home" },
              { label: "All 15 Facilities (सुविधाएं)", href: "#facilities", id: "facilities" },
              { label: "Cancer Center (कीमोथेरेपी / कैंसर सर्जरी)", href: "#cancer-center", id: "cancer-center", badge: "Specialized" },
              { label: "Critical Care (ICU / NICU / वेंटीलेटर)", href: "#critical-care", id: "critical-care", badge: "24/7" },
              { label: "Surgeries & Joint Replacement (दूरबीन आपरेशन)", href: "#surgeries", id: "surgeries" },
              { label: "Doctors & OPD Schedule (34 विशेषज्ञ)", href: "#doctors", id: "doctors" },
              { label: "Hospital Photo Gallery (चित्र दीर्घा)", href: "#gallery", id: "gallery", badge: "Photos" },
              { label: "North Lucknow Catchment Areas", href: "#catchment", id: "catchment" },
              { label: "Cashless TPA & Visitor Guidelines", href: "#patient-guide", id: "patient-guide" },
              { label: "Location Map & Directions", href: "#contact", id: "contact" }
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.id)}
                className="flex items-center justify-between px-3.5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-teal-50 hover:text-teal-700 rounded-xl transition"
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${
                    item.badge === '24/7' ? 'bg-red-100 text-red-700' : 'bg-teal-100 text-teal-800'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
          </div>

          {/* Direct OPD CTA in mobile drawer */}
          <div className="pt-2">
            <button
              onClick={() => {
                onOpenAppointment();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-xl text-center shadow flex items-center justify-center gap-2 text-sm"
            >
              <Calendar className="w-4 h-4" /> Book OPD / Inpatient Consultation
            </button>
          </div>

        </div>
      )}
    </header>
  );
};
