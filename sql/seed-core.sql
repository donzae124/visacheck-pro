-- Seed: countries + real structured requirements for major destinations
-- These are operational checklist items aligned to known official frameworks (UK Appendix FM / visitor, US B1/B2 & F-1, Schengen C, CA, AU).
-- Re-verify on official sites; monthly scraper updates source_url / notes.

SET NAMES utf8mb4;

-- Sample countries (full list can be imported from countries.js export)
INSERT INTO countries (code, name, flag) VALUES
('pk','Pakistan','🇵🇰'),('in','India','🇮🇳'),('gb','United Kingdom','🇬🇧'),('us','United States','🇺🇸'),
('ca','Canada','🇨🇦'),('au','Australia','🇦🇺'),('ae','United Arab Emirates','🇦🇪'),('de','Germany','🇩🇪'),
('fr','France','🇫🇷'),('es','Spain','🇪🇸'),('it','Italy','🇮🇹'),('nl','Netherlands','🇳🇱'),
('sa','Saudi Arabia','🇸🇦'),('tr','Turkey','🇹🇷'),('my','Malaysia','🇲🇾'),('nz','New Zealand','🇳🇿'),
('ng','Nigeria','🇳🇬'),('bd','Bangladesh','🇧🇩'),('cn','China','🇨🇳'),('jp','Japan','🇯🇵'),
('sg','Singapore','🇸🇬'),('ie','Ireland','🇮🇪'),('za','South Africa','🇿🇦'),('br','Brazil','🇧🇷')
ON DUPLICATE KEY UPDATE name=VALUES(name), flag=VALUES(flag);

INSERT INTO portals (dest_code, url, label, updated_at) VALUES
('gb','https://www.gov.uk/browse/visas-immigration','UK Visas and Immigration',NOW()),
('us','https://travel.state.gov/content/travel/en/us-visas.html','US Department of State – Visas',NOW()),
('ca','https://www.canada.ca/en/services/immigration-citizenship.html','IRCC Canada',NOW()),
('au','https://immi.homeaffairs.gov.au/','Australian Home Affairs',NOW()),
('es','https://www.exteriores.gob.es/en/ServiciosAlCiudadano/Paginas/Visados.aspx','Spain Visas',NOW()),
('de','https://www.auswaertiges-amt.de/en/visa-service','Germany Federal Foreign Office',NOW()),
('fr','https://france-visas.gouv.fr/','France-Visas',NOW()),
('ae','https://icp.gov.ae/','UAE ICP',NOW()),
('nz','https://www.immigration.govt.nz/','Immigration New Zealand',NOW()),
('ie','https://www.irishimmigration.ie/','Irish Immigration Service',NOW())
ON DUPLICATE KEY UPDATE url=VALUES(url), label=VALUES(label), updated_at=NOW();

-- Visa categories
INSERT INTO visa_categories (dest_code, visa_code, title) VALUES
('gb','tourist','Standard Visitor visa'),
('gb','business','Standard Visitor visa (business)'),
('gb','student','Student visa (immigration route)'),
('gb','family','Family visa (Spouse/Partner – Appendix FM)'),
('gb','work','Skilled Worker visa'),
('us','tourist','B-1/B-2 Visitor visa'),
('us','student','F-1 Student visa'),
('us','work','Temporary work visa (category-specific)'),
('us','family','Family-based immigrant / nonimmigrant petition routes'),
('ca','tourist','Visitor visa (TRV)'),
('ca','student','Study permit'),
('ca','work','Work permit'),
('ca','family','Family sponsorship'),
('au','tourist','Visitor visa (subclass 600)'),
('au','student','Student visa (subclass 500)'),
('au','work','Temporary Skill Shortage / work visas'),
('es','tourist','Schengen short-stay (Type C) – Tourism'),
('es','business','Schengen short-stay (Type C) – Business'),
('es','student','National student visa (Type D) / study'),
('de','tourist','Schengen short-stay (Type C)'),
('de','student','National visa – study'),
('fr','tourist','Schengen short-stay (Type C)'),
('fr','student','Long-stay student visa')
ON DUPLICATE KEY UPDATE title=VALUES(title);

