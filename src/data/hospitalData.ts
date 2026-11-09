export interface Specialty {
  id: string;
  nameEn: string;
  nameHi: string;
  slug: string;
  icon: string;
  shortDesc: string;
  fullDesc: string;
  keyProcedures: string[];
  equipment: string[];
  opdSchedule: string;
  emergencyReady: boolean;
  featuredImage?: string;
  badges: string[];
}

export interface Doctor {
  id: string;
  name: string;
  nameHi: string;
  qualifications: string;
  department: string;
  departmentCategory: string;
  designation: string;
  opdTimings: string;
  days: string;
  expertise: string[];
}

export interface CatchmentArea {
  name: string;
  distance: string;
  travelTime: string;
  landmarks: string[];
  routeDescription: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'emergency' | 'insurance' | 'cancer' | 'icu' | 'general';
}

export const HOSPITAL_INFO = {
  name: "NEO Hospital",
  fullTitle: "Superspeciality Hospital & Cancer Center",
  tagline: "A better place to get better",
  helpline: "9919722223",
  whatsapp: "919919722223",
  address: "3, Pratap Nagar, Tedhi Pulia, Ring Road, Lucknow, Uttar Pradesh – 226022",
  city: "Lucknow",
  state: "Uttar Pradesh",
  pincode: "226022",
  geo: {
    lat: 26.9064,
    lng: 80.9572,
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.077209706346!2d80.954848!3d26.906412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39995777a8a64983%3A0x6b13e5124043b2f2!2sTedhi%20Pulia%20Ring%20Rd%2C%20Lucknow%2C%20Uttar%20Pradesh%20226022!5e0!3m2!1sen!2sin!4v1700000000000"
  },
  emergencyHours: "24 Hours / 7 Days (Round-the-Clock Critical Care & Ambulance)",
  opdHours: "Monday – Saturday: 9:00 AM – 8:00 PM | Sunday: 10:00 AM – 2:00 PM",
  domain: "www.neohospitallucknow.com",
  websiteUrl: "https://www.neohospitallucknow.com",
  instagram: "https://www.instagram.com/neohospital_/",
  instagramHandle: "@neohospital_",
  email: "care@neohospitallucknow.com",
  emergencyEmail: "emergency@neohospitallucknow.com"
};

