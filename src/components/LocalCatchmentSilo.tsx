import React from 'react';
import { MapPin, Navigation, Clock, ShieldCheck, Car, Compass, Phone } from 'lucide-react';
import { CATCHMENT_AREAS, HOSPITAL_INFO } from '../data/hospitalData';

export const LocalCatchmentSilo: React.FC = () => {
  return (
    <section id="catchment" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
            North Lucknow Healthcare Corridor
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Strategic Catchment: Tedhi Pulia, Ring Road &amp; Surrounds
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Strategically positioned at <strong>3, Pratap Nagar, Tedhi Pulia on the main Ring Road</strong>, 
            NEO Hospital provides immediate, unhindered emergency access to patients across North Lucknow within 5 to 12 minutes.
          </p>
        </div>

        {/* Catchment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {CATCHMENT_AREAS.map((area, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200 rounded-3xl p-6 hover:shadow-lg hover:border-teal-400 transition-all space-y-4 group"
            >
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
                  <Navigation className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                </div>
                <div className="text-right">
                  <span className="text-xs font-extrabold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                    {area.travelTime}
                  </span>
                  <span className="text-[11px] text-slate-500 block mt-0.5">
                    {area.distance}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                  {area.name}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {area.routeDescription}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Key Transit Landmarks:
                </span>
                <div className="flex flex-wrap gap-1">
                  {area.landmarks.map((landmark, lIdx) => (
                    <span key={lIdx} className="text-[11px] bg-white border border-slate-200 text-slate-700 px-2 py-0.5 rounded">
                      {landmark}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rapid Navigation Banner */}
        <div className="bg-gradient-to-r from-teal-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center justify-center md:justify-start gap-1.5">
              <Car className="w-4 h-4" /> Seamless Transit &amp; Dedicated Patient Parking
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              Navigating to NEO Hospital from Any Part of Lucknow
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Easy ramp access directly on Ring Road with unobstructed 24/7 ambulance entry, stretcher elevator, and ample attendant parking.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="https://maps.google.com/?q=NEO+Hospital+3+Pratap+Nagar+Tedhi+Pulia+Ring+Road+Lucknow"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition shadow flex items-center gap-2"
            >
              <Compass className="w-4 h-4" /> Start GPS Navigation
            </a>
            <a
              href={`tel:${HOSPITAL_INFO.helpline}`}
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition shadow flex items-center gap-2"
            >
              <Phone className="w-4 h-4" /> Call 9919722223
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
