/* VisaCheck Pro – Pakistan Origin | Global Checklists + Visa-Free Access
   Research snapshot: 17 August 2026
   Note: For continuous live crawling a backend service is required.
   This client-side version uses curated research from official sources.
*/

const DB = {
  uk: {
    name: "United Kingdom", flag: "🇬🇧",
    visas: {
      spouse: {
        title: "Spouse / Partner Visa",
        summary: { threshold: "£29,000", english: "A1", grant: "33 months", vac: "VFS Global" },
        docs: {
          "Identity": ["Applicant’s current Pakistani passport + all previous passports","Photocopies of all passport pages","Sponsor’s British passport (bio-data page)","Applicant’s CNIC copy","NADRA FRC (by birth) and FRC (by marriage)"],
          "Relationship (Critical)": ["Original Nikah Nama (Union Council) + certified English translation","NADRA Marriage Registration Certificate (MRC) – strongly recommended","Previous marriage documents (divorce/death) + translations if applicable","Wedding & family photos (dated with captions)","Communication records (WhatsApp, calls, emails – samples over time)","Travel/visit evidence (tickets, visas, hotel bookings)","Financial support evidence (money transfers, gifts)","Covering letter explaining relationship history & future plans"],
          "Financial (Sponsor – Specified Evidence)": ["Employer letter (headed paper) confirming job, salary, start date & ongoing employment","Payslips (usually last 6 months)","Matching personal bank statements showing salary credits","P60(s) and employment contract (recommended)","If using savings: 6 consecutive months bank statements showing required balance"],
          "Accommodation": ["Tenancy agreement / mortgage / property ownership documents","Landlord letter confirming spouse can live there (if rented)","Evidence accommodation is not overcrowded"],
          "English Language": ["Approved A1 Speaking & Listening test (e.g. IELTS Life Skills A1)","Or degree taught in English + Ecctis confirmation (if applicable)"],
          "TB Test (Mandatory)": ["TB certificate from Home Office-approved clinic only (IOM or AMC)","Clinics: Islamabad, Lahore, Karachi, Mirpur (AJK)","Certificate normally valid 6 months from X-ray date"],
          "Other": ["Previous UK immigration applications/refusals details","Criminal convictions disclosure (if any)","Certified English translations of all non-English documents"]
        },
        financial: {
          title: "Minimum Income Threshold",
          main: "£29,000 gross per year (new applications since 11 Apr 2024)",
          note: "Further increases to £34,500 / £38,700 remain paused as of Aug 2026. No child add-on for new applications.",
          savings: "Cash savings top-up formula: (Shortfall × 2.5) + £16,000. Must be held 6 consecutive months.",
          methods: [
            { name: "Category A (Employed 6+ months)", desc: "Use current gross annual salary. Must have been paid at that level for the last 6 months. Evidence: employer letter + 6 months payslips + matching bank statements." },
            { name: "Category B (Employed <6 months / variable)", desc: "Current salary ≥ £29,000 AND average of last 12 months income ≥ £29,000." },
            { name: "Self-Employment", desc: "Most recent full financial year (or average of last two). HMRC SA302, accounts, business bank statements required." }
          ]
        },
        process: {
          steps: ["Complete online application on GOV.UK","Pay visa fee + Immigration Health Surcharge (IHS)","Upload supporting documents online","Book & attend biometrics at VFS Global (Islamabad / Lahore / Karachi / Mirpur)","Wait for decision (often 12–24 weeks from Pakistan)"],
          fees: "Approx. £2,064 (visa) + £3,105 (IHS) = £5,169 total Home Office fees (Aug 2026). Plus TB test, English test, translations."
        },
        research: ["Source: GOV.UK Family visa (partner/spouse) + Appendix FM & FM-SE","Financial threshold confirmed £29,000 as of Aug 2026","TB test mandatory – only IOM/AMC clinics accepted","VFS Global continues to handle biometrics in Pakistan","NADRA MRC + FRC by marriage strongly recommended for Pakistani marriages"]
      },
      visit: {
        title: "Standard Visitor Visa",
        summary: { threshold: "Sufficient funds", english: "Not required", grant: "Up to 6 months", vac: "VFS Global" },
        docs: {
          "Identity": ["Valid Pakistani passport","Previous passports if any","CNIC copy"],
          "Purpose of Visit": ["Cover letter explaining purpose and itinerary","Invitation letter (if visiting family/friends) with host’s status documents","Hotel bookings or accommodation proof"],
          "Financial": ["Personal bank statements (last 6 months)","Evidence of income / employment / business","Sponsor’s financial documents if being sponsored"],
          "Ties to Pakistan": ["Employment letter + leave approval","Property ownership / business documents","Family ties evidence"],
          "Other": ["Travel insurance (recommended)","Flight reservation (optional but helpful)"]
        },
        financial: { title: "Funds Requirement", main: "No fixed amount – must show you can support yourself without public funds", note: "Bank statements should show regular genuine activity, not sudden large deposits.", savings: "", methods: [] },
        process: { steps: ["Apply online on GOV.UK","Pay fee","Upload documents","Biometrics at VFS","Decision (usually a few weeks)"], fees: "Standard Visitor fee applies (check GOV.UK for current amount)." },
        research: ["Source: GOV.UK Standard Visitor visa guidance","Strong ties to Pakistan are critical for approval"]
      },
      student: {
        title: "Student Visa",
        summary: { threshold: "Course fees + living costs", english: "Required (usually B2)", grant: "Course duration +", vac: "VFS Global" },
        docs: {
          "Identity": ["Valid passport","CNIC"],
          "Academic": ["CAS from licensed sponsor","Academic transcripts & certificates + translations","English language evidence (IELTS / equivalent)"],
          "Financial": ["Bank statements showing required funds for 28 consecutive days","Tuition fee payment receipt or proof of funds covering fees + living costs"],
          "TB Test": ["Mandatory TB certificate from approved clinic"],
          "Other": ["ATAS certificate if required","Translations of all non-English documents"]
        },
        financial: { title: "Funds Requirement", main: "Course fees (outstanding) + living costs (£1,334/month London or £1,023/month outside for up to 9 months)", note: "Funds must be held for 28 consecutive days ending no more than 31 days before application.", savings: "", methods: [] },
        process: { steps: ["Obtain CAS from university","Prepare financial evidence","Apply online","TB test","Biometrics at VFS","Decision"], fees: "Student visa fee + IHS applies." },
        research: ["Source: GOV.UK Student visa","TB test mandatory for Pakistani applicants"]
      },
      work: {
        title: "Skilled Worker / Work Visa",
        summary: { threshold: "Job offer + salary threshold", english: "Required (usually B1)", grant: "Up to 5 years", vac: "VFS Global" },
        docs: {
          "Identity": ["Passport","CNIC"],
          "Sponsorship": ["Certificate of Sponsorship (CoS) from licensed employer","Job details matching CoS"],
          "Financial": ["Proof of funds if required (or A-rated sponsor certification)"],
          "English": ["Approved English test at required level"],
          "TB Test": ["Mandatory for Pakistani applicants"],
          "Other": ["Criminal record certificate if required for the role"]
        },
        financial: { title: "Salary & Funds", main: "Must meet the going rate / minimum salary for the occupation code", note: "Check current Skilled Worker thresholds on GOV.UK.", savings: "", methods: [] },
        process: { steps: ["Employer assigns CoS","Apply online","TB test","Biometrics at VFS","Decision"], fees: "Visa fee + IHS (depends on duration)" },
        research: ["GOV.UK Skilled Worker visa","Sponsor must be Home Office licensed"]
      }
    }
  },
  spain: {
    name: "Spain (Schengen)", flag: "🇪🇸",
    visas: {
      business: {
        title: "Business Visit Visa (Schengen Type C)",
        summary: { threshold: "€122.10/day + min €1,098.90", english: "Not required", grant: "Up to 90 days", vac: "Intiana" },
        docs: {
          "Identity": ["Valid passport (3+ months beyond stay, 2 blank pages)","Previous passports","CNIC + copies"],
          "Application": ["Completed Schengen visa application form","2 recent passport photos (white background)"],
          "Business Invitation": ["Original business invitation letter from Spanish company","Company registration documents of inviting party (if available)"],
          "Self-Employed / Business (Applicant)": ["NTN certificate","FBR tax returns (recent years)","Chamber of Commerce recommendation / membership","SECP registration (if limited company)","Business bank statements (6 months)","Letterhead introduction of own business"],
          "Financial": ["Personal bank statements (last 6 months)","Proof of sufficient funds (€122.10 per day, minimum €1,098.90)"],
          "Travel": ["Flight reservation (return)","Hotel booking or accommodation proof","Travel medical insurance (€30,000 Schengen-wide)"],
          "Other": ["Cover letter explaining purpose","Previous Schengen visas / travel history (attach all old passports)"]
        },
        financial: { title: "Means of Subsistence (Spain 2026)", main: "€122.10 per day of stay + minimum €1,098.90 per person", note: "Show clear bank statements with genuine activity.", savings: "", methods: [] },
        process: { steps: ["Book appointment at appointment.thespainvisa.com","Prepare complete file","Attend Intiana centre (Lahore / Islamabad / Karachi)","Submit + biometrics","Track and collect passport"], fees: "€90 + Intiana service fee (PKR at centre)" },
        research: ["thespainvisa.com + Spanish Embassy","Intiana handles applications","Lahore: 58-D/1 Gulberg III","Previous Schengen history is positive but not a guarantee"]
      },
      tourist: {
        title: "Tourist / Visit Visa (Schengen Type C)",
        summary: { threshold: "€122.10/day + min €1,098.90", english: "Not required", grant: "Up to 90 days", vac: "Intiana" },
        docs: {
          "Identity": ["Valid passport","Previous passports","CNIC"],
          "Application": ["Schengen application form","2 photos"],
          "Purpose": ["Cover letter with itinerary","Hotel bookings","Flight reservation"],
          "Financial": ["6 months bank statements","Employment/business proof","Sufficient funds"],
          "Insurance": ["Travel medical insurance min €30,000"],
          "Ties to Pakistan": ["Employment letter","Property / business documents","Family ties"]
        },
        financial: { title: "Means of Subsistence", main: "€122.10 per day + minimum €1,098.90", note: "Genuine bank activity required.", savings: "", methods: [] },
        process: { steps: ["Book appointment on thespainvisa.com","Attend Intiana","Biometrics","Decision"], fees: "€90 + service fee" },
        research: ["thespainvisa.com","Strong ties to Pakistan essential"]
      },
      student: {
        title: "Student / National Visa (Long Stay)",
        summary: { threshold: "Proof of funds for studies", english: "May be required", grant: "Course duration", vac: "Intiana / Embassy" },
        docs: {
          "Academic": ["Admission letter from Spanish institution","Academic transcripts + translations"],
          "Financial": ["Proof of sufficient funds / scholarship"],
          "Insurance": ["Health insurance covering Spain"],
          "Identity": ["Passport","Photos","CNIC"],
          "Other": ["Criminal record / police certificate often required","Medical certificate"]
        },
        financial: { title: "Funds", main: "Must cover tuition + living costs for the study period", note: "Check specific Spanish region / institution requirements.", savings: "", methods: [] },
        process: { steps: ["Obtain admission","Prepare documents","Apply via Intiana / Spanish mission","Biometrics if required"], fees: "National visa fee applies" },
        research: ["Spanish Ministry of Foreign Affairs + thespainvisa.com"]
      }
    }
  },
  germany: {
    name: "Germany (Schengen)", flag: "🇩🇪",
    visas: {
      business: {
        title: "Business / Schengen Visa",
        summary: { threshold: "Sufficient funds", english: "Not required", grant: "Up to 90 days", vac: "TLS / VFS" },
        docs: {
          "Identity": ["Passport","Previous passports","CNIC"],
          "Application": ["Application form","Photos"],
          "Invitation": ["Business invitation from German company"],
          "Financial & Business": ["Bank statements 6 months","NTN, tax returns, Chamber letter (if self-employed)","Employment letter if employed"],
          "Travel": ["Flight & hotel reservations","Travel insurance €30,000"],
          "Other": ["Cover letter","Travel history"]
        },
        financial: { title: "Funds", main: "Sufficient means for the stay", note: "Strong bank evidence required.", savings: "", methods: [] },
        process: { steps: ["Apply via German VAC in Pakistan","Biometrics","Decision"], fees: "€90 + VAC fee" },
        research: ["German mission + VAC portal for Pakistan"]
      },
      tourist: {
        title: "Tourist Schengen Visa",
        summary: { threshold: "Sufficient funds", english: "Not required", grant: "Up to 90 days", vac: "TLS / VFS" },
        docs: {
          "Identity": ["Passport","CNIC"],
          "Purpose": ["Itinerary","Hotel bookings","Flight reservation"],
          "Financial": ["6 months bank statements","Income proof"],
          "Insurance": ["Travel insurance €30,000"],
          "Ties": ["Employment / property / family evidence"]
        },
        financial: { title: "Funds", main: "Sufficient means for the stay", note: "", savings: "", methods: [] },
        process: { steps: ["Appointment at VAC","Submit + biometrics"], fees: "€90 + service fee" },
        research: ["German mission website"]
      },
      student: {
        title: "Student Visa / National Visa",
        summary: { threshold: "Blocked account or proof of funds", english: "Required", grant: "Course duration", vac: "VAC / Embassy" },
        docs: {
          "Academic": ["Admission / acceptance letter","Academic documents + translations"],
          "Financial": ["Blocked account (Sperrkonto) or formal obligation letter / scholarship"],
          "Insurance": ["Health insurance"],
          "Identity": ["Passport","Photos"],
          "Other": ["Motivation letter","CV often requested"]
        },
        financial: { title: "Funds", main: "Blocked account amount set by German authorities (check current figure)", note: "Usually covers living costs for one year.", savings: "", methods: [] },
        process: { steps: ["Get admission","Open blocked account if required","Apply via VAC","Biometrics","Decision"], fees: "National visa fee" },
        research: ["German missions in Pakistan + DAAD / university guidance"]
      }
    }
  },
  usa: {
    name: "United States", flag: "🇺🇸",
    visas: {
      b1b2: {
        title: "B-1/B-2 Visitor Visa",
        summary: { threshold: "Strong ties + funds", english: "Interview", grant: "Usually multiple entry", vac: "US Embassy / Consulate" },
        docs: {
          "Identity": ["Valid passport","DS-160 confirmation","Photo"],
          "Purpose": ["Cover letter / invitation if any","Itinerary"],
          "Financial & Ties": ["Bank statements","Employment letter / business documents","Property ownership","Family ties evidence"],
          "Other": ["Previous US visas if any","Travel history"]
        },
        financial: { title: "Funds & Ties", main: "No fixed amount – must convince officer you will return to Pakistan", note: "Strong economic, family and social ties are decisive.", savings: "", methods: [] },
        process: { steps: ["Complete DS-160","Pay MRV fee","Book interview (Islamabad or Karachi)","Attend interview"], fees: "MRV fee (check travel.state.gov)" },
        research: ["travel.state.gov","Interview is critical"]
      },
      student: {
        title: "F-1 Student Visa",
        summary: { threshold: "SEVIS + funds", english: "Required", grant: "Duration of status", vac: "US Embassy/Consulate" },
        docs: {
          "Academic": ["I-20 from SEVP school","Academic transcripts & degrees","English test scores"],
          "Financial": ["Proof of funds for first year","Sponsor affidavit if applicable"],
          "Identity": ["Passport","DS-160","Photo","SEVIS fee receipt"]
        },
        financial: { title: "Funds", main: "Cover tuition + living for at least first academic year", note: "", savings: "", methods: [] },
        process: { steps: ["Get I-20","Pay SEVIS","DS-160 + MRV","Interview"], fees: "SEVIS + MRV" },
        research: ["travel.state.gov"]
      },
      work: {
        title: "Work Visa (H-1B / L-1 / Other)",
        summary: { threshold: "Petition approved", english: "Varies", grant: "As per petition", vac: "US Embassy" },
        docs: {
          "Petition": ["Approved I-129 / petition notice"],
          "Identity": ["Passport","DS-160","Photo"],
          "Supporting": ["Education & experience documents","Employment letter"]
        },
        financial: { title: "Sponsorship", main: "Employer petition is primary; personal funds secondary", note: "", savings: "", methods: [] },
        process: { steps: ["Employer files petition","After approval apply for visa","Interview"], fees: "MRV + petition fees (employer)" },
        research: ["USCIS + travel.state.gov"]
      }
    }
  },
  canada: {
    name: "Canada", flag: "🇨🇦",
    visas: {
      visitor: {
        title: "Visitor Visa (Temporary Resident)",
        summary: { threshold: "Sufficient funds", english: "May be tested", grant: "Up to 6 months typical", vac: "VFS / VAC" },
        docs: {
          "Identity": ["Passport","CNIC","Photos"],
          "Purpose": ["Invitation letter (if any)","Itinerary","Purpose letter"],
          "Financial": ["Bank statements","Employment / business proof"],
          "Ties": ["Property, family, employment evidence in Pakistan"]
        },
        financial: { title: "Funds", main: "Enough for the stay without working", note: "Depends on length of stay and hosting.", savings: "", methods: [] },
        process: { steps: ["Apply online via IRCC","Biometrics at VAC","Decision"], fees: "Visa + biometrics fee" },
        research: ["canada.ca / IRCC","Biometrics required"]
      },
      spouse: {
        title: "Spouse / Partner Sponsorship",
        summary: { threshold: "Sponsor meets LICO if required", english: "Not always", grant: "PR pathway", vac: "IRCC / VAC" },
        docs: {
          "Relationship": ["Marriage certificate (Nikah Nama + NADRA MRC)","Relationship evidence","FRC"],
          "Sponsor": ["Sponsorship forms","Financial documents"],
          "Applicant": ["Passport","Police certificates","Medical exam"]
        },
        financial: { title: "Sponsor Income", main: "LICO may apply depending on situation; many spouse cases have exemptions", note: "Check current IRCC rules.", savings: "", methods: [] },
        process: { steps: ["Sponsor applies","Applicant biometrics + medical + police","Decision"], fees: "Sponsorship + PR fees" },
        research: ["canada.ca Family sponsorship"]
      },
      student: {
        title: "Study Permit",
        summary: { threshold: "Tuition + living funds", english: "Required", grant: "Program duration", vac: "VAC" },
        docs: {
          "Academic": ["Letter of Acceptance","Academic documents","English/French test"],
          "Financial": ["Proof of funds for tuition + living"],
          "Identity": ["Passport","Photos"],
          "Other": ["Statement of purpose","Biometrics"]
        },
        financial: { title: "Funds", main: "Tuition + living costs (amount set by IRCC / province)", note: "", savings: "", methods: [] },
        process: { steps: ["Get acceptance","Apply for study permit","Biometrics","Decision"], fees: "Study permit fee + biometrics" },
        research: ["IRCC Study permit"]
      }
    }
  },
  australia: {
    name: "Australia", flag: "🇦🇺",
    visas: {
      visitor: {
        title: "Visitor Visa (Subclass 600)",
        summary: { threshold: "Sufficient funds", english: "Not required", grant: "Up to 12 months possible", vac: "Online" },
        docs: {
          "Identity": ["Passport","CNIC"],
          "Purpose": ["Purpose statement","Itinerary","Invitation if any"],
          "Financial": ["Bank statements","Income proof"],
          "Ties": ["Employment, property, family evidence"]
        },
        financial: { title: "Funds", main: "Enough for stay and return", note: "", savings: "", methods: [] },
        process: { steps: ["Apply via ImmiAccount","Biometrics if requested","Decision"], fees: "Check homeaffairs.gov.au" },
        research: ["homeaffairs.gov.au"]
      },
      student: {
        title: "Student Visa (Subclass 500)",
        summary: { threshold: "GTE + funds", english: "Required", grant: "Course duration", vac: "Online" },
        docs: {
          "Academic": ["CoE","Academic documents","English test"],
          "Financial": ["Funds for tuition + living + travel","GTE statement"],
          "Other": ["OSHC","Passport"]
        },
        financial: { title: "Funds & GTE", main: "Genuine Temporary Entrant + sufficient funds", note: "Living cost figures published by Home Affairs.", savings: "", methods: [] },
        process: { steps: ["Get CoE","Prepare GTE & financials","Apply online"], fees: "Student visa fee" },
        research: ["homeaffairs.gov.au Student visa"]
      },
      work: {
        title: "Temporary Skill Shortage / Work Visa",
        summary: { threshold: "Sponsorship required", english: "Usually required", grant: "As per stream", vac: "Online" },
        docs: {
          "Sponsorship": ["Nomination / sponsorship approval"],
          "Skills": ["Skills assessment if required","Employment references"],
          "Identity": ["Passport","English test"]
        },
        financial: { title: "Sponsorship", main: "Employer nomination is primary", note: "", savings: "", methods: [] },
        process: { steps: ["Employer nominates","Apply for visa","Decision"], fees: "Varies by stream" },
        research: ["homeaffairs.gov.au"]
      }
    }
  },
  uae: {
    name: "United Arab Emirates", flag: "🇦🇪",
    visas: {
      tourist: {
        title: "Tourist / Visit Visa",
        summary: { threshold: "As per channel", english: "Not required", grant: "30–90 days typical", vac: "Airline / VFS / sponsor" },
        docs: {
          "Identity": ["Passport (6 months validity)","Photo","CNIC"],
          "Other": ["Return ticket","Hotel or sponsor documents","Bank statement sometimes"]
        },
        financial: { title: "Funds", main: "Often handled via airline or sponsor", note: "Pre-arranged visa usually required for Pakistani nationals.", savings: "", methods: [] },
        process: { steps: ["Apply via airline, hotel or authorised agency","Receive visa","Travel"], fees: "Varies" },
        research: ["UAE visa portals / airlines","Confirm current rules before travel"]
      },
      employment: {
        title: "Employment / Work Visa",
        summary: { threshold: "Employer sponsored", english: "Not always", grant: "As per contract", vac: "Employer / GDRFA" },
        docs: {
          "From Employer": ["Offer letter","Labour approval"],
          "Applicant": ["Passport","Attested educational certificates","Photo","Medical after entry"]
        },
        financial: { title: "Sponsorship", main: "Employer sponsors; salary meets emirate minimums", note: "", savings: "", methods: [] },
        process: { steps: ["Employer approval","Entry permit","Medical & Emirates ID","Residence stamping"], fees: "Mainly employer" },
        research: ["MOHRE / GDRFA / ICP"]
      },
      transit: {
        title: "Transit Visa",
        summary: { threshold: "As per airline", english: "Not required", grant: "48–96 hours typical", vac: "Airline" },
        docs: { "Identity": ["Passport","Onward ticket","Photo if required"] },
        financial: { title: "Funds", main: "Usually not separately required for short transit", note: "", savings: "", methods: [] },
        process: { steps: ["Apply via airline if needed","Travel"], fees: "Varies" },
        research: ["Airline and UAE immigration rules"]
      }
    }
  },
  saudi: {
    name: "Saudi Arabia", flag: "🇸🇦",
    visas: {
      visit: {
        title: "Visit / Tourist Visa",
        summary: { threshold: "As per portal", english: "Not required", grant: "Varies", vac: "Online / Enjaz" },
        docs: {
          "Identity": ["Passport","Photo","CNIC"],
          "Other": ["Application via official portal","Supporting documents as requested"]
        },
        financial: { title: "Funds", main: "As required by visa category", note: "", savings: "", methods: [] },
        process: { steps: ["Apply via official Saudi portal or authorised channel","Pay fee","Receive e-visa or sticker"], fees: "Varies" },
        research: ["visitsaudi.com / Ministry portals"]
      },
      work: {
        title: "Work / Employment Visa",
        summary: { threshold: "Employer sponsored", english: "Not always", grant: "As per contract", vac: "Employer / Enjaz" },
        docs: {
          "Employer": ["Block visa / approval","Contract"],
          "Applicant": ["Passport","Attested certificates","Medical","Photo"]
        },
        financial: { title: "Sponsorship", main: "Employer sponsorship required", note: "", savings: "", methods: [] },
        process: { steps: ["Employer approval","Applicant applies","Medical & entry"], fees: "Mainly employer" },
        research: ["Qiwa / Enjaz / HR Ministry"]
      },
      umrah: {
        title: "Umrah Visa",
        summary: { threshold: "As per operator", english: "Not required", grant: "Short stay", vac: "Authorised operator" },
        docs: {
          "Identity": ["Passport","Photo","CNIC"],
          "Other": ["Application via authorised Umrah operator","Vaccination as required"]
        },
        financial: { title: "Package", main: "Usually included in operator package", note: "", savings: "", methods: [] },
        process: { steps: ["Book via authorised operator","Receive visa","Travel"], fees: "Package dependent" },
        research: ["Official Umrah portals / Ministry of Hajj"]
      }
    }
  },
  turkey: {
    name: "Turkey", flag: "🇹🇷",
    visas: {
      tourist: {
        title: "Tourist / E-Visa or Sticker",
        summary: { threshold: "Sufficient funds", english: "Not required", grant: "Up to 90 days", vac: "E-visa / Embassy" },
        docs: {
          "Identity": ["Passport","Photo"],
          "E-Visa": ["Online application if eligible","Return ticket","Hotel booking"],
          "Sticker": ["Application form","Bank statements","Employment letter","Invitation if any"]
        },
        financial: { title: "Funds", main: "Enough for the stay", note: "Check e-visa eligibility on official portal.", savings: "", methods: [] },
        process: { steps: ["Check e-visa.gov.tr eligibility","If not eligible apply via Embassy/centre"], fees: "E-visa or consular fee" },
        research: ["www.evisa.gov.tr"]
      },
      business: {
        title: "Business Visa",
        summary: { threshold: "Sufficient funds", english: "Not required", grant: "Up to 90 days", vac: "Embassy / Centre" },
        docs: {
          "Identity": ["Passport","Photos"],
          "Business": ["Invitation from Turkish company","Applicant business documents"],
          "Financial": ["Bank statements"],
          "Travel": ["Flights","Hotel"]
        },
        financial: { title: "Funds", main: "Sufficient for trip", note: "", savings: "", methods: [] },
        process: { steps: ["Invitation","Apply via official channel"], fees: "Consular fee" },
        research: ["Turkish missions in Pakistan"]
      }
    }
  },
  malaysia: {
    name: "Malaysia", flag: "🇲🇾",
    visas: {
      tourist: {
        title: "Tourist / Social Visit Pass",
        summary: { threshold: "Sufficient funds", english: "Not required", grant: "Usually 30–90 days", vac: "Embassy / online" },
        docs: {
          "Identity": ["Passport (6 months)","Photo","CNIC"],
          "Purpose": ["Return ticket","Hotel booking","Bank statement","Purpose letter"]
        },
        financial: { title: "Funds", main: "Enough for stay and return", note: "", savings: "", methods: [] },
        process: { steps: ["Check current requirements","Apply if pre-visa needed"], fees: "Varies" },
        research: ["Malaysian Immigration / Embassy","Rules can change"]
      },
      student: {
        title: "Student Visa / Pass",
        summary: { threshold: "Institution + funds", english: "May be required", grant: "Course duration", vac: "EMGS / Immigration" },
        docs: {
          "Academic": ["Offer letter / acceptance","Academic documents"],
          "Financial": ["Proof of funds"],
          "Identity": ["Passport","Photos"],
          "Other": ["Medical as required"]
        },
        financial: { title: "Funds", main: "As required by institution / EMGS", note: "", savings: "", methods: [] },
        process: { steps: ["Get offer","Apply via EMGS / Immigration process"], fees: "Varies" },
        research: ["EMGS + Malaysian Immigration"]
      }
    }
  },
  schengen: {
    name: "Other Schengen Country", flag: "🇪🇺",
    visas: {
      tourist: {
        title: "Schengen Short-Stay (Tourist)",
        summary: { threshold: "Country-specific", english: "Not required", grant: "Up to 90/180 days", vac: "Country VAC" },
        docs: {
          "Identity": ["Passport","Photos","CNIC"],
          "Purpose": ["Application form","Itinerary","Hotel + flights"],
          "Financial": ["6 months bank statements","Income proof"],
          "Insurance": ["Travel insurance €30,000"],
          "Ties": ["Employment / property / family evidence"]
        },
        financial: { title: "Means of Subsistence", main: "Varies by Member State", note: "Check the specific country’s reference amounts.", savings: "", methods: [] },
        process: { steps: ["Identify main destination","Book that country’s VAC appointment","Submit + biometrics"], fees: "€90 + VAC fee" },
        research: ["Main destination or first entry rule"]
      },
      business: {
        title: "Schengen Business Visa",
        summary: { threshold: "Country-specific", english: "Not required", grant: "Up to 90 days", vac: "Country VAC" },
        docs: {
          "Identity": ["Passport","Photos"],
          "Business": ["Invitation from EU company","Applicant business docs (NTN, tax, Chamber, bank)"],
          "Travel": ["Flights","Hotel","Insurance €30,000"],
          "Financial": ["Personal + business bank statements"]
        },
        financial: { title: "Funds", main: "Sufficient for stay + return", note: "", savings: "", methods: [] },
        process: { steps: ["Invitation","Correct country VAC","Submit + biometrics"], fees: "€90 + service fee" },
        research: ["Main destination rule"]
      }
    }
  }
};

