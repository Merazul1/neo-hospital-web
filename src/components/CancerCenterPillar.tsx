import React from 'react';
import { Pill, ShieldAlert, Users, Award, CheckCircle, ArrowRight, Phone, MessageSquare, HeartHandshake } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

interface CancerCenterPillarProps {
  onOpenAppointment: (dept?: string) => void;
}

export const CancerCenterPillar: React.FC<CancerCenterPillarProps> = ({ onOpenAppointment }) => {
  return (
    <section id="cancer-center" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-bold uppercase tracking-wider">
            Superspeciality Oncology Wing
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Cancer Center: Advanced Chemotherapy &amp; Surgical Oncology in Lucknow
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Delivering multidisciplinary cancer care combining high-precision cancer surgery, modern chemotherapy daycare, 
            and compassionate patient-centered oncology at Tedhi Pulia, Ring Road, Lucknow.
          </p>
        </div>

        {/* 3 Pillars Grid: Chemo Daycare, Surgical Oncology, Tumor Board */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Pillar 1: Chemo Daycare */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 hover:shadow-xl hover:border-teal-400 transition-all group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-teal-100 flex items-center justify-center text-teal-700">
                <Pill className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                कीमोथेरेपी डे-केयर यूनिट
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                Chemotherapy Daycare Suite
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Sterile outpatient chemotherapy administration avoiding unnecessary hospital overnight stays. 
                Equipped with biosafety laminar airflow cabinets for drug compounding, chemoport access, and modern anti-emetic premedication.
              </p>

              <div className="pt-2 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Solid Tumors &amp; Hematology Infusions</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Targeted Therapy &amp; Immunotherapy</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Chemo Port Flush &amp; Maintenance</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenAppointment("Chemotherapy Unit")}
              className="mt-6 text-xs font-bold text-teal-700 hover:text-teal-800 flex items-center gap-1.5 pt-4 border-t border-slate-200"
            >
              <span>Schedule Chemotherapy Session</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Pillar 2: Surgical Oncology */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 hover:shadow-xl hover:border-red-400 transition-all group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center text-red-600">
                <ShieldAlert className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase text-red-700 bg-red-50 px-2 py-0.5 rounded">
                कैंसर सर्जरी विशेषज्ञ
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                Surgical Oncology &amp; Tumor Resection
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Radical oncological resections with organ preservation whenever feasible. Conducted in modular laminar airflow OTs 
                with high-frequency energy vessels and dedicated post-operative onco-critical monitoring.
              </p>

              <div className="pt-2 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Breast Cancer &amp; Oncoplastic Surgery</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Oral &amp; Head-Neck Composite Resection</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Gastrointestinal &amp; Colorectal Malignancies</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenAppointment("Cancer Surgery")}
              className="mt-6 text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1.5 pt-4 border-t border-slate-200"
            >
              <span>Consult Surgical Oncologist</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Pillar 3: Tumor Board */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 hover:shadow-xl hover:border-teal-400 transition-all group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-700">
                <Users className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
                मल्टी-डिसिप्लिनरी ट्यूमर बोर्ड
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                Multidisciplinary Tumor Board
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                No single doctor decides cancer treatment in isolation. Every complex cancer case is deliberated by a joint board 
                of surgical oncologists, medical oncologists, radiologists, and pathologists for evidence-based staging and treatment planning.
              </p>

              <div className="pt-2 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Standardized NCCN &amp; ICMR Guidelines</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Second Opinions for Complex Tumors</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Integrated Palliative &amp; Nutritional Care</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenAppointment("Tumor Board Consultation")}
              className="mt-6 text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1.5 pt-4 border-t border-slate-200"
            >
              <span>Request Tumor Board Case Review</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Second Opinion & Chemotherapy Helpline Bar */}
        <div className="bg-gradient-to-r from-teal-900 to-slate-900 rounded-3xl p-8 text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-teal-300 text-xs font-bold uppercase tracking-wider">
              <HeartHandshake className="w-4 h-4 text-red-400" />
              <span>Cancer Second Opinion &amp; Biopsy Evaluation Desk</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold">
              Facing a Cancer Diagnosis in Lucknow? Get Expert Guidance Today.
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Bring your PET-CT, biopsy reports, or histopathology slides to our Tedhi Pulia center 
              for a comprehensive second opinion and clear roadmap.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <a
              href={`https://wa.me/${HOSPITAL_INFO.whatsapp}?text=Hello%20NEO%20Hospital,%20I%20need%20a%20second%20opinion%20on%20a%20cancer%20report`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition shadow flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" /> Send Reports on WhatsApp
            </a>

            <button
              onClick={() => onOpenAppointment("Cancer Second Opinion")}
              className="bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition shadow"
            >
              Book OPD Appointment
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
