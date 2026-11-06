import React, { useState } from 'react';
import { 
  Activity, Baby, Wind, Pill, ShieldAlert, Bone, Eye, Radio, 
  Droplets, Brain, Layers, Sparkles, HeartPulse, Ear, Smile, 
  ArrowRight, Check, Clock, Phone, AlertCircle 
} from 'lucide-react';
import { FACILITIES_BOARD_LIST, Specialty, HOSPITAL_INFO } from '../data/hospitalData';

interface FacilityGridProps {
  onOpenAppointment: (dept?: string) => void;
}

export const FacilityGrid: React.FC<FacilityGridProps> = ({ onOpenAppointment }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeFacility, setActiveFacility] = useState<Specialty | null>(null);

  // Icon mapping
  const renderIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-teal-600" };
    switch (iconName) {
      case 'Activity': return <Activity {...props} />;
      case 'Baby': return <Baby {...props} />;
      case 'Wind': return <Wind {...props} />;
      case 'Pill': return <Pill {...props} />;
      case 'ShieldAlert': return <ShieldAlert {...props} />;
      case 'Bone': return <Bone {...props} />;
      case 'Eye': return <Eye {...props} />;
      case 'Radio': return <Radio {...props} />;
      case 'Droplets': return <Droplets {...props} />;
      case 'Brain': return <Brain {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'HeartPulse': return <HeartPulse {...props} />;
      case 'Ear': return <Ear {...props} />;
      case 'Smile': return <Smile {...props} />;
      default: return <Activity {...props} />;
    }
  };

  const filteredList = FACILITIES_BOARD_LIST.filter(facility => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'critical') return ['icu', 'nicu', 'ventilator'].includes(facility.id);
    if (selectedCategory === 'cancer') return ['chemotherapy', 'cancer-surgery'].includes(facility.id);
    if (selectedCategory === 'surgery') return ['orthopedic-surgery', 'laparoscopic-surgery', 'c-arm', 'uro-surgery', 'neuro-surgery', 'gastro-surgery', 'plastic-surgery'].includes(facility.id);
    if (selectedCategory === 'pediatrics-general') return ['pediatrics', 'ent', 'dental-surgery'].includes(facility.id);
    return true;
  });

  return (
    <section id="facilities" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
            Verified Clinical Infrastructure
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Comprehensive Clinical Facilities &amp; Specialties
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Certified tertiary capabilities covering Critical Care, Surgical Oncology, 
            Laparoscopic Interventions, and Joint Replacements at Tedhi Pulia, Ring Road, Lucknow.
          </p>
        </div>

        {/* Real Board Banner Preview Callout */}
        <div className="mb-10 bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-sm flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/3 w-full rounded-xl overflow-hidden border border-slate-200 shadow-sm shrink-0">
            <img 
              src="/images/neo-facilities-board.jpg" 
              alt="Official NEO Hospital Facility Board Displaying All 15 Superspecialities"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300" 
            />
          </div>
          <div className="space-y-3 md:w-2/3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase text-red-600 bg-red-50 px-2.5 py-1 rounded-md w-fit">
              Official Facilities Board Reference
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              NEO Hospital 15-Point Clinical Guarantee
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every facility listed on our official hospital board is fully equipped on-site with 
              dedicated specialists, sterilized modular theaters, and 24/7 intensivist backing. 
              Click any specialty below to explore clinical details, procedures, and OPD schedules.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md">
                Helpline: 9919722223
              </span>
              <span className="text-xs font-semibold px-2.5 py-1 bg-teal-50 text-teal-700 rounded-md">
                Tedhi Pulia, Ring Road
              </span>
              <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-md">
                Cashless TPA Accepted
              </span>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {[
            { id: 'all', label: 'All 15 Facilities (सभी सुविधाएं)' },
            { id: 'critical', label: 'Critical Care (ICU / NICU / वेंटीलेटर)' },
            { id: 'cancer', label: 'Cancer Center (कीमोथेरेपी / कैंसर सर्जरी)' },
            { id: 'surgery', label: 'Advanced Surgeries (दूरबीन / आर्थोपेडिक / C-ARM)' },
            { id: 'pediatrics-general', label: 'Pediatrics & ENT (बाल रोग / ईएनटी / डेंटल)' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm ${
                selectedCategory === tab.id
                  ? 'bg-teal-600 text-white shadow-teal-600/30 shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredList.map((facility) => (
            <div
              key={facility.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-teal-400 flex flex-col justify-between group"
            >
              <div>
                {/* Header Icon + Hindi Badge */}
                <div className="flex items-start justify-between gap-2 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    {renderIcon(facility.icon)}
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-xs font-bold text-red-600 bg-red-50 border border-red-100 px-2 py-0.5 rounded">
                      {facility.nameHi}
                    </span>
                    {facility.emergencyReady && (
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                        24/7 Ready
                      </span>
                    )}
                  </div>
                </div>

                {/* Title & Short Description */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                  {facility.nameEn}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                  {facility.shortDesc}
                </p>

                {/* Key Procedures Snippet */}
                <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400 block">
                    Key Procedures / Features
                  </span>
                  {facility.keyProcedures.slice(0, 3).map((proc, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                      <span className="truncate">{proc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveFacility(facility)}
                  className="text-xs font-bold text-teal-700 hover:text-teal-800 flex items-center gap-1 group/btn"
                >
                  <span>View Full Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>

                <button
                  onClick={() => onOpenAppointment(facility.nameEn)}
                  className="text-xs font-semibold bg-slate-900 hover:bg-teal-600 text-white px-3 py-1.5 rounded-lg transition shadow-sm"
                >
                  Book OPD
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Full Facility Details */}
        {activeFacility && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6 relative">
              <button
                onClick={() => setActiveFacility(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 text-lg font-bold"
              >
                ✕
              </button>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-teal-100 flex items-center justify-center shrink-0">
                  {renderIcon(activeFacility.icon)}
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-bold text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded">
                      {activeFacility.nameHi}
                    </span>
                    {activeFacility.badges.map((b, i) => (
                      <span key={i} className="text-xs font-semibold text-teal-800 bg-teal-50 px-2 py-0.5 rounded">
                        {b}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                    {activeFacility.nameEn}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                {activeFacility.fullDesc}
              </p>

              {/* Procedures */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Clinical Procedures Offered:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeFacility.keyProcedures.map((proc, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-800 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{proc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Equipment & Technology */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Dedicated Diagnostic &amp; Surgical Technology:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeFacility.equipment.map((eq, i) => (
                    <span key={i} className="text-xs font-medium bg-teal-50 text-teal-800 border border-teal-100 px-3 py-1 rounded-md">
                      {eq}
                    </span>
                  ))}
                </div>
              </div>

              {/* OPD Schedule */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center gap-3">
                <Clock className="w-5 h-5 text-teal-600 shrink-0" />
                <div className="text-xs sm:text-sm">
                  <span className="font-bold text-slate-900 block">Consultation Schedule:</span>
                  <span className="text-slate-600">{activeFacility.opdSchedule}</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-slate-200">
                <a
                  href={`tel:${HOSPITAL_INFO.helpline}`}
                  className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl transition"
                >
                  <Phone className="w-4 h-4" /> Emergency: {HOSPITAL_INFO.helpline}
                </a>
                <button
                  onClick={() => {
                    setActiveFacility(null);
                    onOpenAppointment(activeFacility.nameEn);
                  }}
                  className="bg-teal-600 hover:bg-teal-700 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl transition shadow"
                >
                  Book Appointment for {activeFacility.nameEn}
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