// All 15 Facilities from the Official Facility Board
export const FACILITIES_BOARD_LIST: Specialty[] = [
  {
    id: "icu",
    nameEn: "Intensive Care Unit (ICU)",
    nameHi: "आई.सी.यू.",
    slug: "critical-care/icu-nicu-lucknow",
    icon: "Activity",
    shortDesc: "Advanced multi-bed tertiary ICU with invasive arterial lines, multi-para hemodynamic monitors, and 24/7 intensivist coverage.",
    fullDesc: "NEO Hospital's Intensive Care Unit is engineered for life-threatening acute medical and surgical crises. Managed by resident intensivists and trained critical care nurses, the unit maintains strict infection control and dedicated isolation cubicles.",
    keyProcedures: ["Central Venous Catheterization", "Arterial Blood Gas (ABG) Analysis", "Advanced Hemodynamic Monitoring", "Emergency Resuscitation & Defibrillation", "Multi-Organ Failure Management"],
    equipment: ["Mindray Multi-parameter Monitors", "Defibrillators with Pacing", "Syringe & Infusion Pumps", "Bedside Sonography & Echo"],
    opdSchedule: "24/7 Inpatient Care & Round-the-Clock Emergency Admissions",
    emergencyReady: true,
    badges: ["24/7 Intensivist", "Sterile Isolation", "Zero Delay Triage"]
  },
  {
    id: "nicu",
    nameEn: "Neonatal Intensive Care Unit (NICU)",
    nameHi: "एन.आई.सी.यू.",
    slug: "critical-care/icu-nicu-lucknow",
    icon: "Baby",
    shortDesc: "Level-III Neonatal care for premature newborns, low birth weight infants, neonatal jaundice, and congenital complications.",
    fullDesc: "Our NICU provides compassionate, highly specialized care for fragile neonates. Equipped with radiant warmers, advanced neonatal ventilators, LED phototherapy units, and supervised by experienced neonatologists.",
    keyProcedures: ["Surfactant Replacement Therapy", "Neonatal Resuscitation", "Exchange Transfusion", "Kangaroo Mother Care", "Total Parenteral Nutrition (TPN)"],
    equipment: ["Neonatal High-Frequency Ventilators", "Radiant Baby Warmers", "Bili-Blanket LED Phototherapy", "Transport Incubators"],
    opdSchedule: "24/7 Neonatal Emergency Coverage",
    emergencyReady: true,
    badges: ["Level-III NICU", "Neonatologist on Duty", "Premature Care"]
  },
  {
    id: "ventilator",
    nameEn: "Advanced Ventilator Support",
    nameHi: "वेंटीलेटर",
    slug: "critical-care",
    icon: "Wind",
    shortDesc: "High-end invasive and non-invasive mechanical ventilators for acute respiratory distress, ARDS, trauma, and post-op care.",
    fullDesc: "We provide microprocessor-controlled mechanical ventilation with real-time waveform monitoring, BiPAP, CPAP, and lung-protective ventilation strategies under continuous intensivist supervision.",
    keyProcedures: ["Endotracheal Intubation", "Non-Invasive Ventilation (BiPAP/CPAP)", "Percutaneous Tracheostomy", "ARDS Lung Recruitment Maneuvers"],
    equipment: ["Dräger & Hamilton High-End Mechanical Ventilators", "Capnography", "Dedicated Medical Gas Pipeline"],
    opdSchedule: "24/7 Critical Availability",
    emergencyReady: true,
    badges: ["Invasive & NIV Support", "ARDS Protocol", "Dedicated Oxygen Supply"]
  },
  {
    id: "chemotherapy",
    nameEn: "Chemotherapy Daycare Unit",
    nameHi: "कीमोथेरेपी",
    slug: "cancer-care/chemotherapy-lucknow",
    icon: "Pill",
    shortDesc: "State-of-the-art chemotherapy daycare suite for solid tumors and hematological malignancies with biological & immunotherapy.",
    fullDesc: "Our Chemotherapy Center offers personalized systemic therapy in a comfortable, sterile daycare setting. Protocols are guided by medical oncologists with specialized antiemetic prophylaxis and biosafety laminar airflow preparation.",
    keyProcedures: ["Targeted Therapy Infusions", "Immunotherapy Sessions", "Hormonal Therapy Protocols", "Chemo Port Access & Maintenance", "Palliative Symptom Relief"],
    equipment: ["Biological Safety Cabinet (Class II)", "Dedicated Infusion Recliners", "Emergency Crash Cart"],
    opdSchedule: "Monday – Saturday: 9:00 AM – 6:00 PM",
    emergencyReady: true,
    badges: ["Daycare Chemoport", "Sterile Laminar Hood", "Zero-Nausea Protocols"]
  },
  {
    id: "cancer-surgery",
    nameEn: "Cancer Surgery & Surgical Oncology",
    nameHi: "कैंसर सर्जरी",
    slug: "cancer-care/surgical-oncology",
    icon: "ShieldAlert",
    shortDesc: "Organ-preserving and radical oncological surgeries for head & neck, breast, gastrointestinal, gynecological, and thoracic cancers.",
    fullDesc: "Our surgical oncologists follow evidence-based margins and multidisciplinary tumor board consensus. Supported by modular laminar airflow operating rooms, frozen section pathology, and post-surgical ICU monitoring.",
    keyProcedures: ["Radical Mastectomy & Breast Conserving Surgery", "Head & Neck Composite Resection", "Gastrointestinal Onco-Surgeries", "Gynecological Cancer Resection", "Soft Tissue Sarcoma Surgery"],
    equipment: ["Ultrasonic Harmonic Scalpel", "Bipolar Vessel Sealer", "Laminar Flow Modular OT"],
    opdSchedule: "Monday – Saturday: 10:00 AM – 5:00 PM (Surgeries by Schedule)",
    emergencyReady: true,
    badges: ["Tumor Board", "Laminar Modular OT", "Radical Precision"]
  },
  {
    id: "orthopedic-surgery",
    nameEn: "Orthopedic Surgery & Joint Replacement",
    nameHi: "ऑर्थोपेडिक सर्जन",
    slug: "specialties/orthopedics-joint-replacement",
    icon: "Bone",
    shortDesc: "Comprehensive Total Knee (TKR) & Total Hip (THR) Replacement, complex trauma reconstruction, and fracture fixation.",
    fullDesc: "Equipped with state-of-the-art C-ARM fluoroscopy and laminar airflow OT to prevent infection. We execute minimally invasive joint replacements ensuring rapid rehabilitation, reduced blood loss, and walking within 24-48 hours.",
    keyProcedures: ["Total Knee Replacement (TKR)", "Total Hip Replacement (THR)", "Polytrauma & Complex Fracture Fixation", "Arthroscopic Ligament Reconstruction", "Geriatric Hip Fracture Surgery"],
    equipment: ["High-Definition C-ARM Image Intensifier", "Pneumatic Bone Drills & Saws", "Implant Tracker System"],
    opdSchedule: "Daily: 10:00 AM – 7:00 PM",
    emergencyReady: true,
    featuredImage: "/images/neo-surgery-ortho.jpg",
    badges: ["Fast-Track Rehab", "C-ARM Precision", "Trauma Fixation 24/7"]
  },
  {
    id: "laparoscopic-surgery",
    nameEn: "Laparoscopic Surgery (Keyhole Surgery)",
    nameHi: "दूरबीन द्वारा आपरेशन",
    slug: "specialties/laparoscopic-surgery",
    icon: "Eye",
    shortDesc: "Minimally invasive keyhole procedures for gallbladder stones, appendix, hernia, and abdominal conditions with minimal scarring.",
    fullDesc: "With 4K laparoscopic vision towers, our surgeons perform pin-hole surgeries with near-zero blood loss, minimal post-operative pain, negligible infection risk, and same-day or next-day discharge.",
    keyProcedures: ["Laparoscopic Cholecystectomy (Gallbladder Stones)", "Laparoscopic Appendectomy", "Laparoscopic Inguinal & Ventral Hernia (TEP/TAPP)", "Diagnostic Laparoscopy & Adhesiolysis"],
    equipment: ["Karl Storz / Stryker High-Definition Laparoscopy Tower", "Harmonic Scalpel", "Endocameras"],
    opdSchedule: "Monday – Saturday: 10:00 AM – 6:00 PM",
    emergencyReady: true,
    badges: ["Pin-Hole Cuts", "1-Day Discharge", "Minimal Pain"]
  },
  {
    id: "c-arm",
    nameEn: "C-ARM Image Intensifier",
    nameHi: "C-ARM (इमेज इन्टेन्सीफायर)",
    slug: "specialties/orthopedics-joint-replacement",
    icon: "Radio",
    shortDesc: "Real-time intraoperative high-resolution X-ray imaging for orthopedic trauma, spine procedures, and uro-surgery.",
    fullDesc: "Intraoperative C-ARM fluoroscopy allows surgeons to visualize bones, joints, and surgical instruments live inside the operating room. Guarantees millimeter-accurate placement of implants, interlocking nails, and catheters.",
    keyProcedures: ["Intraoperative Fracture Alignment", "Interlocking Nail Fixation", "Spine Pedicle Screw Insertion", "Percutaneous Nephrolithotomy Guidance"],
    equipment: ["High-Frequency Mobile C-ARM X-Ray Machine", "Lead-Shielded Modular Theater Suite"],
    opdSchedule: "Operational in Theater 24/7 for Scheduled & Trauma Cases",
    emergencyReady: true,
    badges: ["Zero Radiation Leakage", "Sub-Millimeter Imaging", "OT Live Guidance"]
  },
  {
    id: "neuro-surgery",
    nameEn: "Neuro Surgery & Neurology",
    nameHi: "न्यूरो (मस्तिष्क एवं रीढ़ रोग)",
    slug: "specialties/neuro-surgery",
    icon: "Brain",
    shortDesc: "Emergency craniotomy for head injuries, brain hemorrhage, stroke, spine decompression, paralysis, and epilepsy.",
    fullDesc: "Immediate intervention for accidental head injuries, polytrauma, subdural/epidural hematomas, brain hemorrhage, and spinal decompression surgery under operating microscopes.",
    keyProcedures: ["Emergency Decompressive Craniectomy", "Spine Microdiscectomy for Slip Disc", "Brain Tumor Resection", "Spinal Fusion & Stabilization", "Paralysis & Stroke Care"],
    equipment: ["Neurosurgical Operating Microscope", "High-Speed Cranial Drills", "Neuro-ICU Monitors"],
    opdSchedule: "24/7 Head Trauma Emergency | OPD: Mon-Sat 11 AM - 4 PM",
    emergencyReady: true,
    badges: ["Golden Hour Head Trauma", "Spine Decompression", "24/7 Neuro ICU"]
  },
  {
    id: "uro-surgery",
    nameEn: "Urology & Uro Surgery",
    nameHi: "यूरो (मूत्र एवं गुर्दा रोग)",
    slug: "specialties/uro-surgery",
    icon: "Droplets",
    shortDesc: "Endoscopic and laser kidney stone removal (PCNL, URS), prostate laser surgery (TURP), and urinary tract disorders.",
    fullDesc: "Comprehensive urological surgical care utilizing modern endourology equipment for painless stone removal (PCNL, URS, RIRS) and benign prostatic hyperplasia (BPH) management.",
    keyProcedures: ["URS & PCNL (Kidney & Ureteric Stone Removal)", "TURP (Transurethral Resection of Prostate)", "DJ Stenting & Removal", "Bladder Tumor Resection (TURBT)"],
    equipment: ["Rigid & Flexible Nephroscopes", "Ureteroscopes", "Pneumatic Lithotripter"],
    opdSchedule: "Monday – Saturday: 11:00 AM – 5:00 PM",
    emergencyReady: true,
    badges: ["No-Cut Stone Removal", "Laser Ready", "Prostate Care"]
  },
  {
    id: "gastro-surgery",
    nameEn: "Gastroenterology & GI Surgery",
    nameHi: "गैस्ट्रोएंटेरोलॉजिस्ट",
    slug: "specialties/gastro-surgery",
    icon: "Layers",
    shortDesc: "Comprehensive diagnostic endoscopy, colonoscopy, liver cirrhosis, jaundice, and gastrointestinal surgical treatment.",
    fullDesc: "Expert management of intestinal obstruction, perforation peritonitis, acute pancreatitis complications, liver cysts, and colorectal conditions by experienced gastroenterologists and surgeons.",
    keyProcedures: ["Diagnostic & Therapeutic Endoscopy", "Colonoscopy & Polypectomy", "Liver & Pancreatic Care", "GI Bleed Management"],
    equipment: ["GI Endoscopy Unit", "Advanced Energy Devices", "Colorectal Staplers"],
    opdSchedule: "Monday – Saturday: 10:00 AM – 6:00 PM",
    emergencyReady: true,
    badges: ["Therapeutic Endoscopy", "Liver Care", "24/7 GI Emergency"]
  },
  {
    id: "plastic-surgery",
    nameEn: "Plastic & Reconstructive Surgery",
    nameHi: "प्लास्टिक सर्जरी",
    slug: "specialties/plastic-surgery",
    icon: "Sparkles",
    shortDesc: "Reconstructive surgery for severe trauma wounds, burns, hand injuries, skin grafting, and cosmetic modifications.",
    fullDesc: "Dedicated to restoring both anatomy and physiological function following accidents, fire injuries, or tumor resection. Includes microvascular tissue transfers, tendon repairs, and scar revision.",
    keyProcedures: ["Split-Thickness Skin Grafting (STSG)", "Facial Maxillofacial Trauma Reconstruction", "Burn Contracture Release", "Tendon & Nerve Repair"],
    equipment: ["Microsurgical Instrument Sets", "Dermatomes", "High-Precision Suturing Gear"],
    opdSchedule: "Monday, Wednesday, Friday: 11:00 AM – 4:00 PM",
    emergencyReady: true,
    badges: ["Trauma Wound Reconstruction", "Burn Care", "Aesthetic Precision"]
  },
  {
    id: "pediatrics",
    nameEn: "Pediatrics & Neonatal Care",
    nameHi: "बाल रोग विशेषज्ञ",
    slug: "specialties/pediatrics",
    icon: "HeartPulse",
    shortDesc: "Comprehensive pediatric and newborn inpatient care, Level-III NICU, child vaccinations, and pediatric surgery.",
    fullDesc: "Compassionate pediatricians and pediatric surgeons manage childhood illnesses, asthma, malnutrition, fevers, and congenital surgical conditions.",
    keyProcedures: ["Pediatric Vaccination & Immunization", "Acute Childhood Illness Management", "Pediatric Surgery & Congenital Care", "Neonatal Intensive Care"],
    equipment: ["Pediatric Emergency Crash Cart", "Dedicated Pediatric Wards", "Nebulization Stations"],
    opdSchedule: "Monday – Saturday: 9:00 AM – 2:00 PM & 5:00 PM – 8:00 PM",
    emergencyReady: true,
    badges: ["Child Friendly", "Complete Vaccinations", "Emergency Pediatrician"]
  },
  {
    id: "ent",
    nameEn: "ENT (Ear, Nose, Throat)",
    nameHi: "नाक, कान, गला",
    slug: "specialties/ent",
    icon: "Ear",
    shortDesc: "Micro-ear surgery, endoscopic sinus surgery (FESS), thyroid surgery, and emergency foreign body removal in airway/ears.",
    fullDesc: "Complete diagnostic and surgical solutions for hearing loss, chronic sinusitis, nasal polyps, deviated nasal septum (DNS), vocal cord polyps, and neck swellings.",
    keyProcedures: ["Tympanoplasty (Eardrum Repair)", "Endoscopic Sinus Surgery (FESS)", "Septoplasty & Turbinoplasty", "Tonsillectomy & Thyroid Surgery"],
    equipment: ["Karl Storz ENT Endoscopes", "Operating Ear Microscope", "Audiometry Booth"],
    opdSchedule: "Monday – Saturday: 10:00 AM – 3:00 PM",
    emergencyReady: true,
    badges: ["Endoscopic FESS", "Microscopic Ear Surgery", "Foreign Body 24/7"]
  },
  {
    id: "nephrology",
    nameEn: "Nephrology & Dialysis Care",
    nameHi: "नेफ्रोलॉजिस्ट (गुर्दा रोग)",
    slug: "specialties/nephrology",
    icon: "Activity",
    shortDesc: "Advanced renal care for chronic kidney disease, hemodialysis unit, kidney biopsy, and acute renal failure management.",
    fullDesc: "Comprehensive nephrological management for hypertension, diabetic kidney disease, glomerulonephritis, and round-the-clock hemodialysis.",
    keyProcedures: ["Hemodialysis (डायलिसिस)", "Kidney Biopsy", "Temporary & Permanent Catheter Insertion", "Acute Renal Resuscitation"],
    equipment: ["Advanced Hemodialysis Machines", "Reverse Osmosis (RO) Water Plant", "Continuous Veno-Venous Hemofiltration"],
    opdSchedule: "Monday – Saturday: 10:00 AM – 4:00 PM",
    emergencyReady: true,
    badges: ["Dialysis 24/7", "Kidney Biopsy", "Renal ICU"]
  }
];

