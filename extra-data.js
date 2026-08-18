/* Extra modules: Visa Waiver, Diplomatic Passport, Sponsors, Foreign Education Case, Finance Deep Dive
   Research snapshot: 17 August 2026
*/

const VISA_WAIVER = {
  title: "Visa Waiver / eTA / Electronic Travel Authorisation Programs",
  intro: "Pakistani ordinary passport holders are generally NOT eligible for the major Western visa waiver programs (US VWP, Canadian eTA for visa-exempt, Australian ETA for passport holders from waiver countries, UK ETA currently limited). Below is the realistic picture as of Aug 2026.",
  programs: [
    {
      name: "United States – Visa Waiver Program (VWP)",
      status: "Not available for Pakistani passport",
      detail: "Pakistan is not a VWP country. All Pakistani citizens need a visa (B1/B2, F-1, etc.) and an interview in most cases."
    },
    {
      name: "Canada – eTA",
      status: "Not available for ordinary Pakistani passport",
      detail: "eTA is for visa-exempt nationalities. Pakistani citizens need a visitor visa or other TRV and biometrics."
    },
    {
      name: "Australia – ETA / eVisitor",
      status: "Not available for Pakistani passport",
      detail: "ETA/eVisitor is limited to certain nationalities. Pakistanis apply for Visitor (600), Student (500), etc."
    },
    {
      name: "United Kingdom – ETA",
      status: "Not available for Pakistani passport (as of 2026 research)",
      detail: "UK ETA is being rolled out for previously non-visa nationals. Pakistani citizens still require a visa (Visitor, Student, Spouse, Skilled Worker, etc.)."
    },
    {
      name: "Schengen / EU",
      status: "No visa waiver for Pakistani passport",
      detail: "Short stay requires a Schengen Type C visa. No ETIAS exemption applies to Pakistani ordinary passports."
    },
    {
      name: "Other electronic systems",
      status: "Limited e-visa / eTA options exist",
      detail: "Turkey e-visa, Sri Lanka ETA, Kenya eTA, Azerbaijan e-visa, Georgia e-visa, and several others are available depending on current rules. These are electronic visas/authorisations, not true visa waivers."
    }
  ],
  note: "True visa waiver programs remain very limited for the Pakistani ordinary passport. Always verify on the destination country’s official immigration site."
};

const DIPLOMATIC = {
  title: "Diplomatic / Official Passport Rules (Pakistan)",
  intro: "Holders of Pakistani diplomatic or official passports often receive different treatment, but exemptions are not automatic and vary by country and purpose of travel.",
  points: [
    "Diplomatic and official passports are issued by the Pakistani Ministry of Foreign Affairs to eligible officials and their eligible family members.",
    "Many countries grant visa exemptions or simplified procedures to diplomatic/official passport holders for official duties, but tourist or private travel may still require a visa.",
    "For Schengen: some Member States grant short-stay visa exemptions to diplomatic passport holders under bilateral agreements; others still require a visa. Check the specific country’s rules.",
    "United Kingdom: diplomatic/official passport holders may have different application channels or fee arrangements; a visa is often still required unless a specific exemption exists.",
    "United States: diplomatic visas (A or G categories) follow a different process and are usually applied for through diplomatic channels; ordinary B1/B2 rules do not apply.",
    "Canada, Australia, Gulf countries: official/diplomatic travel is normally coordinated via diplomatic notes / missions rather than the ordinary visitor visa route.",
    "Even with a diplomatic passport, the holder must still satisfy the receiving state’s entry conditions (purpose, duration, reciprocity, etc.).",
    "Family members on diplomatic passports may have derived privileges only while the principal is posted or on official duty."
  ],
  advice: "Always confirm with the destination country’s protocol/consular department and the Pakistani mission. Do not assume automatic visa-free entry."
};

