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
  qualifications: string;
  department: string;
  experienceYears: number;
  designation: string;
  opdTimings: string;
  expertise: string[];
  days: string;
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
  domain: "neohospitallucknow.com",
  websiteUrl: "https://neohospitallucknow.com",
  email: "care@neohospitallucknow.com",
  emergencyEmail: "emergency@neohospitallucknow.com"
};

// All 15 Facilities exactly matching the official Hospital Facility Board
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
    nameHi: "आर्थोपेडिक सर्जरी",
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
    id: "uro-surgery",
    nameEn: "Urology & Uro Surgery",
    nameHi: "यूरो सर्जरी",
    slug: "specialties/uro-surgery",
    icon: "Droplets",
    shortDesc: "Endoscopic and laser kidney stone removal, prostate treatment (TURP), stricture urethroplasty, and urinary tract disorders.",
    fullDesc: "Comprehensive urological surgical care utilizing modern endourology equipment for painless stone removal (PCNL, URS, RIRS) and benign prostatic hyperplasia (BPH) management.",
    keyProcedures: ["URS & PCNL (Kidney & Ureteric Stone Removal)", "TURP (Transurethral Resection of Prostate)", "DJ Stenting & Removal", "Bladder Tumor Resection (TURBT)"],
    equipment: ["Rigid & Flexible Nephroscopes", "Ureteroscopes", "Pneumatic Lithotripter"],
    opdSchedule: "Monday – Saturday: 11:00 AM – 5:00 PM",
    emergencyReady: true,
    badges: ["No-Cut Stone Removal", "Laser Ready", "Prostate Care"]
  },
  {
    id: "neuro-surgery",
    nameEn: "Neuro Surgery & Spine Care",
    nameHi: "न्यूरो सर्जरी",
    slug: "specialties/neuro-surgery",
    icon: "Brain",
    shortDesc: "Emergency craniotomy for head injuries, intracranial hemorrhage, brain tumors, slip disc, and spinal trauma.",
    fullDesc: "Immediate intervention for accidental head injuries, polytrauma, subdural/epidural hematomas, brain hemorrhage, and spinal decompression surgery under operating microscopes.",
    keyProcedures: ["Emergency Decompressive Craniectomy", "Spine Microdiscectomy for Slip Disc", "Brain Tumor Resection", "Spinal Fusion & Stabilization"],
    equipment: ["Neurosurgical Operating Microscope", "High-Speed Cranial Drills", "Neuro-ICU Monitors"],
    opdSchedule: "24/7 Head Trauma Emergency | OPD: Mon-Sat 11 AM - 4 PM",
    emergencyReady: true,
    badges: ["Golden Hour Head Trauma", "Spine Decompression", "24/7 Neuro ICU"]
  },
  {
    id: "gastro-surgery",
    nameEn: "Gastro Surgery (GI & Hepatobiliary)",
    nameHi: "गैस्ट्रो सर्जरी",
    slug: "specialties/gastro-surgery",
    icon: "Layers",
    shortDesc: "Comprehensive surgical treatment for digestive tract diseases, liver, pancreas, intestines, and colorectal conditions.",
    fullDesc: "Expert management of intestinal obstruction, perforation peritonitis, acute pancreatitis complications, liver cysts, and colorectal cancers by experienced gastrointestinal surgeons.",
    keyProcedures: ["Exploratory Laparotomy for Perforation / Obstruction", "Splenectomy & Liver Resection", "Colorectal Surgery", "Pancreatic Necrosectomy"],
    equipment: ["GI Endoscopy Unit", "Advanced Energy Devices", "Colorectal Staplers"],
    opdSchedule: "Monday – Saturday: 10:00 AM – 6:00 PM",
    emergencyReady: true,
    badges: ["Emergency GI Resection", "Abdominal Trauma", "Pancreas Care"]
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
    nameEn: "Pediatrics & Child Care",
    nameHi: "बाल रोग चिकित्सा",
    slug: "specialties/pediatrics",
    icon: "HeartPulse",
    shortDesc: "Comprehensive outpatient and inpatient medical care for infants, children, and adolescents, including vaccination.",
    fullDesc: "Compassionate pediatricians manage pediatric respiratory infections, childhood asthma, nutritional deficiencies, pediatric fevers, dengue, and growth monitoring with a warm child-friendly environment.",
    keyProcedures: ["Pediatric Vaccination & Immunization", "Acute Childhood Illness Management", "Pediatric Asthma & Allergy Care", "Growth & Developmental Screening"],
    equipment: ["Pediatric Emergency Crash Cart", "Dedicated Pediatric Wards", "Nebulization Stations"],
    opdSchedule: "Monday – Saturday: 9:00 AM – 2:00 PM & 5:00 PM – 8:00 PM",
    emergencyReady: true,
    badges: ["Child Friendly", "Complete Vaccinations", "Emergency Pediatrician"]
  },
  {
    id: "ent",
    nameEn: "ENT (Ear, Nose, Throat)",
    nameHi: "ई.एन.टी.",
    slug: "specialties/ent",
    icon: "Ear",
    shortDesc: "Micro-ear surgery, endoscopic sinus surgery (FESS), tonsillectomy, and emergency foreign body removal in airway/ears.",
    fullDesc: "Complete diagnostic and surgical solutions for hearing loss, chronic sinusitis, nasal polyps, deviated nasal septum (DNS), vocal cord polyps, and neck swellings.",
    keyProcedures: ["Tympanoplasty (Eardrum Repair)", "Endoscopic Sinus Surgery (FESS)", "Septoplasty & Turbinoplasty", "Tonsillectomy & Adenoidectomy"],
    equipment: ["Karl Storz ENT Endoscopes", "Operating Ear Microscope", "Audiometry Booth"],
    opdSchedule: "Monday – Saturday: 10:00 AM – 3:00 PM",
    emergencyReady: true,
    badges: ["Endoscopic FESS", "Microscopic Ear Surgery", "Foreign Body 24/7"]
  },
  {
    id: "dental-surgery",
    nameEn: "Dental & Maxillofacial Surgery",
    nameHi: "डेंटल सर्जरी",
    slug: "specialties/dental-surgery",
    icon: "Smile",
    shortDesc: "Advanced dental extractions, root canal treatment (RCT), crowns, dental implants, and jaw fracture fixation.",
    fullDesc: "Modern dental operatory providing aseptic dental treatments, pain-free single-sitting root canals, aesthetic smile designing, and surgical removal of impacted wisdom teeth.",
    keyProcedures: ["Surgical Wisdom Tooth Extraction", "Root Canal Treatment (RCT)", "Crowns & Fixed Bridges", "Facial Jaw Bone Fracture Plating"],
    equipment: ["Ergonomic Dental Chair Unit", "Digital Intraoral X-Ray (RVG)", "Autoclave Class-B"],
    opdSchedule: "Monday – Saturday: 10:00 AM – 7:00 PM",
    emergencyReady: false,
    badges: ["Painless RCT", "RVG Digital X-Ray", "Maxillofacial Trauma"]
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

export const DOCTORS_ROSTER: Doctor[] = [
  {
    id: "dr-oncology",
    name: "Dr. A. K. Srivastava",
    qualifications: "MBBS, MS (Surgery), MCh (Surgical Oncology)",
    department: "Cancer Center & Surgical Oncology",
    designation: "Chief Surgical Oncologist & Head of Tumor Board",
    experienceYears: 18,
    opdTimings: "10:00 AM – 3:00 PM",
    days: "Monday, Wednesday, Friday",
    expertise: ["Breast Cancer Surgery", "Head & Neck Onco-Resection", "Chemotherapy Protocols", "GI Malignancies"]
  },
  {
    id: "dr-ortho",
    name: "Dr. Manish Verma",
    qualifications: "MBBS, MS (Orthopedics), Fellowship in Joint Replacement (Germany)",
    department: "Orthopedic Surgery & Joint Replacement",
    designation: "Senior Orthopedic & Joint Replacement Surgeon",
    experienceYears: 16,
    opdTimings: "10:30 AM – 6:30 PM",
    days: "Monday – Saturday",
    expertise: ["Total Knee Replacement (TKR)", "Total Hip Replacement (THR)", "C-ARM Trauma Fixation", "Arthroscopy"]
  },
  {
    id: "dr-critical-care",
    name: "Dr. Rajeshwar Singh",
    qualifications: "MBBS, MD (Anesthesia & Critical Care), IDCCM, EDIC",
    department: "Critical & Emergency Care (ICU / NICU)",
    designation: "Director - Critical Care & Intensivist Services",
    experienceYears: 15,
    opdTimings: "24/7 Emergency & ICU Rounds",
    days: "Daily Availability",
    expertise: ["Advanced Mechanical Ventilation", "Sepsis Management", "Polytrauma Triage", "Arterial Hemodynamics"]
  },
  {
    id: "dr-laparoscopy",
    name: "Dr. Priyanka Gupta",
    qualifications: "MBBS, MS (General Surgery), FMAS, FIAGES",
    department: "Laparoscopic & Gastrointestinal Surgery",
    designation: "Senior Laparoscopic & General Surgeon",
    experienceYears: 14,
    opdTimings: "11:00 AM – 5:00 PM",
    days: "Monday – Saturday",
    expertise: ["Laparoscopic Cholecystectomy", "Hernia Repair (TEP/TAPP)", "Appendectomy", "Emergency GI Perforations"]
  },
  {
    id: "dr-pediatrics",
    name: "Dr. S. N. Mishra",
    qualifications: "MBBS, MD (Pediatrics), Fellowship in Neonatology (NICU)",
    department: "Pediatrics & Neonatal Care (NICU)",
    designation: "Senior Consultant Pediatrician & Neonatologist",
    experienceYears: 17,
    opdTimings: "9:00 AM – 1:00 PM & 5:00 PM – 8:00 PM",
    days: "Monday – Saturday",
    expertise: ["Premature Neonatal Care", "Pediatric Respiratory Distress", "Growth & Vaccination", "Pediatric Emergencies"]
  },
  {
    id: "dr-urology",
    name: "Dr. Rohit Tiwari",
    qualifications: "MBBS, MS, MCh (Urology)",
    department: "Urology & Kidney Stone Center",
    designation: "Senior Consultant Urologist & Andrologist",
    experienceYears: 12,
    opdTimings: "12:00 PM – 4:00 PM",
    days: "Tuesday, Thursday, Saturday",
    expertise: ["PCNL & URS Stone Removal", "TURP Prostate Resection", "Stricture Urethroplasty", "Kidney Dialysis Access"]
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
