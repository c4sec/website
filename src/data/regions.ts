import type { Localized, Locale } from "@/i18n/config";
import type { IconName } from "@/components/Icon";

export type ServiceItem = {
  title: Localized;
  desc: Localized;
  icon: IconName;
};

export type Region = {
  code: string;          // 'tr','az','ae','de','ie'
  slug: string;          // URL segment under /[region]
  name: Localized;
  flag: string;
  city: Localized;
  status: "live" | "soon";
  locales: Locale[];     // languages offered in this market
  defaultLocale: Locale;
  partner?: Localized;   // local delivery partner, if any
  hero: { badge: Localized; title: Localized; sub: Localized };
  intro: { eyebrow: Localized; title: Localized; lead: Localized; body: Localized };
  localHeading: Localized;
  localLead: Localized;
  localServices: ServiceItem[];
  showGlobalStandards: boolean;
  contact: { email: string; phone?: string; address: Localized };
  cta: { title: Localized; sub: Localized };
};

/* ------------------------------------------------------------------ */
/*  TÜRKİYE                                                            */
/* ------------------------------------------------------------------ */
const TR: Region = {
  code: "tr",
  slug: "tr",
  name: { en: "Türkiye", tr: "Türkiye", az: "Türkiyə" },
  flag: "🇹🇷",
  city: { en: "Istanbul", tr: "İstanbul", az: "İstanbul" },
  status: "live",
  locales: ["tr", "en", "az"],
  defaultLocale: "tr",
  hero: {
    badge: { en: "Türkiye · Istanbul", tr: "Türkiye · İstanbul", az: "Türkiyə · İstanbul" },
    title: {
      en: "GRC and regulatory compliance, <em>for the Turkish market.</em>",
      tr: "GRC ve mevzuat uyumu, <em>Türkiye pazarına özel.</em>",
      az: "GRC və tənzimləmə uyğunluğu, <em>Türkiyə bazarı üçün.</em>",
    },
    sub: {
      en: "C4Sec Türkiye pairs our global methodology with deep local regulatory expertise across EPDK, BDDK, KVKK, TCMB and SPK.",
      tr: "C4Sec Türkiye, küresel metodolojimizi EPDK, BDDK, KVKK, TCMB ve SPK genelinde derin yerel mevzuat uzmanlığıyla birleştirir.",
      az: "C4Sec Türkiyə qlobal metodologiyamızı EPDK, BDDK, KVKK, TCMB və SPK üzrə dərin yerli tənzimləmə təcrübəsi ilə birləşdirir.",
    },
  },
  intro: {
    eyebrow: { en: "C4Sec Türkiye", tr: "C4Sec Türkiye", az: "C4Sec Türkiyə" },
    title: {
      en: "Global standards, Turkish regulation",
      tr: "Küresel standartlar, Türkiye mevzuatı",
      az: "Qlobal standartlar, Türkiyə tənzimləməsi",
    },
    lead: {
      en: "Our Türkiye practice combines C4Sec's international frameworks with local knowledge of EPDK, BDDK, KVKK, TCMB and SPK.",
      tr: "Türkiye uygulamamız, C4Sec'in uluslararası çerçevelerini EPDK, BDDK, KVKK, TCMB ve SPK bilgisiyle birleştirir.",
      az: "Türkiyə praktikamız C4Sec-in beynəlxalq çərçivələrini EPDK, BDDK, KVKK, TCMB və SPK bilikləri ilə birləşdirir.",
    },
    body: {
      en: "Consulting, training and audit for regulated and high-growth organisations across Türkiye.",
      tr: "Türkiye genelinde düzenlemeye tabi ve hızlı büyüyen kuruluşlara danışmanlık, eğitim ve denetim.",
      az: "Türkiyə üzrə tənzimlənən və sürətlə böyüyən təşkilatlara məsləhət, təlim və audit.",
    },
  },
  localHeading: { en: "Türkiye-specific compliance", tr: "Türkiye'ye özel uyum", az: "Türkiyəyə xas uyğunluq" },
  localLead: {
    en: "Advisory tailored to the requirements of Turkish regulators and supervisory authorities.",
    tr: "Türk düzenleyici ve denetleyici otoritelerinin gereksinimlerine göre şekillenen danışmanlık.",
    az: "Türkiyə tənzimləyici və nəzarət orqanlarının tələblərinə uyğun məsləhət.",
  },
  localServices: [
    { icon: "chart", title: { en: "EPDK Information Systems Maturity", tr: "EPDK Bilgi Sistemleri Olgunluğu", az: "EPDK İnformasiya Sistemləri Yetkinliyi" }, desc: { en: "Maturity-model assessment and advisory for energy-market IT and information-systems audit.", tr: "Enerji piyasası BT ve bilgi sistemleri denetimi için olgunluk modeli değerlendirmesi ve danışmanlığı.", az: "Enerji bazarı İT və informasiya sistemləri auditi üçün yetkinlik modeli qiymətləndirməsi." } },
    { icon: "bank", title: { en: "BDDK Information Systems", tr: "BDDK Bilgi Sistemleri", az: "BDDK İnformasiya Sistemləri" }, desc: { en: "Compliance and audit against the banking regulator's IT regulation and communiqués.", tr: "Bankacılık düzenleyicisinin BT yönetmeliği ve tebliğlerine uyum ve denetim.", az: "Bank tənzimləyicisinin İT qaydasına uyğunluq və audit." } },
    { icon: "lock", title: { en: "KVKK & DPO", tr: "KVKK & DPO", az: "KVKK & DPO" }, desc: { en: "Personal data protection compliance, VERBİS registration and outsourced data protection officer.", tr: "Kişisel verilerin korunması uyumu, VERBİS kaydı ve dış kaynaklı veri koruma görevlisi.", az: "Şəxsi məlumatların qorunması uyğunluğu, VERBİS qeydiyyatı və xarici DPO." } },
    { icon: "card", title: { en: "Payments & E-Money (TCMB)", tr: "Ödeme & E-Para (TCMB)", az: "Ödənişlər & E-Pul (TCMB)" }, desc: { en: "Information-systems compliance for payment and e-money institutions under Central Bank regulation.", tr: "Merkez Bankası düzenlemesi kapsamında ödeme ve elektronik para kuruluşları için bilgi sistemleri uyumu.", az: "Mərkəzi Bank tənzimləməsi çərçivəsində ödəniş qurumları üçün uyğunluq." } },
    { icon: "columns", title: { en: "SPK / Capital Markets", tr: "SPK / Sermaye Piyasası", az: "SPK / Kapital Bazarları" }, desc: { en: "Information-security and IT-governance advisory for capital-market institutions.", tr: "Sermaye piyasası kurumları için bilgi güvenliği ve BT yönetişimi danışmanlığı.", az: "Kapital bazarı qurumları üçün informasiya təhlükəsizliyi məsləhəti." } },
    { icon: "shield", title: { en: "ISO 27001 & Management Systems", tr: "ISO 27001 & Yönetim Sistemleri", az: "ISO 27001 & İdarəetmə Sistemləri" }, desc: { en: "ISMS, ISO 22301 and ISO 20000 design, implementation and certification readiness.", tr: "BGYS, ISO 22301 ve ISO 20000 tasarımı, uygulaması ve belgelendirme hazırlığı.", az: "İTİS, ISO 22301 və ISO 20000 dizaynı və sertifikatlaşdırma hazırlığı." } },
  ],
  showGlobalStandards: true,
  contact: {
    email: "turkiye@c4sec.com",
    phone: "+90 212 951 0 423",
    address: { en: "Istanbul, Türkiye", tr: "İstanbul, Türkiye", az: "İstanbul, Türkiyə" },
  },
  cta: {
    title: { en: "Ready to meet your regulatory obligations in Türkiye?", tr: "Türkiye'de mevzuat yükümlülüklerinizi karşılamaya hazır mısınız?", az: "Türkiyədə tənzimləmə öhdəliklərinizi qarşılamağa hazırsınız?" },
    sub: { en: "Talk to the C4Sec Türkiye team about EPDK, BDDK, KVKK, payments and international standards.", tr: "EPDK, BDDK, KVKK, ödeme sistemleri ve uluslararası standartlar için C4Sec Türkiye ekibiyle görüşün.", az: "EPDK, BDDK, KVKK və beynəlxalq standartlar üçün C4Sec Türkiyə komandası ilə danışın." },
  },
};