const SPONSORS = {
  title: "Who Can Be a Sponsor – By Visa Type",
  intro: "Sponsorship rules differ sharply by visa category. Below is a practical summary for applications from Pakistan.",
  byType: {
    "UK Spouse / Partner": {
      who: "The British citizen (or settled) partner in the UK.",
      requirements: [
        "Must be British citizen, or have ILR / settled status, or limited other qualifying statuses.",
        "Must meet the £29,000 minimum income threshold (or cash savings equivalent) unless exempt.",
        "Must provide adequate accommodation.",
        "Must intend to live together permanently in the UK."
      ]
    },
    "UK Visitor": {
      who: "Optional. A UK-based host (family/friend) can support the application but is not a formal ‘sponsor’ in the same sense as family visas.",
      requirements: [
        "Host can provide invitation letter, proof of status, and sometimes accommodation/financial support evidence.",
        "Applicant still needs to show own ties to Pakistan and ability to support the trip or clear support arrangements."
      ]
    },
    "UK Student": {
      who: "No personal sponsor required in the family sense. The licensed education provider issues the CAS.",
      requirements: [
        "University / college must be a licensed Student sponsor.",
        "Financial requirement is usually met by the student (or parent/guardian funds with evidence).",
        "Parents can fund studies; evidence of relationship and source of funds is required."
      ]
    },
    "UK Skilled Worker": {
      who: "A Home Office licensed sponsor employer in the UK.",
      requirements: [
        "Employer must hold a valid sponsor licence.",
        "Issues a Certificate of Sponsorship (CoS).",
        "Job must meet skill and salary thresholds."
      ]
    },
    "Schengen Visitor / Business": {
      who: "Invitation from a host (family, friend, or company) in the Schengen state is very common and often expected.",
      requirements: [
        "Host provides invitation letter, proof of legal status, accommodation details, and sometimes a formal sponsorship/undertaking form (e.g. Verpflichtungserklärung in Germany).",
        "Applicant still needs own financial means or clear combination of own funds + host support.",
        "Business: invitation from the inviting company is essential."
      ]
    },
    "USA B1/B2": {
      who: "No formal sponsor required, but a US-based inviting person/company letter helps.",
      requirements: [
        "Invitation letter is supporting evidence only.",
        "Applicant must independently show strong ties to Pakistan and ability to fund the trip."
      ]
    },
    "USA F-1 Student": {
      who: "No personal sponsor required. The SEVP school issues the I-20.",
      requirements: [
        "School is the institutional ‘sponsor’ via I-20.",
        "Funds can come from student, parents, or formal sponsors with evidence."
      ]
    },
    "Canada Visitor": {
      who: "Optional host in Canada can provide invitation.",
      requirements: [
        "Invitation letter + host status documents useful.",
        "Applicant must still satisfy the officer of ties and funds."
      ]
    },
    "Canada Spouse Sponsorship": {
      who: "Canadian citizen or permanent resident spouse/partner.",
      requirements: [
        "Sponsor must meet eligibility (age, status, not barred from sponsoring).",
        "Financial LICO may apply in some family configurations; many spouse-only cases have exemptions – check current IRCC rules.",
        "Sponsor signs an undertaking to support the applicant."
      ]
    },
    "Canada Study Permit": {
      who: "Designated Learning Institution (DLI) issues the Letter of Acceptance.",
      requirements: [
        "No personal sponsor required.",
        "Funds from student/parents/official sponsors with proof."
      ]
    },
    "Australia Visitor / Student": {
      who: "Visitor: optional. Student: education provider issues CoE.",
      requirements: [
        "Student: Confirmation of Enrolment (CoE) from registered provider.",
        "Financial capacity can be shown by student or close family with evidence."
      ]
    },
    "Gulf Work (UAE / Saudi / Qatar)": {
      who: "The employer in the destination country.",
      requirements: [
        "Employer obtains labour approval / block visa / quota.",
        "Applicant cannot self-sponsor for ordinary employment residence in most cases."
      ]
    }
  }
};