/* Fill remaining countries with standard tourist + business + student where sensible */
["france","italy","netherlands","qatar","china","japan","singapore","newzealand"].forEach(code => {
  if (!DB[code]) {
    const names = {
      france: ["France (Schengen)","🇫🇷"], italy: ["Italy (Schengen)","🇮🇹"], netherlands: ["Netherlands (Schengen)","🇳🇱"],
      qatar: ["Qatar","🇶🇦"], china: ["China","🇨🇳"], japan: ["Japan","🇯🇵"],
      singapore: ["Singapore","🇸🇬"], newzealand: ["New Zealand","🇳🇿"]
    };
    const isSchengen = ["france","italy","netherlands"].includes(code);
    DB[code] = {
      name: names[code][0], flag: names[code][1],
      visas: {
        tourist: {
          title: isSchengen ? "Tourist / Schengen Visa" : "Tourist / Visit Visa",
          summary: { threshold: isSchengen ? "Country reference amount" : "Sufficient funds", english: "Varies", grant: isSchengen ? "Up to 90 days" : "Varies", vac: "Embassy / VAC" },
          docs: {
            "Identity": ["Valid passport","Photos","CNIC"],
            "Purpose": ["Application form","Itinerary","Hotel + flight bookings"],
            "Financial": ["Bank statements (usually 6 months)","Income / employment proof"],
            "Ties to Pakistan": ["Employment letter","Property or family evidence"],
            "Other": [isSchengen ? "Travel insurance min €30,000" : "Travel insurance if required","Invitation letter if applicable"]
          },
          financial: { title: "Funds", main: "Sufficient means for stay and return", note: "Verify exact amounts on official site.", savings: "", methods: [] },
          process: { steps: ["Check official embassy/VAC site for Pakistan","Book appointment if required","Submit + biometrics","Decision"], fees: "Varies – confirm officially" },
          research: ["Always verify on official government/VAC website","Requirements for Pakistani nationals can be stricter"]
        },
        business: {
          title: "Business Visa",
          summary: { threshold: "Sufficient funds", english: "Varies", grant: "Varies", vac: "Embassy / VAC" },
          docs: {
            "Identity": ["Passport","Photos"],
            "Business": ["Invitation from host company","Applicant company documents (NTN, tax, bank, Chamber)"],
            "Travel": ["Flights","Hotel","Insurance if required"],
            "Financial": ["Personal bank statements"]
          },
          financial: { title: "Funds", main: "Sufficient for the business trip", note: "", savings: "", methods: [] },
          process: { steps: ["Obtain invitation","Apply via official channel","Biometrics if required"], fees: "Varies" },
          research: ["Confirm with destination country’s mission in Pakistan"]
        },
        student: {
          title: "Student Visa",
          summary: { threshold: "Proof of funds for studies", english: "Usually required", grant: "Course duration", vac: "Embassy / VAC" },
          docs: {
            "Academic": ["Admission / acceptance letter","Academic transcripts + translations"],
            "Financial": ["Proof of funds / scholarship"],
            "Identity": ["Passport","Photos"],
            "Other": ["Language test if required","Insurance / medical as required"]
          },
          financial: { title: "Funds", main: "Must cover tuition and living costs", note: "Exact amount depends on country and course.", savings: "", methods: [] },
          process: { steps: ["Get admission","Prepare financial evidence","Apply via official channel"], fees: "Varies" },
          research: ["Official education + immigration portals of the destination"]
        }
      }
    };
  }
});