-- ========== UK Standard Visitor ==========
INSERT INTO requirements (dest_code, visa_code, origin_code, section, item_text, sort_order, is_active, source_url, updated_at) VALUES
('gb','tourist',NULL,'Purpose','Completed online application on GOV.UK',10,1,'https://www.gov.uk/standard-visitor',NOW()),
('gb','tourist',NULL,'Purpose','Travel itinerary and intended dates of stay',20,1,'https://www.gov.uk/standard-visitor',NOW()),
('gb','tourist',NULL,'Purpose','Accommodation details in the UK',30,1,'https://www.gov.uk/standard-visitor',NOW()),
('gb','tourist',NULL,'Financial','Bank statements showing funds for the trip (typically recent months)',10,1,'https://www.gov.uk/standard-visitor/support-documents',NOW()),
('gb','tourist',NULL,'Financial','Evidence of income or economic circumstances',20,1,'https://www.gov.uk/standard-visitor/support-documents',NOW()),
('gb','tourist',NULL,'Ties','Evidence of ties to home country (employment, family, property, studies)',10,1,'https://www.gov.uk/standard-visitor',NOW()),
('gb','tourist',NULL,'Biometrics','Biometric appointment at a Visa Application Centre where required',10,1,'https://www.gov.uk/standard-visitor',NOW()),
('gb','tourist','pk','Medical','TB test certificate if required for your circumstances (check GOV.UK TB list)',10,1,'https://www.gov.uk/tb-test-visa',NOW()),
('gb','tourist','in','Medical','TB test certificate if required for your circumstances (check GOV.UK TB list)',10,1,'https://www.gov.uk/tb-test-visa',NOW());

INSERT INTO financial_rules (dest_code, visa_code, origin_code, title, main_text, note_text, updated_at) VALUES
('gb','tourist',NULL,'Visitor funds','You must show you can support yourself during the trip and pay for return travel without accessing public funds.','There is no single published fixed cash figure for all Standard Visitor cases; evidence is assessed in the round.',NOW());

INSERT INTO process_steps (dest_code, visa_code, step_order, step_text, fees_text, updated_at) VALUES
('gb','tourist',1,'Apply online on GOV.UK for a Standard Visitor visa',NULL,NOW()),
('gb','tourist',2,'Pay the visa fee and immigration health surcharge only if applicable to your route',NULL,NOW()),
('gb','tourist',3,'Book and attend biometrics at a VAC',NULL,NOW()),
('gb','tourist',4,'Wait for a decision; check passport return method','See GOV.UK fees for Standard Visitor',NOW());

-- ========== UK Spouse / Partner (Appendix FM) ==========
INSERT INTO requirements (dest_code, visa_code, origin_code, section, item_text, sort_order, is_active, source_url, updated_at) VALUES
('gb','family',NULL,'Relationship','Marriage or civil partnership certificate (or durable relationship evidence for unmarried partners)',10,1,'https://www.gov.uk/uk-family-visa',NOW()),
('gb','family',NULL,'Relationship','Evidence relationship is genuine and subsisting (photos, chat logs, visits, joint finances as applicable)',20,1,'https://www.gov.uk/uk-family-visa',NOW()),
('gb','family',NULL,'Sponsor','Sponsor British citizenship or settled status evidence',10,1,'https://www.gov.uk/uk-family-visa',NOW()),
('gb','family',NULL,'Financial (Appendix FM)','Meet the minimum income requirement under Appendix FM (or permitted cash savings combination)',10,1,'https://www.gov.uk/uk-family-visa',NOW()),
('gb','family',NULL,'Financial (Appendix FM)','Employed sponsor: 6 months payslips, corresponding bank statements, employment letter',20,1,'https://www.gov.uk/uk-family-visa',NOW()),
('gb','family',NULL,'Financial (Appendix FM)','Self-employed sponsor: company/tax documents as required (e.g. SA302, tax year overview, accounts)',30,1,'https://www.gov.uk/uk-family-visa',NOW()),
('gb','family',NULL,'English','English language certificate at required CEFR level, or exempt category evidence',10,1,'https://www.gov.uk/uk-family-visa',NOW()),
('gb','family',NULL,'Accommodation','Adequate accommodation evidence without recourse to public funds',10,1,'https://www.gov.uk/uk-family-visa',NOW()),
('gb','family','pk','Civil documents (Pakistan)','NADRA documents as applicable (e.g. FRC, marriage registration) with translations if required',10,1,'https://www.gov.uk/uk-family-visa',NOW()),
('gb','family','pk','Medical','TB test from an approved clinic if required',20,1,'https://www.gov.uk/tb-test-visa',NOW());

