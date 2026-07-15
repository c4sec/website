import type { IconName } from "@/components/Icon";
import type { Localized } from "@/i18n/config";

export type CategoryId = "consulting" | "training" | "audit" | "dpo";

export type ServiceCategory = {
  id: CategoryId;
  title: Localized;
  blurb: Localized;
  icon: IconName;
};

export type Service = {
  slug: string;
  category: CategoryId;
  icon: IconName;
  title: Localized;
  tagline: Localized;             // short line for menu / cards
  overview: Localized;            // intro paragraph on the detail page
  included: Localized<string[]>;  // "what's included" bullets
};

export const CATEGORIES: ServiceCategory[] = [
  {
    id: "consulting", icon: "shield",
    title: { en: "Consulting", tr: "Danışmanlık", az: "Məsləhət" },
    blurb: {
      en: "End-to-end design and implementation of management systems and compliance programmes.",
      tr: "Yönetim sistemlerinin ve uyum programlarının uçtan uca tasarımı ve uygulanması.",
      az: "İdarəetmə sistemlərinin və uyğunluq proqramlarının başdan-başa dizaynı və tətbiqi.",
    },
  },
  {
    id: "training", icon: "graduation",
    title: { en: "Training", tr: "Eğitim", az: "Təlim" },
    blurb: {
      en: "Accredited and bespoke training that builds lasting capability in your teams.",
      tr: "Ekiplerinizde kalıcı yetkinlik oluşturan akredite ve kuruma özel eğitimler.",
      az: "Komandalarınızda davamlı bacarıq formalaşdıran akkreditə olunmuş və fərdi təlimlər.",
    },
  },
  {
    id: "audit", icon: "clipboard",
    title: { en: "Audit & Assurance", tr: "Denetim ve Güvence", az: "Audit və Təminat" },
    blurb: {
      en: "Independent internal audits, supplier assessments and gap analyses.",
      tr: "Bağımsız iç denetimler, tedarikçi değerlendirmeleri ve boşluk analizleri.",
      az: "Müstəqil daxili auditlər, təchizatçı qiymətləndirmələri və boşluq analizləri.",
    },
  },
  {
    id: "dpo", icon: "lock",
    title: { en: "Data Protection Officer (DPO)", tr: "Veri Koruma Görevlisi (DPO)", az: "Məlumatların Qorunması üzrə Məsul (DPO)" },
    blurb: {
      en: "Outsourced DPO and privacy-management services that keep you continuously compliant.",
      tr: "Sizi sürekli uyumlu tutan dış kaynaklı DPO ve gizlilik yönetimi hizmetleri.",
      az: "Sizi daimi uyğun saxlayan xarici DPO və məxfilik idarəetmə xidmətləri.",
    },
  },
];