const visaOptions = {
  uk: [["spouse","Spouse / Partner"],["visit","Standard Visitor"],["student","Student"],["work","Skilled Worker / Work"]],
  spain: [["business","Business Visit"],["tourist","Tourist / Visit"],["student","Student / National"]],
  germany: [["business","Business / Schengen"],["tourist","Tourist Schengen"],["student","Student / National"]],
  france: [["tourist","Tourist / Schengen"],["business","Business"],["student","Student"]],
  italy: [["tourist","Tourist / Schengen"],["business","Business"],["student","Student"]],
  netherlands: [["tourist","Tourist / Schengen"],["business","Business"],["student","Student"]],
  schengen: [["tourist","Tourist / Visit"],["business","Business"]],
  usa: [["b1b2","B-1/B-2 Visitor"],["student","F-1 Student"],["work","Work (H-1B/L-1 etc.)"]],
  canada: [["visitor","Visitor"],["spouse","Spouse Sponsorship"],["student","Study Permit"]],
  australia: [["visitor","Visitor (600)"],["student","Student (500)"],["work","Work / TSS"]],
  uae: [["tourist","Tourist / Visit"],["employment","Employment / Work"],["transit","Transit"]],
  saudi: [["visit","Visit / Tourist"],["work","Work / Employment"],["umrah","Umrah"]],
  turkey: [["tourist","Tourist / E-Visa"],["business","Business"]],
  malaysia: [["tourist","Tourist / Social Visit"],["student","Student"]],
  qatar: [["tourist","Tourist / Visit"],["business","Business"],["student","Student"]],
  china: [["tourist","Tourist"],["business","Business"],["student","Student"]],
  japan: [["tourist","Tourist"],["business","Business"],["student","Student"]],
  singapore: [["tourist","Tourist / Visit"],["business","Business"],["student","Student"]],
  newzealand: [["tourist","Visitor"],["business","Business"],["student","Student"]]
};

