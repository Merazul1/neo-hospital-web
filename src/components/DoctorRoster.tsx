import React from 'react';
import { Award, Calendar, Clock, Check, UserCheck, Stethoscope } from 'lucide-react';
import { DOCTORS_ROSTER, Doctor } from '../data/hospitalData';

interface DoctorRosterProps {
  onOpenAppointment: (dept?: string) => void;
}

export const DoctorRoster: React.FC<DoctorRosterProps> = ({ onOpenAppointment }) => {
  return (
    <section id="doctors" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
            Distinguished Medical Faculty
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Consult Board-Certified Specialists &amp; Surgeons
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Our super-specialists bring decades of collective tertiary experience from premier institutions 
            to offer compassionate, evidence-based care in Lucknow.
          </p>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DOCTORS_ROSTER.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-teal-400 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header: Avatar Placeholder & Department */}
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-teal-600 to-teal-400 text-white flex items-center justify-center font-black text-xl shadow-md shrink-0">
                    <Stethoscope className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                      {doc.department}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1 group-hover:text-teal-700 transition-colors">
                      {doc.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">{doc.designation}</p>
                  </div>
                </div>

                {/* Qualifications & Experience */}
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1">
                  <p className="text-xs font-bold text-slate-800">
                    🎓 {doc.qualifications}
                  </p>
                  <p className="text-xs text-teal-700 font-semibold flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-teal-600" />
                    <span>{doc.experienceYears}+ Years Clinical &amp; Surgical Experience</span>
                  </p>
                </div>

                {/* Clinical Expertise Tags */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Specialized Focus Areas:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {doc.expertise.map((exp, idx) => (
                      <span key={idx} className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium">
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* OPD Schedule */}
                <div className="pt-2 border-t border-slate-100 space-y-1 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                    <Clock className="w-3.5 h-3.5 text-teal-600" />
                    <span>OPD Hours: {doc.opdTimings}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>Days: {doc.days}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-5 mt-4 border-t border-slate-100">
                <button
                  onClick={() => onOpenAppointment(`${doc.name} (${doc.department})`)}
                  className="w-full bg-slate-900 hover:bg-teal-600 text-white font-bold text-xs sm:text-sm py-2.5 rounded-xl transition shadow flex items-center justify-center gap-2 group-hover:bg-teal-600"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation Slot</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