export const SERVICES: Service[] = [
  /* ---- Consulting ---- */
  {
    slug: "iso-27001-isms", category: "consulting", icon: "shield",
    title: { en: "ISO 27001 ISMS Implementation", tr: "ISO 27001 BGYS Kurulumu", az: "ISO 27001 İTİS Tətbiqi" },
    tagline: { en: "Design and certify an Information Security Management System.", tr: "Bilgi Güvenliği Yönetim Sistemi tasarlayın ve belgelendirin.", az: "İnformasiya Təhlükəsizliyi İdarəetmə Sistemi qurun və sertifikatlaşdırın." },
    overview: { en: "We design and implement an ISO/IEC 27001 Information Security Management System tailored to your organisation, from scoping and risk assessment through to certification readiness — building a living framework your teams can operate and improve.", tr: "Kapsam belirleme ve risk değerlendirmesinden belgelendirme hazırlığına kadar, kurumunuza özel bir ISO/IEC 27001 Bilgi Güvenliği Yönetim Sistemi tasarlar ve uygularız — ekiplerinizin işletip geliştirebileceği yaşayan bir çerçeve kurarız.", az: "Əhatə dairəsinin müəyyənləşdirilməsi və risk qiymətləndirməsindən sertifikatlaşdırma hazırlığına qədər təşkilatınıza uyğun ISO/IEC 27001 İnformasiya Təhlükəsizliyi İdarəetmə Sistemini dizayn edir və tətbiq edirik." },
    included: {
      en: ["Scope definition, context and interested-party analysis", "Risk assessment and Statement of Applicability (SoA)", "Policy, procedure and control documentation set", "Annex A control implementation support", "Internal audit and management review", "Certification (Stage 1 & 2) readiness and support"],
      tr: ["Kapsam tanımı, bağlam ve ilgili taraf analizi", "Risk değerlendirmesi ve Uygulanabilirlik Bildirgesi (SoA)", "Politika, prosedür ve kontrol dokümantasyon seti", "Ek A kontrol uygulama desteği", "İç denetim ve yönetim gözden geçirmesi", "Belgelendirme (Aşama 1 ve 2) hazırlığı ve desteği"],
      az: ["Əhatə dairəsinin tərifi, kontekst və maraqlı tərəf analizi", "Risk qiymətləndirməsi və Tətbiqəuyğunluq Bəyanatı (SoA)", "Siyasət, prosedur və nəzarət sənədləşmə dəsti", "Əlavə A nəzarətlərinin tətbiqi dəstəyi", "Daxili audit və rəhbərlik baxışı", "Sertifikatlaşdırma (Mərhələ 1 və 2) hazırlığı və dəstəyi"],
    },
  },
  {
    slug: "iso-22301-bcms", category: "consulting", icon: "pulse",
    title: { en: "ISO 22301 BCMS Implementation", tr: "ISO 22301 İSYS Kurulumu", az: "ISO 22301 BDİS Tətbiqi" },
    tagline: { en: "Build resilience with a Business Continuity Management System.", tr: "İş Sürekliliği Yönetim Sistemi ile dayanıklılık kurun.", az: "Biznes Davamlılığı İdarəetmə Sistemi ilə davamlılıq qurun." },
    overview: { en: "We help you establish an ISO 22301 Business Continuity Management System — from business impact analysis to tested continuity and recovery plans — so your organisation can withstand and recover from disruption.", tr: "İş etki analizinden test edilmiş süreklilik ve kurtarma planlarına kadar bir ISO 22301 İş Sürekliliği Yönetim Sistemi kurmanıza yardımcı oluruz; böylece kurumunuz kesintilere dayanabilir ve toparlanabilir.", az: "Biznes təsir analizindən sınaqdan keçirilmiş davamlılıq və bərpa planlarına qədər ISO 22301 Biznes Davamlılığı İdarəetmə Sistemi qurmağa kömək edirik." },
    included: {
      en: ["Business Impact Analysis (BIA)", "Continuity strategy and risk treatment", "Business continuity and recovery plans", "Exercise and testing programme", "Internal audit and management review", "Certification readiness and support"],
      tr: ["İş Etki Analizi (BIA)", "Süreklilik stratejisi ve risk işleme", "İş sürekliliği ve kurtarma planları", "Tatbikat ve test programı", "İç denetim ve yönetim gözden geçirmesi", "Belgelendirme hazırlığı ve desteği"],
      az: ["Biznes Təsir Analizi (BIA)", "Davamlılıq strategiyası və risk müalicəsi", "Biznes davamlılığı və bərpa planları", "Məşq və sınaq proqramı", "Daxili audit və rəhbərlik baxışı", "Sertifikatlaşdırma hazırlığı və dəstəyi"],
    },
  },
  {
    slug: "data-protection-privacy", category: "consulting", icon: "lock",
    title: { en: "Data Protection & Privacy", tr: "Veri Koruma ve Gizlilik", az: "Məlumatların Qorunması və Məxfilik" },
    tagline: { en: "GDPR, UK GDPR and KVKK compliance by design.", tr: "Tasarımdan itibaren GDPR, UK GDPR ve KVKK uyumu.", az: "Dizayndan etibarən GDPR, UK GDPR və KVKK uyğunluğu." },
    overview: { en: "We bring your organisation into compliance with GDPR, UK GDPR and KVKK — mapping personal data, closing gaps and embedding privacy-by-design across your processes and systems.", tr: "Kişisel verileri haritalandırarak, boşlukları kapatarak ve tasarımdan gizliliği süreçlerinize yerleştirerek kurumunuzu GDPR, UK GDPR ve KVKK'ya uyumlu hale getiririz.", az: "Şəxsi məlumatları xəritələşdirərək, boşluqları bağlayaraq və dizayndan məxfiliyi proseslərinizə yerləşdirərək təşkilatınızı GDPR, UK GDPR və KVKK-ya uyğunlaşdırırıq." },
    included: {
      en: ["Data mapping and Records of Processing (RoPA)", "Gap assessment against GDPR / UK GDPR / KVKK", "Privacy notices, policies and consent flows", "Data Protection Impact Assessments (DPIA)", "Data subject request (DSAR) processes", "Third-party and international transfer safeguards"],
      tr: ["Veri haritalama ve İşleme Kayıtları (RoPA)", "GDPR / UK GDPR / KVKK karşısında boşluk değerlendirmesi", "Aydınlatma metinleri, politikalar ve rıza akışları", "Veri Koruma Etki Değerlendirmeleri (DPIA)", "Veri sahibi başvuru (DSAR) süreçleri", "Üçüncü taraf ve yurt dışı aktarım güvenceleri"],
      az: ["Məlumat xəritələşdirməsi və Emal Qeydləri (RoPA)", "GDPR / UK GDPR / KVKK üzrə boşluq qiymətləndirməsi", "Məxfilik bildirişləri, siyasətlər və razılıq axınları", "Məlumatların Qorunması Təsir Qiymətləndirmələri (DPIA)", "Məlumat subyekti sorğusu (DSAR) prosesləri", "Üçüncü tərəf və beynəlxalq ötürmə təminatları"],
    },
  },
  {
    slug: "cyber-security", category: "consulting", icon: "shield",
    title: { en: "Cyber Security", tr: "Siber Güvenlik", az: "Kibertəhlükəsizlik" },
    tagline: { en: "Security governance, controls and technical assurance.", tr: "Güvenlik yönetişimi, kontroller ve teknik güvence.", az: "Təhlükəsizlik idarəçiliyi, nəzarətlər və texniki təminat." },
    overview: { en: "We strengthen your cyber-security posture with governance, control frameworks and technical assurance aligned to recognised standards and your threat landscape.", tr: "Tanınan standartlara ve tehdit ortamınıza uygun yönetişim, kontrol çerçeveleri ve teknik güvence ile siber güvenlik duruşunuzu güçlendiririz.", az: "Tanınmış standartlara və təhlükə mühitinizə uyğun idarəçilik, nəzarət çərçivələri və texniki təminatla kibertəhlükəsizlik duruşunuzu gücləndiririk." },
    included: {
      en: ["Security posture and maturity assessment", "Control framework selection and design", "Security policy and standard development", "Vulnerability and configuration review", "Incident response readiness", "Security metrics and reporting"],
      tr: ["Güvenlik duruşu ve olgunluk değerlendirmesi", "Kontrol çerçevesi seçimi ve tasarımı", "Güvenlik politikası ve standardı geliştirme", "Zafiyet ve yapılandırma gözden geçirmesi", "Olay müdahale hazırlığı", "Güvenlik metrikleri ve raporlama"],
      az: ["Təhlükəsizlik duruşu və yetkinlik qiymətləndirməsi", "Nəzarət çərçivəsinin seçimi və dizaynı", "Təhlükəsizlik siyasəti və standartının hazırlanması", "Zəiflik və konfiqurasiya baxışı", "Hadisəyə cavab hazırlığı", "Təhlükəsizlik metrikləri və hesabatlıq"],
    },
  },
  {
    slug: "payment-security-pci-dss", category: "consulting", icon: "card",
    title: { en: "Payment Security (PCI DSS)", tr: "Ödeme Güvenliği (PCI DSS)", az: "Ödəniş Təhlükəsizliyi (PCI DSS)" },
    tagline: { en: "Achieve and maintain PCI DSS compliance.", tr: "PCI DSS uyumunu sağlayın ve sürdürün.", az: "PCI DSS uyğunluğuna nail olun və qoruyun." },
    overview: { en: "We guide payment and merchant environments to PCI DSS compliance — scoping the cardholder data environment, closing control gaps and preparing for assessment.", tr: "Kart hamili veri ortamını kapsamlandırarak, kontrol boşluklarını kapatarak ve değerlendirmeye hazırlayarak ödeme ve üye işyeri ortamlarını PCI DSS uyumuna yönlendiririz.", az: "Kart sahibi məlumat mühitini əhatələyərək, nəzarət boşluqlarını bağlayaraq və qiymətləndirməyə hazırlayaraq ödəniş və ticarət mühitlərini PCI DSS uyğunluğuna yönləndiririk." },
    included: {
      en: ["Cardholder data environment (CDE) scoping", "Gap analysis against PCI DSS", "Segmentation and control design", "Policy and evidence preparation", "SAQ / ROC readiness", "Remediation support"],
      tr: ["Kart hamili veri ortamı (CDE) kapsamlandırma", "PCI DSS karşısında boşluk analizi", "Segmentasyon ve kontrol tasarımı", "Politika ve kanıt hazırlığı", "SAQ / ROC hazırlığı", "İyileştirme desteği"],
      az: ["Kart sahibi məlumat mühiti (CDE) əhatələnməsi", "PCI DSS üzrə boşluq analizi", "Seqmentasiya və nəzarət dizaynı", "Siyasət və sübut hazırlığı", "SAQ / ROC hazırlığı", "Düzəliş dəstəyi"],
    },
  },
  {
    slug: "it-service-management", category: "consulting", icon: "server",
    title: { en: "IT Service Management (ISO 20000)", tr: "BT Hizmet Yönetimi (ISO 20000)", az: "İT Xidmət İdarəetməsi (ISO 20000)" },
    tagline: { en: "Mature IT service management with ISO 20000 / ITIL.", tr: "ISO 20000 / ITIL ile BT hizmet yönetiminizi olgunlaştırın.", az: "ISO 20000 / ITIL ilə İT xidmət idarəetməsini yetkinləşdirin." },
    overview: { en: "We help you implement an ISO/IEC 20000 service management system aligned to ITIL good practice, improving the reliability and quality of your IT services.", tr: "ITIL iyi uygulamalarına uygun bir ISO/IEC 20000 hizmet yönetim sistemi kurmanıza yardımcı olarak BT hizmetlerinizin güvenilirliğini ve kalitesini artırırız.", az: "ITIL yaxşı təcrübəsinə uyğun ISO/IEC 20000 xidmət idarəetmə sistemi qurmağa kömək edərək İT xidmətlərinizin etibarlılığını və keyfiyyətini artırırıq." },
    included: {
      en: ["Service management system scoping", "Process design (incident, change, problem, etc.)", "SLA and service catalogue definition", "Documentation and evidence", "Internal audit and review", "Certification readiness"],
      tr: ["Hizmet yönetim sistemi kapsamlandırma", "Süreç tasarımı (olay, değişiklik, problem vb.)", "SLA ve hizmet kataloğu tanımı", "Dokümantasyon ve kanıt", "İç denetim ve gözden geçirme", "Belgelendirme hazırlığı"],
      az: ["Xidmət idarəetmə sisteminin əhatələnməsi", "Proses dizaynı (hadisə, dəyişiklik, problem və s.)", "SLA və xidmət kataloqunun tərifi", "Sənədləşmə və sübut", "Daxili audit və baxış", "Sertifikatlaşdırma hazırlığı"],
    },
  },
  {
    slug: "dora-readiness", category: "consulting", icon: "chart",
    title: { en: "DORA Readiness", tr: "DORA Hazırlığı", az: "DORA Hazırlığı" },
    tagline: { en: "Digital Operational Resilience Act for financial entities.", tr: "Finansal kuruluşlar için Dijital Operasyonel Dayanıklılık Yasası.", az: "Maliyyə qurumları üçün Rəqəmsal Əməliyyat Davamlılığı Aktı." },
    overview: { en: "We prepare financial entities and their ICT providers for the EU Digital Operational Resilience Act — assessing gaps across ICT risk, incident reporting, resilience testing and third-party risk.", tr: "BİT riski, olay raporlama, dayanıklılık testi ve üçüncü taraf riski genelinde boşlukları değerlendirerek finansal kuruluşları ve BİT sağlayıcılarını AB Dijital Operasyonel Dayanıklılık Yasası'na hazırlarız.", az: "İKT riski, hadisə hesabatı, davamlılıq sınağı və üçüncü tərəf riski üzrə boşluqları qiymətləndirərək maliyyə qurumlarını və İKT provayderlərini Aİ Rəqəmsal Əməliyyat Davamlılığı Aktına hazırlayırıq." },
    included: {
      en: ["DORA gap assessment", "ICT risk management framework", "ICT incident classification and reporting", "Digital operational resilience testing", "Third-party ICT risk and register of information", "Board reporting and governance"],
      tr: ["DORA boşluk değerlendirmesi", "BİT risk yönetim çerçevesi", "BİT olay sınıflandırma ve raporlama", "Dijital operasyonel dayanıklılık testi", "Üçüncü taraf BİT riski ve bilgi kaydı", "Yönetim kurulu raporlaması ve yönetişim"],
      az: ["DORA boşluq qiymətləndirməsi", "İKT risk idarəetmə çərçivəsi", "İKT hadisələrinin təsnifatı və hesabatı", "Rəqəmsal əməliyyat davamlılığı sınağı", "Üçüncü tərəf İKT riski və məlumat reyestri", "İdarə heyətinə hesabatlıq və idarəçilik"],
    },
  },
  {
    slug: "soc-2-readiness", category: "consulting", icon: "clipboard",
    title: { en: "SOC 2 Readiness", tr: "SOC 2 Hazırlığı", az: "SOC 2 Hazırlığı" },
    tagline: { en: "Trust Services Criteria readiness and attestation support.", tr: "Trust Services Criteria hazırlığı ve attestasyon desteği.", az: "Trust Services Criteria hazırlığı və attestasiya dəstəyi." },
    overview: { en: "We prepare technology and service organisations for SOC 2 — mapping controls to the Trust Services Criteria and readying you for a smooth Type I or Type II examination.", tr: "Kontrolleri Trust Services Criteria ile eşleştirerek ve sizi sorunsuz bir Type I veya Type II incelemesine hazırlayarak teknoloji ve hizmet kuruluşlarını SOC 2'ye hazırlarız.", az: "Nəzarətləri Trust Services Criteria ilə uyğunlaşdıraraq və sizi rahat Type I və ya Type II yoxlamasına hazırlayaraq texnologiya və xidmət təşkilatlarını SOC 2-yə hazırlayırıq." },
    included: {
      en: ["Trust Services Criteria scoping", "Control gap assessment", "Policy and control implementation", "Evidence collection and readiness review", "Auditor liaison and coordination", "Continuous monitoring guidance"],
      tr: ["Trust Services Criteria kapsamlandırma", "Kontrol boşluğu değerlendirmesi", "Politika ve kontrol uygulaması", "Kanıt toplama ve hazırlık gözden geçirmesi", "Denetçi irtibatı ve koordinasyon", "Sürekli izleme rehberliği"],
      az: ["Trust Services Criteria əhatələnməsi", "Nəzarət boşluğu qiymətləndirməsi", "Siyasət və nəzarətin tətbiqi", "Sübut toplanması və hazırlıq baxışı", "Auditorla əlaqə və koordinasiya", "Davamlı monitorinq təlimatı"],
    },
  },
  {
    slug: "cyber-resilience-act", category: "consulting", icon: "doc",
    title: { en: "Cyber Resilience Act", tr: "Cyber Resilience Act", az: "Cyber Resilience Act" },
    tagline: { en: "Product security obligations for digital products in the EU.", tr: "AB'deki dijital ürünler için ürün güvenliği yükümlülükleri.", az: "Aİ-də rəqəmsal məhsullar üçün məhsul təhlükəsizliyi öhdəlikləri." },
    overview: { en: "We help manufacturers and vendors of products with digital elements prepare for the EU Cyber Resilience Act — from secure development to vulnerability handling and conformity.", tr: "Güvenli geliştirmeden zafiyet yönetimine ve uygunluğa kadar, dijital unsurlar içeren ürünlerin üreticilerini ve satıcılarını AB Cyber Resilience Act'e hazırlarız.", az: "Təhlükəsiz inkişafdan zəifliklərin idarə edilməsinə və uyğunluğa qədər rəqəmsal elementli məhsulların istehsalçılarını və satıcılarını Aİ Cyber Resilience Act-a hazırlayırıq." },
    included: {
      en: ["CRA applicability and product classification", "Secure development lifecycle assessment", "Vulnerability handling and disclosure processes", "Technical documentation and conformity", "Post-market monitoring", "CE-marking readiness"],
      tr: ["CRA uygulanabilirliği ve ürün sınıflandırması", "Güvenli geliştirme yaşam döngüsü değerlendirmesi", "Zafiyet yönetimi ve açıklama süreçleri", "Teknik dokümantasyon ve uygunluk", "Piyasaya arz sonrası izleme", "CE işareti hazırlığı"],
      az: ["CRA tətbiq oluna bilməsi və məhsul təsnifatı", "Təhlükəsiz inkişaf həyat dövrünün qiymətləndirməsi", "Zəifliklərin idarə edilməsi və açıqlama prosesləri", "Texniki sənədləşmə və uyğunluq", "Bazara çıxarışdan sonrakı monitorinq", "CE-işarələmə hazırlığı"],
    },
  },
  {
    slug: "it-governance", category: "consulting", icon: "columns",
    title: { en: "IT Governance", tr: "BT Yönetişimi", az: "İT İdarəçiliyi" },
    tagline: { en: "Best-practice IT governance aligned to COBIT.", tr: "COBIT'e uygun en iyi uygulama BT yönetişimi.", az: "COBIT-ə uyğun ən yaxşı təcrübə İT idarəçiliyi." },
    overview: { en: "We establish IT governance structures aligned to COBIT and recognised best practice, connecting technology decisions to business objectives and risk appetite.", tr: "Teknoloji kararlarını iş hedefleri ve risk iştahıyla ilişkilendirerek COBIT'e ve tanınan en iyi uygulamalara uygun BT yönetişim yapıları kurarız.", az: "Texnologiya qərarlarını biznes məqsədləri və risk iştahası ilə əlaqələndirərək COBIT-ə və tanınmış ən yaxşı təcrübəyə uyğun İT idarəçilik strukturları qururuq." },
    included: {
      en: ["Governance framework design", "Roles, responsibilities and RACI", "IT risk and control alignment", "Policy architecture", "Performance and value metrics", "Board and committee reporting"],
      tr: ["Yönetişim çerçevesi tasarımı", "Roller, sorumluluklar ve RACI", "BT risk ve kontrol uyumu", "Politika mimarisi", "Performans ve değer metrikleri", "Yönetim kurulu ve komite raporlaması"],
      az: ["İdarəçilik çərçivəsinin dizaynı", "Rollar, məsuliyyətlər və RACI", "İT risk və nəzarət uyğunluğu", "Siyasət arxitekturası", "Performans və dəyər metrikləri", "İdarə heyəti və komitə hesabatlığı"],
    },
  },

  /* ---- Training ---- */
  {
    slug: "information-security-training", category: "training", icon: "shield",
    title: { en: "Information Security (ISO 27001) Training", tr: "Bilgi Güvenliği (ISO 27001) Eğitimi", az: "İnformasiya Təhlükəsizliyi (ISO 27001) Təlimi" },
    tagline: { en: "Build ISO 27001 capability across your teams.", tr: "Ekiplerinizde ISO 27001 yetkinliği oluşturun.", az: "Komandalarınızda ISO 27001 bacarığı formalaşdırın." },
    overview: { en: "Practical ISO 27001 training — from awareness to internal auditor level — that equips your teams to build, run and improve your ISMS.", tr: "Farkındalıktan iç denetçi seviyesine kadar, ekiplerinizi BGYS'nizi kurmaya, işletmeye ve geliştirmeye hazırlayan pratik ISO 27001 eğitimi.", az: "Məlumatlılıqdan daxili auditor səviyyəsinə qədər komandalarınızı İTİS-i qurmağa, işlətməyə və təkmilləşdirməyə hazırlayan praktiki ISO 27001 təlimi." },
    included: {
      en: ["ISO 27001 foundation and awareness", "Risk assessment workshops", "Internal auditor training", "Role-based control training", "Tailored, on-site or remote delivery", "Assessment and certificates of completion"],
      tr: ["ISO 27001 temel ve farkındalık", "Risk değerlendirme atölyeleri", "İç denetçi eğitimi", "Role dayalı kontrol eğitimi", "Kuruma özel, yerinde veya uzaktan sunum", "Değerlendirme ve katılım sertifikaları"],
      az: ["ISO 27001 əsas və məlumatlılıq", "Risk qiymətləndirmə seminarları", "Daxili auditor təlimi", "Rola əsaslanan nəzarət təlimi", "Fərdi, yerində və ya uzaqdan təqdimat", "Qiymətləndirmə və iştirak sertifikatları"],
    },
  },
  {
    slug: "business-continuity-training", category: "training", icon: "pulse",
    title: { en: "Business Continuity (ISO 22301) Training", tr: "İş Sürekliliği (ISO 22301) Eğitimi", az: "Biznes Davamlılığı (ISO 22301) Təlimi" },
    tagline: { en: "Prepare your people to respond and recover.", tr: "Ekiplerinizi müdahale ve toparlanmaya hazırlayın.", az: "Komandalarınızı cavab verməyə və bərpaya hazırlayın." },
    overview: { en: "Business continuity training covering ISO 22301 fundamentals, BIA, plan development and exercising, so your teams can respond effectively to disruption.", tr: "ISO 22301 temelleri, BIA, plan geliştirme ve tatbikatı kapsayan, ekiplerinizin kesintilere etkili yanıt vermesini sağlayan iş sürekliliği eğitimi.", az: "ISO 22301 əsaslarını, BIA-nı, plan hazırlanmasını və məşqi əhatə edən, komandalarınızın pozulmaya effektiv cavab verməsini təmin edən biznes davamlılığı təlimi." },
    included: {
      en: ["ISO 22301 fundamentals", "Business impact analysis workshops", "Plan development and roles", "Exercise and simulation facilitation", "Internal auditor training", "Certificates of completion"],
      tr: ["ISO 22301 temelleri", "İş etki analizi atölyeleri", "Plan geliştirme ve roller", "Tatbikat ve simülasyon kolaylaştırma", "İç denetçi eğitimi", "Katılım sertifikaları"],
      az: ["ISO 22301 əsasları", "Biznes təsir analizi seminarları", "Plan hazırlanması və rollar", "Məşq və simulyasiyanın idarə edilməsi", "Daxili auditor təlimi", "İştirak sertifikatları"],
    },
  },
  {
    slug: "data-protection-training", category: "training", icon: "lock",
    title: { en: "Data Protection & Privacy Training", tr: "Veri Koruma ve Gizlilik Eğitimi", az: "Məlumatların Qorunması və Məxfilik Təlimi" },
    tagline: { en: "GDPR, UK GDPR and KVKK awareness and role-based training.", tr: "GDPR, UK GDPR ve KVKK farkındalık ve role dayalı eğitimi.", az: "GDPR, UK GDPR və KVKK məlumatlılıq və rola əsaslanan təlim." },
    overview: { en: "Data-protection training for all staff levels — from organisation-wide awareness to specialist privacy and DPO-support training.", tr: "Kurum geneli farkındalıktan uzman gizlilik ve DPO-destek eğitimine kadar tüm personel seviyeleri için veri koruma eğitimi.", az: "Təşkilat üzrə məlumatlılıqdan mütəxəssis məxfilik və DPO-dəstək təliminə qədər bütün işçi səviyyələri üçün məlumatların qorunması təlimi." },
    included: {
      en: ["Organisation-wide privacy awareness", "Role-based data-protection training", "DPIA and records workshops", "DSAR handling training", "Sector-specific scenarios", "Certificates of completion"],
      tr: ["Kurum geneli gizlilik farkındalığı", "Role dayalı veri koruma eğitimi", "DPIA ve kayıt atölyeleri", "DSAR yönetim eğitimi", "Sektöre özel senaryolar", "Katılım sertifikaları"],
      az: ["Təşkilat üzrə məxfilik məlumatlılığı", "Rola əsaslanan məlumat qorunması təlimi", "DPIA və qeyd seminarları", "DSAR idarəetmə təlimi", "Sektora xas ssenarilər", "İştirak sertifikatları"],
    },
  },
  {
    slug: "grc-training", category: "training", icon: "book",
    title: { en: "Governance, Risk & Compliance Training", tr: "Yönetişim, Risk ve Uyum Eğitimi", az: "İdarəetmə, Risk və Uyğunluq Təlimi" },
    tagline: { en: "GRC fundamentals for teams and leaders.", tr: "Ekipler ve liderler için GRC temelleri.", az: "Komandalar və liderlər üçün GRC əsasları." },
    overview: { en: "GRC training that builds a shared language and capability across governance, risk management and compliance for both practitioners and leadership.", tr: "Hem uygulayıcılar hem de yönetim için yönetişim, risk yönetimi ve uyum genelinde ortak bir dil ve yetkinlik oluşturan GRC eğitimi.", az: "Həm praktiklər, həm də rəhbərlik üçün idarəetmə, risk idarəetməsi və uyğunluq üzrə ortaq dil və bacarıq formalaşdıran GRC təlimi." },
    included: {
      en: ["GRC fundamentals", "Risk management methods", "Control frameworks overview", "Compliance monitoring and reporting", "Board and executive briefings", "Certificates of completion"],
      tr: ["GRC temelleri", "Risk yönetimi yöntemleri", "Kontrol çerçevelerine genel bakış", "Uyum izleme ve raporlama", "Yönetim kurulu ve üst yönetim brifingleri", "Katılım sertifikaları"],
      az: ["GRC əsasları", "Risk idarəetmə metodları", "Nəzarət çərçivələrinə ümumi baxış", "Uyğunluq monitorinqi və hesabatlıq", "İdarə heyəti və icraçı brifinqləri", "İştirak sertifikatları"],
    },
  },
  {
    slug: "security-awareness-training", category: "training", icon: "graduation",
    title: { en: "Security Awareness Training", tr: "Güvenlik Farkındalığı Eğitimi", az: "Təhlükəsizlik Məlumatlılığı Təlimi" },
    tagline: { en: "Reduce human risk with engaging awareness programmes.", tr: "İlgi çekici farkındalık programlarıyla insan riskini azaltın.", az: "Cəlbedici məlumatlılıq proqramları ilə insan riskini azaldın." },
    overview: { en: "Ongoing security-awareness programmes — including phishing simulations — that build a security-conscious culture and reduce human-factor risk.", tr: "Oltalama simülasyonları dahil, güvenlik bilincine sahip bir kültür oluşturan ve insan faktörü riskini azaltan sürekli güvenlik farkındalığı programları.", az: "Fişinq simulyasiyaları daxil olmaqla, təhlükəsizlik şüurlu mədəniyyət formalaşdıran və insan amili riskini azaldan davamlı təhlükəsizlik məlumatlılığı proqramları." },
    included: {
      en: ["Awareness programme design", "Phishing simulation campaigns", "Engaging, localised content", "Role and risk-based modules", "Metrics and reporting", "Continuous reinforcement"],
      tr: ["Farkındalık programı tasarımı", "Oltalama simülasyon kampanyaları", "İlgi çekici, yerelleştirilmiş içerik", "Rol ve riske dayalı modüller", "Metrikler ve raporlama", "Sürekli pekiştirme"],
      az: ["Məlumatlılıq proqramının dizaynı", "Fişinq simulyasiya kampaniyaları", "Cəlbedici, yerliləşdirilmiş məzmun", "Rol və riskə əsaslanan modullar", "Metriklər və hesabatlıq", "Davamlı möhkəmləndirmə"],
    },
  },

  /* ---- Audit & Assurance ---- */
  {
    slug: "internal-audit", category: "audit", icon: "clipboard",
    title: { en: "Internal Audit", tr: "İç Denetim", az: "Daxili Audit" },
    tagline: { en: "Independent internal audits of your management systems.", tr: "Yönetim sistemlerinizin bağımsız iç denetimleri.", az: "İdarəetmə sistemlərinizin müstəqil daxili auditləri." },
    overview: { en: "Independent internal audits against ISO 27001, ISO 22301, ISO 20000 and other standards — giving your leadership evidence-based assurance and a clear improvement path.", tr: "ISO 27001, ISO 22301, ISO 20000 ve diğer standartlara karşı bağımsız iç denetimler — liderliğinize kanıta dayalı güvence ve net bir iyileştirme yolu sunar.", az: "ISO 27001, ISO 22301, ISO 20000 və digər standartlara qarşı müstəqil daxili auditlər — rəhbərliyinizə sübuta əsaslanan təminat və aydın təkmilləşdirmə yolu verir." },
    included: {
      en: ["Audit programme and scoping", "On-site or remote fieldwork", "Findings and non-conformity reports", "Corrective action guidance", "Management review inputs", "Certification-cycle support"],
      tr: ["Denetim programı ve kapsamlandırma", "Yerinde veya uzaktan saha çalışması", "Bulgu ve uygunsuzluk raporları", "Düzeltici faaliyet rehberliği", "Yönetim gözden geçirme girdileri", "Belgelendirme döngüsü desteği"],
      az: ["Audit proqramı və əhatələnmə", "Yerində və ya uzaqdan sahə işi", "Tapıntılar və uyğunsuzluq hesabatları", "Düzəldici tədbir təlimatı", "Rəhbərlik baxışı girişləri", "Sertifikatlaşdırma dövrü dəstəyi"],
    },
  },
  {
    slug: "supplier-audit", category: "audit", icon: "users",
    title: { en: "Supplier Audit", tr: "Tedarikçi Denetimi", az: "Təchizatçı Auditi" },
    tagline: { en: "Third-party and supply-chain assurance.", tr: "Üçüncü taraf ve tedarik zinciri güvencesi.", az: "Üçüncü tərəf və təchizat zənciri təminatı." },
    overview: { en: "We assess your critical suppliers and third parties against your security and compliance requirements, giving you assurance over your supply chain.", tr: "Kritik tedarikçilerinizi ve üçüncü taraflarınızı güvenlik ve uyum gereksinimlerinize karşı değerlendirerek tedarik zinciriniz üzerinde güvence sağlarız.", az: "Kritik təchizatçılarınızı və üçüncü tərəfləri təhlükəsizlik və uyğunluq tələblərinizə qarşı qiymətləndirərək təchizat zənciriniz üzərində təminat veririk." },
    included: {
      en: ["Supplier risk tiering", "Assessment criteria and questionnaires", "On-site or remote supplier audits", "Findings and risk reports", "Remediation tracking", "Ongoing monitoring guidance"],
      tr: ["Tedarikçi risk katmanlaması", "Değerlendirme kriterleri ve anketler", "Yerinde veya uzaktan tedarikçi denetimleri", "Bulgu ve risk raporları", "İyileştirme takibi", "Sürekli izleme rehberliği"],
      az: ["Təchizatçı risk təbəqələşdirməsi", "Qiymətləndirmə meyarları və sorğular", "Yerində və ya uzaqdan təchizatçı auditləri", "Tapıntılar və risk hesabatları", "Düzəlişlərin izlənməsi", "Davamlı monitorinq təlimatı"],
    },
  },
  {
    slug: "gap-analysis", category: "audit", icon: "search",
    title: { en: "Gap Analysis", tr: "Boşluk Analizi", az: "Boşluq Analizi" },
    tagline: { en: "Know exactly where you stand against any standard.", tr: "Herhangi bir standart karşısında tam olarak nerede olduğunuzu bilin.", az: "İstənilən standart qarşısında dəqiq mövqeyinizi bilin." },
    overview: { en: "A structured gap analysis against your target standard or regulation, producing a prioritised, costed roadmap to compliance.", tr: "Hedef standardınız veya mevzuatınız karşısında yapılandırılmış bir boşluk analizi; uyum için önceliklendirilmiş ve maliyetlendirilmiş bir yol haritası üretir.", az: "Hədəf standartınız və ya tənzimləməniz qarşısında strukturlaşdırılmış boşluq analizi; uyğunluq üçün prioritetləşdirilmiş və qiymətləndirilmiş yol xəritəsi hazırlayır." },
    included: {
      en: ["Assessment against the target standard", "Control-by-control gap findings", "Risk-prioritised remediation roadmap", "Effort and resourcing estimates", "Executive summary and report", "Follow-up advisory"],
      tr: ["Hedef standarda karşı değerlendirme", "Kontrol bazında boşluk bulguları", "Riske göre önceliklendirilmiş iyileştirme yol haritası", "Efor ve kaynak tahminleri", "Yönetici özeti ve rapor", "Takip danışmanlığı"],
      az: ["Hədəf standarta qarşı qiymətləndirmə", "Nəzarət-üzrə boşluq tapıntıları", "Riskə görə prioritetləşdirilmiş düzəliş yol xəritəsi", "Səy və resurs təxminləri", "İcraçı xülasəsi və hesabat", "İzləmə məsləhəti"],
    },
  },
  {
    slug: "soc-2-assessment", category: "audit", icon: "clipboard",
    title: { en: "SOC 2 Readiness Assessment", tr: "SOC 2 Hazırlık Değerlendirmesi", az: "SOC 2 Hazırlıq Qiymətləndirməsi" },
    tagline: { en: "Assess readiness before your SOC 2 examination.", tr: "SOC 2 incelemenizden önce hazırlığı değerlendirin.", az: "SOC 2 yoxlamanızdan əvvəl hazırlığı qiymətləndirin." },
    overview: { en: "A focused readiness assessment against the Trust Services Criteria to identify and close gaps before your formal SOC 2 examination.", tr: "Resmi SOC 2 incelemenizden önce boşlukları belirlemek ve kapatmak için Trust Services Criteria karşısında odaklı bir hazırlık değerlendirmesi.", az: "Rəsmi SOC 2 yoxlamanızdan əvvəl boşluqları müəyyən etmək və bağlamaq üçün Trust Services Criteria qarşısında fokuslanmış hazırlıq qiymətləndirməsi." },
    included: {
      en: ["Trust Services Criteria mapping", "Control design review", "Evidence and gap findings", "Remediation plan", "Auditor readiness review", "Report and recommendations"],
      tr: ["Trust Services Criteria eşleştirmesi", "Kontrol tasarımı gözden geçirmesi", "Kanıt ve boşluk bulguları", "İyileştirme planı", "Denetçi hazırlık gözden geçirmesi", "Rapor ve öneriler"],
      az: ["Trust Services Criteria uyğunlaşdırması", "Nəzarət dizaynı baxışı", "Sübut və boşluq tapıntıları", "Düzəliş planı", "Auditor hazırlıq baxışı", "Hesabat və tövsiyələr"],
    },
  },

  /* ---- DPO ---- */
  {
    slug: "outsourced-dpo", category: "dpo", icon: "users",
    title: { en: "Outsourced DPO", tr: "Dış Kaynaklı DPO", az: "Xarici DPO" },
    tagline: { en: "A qualified Data Protection Officer, as a service.", tr: "Hizmet olarak nitelikli bir Veri Koruma Görevlisi.", az: "Xidmət olaraq ixtisaslı Məlumatların Qorunması üzrə Məsul." },
    overview: { en: "We act as your outsourced Data Protection Officer, providing ongoing accountability, advice and regulator liaison under GDPR, UK GDPR and KVKK.", tr: "GDPR, UK GDPR ve KVKK kapsamında sürekli sorumluluk, danışmanlık ve düzenleyici irtibatı sağlayarak dış kaynaklı Veri Koruma Görevliniz olarak hareket ederiz.", az: "GDPR, UK GDPR və KVKK çərçivəsində davamlı məsuliyyət, məsləhət və tənzimləyici ilə əlaqə təmin edərək xarici Məlumatların Qorunması üzrə Məsulunuz kimi çıxış edirik." },
    included: {
      en: ["Designated DPO point of contact", "Ongoing compliance monitoring", "Advice on processing and DPIAs", "Regulator and data-subject liaison", "Staff awareness support", "Periodic compliance reporting"],
      tr: ["Belirlenmiş DPO iletişim noktası", "Sürekli uyum izleme", "İşleme ve DPIA konusunda danışmanlık", "Düzenleyici ve veri sahibi irtibatı", "Personel farkındalık desteği", "Periyodik uyum raporlaması"],
      az: ["Təyin edilmiş DPO əlaqə nöqtəsi", "Davamlı uyğunluq monitorinqi", "Emal və DPIA üzrə məsləhət", "Tənzimləyici və məlumat subyekti ilə əlaqə", "İşçi məlumatlılığı dəstəyi", "Dövri uyğunluq hesabatı"],
    },
  },
  {
    slug: "privacy-management", category: "dpo", icon: "lock",
    title: { en: "Privacy Management", tr: "Gizlilik Yönetimi", az: "Məxfilik İdarəetməsi" },
    tagline: { en: "Operate your privacy programme day to day.", tr: "Gizlilik programınızı günden güne işletin.", az: "Məxfilik proqramınızı gündəlik idarə edin." },
    overview: { en: "We run and maintain your privacy programme — records, policies, assessments and controls — keeping your organisation continuously compliant.", tr: "Gizlilik programınızı — kayıtlar, politikalar, değerlendirmeler ve kontroller — işletir ve sürdürürüz; kurumunuzu sürekli uyumlu tutarız.", az: "Məxfilik proqramınızı — qeydlər, siyasətlər, qiymətləndirmələr və nəzarətlər — idarə edir və qoruyuruq; təşkilatınızı daimi uyğun saxlayırıq." },
    included: {
      en: ["Records of Processing maintenance", "Policy and notice lifecycle", "DPIA and LIA management", "Vendor and transfer management", "Breach management processes", "Programme metrics and reporting"],
      tr: ["İşleme Kayıtlarının bakımı", "Politika ve bildirim yaşam döngüsü", "DPIA ve LIA yönetimi", "Tedarikçi ve aktarım yönetimi", "İhlal yönetimi süreçleri", "Program metrikleri ve raporlama"],
      az: ["Emal Qeydlərinin saxlanması", "Siyasət və bildiriş həyat dövrü", "DPIA və LIA idarəetməsi", "Təchizatçı və ötürmə idarəetməsi", "Pozuntu idarəetmə prosesləri", "Proqram metrikləri və hesabatlıq"],
    },
  },
  {
    slug: "dsar-handling", category: "dpo", icon: "doc",
    title: { en: "DSAR Handling", tr: "DSAR Yönetimi", az: "DSAR İdarəetməsi" },
    tagline: { en: "Handle data subject requests correctly and on time.", tr: "Veri sahibi başvurularını doğru ve zamanında yönetin.", az: "Məlumat subyekti sorğularını düzgün və vaxtında idarə edin." },
    overview: { en: "We design and operate your data subject access request process, ensuring lawful, complete and timely responses to individuals exercising their rights.", tr: "Veri sahibi erişim başvuru sürecinizi tasarlar ve işletiriz; haklarını kullanan bireylere hukuka uygun, eksiksiz ve zamanında yanıt sağlarız.", az: "Məlumat subyektinin giriş sorğusu prosesinizi dizayn edir və idarə edirik; hüquqlarından istifadə edən şəxslərə qanuni, tam və vaxtında cavab təmin edirik." },
    included: {
      en: ["DSAR intake and verification process", "Search, collation and redaction workflow", "Response templates and tracking", "Statutory timeline management", "Exemptions and edge-case advice", "Metrics and audit trail"],
      tr: ["DSAR alma ve doğrulama süreci", "Arama, derleme ve redaksiyon iş akışı", "Yanıt şablonları ve takibi", "Yasal süre yönetimi", "İstisnalar ve özel durum danışmanlığı", "Metrikler ve denetim izi"],
      az: ["DSAR qəbulu və doğrulama prosesi", "Axtarış, toplama və redaktə iş axını", "Cavab şablonları və izlənməsi", "Qanuni müddət idarəetməsi", "İstisnalar və xüsusi hal məsləhəti", "Metriklər və audit izi"],
    },
  },
];

// Stable, locale-independent slug (used for region-local services keyed on
// their English title).
export function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[()/.,]/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function servicesByCategory(id: CategoryId): Service[] {
  return SERVICES.filter((s) => s.category === id);
}