/* ---------- Visa-Free / VOA / E-Visa for Pakistani Passport (indicative Aug 2026) ---------- */
const VISA_FREE = {
  visaFree: {
    title: "Visa-Free (or limited visa exemption)",
    note: "Very limited for Pakistani passport. Confirm before travel.",
    list: [
      "Dominica (short stay – confirm current rules)",
      "Haiti (confirm current rules)",
      "Micronesia (confirm)",
      "Some limited exemptions may exist for specific categories or bilateral arrangements – always verify"
    ]
  },
  voa: {
    title: "Visa on Arrival (VOA) – common destinations",
    note: "Often requires return ticket, hotel booking and sufficient funds. Rules change.",
    list: [
      "Maldives",
      "Nepal",
      "Qatar (under certain conditions / Hayya or current VOA rules – verify)",
      "Some African and Caribbean destinations (e.g. selected periods or conditions)",
      "Check latest for: Burundi, Cape Verde, Comoros, Guinea-Bissau, Madagascar, Mauritania, Mozambique, Rwanda, Senegal, Somalia, Togo, Tuvalu, etc."
    ]
  },
  evisa: {
    title: "E-Visa widely available",
    note: "Apply online before travel. Approval not guaranteed.",
    list: [
      "Turkey (e-visa for many nationalities – check eligibility)",
      "Azerbaijan",
      "Georgia (e-visa / conditions)",
      "Kazakhstan",
      "Uzbekistan",
      "Tajikistan",
      "Malaysia (eNTRI / e-visa channels when available)",
      "Indonesia (e-visa / VOA depending on current policy)",
      "Kenya (eTA / e-visa)",
      "Uganda, Zambia, Zimbabwe and several African states",
      "Cambodia, Laos, Vietnam (e-visa options)",
      "Sri Lanka (ETA)",
      "Many others – use official government e-visa portals only"
    ]
  },
  important: [
    "Pakistani passport has relatively limited visa-free access compared with many other nationalities.",
    "Visa on Arrival and e-visa options expand possibilities but still require preparation (funds, return ticket, hotel, sometimes invitation).",
    "Gulf countries (UAE, Saudi, Qatar, etc.) generally require pre-arranged visas for Pakistani nationals.",
    "Schengen, UK, USA, Canada, Australia, New Zealand require prior visas.",
    "Always use official government or embassy websites. Third-party sites can be outdated or fraudulent.",
    "This list is indicative as of research snapshot 17 August 2026 and must be re-checked before any travel."
  ]
};