/* ------------------------------------------------------------------ */
/*  AZERBAIJAN                                                         */
/* ------------------------------------------------------------------ */
const AZ: Region = {
  code: "az",
  slug: "az",
  name: { en: "Azerbaijan", tr: "Azerbaycan", az: "Azərbaycan" },
  flag: "🇦🇿",
  city: { en: "Baku", tr: "Bakü", az: "Bakı" },
  status: "live",
  locales: ["az", "en", "tr"],
  defaultLocale: "az",
  hero: {
    badge: { en: "Azerbaijan · Baku", az: "Azərbaycan · Bakı", tr: "Azerbaycan · Bakü" },
    title: {
      en: "Security & compliance, <em>for the Caspian market.</em>",
      az: "Təhlükəsizlik və uyğunluq, <em>Xəzər bazarı üçün.</em>",
      tr: "Güvenlik ve uyum, <em>Hazar pazarına özel.</em>",
    },
    sub: {
      en: "C4Sec Azerbaijan brings global GRC methodology to Baku — helping banks, fintechs and public bodies meet local regulatory expectations.",
      az: "C4Sec Azərbaycan qlobal GRC metodologiyasını Bakıya gətirir — banklara, fintexlərə və dövlət qurumlarına yerli tənzimləmə tələblərini qarşılamağa kömək edir.",
      tr: "C4Sec Azerbaycan, küresel GRC metodolojisini Bakü'ye taşır.",
    },
  },
  intro: {
    eyebrow: { en: "C4Sec Azerbaijan", az: "C4Sec Azərbaycan", tr: "C4Sec Azerbaycan" },
    title: { en: "Global standards, local regulation", az: "Qlobal standartlar, yerli tənzimləmə", tr: "Küresel standartlar, yerel mevzuat" },
    lead: {
      en: "Our Azerbaijan practice aligns international frameworks with the requirements of the Central Bank (CBAR) and financial-market supervision.",
      az: "Azərbaycan praktikamız beynəlxalq çərçivələri Mərkəzi Bankın (CBAR) və maliyyə bazarına nəzarətin tələbləri ilə uzlaşdırır.",
      tr: "Azerbaycan uygulamamız uluslararası çerçeveleri Merkez Bankası (CBAR) gereksinimleriyle uyumlar.",
    },
    body: {
      en: "A regional hub for the Caucasus and Caspian market, serving regulated and high-growth organisations.",
      az: "Qafqaz və Xəzər bazarı üçün regional mərkəz; tənzimlənən və sürətlə böyüyən təşkilatlara xidmət edir.",
      tr: "Kafkasya ve Hazar pazarı için bölgesel merkez.",
    },
  },
  localHeading: { en: "Azerbaijan-specific compliance", az: "Azərbaycana xas uyğunluq", tr: "Azerbaycan'a özel uyum" },
  localLead: {
    en: "Advisory tailored to Azerbaijani regulators and supervisory authorities.",
    az: "Azərbaycan tənzimləyici və nəzarət orqanlarına uyğun məsləhət.",
    tr: "Azerbaycan düzenleyicilerine göre şekillenen danışmanlık.",
  },
  localServices: [
    { icon: "bank", title: { en: "Central Bank (CBAR) Information Security", az: "Mərkəzi Bank (CBAR) İnformasiya Təhlükəsizliyi", tr: "Merkez Bankası (CBAR) Bilgi Güvenliği" }, desc: { en: "Compliance with the Central Bank of Azerbaijan's information-security and IT requirements for financial institutions.", az: "Maliyyə qurumları üçün Azərbaycan Mərkəzi Bankının informasiya təhlükəsizliyi tələblərinə uyğunluq.", tr: "Finansal kuruluşlar için CBAR bilgi güvenliği gereksinimlerine uyum." } },
    { icon: "columns", title: { en: "Financial Market Supervision", az: "Maliyyə Bazarına Nəzarət", tr: "Finansal Piyasa Denetimi" }, desc: { en: "Advisory for banks, insurers and investment firms under Azerbaijani financial-market supervision.", az: "Banklar, sığortaçılar və investisiya şirkətləri üçün maliyyə bazarına nəzarət üzrə məsləhət.", tr: "Bankalar ve yatırım firmaları için finansal denetim danışmanlığı." } },
    { icon: "lock", title: { en: "Personal Data Protection", az: "Şəxsi Məlumatların Qorunması", tr: "Kişisel Verilerin Korunması" }, desc: { en: "Compliance with Azerbaijan's Law on Personal Data and privacy governance.", az: "Azərbaycanın Şəxsi Məlumatlar haqqında Qanununa uyğunluq və məxfilik idarəçiliyi.", tr: "Azerbaycan Kişisel Veriler Kanunu'na uyum." } },
    { icon: "building", title: { en: "Public Sector & e-Government", az: "Dövlət Sektoru & e-Hökumət", tr: "Kamu Sektörü & e-Devlet" }, desc: { en: "Information-security governance for government bodies and critical digital services.", az: "Dövlət qurumları və kritik rəqəmsal xidmətlər üçün informasiya təhlükəsizliyi idarəçiliyi.", tr: "Kamu kurumları için bilgi güvenliği yönetişimi." } },
    { icon: "shield", title: { en: "ISO 27001 & Management Systems", az: "ISO 27001 & İdarəetmə Sistemləri", tr: "ISO 27001 & Yönetim Sistemleri" }, desc: { en: "ISMS, ISO 22301 and ISO 20000 design, implementation and certification readiness.", az: "İTİS, ISO 22301 və ISO 20000 dizaynı və sertifikatlaşdırma hazırlığı.", tr: "BGYS, ISO 22301 ve ISO 20000 tasarımı ve belgelendirme hazırlığı." } },
    { icon: "pulse", title: { en: "Operational Resilience", az: "Əməliyyat Davamlılığı", tr: "Operasyonel Dayanıklılık" }, desc: { en: "Business continuity and cyber-resilience programmes for critical operations.", az: "Kritik əməliyyatlar üçün biznes davamlılığı və kiber-davamlılıq proqramları.", tr: "Kritik operasyonlar için iş sürekliliği programları." } },
  ],
  showGlobalStandards: true,
  contact: {
    email: "azerbaijan@c4sec.com",
    phone: undefined,
    address: { en: "Baku, Azerbaijan", az: "Bakı, Azərbaycan", tr: "Bakü, Azerbaycan" },
  },
  cta: {
    title: { en: "Ready to strengthen compliance in Azerbaijan?", az: "Azərbaycanda uyğunluğu gücləndirməyə hazırsınız?", tr: "Azerbaycan'da uyumu güçlendirmeye hazır mısınız?" },
    sub: { en: "Talk to the C4Sec Azerbaijan team about CBAR, data protection and international standards.", az: "CBAR, məlumatların qorunması və beynəlxalq standartlar üçün C4Sec Azərbaycan komandası ilə danışın.", tr: "CBAR, veri koruma ve uluslararası standartlar için C4Sec Azerbaycan ekibiyle görüşün." },
  },
};

