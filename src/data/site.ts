export const SITE = {
  name: "C4Sec",
  legalName: "Consulting4Sec",
  domain: "https://c4sec.com",
  email: "hello@c4sec.com",
  phone: "+44 7464 294371",
  hqAddress: "London, United Kingdom",
  social: {
    linkedin: "https://www.linkedin.com/company/consulting-4-sec/",
    medium: "https://consulting4sec.medium.com",
  },
};

// Frameworks shown in the trust strip on the global site.
export const FRAMEWORKS = [
  "ISO/IEC 27001",
  "ISO 22301",
  "GDPR · KVKK",
  "DORA",
  "SOC 2",
  "PCI DSS",
  "Cyber Resilience Act",
];

// Global standards grid (keys resolve in the dictionary).
export const STANDARD_KEYS = ["1", "2", "3", "4", "5", "6"] as const;

// Global sectors (keys resolve in the dictionary; icon by name).
export const SECTOR_KEYS: { key: string; icon: string }[] = [
  { key: "s1", icon: "building" },
  { key: "s2", icon: "card" },
  { key: "s3", icon: "coin" },
  { key: "s4", icon: "id" },
  { key: "s5", icon: "car" },
  { key: "s6", icon: "server" },
];