/* ---------- UI Logic ---------- */
function onCountryChange() {
  const country = document.getElementById('country').value;
  const visaSel = document.getElementById('visaType');
  visaSel.innerHTML = '<option value="">— Select visa type —</option>';
  visaSel.disabled = !country;
  if (country && visaOptions[country]) {
    visaOptions[country].forEach(([val, label]) => {
      const opt = document.createElement('option');
      opt.value = val;
      opt.textContent = label;
      visaSel.appendChild(opt);
    });
  }
  document.getElementById('results').classList.add('hidden');
  document.getElementById('visaFreePanel').classList.add('hidden');
  document.getElementById('emptyState').classList.remove('hidden');
}

function renderContent() {
  const country = document.getElementById('country').value;
  const visa = document.getElementById('visaType').value;
  if (!country || !visa) { alert('Please select both destination country and visa type.'); return; }
  const data = DB[country]?.visas?.[visa];
  if (!data) { alert('Checklist data not available for this combination yet.'); return; }

  document.getElementById('visaFreePanel').classList.add('hidden');
  var sp = document.getElementById('specialPanel');
  if (sp) sp.classList.add('hidden');
  document.getElementById('emptyState').classList.add('hidden');
  document.getElementById('results').classList.remove('hidden');

  const cName = DB[country].name;
  const flag = DB[country].flag;
  const s = data.summary;
  const visaTitle = data.title;
  const isStudent = /student|study|f-1|500/i.test(visa + ' ' + visaTitle);
  const isSpouse = /spouse|partner|family/i.test(visa + ' ' + visaTitle);
  const isWork = /work|skilled|employment|h-1b/i.test(visa + ' ' + visaTitle);
  const isVisitor = /visit|tourist|b1|b2|600|transit/i.test(visa + ' ' + visaTitle);

  document.getElementById('printTitle').textContent = flag + ' ' + cName + ' – ' + visaTitle;
  document.getElementById('summaryCards').innerHTML = `
    <div class="bg-white rounded-xl border border-slate-200 p-4 text-center card-hover"><div class="text-2xl mb-1">${flag}</div><div class="text-xs text-slate-500">Destination</div><div class="font-semibold text-sm">${cName}</div></div>
    <div class="bg-white rounded-xl border border-slate-200 p-4 text-center card-hover"><div class="text-lg font-bold text-primary-700">${s.threshold}</div><div class="text-xs text-slate-500 mt-1">Funds / Threshold</div></div>
    <div class="bg-white rounded-xl border border-slate-200 p-4 text-center card-hover"><div class="text-lg font-bold text-primary-700">${s.grant}</div><div class="text-xs text-slate-500 mt-1">Typical Grant</div></div>
    <div class="bg-white rounded-xl border border-slate-200 p-4 text-center card-hover"><div class="text-lg font-bold text-primary-700">${s.vac}</div><div class="text-xs text-slate-500 mt-1">Application Centre</div></div>`;

  /* ===== DOCUMENTS TAB (merged) ===== */
  let checklistHtml = `<div class="bg-white rounded-xl border border-slate-200 p-5">
    <div class="flex flex-wrap items-center justify-between gap-2 mb-1">
      <h2 class="text-lg font-bold text-primary-800">${flag} ${cName} – ${visaTitle}</h2>
      <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Research merged • 17 Aug 2026</span>
    </div>
    <p class="text-xs text-slate-500 mb-4">Origin: Pakistan • Sponsor + Finance + Education research included below</p>`;

  for (const [section, items] of Object.entries(data.docs)) {
    checklistHtml += `<div class="mb-4"><h3 class="font-semibold text-sm text-primary-700 mb-2 border-b border-slate-100 pb-1">${section}</h3><div class="space-y-1">`;
    items.forEach(item => {
      checklistHtml += `<label class="check-item flex items-start gap-2.5 px-2 py-1.5 rounded cursor-pointer text-sm"><input type="checkbox" class="mt-0.5 w-4 h-4 rounded border-slate-300 text-primary-600"><span>${item}</span></label>`;
    });
    checklistHtml += `</div></div>`;
  }

  // Merge: Who Can Sponsor (matched to visa type)
  checklistHtml += `<div class="mb-4 mt-6 border-t border-slate-200 pt-4">
    <h3 class="font-semibold text-sm text-amber-800 mb-2 border-b border-amber-100 pb-1">Who Can Be a Sponsor (for this visa)</h3>`;
  const sponsorKey = matchSponsorKey(country, visa, visaTitle, isStudent, isSpouse, isWork, isVisitor);
  if (sponsorKey && typeof SPONSORS !== 'undefined' && SPONSORS.byType[sponsorKey]) {
    const info = SPONSORS.byType[sponsorKey];
    checklistHtml += `<p class="text-sm mb-2"><strong>Who:</strong> ${info.who}</p><ul class="space-y-1 text-sm text-slate-600">`;
    info.requirements.forEach(r => { checklistHtml += `<li class="flex gap-2"><span class="text-amber-600">•</span> ${r}</li>`; });
    checklistHtml += `</ul>`;
  } else {
    checklistHtml += `<p class="text-sm text-slate-600">For this route, check the destination country’s rules. Typical sponsors: employer (work), education provider (student), partner/family member (family visas), or host with invitation (visitor). See full sponsor guide for details.</p>`;
  }
  checklistHtml += `</div>`;

  // Merge: Foreign Education case (always show for student; brief note otherwise)
  if (typeof FOREIGN_EDU !== 'undefined') {
    checklistHtml += `<div class="mb-4 mt-4 border-t border-slate-200 pt-4">
      <h3 class="font-semibold text-sm text-teal-800 mb-2 border-b border-teal-100 pb-1">Education Obtained Outside Pakistan</h3>`;
    if (isStudent) {
      checklistHtml += `<p class="text-sm text-slate-600 mb-2">${FOREIGN_EDU.intro}</p>`;
      FOREIGN_EDU.scenarios.forEach(sc => {
        checklistHtml += `<div class="mb-3"><div class="font-medium text-sm text-teal-700">${sc.case}</div><ul class="mt-1 space-y-1 text-sm text-slate-600">`;
        sc.actions.forEach(a => { checklistHtml += `<li class="flex gap-2"><span>•</span> ${a}</li>`; });
        checklistHtml += `</ul></div>`;
      });
      checklistHtml += `<p class="text-sm text-teal-800 bg-teal-50 rounded p-2">${FOREIGN_EDU.financeNote}</p>`;
    } else {
      checklistHtml += `<p class="text-sm text-slate-600">If any of your academic documents were issued outside Pakistan, provide original transcripts/certificates, certified English translations, and equivalency (e.g. Ecctis for UK) where the destination requires it. Explain study history in your cover letter.</p>`;
    }
    checklistHtml += `</div>`;
  }

  checklistHtml += `</div>`;
  document.getElementById('panel-checklist').innerHTML = checklistHtml;

  /* ===== FINANCIAL TAB (merged with Finance Deep Dive) ===== */
  const f = data.financial;
  let finHtml = `<div class="bg-white rounded-xl border border-slate-200 p-5">
    <h2 class="text-lg font-bold text-primary-800 mb-3">${f.title}</h2>
    <div class="bg-primary-50 border border-primary-100 rounded-lg p-4 mb-4">
      <div class="font-bold text-primary-800">${f.main}</div>
      ${f.note ? `<p class="text-sm text-primary-700 mt-1">${f.note}</p>` : ''}
    </div>`;
  if (f.savings) finHtml += `<p class="text-sm mb-4"><strong>Savings:</strong> ${f.savings}</p>`;
  if (f.methods && f.methods.length) {
    finHtml += `<h3 class="font-semibold mb-2">Calculation Methods (Appendix FM-SE style / route rules)</h3><div class="space-y-3">`;
    f.methods.forEach(m => {
      finHtml += `<div class="border border-slate-200 rounded-lg p-3"><div class="font-medium text-primary-700 text-sm">${m.name}</div><div class="text-sm text-slate-600 mt-1">${m.desc}</div></div>`;
    });
    finHtml += `</div>`;
  }

  // Merge Finance Deep Dive
  if (typeof FINANCE_DEEP !== 'undefined') {
    finHtml += `<div class="mt-6 border-t border-slate-200 pt-4">
      <h3 class="font-semibold text-rose-800 mb-2">Finance Deep Dive – Core Principles</h3>
      <ul class="space-y-1 text-sm mb-4">`;
    FINANCE_DEEP.principles.forEach(p => { finHtml += `<li class="flex gap-2"><span class="text-rose-500">•</span> ${p}</li>`; });
    finHtml += `</ul>
      <h3 class="font-semibold text-rose-800 mb-2">Route-Specific Guidance</h3>`;
    // Pick most relevant route text
    const routeHints = [];
    if (isSpouse || country === 'uk') routeHints.push(['UK Family (Spouse)', FINANCE_DEEP.byRoute['UK Family (Spouse)']]);
    if (isStudent) {
      routeHints.push(['UK Student / Student routes', FINANCE_DEEP.byRoute['UK Student']]);
      routeHints.push(['Canada / Australia student-style', FINANCE_DEEP.byRoute['Canada'] + ' ' + FINANCE_DEEP.byRoute['Australia']]);
    }
    if (isVisitor || country === 'spain' || country === 'germany' || country === 'schengen') {
      routeHints.push(['Schengen Short Stay', FINANCE_DEEP.byRoute['Schengen Short Stay']]);
    }
    if (country === 'usa') routeHints.push(['USA B1/B2 & F-1', FINANCE_DEEP.byRoute['USA B1/B2 & F-1']]);
    if (country === 'canada') routeHints.push(['Canada', FINANCE_DEEP.byRoute['Canada']]);
    if (country === 'australia') routeHints.push(['Australia', FINANCE_DEEP.byRoute['Australia']]);
    if (country === 'uae' || country === 'saudi' || country === 'qatar') routeHints.push(['Gulf Work', FINANCE_DEEP.byRoute['Gulf Work']]);
    if (!routeHints.length) {
      Object.entries(FINANCE_DEEP.byRoute).slice(0, 3).forEach(([k, v]) => routeHints.push([k, v]));
    }
    routeHints.forEach(([k, v]) => {
      finHtml += `<div class="border border-slate-200 rounded-lg p-3 mb-2"><div class="font-medium text-sm text-rose-700">${k}</div><p class="text-sm text-slate-600 mt-1">${v}</p></div>`;
    });
    finHtml += `<h3 class="font-semibold text-rose-800 mt-4 mb-2">Typical Financial Documents Checklist</h3><ul class="space-y-1 text-sm">`;
    FINANCE_DEEP.documents.forEach(d => {
      finHtml += `<label class="check-item flex items-start gap-2.5 px-2 py-1.5 rounded cursor-pointer text-sm"><input type="checkbox" class="mt-0.5 w-4 h-4 rounded border-slate-300 text-primary-600"><span>${d}</span></label>`;
    });
    finHtml += `</ul></div>`;
  }
  finHtml += `</div>`;
  document.getElementById('panel-financial').innerHTML = finHtml;

  /* ===== PROCESS TAB ===== */
  const p = data.process;
  let procHtml = `<div class="bg-white rounded-xl border border-slate-200 p-5"><h2 class="text-lg font-bold text-primary-800 mb-4">Application Process</h2><ol class="space-y-3 mb-6">`;
  p.steps.forEach((step, i) => {
    procHtml += `<li class="flex gap-3"><div class="w-7 h-7 rounded-full bg-primary-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">${i+1}</div><div class="text-sm pt-1">${step}</div></li>`;
  });
  procHtml += `</ol><div class="bg-slate-50 rounded-lg p-4 text-sm"><strong>Fees:</strong> ${p.fees}</div></div>`;
  document.getElementById('panel-process').innerHTML = procHtml;

  /* ===== RESEARCH TAB ===== */
  let resHtml = `<div class="bg-white rounded-xl border border-slate-200 p-5">
    <div class="flex items-center gap-2 mb-3">
      <span class="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
      <h2 class="text-lg font-bold text-primary-800">Research Notes</h2>
    </div>
    <p class="text-xs text-slate-500 mb-3">Snapshot date: <strong>17 August 2026</strong> • Merged sponsor, finance & education research into Documents and Financial tabs</p>
    <ul class="space-y-2 text-sm">`;
  data.research.forEach(r => { resHtml += `<li class="flex gap-2"><span class="text-green-500">✓</span> ${r}</li>`; });
  resHtml += `</ul>
    <div class="mt-5 bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-900">
      <strong>Live / daily updates:</strong> True daily crawling of every embassy and immigration site needs a backend service (scheduled scrapers + official APIs). This front-end is structured so a backend can push fresh JSON daily. Until then, treat this as a researched snapshot and always re-check official portals before applying.
    </div>
    <div class="mt-3 bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
      <strong>Disclaimer:</strong> Guidance only. Rules and fees change. Not legal advice.
    </div>
  </div>`;
  document.getElementById('panel-research').innerHTML = resHtml;

  showTab('checklist');
}