/* ------------------------------------------------------------------ */
/*  DUBAI / UAE                                                        */
/* ------------------------------------------------------------------ */
const AE: Region = {
  code: "ae",
  slug: "ae",
  name: { en: "United Arab Emirates" },
  flag: "🇦🇪",
  city: { en: "Dubai" },
  status: "live",
  locales: ["en"],
  defaultLocale: "en",
  hero: {
    badge: { en: "UAE · Dubai" },
    title: { en: "GRC advisory, <em>for the Gulf's digital economy.</em>" },
    sub: { en: "C4Sec Dubai helps banks, fintechs and enterprises across the UAE and wider GCC meet local and international security and compliance obligations." },
  },
  intro: {
    eyebrow: { en: "C4Sec Dubai" },
    title: { en: "Global standards, UAE regulation" },
    lead: { en: "Our Dubai practice aligns international frameworks with UAE regulators — the Central Bank, DFSA, and national information-assurance standards." },
    body: { en: "A regional hub for the Gulf, serving financial services, government and high-growth technology organisations." },
  },
  localHeading: { en: "UAE-specific compliance" },
  localLead: { en: "Advisory tailored to UAE regulators and national standards." },
  localServices: [
    { icon: "shield", title: { en: "UAE IA / NESA Standards" }, desc: { en: "Compliance with the UAE Information Assurance Standards and national cyber-security requirements." } },
    { icon: "bank", title: { en: "Central Bank of the UAE" }, desc: { en: "Information-security and operational-resilience advisory for licensed financial institutions." } },
    { icon: "columns", title: { en: "DFSA / DIFC" }, desc: { en: "Cyber and technology-risk compliance for firms regulated in the Dubai International Financial Centre." } },
    { icon: "lock", title: { en: "UAE PDPL" }, desc: { en: "Compliance with the UAE Personal Data Protection Law and privacy governance." } },
    { icon: "pulse", title: { en: "ADHICS / Healthcare" }, desc: { en: "Information-security standard compliance for healthcare providers (ADHICS)." } },
    { icon: "shield", title: { en: "ISO 27001 & SOC 2" }, desc: { en: "ISMS design, certification readiness and SOC 2 attestation support." } },
  ],
  showGlobalStandards: true,
  contact: { email: "dubai@c4sec.com", address: { en: "Dubai, United Arab Emirates" } },
  cta: {
    title: { en: "Ready to meet UAE compliance obligations?" },
    sub: { en: "Talk to the C4Sec Dubai team about NESA, Central Bank, DFSA, PDPL and international standards." },
  },
};