INSERT INTO financial_rules (dest_code, visa_code, origin_code, title, main_text, note_text, updated_at) VALUES
('gb','family',NULL,'Appendix FM income threshold','Minimum income requirement applies to most spouse/partner routes under Appendix FM. Confirm the current figure on GOV.UK before applying.','Thresholds and permitted combination with cash savings are set in the Immigration Rules and change over time. Always verify on GOV.UK.',NOW());

INSERT INTO process_steps (dest_code, visa_code, step_order, step_text, fees_text, updated_at) VALUES
('gb','family',1,'Create UKVI account and start family visa application',NULL,NOW()),
('gb','family',2,'Upload documents and pay fees / IHS as applicable',NULL,NOW()),
('gb','family',3,'Attend biometrics at VAC',NULL,NOW()),
('gb','family',4,'Await decision (processing times published on GOV.UK)','See GOV.UK family visa fees + IHS',NOW());

-- ========== UK Student ==========
INSERT INTO requirements (dest_code, visa_code, origin_code, section, item_text, sort_order, is_active, source_url, updated_at) VALUES
('gb','student',NULL,'CAS / Course','Confirmation of Acceptance for Studies (CAS) from a licensed sponsor',10,1,'https://www.gov.uk/student-visa',NOW()),
('gb','student',NULL,'Financial','Tuition + living cost funds for the required period (London vs outside London rates as published)',10,1,'https://www.gov.uk/student-visa/money',NOW()),
('gb','student',NULL,'Financial','Funds held for the required consecutive period before application (check current 28-day type rules)',20,1,'https://www.gov.uk/student-visa/money',NOW()),
('gb','student',NULL,'English','English language at level required by the course / UKVI',10,1,'https://www.gov.uk/student-visa',NOW()),
('gb','student',NULL,'Academic','Academic qualifications used to obtain the CAS',10,1,'https://www.gov.uk/student-visa',NOW()),
('gb','student','pk','Medical','TB test if required for your nationality/residence',10,1,'https://www.gov.uk/tb-test-visa',NOW());

INSERT INTO financial_rules (dest_code, visa_code, origin_code, title, main_text, note_text, updated_at) VALUES
('gb','student',NULL,'Student funds','You must show course fees (as on CAS) plus living costs at the GOV.UK published rate for the required months.','Differentiated London / outside-London living cost figures apply. Confirm current amounts on GOV.UK.',NOW());

-- ========== US B1/B2 ==========
INSERT INTO requirements (dest_code, visa_code, origin_code, section, item_text, sort_order, is_active, source_url, updated_at) VALUES
('us','tourist',NULL,'DS-160','Completed DS-160 confirmation page',10,1,'https://travel.state.gov/content/travel/en/us-visas/tourism-visit/visitor.html',NOW()),
('us','tourist',NULL,'Interview','Consular interview appointment (unless interview waived)',10,1,'https://travel.state.gov/content/travel/en/us-visas/tourism-visit/visitor.html',NOW()),
('us','tourist',NULL,'Ties','Evidence of strong ties to residence country (job, family, property, studies)',10,1,'https://travel.state.gov/content/travel/en/us-visas/tourism-visit/visitor.html',NOW()),
('us','tourist',NULL,'Financial','Evidence you can fund the trip',20,1,'https://travel.state.gov/content/travel/en/us-visas/tourism-visit/visitor.html',NOW()),
('us','tourist',NULL,'Purpose','Itinerary / invitation if applicable (invitation does not guarantee issuance)',30,1,'https://travel.state.gov/content/travel/en/us-visas/tourism-visit/visitor.html',NOW());

INSERT INTO financial_rules (dest_code, visa_code, origin_code, title, main_text, note_text, updated_at) VALUES
('us','tourist',NULL,'Visitor support','Demonstrate ability to pay for the trip and intent to depart the US after the visit.','No single universal bank-balance figure; adjudication is case-by-case under INA 214(b).',NOW());