function matchSponsorKey(country, visa, title, isStudent, isSpouse, isWork, isVisitor) {
  if (typeof SPONSORS === 'undefined') return null;
  const keys = Object.keys(SPONSORS.byType);
  if (country === 'uk' && isSpouse) return 'UK Spouse / Partner';
  if (country === 'uk' && isVisitor) return 'UK Visitor';
  if (country === 'uk' && isStudent) return 'UK Student';
  if (country === 'uk' && isWork) return 'UK Skilled Worker';
  if ((country === 'spain' || country === 'germany' || country === 'france' || country === 'italy' || country === 'netherlands' || country === 'schengen') && (isVisitor || /business/i.test(title))) return 'Schengen Visitor / Business';
  if (country === 'usa' && isVisitor) return 'USA B1/B2';
  if (country === 'usa' && isStudent) return 'USA F-1 Student';
  if (country === 'canada' && isVisitor) return 'Canada Visitor';
  if (country === 'canada' && isSpouse) return 'Canada Spouse Sponsorship';
  if (country === 'canada' && isStudent) return 'Canada Study Permit';
  if (country === 'australia' && (isVisitor || isStudent)) return 'Australia Visitor / Student';
  if ((country === 'uae' || country === 'saudi' || country === 'qatar') && isWork) return 'Gulf Work (UAE / Saudi / Qatar)';
  // fallback partial match
  for (const k of keys) {
    if (isSpouse && /spouse|partner|family/i.test(k)) return k;
    if (isStudent && /student|study/i.test(k)) return k;
    if (isWork && /work|skilled|employment/i.test(k)) return k;
  }
  return keys[0] || null;
}