/* ------------------------------------------------------------------ */
/*  GERMANY                                                            */
/* ------------------------------------------------------------------ */
const DE: Region = {
  code: "de",
  slug: "de",
  name: { en: "Germany", de: "Deutschland" },
  flag: "🇩🇪",
  city: { en: "Frankfurt" },
  status: "live",
  locales: ["en"],
  defaultLocale: "en",
  hero: {
    badge: { en: "Germany · Frankfurt" },
    title: { en: "GRC advisory, <em>for Germany's regulated industries.</em>" },
    sub: { en: "C4Sec Germany supports financial institutions, manufacturers and technology firms in meeting BSI, EU and sector-specific security requirements." },
  },
  intro: {
    eyebrow: { en: "C4Sec Germany" },
    title: { en: "Global standards, German & EU regulation" },
    lead: { en: "Our Germany practice combines international frameworks with BSI IT-Grundschutz, DORA, NIS2 and TISAX." },
    body: { en: "Serving Germany's financial, automotive and industrial sectors with consulting, training and audit." },
  },
  localHeading: { en: "Germany-specific compliance" },
  localLead: { en: "Advisory tailored to German regulators and EU directives." },
  localServices: [
    { icon: "shield", title: { en: "BSI IT-Grundschutz" }, desc: { en: "Design and implementation of ISMS aligned with the BSI IT-Grundschutz methodology." } },
    { icon: "chart", title: { en: "DORA" }, desc: { en: "Digital Operational Resilience Act readiness for financial entities and ICT providers." } },
    { icon: "server", title: { en: "NIS2 Directive" }, desc: { en: "Compliance for essential and important entities under the NIS2 cyber-security directive." } },
    { icon: "card", title: { en: "TISAX (Automotive)" }, desc: { en: "Information-security assessment and label support for the automotive supply chain." } },
    { icon: "lock", title: { en: "GDPR / BDSG" }, desc: { en: "EU GDPR and German Federal Data Protection Act compliance and DPO services." } },
    { icon: "shield", title: { en: "ISO 27001 & C5" }, desc: { en: "ISMS certification readiness and BSI C5 cloud-security attestation support." } },
  ],
  showGlobalStandards: true,
  contact: { email: "germany@c4sec.com", address: { en: "Frankfurt, Germany" } },
  cta: {
    title: { en: "Ready to meet German & EU compliance obligations?" },
    sub: { en: "Talk to the C4Sec Germany team about BSI, DORA, NIS2, TISAX and international standards." },
  },
};