export const CATCHMENT_AREAS: CatchmentArea[] = [
  {
    name: "Tedhi Pulia Chauraha & Ring Road",
    distance: "0 - 0.3 km",
    travelTime: "1 - 2 mins",
    landmarks: ["Tedhi Pulia Sabzi Mandi", "Ring Road Flyover", "Pratap Nagar Entrance"],
    routeDescription: "Located at 3, Pratap Nagar directly off Tedhi Pulia on the Ring Road. Rapid, wide street access with dedicated emergency ramp."
  },
  {
    name: "Aliganj & Kapoorthala",
    distance: "2.5 km",
    travelTime: "6 - 8 mins",
    landmarks: ["Aliganj Post Office", "Sector Q & Sector H", "Kapoorthala Plaza"],
    routeDescription: "Head north via Kursi Road or Kapoorthala - Tedhi Pulia main corridor directly connecting to Ring Road in under 8 minutes."
  },
  {
    name: "Jankipuram & Jankipuram Extension",
    distance: "2.8 km",
    travelTime: "7 - 9 mins",
    landmarks: ["Engineering College Chauraha", "AKTU Campus", "Bhavani Bazar"],
    routeDescription: "Direct drive down Sitapur Road or Kursi Road link onto Tedhi Pulia junction. 24/7 unobstructed emergency ambulance route."
  },
  {
    name: "Vikas Nagar & Gudamba",
    distance: "1.8 km",
    travelTime: "5 - 7 mins",
    landmarks: ["Vikas Nagar Sector 4 & 8", "Mama Chauraha", "Gudamba Thana"],
    routeDescription: "Straight 5-minute commute along the Ring Road heading towards Tedhi Pulia. Ideal catchment for quick cardiac or trauma triage."
  },
  {
    name: "Kalyanpur & Kursi Road Corridor",
    distance: "3.2 km",
    travelTime: "8 - 10 mins",
    landmarks: ["Integral University Road", "Kalyanpur Chauraha", "Sporting Grounds"],
    routeDescription: "Seamless transit down Kursi Road directly landing onto the Tedhi Pulia intersection with signposts for NEO Hospital."
  },
  {
    name: "Khurram Nagar & Munshipulia Extension",
    distance: "3.5 km",
    travelTime: "9 - 12 mins",
    landmarks: ["Khurram Nagar Flyover", "CIMAP Link", "Ring Road East"],
    routeDescription: "Elevated Ring Road access directly connects Munshipulia and Khurram Nagar residents right to our trauma entrance."
  }
];

