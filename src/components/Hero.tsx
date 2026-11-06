import React from 'react';
import { Phone, MapPin, Calendar, Clock, ShieldCheck, Heart, ArrowRight, Ambulance, CheckCircle2, MessageCircle } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

interface HeroProps {
  onOpenAppointment: (dept?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointment }) => {
  return (
    <section id="home" className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-teal-950 text-white overflow-hidden pt-6 pb-16 sm:py-20">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Local SEO Headings & Rapid Triage Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Trust Badges */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-950/80 border border-teal-500/40 text-teal-300 text-xs sm:text-sm font-medium backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
              <span>Tedhi Pulia, Ring Road • North Lucknow’s Trusted Healthcare Hub</span>
            </div>

            {/* Main H1 for Local SEO */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
                NEO <span className="text-red-500">HOSPITAL</span>
              </h1>
              <p className="text-lg sm:text-2xl font-bold text-teal-400">
                Superspeciality Hospital &amp; Cancer Center
              </p>
              <p className="text-sm sm:text-base font-medium text-slate-300 italic flex items-center gap-2">
                <Heart className="w-4 h-4 text-red-500 fill-red-500 inline" />
                "A better place to get better"
              </p>
            </div>

            {/* Address & Catchment snippet */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Providing round-the-clock tertiary emergency care, advanced <strong>ICU &amp; NICU Ventilator support</strong>, 
              modern <strong>Chemotherapy &amp; Cancer Surgery</strong>, precision <strong>Orthopedic Joint Replacement</strong> with C-ARM, 
              and <strong>Laparoscopic Surgery (दूरबीन द्वारा आपरेशन)</strong> at 3, Pratap Nagar, Tedhi Pulia, Ring Road, Lucknow.
            </p>

            {/* Quick Emergency Callout Banner */}
            <div className="bg-gradient-to-r from-red-950/80 to-slate-900 border-2 border-red-500/70 p-4 sm:p-5 rounded-2xl shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center shrink-0 shadow-lg">
                  <Ambulance className="w-7 h-7 text-white animate-bounce" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-red-300 block">
                    24/7 Emergency &amp; Ambulance Hotline
                  </span>
                  <a 
                    href={`tel:${HOSPITAL_INFO.helpline}`}
                    className="text-2xl sm:text-3xl font-black text-white hover:text-red-300 transition tracking-wide"
                  >
                    {HOSPITAL_INFO.helpline}
                  </a>
                </div>
              </div>
              <a
                href={`tel:${HOSPITAL_INFO.helpline}`}
                className="w-full sm:w-auto text-center bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-2.5 rounded-xl shadow-md transition flex items-center justify-center gap-2 shrink-0"
              >
                <Phone className="w-4 h-4" /> Call Ambulance Now
              </a>
            </div>

            {/* Rapid Conversion Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenAppointment()}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg transition"
              >
                <Calendar className="w-5 h-5" />
                <span>Book OPD Consultation</span>
              </button>

              <a
                href={`https://wa.me/${HOSPITAL_INFO.whatsapp}?text=Hello%20NEO%20Hospital,%20I%20want%20to%20inquire%20about%20OPD/Emergency%20services`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg transition"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Desk</span>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold px-5 py-3.5 rounded-xl transition"
              >
                <MapPin className="w-4 h-4 text-teal-400" />
                <span>Directions &amp; Map</span>
              </a>
            </div>

            {/* Core Infrastructure Bullet Tags */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 pt-4 border-t border-slate-800/80">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>24/7 ICU &amp; NICU Beds</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Chemotherapy Daycare</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>C-ARM Guided Joint Replacements</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>दूरबीन द्वारा आपरेशन (Laparoscopy)</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>बाल रोग चिकित्सा (Pediatrics)</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Cashless TPA &amp; Insurance</span>
              </div>
            </div>

          </div>

          {/* Right Column: Real Hospital Building Night Facade & Live Badges */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border-2 border-teal-500/30 shadow-2xl group">
              <img 
                src="/images/neo-building-night.jpg" 
                alt="NEO Hospital Superspeciality Hospital and Cancer Center Building Night View at Tedhi Pulia Ring Road Lucknow"
                className="w-full h-[380px] sm:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>

              {/* Verified Hospital Badge */}
              <div className="absolute top-4 left-4 bg-slate-900/90 border border-teal-400/50 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  24/7 Active Facility
                </span>
              </div>

              {/* Overlay Address Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 border border-slate-700/80 backdrop-blur-md p-4 rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">
                    Actual Hospital Facade
                  </span>
                  <span className="text-xs bg-red-600/90 text-white font-bold px-2 py-0.5 rounded">
                    24x7 Emergency Ready
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                  3, Pratap Nagar, Tedhi Pulia, Ring Road, Lucknow
                </h3>
                <p className="text-xs text-slate-300">
                  Direct arterial connectivity from Tedhi Pulia Chauraha, Aliganj, Jankipuram &amp; Vikas Nagar.
                </p>
              </div>
            </div>

            {/* Quick Metrics Bar below image */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl">
                <div className="text-xl sm:text-2xl font-black text-teal-400">15+</div>
                <div className="text-[11px] text-slate-400 font-medium">Specialities &amp; OT</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl">
                <div className="text-xl sm:text-2xl font-black text-red-400">24/7</div>
                <div className="text-[11px] text-slate-400 font-medium">ICU &amp; Ventilators</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl">
                <div className="text-xl sm:text-2xl font-black text-teal-400">100%</div>
                <div className="text-[11px] text-slate-400 font-medium">Laminar Sterile OT</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
