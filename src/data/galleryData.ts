export interface GalleryPhoto {
  id: string;
  title: string;
  titleHi: string;
  category: 'all' | 'infrastructure' | 'ot' | 'icu' | 'opd' | 'documents';
  categoryLabel: string;
  categoryLabelHi: string;
  src: string;
  thumbnail?: string;
  alt: string;
  caption: string;
  captionHi: string;
  badges: string[];
  featured?: boolean;
}

export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All Photos', labelHi: 'सभी फोटो (12)' },
  { id: 'infrastructure', label: 'Campus & Building', labelHi: 'भवन व परिसर' },
  { id: 'ot', label: 'Operation Theaters & Surgeries', labelHi: 'ऑपरेशन थिएटर व सर्जरी' },
  { id: 'icu', label: 'ICU & Inpatient Care', labelHi: 'आईसीयू व वार्ड' },
  { id: 'opd', label: 'Reception & Consultation', labelHi: 'रिसेप्शन व ओपीडी' },
  { id: 'documents', label: 'Official Documents & Posters', labelHi: 'आधिकारिक पोस्टर व ब्रोशर' },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "photo-night-facade",
    title: "NEO Hospital Building & 24/7 Emergency Facade (Night View)",
    titleHi: "नियो हॉस्पिटल भवन एवं 24/7 आपातकालीन परिसर (रात्रि दृश्य)",
    category: "infrastructure",
    categoryLabel: "Infrastructure",
    categoryLabelHi: "भवन व परिसर",
    src: "/images/neo-building-night.jpg",
    alt: "NEO Hospital building night view with illuminated red cross and neon signage in Lucknow",
    caption: "Round-the-clock emergency hospital facade at 3, Pratap Nagar, Tedhi Pulia, Ring Road, Lucknow. Features unobstructed ambulance drop-off bay, 24/7 triage, and luminous highway identification.",
    captionHi: "3, प्रताप नगर, टेढ़ी पुलिया, रिंग रोड, लखनऊ पर स्थित नियो हॉस्पिटल का 24 घंटे क्रियाशील आपातकालीन भवन। सुगम एम्बुलेंस प्रवेश एवं त्वरित भर्ती सुविधा।",
    badges: ["24/7 Emergency Ready", "Tedhi Pulia Ring Road", "Ambulance Bay"],
    featured: true
  },
  {
    id: "photo-carm-surgery",
    title: "Advanced Orthopedic Surgery & C-ARM Guided Joint Replacement",
    titleHi: "मॉड्यूलर ओटी एवं C-ARM द्वारा हड्डी व जोड़ प्रत्यारोपण",
    category: "ot",
    categoryLabel: "Surgeries & OT",
    categoryLabelHi: "ऑपरेशन थिएटर",
    src: "/images/neo-surgery-ortho.jpg",
    alt: "Orthopedic surgery team operating in modular theater with C-ARM fluoroscopy machine at NEO Hospital",
    caption: "Sterile laminar airflow surgical suite equipped with advanced C-ARM fluoroscopy for sub-millimeter precision in Total Knee Replacement (TKR), Total Hip Replacement (THR), and trauma fracture plating.",
    captionHi: "संक्रमण-मुक्त लैमिनार एयरफ्लो ऑपरेशन थिएटर एवं C-ARM इमेज इन्टेन्सीफायर। घुटना व कूल्हा प्रत्यारोपण एवं फ्रैक्चर सर्जरी में मिलीमीटर-सटीक परिणाम।",
    badges: ["C-ARM Guided", "Zero-Infection Modular OT", "Total Knee & Hip"],
    featured: true
  },
  {
    id: "photo-facilities-board",
    title: "Main Reception Lobby & Complete Clinical Facilities Board",
    titleHi: "मुख्य रिसेप्शन लॉबी एवं हॉस्पिटल सुविधाएं बोर्ड",
    category: "opd",
    categoryLabel: "OPD & Reception",
    categoryLabelHi: "रिसेप्शन व ओपीडी",
    src: "/images/neo-facilities-board.jpg",
    alt: "NEO Hospital reception lobby and public facilities board showing healthcare services",
    caption: "Central reception lobby featuring the official clinical facilities board, 24/7 patient enquiry counter, Cashless TPA insurance desk, and computerised billing stations.",
    captionHi: "मरीज स्वागत कक्ष, 24 घंटे परामर्श व पूछताछ काउंटर, कैशलेस मेडिक्लेम हेल्पडेस्क एवं अस्पताल की समस्त सुविधाओं का आधिकारिक बोर्ड।",
    badges: ["Central Enquiry", "Cashless TPA Helpdesk", "Patient Lobby"],
    featured: true
  },
  {
    id: "photo-official-poster",
    title: "Official Faculty Poster: All 34 Specialists & Hospital Services",
    titleHi: "आधिकारिक पोस्टर: सभी 34 अनुभवी विशेषज्ञ डॉक्टर एवं चिकित्सा सुविधाएं",
    category: "documents",
    categoryLabel: "Official Brochures",
    categoryLabelHi: "आधिकारिक पोस्टर व ब्रोशर",
    src: "/images/neo-poster-full.jpg",
    alt: "Official NEO Hospital full poster with 34 doctors and 13 medical departments",
    caption: "Official verified faculty poster listing 34 consultants across Oncology, Neuro Surgery, Orthopedics, Gastroenterology, Gynecology, Pediatrics, Nephrology, Urology, ENT, and Critical Care.",
    captionHi: "कैंसर, न्यूरो सर्जरी, हड्डी रोग, पेट रोग, स्त्री रोग, बाल रोग, गुर्दा रोग आदि के सभी 34 विशेषज्ञ डॉक्टरों का आधिकारिक अस्पताल रोस्टर।",
    badges: ["34 Doctors Roster", "13 Departments", "Verified Faculty"],
    featured: true
  },
  {
    id: "photo-day-facade",
    title: "Hospital Daytime Campus, Parking & Main Gate",
    titleHi: "दिन के समय अस्पताल परिसर, वाहन पार्किंग व मुख्य प्रवेश द्वार",
    category: "infrastructure",
    categoryLabel: "Infrastructure",
    categoryLabelHi: "भवन व परिसर",
    src: "/images/gallery/hospital-facade-day.jpg",
    alt: "Daytime view of NEO Hospital exterior with visitor parking on Ring Road Lucknow",
    caption: "Spacious daytime entrance situated on the broad Ring Road corridor at Tedhi Pulia, providing smooth drive-in access for emergency ambulances and visitor parking.",
    captionHi: "टेढ़ी पुलिया रिंग रोड मुख्य मार्ग पर चौड़े प्रवेश द्वार के साथ आपातकालीन वाहनों एवं आगंतुकों के लिए सुविधाजनक पार्किंग व्यवस्था।",
    badges: ["Broad Ring Road", "Wheelchair Ramp", "Visitor Parking"]
  },
  {
    id: "photo-laparoscopic-ot",
    title: "Modular Laparoscopic & Emergency Surgical Theater",
    titleHi: "दूरबीन द्वारा आपरेशन (लैप्रोस्कोपिक) एवं आधुनिक सर्जिकल थिएटर",
    category: "ot",
    categoryLabel: "Surgeries & OT",
    categoryLabelHi: "ऑपरेशन थिएटर",
    src: "/images/gallery/hospital-operation-theater.jpg",
    alt: "Surgeons performing laparoscopic surgery under sterile surgical lights at NEO Hospital",
    caption: "High-definition endoscopic tower and harmonic scalpel enabling minimally invasive (दूरबीन द्वारा) procedures for gallbladder stones, appendix, hernia, and acute abdomen with 24-hr discharge.",
    captionHi: "पित्त की पथरी, अपेंडिक्स, हर्निया के दूरबीन आपरेशन हेतु आधुनिक लैप्रोस्कोपिक टावर। न्यूनतम चीरा, कम दर्द एवं 24 घंटे में छुट्टी।",
    badges: ["HD Laparoscopy", "Pin-Hole Cuts", "Minimal Scarring"]
  },
  {
    id: "photo-ward-icu",
    title: "Inpatient Bed Units & Multipara Vital Monitoring",
    titleHi: "आईसीयू व इनपेशेंट वार्ड (मल्टीपैरा मॉनिटर एवं नर्सिंग देखभाल)",
    category: "icu",
    categoryLabel: "ICU & Inpatient",
    categoryLabelHi: "आईसीयू व वार्ड",
    src: "/images/gallery/hospital-ward-icu.jpg",
    alt: "NEO Hospital inpatient beds with multiparameter patient monitors and central oxygen",
    caption: "Well-ventilated inpatient ward with motorized Fowler beds, central pipeline oxygen, suction ports, and continuous cardiac/respiratory multipara monitors under round-the-clock nursing supervision.",
    captionHi: "मरीजों की 24 घंटे देखरेख हेतु मल्टीपैरा मॉनिटर, केंद्रीय ऑक्सीजन पाइपलाइन, आरामदायक बेड एवं प्रशिक्षित नर्सिंग स्टाफ।",
    badges: ["Continuous Monitoring", "Central Oxygen", "24/7 Nursing"]
  },
  {
    id: "photo-reception-counter",
    title: "Patient Registration Desk & OPD Token Counter",
    titleHi: "मरीज रजिस्ट्रेशन डेस्क एवं ओपीडी परामर्श केंद्र",
    category: "opd",
    categoryLabel: "OPD & Reception",
    categoryLabelHi: "रिसेप्शन व ओपीडी",
    src: "/images/gallery/hospital-reception.jpg",
    alt: "NEO Hospital modern reception desk and patient registration staff",
    caption: "Comfortable reception area where dedicated administrative coordinators handle OPD tokens, doctor appointment bookings, insurance approvals, and emergency admissions.",
    captionHi: "ओपीडी पर्चा, डॉक्टर परामर्श समय, आपातकालीन दाखिला एवं मरीज मार्गदर्शन हेतु समर्पित रिसेप्शन काउंटर।",
    badges: ["Quick Registration", "Digital Tokens", "Patient Support"]
  },
  {
    id: "photo-doctor-consult",
    title: "Specialist Consultant Chamber & Patient Counseling",
    titleHi: "विशेषज्ञ डॉक्टर परामर्श कक्ष एवं मरीज मार्गदर्शन",
    category: "opd",
    categoryLabel: "OPD & Reception",
    categoryLabelHi: "रिसेप्शन व ओपीडी",
    src: "/images/gallery/hospital-doctor-consultation.jpg",
    alt: "Doctor providing diagnostic guidance to patient and family in consultation chamber",
    caption: "Private consultant chambers equipped with anatomical diagnostic models and digital reports review for in-depth doctor-patient discussions and personalized treatment plans.",
    captionHi: "मरीजों एवं उनके परिजनों को बीमारी, उपचार विकल्प व दवाइयों की विस्तृत जानकारी हेतु शांत व निजी परामर्श कक्ष।",
    badges: ["Private Consultation", "Diagnostic Guidance", "Treatment Planning"]
  },
  {
    id: "photo-modern-wing",
    title: "Multispeciality Medical Wing & Infrastructure",
    titleHi: "सुपरस्पेशलिटी आधुनिक चिकित्सा विंग व परिसर",
    category: "infrastructure",
    categoryLabel: "Infrastructure",
    categoryLabelHi: "भवन व परिसर",
    src: "/images/gallery/hospital-modern-building.jpg",
    alt: "Modern multistory medical wing of NEO Hospital in Lucknow",
    caption: "Engineered multispecialty healthcare infrastructure designed with dedicated vertical corridors for emergency triage, sterile OT zones, and infection-controlled inpatient wards.",
    captionHi: "आपातकालीन ट्राइएज, रोगाणुरहित ओटी जोन एवं संक्रमण-नियंत्रित वार्डों के साथ आधुनिक बहुमंजिला अस्पताल संरचना।",
    badges: ["Engineered Infrastructure", "Zero Cross-Infection", "Elevator Access"]
  },
  {
    id: "photo-pamphlet-full",
    title: "Clinical Specialties & Keyhole Surgery Directory (Pamphlet)",
    titleHi: "समस्त चिकित्सा सुविधाएं एवं दूरबीन आपरेशन विवरण पुस्तिका",
    category: "documents",
    categoryLabel: "Official Brochures",
    categoryLabelHi: "आधिकारिक पोस्टर व ब्रोशर",
    src: "/images/neo-doctors-brochure.jpg",
    alt: "Official pamphlet of NEO Hospital listing surgical and clinical facilities",
    caption: "Comprehensive clinical handbook detailing neurotrauma, brain hemorrhage, stroke care, cancer surgery, dialysis, C-ARM orthopedics, and pediatric emergency services.",
    captionHi: "न्यूरोसर्जरी, कैंसर सर्जरी, डायलिसिस, सी-आर्म ऑर्थोपेडिक एवं बाल रोग आपातकालीन सेवाओं की संपूर्ण विवरण पुस्तिका।",
    badges: ["Complete Specialties", "Surgical Directory", "Official Pamphlet"]
  },
  {
    id: "photo-highway-banner",
    title: "Ring Road Landmark Banner & 24/7 Helpline Signage",
    titleHi: "रिंग रोड मुख्य मार्ग साइनेज एवं 24 घंटे हेल्पलाइन बैनर",
    category: "infrastructure",
    categoryLabel: "Infrastructure",
    categoryLabelHi: "भवन व परिसर",
    src: "/images/neo-banner.jpg",
    alt: "NEO Hospital Ring Road entrance banner showing helpline 9919722223",
    caption: "High-visibility arterial road banner along Tedhi Pulia, Ring Road, assisting ambulances, taxis, and incoming patients from Vikas Nagar, Aliganj, and Jankipuram to locate the hospital instantly.",
    captionHi: "रिंग रोड मुख्य मार्ग पर स्थापित स्पष्ट साइनेज, जिससे आपातकालीन स्थिति में मरीज व एम्बुलेंस बिना किसी भटकाव के अस्पताल पहुंच सकें।",
    badges: ["Highway Visibility", "Helpline 9919722223", "Instant Landmark"]
  }
];
