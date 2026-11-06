import React from 'react';
import { Bone, Eye, Radio, ShieldCheck, CheckCircle2, ArrowRight, Activity, Award } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

interface OrthopedicShowcaseProps {
  onOpenAppointment: (dept?: string) => void;
}

export const OrthopedicShowcase: React.FC<OrthopedicShowcaseProps> = ({ onOpenAppointment }) => {
  return (
    <section id="surgeries" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
            Advanced Surgical Excellence
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Joint Replacement, C-ARM &amp; Laparoscopic Surgery (दूरबीन आपरेशन)
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Ultra-clean laminar airflow operating suites, intraoperative C-ARM fluoroscopy, 
            and minimally invasive laparoscopic technology for faster mobility, minimal pain, and rapid recovery.
          </p>
        </div>

        {/* Feature Grid with Real OT Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          
          {/* Real Surgical OT Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200 shadow-2xl group">
              <img 
                src="/images/neo-surgery-ortho.jpg" 
                alt="Total Hip Joint Replacement Surgery with Precision Implants at NEO Hospital Lucknow" 
                className="w-full h-[420px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

              {/* In-OT Real Procedure Badge */}
              <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                <span>Active OT Procedure</span>
              </div>

              {/* Image Description Box */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 text-slate-900 shadow-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                    आर्थोपेडिक एवं जॉइंट रिप्लेसमेंट
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500">
                    C-ARM Fluoroscopy Guided
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900">
                  Total Hip (THR) &amp; Total Knee (TKR) Replacement
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  Sub-millimeter implant positioning with intraoperative imaging ensures anatomical joint alignment, minimal bone loss, and rapid post-op ambulation.
                </p>
              </div>
            </div>
          </div>

          {/* Clinical Details & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-md">
                <Bone className="w-4 h-4 text-teal-600" />
                <span>Orthopedic &amp; Trauma Excellence</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                Painless Mobility: Knee &amp; Hip Arthroplasty
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Whether managing debilitating severe osteoarthritis or severe accidental polytrauma fractures, 
                our orthopedic surgeons utilize cutting-edge titanium/cobalt-chrome implants and fast-track rehabilitation protocols. 
                Patients are routinely mobilized within 24 to 48 hours post-surgery.
              </p>
            </div>

            {/* 3 Key Operational Pillars */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center shrink-0 text-teal-700">
                  <Radio className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Intraoperative C-ARM Image Intensifier</h4>
                  <p className="text-xs text-slate-600">Live sub-millimeter fluoroscopy guidance ensures perfect fixation of complex fractures, interlocking nails, and spine pedicle screws.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center shrink-0 text-red-600">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">दूरबीन द्वारा आपरेशन (Advanced Laparoscopy)</h4>
                  <p className="text-xs text-slate-600">High-Definition laparoscopic gallbladder stone removal, pin-hole appendix excision, and inguinal hernia repairs with same-day or next-day discharge.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-700">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Class 10,000 Modular Laminar Airflow OT</h4>
                  <p className="text-xs text-slate-600">Positive pressure HEPA-filtered clean air environment prevents surgical site infections (SSI) during prosthetic joint implantations.</p>
                </div>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenAppointment("Orthopedic & Joint Replacement")}
                className="bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition shadow flex items-center gap-2"
              >
                <span>Book Joint Replacement Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenAppointment("Laparoscopic Surgery")}
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition shadow"
              >
                Laparoscopy Inquiry
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
