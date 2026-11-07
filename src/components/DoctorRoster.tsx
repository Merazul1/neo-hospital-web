import React, { useState } from 'react';
import { 
  Award, Calendar, Clock, Check, UserCheck, Stethoscope, 
  Search, Filter, ChevronRight, FileText, CheckCircle2, Phone, Eye 
} from 'lucide-react';
import { DOCTORS_ROSTER, Doctor, HOSPITAL_INFO } from '../data/hospitalData';

interface DoctorRosterProps {
  onOpenAppointment: (dept?: string) => void;
}

export const DoctorRoster: React.FC<DoctorRosterProps> = ({ onOpenAppointment }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showBrochureModal, setShowBrochureModal] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: 'All Doctors (सभी 29 विशेषज्ञ)' },
    { id: 'cancer', label: 'कैंसर (Oncology & Cancer Surgery)' },
    { id: 'ortho', label: 'आर्थोपेडिक (Joint Replacement & Ortho)' },
    { id: 'gastro', label: 'गैस्ट्रोएंटेरोलॉजिस्ट (Gastroenterology)' },
    { id: 'gynecology', label: 'गाइनाकोलॉजिस्ट (Gynecology & Maternity)' },
    { id: 'pediatrics', label: 'बाल रोग (Pediatrics & NICU)' },
    { id: 'chest', label: 'टी०बी० एण्ड चेस्ट (Pulmonology)' },
    { id: 'urology', label: 'यूरो (Urology & Stone Care)' },
    { id: 'ent', label: 'नाक, कान, गला (ENT)' },
    { id: 'plastic', label: 'प्लास्टिक सर्जरी (Plastic Surgery)' },
    { id: 'nephro', label: 'नेफ्रोलॉजिस्ट (Kidney & Dialysis)' },
    { id: 'medicine', label: 'मेडिसिन (Internal Medicine & Diabetes)' },
    { id: 'anaesthesia', label: 'एनेस्थेटिक्स (Anaesthesia & ICU)' },
  ];

  const filteredDoctors = DOCTORS_ROSTER.filter((doc) => {
    const matchesCategory = selectedCategory === 'all' || doc.departmentCategory === selectedCategory;
    const matchesSearch = 
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (doc.nameHi && doc.nameHi.includes(searchQuery)) ||
      doc.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.qualifications.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.expertise.some(e => e.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="doctors" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
            Official Medical Faculty
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Consult Board-Certified Specialists &amp; Surgeons
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Our multi-disciplinary team of 29 experienced consultants and superspecialists across 
            12 departments provides evidence-based outpatient and surgical care at Tedhi Pulia, Ring Road, Lucknow.
          </p>
        </div>

        {/* Authentic Hospital Brochure Showcase Banner */}
        <div className="mb-10 bg-white border border-slate-200 rounded-3xl p-5 sm:p-7 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <div 
              onClick={() => setShowBrochureModal(true)}
              className="relative w-24 sm:w-32 h-20 sm:h-24 rounded-2xl overflow-hidden border-2 border-teal-500/40 shadow cursor-pointer group shrink-0"
              title="Click to view full doctor brochure"
            >
              <img 
                src="/images/neo-doctors-brochure.jpg" 
                alt="Official NEO Hospital Doctors & Facilities Brochure" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/10 transition-colors flex items-center justify-center">
                <Eye className="w-5 h-5 text-white drop-shadow" />
              </div>
            </div>
            <div className="space-y-1.5">
              <span className="text-[10px] sm:text-xs font-bold uppercase text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded-md">
                Official Hospital Faculty Roster
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Verified Doctors &amp; Clinical Facilities Catalog
              </h3>
              <p className="text-xs text-slate-500 max-w-xl">
                Every doctor listed below is verified from NEO Hospital's official roster. Click to inspect the original clinical pamphlet and facilities breakdown.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={() => setShowBrochureModal(true)}
              className="w-full md:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition shadow flex items-center justify-center gap-1.5"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>View Original Pamphlet</span>
            </button>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="space-y-4 mb-10">
          
          {/* Search Input Bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search doctor by name (e.g. Dr. Yashwant, Dr. Sudhakar, Dr. Shikha) or specialty..."
              className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-3 text-xs text-slate-400 hover:text-slate-600 font-bold p-1"
              >
                Clear
              </button>
            )}
          </div>

          {/* Department Filter Pills */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap pt-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-bold transition-all shadow-sm ${
                  selectedCategory === cat.id
                    ? 'bg-teal-600 text-white shadow-teal-600/30 shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredDoctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-teal-400 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Header: Avatar, Name & Department */}
                <div className="flex items-start gap-3.5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-teal-600 to-teal-400 text-white flex items-center justify-center font-black text-xl shadow-md shrink-0">
                    <Stethoscope className="w-7 h-7" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-100">
                        {doc.department.split('(')[0].trim()}
                      </span>
                      {doc.nameHi && (
                        <span className="text-[10px] font-bold text-red-600 bg-red-50 px-1.5 py-0.5 rounded">
                          {doc.nameHi}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mt-1 group-hover:text-teal-700 transition-colors truncate">
                      {doc.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium truncate">{doc.designation}</p>
                  </div>
                </div>

                {/* Qualifications Badge */}
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800">
                    🎓 {doc.qualifications}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Verified Roster
                  </span>
                </div>

                {/* Clinical Expertise Tags */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Specialized Focus Areas:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {doc.expertise.map((exp, idx) => (
                      <span key={idx} className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-medium">
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* OPD Schedule */}
                <div className="pt-2 border-t border-slate-100 space-y-1 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                    <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span className="truncate">OPD Hours: {doc.opdTimings}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">Days: {doc.days}</span>
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-4 mt-4 border-t border-slate-100">
                <button
                  onClick={() => onOpenAppointment(`${doc.name} - ${doc.department}`)}
                  className="w-full bg-slate-900 hover:bg-teal-600 text-white font-bold text-xs py-2.5 rounded-xl transition shadow flex items-center justify-center gap-2 group-hover:bg-teal-600"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation with {doc.name.split(' ')[1] || doc.name}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if search has no results */}
        {filteredDoctors.length === 0 && (
          <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 p-8 space-y-3">
            <p className="text-base font-bold text-slate-700">No doctors match your search: "{searchQuery}"</p>
            <p className="text-xs text-slate-500">Try searching with a different specialty or clear the filter to see all 29 doctors.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="bg-teal-600 text-white text-xs font-bold px-4 py-2 rounded-xl"
            >
              Show All 29 Doctors
            </button>
          </div>
        )}

        {/* Modal to view authentic brochure */}
        {showBrochureModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-4xl w-full p-4 sm:p-6 shadow-2xl relative max-h-[92vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    Official NEO Hospital Doctors &amp; Services Pamphlet
                  </h3>
                  <p className="text-xs text-slate-500">
                    3, Pratap Nagar, Tedhi Pulia, Ring Road, Lucknow – Helpline: 9919722223
                  </p>
                </div>
                <button
                  onClick={() => setShowBrochureModal(false)}
                  className="p-2 text-slate-400 hover:text-slate-800 rounded-full hover:bg-slate-100 font-bold"
                >
                  ✕
                </button>
              </div>

              <div className="rounded-2xl overflow-hidden border border-slate-200">
                <img 
                  src="/images/neo-doctors-brochure.jpg" 
                  alt="NEO Hospital Doctor Pamphlet" 
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setShowBrochureModal(false)}
                  className="bg-teal-600 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
