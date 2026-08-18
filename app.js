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
        title: "Family Visa – Spouse/Partner (Appendix FM, Pakistan → UK)",
        summary: { threshold: "£29,000 MIR (new applicants from 11 Apr 2024)", english: "A1 CEFR or exemption", grant: "Usually 33 months entry clearance", vac: "VFS Global" },
        docs: {
          "Relationship": [
            "Marriage certificate (NADRA/Union Council as applicable) with certified translation if not in English",
            "Evidence relationship is genuine and subsisting (photos, chats, visits, joint finances, call logs – quality over quantity)",
            "How you met, marriage circumstances, and cohabitation plans in the UK"
          ],
          "Sponsor status": [
            "British passport or proof of ILR/settled status / eligible sponsor status",
            "Sponsor’s UK address evidence"
          ],
          "Financial – Appendix FM / FM-SE": [
            "Meet minimum income requirement: £29,000 gross per year for most new partner applications (from 11 April 2024)",
            "Transitional £18,600 (+ child elements where still applicable) only if already on the partner route before 11 Apr 2024 with same partner – confirm GOV.UK guidance",
            "Category A employment: 6 months payslips + matching bank statements + employer letter",
            "Self-employment: tax returns, SA302/tax year overviews, business accounts as required by FM-SE",
            "Cash savings combination only as permitted by the Rules (specified formula)"
          ],
          "English language": [
            "Approved Secure English Language Test at A1 (or higher) unless exempt (e.g. degree taught in English with Ecctis, nationality exemption list)"
          ],
          "Accommodation": [
            "Adequate accommodation without public funds (tenancy, mortgage, letter from owner + capacity)"
          ],
          "Pakistan civil documents": [
            "CNIC, FRC, marriage registration as applicable; police certificate if requested",
            "TB test from approved clinic"
          ]
        },
        financial: {
          title: "Appendix FM minimum income requirement",
          main: "£29,000 gross annual income for most new spouse/partner applications (threshold in force since 11 April 2024; further rises were paused pending review – verify before applying).",
          note: "Child add-ons no longer increase the £29,000 threshold for new applicants. Meeting the figure is necessary but not sufficient – relationship genuineness and English/accommodation still apply.",
          savings: "Cash savings may top up income only under the FM-SE formula; usually need substantial savings above £16,000 floor rules.",
          methods: [
            { name: "Category A (salaried)", desc: "6 months with same employer; payslips + bank credits + employer letter on letterhead." },
            { name: "Category B / variable", desc: "As per FM-SE if income varies; follow specified periods carefully." },
            { name: "Self-employment", desc: "Last full financial year documents per FM-SE; do not mix categories incorrectly." },
            { name: "Cash savings", desc: "Only specified savings; held for required period; combination rules are strict." }
          ]
        },
        process: {
          steps: [
            "Gather relationship, finance, English, TB, accommodation evidence",
            "Online family visa application; pay fee + IHS",
            "Upload documents; attend VFS biometrics in Pakistan",
            "Await decision; use UKVI account / eVisa processes as directed"
          ],
          fees: "Family visa fee + Immigration Health Surcharge (check GOV.UK)"
        },
        research: [
          "https://www.gov.uk/uk-family-visa",
          "https://www.gov.uk/government/publications/chapter-8-appendix-fm-family-members",
          "Appendix FM-SE specified evidence rules"
        ]
      },
      visit: {
        title: "Standard Visitor Visa (Pakistan → UK)",
        summary: { threshold: "No fixed minimum – trip cost + ties", english: "Not required for short visit", grant: "Usually up to 6 months", vac: "VFS Global (biometrics) + eVisa" },
        docs: {
          "Identity": [
            "Valid Pakistani passport with blank page (valid for the whole stay; practice often expects 6+ months remaining)",
            "All previous passports showing travel history",
            "CNIC copy",
            "UKVI online application reference and biometric appointment confirmation"
          ],
          "Purpose of visit": [
            "Cover letter: purpose, dates, where you will stay, who pays, why you will return to Pakistan",
            "Day-by-day or clear itinerary (tourism / family / business as applicable)",
            "Hotel bookings or host address (prefer refundable bookings; avoid non-refundable tickets before decision)",
            "If family/friends visit: invitation letter from host with full UK address, relationship, and what they will provide",
            "Host’s UK status proof (passport/BRP/share code) and proof of address (council tax / utility)",
            "If business: invitation from UK company stating purpose, dates, who pays costs"
          ],
          "Financial evidence": [
            "Personal bank statements last 6 months (stamped/signed or official e-statements) – consistent activity, not a sudden large deposit",
            "Salary slips last 3–6 months OR business income proof (for self-employed)",
            "Employment letter on letterhead: role, salary, approved leave dates, return to work date",
            "Self-employed: NTN/FBR, business registration, tax returns, invoices as applicable",
            "If sponsored: sponsor letter, sponsor bank statements, relationship proof, and your own funds still shown where possible"
          ],
          "Ties to Pakistan (critical for refusal risk)": [
            "Evidence you will leave the UK: job, business, property, family dependants, studies",
            "Property documents or rental agreement if available",
            "FRC / family documents if relevant to dependants in Pakistan"
          ],
          "Other": [
            "Travel history (Schengen/UK/US visas and entry stamps) if any",
            "TB test only if visiting for more than 6 months (check GOV.UK TB list)",
            "Translations of any non-English documents"
          ]
        },
        financial: {
          title: "Visitor funds (credibility, not a fixed figure)",
          main: "UKVI does not publish a single minimum bank balance. You must show you can pay for the trip and return travel without working or public funds.",
          note: "Officers weigh consistency of income, source of funds, and ties to Pakistan more than a one-off high balance. Large last-minute deposits without explanation hurt credibility.",
          savings: "",
          methods: [
            { name: "Own funds", desc: "6 months statements showing regular salary/business credits and enough liquid funds for the stated trip cost." },
            { name: "Partial host support", desc: "Host letter + host status + host finances; still show your own funds and strong ties to Pakistan." }
          ]
        },
        process: {
          steps: [
            "Apply online on GOV.UK (Standard Visitor) and pay the visa fee",
            "Book VFS biometrics in Pakistan; provide fingerprints and photo",
            "Upload documents as required by the online system / VFS checklist",
            "From 2026, successful applicants may receive an eVisa (digital status) rather than a vignette – follow UKVI account instructions",
            "Travel only after you have confirmed valid permission; carry supporting docs if asked at border"
          ],
          fees: "Standard Visitor fee (check GOV.UK current fee; reported £135 for 6-month route from Apr 2026 – verify before paying)"
        },
        research: [
          "https://www.gov.uk/standard-visitor",
          "https://www.gov.uk/standard-visitor/support-documents",
          "eVisa information via GOV.UK / British High Commission updates"
        ]
      },
      student: {
        title: "Student Visa (Pakistan → UK)",
        summary: { threshold: "CAS fees + £1,529/mo London or £1,171/mo outside (up to 9 months)", english: "CEFR as required / SELT or nationality exemption", grant: "Course length + wrap-up", vac: "VFS Global" },
        docs: {
          "CAS & identity": [
            "CAS (Confirmation of Acceptance for Studies) from a licensed Student sponsor",
            "Valid Pakistani passport",
            "TB test certificate from UK-approved clinic (Pakistan is on the TB screening list for settlement/long stays – required for Student route)"
          ],
          "Academic": [
            "Documents listed on the CAS (transcripts, certificates)",
            "English language evidence at the level required (SELT or equivalent as accepted on CAS)"
          ],
          "Financial (Appendix Finance)": [
            "Outstanding first-year tuition as on CAS (minus any amount already paid to the sponsor)",
            "Living costs: £1,529 per month (London) or £1,171 per month (outside London), up to 9 months – confirm current GOV.UK figures before applying",
            "Funds held for 28 consecutive days; 28-day period ending within 31 days of application",
            "Bank statements meeting Appendix Finance format rules (or official financial sponsor / accepted student loan evidence)"
          ],
          "Other": [
            "ATAS certificate if your course requires it",
            "Consent letter from parents if using parental funds (plus evidence of relationship)"
          ]
        },
        financial: {
          title: "Student financial requirement (GOV.UK)",
          main: "Course fees (per CAS) + maintenance £1,529/month in London or £1,171/month outside London (max 9 months), held 28 consecutive days.",
          note: "Figures are set in the Immigration Rules and change. Always re-check https://www.gov.uk/student-visa/money before applying. Paid tuition/accommodation on CAS reduces the amount to show.",
          savings: "",
          methods: [
            { name: "Cash funds", desc: "Personal or parent account; 28-day rule; relationship + consent if not your account." },
            { name: "Official financial sponsor", desc: "Government/university/international organisation letter covering required costs." },
            { name: "Student loan", desc: "Loan letter from an accepted lender as per Appendix Finance." }
          ]
        },
        process: {
          steps: [
            "Obtain CAS and prepare TB test early",
            "Show funds meeting 28-day rule",
            "Apply online, pay visa fee + Immigration Health Surcharge (student rate)",
            "Biometrics at VFS",
            "Receive decision; create/use UKVI account for eVisa/status as applicable"
          ],
          fees: "Student visa fee + IHS (check GOV.UK; amounts change)"
        },
        research: [
          "https://www.gov.uk/student-visa",
          "https://www.gov.uk/student-visa/money",
          "https://www.gov.uk/guidance/financial-evidence-for-student-and-child-student-route-applicants"
        ]
      },
      work: {
        title: "Skilled Worker Visa (Pakistan → UK)",
        summary: { threshold: "Salary at going rate / threshold for occupation", english: "B1 usually required", grant: "Up to 5 years typical", vac: "VFS Global" },
        docs: {
          "Sponsorship": [
            "Certificate of Sponsorship (CoS) from a licensed UK employer",
            "Job title and SOC code matching eligible occupation",
            "Salary meeting the applicable threshold / going rate for that occupation"
          ],
          "Identity": ["Valid Pakistani passport","TB test from approved clinic"],
          "English": ["Approved English test at required level (usually B1) or exemption"],
          "Financial": ["Personal savings if required under maintenance rules when not certified by sponsor on CoS"],
          "Qualifications": ["Degrees/experience if required for the role or sponsored as such"]
        },
        financial: {
          title: "Skilled Worker funds & salary",
          main: "You must be paid at least the applicable skilled worker salary threshold or going rate for your occupation code. Maintenance funds apply unless the sponsor certifies maintenance on the CoS.",
          note: "Thresholds change with Immigration Rules updates. Confirm the code and salary on GOV.UK Skilled Worker pages before relying on an offer.",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Employer assigns CoS","Apply online with CoS number","Pay fee + IHS","Biometrics at VFS","Decision and travel"],
          fees: "Visa fee (varies by length/skill) + IHS – check GOV.UK calculator"
        },
        research: ["https://www.gov.uk/skilled-worker-visa"]
      },
    }
  },
  spain: {
    name: "Spain (Schengen)", flag: "🇪🇸",
    visas: {
      business: {
        title: "Spain Schengen Business Visa Type C (Pakistan → Spain)",
        summary: { threshold: "Means of subsistence + insurance", english: "Not required for short stay", grant: "Up to 90 days in 180", vac: "BLS / Spain VAC Pakistan" },
        docs: {
          "Application": ["Schengen application form","Passport with blank pages","Photo per Schengen specs","VAC appointment"],
          "Business purpose": ["Invitation from Spanish company (purpose, dates, who covers costs)","Applicant employer letter / self-employment proof from Pakistan","Trade register extracts if applicable"],
          "Travel": ["Flight reservation","Hotel or host address","Travel medical insurance min €30,000 Schengen-wide"],
          "Financial": ["Bank statements","Income proof","Means of subsistence for stay (Spain/Schengen reference amounts – confirm with VAC)"],
          "Ties": ["Employment/business/family ties to Pakistan"]
        },
        financial: {
          title: "Schengen means of subsistence",
          main: "Show sufficient means for the stay and return. Member states publish/update reference amounts; confirm the figure used by the Spanish VAC handling your file.",
          note: "Insurance is mandatory. Invitation does not replace personal funds assessment.",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Book Spain VAC/BLS appointment in Pakistan","Complete form and gather business invitation pack","Submit biometrics and documents","Await decision; collect passport"],
          fees: "Schengen visa fee (EUR; check VAC for PKR equivalent and service charge)"
        },
        research: ["https://www.exteriores.gob.es/","https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa/visa-policy_en"]
      },
      tourist: {
        title: "Spain Schengen Type C – Tourism (Pakistan → Spain)",
        summary: { threshold: "Means of subsistence + insurance", english: "Not for short stay", grant: "Up to 90 days in 180", vac: "BLS International Spain Pakistan" },
        docs: {
          "Application": ["Schengen visa application form","Pakistani passport with blank pages","Photo per Schengen specifications","BLS appointment confirmation"],
          "Travel": ["Flight reservation","Hotel bookings or invitation + host ID if private stay","Travel medical insurance minimum €30,000 valid for all Schengen states for the entire stay"],
          "Financial": ["Bank statements (typically last 3–6 months)","Employment letter with leave approval or self-employment/tax documents","Proof of means of subsistence (confirm current Spanish reference amount with BLS checklist)"],
          "Purpose & ties": ["Cover letter with itinerary and return plans","Evidence of ties to Pakistan (job, business, family, property)","Previous travel history if any"]
        },
        financial: {
          title: "Spain Schengen means of subsistence",
          main: "Show sufficient funds for living costs and return travel. Verify the current Spanish reference amount on the BLS/consulate checklist.",
          note: "Mandatory travel medical insurance. Invitation does not replace personal funds or ties assessment.",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Complete form and book BLS Spain appointment","Gather insurance, funds, ties and travel proof","Submit biometrics and documents","Await decision and collect passport"],
          fees: "Schengen visa fee + BLS service charge"
        },
        research: ["https://www.exteriores.gob.es/","BLS Spain Pakistan checklist"]
      },
      student: {
        title: "Spain Student Visa – National (Pakistan → Spain)",
        summary: { threshold: "Admission + financial means", english: "Programme language", grant: "National study visa then TIE", vac: "BLS / Consulate" },
        docs: {
          "Admission": ["Acceptance letter from Spanish institution","Proof programme meets study-visa criteria"],
          "Financial": ["Proof of means for living costs for the authorised stay (per consular guidance)","Tuition payment evidence if required"],
          "Identity": ["Passport","Academic transcripts and degrees","Criminal record certificate legalised/apostilled as required","Medical certificate if required"],
          "Insurance": ["Health insurance covering stay in Spain as required for national student visa"],
          "Accommodation": ["Proof of address in Spain for initial period where required"]
        },
        financial: {
          title: "Spain study funds",
          main: "Demonstrate financial means for the study period at the level required by the Spanish consulate.",
          note: "After arrival, complete TIE formalities. Use the national-visa checklist, not only Schengen C.",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Obtain admission","Prepare national visa file","BLS appointment and biometrics","Travel and complete TIE in Spain"],
          fees: "National visa fee + BLS charges"
        },
        research: ["https://www.exteriores.gob.es/","BLS Spain national visa guidance"]
      },
    }
  },
  germany: {
    name: "Germany (Schengen)", flag: "🇩🇪",
    visas: {
      business: {
        title: "Germany Schengen Type C – Business (Pakistan → Germany)",
        summary: { threshold: "Subsistence + insurance", english: "Not required for C", grant: "Up to 90/180", vac: "TLScontact / VAC" },
        docs: {
          "Business": ["Invitation from German company (purpose, dates, cost bearer)","Applicant employer letter from Pakistan or self-employment docs"],
          "Application": ["Schengen form","Passport","Photo","Insurance €30,000+"],
          "Travel": ["Flight and hotel or host arrangements"],
          "Financial": ["Bank statements","Income proof"],
          "Ties": ["Evidence of return to Pakistan"]
        },
        financial: {
          title: "Business visit funds",
          main: "Show means for the stay even if the German host pays some costs. Invitation strengthens purpose but does not replace personal credibility.",
          note: "",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Obtain invitation","Book VAC slot","Submit complete file + biometrics","Decision"],
          fees: "Schengen fee + VAC charge"
        },
        research: ["https://www.auswaertiges-amt.de/en/visa-service"]
      },
      tourist: {
        title: "Germany Schengen Short-Stay Type C – Tourism (Pakistan → Germany)",
        summary: { threshold: "Means of subsistence + insurance", english: "Not required for C visa", grant: "Up to 90 days in 180", vac: "TLScontact / VAC Pakistan" },
        docs: {
          "Application": ["Schengen form","Passport (blank pages, validity rules)","Biometric photo","VAC appointment"],
          "Travel": ["Flight reservation","Hotel bookings or invitation + host address registration if private stay","Travel medical insurance min €30,000 valid in all Schengen states for full stay"],
          "Purpose": ["Cover letter with itinerary","Tour plan"],
          "Financial": ["Bank statements (recent months)","Employment letter or business proof from Pakistan","Means of subsistence per German practice (confirm current daily reference with VAC)"],
          "Ties": ["Job/business/family ties to Pakistan","Property documents if available"]
        },
        financial: {
          title: "Schengen / German means of subsistence",
          main: "Show sufficient funds for the stay and return. Germany applies Schengen rules plus national reference practice – confirm the amount used by the visa section/VAC at application time.",
          note: "Insurance is mandatory. Unexplained large deposits and weak ties are common refusal themes for Pakistani applicants.",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Book VAC appointment for Germany","Gather form, insurance, funds, ties documents","Submit biometrics + file","Await decision"],
          fees: "Schengen visa fee + VAC service charge"
        },
        research: ["https://www.auswaertiges-amt.de/en/visa-service","https://pakistan.diplo.de/"]
      },
      student: {
        title: "Germany National Visa – Study (Pakistan → Germany)",
        summary: { threshold: "Blocked account / proof of funds (annual amount set by authorities)", english: "Course language requirement", grant: "National D then residence permit", vac: "VAC + consulate process" },
        docs: {
          "Admission": ["University admission letter / conditional offer","APS certificate if required for your pathway from Pakistan"],
          "Financial": ["Blocked account (Sperrkonto) OR other accepted proof covering the official annual living amount – confirm current figure before opening account"],
          "Language": ["German or English proof as required by the programme"],
          "Identity": ["Passport","Motivation letter","CV","Academic transcripts and degrees","Travel insurance for entry period"],
          "Other": ["VAC appointment for national visa"]
        },
        financial: {
          title: "German study funding",
          main: "Most applicants use a blocked account with the amount required by German authorities for one year of living costs (figure is updated periodically – verify before transfer).",
          note: "Scholarship letters from recognised bodies may reduce or replace blocked funds when accepted by the mission.",
          savings: "",
          methods: [{ name: "Blocked account", desc: "Open with an approved provider; funds released monthly after arrival." }]
        },
        process: {
          steps: ["Secure admission (+ APS if applicable)","Open blocked account / prepare funds","Book national visa appointment","Submit biometrics and documents","Enter Germany and register residence permit at Ausländerbehörde"],
          fees: "National visa fee (check mission)"
        },
        research: ["https://www.auswaertiges-amt.de/en/visa-service","https://www.make-it-in-germany.com/"]
      },
    }
  },
  france: {
    name: "France", flag: "🇫🇷",
    visas: {
      tourist: {
        title: "France Schengen Type C – Tourism (Pakistan → France)",
        summary: { threshold: "Subsistence + insurance €30,000+", english: "Not for short stay", grant: "Up to 90 days in 180", vac: "TLS Contact France Pakistan" },
        docs: {
          "Application": ["France-Visas online form printout","Passport with blank pages","Schengen photo","TLS appointment confirmation"],
          "Travel": ["Flight reservation","Hotel bookings OR Attestation d’accueil if staying with a private host","Travel medical insurance min €30,000 covering all Schengen states for the full stay"],
          "Financial": ["Bank statements recent months","Employment letter or business documents from Pakistan","Proof of means of subsistence per French reference amounts (confirm current daily figure on France-Visas/TLS checklist)"],
          "Purpose & ties": ["Cover letter and itinerary","Strong ties to Pakistan (job leave letter, property, family)"]
        },
        financial: {
          title: "France / Schengen means of subsistence",
          main: "Show sufficient resources for the stay and return. Confirm the current daily subsistence reference used by French authorities before applying.",
          note: "Private host stays require a formal Attestation d’accueil from the French prefecture process.",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Complete France-Visas form","Book TLS appointment in Pakistan","Submit biometrics and documents","Await decision and collect passport"],
          fees: "Schengen visa fee + TLS service charge"
        },
        research: ["https://france-visas.gouv.fr/"]
      },
      business: {
        title: "France Schengen Type C – Business (Pakistan → France)",
        summary: { threshold: "Subsistence + insurance", english: "Not for C", grant: "Up to 90/180", vac: "TLS Contact" },
        docs: {
          "Business": ["Invitation from French company (dates, purpose, cost bearer)","Pakistani employer letter or self-employment proof"],
          "Application": ["France-Visas form","Passport","Photo","Insurance €30,000+"],
          "Travel": ["Flights and accommodation"],
          "Financial": ["Bank statements","Income proof"],
          "Ties": ["Return ties to Pakistan"]
        },
        financial: {
          title: "Business visit funds",
          main: "Invitation supports purpose; still show personal means and ties.",
          note: "",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Obtain invitation","France-Visas + TLS","Biometrics","Decision"],
          fees: "Schengen fee + TLS"
        },
        research: ["https://france-visas.gouv.fr/"]
      },
      student: {
        title: "France Long-Stay Student Visa (Pakistan → France)",
        summary: { threshold: "Monthly resources + tuition", english: "Programme language", grant: "VLS-TS pathway", vac: "TLS + Campus France" },
        docs: {
          "Admission": ["Acceptance from French institution","Campus France procedure completed if required for Pakistan"],
          "Financial": ["Proof of monthly resources at or above the official student minimum (verify current amount on France-Visas)","Tuition payment evidence if required"],
          "Identity": ["Passport","Academic transcripts and degrees","CV","Motivation letter","Insurance"],
          "Accommodation": ["Proof of lodging for initial period where required"]
        },
        financial: {
          title: "France student resources",
          main: "Show monthly living resources meeting French long-stay student requirements (amount updated periodically – check France-Visas).",
          note: "Campus France steps are often mandatory before the visa appointment for Pakistani students.",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Campus France / admission","France-Visas application","TLS biometrics","Travel and complete OFII/validation steps as instructed"],
          fees: "Visa fee + related charges"
        },
        research: ["https://france-visas.gouv.fr/","Campus France Pakistan"]
      }
    }
  },
  italy: {
    name: "Italy", flag: "🇮🇹",
    visas: {
      tourist: {
        title: "Italy Schengen Type C – Tourism (Pakistan → Italy)",
        summary: { threshold: "Subsistence + insurance", english: "Not for C", grant: "Up to 90/180", vac: "Italy Visa Application Centre Pakistan" },
        docs: {
          "Application": ["Schengen form","Passport","Photo","Appointment"],
          "Travel": ["Flights","Hotel bookings","Travel insurance €30,000+ Schengen-wide"],
          "Financial": ["Bank statements","Employment/business proof","Means of subsistence per Italian practice"],
          "Ties": ["Job letter with leave","Family/property ties to Pakistan"]
        },
        financial: {
          title: "Italy Schengen funds",
          main: "Demonstrate means for stay and return. Confirm reference amounts with the Italian VAC checklist for Pakistan.",
          note: "",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Book appointment","Submit file + biometrics","Await decision"],
          fees: "Schengen fee + centre fee"
        },
        research: ["https://vistoperitalia.esteri.it/"]
      },
      business: {
        title: "Italy Schengen Type C – Business (Pakistan → Italy)",
        summary: { threshold: "Subsistence + insurance", english: "Not for C", grant: "Up to 90/180", vac: "Italy VAC" },
        docs: {
          "Business": ["Invitation from Italian company","Pakistani employer letter"],
          "Application": ["Form","Passport","Photo","Insurance"],
          "Travel": ["Flights","Hotels"],
          "Financial": ["Bank statements"],
          "Ties": ["Return ties"]
        },
        financial: {
          title: "Business visit funds",
          main: "Show means for the stay; invitation clarifies purpose.",
          note: "",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Invitation","VAC appointment","Biometrics","Decision"],
          fees: "Schengen fee + centre fee"
        },
        research: ["https://vistoperitalia.esteri.it/"]
      },
      student: {
        title: "Italy National Student Visa (Pakistan → Italy)",
        summary: { threshold: "Proof of funds + admission", english: "Programme language", grant: "National D for study", vac: "Italy VAC / consulate" },
        docs: {
          "Admission": ["University pre-enrolment / admission as required (Universitaly steps where applicable)"],
          "Financial": ["Proof of funds for living costs for the academic period (amount per mission guidance)"],
          "Identity": ["Passport","Academic documents","Insurance","Accommodation proof"],
          "Other": ["Language evidence if required"]
        },
        financial: {
          title: "Italy study funds",
          main: "Show sufficient means for the study period per Italian consular guidance for the year of application.",
          note: "",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Admission / Universitaly steps","National visa appointment","Biometrics","Travel and permesso di soggiorno after arrival"],
          fees: "National visa fee"
        },
        research: ["https://vistoperitalia.esteri.it/","Universitaly"]
      }
    }
  },
  netherlands: {
    name: "Netherlands", flag: "🇳🇱",
    visas: {
      tourist: {
        title: "Netherlands Schengen Type C (Pakistan → Netherlands)",
        summary: { threshold: "Subsistence + insurance", english: "Not for short stay", grant: "Up to 90/180", vac: "VFS Netherlands Pakistan" },
        docs: {
          "Application": ["Schengen application form","Passport","Photo"],
          "Travel": ["Flights","Accommodation","Insurance €30,000+"],
          "Financial": ["Bank statements","Income proof","Sponsor/guarantee form if a host in NL formally guarantees"],
          "Ties": ["Employment and family ties to Pakistan"]
        },
        financial: {
          title: "Netherlands Schengen funds",
          main: "Sufficient means for the stay; formal host guarantee must meet legalisation requirements when used.",
          note: "",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Prepare file","VFS appointment","Biometrics","Decision"],
          fees: "Schengen fee + VFS"
        },
        research: ["https://www.netherlandsandyou.nl/","https://ind.nl/"]
      },
      business: {
        title: "Netherlands Schengen Type C – Business (Pakistan → Netherlands)",
        summary: { threshold: "Subsistence + insurance €30,000+", english: "Not for short stay", grant: "Up to 90 days in 180", vac: "VFS Global Netherlands Pakistan" },
        docs: {
          "Application": ["Schengen application form","Pakistani passport with blank pages","Photo per Schengen rules","VFS appointment confirmation"],
          "Business purpose": ["Invitation letter from Dutch company stating purpose, dates, and who pays costs","Applicant’s employer letter from Pakistan or self-employment registration and tax documents"],
          "Travel": ["Flight reservation","Hotel booking or host address","Travel medical insurance min €30,000 covering all Schengen states for full stay"],
          "Financial": ["Bank statements last 3–6 months","Proof of income","Means of subsistence for the stay"],
          "Ties to Pakistan": ["Employment leave approval","Family or property ties","Evidence you will return after the visit"]
        },
        financial: {
          title: "Netherlands business visit funds",
          main: "Show sufficient means for the stay and return even if the Dutch host covers some costs. Invitation strengthens purpose but does not replace personal credibility.",
          note: "Insurance is mandatory. Unexplained large deposits and weak employment history increase refusal risk.",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Obtain Dutch invitation","Complete Schengen form and book VFS","Submit biometrics and documents","Await decision"],
          fees: "Schengen visa fee + VFS service charge"
        },
        research: ["https://www.netherlandsandyou.nl/","https://ind.nl/"]
      },
      student: {
        title: "Netherlands MVV / Student Residence (Pakistan → Netherlands)",
        summary: { threshold: "Institutional sponsorship / funds", english: "Programme requirement", grant: "MVV + residence", vac: "VFS / IND process" },
        docs: {
          "Admission": ["Offer from recognised Dutch institution (often sponsor for MVV)"],
          "Financial": ["Funds or institutional guarantee meeting IND study norms"],
          "Identity": ["Passport","Academic records","Insurance"],
          "Other": ["TB test if required for long stay from Pakistan"]
        },
        financial: {
          title: "Dutch study funds",
          main: "Many universities act as recognised sponsors; otherwise show IND-required study funds for the year.",
          note: "Follow the exact IND/university checklist for your programme.",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Admission","University starts MVV/residence where applicable","VFS appointment","Travel and collect residence permit"],
          fees: "IND / MVV fees"
        },
        research: ["https://ind.nl/en/study"]
      }
    }
  },
  china: {
    name: "China", flag: "🇨🇳",
    visas: {
      tourist: {
        title: "China Tourist Visa L (Pakistan → China)",
        summary: { threshold: "Per CVASC checklist", english: "N/A primary", grant: "As issued", vac: "Chinese Visa Application Service Centre" },
        docs: {
          "Application": ["Visa form","Passport","Photo per Chinese specs","Centre appointment"],
          "Purpose": ["Itinerary","Hotel bookings or invitation"],
          "Support": ["Round-trip flight reservation often required","Bank statements if requested","Employment letter"],
          "Other": ["Any extra documents listed by the centre in Pakistan for the current month"]
        },
        financial: {
          title: "China tourist support",
          main: "Follow the Chinese Visa Application Service Centre checklist for Pakistan; flight, hotel and funds proof are commonly requested.",
          note: "Invitation letter formats are strict when used – follow centre samples.",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Prepare form and bookings","Submit at CVASC","Pay fees","Collect passport"],
          fees: "Per Chinese mission / centre schedule"
        },
        research: ["Chinese Visa Application Service Centre Pakistan notices"]
      },
      business: {
        title: "China Business Visa M (Pakistan → China)",
        summary: { threshold: "Invitation + supporting documents", english: "N/A primary", grant: "As issued on visa foil", vac: "Chinese Visa Application Service Centre" },
        docs: {
          "Invitation": ["Invitation letter from a Chinese company meeting current format and stamp requirements"],
          "Application": ["Visa application form","Passport","Photo meeting Chinese specifications","Centre appointment"],
          "Pakistan company": ["Employer letter on letterhead","Business registration if self-employed","Bank statements if requested"],
          "Travel": ["Flight and hotel reservations as listed by the centre"]
        },
        financial: {
          title: "China business visit support",
          main: "A compliant invitation is central. The centre may still request personal funds and employment proof.",
          note: "Invitation formats are strict – follow the sample issued by the Chinese Visa Application Service Centre.",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Obtain compliant invitation","Book CVASC appointment","Submit passport and documents","Pay fees and collect passport"],
          fees: "Per Chinese mission / centre schedule"
        },
        research: ["Chinese Visa Application Service Centre Pakistan notices"]
      },
      student: {
        title: "China Student Visa X (Pakistan → China)",
        summary: { threshold: "JW form + admission", english: "Programme language", grant: "X1/X2", vac: "CVASC" },
        docs: {
          "Admission": ["Admission notice","JW201/JW202 form"],
          "Identity": ["Passport","Form","Photo","Medical if X1 requires"],
          "Financial": ["Scholarship or self-fund evidence as required"],
          "Academic": ["Transcripts and certificates"]
        },
        financial: {
          title: "China study funds",
          main: "Scholarship or self-funding per university and mission requirements.",
          note: "",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Admission + JW","Medical if needed","CVASC","Residence permit formalities in China for long programmes"],
          fees: "Per centre"
        },
        research: ["University international office + CVASC"]
      }
    }
  },
  qatar: {
    name: "Qatar", flag: "🇶🇦",
    visas: {
      tourist: {
        title: "Qatar Visit / Tourist (Pakistan → Qatar)",
        summary: { threshold: "Per Hayya / airline / sponsor channel", english: "N/A", grant: "Product-dependent", vac: "Official Hayya or authorised channels" },
        docs: {
          "Identity": ["Passport with required validity","Photo"],
          "Channel": ["Apply via official Hayya platform or airline/hotel sponsor as currently allowed for Pakistani nationals"],
          "Support": ["Return ticket","Hotel or host details","Bank statement if requested"]
        },
        financial: {
          title: "Qatar visit funds",
          main: "Requirements depend on the official product used. Follow Hayya or authorised carrier instructions only.",
          note: "Avoid unofficial agents.",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Choose official channel","Submit and pay","Receive approval before travel"],
          fees: "Per product"
        },
        research: ["https://hayya.qa/","Qatar official visa pages"]
      },
      business: {
        title: "Qatar Business Visit (Pakistan → Qatar)",
        summary: { threshold: "Host / sponsor driven", english: "N/A", grant: "As issued", vac: "Official Hayya / MOI / company channels" },
        docs: {
          "Invitation": ["Qatar company invitation or work-visit authorisation as applicable"],
          "Identity": ["Pakistani passport with required validity","Photo"],
          "Pakistan side": ["Employer letter confirming position and purpose of travel"],
          "Travel": ["Return/onward ticket when requested"]
        },
        financial: {
          title: "Qatar business visit",
          main: "Host company processing often drives approval. Keep passport validity, tickets and employment letter ready.",
          note: "Use only official channels; product rules change.",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Host initiates approval","Applicant provides passport details","Receive visa/entry permit","Travel with printed approval"],
          fees: "Per official channel"
        },
        research: ["https://hayya.qa/","Qatar official visa / MOI services"]
      },
      student: {
        title: "Qatar Student Visa (Pakistan → Qatar)",
        summary: { threshold: "University sponsorship", english: "Programme requirement", grant: "Linked to institution", vac: "University + official visa" },
        docs: {
          "Admission": ["Offer from Qatari institution","University visa support letter"],
          "Identity": ["Passport","Academic records","Medical if required"],
          "Financial": ["Funds or scholarship as required by the university"]
        },
        financial: {
          title: "Qatar study",
          main: "Usually institution-led; follow the university international office checklist.",
          note: "",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Admission","University visa process","Travel and residence formalities"],
          fees: "Per university / state fees"
        },
        research: ["University international office Qatar"]
      }
    }
  },
  ireland: {
    name: "Ireland", flag: "🇮🇪",
    visas: {
      tourist: {
        title: "Ireland Short Stay C Visit (Pakistan → Ireland)",
        summary: { threshold: "Funds + ties", english: "Not primary", grant: "Up to 90 days typical", vac: "VFS Ireland Pakistan" },
        docs: {
          "Application": ["AVATS online application","Passport","Photo"],
          "Purpose": ["Cover letter","Itinerary","Invitation if any"],
          "Financial": ["Bank statements","Employment proof"],
          "Ties": ["Return ties to Pakistan"],
          "Other": ["Travel insurance recommended"]
        },
        financial: {
          title: "Ireland visit funds",
          main: "Show you can fund the stay and leave before permission expires. Consistency of funds and ties matter.",
          note: "Ireland is not Schengen; UK visa does not grant entry to Ireland automatically.",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Apply on AVATS","VFS biometrics","Decision"],
          fees: "Irish visa fee + VFS"
        },
        research: ["https://www.irishimmigration.ie/"]
      },
      student: {
        title: "Ireland Study Visa (Pakistan → Ireland)",
        summary: { threshold: "Fees + living funds (INIS levels)", english: "Course requirement", grant: "Course linked", vac: "VFS Ireland" },
        docs: {
          "Admission": ["Letter of acceptance from Irish institution"],
          "Financial": ["Proof of tuition payment or ability to pay","Living funds meeting Irish Immigration required level (confirm current figure on irishimmigration.ie)"],
          "Identity": ["Passport","Academic documents","Medical insurance"],
          "Other": ["TB test if required","English evidence if required"]
        },
        financial: {
          title: "Ireland study funds",
          main: "Pay or show tuition plus the living fund amount published by Irish Immigration for your course length.",
          note: "Check irishimmigration.ie for the current financial evidence amounts before applying.",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Accept offer","Show funds","AVATS study application","VFS","Travel"],
          fees: "Visa fee + VFS"
        },
        research: ["https://www.irishimmigration.ie/"]
      },
      business: {
        title: "Ireland Short Stay ‘C’ Business Visit (Pakistan → Ireland)",
        summary: { threshold: "Funds + ties", english: "Not primary test", grant: "Usually up to 90 days", vac: "VFS Ireland Pakistan" },
        docs: {
          "Application": ["AVATS online application summary","Passport","Photo"],
          "Business": ["Invitation from Irish company stating purpose and dates","Pakistani employer letter confirming role and return to work"],
          "Financial": ["Bank statements","Income proof"],
          "Travel": ["Itinerary","Accommodation details"],
          "Ties": ["Evidence of return to Pakistan"]
        },
        financial: {
          title: "Ireland business visit funds",
          main: "Show you can fund the stay and will leave before permission expires. Ireland is not in Schengen; a UK visa does not grant entry to Ireland.",
          note: "",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Complete AVATS application","VFS biometrics in Pakistan","Await decision"],
          fees: "Irish visa fee + VFS charge"
        },
        research: ["https://www.irishimmigration.ie/"]
      },
    }
  },
  portugal: {
    name: "Portugal", flag: "🇵🇹",
    visas: {
      tourist: {
        title: "Portugal Schengen Type C – Tourism (Pakistan → Portugal)",
        summary: { threshold: "Subsistence + insurance €30,000+", english: "Not for short stay", grant: "Up to 90 days in 180", vac: "VFS / Portugal VAC Pakistan" },
        docs: {
          "Application": ["Schengen form","Passport","Photo","Appointment"],
          "Travel": ["Flight reservation","Hotel bookings","Travel medical insurance min €30,000 Schengen-wide"],
          "Financial": ["Bank statements 3–6 months","Employment letter or business proof","Means of subsistence per Portuguese VAC checklist"],
          "Ties": ["Cover letter","Job/family/property ties to Pakistan"]
        },
        financial: {
          title: "Portugal Schengen funds",
          main: "Demonstrate funds for the stay and return. Confirm any published reference amounts with the VAC handling your file.",
          note: "Mandatory insurance. Consistency of funds and ties outweigh a one-off high balance.",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Book appointment","Submit documents and biometrics","Await decision"],
          fees: "Schengen fee + VAC service charge"
        },
        research: ["https://vistos.mne.gov.pt/"]
      },
      business: {
        title: "Portugal Schengen Type C – Business (Pakistan → Portugal)",
        summary: { threshold: "Subsistence + insurance", english: "Not for C", grant: "Up to 90/180", vac: "Portugal VAC" },
        docs: {
          "Business": ["Invitation from Portuguese company","Pakistani employer letter"],
          "Application": ["Form","Passport","Photo","Insurance €30,000+"],
          "Travel": ["Flights","Hotels"],
          "Financial": ["Bank statements","Income proof"],
          "Ties": ["Return ties to Pakistan"]
        },
        financial: {
          title: "Portugal business visit funds",
          main: "Show means for the stay; invitation clarifies business purpose.",
          note: "",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Invitation","VAC appointment","Biometrics","Decision"],
          fees: "Schengen fee + VAC"
        },
        research: ["https://vistos.mne.gov.pt/"]
      },
      student: {
        title: "Portugal Study Visa (Pakistan → Portugal)",
        summary: { threshold: "Admission + funds", english: "Programme language", grant: "National study visa", vac: "Portugal VAC" },
        docs: {
          "Admission": ["Acceptance from Portuguese institution"],
          "Financial": ["Proof of means for living costs per consular guidance"],
          "Identity": ["Passport","Academic records","Insurance","Accommodation"],
          "Other": ["Criminal record certificate if required"]
        },
        financial: {
          title: "Portugal study funds",
          main: "Show living means for the study period as required by the consulate.",
          note: "",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Admission","National visa file","Biometrics","Travel and residence registration"],
          fees: "National visa fee"
        },
        research: ["https://vistos.mne.gov.pt/"]
      }
    }
  },

  greece: {
    name: "Greece", flag: "🇬🇷",
    visas: {
      tourist: {
        title: "Greece Schengen Type C – Tourism (Pakistan → Greece)",
        summary: { threshold: "Subsistence + insurance €30,000+", english: "Not for short stay", grant: "Up to 90 days in 180", vac: "Greece VAC / VFS Pakistan" },
        docs: {
          "Application": ["Schengen form","Passport with blank pages","Biometric photo","Appointment confirmation"],
          "Travel": ["Flight reservation","Hotel bookings for full stay","Travel medical insurance min €30,000 Schengen-wide"],
          "Financial": ["Bank statements 3–6 months","Employment letter with leave dates or business/tax documents","Proof of means of subsistence per Greek VAC checklist"],
          "Purpose & ties": ["Cover letter and itinerary","Strong ties to Pakistan (job, family, property)","Previous visas/travel history if any"]
        },
        financial: {
          title: "Greece Schengen funds",
          main: "Demonstrate funds for accommodation, daily costs and return. Confirm the reference amount used by the Greek mission/VAC for your appointment.",
          note: "Mandatory insurance. Credibility of ties to Pakistan is heavily weighted for Pakistani applicants.",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Book VAC appointment","Prepare complete Schengen file","Biometrics and submission","Decision and passport collection"],
          fees: "Schengen fee + VAC service charge"
        },
        research: ["Greek Ministry of Foreign Affairs visa pages","VAC Greece Pakistan checklist"]
      },
      business: {
        title: "Greece Schengen Type C – Business (Pakistan → Greece)",
        summary: { threshold: "Subsistence + insurance", english: "Not for C", grant: "Up to 90/180", vac: "Greece VAC" },
        docs: {
          "Business": ["Invitation from Greek company (purpose, dates, cost bearer)","Pakistani employer letter or self-employment proof"],
          "Application": ["Schengen form","Passport","Photo","Insurance €30,000+"],
          "Travel": ["Flights","Hotels or host arrangements"],
          "Financial": ["Bank statements","Income proof"],
          "Ties": ["Evidence of return to Pakistan"]
        },
        financial: {
          title: "Greece business visit funds",
          main: "Show means for the stay; invitation clarifies purpose but personal funds and ties still matter.",
          note: "",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Obtain invitation","VAC appointment","Biometrics","Decision"],
          fees: "Schengen fee + VAC"
        },
        research: ["Greek MFA visa pages"]
      },
      student: {
        title: "Greece Student / National Study Visa (Pakistan → Greece)",
        summary: { threshold: "Admission + living funds", english: "Programme language requirement", grant: "National study visa", vac: "Greece VAC / consulate" },
        docs: {
          "Admission": ["Acceptance from a recognised Greek institution","Proof of programme details and duration"],
          "Financial": ["Proof of funds for living costs for the study period per consular guidance","Tuition payment evidence if required"],
          "Identity": ["Passport","Academic transcripts and degrees","Criminal record certificate if required","Health insurance"],
          "Accommodation": ["Proof of lodging where required"],
          "Other": ["Language certificate if the programme requires it"]
        },
        financial: {
          title: "Greece study funds",
          main: "Show living means for the authorised study period at the level required by the Greek consulate for that year.",
          note: "National study visas differ from short-stay Schengen C – follow the national checklist.",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Obtain admission","Prepare national visa file","VAC biometrics","Travel and residence formalities in Greece"],
          fees: "National visa fee + VAC charges"
        },
        research: ["Greek consular study guidance"]
      },
    }
  },
  sweden: {
    name: "Sweden", flag: "🇸🇪",
    visas: {
      tourist: {
        title: "Sweden Schengen Type C – Tourism (Pakistan → Sweden)",
        summary: { threshold: "Subsistence + insurance €30,000+", english: "Not for short stay", grant: "Up to 90 days in 180", vac: "VFS Sweden Pakistan" },
        docs: {
          "Application": ["Schengen application form","Passport","Photo","VFS appointment"],
          "Travel": ["Flight reservation","Hotel bookings","Travel medical insurance min €30,000 for all Schengen states"],
          "Financial": ["Bank statements","Employment or business proof","Means of subsistence per Migrationsverket/VAC practice"],
          "Ties": ["Job leave letter","Family/property ties to Pakistan","Cover letter with itinerary"]
        },
        financial: {
          title: "Sweden Schengen funds",
          main: "Show sufficient means for the stay and return. Follow the VFS Sweden checklist for Pakistan for any stated reference amounts.",
          note: "Insurance is mandatory. Weak ties to Pakistan are a common refusal factor.",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Book VFS Sweden appointment","Submit complete file and biometrics","Await decision"],
          fees: "Schengen fee + VFS charge"
        },
        research: ["https://www.migrationsverket.se/","VFS Sweden Pakistan"]
      },
      business: {
        title: "Sweden Schengen Type C – Business (Pakistan → Sweden)",
        summary: { threshold: "Subsistence + insurance", english: "Not for C", grant: "Up to 90/180", vac: "VFS Sweden" },
        docs: {
          "Business": ["Invitation from Swedish company (purpose, dates, cost responsibility)","Pakistani employer letter or self-employment documents"],
          "Application": ["Schengen form","Passport","Photo","Insurance €30,000+"],
          "Travel": ["Flights","Hotels"],
          "Financial": ["Bank statements","Income proof"],
          "Ties": ["Return ties to Pakistan"]
        },
        financial: {
          title: "Sweden business visit funds",
          main: "Show means for the stay. Invitation supports purpose; personal credibility remains essential.",
          note: "",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Obtain invitation","VFS appointment","Biometrics","Decision"],
          fees: "Schengen fee + VFS"
        },
        research: ["https://www.migrationsverket.se/"]
      },
      student: {
        title: "Sweden Residence Permit for Studies (Pakistan → Sweden)",
        summary: { threshold: "Admission + full funding", english: "Programme language", grant: "Residence permit", vac: "VFS / Missions" },
        docs: {
          "Admission": ["Admission from Swedish university"],
          "Financial": ["Proof of funds for the full period per Migrationsverket required amount (confirm current monthly figure)"],
          "Identity": ["Passport","Academic records","Insurance"]
        },
        financial: { title: "Sweden study funds", main: "Show the full living cost amount required by Migrationsverket for your permit length.", note: "Check migrationsverket.se for the current figure before applying.", savings: "", methods: [] },
        process: { steps: ["Admission","Online residence permit application","Biometrics","Decision"], fees: "Residence permit fee" },
        research: ["https://www.migrationsverket.se/"]
      }
    }
  },

  kuwait: {
    name: "Kuwait", flag: "🇰🇼",
    visas: {
      tourist: {
        title: "Kuwait Visit Visa (Pakistan → Kuwait)",
        summary: { threshold: "Sponsor / hotel / official channel", english: "N/A", grant: "As issued", vac: "Authorised sponsor, hotel, or official channel" },
        docs: {
          "Identity": ["Pakistani passport with required validity","Photo","CNIC"],
          "Sponsorship": ["Kuwaiti sponsor, hotel, or approved channel as currently allowed for Pakistani nationals"],
          "Support": ["Return ticket","Hotel booking if required","Bank statement if requested"]
        },
        financial: {
          title: "Kuwait visit",
          main: "Most visit permissions are sponsor or hotel driven. Follow the official channel checklist only.",
          note: "Avoid unofficial agents. Confirm current rules for Pakistani nationals before paying.",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Secure lawful sponsor/hotel/online approval","Submit passport details","Receive permit","Travel with printed copy"],
          fees: "Per channel"
        },
        research: ["Kuwait MOI / official channels","Kuwait mission notices for Pakistan"]
      },
      employment: {
        title: "Kuwait Work / Residence (Pakistan → Kuwait)",
        summary: { threshold: "Employer work permit", english: "N/A primary", grant: "Linked to employer", vac: "After work authorisation" },
        docs: {
          "Sponsorship": ["Kuwait employer obtains labour/work authorisation"],
          "Employee": ["Passport","Photos","Attested educational certificates as required","Medical fitness","Police clearance if required"],
          "Pakistan": ["HEC/MOFA attestation chain often required"]
        },
        financial: {
          title: "Employment sponsorship",
          main: "Employer sponsorship drives the process. Contract and authorised visa number are central.",
          note: "Plan time for document attestation.",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Job offer","Employer authorisation","Medicals and attestations","Visa/entry","Residence formalities in Kuwait"],
          fees: "Mostly employer-side"
        },
        research: ["Kuwait Public Authority of Manpower guidance"]
      },
      transit: {
        title: "Kuwait Transit (Pakistan → Kuwait)",
        summary: { threshold: "Airline / layover rules", english: "N/A", grant: "Short transit window", vac: "Airline" },
        docs: {
          "Travel": ["Confirmed onward ticket within the allowed transit time","Passport valid as required by the airline"],
          "Visa": ["Transit visa only if your routing and nationality require it – confirm with the operating airline before travel"],
          "Support": ["Hotel only if an overnight transit product requires it"]
        },
        financial: {
          title: "Transit",
          main: "Usually airline-driven rather than a full visit-funds assessment.",
          note: "Do not assume airside transit is always visa-free for Pakistani passports – verify per itinerary.",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Confirm transit rules with airline","Obtain transit permission if required","Travel with printed approval and onward ticket"],
          fees: "Per airline product"
        },
        research: ["Operating airline transit desk"]
      },
    }
  },
  bahrain: {
    name: "Bahrain", flag: "🇧🇭",
    visas: {
      tourist: {
        title: "Bahrain Visit Visa (Pakistan → Bahrain)",
        summary: { threshold: "eVisa / airline / official channel", english: "N/A", grant: "Product-dependent", vac: "Official NPRA / airline channels" },
        docs: {
          "Identity": ["Passport with required validity","Photo"],
          "Application": ["Official Bahrain eVisa/NPRA or authorised airline channel as eligible for Pakistani passports"],
          "Support": ["Return ticket","Hotel booking","Bank statement if portal requires"]
        },
        financial: {
          title: "Bahrain visit funds",
          main: "Follow the official portal checklist. eVisa vs other processes can change for Pakistani nationals.",
          note: "Use only official government or airline channels.",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Check eligibility on official portal","Apply and pay","Travel with approval printout"],
          fees: "Per product"
        },
        research: ["https://www.evisa.gov.bh/","Bahrain NPRA"]
      },
      employment: {
        title: "Bahrain Work Visa / Residence (Pakistan → Bahrain)",
        summary: { threshold: "Employer LMRA sponsorship", english: "N/A primary", grant: "Linked to employer", vac: "After employer authorisation" },
        docs: {
          "Sponsorship": ["Bahraini employer processes LMRA work permit / authorisation"],
          "Employee": ["Passport with required validity","Photographs","Educational certificates attested as required for the role","Medical fitness from approved clinics"],
          "Pakistan": ["HEC and MOFA attestation often required for degrees before Bahrain acceptance"]
        },
        financial: {
          title: "Employment sponsorship",
          main: "Employer sponsorship drives the work residence. Salary is contractual; personal savings are secondary to a valid LMRA approval.",
          note: "Plan extra time for attestation chains from Pakistan.",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Receive job offer","Employer completes LMRA steps","Complete medicals and attestations","Entry permit / visa","Travel and complete residence formalities in Bahrain"],
          fees: "Primarily employer-side per contract and LMRA rules"
        },
        research: ["Bahrain LMRA employer guidance"]
      },
      transit: {
        title: "Bahrain Transit (Pakistan → Bahrain)",
        summary: { threshold: "Airline / layover rules", english: "N/A", grant: "Short transit window", vac: "Airline" },
        docs: {
          "Travel": ["Confirmed onward ticket within the airline’s allowed transit time","Pakistani passport valid as required by the carrier"],
          "Visa product": ["Transit visa only if your nationality and routing require it – confirm with the operating airline before check-in"],
          "Support": ["Hotel booking only if an overnight transit package requires it","Printed transit approval if issued"]
        },
        financial: {
          title: "Transit",
          main: "Usually airline-driven rather than a full visit-funds assessment. The key test is a valid onward ticket and any required transit permission.",
          note: "Do not assume airside transit is always available without a visa for Pakistani passports – verify for each itinerary.",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Confirm transit rules with the airline for your exact flight numbers","Obtain transit permission if required","Travel with passport, onward ticket and printed approval"],
          fees: "Per airline transit product"
        },
        research: ["Operating airline transit desk","Airport transit guidance for Bahrain"]
      },
    }
  },
  oman: {
    name: "Oman", flag: "🇴🇲",
    visas: {
      tourist: {
        title: "Oman Tourist / Visit Visa (Pakistan → Oman)",
        summary: { threshold: "eVisa / embassy rules for Pakistani nationals", english: "N/A", grant: "Product-dependent", vac: "Official eVisa or embassy" },
        docs: {
          "Identity": ["Passport with required validity","Photo"],
          "Application": ["Official Oman eVisa portal or embassy process as currently available for Pakistani passports"],
          "Support": ["Return ticket","Hotel bookings","Bank statement if requested"]
        },
        financial: {
          title: "Oman visit funds",
          main: "Follow the official eVisa/embassy checklist. Eligibility can change for Pakistani nationals.",
          note: "Confirm on official Royal Oman Police eVisa site before paying third parties.",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Check official eligibility","Apply and pay on official channel","Travel with approval"],
          fees: "Per official schedule"
        },
        research: ["https://evisa.rop.gov.om/","Omani mission Pakistan"]
      },
      employment: {
        title: "Oman Work / Employment Residence (Pakistan → Oman)",
        summary: { threshold: "Employer labour clearance", english: "N/A primary", grant: "Linked to employer", vac: "After employer authorisation" },
        docs: {
          "Sponsorship": ["Omani employer obtains labour and visa authorisation"],
          "Employee": ["Passport","Photos","Attested qualifications as required for the occupation","Medical fitness examination"],
          "Pakistan": ["Degree attestation (HEC/MOFA) when required by the employer or authorities"]
        },
        financial: {
          title: "Employment sponsorship",
          main: "Employer sponsorship is the core requirement. The employment contract and authorised visa drive the process.",
          note: "Attestation timelines should be planned before the employer submits clearance.",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Job offer","Employer labour clearance","Medicals and attestations","Visa issuance","Travel and residence card formalities in Oman"],
          fees: "Mostly employer-side"
        },
        research: ["Oman Ministry of Labour / employer guidance"]
      },
      transit: {
        title: "Oman Transit (Pakistan → Oman)",
        summary: { threshold: "Airline / layover rules", english: "N/A", grant: "Short transit window", vac: "Airline" },
        docs: {
          "Travel": ["Confirmed onward ticket within allowed transit time","Pakistani passport valid as required by the airline"],
          "Visa product": ["Transit visa only if required for your routing and nationality – confirm before travel"],
          "Support": ["Hotel only if overnight transit product requires it","Printed approval if issued"]
        },
        financial: {
          title: "Transit",
          main: "Airline-driven. Focus on onward ticket timing and any mandatory transit visa product.",
          note: "Rules depend on whether you pass immigration or remain airside – confirm with the carrier.",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Confirm Oman transit rules with the airline","Obtain transit visa if needed","Travel with passport and onward ticket"],
          fees: "Per airline"
        },
        research: ["Operating airline","Oman airport transit information"]
      },
    }
  },

  usa: {
    name: "United States", flag: "🇺🇸",
    visas: {
      b1b2: {
        title: "B-1/B-2 Visitor Visa (Pakistan → USA)",
        summary: { threshold: "Ties + trip funds (no fixed $ amount)", english: "Interview in English/Urdu as practical", grant: "Often multiple entry; validity varies", vac: "US Embassy Islamabad / Consulate Karachi" },
        docs: {
          "Application": [
            "DS-160 confirmation page",
            "MRV fee receipt",
            "Interview appointment confirmation (ustraveldocs.com/pk)",
            "Valid Pakistani passport"
          ],
          "Purpose": [
            "Cover letter / itinerary stating purpose (tourism, family, short business)",
            "Invitation letter if visiting family/friends (helpful, not a guarantee)",
            "Conference/business invitation if B-1 activities"
          ],
          "Financial & ties to Pakistan": [
            "Bank statements and income proof",
            "Employment letter or business documents (NTN, registration)",
            "Property / family ties evidence",
            "Evidence you will depart the US after the visit (INA 214(b) is the main refusal ground)"
          ],
          "Travel history": [
            "Previous passports and visas (UK/Schengen/US) if any"
          ]
        },
        financial: {
          title: "Funds & 214(b)",
          main: "No published fixed bank balance. You must show you can fund the trip and that you have strong ties to Pakistan compelling return.",
          note: "Consular officers decide case-by-case. Sudden large deposits or weak employment history commonly undermine applications from Pakistan.",
          savings: "",
          methods: []
        },
        process: {
          steps: [
            "Complete DS-160 at ceac.state.gov",
            "Pay MRV fee and schedule interview via ustraveldocs.com/pk",
            "Attend interview with passport and supporting documents (officer may or may not review all papers)",
            "If approved, follow instructions for passport return"
          ],
          fees: "MRV fee (see travel.state.gov / ustraveldocs current amount)"
        },
        research: [
          "https://travel.state.gov/content/travel/en/us-visas/tourism-visit/visitor.html",
          "https://pk.usembassy.gov/nonimmigrant-visas/",
          "https://www.ustraveldocs.com/pk/"
        ]
      },
      student: {
        title: "F-1 Student Visa",
        summary: { threshold: "I-20 funds (tuition + living)", english: "School / interview", grant: "D/S (duration of status)", vac: "US Embassy Islamabad or Consulate Karachi" },
        docs: {
          "Identity & application": [
            "Valid Pakistani passport (valid at least 6 months beyond intended entry where required by practice)",
            "DS-160 confirmation page (barcode)",
            "Visa application (MRV) fee payment receipt",
            "One photograph meeting US visa photo rules if not uploaded successfully in DS-160",
            "Appointment confirmation for consular interview"
          ],
          "SEVIS & school": [
            "Original Form I-20 issued by SEVP-certified school (signed by DSO and student)",
            "SEVIS I-901 fee payment confirmation",
            "Admission / offer letter from the US school (if held separately from I-20)"
          ],
          "Academic (Pakistan / prior study)": [
            "Degree certificates and transcripts used for admission",
            "Intermediate / bachelor / master mark sheets as applicable",
            "English test score reports if required by the school (TOEFL, IELTS, Duolingo, etc.)",
            "Gap explanation letter if there are study gaps"
          ],
          "Financial evidence": [
            "Proof of liquid funds covering at least the first academic year of tuition and living costs as shown on the I-20",
            "Bank statements (student and/or sponsor) – typically recent months, consistent balances",
            "Sponsor affidavit of support if a parent/relative funds the study",
            "Sponsor relationship proof (FRC / NADRA / birth certificate as applicable)",
            "Sponsor income evidence (salary slips, tax returns, business registration) where available",
            "Education loan sanction letter if using a loan"
          ],
          "Ties & intent (interview)": [
            "Evidence of ties to Pakistan (family, property, job offer after graduation, business)",
            "Clear study plan: why this programme, why this school, how it fits career in Pakistan",
            "Previous US/Schengen/UK visas and travel history if any"
          ]
        },
        financial: {
          title: "F-1 financial requirement",
          main: "You must show ability to pay tuition and living costs for at least the first year as stated on the I-20, without unlawful employment.",
          note: "The US does not publish one fixed bank-balance figure for all F-1 cases. The amount must match the I-20 estimate. Officers assess source and availability of funds and nonimmigrant intent under INA 214(b).",
          savings: "",
          methods: [
            { name: "Own funds", desc: "Student bank statements showing available liquid funds; explain large recent deposits." },
            { name: "Family sponsor", desc: "Sponsor affidavit + bank statements + proof of relationship + income/wealth evidence." },
            { name: "Loan", desc: "Formal loan approval/sanction letter from a recognised lender covering the required amount." }
          ]
        },
        process: {
          steps: [
            "Receive I-20 from the US school and verify name/spelling matches passport",
            "Pay SEVIS I-901 fee and print receipt",
            "Complete DS-160 online and print confirmation",
            "Pay MRV fee and book interview at US Embassy Islamabad or Consulate Karachi (as applicable)",
            "Attend interview with I-20, SEVIS receipt, financial documents and academic records",
            "If approved, await passport return with F-1 visa; check entry validation on arrival"
          ],
          fees: "SEVIS I-901 + MRV fee (see travel.state.gov / ustraveldocs for current amounts)"
        },
        research: [
          "Official: https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html",
          "SEVIS fee: https://www.fmjfee.com/",
          "Pakistan appointments: https://www.ustraveldocs.com/pk/"
        ]
      },
      work: {
        title: "US Temporary Work Visa (H-1B / L-1 / Other) – Pakistan",
        summary: { threshold: "Approved petition (employer-driven)", english: "Interview", grant: "As per petition", vac: "US Embassy Islamabad / Consulate Karachi" },
        docs: {
          "Petition": ["Notice of approved petition (e.g. I-797) where applicable","Employer support letter"],
          "Application": ["DS-160 confirmation","MRV fee receipt","Interview appointment via ustraveldocs.com/pk","Valid passport"],
          "Qualifications": ["Degrees and experience matching the petition","Licensing if required"],
          "Dependents": ["If H-4/L-2: relationship certificates and each dependent DS-160"]
        },
        financial: {
          title: "Petition-based work",
          main: "Driven by USCIS-approved employer petition. Personal bank balance is secondary to a valid petition and interview admissibility.",
          note: "H-1B, L-1, O-1 and other categories differ – apply only in the category matching your petition.",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Employer petition with USCIS","DS-160 + MRV after approval","Interview in Pakistan","Enter in correct status if approved"],
          fees: "MRV fee (petition fees usually employer-paid)"
        },
        research: ["https://travel.state.gov/content/travel/en/us-visas/employment.html","https://www.ustraveldocs.com/pk/"]
      },
    }
  },
  canada: {
    name: "Canada", flag: "🇨🇦",
    visas: {
      visitor: {
        title: "Canada Visitor Visa / TRV (Pakistan → Canada)",
        summary: { threshold: "Sufficient funds for stay + ties", english: "May be assessed", grant: "Often up to 6 months per visit", vac: "VFS / VAC biometrics" },
        docs: {
          "Identity": ["Valid Pakistani passport","CNIC","Digital photo meeting IRCC specs","Family information forms as required in account"],
          "Purpose": ["Purpose of travel letter","Invitation letter if visiting family (with host status in Canada)","Itinerary and accommodation"],
          "Financial": ["Bank statements","Employment/business proof","Tax documents if available"],
          "Ties to Pakistan": ["Job letter with leave approval","Property/family ties","Evidence of return"],
          "Biometrics & forms": ["Biometrics appointment (required for many Pakistan applications)","IMM forms via IRCC secure account"]
        },
        financial: {
          title: "Visitor funds",
          main: "Show you can cover travel, stay and return without unauthorised work. IRCC assesses overall economic stability and ties.",
          note: "No single published fixed amount for all visitor cases; depends on length of stay and whether host supports you.",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Create IRCC account and complete visitor application","Pay fees and give biometrics","Submit documents online","Await decision; check passport request instructions"],
          fees: "TRV fee + biometrics fee (see IRCC fee list)"
        },
        research: ["https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html","https://www.canada.ca/en/immigration-refugees-citizenship/services/biometrics.html"]
      },
      spouse: {
        title: "Canada Spouse Sponsorship (Pakistan → Canada)",
        summary: { threshold: "Sponsor income / undertaking (no MIR identical to UK)", english: "Not primary like UK A1", grant: "PR pathway when approved", vac: "VAC biometrics" },
        docs: {
          "Relationship": ["Marriage certificate","Proof of genuine relationship (photos, communication, visits, joint proof)","Relationship narrative"],
          "Sponsor (Canada)": ["Status in Canada (citizen/PR)","Financial undertaking forms","Income evidence as required for family size"],
          "Applicant": ["Passport","Civil documents","Police certificates","Medical exam"],
          "Pakistan docs": ["NADRA documents as applicable with translations"]
        },
        financial: {
          title: "Sponsorship undertaking",
          main: "Canadian sponsor signs an undertaking to support the applicant. Low-income cut-offs can matter for some family classes – follow the IRCC guide for your category.",
          note: "Relationship genuineness is scrutinised heavily for overseas spouse applications.",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Sponsor files sponsorship + principal applicant package as instructed","Biometrics and medicals","Interview if called","PR decision and travel document/visa"],
          fees: "Sponsorship + PR processing fees (IRCC)"
        },
        research: ["https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship/spouse-partner-children.html"]
      },
      student: {
        title: "Canada Study Permit (Pakistan → Canada)",
        summary: { threshold: "Tuition + living (IRCC proof-of-funds guidance)", english: "As required by DLI / programme", grant: "Usually aligned to programme length", vac: "VAC biometrics" },
        docs: {
          "School": ["Letter of Acceptance from a Designated Learning Institution (DLI)","Provincial attestation letter (PAL) if required for your intake/province"],
          "Identity": ["Passport","Photos","Family information"],
          "Financial": ["Proof of tuition payment or ability to pay","Proof of living funds per IRCC updated guidance for your study period","Sponsor documents if applicable"],
          "Study plan": ["Statement of purpose: why Canada, why this programme, ties to Pakistan","Academic transcripts and certificates"],
          "Other": ["Biometrics","Medical exam if required","Police certificates if required"]
        },
        financial: {
          title: "Study permit funds",
          main: "Show tuition plus living costs. IRCC publishes and updates proof-of-funds amounts – verify the current table on Canada.ca before applying.",
          note: "Using GIC (e.g. for SDS-style pathways where applicable) or bank evidence depends on your stream. Pakistan applicants should follow the instructions in their IRCC account checklist.",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Get LoA (+ PAL if required)","Gather funds evidence","Apply online for study permit","Biometrics","Medical if requested","Travel with passport, permit/visa, LoA"],
          fees: "Study permit fee + biometrics (IRCC)"
        },
        research: ["https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html"]
      },
    }
  },
  australia: {
    name: "Australia", flag: "🇦🇺",
    visas: {
      visitor: {
        title: "Australia Visitor Visa Subclass 600 (Pakistan → Australia)",
        summary: { threshold: "Funds + genuine temporary stay", english: "As required", grant: "Stream-dependent", vac: "Biometrics if requested" },
        docs: {
          "Identity": ["Pakistani passport","National ID","Civil documents as listed in ImmiAccount"],
          "Genuine Temporary Entrant": ["Statement addressing GTE: incentives to return to Pakistan, purpose of trip, compliance history"],
          "Financial": ["Bank statements","Income/employment evidence","Sponsor evidence if applicable"],
          "Purpose": ["Itinerary","Invitation if visiting family","Leave letter from employer"]
        },
        financial: {
          title: "Visitor funds",
          main: "Show capacity to fund the visit and leave Australia before permission ends.",
          note: "Home Affairs assesses genuineness and funds together; weak ties to Pakistan are a common refusal theme.",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Create ImmiAccount","Lodge subclass 600 in correct stream","Pay VAC","Provide biometrics/health if requested","Await decision"],
          fees: "VAC for subclass 600 (see Immi account fee)"
        },
        research: ["https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/visitor-600"]
      },
      student: {
        title: "Australia Student Visa Subclass 500 (Pakistan → Australia)",
        summary: { threshold: "Tuition + living + travel (GS requirement)", english: "As required by course / Ministerial instrument", grant: "Course length based", vac: "Biometrics/health common" },
        docs: {
          "Enrolment": ["Confirmation of Enrolment (CoE)","Written agreement with provider"],
          "Genuine Student": ["GS statement: reasons for study, course value to career in Pakistan, understanding of stay conditions"],
          "Financial": ["Evidence of tuition, living and travel costs as required for your circumstances","Sponsor evidence with relationship proof if used"],
          "English": ["Test results if required"],
          "Identity & health": ["Passport","Health examination via Bupa/panel physician if requested","Police clearance if requested"]
        },
        financial: {
          title: "Student 500 funds",
          main: "Funds for tuition, living and travel. Amounts and acceptable evidence are set in Home Affairs policy – confirm current requirements in your ImmiAccount checklist.",
          note: "Genuine Student assessment is central; funds alone do not overcome an unconvincing study pathway.",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Accept offer and get CoE","Prepare GS and funds file","Lodge 500 in ImmiAccount","Biometrics and medicals as requested","Grant notification and travel"],
          fees: "VAC subclass 500 (see Home Affairs)"
        },
        research: ["https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500"]
      },
      work: {
        title: "Australia Temporary Work (e.g. TSS 482) – Pakistan",
        summary: { threshold: "Sponsored employment", english: "As required", grant: "Stream-dependent", vac: "Biometrics/health" },
        docs: {
          "Sponsorship": ["Approved Australian employer sponsorship / nomination"],
          "Skills": ["Skills assessment if required for occupation","CV and employment references","Licensing if applicable"],
          "Identity": ["Passport","Police certificates","Health examinations"],
          "English": ["Test scores if required for stream"]
        },
        financial: {
          title: "Sponsored work",
          main: "Nomination and sponsorship are primary. Personal funds may be relevant for some streams but the job offer drives the visa.",
          note: "Occupation lists and salary rules change – confirm on Home Affairs for the exact subclass.",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Employer sponsorship/nomination","Lodge visa application","Health and biometrics","Decision"],
          fees: "Per subclass VAC"
        },
        research: ["https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing"]
      },
    }
  },
  uae: {
    name: "United Arab Emirates", flag: "🇦🇪",
    visas: {
      tourist: {
        title: "UAE Visit / Tourist Visa (Pakistan → UAE)",
        summary: { threshold: "Per airline/sponsor/e-visa channel rules", english: "Not usually tested", grant: "Depends on visa type (30/60/90 days common)", vac: "Airline, sponsor, or ICP/GDRFA channels" },
        docs: {
          "Identity": ["Pakistani passport with required validity (often 6 months)","Photo","CNIC"],
          "Application channel": ["Apply via UAE airline, hotel, authorised agent, or relative sponsor as applicable – channels change"],
          "Support": ["Return ticket","Hotel booking or host details","Bank statement if requested by processing agent"],
          "Employment": ["Job letter sometimes requested for certain applications"]
        },
        financial: {
          title: "Visit funds",
          main: "Requirements depend on the issuing channel (airline package, sponsor, e-services). Follow the checklist given for your application path.",
          note: "UAE rules and products change frequently; confirm on official ICP/airline pages before payment.",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Choose lawful channel (do not use unverified agents)","Submit passport copy and required forms","Pay fees","Receive visa approval copy before travel","Carry printed visa/status proof at boarding"],
          fees: "Varies by visa product and channel"
        },
        research: ["https://icp.gov.ae/","Official airline visa desks (EK, etc.)"]
      },
      employment: {
        title: "UAE Employment Visa (Pakistan → UAE)",
        summary: { threshold: "Employer sponsorship", english: "N/A primary", grant: "Work permit then residence", vac: "Employer via ICP/GDRFA typing centres" },
        docs: {
          "Sponsorship": ["UAE employer initiates entry permit / work authorisation"],
          "Employee": ["Passport","Photo","Attested educational certificates as required for the role","Medical fitness after entry","Emirates ID process"],
          "Pakistan side": ["Some roles need degree attestation (HEC/MOFA)"]
        },
        financial: {
          title: "Employment sponsorship",
          main: "UAE work residence is employer-driven. Salary is set in the contract; personal savings are secondary to a valid job offer and ministry approvals.",
          note: "",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Receive offer","Employer processes entry permit","Enter UAE","Medical + Emirates ID + residence stamping"],
          fees: "Mostly employer-side; confirm contract"
        },
        research: ["https://icp.gov.ae/","https://www.gdrfad.gov.ae/"]
      },
      transit: {
        title: "UAE Transit Visa (Pakistan → UAE)",
        summary: { threshold: "Per airline product", english: "N/A", grant: "Short transit window", vac: "Airline / airport channel" },
        docs: {
          "Travel": ["Confirmed onward ticket within allowed transit time","Passport valid as required by airline"],
          "Visa product": ["Transit visa via airline when required – not all connections need one"],
          "Support": ["Hotel if overnight transit product requires it"]
        },
        financial: {
          title: "Transit",
          main: "Usually airline product-driven rather than a large personal funds test.",
          note: "Confirm with the operating airline before travel.",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Check if layover requires UAE transit visa","Obtain via airline if needed","Travel with printed approval"],
          fees: "Per airline product"
        },
        research: ["Airline transit desks","https://icp.gov.ae/"]
      },
    }
  },
  saudi: {
    name: "Saudi Arabia", flag: "🇸🇦",
    visas: {
      visit: {
        title: "Saudi Visit / Tourist Visa (Pakistan → Saudi Arabia)",
        summary: { threshold: "Per Nusuk / approved channel rules", english: "N/A", grant: "Product-dependent", vac: "Enjaz / approved platforms / embassy channels" },
        docs: {
          "Identity": ["Pakistani passport with required validity","Photo","CNIC"],
          "Application": ["Apply via official Saudi platforms (e.g. Nusuk tourist products) or authorised channel – avoid unofficial agents"],
          "Support": ["Return ticket","Hotel or host details as required by product","Bank statement if the platform requests"],
          "Other": ["Vaccination / health requirements if published for entry"]
        },
        financial: {
          title: "Saudi visit funds",
          main: "Follow the exact checklist of the official visa product you select. Requirements differ between tourist e-visa style products and sponsored visits.",
          note: "Always use official Ministry of Foreign Affairs / Nusuk / accredited centre instructions.",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Choose official visa product","Submit application and pay fees","Receive electronic/ stamped visa as applicable","Travel with printed confirmation"],
          fees: "Per product"
        },
        research: ["https://www.visasaudi.com/","Official Enjaz / MOFA notices for Pakistan"]
      },
      work: {
        title: "Saudi Work Visa / Employment (Pakistan → Saudi Arabia)",
        summary: { threshold: "Employer sponsorship (block visa / qiwa processes)", english: "N/A primary", grant: "Linked to work permit / iqama pathway", vac: "Enjaz after employer authorisation" },
        docs: {
          "Sponsorship": ["Saudi employer must complete labour/visa authorisation (Qiwa/MHRSD processes as applicable)"],
          "Employee": ["Passport","Photos","Educational certificates often attested (HEC/MOFA/Saudi cultural)","Medical fitness from approved clinics","Police certificate if required"],
          "Application": ["Enjaz/visa application after visa number issued"]
        },
        financial: {
          title: "Employment sponsorship",
          main: "Employer sponsorship drives the work visa. Personal bank balance is not the primary test; contract and authorised visa number are.",
          note: "Attestation chains for degrees are frequently required – plan time for HEC and MOFA.",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Employer obtains authorisation","Complete medicals and attestations","Apply via Enjaz/authorised centre","Travel and complete iqama formalities in KSA"],
          fees: "Employer/employee split per contract and regulations"
        },
        research: ["Qiwa / MHRSD employer guidance","Saudi visa centres Pakistan"]
      },
      umrah: {
        title: "Saudi Umrah Visa (Pakistan → Saudi Arabia)",
        summary: { threshold: "Per Nusuk / authorised package", english: "N/A", grant: "Umrah validity window", vac: "Nusuk / authorised agents" },
        docs: {
          "Identity": ["Pakistani passport with required validity","Photo","CNIC"],
          "Umrah": ["Apply via official Nusuk platform or authorised licensed agent only","Vaccination requirements as published for the season"],
          "Travel": ["Return ticket and hotel/package as required"]
        },
        financial: {
          title: "Umrah package",
          main: "Usually package-based through official channels.",
          note: "Requirements change by season – follow Nusuk current instructions only.",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Official Nusuk/authorised application","Pay fees and obtain approval","Travel for Umrah only within permitted activities"],
          fees: "Per official product"
        },
        research: ["https://www.nusuk.sa/","Official Saudi Umrah guidance"]
      },
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
        title: "Malaysia Social Visit / Tourist (Pakistan → Malaysia)",
        summary: { threshold: "Funds + return ticket practice", english: "N/A", grant: "As stamped/issued", vac: "Embassy/consulate or eVISA where eligible" },
        docs: {
          "Identity": ["Passport with validity","Photo","CNIC"],
          "Travel": ["Return/onward ticket","Hotel bookings"],
          "Financial": ["Bank statements showing funds for stay"],
          "Ties": ["Employment letter","Cover letter purpose of visit"],
          "Other": ["Yellow fever certificate only if arriving from/via risk countries as per rules"]
        },
        financial: {
          title: "Malaysia visit funds",
          main: "Immigration officers and visa officers expect evidence you can fund the stay and depart on time. Carry statements and return tickets.",
          note: "eVISA vs sticker requirements depend on current Malaysian regulations for Pakistani nationals – confirm before travel.",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Check if eVISA or embassy application applies","Submit required documents","Pay fees","Travel with printouts"],
          fees: "Per Immigration Malaysia / mission"
        },
        research: ["https://www.imi.gov.my/","Malaysian mission Pakistan notices"]
      },
      student: {
        title: "Malaysia Student Pass (Pakistan → Malaysia)",
        summary: { threshold: "Tuition + living as required by EMGS / institution", english: "Programme requirement", grant: "Linked to institution", vac: "EMGS + embassy processes" },
        docs: {
          "Institution": ["Offer letter from approved Malaysian institution","EMGS application / VAL (Visa Approval Letter) process"],
          "Identity": ["Passport","Photos","Academic transcripts","Medical exam as required by EMGS"],
          "Financial": ["Proof of funds/tuition as required for VAL"],
          "Other": ["Personal bond / medical insurance as directed by college"]
        },
        financial: {
          title: "Malaysia student funds",
          main: "Meet EMGS and institution requirements for tuition and living support for VAL issuance.",
          note: "Do not rely on informal agents; track VAL status on EMGS.",
          savings: "",
          methods: []
        },
        process: {
          steps: ["Accept offer and start EMGS","Medicals and documents","VAL issued","Single-entry visa / entry","Student pass endorsement in Malaysia"],
          fees: "EMGS + visa fees"
        },
        research: ["https://educationmalaysia.gov.my/","EMGS"]
      },
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

  // Destination + visa specific financial tab only (no cross-route leakage)
  // Optional extra principles only when they match this country/visa
  if (typeof FINANCE_DEEP !== 'undefined' && country === 'uk' && (isSpouse || isStudent)) {
    finHtml += `<div class="mt-6 border-t border-slate-200 pt-4">
      <h3 class="font-semibold text-rose-800 mb-2">Additional UK guidance</h3>
      <ul class="space-y-1 text-sm mb-4">`;
    (FINANCE_DEEP.principles || []).slice(0, 4).forEach(p => {
      finHtml += `<li class="flex gap-2"><span class="text-rose-500">•</span> ${p}</li>`;
    });
    finHtml += `</ul>`;
    if (isSpouse && FINANCE_DEEP.byRoute && FINANCE_DEEP.byRoute['UK Family (Spouse)']) {
      finHtml += `<p class="text-sm text-slate-700 mb-2"><strong>UK Family (Spouse):</strong> ${FINANCE_DEEP.byRoute['UK Family (Spouse)']}</p>`;
    }
    if (isStudent && FINANCE_DEEP.byRoute && FINANCE_DEEP.byRoute['UK Student']) {
      finHtml += `<p class="text-sm text-slate-700 mb-2"><strong>UK Student:</strong> ${FINANCE_DEEP.byRoute['UK Student']}</p>`;
    }
    finHtml += `</div>`;
  }

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
  return fetch('https://raw.githubusercontent.com/donzae124/visacheck-pro/main/data/live-data.json?ts=' + Date.now()).catch(function(){return fetch('data/live-data.json?ts=' + Date.now());})
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