function showVisaFree() {
  document.getElementById('emptyState').classList.add('hidden');
  document.getElementById('results').classList.add('hidden');
  document.getElementById('visaFreePanel').classList.remove('hidden');

  let html = '';
  ['visaFree','voa','evisa'].forEach(key => {
    const block = VISA_FREE[key];
    html += `<div class="mb-6"><h3 class="font-semibold text-primary-700 mb-2">${block.title}</h3><p class="text-xs text-slate-500 mb-2">${block.note}</p><ul class="space-y-1 text-sm">`;
    block.list.forEach(item => { html += `<li class="flex gap-2"><span class="text-primary-500">•</span> ${item}</li>`; });
    html += `</ul></div>`;
  });
  html += `<div class="bg-slate-50 rounded-lg p-4"><h3 class="font-semibold mb-2">Key Points</h3><ul class="space-y-1 text-sm">`;
  VISA_FREE.important.forEach(item => { html += `<li class="flex gap-2"><span class="text-amber-600">!</span> ${item}</li>`; });
  html += `</ul></div>`;
  document.getElementById('visaFreeContent').innerHTML = html;
}

function showTab(name) {
  ['checklist','financial','process','research'].forEach(t => {
    document.getElementById('panel-' + t).classList.add('hidden');
    const tab = document.getElementById('tab-' + t);
    tab.classList.remove('tab-active');
    tab.classList.add('text-slate-500');
  });
  document.getElementById('panel-' + name).classList.remove('hidden');
  document.getElementById('tab-' + name).classList.add('tab-active');
  document.getElementById('tab-' + name).classList.remove('text-slate-500');
}



/* ---------- Export Functions ---------- */
function getChecklistText() {
  const country = document.getElementById('country').value;
  const visa = document.getElementById('visaType').value;
  if (!country || !visa) return '';
  const data = DB[country].visas[visa];
  const cName = DB[country].name;
  let text = `${DB[country].flag} ${cName} – ${data.title}\nOrigin: Pakistan\nGenerated: 17 August 2026\nVisaCheck Pro\n\n`;
  text += `FUNDS / THRESHOLD: ${data.summary.threshold}\nGRANT: ${data.summary.grant}\nCENTRE: ${data.summary.vac}\n\n`;
  text += `=== DOCUMENTS ===\n`;
  for (const [section, items] of Object.entries(data.docs)) {
    text += `\n${section}\n`;
    items.forEach(item => { text += `☐ ${item}\n`; });
  }
  text += `\n=== FINANCIAL ===\n${data.financial.main}\n${data.financial.note || ''}\n`;
  if (data.financial.savings) text += `Savings: ${data.financial.savings}\n`;
  text += `\n=== PROCESS ===\n`;
  data.process.steps.forEach((s, i) => { text += `${i+1}. ${s}\n`; });
  text += `\nFees: ${data.process.fees}\n`;
  text += `\n=== RESEARCH NOTES ===\n`;
  data.research.forEach(r => { text += `• ${r}\n`; });
  text += `\nDisclaimer: Guidance only. Always verify on official sources. Rules change.\n`;
  return text;
}

function copyChecklist() {
  const text = getChecklistText();
  if (!text) { alert('Generate a checklist first.'); return; }
  navigator.clipboard.writeText(text).then(() => alert('Checklist copied to clipboard.')).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = text; document.body.appendChild(ta); ta.select();
    document.execCommand('copy'); document.body.removeChild(ta);
    alert('Checklist copied to clipboard.');
  });
}

function exportDOCX() {
  const text = getChecklistText();
  if (!text) { alert('Generate a checklist first.'); return; }
  // Client-side true DOCX needs heavier libraries; we provide a clean .txt that opens well in Word
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  const country = document.getElementById('country').value;
  const visa = document.getElementById('visaType').value;
  a.download = `VisaChecklist_${country}_${visa}_Pakistan_Aug2026.txt`;
  a.click();
  URL.revokeObjectURL(url);
  // Also offer instruction
  setTimeout(() => alert('Downloaded as .txt (opens perfectly in Microsoft Word / Google Docs). For a formatted .docx you can paste into Word and save as DOCX, or use the PDF export.'), 300);
}

