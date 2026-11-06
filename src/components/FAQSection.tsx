import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Phone, MessageSquare } from 'lucide-react';
import { FAQ_DATA, FAQItem, HOSPITAL_INFO } from '../data/hospitalData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const filteredFaqs = FAQ_DATA.filter(item => {
    if (filterCategory === 'all') return true;
    return item.category === filterCategory;
  });

  // Prepare FAQPage schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_DATA.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-slate-50 relative">
      {/* FAQ Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
            Patient Support &amp; Information
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Clear answers regarding emergency admissions, cashless mediclaim, chemotherapy, and ICU facilities.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
          {[
            { id: 'all', label: 'All FAQs' },
            { id: 'emergency', label: 'Emergency & Location' },
            { id: 'icu', label: 'ICU & Ventilator' },
            { id: 'cancer', label: 'Cancer & Chemotherapy' },
            { id: 'insurance', label: 'Cashless & TPA' },
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition shadow-sm ${
                filterCategory === cat.id
                  ? 'bg-teal-600 text-white shadow'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition hover:border-teal-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-teal-700 transition"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base leading-snug">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-600">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-teal-600" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in-50 duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-3 shadow-sm">
          <p className="text-sm font-bold text-slate-900">
            Have a specific clinical or admission query?
          </p>
          <p className="text-xs text-slate-500">
            Our medical coordination desk is available 24 hours a day to assist patients and families.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <a
              href={`tel:${HOSPITAL_INFO.helpline}`}
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition shadow flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" /> Call Helpline: {HOSPITAL_INFO.helpline}
            </a>
            <a
              href={`https://wa.me/${HOSPITAL_INFO.whatsapp}?text=Hello%20NEO%20Hospital,%20I%20have%20an%20inquiry%20regarding%20treatment`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition shadow flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" /> Chat on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
