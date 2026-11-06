import React from 'react';
import { ShieldCheck, Clock, FileText, CheckCircle2, AlertCircle, CreditCard, HelpCircle, Phone } from 'lucide-react';
import { INSURANCE_PARTNERS, HOSPITAL_INFO } from '../data/hospitalData';

export const PatientGuideAndTPA: React.FC = () => {
  return (
    <section id="patient-guide" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
            Patient Care &amp; Support
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Cashless TPA Insurance &amp; Visitor Guide
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Hassle-free admissions, transparent financial counseling, wide cashless mediclaim empanelment, 
            and patient-friendly visiting guidelines at NEO Hospital Lucknow.
          </p>
        </div>

        {/* 2 Column Layout: TPA & Cashless Left, Visiting Hours & Admission Steps Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Column: TPA Insurance Panels */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700">
                <CreditCard className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase text-teal-700">Zero-Hassle Mediclaim</span>
                <h3 className="text-xl font-bold text-slate-900">
                  Cashless Health Insurance &amp; TPA Empanelment
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              NEO Hospital works directly with India’s leading Third-Party Administrators (TPAs) and private insurers. 
              Our dedicated 24/7 TPA Desk ensures expedited initial pre-authorization and smooth cashless final claim settlement.
            </p>

            {/* Insurance Logos / Pills */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                Empanelled Insurance Providers &amp; TPAs:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {INSURANCE_PARTNERS.map((partner, idx) => (
                  <div 
                    key={idx}
                    className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-700 flex items-center gap-2 hover:border-teal-300 transition"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span className="truncate">{partner}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cashless Checklist */}
            <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-100 space-y-2">
              <h4 className="text-xs font-bold text-teal-900 uppercase">
                Required Documents for Cashless Admission:
              </h4>
              <ul className="text-xs text-teal-800 space-y-1 list-disc list-inside">
                <li>Health Insurance Card / Policy Copy</li>
                <li>Patient's Government ID Proof (Aadhaar / Voter ID / PAN)</li>
                <li>Doctor's OPD Consultation Prescription with admission advice</li>
                <li>Relevant Diagnostic Investigation &amp; Pathology Reports</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Admission Process & Visiting Hours */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Visiting Hours Card */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase text-red-600">Visitor Protocols</span>
                  <h4 className="text-lg font-bold text-slate-900">Visiting Hours &amp; Guidelines</h4>
                </div>
              </div>

              <div className="space-y-3 pt-1">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-900 mb-1">
                    <span>ICU / NICU Critical Care:</span>
                    <span className="text-red-600">1 Attendant Only</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Morning: 12:00 PM – 1:00 PM | Evening: 6:00 PM – 7:00 PM<br />
                    <em>Strict adherence to sterility masks &amp; shoe covers is mandatory.</em>
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-900 mb-1">
                    <span>General &amp; Private Wards:</span>
                    <span className="text-teal-700">2 Attendants</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Morning: 11:00 AM – 1:00 PM | Evening: 5:00 PM – 7:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* TPA Helpdesk Contact Card */}
            <div className="bg-gradient-to-br from-slate-900 to-teal-950 text-white rounded-3xl p-6 shadow-md space-y-3">
              <div className="flex items-center gap-2 text-teal-400 text-xs font-bold uppercase">
                <HelpCircle className="w-4 h-4" /> 24/7 TPA &amp; Cashless Helpdesk
              </div>
              <h4 className="text-base font-bold text-white">
                Have questions about your insurance policy coverage?
              </h4>
              <p className="text-xs text-slate-300">
                Call our hospital insurance coordinator directly to verify coverage for ICU beds, chemotherapy, or joint replacements before admission.
              </p>
              <a
                href={`tel:${HOSPITAL_INFO.helpline}`}
                className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition"
              >
                <Phone className="w-3.5 h-3.5" /> Call Insurance Desk: {HOSPITAL_INFO.helpline}
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
