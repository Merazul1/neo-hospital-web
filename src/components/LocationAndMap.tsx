import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, Compass, ExternalLink, ShieldCheck } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export const LocationAndMap: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
            Hospital Location &amp; Directions
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Find Us on Tedhi Pulia Ring Road, Lucknow
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Conveniently situated with direct highway arterial connectivity from all sectors of Lucknow.
          </p>
        </div>

        {/* 2 Column Layout: Details Left, Map Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Hospital Contact Details & Directions */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl space-y-8">
            
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                  Physical Location
                </span>
                <h3 className="text-2xl font-black text-white">
                  NEO Hospital
                </h3>
                <p className="text-xs text-slate-300">
                  Superspeciality Hospital &amp; Cancer Center
                </p>
              </div>

              {/* Address Box */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
                <MapPin className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <span className="font-bold text-white block mb-0.5">Official Address:</span>
                  <p className="text-slate-300 leading-relaxed">
                    {HOSPITAL_INFO.address}
                  </p>
                  <span className="text-[11px] text-teal-400 font-medium block mt-1">
                    (Opposite / Near Tedhi Pulia Sabzi Mandi on Ring Road)
                  </span>
                </div>
              </div>

              {/* 24/7 Helpline */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-red-950/70 border border-red-500/60">
                <Phone className="w-6 h-6 text-red-400 shrink-0 mt-0.5 animate-pulse" />
                <div className="text-xs sm:text-sm">
                  <span className="font-bold text-red-200 uppercase tracking-wider block text-[10px]">
                    24/7 Emergency &amp; Ambulance Helpline:
                  </span>
                  <a 
                    href={`tel:${HOSPITAL_INFO.helpline}`}
                    className="text-xl sm:text-2xl font-black text-white hover:text-red-300 transition"
                  >
                    {HOSPITAL_INFO.helpline}
                  </a>
                  <p className="text-[11px] text-red-200/80 mt-0.5">
                    Immediate triage, ICU bed reservation &amp; dispatch
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-slate-300">
                  <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                  <span><strong>Emergency / ICU / Trauma:</strong> Open 24/7 (365 Days)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                  <span><strong>OPD Consultations:</strong> Mon – Sat: 9 AM – 8 PM</span>
                </div>
              </div>
            </div>

            {/* Direct Direction Guide */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Turn-By-Turn Navigation Cues:
              </span>
              <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                <li><strong>From Tedhi Pulia Chauraha:</strong> Head east along Ring Road towards Vikas Nagar for 300 meters; hospital is on your left at 3, Pratap Nagar.</li>
                <li><strong>From Aliganj:</strong> Take Kursi Road or Kapoorthala link directly landing on Tedhi Pulia Ring Road in ~6 mins.</li>
                <li><strong>From Munshipulia / Khurram Nagar:</strong> Follow Ring Road westbound; hospital entrance is easily accessed with clear roadside signage.</li>
              </ul>

              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=NEO+Hospital+3+Pratap+Nagar+Tedhi+Pulia+Ring+Road+Lucknow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold text-xs sm:text-sm py-3 rounded-xl transition shadow flex items-center justify-center gap-2"
                >
                  <Compass className="w-4 h-4" /> Open in Google Maps
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Embedded Google Map & Real Street Sign */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <div className="h-[400px] sm:h-[480px] w-full rounded-3xl overflow-hidden border-2 border-slate-200 shadow-md relative">
              <iframe
                title="NEO Hospital Lucknow Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.331464376483!2d80.9500!3d26.9064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39995777a8a64983%3A0x6b13e5124043b2f2!2sTedhi%20Pulia%20Ring%20Rd%2C%20Lucknow%2C%20Uttar%20Pradesh%20226022!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>

              {/* Pin Overlay Card */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md border border-slate-200 p-3 rounded-2xl shadow-lg max-w-xs">
                <div className="flex items-center gap-2 text-xs font-bold text-red-600">
                  <MapPin className="w-4 h-4 fill-red-600 text-red-600" />
                  <span>NEO HOSPITAL</span>
                </div>
                <p className="text-[11px] text-slate-700 font-medium mt-0.5">
                  3, Pratap Nagar, Tedhi Pulia, Ring Road, Lucknow - 226022
                </p>
              </div>
            </div>

            {/* Quick Map Bar */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex flex-wrap items-center justify-between gap-4 text-xs text-slate-700">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Dedicated Emergency Drop-off &amp; Stretcher Ramp</span>
              </span>
              <a
                href={`tel:${HOSPITAL_INFO.helpline}`}
                className="text-red-600 font-bold hover:underline flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5" /> Emergency Dispatch: {HOSPITAL_INFO.helpline}
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
