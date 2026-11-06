import React, { useState, useRef, useEffect } from 'react';
import { 
  Phone, MapPin, Menu, X, Calendar, ChevronDown, Activity, 
  Pill, ShieldAlert, Bone, Eye, Stethoscope, Clock 
} from 'lucide-react';
import { HOSPITAL_INFO, FACILITIES_BOARD_LIST } from '../data/hospitalData';

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
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md shadow-sm border-b border-slate-100 w-full max-w-full overflow-x-clip transition-all">
      {/* 1. Top Emergency Utility Bar (Zero-overflow layout) */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-teal-950 text-white py-1.5 sm:py-2 px-3 sm:px-6 w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          
          {/* Left: 24/7 Status & Physical Address */}
          <div className="flex items-center gap-2 min-w-0">
            <span className="flex items-center gap-1.5 text-teal-300 font-bold shrink-0 text-[10px] sm:text-xs">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span>24/7 Emergency &amp; ICU</span>
            </span>
            <span className="hidden md:flex items-center gap-1 text-slate-300 text-[11px] truncate">
              <span className="text-slate-600">•</span>
              <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span className="truncate">3, Pratap Nagar, Tedhi Pulia, Ring Road, Lucknow – 226022</span>
            </span>
          </div>

          {/* Right: Helpline Quick Dial */}
          <div className="flex items-center shrink-0 ml-auto">
            <a 
              href={`tel:${HOSPITAL_INFO.helpline}`}
              className="flex items-center gap-1 font-bold text-white bg-red-600 hover:bg-red-700 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-sm transition animate-emergency-glow text-[10px] sm:text-xs whitespace-nowrap"
            >
              <Phone className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white animate-pulse shrink-0" />
              <span>Helpline: <span className="underline tracking-wide font-black">{HOSPITAL_INFO.helpline}</span></span>
            </a>
          </div>

        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between gap-2">
          
          {/* Brand Logo & Title (Responsive, never exceeds container) */}
          <a 
            href="#home" 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 sm:gap-3 shrink min-w-0 select-none group"
          >
            <img 
              src="/images/neo-logo.png" 
              alt="NEO Hospital Logo" 
              className="h-8 sm:h-10 md:h-11 w-auto object-contain transition-transform group-hover:scale-105 shrink-0" 
            />
            <div className="flex flex-col min-w-0 justify-center">
              <div className="flex items-center gap-1 leading-none">
                <span className="text-base sm:text-lg md:text-xl font-black tracking-tight text-slate-900">NEO</span>
                <span className="text-base sm:text-lg md:text-xl font-black tracking-tight text-red-600">HOSPITAL</span>
              </div>
              <span className="text-[8px] sm:text-[10px] font-bold text-teal-700 tracking-wider uppercase mt-0.5 truncate max-w-[180px] sm:max-w-none">
                Superspeciality &amp; Cancer Center
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Visible on lg: 1024px and above) */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 shrink-0">
            
            {/* Specialties & Facilities Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setSpecialtiesDropdownOpen(!specialtiesDropdownOpen)}
                onMouseEnter={() => setSpecialtiesDropdownOpen(true)}
                className={`px-2.5 py-1.5 text-xs xl:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap flex items-center gap-1 ${
                  activeSection === 'facilities' || activeSection === 'surgeries' || specialtiesDropdownOpen
                    ? 'text-teal-700 bg-teal-50'
                    : 'text-slate-700 hover:text-teal-700 hover:bg-slate-50'
                }`}
              >
                <span>Specialties (15)</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${specialtiesDropdownOpen ? 'rotate-180 text-teal-600' : 'text-slate-400'}`} />
              </button>

              {/* Mega Dropdown Menu */}
              {specialtiesDropdownOpen && (
                <div 
                  onMouseLeave={() => setSpecialtiesDropdownOpen(false)}
                  className="absolute left-0 mt-2 w-[440px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-150 grid grid-cols-2 gap-3"
                >
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 block px-2 mb-1">
                      Critical &amp; Oncology
                    </span>
                    <a
                      href="#critical-care"
                      onClick={() => handleNavClick('critical-care')}
                      className="flex items-center gap-2 p-2 rounded-xl hover:bg-slate-50 text-xs font-semibold text-slate-800 transition"
                    >
                      <Activity className="w-4 h-4 text-red-600 shrink-0" />
                      <div>
                        <span>ICU, NICU &amp; Ventilator</span>
                        <span className="block text-[10px] text-slate-400 font-normal">आई.सी.यू. एवं वेंटीलेटर</span>
                      </div>
                    </a>
                    <a
                      href="#cancer-center"
                      onClick={() => handleNavClick('cancer-center')}
                      className="flex items-center gap-2 p-2 rounded-xl hover:bg-slate-50 text-xs font-semibold text-slate-800 transition"
                    >
                      <Pill className="w-4 h-4 text-teal-600 shrink-0" />
                      <div>
                        <span>Chemotherapy Daycare</span>
                        <span className="block text-[10px] text-slate-400 font-normal">कीमोथेरेपी यूनिट</span>
                      </div>
                    </a>
                    <a
                      href="#cancer-center"
                      onClick={() => handleNavClick('cancer-center')}
                      className="flex items-center gap-2 p-2 rounded-xl hover:bg-slate-50 text-xs font-semibold text-slate-800 transition"
                    >
                      <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
                      <div>
                        <span>Cancer Surgery</span>
                        <span className="block text-[10px] text-slate-400 font-normal">कैंसर सर्जरी</span>
                      </div>
                    </a>
                  </div>

                  <div className="space-y-1.5 border-l border-slate-100 pl-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 block px-2 mb-1">
                      Surgical Specialties
                    </span>
                    <a
                      href="#surgeries"
                      onClick={() => handleNavClick('surgeries')}
                      className="flex items-center gap-2 p-2 rounded-xl hover:bg-slate-50 text-xs font-semibold text-slate-800 transition"
                    >
                      <Bone className="w-4 h-4 text-teal-600 shrink-0" />
                      <div>
                        <span>Joint Replacement (C-ARM)</span>
                        <span className="block text-[10px] text-slate-400 font-normal">आर्थोपेडिक सर्जरी</span>
                      </div>
                    </a>
                    <a
                      href="#surgeries"
                      onClick={() => handleNavClick('surgeries')}
                      className="flex items-center gap-2 p-2 rounded-xl hover:bg-slate-50 text-xs font-semibold text-slate-800 transition"
                    >
                      <Eye className="w-4 h-4 text-red-600 shrink-0" />
                      <div>
                        <span>Laparoscopic Surgery</span>
                        <span className="block text-[10px] text-slate-400 font-normal">दूरबीन द्वारा आपरेशन</span>
                      </div>
                    </a>
                    <a
                      href="#facilities"
                      onClick={() => handleNavClick('facilities')}
                      className="p-2 text-center rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-800 text-xs font-bold transition block mt-1"
                    >
                      View All 15 Facilities Board &rarr;
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Cancer Center */}
            <a
              href="#cancer-center"
              onClick={() => handleNavClick('cancer-center')}
              className={`px-2.5 py-1.5 text-xs xl:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                activeSection === 'cancer-center'
                  ? 'text-teal-700 bg-teal-50'
                  : 'text-slate-700 hover:text-teal-700 hover:bg-slate-50'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0"></span>
              <span>Cancer Center</span>
            </a>

            {/* Critical Care */}
            <a
              href="#critical-care"
              onClick={() => handleNavClick('critical-care')}
              className={`px-2.5 py-1.5 text-xs xl:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                activeSection === 'critical-care'
                  ? 'text-red-700 bg-red-50'
                  : 'text-slate-700 hover:text-red-600 hover:bg-slate-50'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shrink-0"></span>
              <span>24/7 Critical Care</span>
            </a>

            {/* Doctors & OPD */}
            <a
              href="#doctors"
              onClick={() => handleNavClick('doctors')}
              className={`px-2.5 py-1.5 text-xs xl:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeSection === 'doctors'
                  ? 'text-teal-700 bg-teal-50'
                  : 'text-slate-700 hover:text-teal-700 hover:bg-slate-50'
              }`}
            >
              Doctors &amp; OPD
            </a>

            {/* Patient Guide & TPA */}
            <a
              href="#patient-guide"
              onClick={() => handleNavClick('patient-guide')}
              className={`px-2.5 py-1.5 text-xs xl:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeSection === 'patient-guide'
                  ? 'text-teal-700 bg-teal-50'
                  : 'text-slate-700 hover:text-teal-700 hover:bg-slate-50'
              }`}
            >
              Cashless TPA
            </a>

            {/* Contact & Map */}
            <a
              href="#contact"
              onClick={() => handleNavClick('contact')}
              className={`px-2.5 py-1.5 text-xs xl:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeSection === 'contact'
                  ? 'text-teal-700 bg-teal-50'
                  : 'text-slate-700 hover:text-teal-700 hover:bg-slate-50'
              }`}
            >
              Contact &amp; Map
            </a>

          </nav>

          {/* Right Action: Clean Responsive Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            
            {/* Desktop / Tablet: Book Appointment Button */}
            <button
              onClick={() => onOpenAppointment()}
              className="hidden sm:flex items-center gap-1.5 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-2 rounded-xl shadow-sm hover:shadow-md transition-all shrink-0 whitespace-nowrap"
            >
              <Calendar className="w-4 h-4 shrink-0" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile-only Quick Emergency Call Icon */}
            <a
              href={`tel:${HOSPITAL_INFO.helpline}`}
              className="sm:hidden p-2 rounded-lg bg-red-50 text-red-600 border border-red-200 shrink-0"
              title="Call Emergency"
              aria-label="Call Emergency Helpline"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Hamburger Menu Toggle (for viewports below lg) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none shrink-0"
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
              { label: "Doctors & OPD Schedule", href: "#doctors", id: "doctors" },
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
