import React from 'react';
import { Phone, Calendar, MessageSquare, Ambulance } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

interface EmergencyFloatingBarProps {
  onOpenAppointment: () => void;
}

export const EmergencyFloatingBar: React.FC<EmergencyFloatingBarProps> = ({ onOpenAppointment }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-2 sm:p-3 shadow-2xl lg:hidden">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        
        {/* Call Emergency Helpline */}
        <a
          href={`tel:${HOSPITAL_INFO.helpline}`}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 px-2 rounded-xl text-xs flex flex-col items-center justify-center gap-1 shadow transition text-center animate-pulse"
        >
          <Phone className="w-4 h-4" />
          <span className="leading-tight">Call 24/7 ICU</span>
        </a>

        {/* WhatsApp Helpline */}
        <a
          href={`https://wa.me/${HOSPITAL_INFO.whatsapp}?text=Hello%20NEO%20Hospital,%20I%20need%20assistance%20with%20an%20OPD/Emergency%20inquiry`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-2 rounded-xl text-xs flex flex-col items-center justify-center gap-1 shadow transition text-center"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="leading-tight">WhatsApp Desk</span>
        </a>

        {/* Book Appointment Modal */}
        <button
          onClick={onOpenAppointment}
          className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2.5 px-2 rounded-xl text-xs flex flex-col items-center justify-center gap-1 shadow transition text-center"
        >
          <Calendar className="w-4 h-4" />
          <span className="leading-tight">Book OPD</span>
        </button>

      </div>
    </div>
  );
};
