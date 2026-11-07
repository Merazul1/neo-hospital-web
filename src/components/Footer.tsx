import React from 'react';
import { Phone, MapPin, Mail, Clock, Heart, ShieldCheck, Ambulance } from 'lucide-react';
import { HOSPITAL_INFO, FACILITIES_BOARD_LIST, CATCHMENT_AREAS } from '../data/hospitalData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 lg:pb-16 border-t border-slate-900 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Column 1: Hospital Brand & NAP (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/images/neo-logo.png" 
                alt="NEO Hospital Lucknow Logo" 
                className="h-12 w-auto bg-white/10 p-1 rounded-xl"
              />
              <div>
                <span className="text-xl font-black text-white tracking-tight">NEO <span className="text-red-500">HOSPITAL</span></span>
                <span className="text-[11px] block text-teal-400 font-semibold tracking-wider uppercase">
                  Superspeciality Hospital &amp; Cancer Center
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed italic">
              "A better place to get better" — Compassionate, state-of-the-art tertiary healthcare, 
              surgical oncology, advanced laparoscopy, joint replacements, and 24/7 critical care in North Lucknow.
            </p>

            {/* NAP Box */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2 text-xs">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span><strong>Address:</strong> {HOSPITAL_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span><strong>24/7 Helpline:</strong> <a href={`tel:${HOSPITAL_INFO.helpline}`} className="text-white font-bold hover:underline">{HOSPITAL_INFO.helpline}</a></span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                <span><strong>Emergency &amp; ICU:</strong> Open 24 Hours / 365 Days</span>
              </div>
            </div>
          </div>

          {/* Column 2: 15 Core Clinical Facilities (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Clinical Specialities (सुविधाएं)
            </h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs">
              {FACILITIES_BOARD_LIST.map((f) => (
                <a
                  key={f.id}
                  href={`#facilities`}
                  className="text-slate-400 hover:text-teal-400 transition truncate"
                  title={`${f.nameEn} (${f.nameHi})`}
                >
                  • {f.nameEn.split('(')[0].trim()} <span className="text-[10px] text-red-400/80">({f.nameHi})</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Catchment Areas & Quick Access (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              North Lucknow Catchment Silos
            </h4>
            <p className="text-xs text-slate-400">
              Direct emergency and OPD corridors connecting residential and commercial hubs:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {CATCHMENT_AREAS.map((c, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-slate-900 border border-slate-800 text-slate-300 px-2.5 py-1 rounded-lg"
                >
                  {c.name.split('&')[0]} ({c.travelTime})
                </span>
              ))}
            </div>

            <div className="p-3 rounded-xl bg-red-950/40 border border-red-900/60 text-xs space-y-1">
              <span className="text-red-400 font-bold flex items-center gap-1">
                <Ambulance className="w-3.5 h-3.5" /> Emergency Protocol Notice:
              </span>
              <p className="text-[11px] text-slate-300">
                For cardiac arrest, acute head trauma, stroke, or ventilator bed requirement, please notify our helpline at <strong>{HOSPITAL_INFO.helpline}</strong> while in transit so our resuscitation team is scrubbed and prepped at the ramp.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Medical Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center md:text-left">
          <div>
            &copy; {new Date().getFullYear()} NEO Hospital. All Rights Reserved. Superspeciality Hospital &amp; Cancer Center, Lucknow.
          </div>
          <div className="flex items-center gap-4 text-slate-400 text-[11px]">
            <a href="#gallery" className="hover:text-teal-400 transition">Hospital Photo Gallery</a>
            <span>•</span>
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Patient Charter</span>
            <span>•</span>
            <span>Cashless TPA Empanelment</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