// All 34 Official Doctors from NEO Hospital Official Poster
export const DOCTORS_ROSTER: Doctor[] = [
  // 1. गैस्ट्रोएंटेरोलॉजिस्ट (Gastroenterology)
  {
    id: "dr-sudhakar-pandey",
    name: "Dr. Sudhakar Pandey",
    nameHi: "डॉ. सुधाकर पाण्डेय",
    qualifications: "M.D., D.M.",
    department: "Gastroenterology (गैस्ट्रोएंटेरोलॉजिस्ट)",
    departmentCategory: "gastro",
    designation: "Senior Consultant Gastroenterologist",
    opdTimings: "11:00 AM – 3:00 PM",
    days: "Monday, Wednesday, Friday",
    expertise: ["Endoscopy & Colonoscopy", "Liver & Pancreatic Diseases", "Peptic Ulcers & GI Bleeding", "Jaundice & Hepatitis"]
  },
  {
    id: "dr-sanjay-somani",
    name: "Dr. Sanjay Kumar Somani",
    nameHi: "डॉ. संजय कुमार सोमानी",
    qualifications: "M.D., D.M.",
    department: "Gastroenterology (गैस्ट्रोएंटेरोलॉजिस्ट)",
    departmentCategory: "gastro",
    designation: "Senior Consultant Gastroenterologist & Hepatologist",
    opdTimings: "12:00 PM – 4:00 PM",
    days: "Tuesday, Thursday, Saturday",
    expertise: ["Therapeutic Endoscopy", "Cirrhosis & Liver Care", "Chronic Constipation & IBS", "GI Motility"]
  },
  {
    id: "dr-shivam-bajpai",
    name: "Dr. Shivam Bajpai",
    nameHi: "डॉ. शिवम बाजपेयी",
    qualifications: "M.D., D.M.",
    department: "Gastroenterology (गैस्ट्रोएंटेरोलॉजिस्ट)",
    departmentCategory: "gastro",
    designation: "Consultant Gastroenterologist",
    opdTimings: "1:00 PM – 5:00 PM",
    days: "Daily (Mon – Sat)",
    expertise: ["Acid Reflux (GERD)", "Fatty Liver Management", "Biliary Tract Disorders", "Diagnostic Colonoscopy"]
  },

  // 2. गायनेकोलॉजिस्ट (Gynecology & Obstetrics)
  {
    id: "dr-shikha",
    name: "Dr. Shikha",
    nameHi: "डॉ. शिखा",
    qualifications: "MBBS, M.S.",
    department: "Gynecology & Obstetrics (गायनेकोलॉजिस्ट)",
    departmentCategory: "gynecology",
    designation: "Senior Consultant Gynecologist & Obstetrician",
    opdTimings: "10:00 AM – 2:00 PM & 5:00 PM – 7:00 PM",
    days: "Daily (Mon – Sat)",
    expertise: ["High-Risk Pregnancy Care", "Laparoscopic Hysterectomy (बच्चेदानी दूरबीन आपरेशन)", "Normal & C-Section Delivery", "Infertility Management"]
  },
  {
    id: "dr-neelima-singh",
    name: "Dr. Neelima Singh",
    nameHi: "डॉ. नीलिमा सिंह",
    qualifications: "MBBS, M.S.",
    department: "Gynecology & Obstetrics (गायनेकोलॉजिस्ट)",
    departmentCategory: "gynecology",
    designation: "Senior Consultant Gynecologist",
    opdTimings: "11:00 AM – 4:00 PM",
    days: "Mon, Wed, Fri, Sat",
    expertise: ["PCOS & Menstrual Irregularities", "Laparoscopic Ovarian Cystectomy", "Uterine Fibroids", "Antenatal Care"]
  },

  // 3. टीबी एण्ड चेस्ट (TB & Chest / Pulmonology)
  {
    id: "dr-pulak-malhotra",
    name: "Dr. Pulak Malhotra",
    nameHi: "डॉ. पुलक मल्होत्रा",
    qualifications: "MBBS, MD",
    department: "TB & Chest (टीबी एण्ड चेस्ट)",
    departmentCategory: "chest",
    designation: "Senior Consultant Pulmonologist & Chest Specialist",
    opdTimings: "10:30 AM – 3:00 PM",
    days: "Daily (Mon – Sat)",
    expertise: ["Tuberculosis (टी.बी.) Care", "Bronchoscopy & P.F.T.", "Severe Asthma & COPD", "Chest Allergy Testing"]
  },
  {
    id: "dr-mohd-arif",
    name: "Dr. Mohd. Arif",
    nameHi: "डॉ. मो. आरिफ",
    qualifications: "MBBS, MD",
    department: "TB & Chest (टीबी एण्ड चेस्ट)",
    departmentCategory: "chest",
    designation: "Senior Chest Physician",
    opdTimings: "10:00 AM – 2:30 PM",
    days: "Tuesday, Thursday, Saturday",
    expertise: ["Allergy Testing & Immunotherapy", "Pneumonia & Pleural Effusion", "Sleep Apnea & NIV Support", "Lung Infections"]
  },
  {
    id: "dr-haider-raza",
    name: "Dr. Haider Raza",
    nameHi: "डॉ. हैदर रज़ा",
    qualifications: "M.D. DNB",
    department: "TB & Chest (टीबी एण्ड चेस्ट)",
    departmentCategory: "chest",
    designation: "Chief Pulmonologist & Chest Specialist",
    opdTimings: "11:00 AM – 3:30 PM",
    days: "Monday, Wednesday, Friday",
    expertise: ["Chronic Respiratory Diseases", "Respiratory Failure Management", "Pulmonary Rehabilitation", "Post-COVID Lung Care"]
  },

  // 4. एनेस्थेटिक्स (Anaesthetics & Critical Care)
  {
    id: "dr-rashid-anaesthesia",
    name: "Dr. Rashid",
    nameHi: "डॉ. राशिद",
    qualifications: "MBBS, MD",
    department: "Anaesthetics & Critical Care (एनेस्थेटिक्स)",
    departmentCategory: "anaesthesia",
    designation: "Senior Anaesthesiologist & Intensivist",
    opdTimings: "Round-the-clock Surgical Coverage",
    days: "24/7 OT & ICU Availability",
    expertise: ["General & Regional Anaesthesia", "Critical Care Resuscitation", "Post-Op Pain Management", "Difficult Airway Management"]
  },
  {
    id: "dr-ajay-veer",
    name: "Dr. Ajay Veer",
    nameHi: "डॉ. अजय वीर",
    qualifications: "MBBS, MD",
    department: "Anaesthetics & Critical Care (एनेस्थेटिक्स)",
    departmentCategory: "anaesthesia",
    designation: "Senior Anaesthesiologist & Intensivist",
    opdTimings: "Round-the-clock Critical Care",
    days: "24/7 OT & ICU Availability",
    expertise: ["Neuro & Onco-Anaesthesia", "Central Lines & Arterial Monitoring", "Ventilator Protocols", "Acute Pain Service"]
  },
  {
    id: "dr-ritu-somvanshi",
    name: "Dr. Ritu Somvanshi",
    nameHi: "डॉ. रितु सोमवंशी",
    qualifications: "MBBS, MD",
    department: "Anaesthetics & Critical Care (एनेस्थेटिक्स)",
    departmentCategory: "anaesthesia",
    designation: "Consultant Anaesthesiologist & Critical Care",
    opdTimings: "Round-the-clock Emergency Coverage",
    days: "24/7 Emergency & OT",
    expertise: ["Laparoscopic & Pediatric Anaesthesia", "Trauma Resuscitation", "ICU Multi-para Hemodynamics", "Sedation Protocols"]
  },

  // 5. बाल रोग विशेषज्ञ (Pediatrics & Child Care)
  {
    id: "dr-puneet-tulsyan",
    name: "Dr. Puneet Kumar Tulsyan",
    nameHi: "डॉ. पुनीत कुमार तुलस्यान",
    qualifications: "MBBS",
    department: "Pediatrics & Child Care (बाल रोग विशेषज्ञ)",
    departmentCategory: "pediatrics",
    designation: "Senior Pediatric Physician",
    opdTimings: "9:30 AM – 2:00 PM & 5:00 PM – 7:30 PM",
    days: "Daily (Mon – Sat)",
    expertise: ["Acute Childhood Infections & Fevers", "Pediatric Vaccination & Immunization", "Nutritional Counseling", "Growth & Developmental Screening"]
  },
  {
    id: "dr-vineet-kumar",
    name: "Dr. Vineet Kumar",
    nameHi: "डॉ. विनीत कुमार",
    qualifications: "MBBS, MD",
    department: "Pediatrics & Child Care (बाल रोग विशेषज्ञ)",
    departmentCategory: "pediatrics",
    designation: "Senior Consultant Pediatrician & Neonatologist",
    opdTimings: "10:00 AM – 3:00 PM",
    days: "Daily (Mon – Sat)",
    expertise: ["Neonatal Intensive Care (NICU Level-III)", "Premature Newborn Care", "Pediatric Asthma & Allergies", "Neonatal Jaundice"]
  },
  {
    id: "dr-ajay-verma",
    name: "Dr. Ajay Verma",
    nameHi: "डॉ. अजय वर्मा",
    qualifications: "MBBS, MS, M.Ch",
    department: "Pediatric Surgery (बाल रोग विशेषज्ञ)",
    departmentCategory: "pediatrics",
    designation: "Consultant Pediatric Surgeon",
    opdTimings: "12:00 PM – 4:30 PM",
    days: "Mon, Wed, Fri, Sat",
    expertise: ["Pediatric Surgical Conditions", "Congenital Anomalies", "Pediatric Hernia & Hydrocele", "Newborn Surgeries"]
  },

  // 6. नेफ्रोलॉजिस्ट (Nephrology & Kidney Care)
  {
    id: "dr-alok-pandey",
    name: "Dr. Alok Kumar Pandey",
    nameHi: "डॉ. आलोक कुमार पाण्डेय",
    qualifications: "MD, DM",
    department: "Nephrology & Kidney Care (नेफ्रोलॉजिस्ट)",
    departmentCategory: "nephro",
    designation: "Chief Consultant Nephrologist & Renal Specialist",
    opdTimings: "11:00 AM – 3:30 PM",
    days: "Monday, Wednesday, Friday",
    expertise: ["Chronic Kidney Disease (CKD)", "Hemodialysis Management", "Diabetic Nephropathy & Hypertension", "Glomerulonephritis"]
  },
  {
    id: "dr-rk-singh",
    name: "Dr. R.K. Singh",
    nameHi: "डॉ. आर.के. सिंह",
    qualifications: "MBBS, MD",
    department: "Nephrology & Kidney Care (नेफ्रोलॉजिस्ट)",
    departmentCategory: "nephro",
    designation: "Senior Kidney Specialist & Physician",
    opdTimings: "10:00 AM – 2:30 PM",
    days: "Daily (Mon – Sat)",
    expertise: ["Renal Dialysis Protocols", "Electrolyte Imbalances", "Kidney Infection Care", "Urinary Proteinuria Management"]
  },
  {
    id: "dr-farrukh-kidwai",
    name: "Dr. Farrukh Kidwai",
    nameHi: "डॉ. फारुख किदवई",
    qualifications: "MBBS, MD, DM, Nephro",
    department: "Nephrology & Kidney Care (नेफ्रोलॉजिस्ट)",
    departmentCategory: "nephro",
    designation: "Senior Consultant Nephrologist",
    opdTimings: "11:30 AM – 4:00 PM",
    days: "Tuesday, Thursday, Saturday",
    expertise: ["Acute Renal Failure", "Kidney Biopsy", "Temporary & Permanent Catheter Insertion", "Renal Transplant Counseling"]
  },

  // 7. कैंसर (Cancer / Surgical Oncology)
  {
    id: "dr-rashid-cancer",
    name: "Dr. Rashid",
    nameHi: "डॉ. राशिद",
    qualifications: "MS, M.Ch",
    department: "Surgical Oncology & Cancer Care (कैंसर)",
    departmentCategory: "cancer",
    designation: "Senior Surgical Oncologist & Cancer Surgeon",
    opdTimings: "10:00 AM – 3:00 PM",
    days: "Monday, Wednesday, Friday",
    expertise: ["Cancer Surgery & Tumor Resection", "Breast & Oral Malignancies", "GI Onco-Surgery", "Chemotherapy Protocols"]
  },
  {
    id: "dr-sudeep-garg",
    name: "Dr. Sudeep Kumar Garg",
    nameHi: "डॉ. सुदीप कुमार गर्ग",
    qualifications: "MS, M.Ch",
    department: "Surgical Oncology & Cancer Care (कैंसर)",
    departmentCategory: "cancer",
    designation: "Chief Cancer Surgeon & Oncologist",
    opdTimings: "11:00 AM – 4:00 PM",
    days: "Tuesday, Thursday, Saturday",
    expertise: ["Head & Neck Composite Resection", "Thoracic Malignancies", "Colorectal Cancers", "Multidisciplinary Tumor Board"]
  },
  {
    id: "dr-manoj-srivastava",
    name: "Dr. Manoj Kumar Srivastava",
    nameHi: "डॉ. मनोज कुमार श्रीवास्तव",
    qualifications: "MS, M.Ch",
    department: "Surgical Oncology & Cancer Care (कैंसर)",
    departmentCategory: "cancer",
    designation: "Senior Consultant Surgical Oncologist",
    opdTimings: "10:30 AM – 3:30 PM",
    days: "Daily (Surgeries by Schedule)",
    expertise: ["Radical Mastectomy", "Gynecological Onco-Surgeries", "Chemo Port Access", "Palliative Cancer Care"]
  },
  {
    id: "dr-ahmad-moeen",
    name: "Dr. Ahmad Moeen",
    nameHi: "डॉ. अहमद मोईन",
    qualifications: "MS, M.Ch",
    department: "Surgical Oncology & Cancer Care (कैंसर)",
    departmentCategory: "cancer",
    designation: "Consultant Surgical Oncologist",
    opdTimings: "12:00 PM – 4:30 PM",
    days: "Mon, Wed, Fri, Sat",
    expertise: ["Gastrointestinal Onco-Surgery", "Soft Tissue Sarcomas", "Organ Preservation Cancer Surgery", "Onco-Reconstruction"]
  },

  // 8. ऑर्थोपेडिक सर्जन (Orthopedics & Joint Replacement)
  {
    id: "dr-yashwant-singh",
    name: "Dr. Yashwant Singh",
    nameHi: "डॉ. यशवंत सिंह",
    qualifications: "MS, Ortho",
    department: "Orthopedic Surgery & Joint Replacement (ऑर्थोपेडिक सर्जन)",
    departmentCategory: "ortho",
    designation: "Senior Orthopedic & Joint Replacement Surgeon",
    opdTimings: "10:00 AM – 3:00 PM",
    days: "Daily (Mon – Sat)",
    expertise: ["Total Knee Replacement (TKR)", "Total Hip Replacement (THR)", "C-ARM Guided Trauma Fixation", "Arthroscopy"]
  },
  {
    id: "dr-naveen-shukla",
    name: "Dr. Naveen Shukla",
    nameHi: "डॉ. नवीन शुक्ला",
    qualifications: "MS, Ortho",
    department: "Orthopedic Surgery & Joint Replacement (ऑर्थोपेडिक सर्जन)",
    departmentCategory: "ortho",
    designation: "Senior Orthopedic & Trauma Surgeon",
    opdTimings: "12:00 PM – 5:00 PM",
    days: "Monday, Wednesday, Friday",
    expertise: ["Complex Bone Fractures (हड्डी फ्रैक्चर)", "Spine & Neck Pain Management", "Joint Injections", "Polytrauma"]
  },
  {
    id: "dr-mujahid",
    name: "Dr. Mujahid",
    nameHi: "डॉ. मुजाहिद",
    qualifications: "MS, Ortho",
    department: "Orthopedic Surgery & Joint Replacement (ऑर्थोपेडिक सर्जन)",
    departmentCategory: "ortho",
    designation: "Consultant Orthopedic Surgeon",
    opdTimings: "11:00 AM – 4:00 PM",
    days: "Tuesday, Thursday, Saturday",
    expertise: ["Knee & Hip Arthritis", "Fracture Plating & Interlocking Nails", "Sports Injuries & Ligament Tears", "Geriatric Trauma"]
  },

  // 9. नाक, कान, गला (ENT - Ear, Nose, Throat)
  {
    id: "dr-firoz-ahmad",
    name: "Dr. Firoz Ahmad",
    nameHi: "डॉ. फिरोज अहमद",
    qualifications: "MBBS, MS, ENT",
    department: "ENT (नाक, कान, गला)",
    departmentCategory: "ent",
    designation: "Senior Consultant ENT Surgeon",
    opdTimings: "10:00 AM – 2:00 PM",
    days: "Monday, Wednesday, Friday",
    expertise: ["Microscopic Ear Surgery (Tympanoplasty)", "Endoscopic Sinus Surgery (FESS)", "Tonsils & Adenoids Excision", "Hearing Loss Solutions"]
  },
  {
    id: "dr-jaya-gupta",
    name: "Dr. Jaya Gupta",
    nameHi: "डॉ. जया गुप्ता",
    qualifications: "MBBS, MS, ENT",
    department: "ENT (नाक, कान, गला)",
    departmentCategory: "ent",
    designation: "Senior ENT Specialist & Surgeon",
    opdTimings: "11:00 AM – 3:00 PM",
    days: "Tuesday, Thursday, Saturday",
    expertise: ["Endoscopic Nasal & Thyroid Surgery", "Vertigo & Tinnitus Evaluation", "Throat & Voice Disorders", "Airway Foreign Body Removal"]
  },
  {
    id: "dr-abhideep-agarwal",
    name: "Dr. Abhideep Agarwal",
    nameHi: "डॉ. अभिदीप अग्रवाल",
    qualifications: "MS, ENT",
    department: "ENT (नाक, कान, गला)",
    departmentCategory: "ent",
    designation: "Consultant ENT Surgeon",
    opdTimings: "1:00 PM – 5:00 PM",
    days: "Daily (Mon – Sat)",
    expertise: ["Deviated Septum (DNS) Septoplasty", "Ear Discharge & Perforation", "Snoring Management", "Head & Neck Swellings"]
  },

  // 10. यूरो (Urology & Uro Surgery)
  {
    id: "dr-jainil-bhagwade",
    name: "Dr. Jainil Bhagwade",
    nameHi: "डॉ. जैनिल भगवड़े",
    qualifications: "M.S. M.Ch",
    department: "Urology & Uro Surgery (यूरो)",
    departmentCategory: "urology",
    designation: "Chief Urologist & Uro-Surgeon",
    opdTimings: "11:00 AM – 4:00 PM",
    days: "Monday, Wednesday, Friday",
    expertise: ["Laser Kidney Stone Removal (PCNL, URS)", "Prostate Laser Surgery (TURP)", "Urethral Stricture Plasty", "Kidney Dialysis Fistula"]
  },
  {
    id: "dr-rajiv-yadav",
    name: "Dr. Rajiv Yadav",
    nameHi: "डॉ. राजीव यादव",
    qualifications: "M.S. M.Ch",
    department: "Urology & Uro Surgery (यूरो)",
    departmentCategory: "urology",
    designation: "Senior Urologist & Andrologist",
    opdTimings: "10:30 AM – 3:30 PM",
    days: "Tuesday, Thursday, Saturday",
    expertise: ["Kidney & Bladder Stones", "Hydrocele & Hernia Surgery (दूरबीन आपरेशन)", "Urinary Incontinence & UTI", "Male Infertility Evaluation"]
  },

  // 11. प्लास्टिक सर्जरी (Plastic Surgery)
  {
    id: "dr-richa-srivastava",
    name: "Dr. Richa Srivastava",
    nameHi: "डॉ. ऋचा श्रीवास्तव",
    qualifications: "M.S, M.Ch",
    department: "Plastic & Reconstructive Surgery (प्लास्टिक सर्जरी)",
    departmentCategory: "plastic",
    designation: "Senior Plastic & Microvascular Surgeon",
    opdTimings: "11:00 AM – 3:00 PM",
    days: "Monday, Wednesday, Friday",
    expertise: ["Trauma Wound Reconstruction", "Burns Contracture Release", "Skin Grafting (STSG)", "Facial Fractures Plating"]
  },
  {
    id: "dr-pushpendra",
    name: "Dr. Pushpendra",
    nameHi: "डॉ. पुष्पेन्द्र",
    qualifications: "M.S. M.Ch",
    department: "Plastic & Reconstructive Surgery (प्लास्टिक सर्जरी)",
    departmentCategory: "plastic",
    designation: "Consultant Plastic & Cosmetic Surgeon",
    opdTimings: "12:00 PM – 4:00 PM",
    days: "Tuesday, Thursday, Saturday",
    expertise: ["Aesthetic & Cosmetic Procedures", "Tendon & Nerve Injury Repair", "Scar Revision", "Post-Tumor Reconstruction"]
  },

  // 12. न्यूरो (Neuro Surgery & Neurology)
  {
    id: "dr-surjeet-singh",
    name: "Dr. Surjeet Singh",
    nameHi: "डॉ. सुरजीत सिंह",
    qualifications: "MBBS, M.Ch",
    department: "Neuro Surgery (न्यूरो)",
    departmentCategory: "neuro",
    designation: "Chief Neurosurgeon & Spine Specialist",
    opdTimings: "10:00 AM – 3:00 PM",
    days: "Monday, Wednesday, Friday",
    expertise: ["Brain Tumor Surgery (ब्रेन ट्यूमर)", "Brain Hemorrhage & Head Injury", "Spine & Neck Surgery (रीढ़ व गर्दन हड्डी आपरेशन)", "Emergency Craniectomy"]
  },
  {
    id: "dr-apurv-kumar",
    name: "Dr. Apurv Kumar",
    nameHi: "डॉ. अपुर्व कुमार",
    qualifications: "MBBS, M.Ch",
    department: "Neuro Surgery (न्यूरो)",
    departmentCategory: "neuro",
    designation: "Senior Consultant Neurosurgeon",
    opdTimings: "11:30 AM – 4:30 PM",
    days: "Tuesday, Thursday, Saturday",
    expertise: ["Microdiscectomy for Slip Disc", "Spinal Fusion & Stabilization", "Head Trauma Golden Hour Triage", "Hydrocephalus Shunt Surgery"]
  },
  {
    id: "dr-sumit-verma",
    name: "Dr. Sumit Kumar Verma",
    nameHi: "डॉ. सुमित कुमार वर्मा",
    qualifications: "MD, DM",
    department: "Neurology (न्यूरो)",
    departmentCategory: "neuro",
    designation: "Senior Consultant Neurologist",
    opdTimings: "12:00 PM – 5:00 PM",
    days: "Daily (Mon – Sat)",
    expertise: ["Paralysis & Stroke Management (पैरालिसिस)", "Epilepsy & Seizures (मिर्गी के दौरे)", "Meningitis & Encephalitis", "Cervical & Spondylitis (सर्वाइकल)"]
  },

  // 13. मेडिसिन (General Medicine & Diabetology)
  {
    id: "dr-ak-yadav",
    name: "Dr. A.K. Yadav",
    nameHi: "डॉ. ए.के. यादव",
    qualifications: "MBBS, MD",
    department: "Medicine & General Physician (मेडिसिन)",
    departmentCategory: "medicine",
    designation: "Senior Consultant Physician",
    opdTimings: "9:00 AM – 2:00 PM & 4:30 PM – 7:30 PM",
    days: "Daily (Mon – Sat)",
    expertise: ["Diabetes & Blood Pressure Management", "Infectious Fevers (Dengue, Typhoid, Malaria)", "Liver & Sepsis Care", "Multisystem Disorders"]
  },
  {
    id: "dr-rajesh-singh",
    name: "Dr. Rajesh Singh",
    nameHi: "डॉ. राजेश सिंह",
    qualifications: "MBBS, MD",
    department: "Medicine & Internal Care (मेडिसिन)",
    departmentCategory: "medicine",
    designation: "Senior Consultant Physician",
    opdTimings: "10:00 AM – 3:30 PM",
    days: "Daily (Mon – Sat)",
    expertise: ["Adult Internal Medicine", "Cardiac & Respiratory Comorbidities", "Geriatric Healthcare", "Critical Inpatient Care"]
  },
  {
    id: "dr-abhishek-arun",
    name: "Dr. Abhishek Arun",
    nameHi: "डॉ. अभिषेक अरूण",
    qualifications: "MBBS, MD",
    department: "Endocrinology & Diabetology (मेडिसिन)",
    departmentCategory: "medicine",
    designation: "Consultant Diabetologist & Physician",
    opdTimings: "11:00 AM – 4:00 PM",
    days: "Monday, Wednesday, Friday",
    expertise: ["Complex Diabetes Management", "Thyroid Disorders (थायराइड)", "Hormonal Imbalances", "Metabolic Syndrome & Obesity"]
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: "Where is NEO Hospital located in Lucknow and how can I reach in an emergency?",
    answer: "NEO Hospital is located at 3, Pratap Nagar, Tedhi Pulia, Ring Road, Lucknow – 226022. It is easily accessible from Tedhi Pulia Chauraha, Aliganj, Jankipuram, and Vikas Nagar via the broad Ring Road corridor. For immediate ambulance dispatch and emergency bed reservation, call our 24/7 Helpline: 9919722223.",
    category: "emergency"
  },
  {
    question: "Do you have round-the-clock ICU, NICU, and Ventilator bed availability?",
    answer: "Yes. NEO Hospital operates a full-scale tertiary Intensive Care Unit (ICU) and Level-III Neonatal Intensive Care Unit (NICU) with advanced invasive and non-invasive mechanical ventilators. Dedicated intensivists, pediatric specialists, and critical care nurses are on duty 24 hours a day, 365 days a year.",
    category: "icu"
  },
  {
    question: "What cancer treatments and chemotherapy facilities are provided?",
    answer: "Our Cancer Center offers comprehensive Surgical Oncology and a dedicated Chemotherapy Daycare Unit. We handle breast cancer, gastrointestinal cancers, head and neck malignancies, and gynecological cancers. Chemotherapy is administered under biosafety laminar airflow standards with chemoport management and minimal-nausea protocols.",
    category: "cancer"
  },
  {
    question: "Is Cashless TPA and Mediclaim Insurance accepted at NEO Hospital?",
    answer: "Yes, NEO Hospital partners with major TPA and private health insurance providers (Star Health, ICICI Lombard, HDFC ERGO, Care Health, Niva Bupa, Bajaj Allianz, and PSU insurers). Our Cashless TPA Helpdesk assists patients and families with fast pre-authorization, admission paperwork, and claim processing.",
    category: "insurance"
  },
  {
    question: "What advanced surgical procedures are performed with C-ARM and Laparoscopy?",
    answer: "We perform minimally invasive Laparoscopic Surgeries (दूरबीन द्वारा आपरेशन) for gallbladder stones, appendix, and hernias, allowing 24-hour discharge. For Orthopedics, our modular theater is equipped with an advanced C-ARM Image Intensifier for high-precision Joint Replacements (Total Knee & Hip) and trauma fracture fixations.",
    category: "general"
  },
  {
    question: "What are the visiting hours for ICU and inpatient wards?",
    answer: "General Ward visiting hours are from 11:00 AM – 1:00 PM in the morning and 5:00 PM – 7:00 PM in the evening. For ICU and NICU, visiting is restricted to 1 designated attendant between 12:00 PM – 1:00 PM and 6:00 PM – 7:00 PM to maintain strict sterility and infection control.",
    category: "general"
  }
];

export const INSURANCE_PARTNERS = [
  "Star Health Insurance",
  "ICICI Lombard",
  "HDFC ERGO General Insurance",
  "Care Health Insurance",
  "Niva Bupa Health Insurance",
  "Bajaj Allianz",
  "New India Assurance",
  "United India Insurance",
  "National Insurance",
  "Oriental Insurance",
  "Ayushman Bharat PM-JAY Helpdesk"
];
