import type { IconName } from "@/components/Icon";

export type CategoryId = "consulting" | "training" | "audit" | "dpo";

export type ServiceCategory = {
  id: CategoryId;
  title: string;
  blurb: string;
  icon: IconName;
};

export type Service = {
  slug: string;
  category: CategoryId;
  title: string;
  tagline: string;   // short line for the menu / cards
  overview: string;  // intro paragraph on the detail page
  included: string[]; // "what's included" bullets
  icon: IconName;
};

export const CATEGORIES: ServiceCategory[] = [
  { id: "consulting", title: "Consulting", blurb: "End-to-end design and implementation of management systems and compliance programmes.", icon: "shield" },
  { id: "training", title: "Training", blurb: "Accredited and bespoke training that builds lasting capability in your teams.", icon: "graduation" },
  { id: "audit", title: "Audit & Assurance", blurb: "Independent internal audits, supplier assessments and gap analyses.", icon: "clipboard" },
  { id: "dpo", title: "Data Protection Officer (DPO)", blurb: "Outsourced DPO and privacy-management services that keep you continuously compliant.", icon: "lock" },
];

export const SERVICES: Service[] = [
  /* ---- Consulting ---- */
  {
    slug: "iso-27001-isms", category: "consulting", icon: "shield",
    title: "ISO 27001 ISMS Implementation",
    tagline: "Design and certify an Information Security Management System.",
    overview: "We design and implement an ISO/IEC 27001 Information Security Management System tailored to your organisation, from scoping and risk assessment through to certification readiness — building a living framework your teams can operate and improve.",
    included: [
      "Scope definition, context and interested-party analysis",
      "Risk assessment and Statement of Applicability (SoA)",
      "Policy, procedure and control documentation set",
      "Annex A control implementation support",
      "Internal audit and management review",
      "Certification (Stage 1 & 2) readiness and support",
    ],
  },
  {
    slug: "iso-22301-bcms", category: "consulting", icon: "pulse",
    title: "ISO 22301 BCMS Implementation",
    tagline: "Build resilience with a Business Continuity Management System.",
    overview: "We help you establish an ISO 22301 Business Continuity Management System — from business impact analysis to tested continuity and recovery plans — so your organisation can withstand and recover from disruption.",
    included: [
      "Business Impact Analysis (BIA)",
      "Continuity strategy and risk treatment",
      "Business continuity and recovery plans",
      "Exercise and testing programme",
      "Internal audit and management review",
      "Certification readiness and support",
    ],
  },
  {
    slug: "data-protection-privacy", category: "consulting", icon: "lock",
    title: "Data Protection & Privacy",
    tagline: "GDPR, UK GDPR and KVKK compliance by design.",
    overview: "We bring your organisation into compliance with GDPR, UK GDPR and KVKK — mapping personal data, closing gaps and embedding privacy-by-design across your processes and systems.",
    included: [
      "Data mapping and Records of Processing (RoPA)",
      "Gap assessment against GDPR / UK GDPR / KVKK",
      "Privacy notices, policies and consent flows",
      "Data Protection Impact Assessments (DPIA)",
      "Data subject request (DSAR) processes",
      "Third-party and international transfer safeguards",
    ],
  },
  {
    slug: "cyber-security", category: "consulting", icon: "shield",
    title: "Cyber Security",
    tagline: "Security governance, controls and technical assurance.",
    overview: "We strengthen your cyber-security posture with governance, control frameworks and technical assurance aligned to recognised standards and your threat landscape.",
    included: [
      "Security posture and maturity assessment",
      "Control framework selection and design",
      "Security policy and standard development",
      "Vulnerability and configuration review",
      "Incident response readiness",
      "Security metrics and reporting",
    ],
  },
  {
    slug: "payment-security-pci-dss", category: "consulting", icon: "card",
    title: "Payment Security (PCI DSS)",
    tagline: "Achieve and maintain PCI DSS compliance.",
    overview: "We guide payment and merchant environments to PCI DSS compliance — scoping the cardholder data environment, closing control gaps and preparing for assessment.",
    included: [
      "Cardholder data environment (CDE) scoping",
      "Gap analysis against PCI DSS",
      "Segmentation and control design",
      "Policy and evidence preparation",
      "SAQ / ROC readiness",
      "Remediation support",
    ],
  },
  {
    slug: "it-service-management", category: "consulting", icon: "server",
    title: "IT Service Management (ISO 20000)",
    tagline: "Mature IT service management with ISO 20000 / ITIL.",
    overview: "We help you implement an ISO/IEC 20000 service management system aligned to ITIL good practice, improving the reliability and quality of your IT services.",
    included: [
      "Service management system scoping",
      "Process design (incident, change, problem, etc.)",
      "SLA and service catalogue definition",
      "Documentation and evidence",
      "Internal audit and review",
      "Certification readiness",
    ],
  },
  {
    slug: "dora-readiness", category: "consulting", icon: "chart",
    title: "DORA Readiness",
    tagline: "Digital Operational Resilience Act for financial entities.",
    overview: "We prepare financial entities and their ICT providers for the EU Digital Operational Resilience Act — assessing gaps across ICT risk, incident reporting, resilience testing and third-party risk.",
    included: [
      "DORA gap assessment",
      "ICT risk management framework",
      "ICT incident classification and reporting",
      "Digital operational resilience testing",
      "Third-party ICT risk and register of information",
      "Board reporting and governance",
    ],
  },
  {
    slug: "soc-2-readiness", category: "consulting", icon: "clipboard",
    title: "SOC 2 Readiness",
    tagline: "Trust Services Criteria readiness and attestation support.",
    overview: "We prepare technology and service organisations for SOC 2 — mapping controls to the Trust Services Criteria and readying you for a smooth Type I or Type II examination.",
    included: [
      "Trust Services Criteria scoping",
      "Control gap assessment",
      "Policy and control implementation",
      "Evidence collection and readiness review",
      "Auditor liaison and coordination",
      "Continuous monitoring guidance",
    ],
  },
  {
    slug: "cyber-resilience-act", category: "consulting", icon: "doc",
    title: "Cyber Resilience Act",
    tagline: "Product security obligations for digital products in the EU.",
    overview: "We help manufacturers and vendors of products with digital elements prepare for the EU Cyber Resilience Act — from secure development to vulnerability handling and conformity.",
    included: [
      "CRA applicability and product classification",
      "Secure development lifecycle assessment",
      "Vulnerability handling and disclosure processes",
      "Technical documentation and conformity",
      "Post-market monitoring",
      "CE-marking readiness",
    ],
  },
  {
    slug: "it-governance", category: "consulting", icon: "columns",
    title: "IT Governance",
    tagline: "Best-practice IT governance aligned to COBIT.",
    overview: "We establish IT governance structures aligned to COBIT and recognised best practice, connecting technology decisions to business objectives and risk appetite.",
    included: [
      "Governance framework design",
      "Roles, responsibilities and RACI",
      "IT risk and control alignment",
      "Policy architecture",
      "Performance and value metrics",
      "Board and committee reporting",
    ],
  },

  /* ---- Training ---- */
  {
    slug: "information-security-training", category: "training", icon: "shield",
    title: "Information Security (ISO 27001) Training",
    tagline: "Build ISO 27001 capability across your teams.",
    overview: "Practical ISO 27001 training — from awareness to internal auditor level — that equips your teams to build, run and improve your ISMS.",
    included: [
      "ISO 27001 foundation and awareness",
      "Risk assessment workshops",
      "Internal auditor training",
      "Role-based control training",
      "Tailored, on-site or remote delivery",
      "Assessment and certificates of completion",
    ],
  },
  {
    slug: "business-continuity-training", category: "training", icon: "pulse",
    title: "Business Continuity (ISO 22301) Training",
    tagline: "Prepare your people to respond and recover.",
    overview: "Business continuity training covering ISO 22301 fundamentals, BIA, plan development and exercising, so your teams can respond effectively to disruption.",
    included: [
      "ISO 22301 fundamentals",
      "Business impact analysis workshops",
      "Plan development and roles",
      "Exercise and simulation facilitation",
      "Internal auditor training",
      "Certificates of completion",
    ],
  },
  {
    slug: "data-protection-training", category: "training", icon: "lock",
    title: "Data Protection & Privacy Training",
    tagline: "GDPR, UK GDPR and KVKK awareness and role-based training.",
    overview: "Data-protection training for all staff levels — from organisation-wide awareness to specialist privacy and DPO-support training.",
    included: [
      "Organisation-wide privacy awareness",
      "Role-based data-protection training",
      "DPIA and records workshops",
      "DSAR handling training",
      "Sector-specific scenarios",
      "Certificates of completion",
    ],
  },
  {
    slug: "grc-training", category: "training", icon: "book",
    title: "Governance, Risk & Compliance Training",
    tagline: "GRC fundamentals for teams and leaders.",
    overview: "GRC training that builds a shared language and capability across governance, risk management and compliance for both practitioners and leadership.",
    included: [
      "GRC fundamentals",
      "Risk management methods",
      "Control frameworks overview",
      "Compliance monitoring and reporting",
      "Board and executive briefings",
      "Certificates of completion",
    ],
  },
  {
    slug: "security-awareness-training", category: "training", icon: "graduation",
    title: "Security Awareness Training",
    tagline: "Reduce human risk with engaging awareness programmes.",
    overview: "Ongoing security-awareness programmes — including phishing simulations — that build a security-conscious culture and reduce human-factor risk.",
    included: [
      "Awareness programme design",
      "Phishing simulation campaigns",
      "Engaging, localised content",
      "Role and risk-based modules",
      "Metrics and reporting",
      "Continuous reinforcement",
    ],
  },

  /* ---- Audit & Assurance ---- */
  {
    slug: "internal-audit", category: "audit", icon: "clipboard",
    title: "Internal Audit",
    tagline: "Independent internal audits of your management systems.",
    overview: "Independent internal audits against ISO 27001, ISO 22301, ISO 20000 and other standards — giving your leadership evidence-based assurance and a clear improvement path.",
    included: [
      "Audit programme and scoping",
      "On-site or remote fieldwork",
      "Findings and non-conformity reports",
      "Corrective action guidance",
      "Management review inputs",
      "Certification-cycle support",
    ],
  },
  {
    slug: "supplier-audit", category: "audit", icon: "users",
    title: "Supplier Audit",
    tagline: "Third-party and supply-chain assurance.",
    overview: "We assess your critical suppliers and third parties against your security and compliance requirements, giving you assurance over your supply chain.",
    included: [
      "Supplier risk tiering",
      "Assessment criteria and questionnaires",
      "On-site or remote supplier audits",
      "Findings and risk reports",
      "Remediation tracking",
      "Ongoing monitoring guidance",
    ],
  },
  {
    slug: "gap-analysis", category: "audit", icon: "search",
    title: "Gap Analysis",
    tagline: "Know exactly where you stand against any standard.",
    overview: "A structured gap analysis against your target standard or regulation, producing a prioritised, costed roadmap to compliance.",
    included: [
      "Assessment against the target standard",
      "Control-by-control gap findings",
      "Risk-prioritised remediation roadmap",
      "Effort and resourcing estimates",
      "Executive summary and report",
      "Follow-up advisory",
    ],
  },
  {
    slug: "soc-2-assessment", category: "audit", icon: "clipboard",
    title: "SOC 2 Readiness Assessment",
    tagline: "Assess readiness before your SOC 2 examination.",
    overview: "A focused readiness assessment against the Trust Services Criteria to identify and close gaps before your formal SOC 2 examination.",
    included: [
      "Trust Services Criteria mapping",
      "Control design review",
      "Evidence and gap findings",
      "Remediation plan",
      "Auditor readiness review",
      "Report and recommendations",
    ],
  },

  /* ---- DPO ---- */
  {
    slug: "outsourced-dpo", category: "dpo", icon: "users",
    title: "Outsourced DPO",
    tagline: "A qualified Data Protection Officer, as a service.",
    overview: "We act as your outsourced Data Protection Officer, providing ongoing accountability, advice and regulator liaison under GDPR, UK GDPR and KVKK.",
    included: [
      "Designated DPO point of contact",
      "Ongoing compliance monitoring",
      "Advice on processing and DPIAs",
      "Regulator and data-subject liaison",
      "Staff awareness support",
      "Periodic compliance reporting",
    ],
  },
  {
    slug: "privacy-management", category: "dpo", icon: "lock",
    title: "Privacy Management",
    tagline: "Operate your privacy programme day to day.",
    overview: "We run and maintain your privacy programme — records, policies, assessments and controls — keeping your organisation continuously compliant.",
    included: [
      "Records of Processing maintenance",
      "Policy and notice lifecycle",
      "DPIA and LIA management",
      "Vendor and transfer management",
      "Breach management processes",
      "Programme metrics and reporting",
    ],
  },
  {
    slug: "dsar-handling", category: "dpo", icon: "doc",
    title: "DSAR Handling",
    tagline: "Handle data subject requests correctly and on time.",
    overview: "We design and operate your data subject access request process, ensuring lawful, complete and timely responses to individuals exercising their rights.",
    included: [
      "DSAR intake and verification process",
      "Search, collation and redaction workflow",
      "Response templates and tracking",
      "Statutory timeline management",
      "Exemptions and edge-case advice",
      "Metrics and audit trail",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function servicesByCategory(id: CategoryId): Service[] {
  return SERVICES.filter((s) => s.category === id);
}