/* ------------------------------------------------------------------ */
/*  IRELAND                                                            */
/* ------------------------------------------------------------------ */
const IE: Region = {
  code: "ie",
  slug: "ie",
  name: { en: "Ireland" },
  flag: "🇮🇪",
  city: { en: "Dublin" },
  status: "live",
  locales: ["en"],
  defaultLocale: "en",
  hero: {
    badge: { en: "Ireland · Dublin" },
    title: { en: "GRC advisory, <em>for Ireland's tech & finance hub.</em>" },
    sub: { en: "C4Sec Ireland helps regulated firms and high-growth technology companies meet Central Bank, EU and data-protection requirements." },
  },
  intro: {
    eyebrow: { en: "C4Sec Ireland" },
    title: { en: "Global standards, Irish & EU regulation" },
    lead: { en: "Our Ireland practice aligns international frameworks with the Central Bank of Ireland, DORA, NIS2 and GDPR under the Irish DPC." },
    body: { en: "Serving Dublin's financial-services and technology ecosystem with consulting, training and audit." },
  },
  localHeading: { en: "Ireland-specific compliance" },
  localLead: { en: "Advisory tailored to Irish regulators and EU directives." },
  localServices: [
    { icon: "bank", title: { en: "Central Bank of Ireland" }, desc: { en: "Cross-industry guidance on IT and cyber-security risk for regulated financial firms." } },
    { icon: "chart", title: { en: "DORA" }, desc: { en: "Digital Operational Resilience Act readiness for financial entities and ICT providers." } },
    { icon: "server", title: { en: "NIS2 Directive" }, desc: { en: "Compliance for essential and important entities under the NIS2 cyber-security directive." } },
    { icon: "lock", title: { en: "GDPR (Irish DPC)" }, desc: { en: "Data-protection compliance and DPO services under the Irish Data Protection Commission." } },
    { icon: "doc", title: { en: "EU AI Act Readiness" }, desc: { en: "Governance and risk assessment to prepare for the EU AI Act." } },
    { icon: "shield", title: { en: "ISO 27001 & SOC 2" }, desc: { en: "ISMS certification readiness and SOC 2 attestation support." } },
  ],
  showGlobalStandards: true,
  contact: { email: "ireland@c4sec.com", address: { en: "Dublin, Ireland" } },
  cta: {
    title: { en: "Ready to meet Irish & EU compliance obligations?" },
    sub: { en: "Talk to the C4Sec Ireland team about Central Bank guidance, DORA, NIS2, GDPR and international standards." },
  },
};

export const REGIONS: Region[] = [TR, AZ, AE, DE, IE];

// The global HQ (served at "/") offers all three fully-translated languages.
export const GLOBAL_META = {
  name: { en: "Global", tr: "Global", az: "Qlobal" } as Localized,
  flag: "🌐",
  locales: ["en", "tr", "az"] as Locale[],
  defaultLocale: "en" as Locale,
};

export function getRegion(slug: string): Region | undefined {
  return REGIONS.find((r) => r.slug === slug);
}

// Full switcher list including the global HQ (slug "" → "/").
export type RegionLink = { slug: string; name: Localized; flag: string; status: "live" | "soon" };
export const REGION_LINKS: RegionLink[] = [
  { slug: "", name: { en: "Global", tr: "Global", az: "Qlobal" }, flag: "🌐", status: "live" },
  ...REGIONS.map((r) => ({ slug: r.slug, name: r.name, flag: r.flag, status: r.status })),
];
