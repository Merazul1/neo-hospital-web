import React from 'react';
import { Activity, Baby, Wind, Phone, ShieldCheck, Check, Clock, Ambulance, AlertTriangle, HeartPulse } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

interface CriticalCareSectionProps {
  onOpenAppointment: (dept?: string) => void;
}

export const CriticalCareSection: React.FC<CriticalCareSectionProps> = ({ onOpenAppointment }) => {
  return (
    <section id="critical-care" className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950 border border-red-500/50 text-red-400 text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            24/7 Critical Emergency Readiness
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            ICU, Level-III NICU &amp; Advanced Ventilator Care in Lucknow
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Zero-delay triage, round-the-clock intensivists, and invasive life-support monitoring 
            for critically ill patients and delicate newborns at Tedhi Pulia Ring Road.
          </p>
        </div>

        {/* Emergency Bed Reservation Callout Banner */}
        <div className="bg-gradient-to-r from-red-900/90 via-red-800/80 to-slate-900 border-2 border-red-500 p-6 sm:p-8 rounded-3xl shadow-2xl mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="px-2.5 py-1 bg-red-950 text-red-200 text-xs font-bold rounded-lg border border-red-400">
                24x7 Bed Availability Check
              </span>
              <span className="text-xs text-red-200 font-semibold">Immediate Admission Hotline</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Need an Urgent ICU Bed or Ventilator Support in North Lucknow?
            </h3>
            <p className="text-xs sm:text-sm text-red-100 max-w-xl">
              Don't waste crucial golden-hour moments searching for ventilator beds. Call our direct intensivist line for prompt bed confirmation and ambulance dispatch.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href={`tel:${HOSPITAL_INFO.helpline}`}
              className="w-full sm:w-auto bg-white hover:bg-slate-100 text-red-600 font-black text-sm sm:text-base px-6 py-4 rounded-2xl shadow-xl transition flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5 text-red-600 animate-pulse" />
              <span>Call Helpline: {HOSPITAL_INFO.helpline}</span>
            </a>
          </div>
        </div>

        {/* 3 Core Critical Care Modules */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Module 1: Adult Tertiary ICU */}
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-3xl p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between space-y-6 hover:border-teal-400 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400">
                  <Activity className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase text-teal-300 bg-teal-950 px-2.5 py-1 rounded-md border border-teal-800">
                  आई.सी.यू.
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white">
                Intensive Care Unit (ICU)
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Tertiary medical and surgical ICU offering continuous multi-para monitoring, invasive blood pressure tracking, 
                central venous cannulation, and targeted sepsis protocols supervised by full-time intensivists.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-start gap-2 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>1:1 Nursing ratio for critically unstable patients</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>Bedside ABG analyzer &amp; Point-of-Care ultrasound</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>Emergency crash cart with defibrillator &amp; external pacing</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-700">
              <span className="text-xs text-slate-400 font-medium block mb-3">Coverage: 24 Hours / 365 Days</span>
              <a
                href={`tel:${HOSPITAL_INFO.helpline}`}
                className="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 transition"
              >
                <Phone className="w-3.5 h-3.5 text-teal-400" />
                <span>ICU Admission Query</span>
              </a>
            </div>
          </div>

          {/* Module 2: Level-III NICU */}
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-3xl p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between space-y-6 hover:border-red-400 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400">
                  <Baby className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase text-red-300 bg-red-950 px-2.5 py-1 rounded-md border border-red-800">
                  एन.आई.सी.यू.
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white">
                Neonatal ICU (Level-III NICU)
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Advanced neonatal intensive care dedicated to premature babies, extremely low birth weight infants, 
                neonatal sepsis, and hyperbilirubinemia, guided by board-certified neonatologists.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-start gap-2 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>High-frequency neonatal ventilators &amp; CPAP circuits</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>Microprocessor radiant warmers &amp; incubators</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>Double surface LED phototherapy for jaundice</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-700">
              <span className="text-xs text-slate-400 font-medium block mb-3">Coverage: 24/7 Neonatologist on Call</span>
              <a
                href={`tel:${HOSPITAL_INFO.helpline}`}
                className="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 transition"
              >
                <Phone className="w-3.5 h-3.5 text-red-400" />
                <span>NICU Bed Reservation</span>
              </a>
            </div>
          </div>

          {/* Module 3: Advanced Ventilator Support */}
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-3xl p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between space-y-6 hover:border-teal-400 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400">
                  <Wind className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase text-teal-300 bg-teal-950 px-2.5 py-1 rounded-md border border-teal-800">
                  वेंटीलेटर सपोर्ट
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white">
                Mechanical Ventilator Support
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Precision microprocessor-driven invasive and non-invasive ventilation (BiPAP/CPAP) for acute respiratory 
                distress syndrome (ARDS), chronic obstructive pulmonary disease (COPD), and severe post-operative trauma.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-start gap-2 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>Real-time respiratory mechanics &amp; volume control</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>Percutaneous bedside tracheostomy capability</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>Continuous central oxygen manifold with dual backup</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-700">
              <span className="text-xs text-slate-400 font-medium block mb-3">Status: Real-Time Hemodynamic Monitoring</span>
              <a
                href={`tel:${HOSPITAL_INFO.helpline}`}
                className="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 transition"
              >
                <Phone className="w-3.5 h-3.5 text-teal-400" />
                <span>Ventilator Bed Inquiry</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