const FOREIGN_EDU = {
  title: "Student Visa – Education Obtained Outside Pakistan",
  intro: "When the applicant is a resident of Pakistan but completed previous education (secondary, bachelor’s, master’s, etc.) in another country, extra document and verification steps usually apply.",
  scenarios: [
    {
      case: "Previous degree/diploma from another country",
      actions: [
        "Provide the original academic transcripts and degree/diploma certificates from the foreign institution.",
        "Obtain certified English translations if the documents are not in English.",
        "Many destinations require an equivalency / recognition statement:",
        "  – UK: Ecctis (formerly UK NARIC) statement is often needed if relying on the qualification for English or academic assessment.",
        "  – Australia / Canada / others: may require assessment by the relevant assessing body or the education provider’s own evaluation.",
        "Explain the study history clearly in a cover letter or statement of purpose (dates, institution, country, why you studied there, return to Pakistan)."
      ]
    },
    {
      case: "Gap between foreign education and current application",
      actions: [
        "Account for any study or work gaps with evidence (employment letters, further courses, explanation letter).",
        "Officers look for a coherent academic and career narrative."
      ]
    },
    {
      case: "Using foreign qualification to meet English language requirement",
      actions: [
        "Only possible if the qualification was taught in English in a majority-English-speaking country (or meets the specific country’s list).",
        "Otherwise an approved English test (IELTS, TOEFL, PTE, etc.) is still required.",
        "For UK Student / Spouse routes, check the exact list of majority English-speaking countries and whether Ecctis confirmation is needed."
      ]
    },
    {
      case: "Documents that are often requested extra",
      actions: [
        "Mark sheets / transcripts for all years of the foreign programme.",
        "University letter confirming medium of instruction (if claiming English-medium teaching).",
        "Proof of legal stay in the country where education was obtained (visa stamps, residence permit copies) if relevant to authenticity.",
        "Hague Apostille or embassy attestation may be required by some destinations for foreign documents."
      ]
    }
  ],
  financeNote: "Financial evidence remains the same as for any student from Pakistan (funds held for the required period, source of funds clear). The foreign education does not change the funds threshold, but it strengthens the academic profile if documents are properly verified."
};

const FINANCE_DEEP = {
  title: "Financial Evidence – Deep Guidance",
  principles: [
    "Funds must be genuinely available to the applicant (or to the formal sponsor where the rules allow).",
    "Sudden large deposits shortly before application are a common refusal reason – explain and evidence the source.",
    "Bank statements should normally cover 6 months (or the period specified by the destination).",
    "Statements must be on official bank stationery or electronic format accepted by the destination (often with bank stamp/letter).",
    "Currency conversion: use rates acceptable to the destination (often OANDA or the country’s published rate on the date of application)."
  ],
  byRoute: {
    "UK Family (Spouse)": "Specified evidence under Appendix FM-SE is mandatory. Category A (6+ months employment) or Category B (12-month average) or self-employment or cash savings. Employer letter + payslips + matching bank statements are the core package for salaried sponsors.",
    "UK Student": "Funds held for 28 consecutive days. Amount = outstanding tuition + living costs (London vs non-London rates). Parent/guardian funds allowed with proof of relationship and consent.",
    "Schengen Short Stay": "Daily reference amounts differ by country (Spain publishes clear figures). Show personal bank statements + income proof. Host sponsorship (Verpflichtungserklärung etc.) can supplement but does not always replace own means.",
    "USA B1/B2 & F-1": "No fixed published amount. For visitors: ability to fund the trip + strong ties. For students: first-year tuition + living on the I-20, with liquid funds or formal sponsors.",
    "Canada": "Study permit and visitor applications require proof of funds; amounts are guided by IRCC. Spouse sponsorship has its own LICO/undertaking rules.",
    "Australia": "Visitor and Student routes require genuine access to funds. Student GTE includes financial capacity assessment.",
    "Gulf Work": "Employer sponsorship is primary; personal bank statements may still be requested for entry permits in some cases."
  },
  documents: [
    "Personal bank statements (6 months typical)",
    "Business bank statements (if self-employed)",
    "Salary slips / employment contract / employer letter",
    "Tax returns / NTN / FBR documents (especially for self-employed from Pakistan)",
    "Property valuation or ownership documents (supporting ties / sometimes funds)",
    "Scholarship letters or formal sponsor affidavits with bank evidence",
    "Fixed deposit certificates / investment statements if used as funds",
    "Explanation letter for any large or unusual transactions"
  ]
};

const API_NOTE = {
  title: "Real-Time / Live Data Integration",
  current: "This version is a researched static snapshot (17 August 2026). True real-time visa policy, appointment availability, and fee data require backend integration.",
  possibleIntegrations: [
    "Official government open data feeds (limited availability)",
    "Embassy/VAC appointment APIs where publicly offered",
    "Currency rate APIs for funds conversion",
    "Scheduled crawlers of official GOV.UK, IRCC, homeaffairs, Schengen VAC, and MOFA pages",
    "Third-party visa intelligence services (commercial)"
  ],
  recommendation: "For production use, pair this front-end with a backend that periodically refreshes policy text, fees, and appointment links from official sources and exposes a simple JSON API. Client-side ‘live’ calls to random third-party sites are unreliable and often against terms of service."
};
