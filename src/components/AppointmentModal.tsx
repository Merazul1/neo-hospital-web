import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, Stethoscope, AlertCircle, CheckCircle2, X, MessageSquare } from 'lucide-react';
import { HOSPITAL_INFO, FACILITIES_BOARD_LIST, DOCTORS_ROSTER } from '../data/hospitalData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDepartment?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  defaultDepartment = ""
}) => {
  const [patientName, setPatientName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [department, setDepartment] = useState(defaultDepartment);
  const [preferredDate, setPreferredDate] = useState('');
  const [urgency, setUrgency] = useState<'routine' | 'urgent'>('routine');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (defaultDepartment) {
      setDepartment(defaultDepartment);
    }
  }, [defaultDepartment]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName || !phoneNumber) return;
    setIsSubmitted(true);
  };

  const handleWhatsAppRoute = () => {
    const text = encodeURIComponent(
      `Hello NEO Hospital Lucknow,\nI would like to book a consultation:\n- Patient: ${patientName}\n- Phone: ${phoneNumber}\n- Department/Doctor: ${department || 'General Consultation'}\n- Date: ${preferredDate || 'Earliest Slot'}\n- Urgency: ${urgency}\n- Medical Concern: ${notes || 'Not specified'}`
    );
    window.open(`https://wa.me/${HOSPITAL_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Header */}
            <div className="space-y-1 mb-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md">
                Fast-Track OPD &amp; Bed Reservation
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-2">
                Book a Consultation at NEO Hospital
              </h3>
              <p className="text-xs text-slate-500">
                Tedhi Pulia, Ring Road, Lucknow • Direct Confirmation
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Patient Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Patient Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder="Enter patient's name"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Contact Mobile Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="10-digit mobile number"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              {/* Department / Specialty */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Clinical Specialty / Department
                </label>
                <div className="relative">
                  <Stethoscope className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
                  >
                    <option value="">Select Specialty / Doctor</option>
                    <optgroup label="Core Specialties">
                      {FACILITIES_BOARD_LIST.map((f) => (
                        <option key={f.id} value={f.nameEn}>
                          {f.nameEn} ({f.nameHi})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Specialist Doctors">
                      {DOCTORS_ROSTER.map((d) => (
                        <option key={d.id} value={`${d.name} (${d.department})`}>
                          {d.name} - {d.department}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>
              </div>

              {/* Preferred Date & Urgency */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Care Priority
                  </label>
                  <select
                    value={urgency}
                    onChange={(e) => setUrgency(e.target.value as 'routine' | 'urgent')}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
                  >
                    <option value="routine">Routine OPD Consultation</option>
                    <option value="urgent">Urgent / Emergency Bed Inquiry</option>
                  </select>
                </div>
              </div>

              {/* Notes / Symptoms */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Symptoms or Remarks (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Briefly describe patient condition or required surgery..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                ></textarea>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-xl transition shadow flex items-center justify-center gap-2 text-sm"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm Appointment Request</span>
                </button>

                <p className="text-[11px] text-center text-slate-500">
                  Or call directly for immediate emergency triage: <a href={`tel:${HOSPITAL_INFO.helpline}`} className="text-red-600 font-bold underline">{HOSPITAL_INFO.helpline}</a>
                </p>
              </div>

            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black text-slate-900">
                Request Received Successfully!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                Thank you, <strong>{patientName}</strong>. Our hospital coordinator at Tedhi Pulia will call you shortly at <strong>{phoneNumber}</strong> to confirm your slot.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-1.5">
              <div><strong>Hospital:</strong> NEO Hospital, 3 Pratap Nagar, Tedhi Pulia, Ring Road, Lucknow</div>
              <div><strong>Department:</strong> {department || 'General Consultation'}</div>
              <div><strong>Urgency:</strong> {urgency === 'urgent' ? 'Immediate Triage' : 'Routine OPD'}</div>
              <div><strong>Helpline:</strong> {HOSPITAL_INFO.helpline}</div>
            </div>

            <div className="space-y-2 pt-2">
              <button
                onClick={handleWhatsAppRoute}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl transition shadow flex items-center justify-center gap-2 text-xs sm:text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Details via WhatsApp for Instant Slip</span>
              </button>

              <button
                onClick={onClose}
                className="w-full bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold py-2.5 rounded-xl transition text-xs"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