function exportPDF() {
  const element = document.getElementById('exportArea');
  if (!element || document.getElementById('results').classList.contains('hidden')) {
    alert('Generate a checklist first.');
    return;
  }
  // Make all panels visible temporarily for full export
  ['checklist','financial','process','research'].forEach(t => {
    document.getElementById('panel-' + t).classList.remove('hidden');
  });
  const opt = {
    margin: 10,
    filename: `VisaChecklist_${document.getElementById('country').value}_${document.getElementById('visaType').value}_Pakistan_Aug2026.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(element).save().then(() => {
    showTab('checklist');
  });
}

function exportVisaFreePDF() {
  const element = document.getElementById('visaFreePanel');
  const opt = {
    margin: 10,
    filename: 'Pakistan_Passport_VisaFree_VOA_EVisa_Aug2026.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(element).save();
}

/* ---------- Special Panels (Waiver, Diplomatic, Sponsors, Foreign Edu, Finance) ---------- */
function showSpecial(type) {
  if (typeof VISA_WAIVER === 'undefined') {
    alert('Data module failed to load. Please hard-refresh the page (Ctrl+Shift+R).');
    return;
  }
  document.getElementById('emptyState').classList.add('hidden');
  document.getElementById('results').classList.add('hidden');
  document.getElementById('visaFreePanel').classList.add('hidden');
  document.getElementById('specialPanel').classList.remove('hidden');

  const titleEl = document.getElementById('specialTitle');
  const contentEl = document.getElementById('specialContent');
  let html = '';

  if (type === 'waiver') {
    titleEl.textContent = VISA_WAIVER.title;
    html += `<p class="text-sm text-slate-600 mb-4">${VISA_WAIVER.intro}</p>`;
    VISA_WAIVER.programs.forEach(p => {
      html += `<div class="border border-slate-200 rounded-lg p-4 mb-3">
        <div class="font-semibold text-primary-800">${p.name}</div>
        <div class="text-xs font-medium text-amber-700 mt-1">${p.status}</div>
        <p class="text-sm text-slate-600 mt-2">${p.detail}</p>
      </div>`;
    });
    html += `<p class="text-sm text-slate-500 mt-4">${VISA_WAIVER.note}</p>`;
  }

  else if (type === 'diplomatic') {
    titleEl.textContent = DIPLOMATIC.title;
    html += `<p class="text-sm text-slate-600 mb-4">${DIPLOMATIC.intro}</p><ul class="space-y-2 text-sm">`;
    DIPLOMATIC.points.forEach(pt => { html += `<li class="flex gap-2"><span class="text-primary-500">•</span> ${pt}</li>`; });
    html += `</ul><div class="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-900">${DIPLOMATIC.advice}</div>`;
  }

  else if (type === 'sponsors') {
    titleEl.textContent = SPONSORS.title;
    html += `<p class="text-sm text-slate-600 mb-4">${SPONSORS.intro}</p>`;
    for (const [visa, info] of Object.entries(SPONSORS.byType)) {
      html += `<div class="border border-slate-200 rounded-lg p-4 mb-3">
        <div class="font-semibold text-primary-800">${visa}</div>
        <div class="text-sm mt-1"><strong>Who:</strong> ${info.who}</div>
        <ul class="mt-2 space-y-1 text-sm text-slate-600">`;
      info.requirements.forEach(r => { html += `<li class="flex gap-2"><span>•</span> ${r}</li>`; });
      html += `</ul></div>`;
    }
  }

  else if (type === 'foreignedu') {
    titleEl.textContent = FOREIGN_EDU.title;
    html += `<p class="text-sm text-slate-600 mb-4">${FOREIGN_EDU.intro}</p>`;
    FOREIGN_EDU.scenarios.forEach(sc => {
      html += `<div class="border border-slate-200 rounded-lg p-4 mb-3">
        <div class="font-semibold text-primary-800">${sc.case}</div>
        <ul class="mt-2 space-y-1 text-sm text-slate-600">`;
      sc.actions.forEach(a => { html += `<li class="flex gap-2"><span>•</span> ${a}</li>`; });
      html += `</ul></div>`;
    });
    html += `<div class="bg-primary-50 border border-primary-100 rounded-lg p-3 text-sm text-primary-800 mt-3">${FOREIGN_EDU.financeNote}</div>`;
  }

  else if (type === 'finance') {
    titleEl.textContent = FINANCE_DEEP.title;
    html += `<h3 class="font-semibold mb-2">Core Principles</h3><ul class="space-y-1 text-sm mb-4">`;
    FINANCE_DEEP.principles.forEach(p => { html += `<li class="flex gap-2"><span class="text-primary-500">•</span> ${p}</li>`; });
    html += `</ul><h3 class="font-semibold mb-2">By Route</h3>`;
    for (const [route, text] of Object.entries(FINANCE_DEEP.byRoute)) {
      html += `<div class="border border-slate-200 rounded-lg p-3 mb-2"><div class="font-medium text-primary-700 text-sm">${route}</div><p class="text-sm text-slate-600 mt-1">${text}</p></div>`;
    }
    html += `<h3 class="font-semibold mt-4 mb-2">Typical Financial Documents</h3><ul class="space-y-1 text-sm">`;
    FINANCE_DEEP.documents.forEach(d => { html += `<li class="flex gap-2"><span>•</span> ${d}</li>`; });
    html += `</ul>
    <div class="mt-5 border border-slate-200 rounded-lg p-4">
      <h3 class="font-semibold mb-2">${API_NOTE.title}</h3>
      <p class="text-sm text-slate-600 mb-2">${API_NOTE.current}</p>
      <ul class="text-sm space-y-1 mb-2">`;
    API_NOTE.possibleIntegrations.forEach(i => { html += `<li class="flex gap-2"><span>•</span> ${i}</li>`; });
    html += `</ul><p class="text-sm text-slate-500">${API_NOTE.recommendation}</p></div>`;
  }

  contentEl.innerHTML = html;
}

function exportSpecialPDF() {
  const element = document.getElementById('specialPanel');
  if (!element || element.classList.contains('hidden')) { alert('Open a special section first.'); return; }
  const opt = {
    margin: 10,
    filename: 'VisaCheckPro_Special_Info_Aug2026.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(element).save();
}

// Enhanced reset also hides special panel
function resetAll() {
  document.getElementById('country').value = '';
  document.getElementById('visaType').innerHTML = '<option value="">— Select visa type —</option>';
  document.getElementById('visaType').disabled = true;
  document.getElementById('results').classList.add('hidden');
  document.getElementById('visaFreePanel').classList.add('hidden');
  var sp = document.getElementById('specialPanel');
  if (sp) sp.classList.add('hidden');
  document.getElementById('emptyState').classList.remove('hidden');
}


/* ---------- Ensure global availability (fixes ReferenceError) ---------- */
window.onCountryChange = onCountryChange;
window.renderContent = renderContent;
window.showVisaFree = showVisaFree;
window.showSpecial = showSpecial;
window.resetAll = resetAll;
window.showTab = showTab;
window.copyChecklist = copyChecklist;
window.exportDOCX = exportDOCX;
window.exportPDF = exportPDF;
window.exportVisaFreePDF = exportVisaFreePDF;
window.exportSpecialPDF = exportSpecialPDF;

document.addEventListener('DOMContentLoaded', function() {
  var countryEl = document.getElementById('country');
  var visaEl = document.getElementById('visaType');
  if (countryEl) {
    countryEl.removeAttribute('onchange');
    countryEl.addEventListener('change', onCountryChange);
  }
  if (visaEl) {
    visaEl.removeAttribute('onchange');
    visaEl.addEventListener('change', renderContent);
  }
  console.log('VisaCheck Pro ready');
});


/* ---------- Live daily scrape integration ---------- */
window.LIVE_DATA = null;
window.LIVE_STATUS = { loaded: false, scrapedAt: null, success: 0, fail: 0, flags: {} };

function loadLiveData() {
  return fetch('data/live-data.json?ts=' + Date.now())
    .then(function(r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    })
    .then(function(data) {
      window.LIVE_DATA = data;
      window.LIVE_STATUS = {
        loaded: true,
        scrapedAt: data.scrapedAt || null,
        finishedAt: data.finishedAt || null,
        success: data.successCount || 0,
        fail: data.failCount || 0,
        flags: data.flags || {},
        sources: data.sources || []
      };
      updateLiveBanner();
      return data;
    })
    .catch(function(err) {
      window.LIVE_STATUS = { loaded: false, error: String(err), scrapedAt: null, success: 0, fail: 0, flags: {} };
      updateLiveBanner();
      return null;
    });
}

function updateLiveBanner() {
  var el = document.getElementById('liveBanner');
  if (!el) return;
  var s = window.LIVE_STATUS;
  if (s.loaded) {
    var when = s.scrapedAt ? new Date(s.scrapedAt).toUTCString() : 'unknown';
    el.innerHTML = '<span class="w-2 h-2 bg-green-400 rounded-full inline-block animate-pulse"></span> ' +
      'Live research data loaded • Last scrape: <strong>' + when + '</strong> • ' +
      s.success + ' sources OK' + (s.fail ? ', ' + s.fail + ' failed' : '') +
      (s.flags && s.flags.uk_financial_requirement_seen ? ' • UK financial rules detected' : '');
    el.className = 'text-xs bg-green-100 text-green-900 px-3 py-2 rounded-lg border border-green-200';
  } else {
    el.innerHTML = '<span class="w-2 h-2 bg-amber-400 rounded-full inline-block"></span> ' +
      'Using static research snapshot (17 Aug 2026). Live file not loaded' +
      (s.error ? ' (' + s.error + ')' : '') +
      '. Run <code class="bg-amber-50 px-1">node scripts/scrape-daily.js</code> to refresh.';
    el.className = 'text-xs bg-amber-50 text-amber-900 px-3 py-2 rounded-lg border border-amber-200';
  }
}

function refreshLiveResearch() {
  var btn = document.getElementById('btnRefreshLive');
  if (btn) { btn.disabled = true; btn.textContent = 'Refreshing…'; }
  loadLiveData().finally(function() {
    if (btn) { btn.disabled = false; btn.textContent = 'Refresh live data'; }
    // If a checklist is already showing, re-render to pick up live notes
    var country = document.getElementById('country') && document.getElementById('country').value;
    var visa = document.getElementById('visaType') && document.getElementById('visaType').value;
    if (country && visa) {
      try { renderContent(); } catch (e) {}
    }
  });
}

function liveResearchNotesHtml() {
  var s = window.LIVE_STATUS;
  if (!s || !s.loaded || !window.LIVE_DATA) {
    return '<p class="text-sm text-slate-500">No live scrape file loaded. Static snapshot is in use. Run the daily scraper to update <code>data/live-data.json</code>.</p>';
  }
  var html = '<div class="text-sm space-y-2">';
  html += '<p><strong>Last scrape:</strong> ' + (s.scrapedAt || '') + '</p>';
  html += '<p><strong>Sources:</strong> ' + s.success + ' OK / ' + (s.success + s.fail) + ' total</p>';
  if (s.flags) {
    html += '<ul class="list-disc list-inside text-slate-700">';
    if (s.flags.uk_financial_requirement_seen) html += '<li>UK pages still reference a financial requirement</li>';
    if (s.flags.uk_income_29000_seen) html += '<li>£29,000 figure detected in scraped UK content</li>';
    if (s.flags.tb_guidance_seen) html += '<li>TB testing guidance pages reachable</li>';
    html += '</ul>';
  }
  html += '<h4 class="font-semibold mt-3 mb-1">Source fetch status</h4><ul class="text-xs space-y-1">';
  (window.LIVE_DATA.sources || []).forEach(function(src) {
    var mark = src.ok ? '✓' : '✗';
    var color = src.ok ? 'text-green-700' : 'text-red-700';
    html += '<li class="' + color + '">' + mark + ' ' + src.name + (src.error ? ' — ' + src.error : '') + '</li>';
  });
  html += '</ul></div>';
  return html;
}

// Hook live notes into research panel after renderContent builds it
var _origRenderContent = renderContent;
renderContent = function() {
  _origRenderContent();
  var panel = document.getElementById('panel-research');
  if (panel) {
    var extra = document.createElement('div');
    extra.className = 'bg-white rounded-xl border border-slate-200 p-5 mt-4';
    extra.innerHTML = '<h3 class="font-semibold text-primary-800 mb-2">Daily scrape status</h3>' + liveResearchNotesHtml();
    panel.appendChild(extra);
  }
};

window.loadLiveData = loadLiveData;
window.refreshLiveResearch = refreshLiveResearch;
window.liveResearchNotesHtml = liveResearchNotesHtml;

// Load live data on startup (after DOM ready – chain with existing listener)
document.addEventListener('DOMContentLoaded', function() {
  loadLiveData();
});