-- ========== US F-1 ==========
INSERT INTO requirements (dest_code, visa_code, origin_code, section, item_text, sort_order, is_active, source_url, updated_at) VALUES
('us','student',NULL,'SEVIS / I-20','Form I-20 from a SEVP-certified school and SEVIS fee payment receipt',10,1,'https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html',NOW()),
('us','student',NULL,'DS-160','DS-160 confirmation',20,1,'https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html',NOW()),
('us','student',NULL,'Financial','Evidence of funds for tuition and living costs as indicated on I-20',10,1,'https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html',NOW()),
('us','student',NULL,'Academic','Academic records used for admission',20,1,'https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html',NOW()),
('us','student',NULL,'Intent','Ability to show nonimmigrant student intent as assessed at interview',30,1,'https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html',NOW());

-- ========== Spain / Schengen C Business-Tourist ==========
INSERT INTO requirements (dest_code, visa_code, origin_code, section, item_text, sort_order, is_active, source_url, updated_at) VALUES
('es','business',NULL,'Form','Schengen visa application form and appointment via BLS/VAC as instructed for your country',10,1,'https://www.exteriores.gob.es/',NOW()),
('es','business',NULL,'Travel','Flight reservation and travel medical insurance (min coverage as required for Schengen)',20,1,'https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa/visa-policy_en',NOW()),
('es','business',NULL,'Business','Invitation from Spanish company / proof of business purpose',30,1,'https://www.exteriores.gob.es/',NOW()),
('es','business',NULL,'Financial','Proof of means of subsistence for the stay',10,1,'https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa/visa-policy_en',NOW()),
('es','business',NULL,'Employment','Employer letter / self-employment evidence from country of residence',20,1,NULL,NOW()),
('es','tourist',NULL,'Form','Schengen visa application form',10,1,'https://www.exteriores.gob.es/',NOW()),
('es','tourist',NULL,'Travel','Itinerary, accommodation, travel insurance',20,1,NULL,NOW()),
('es','tourist',NULL,'Financial','Proof of sufficient means for stay and return',10,1,NULL,NOW());

INSERT INTO financial_rules (dest_code, visa_code, origin_code, title, main_text, note_text, updated_at) VALUES
('es','business',NULL,'Schengen means of subsistence','Show sufficient means for the stay as required under Schengen rules and Spanish practice.','Reference amounts can be published/updated by member states; confirm before applying.',NOW()),
('es','tourist',NULL,'Schengen means of subsistence','Show sufficient means for the stay as required under Schengen rules and Spanish practice.','Confirm current guidance with the consulate/VAC handling your application.',NOW());

-- ========== Canada visitor / study ==========
INSERT INTO requirements (dest_code, visa_code, origin_code, section, item_text, sort_order, is_active, source_url, updated_at) VALUES
('ca','tourist',NULL,'Application','IMM forms via IRCC account as required',10,1,'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html',NOW()),
('ca','tourist',NULL,'Ties','Ties to home country and purpose of visit',20,1,NULL,NOW()),
('ca','tourist',NULL,'Financial','Proof of funds for stay',10,1,NULL,NOW()),
('ca','tourist',NULL,'Biometrics','Biometrics if required for your nationality',30,1,'https://www.canada.ca/en/immigration-refugees-citizenship/services/biometrics.html',NOW()),
('ca','student',NULL,'Letter of acceptance','Letter of acceptance from a DLI',10,1,'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html',NOW()),
('ca','student',NULL,'Financial','Proof of funds for tuition and living costs',10,1,NULL,NOW()),
('ca','student',NULL,'Study plan','Explanation of study plan and ties',20,1,NULL,NOW());

-- ========== Australia ==========
INSERT INTO requirements (dest_code, visa_code, origin_code, section, item_text, sort_order, is_active, source_url, updated_at) VALUES
('au','tourist',NULL,'Application','ImmiAccount application for the correct visitor stream',10,1,'https://immi.homeaffairs.gov.au/',NOW()),
('au','tourist',NULL,'GTE / purpose','Genuine temporary stay evidence as required for the stream',20,1,NULL,NOW()),
('au','tourist',NULL,'Financial','Funds and offshore ties evidence',10,1,NULL,NOW()),
('au','student',NULL,'CoE','Confirmation of Enrolment (CoE)',10,1,'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500',NOW()),
('au','student',NULL,'GS / GTE','Genuine Student requirement evidence as currently published',20,1,NULL,NOW()),
('au','student',NULL,'Financial','Funds for tuition, living, travel as required',10,1,NULL,NOW()),
('au','student',NULL,'English','English evidence if required',30,1,NULL,NOW());
