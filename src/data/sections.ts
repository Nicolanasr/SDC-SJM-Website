export interface SectionBranch {
  id: string;
  name: string;
  arabicName: string;
  frenchName: string;
  ageRange: string;
  arabicAgeRange: string;
  badgeColor: string; // Tailwind color class
  accentHex: string;
  motto: string;
  arabicMotto: string;
  image: string;
  summary: string;
  arabicSummary: string;
  description: string;
  arabicDescription: string;
  activities: string[];
  arabicActivities: string[];
  parentHighlights: string[];
  arabicParentHighlights: string[];
  meetingTime: string;
  arabicMeetingTime: string;
}

export const sectionsData: SectionBranch[] = [
  {
    id: "jaramiz-zahrat",
    name: "Louveteaux & Jeannettes (جراميز وزهرات)",
    arabicName: "جراميز وزهرات (Louveteaux & Jeannettes)",
    frenchName: "Louveteaux & Jeannettes",
    ageRange: "Ages 4 – 11",
    arabicAgeRange: "الأعمار ٤ – ١١ سنة",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    accentHex: "#d97706",
    motto: "De notre mieux (Do our best)",
    arabicMotto: "نبذل جهدنا (De notre mieux)",
    image: "https://images.unsplash.com/photo-1472898965229-f9b06b9c9bbe?auto=format&fit=crop&w=600&q=75",
    summary: "Curiosity, team games, character-building, and early discovery of the outdoors through the jungle and forest lore.",
    arabicSummary: "حب الاستكشاف، ألعاب جماعية، بناء الشخصية والتعرف على الطبيعة في بيئة دافئة تحت رعاية قادة أكفاء.",
    description: "The younger branches welcome children into a warm, safe pack. Through story-driven games, creative crafts, basic camping skills, and community values, they learn to share, take responsibility, and grow in confidence alongside their pack leaders (Akela & Baloo).",
    arabicDescription: "يستقبل فرع الجراميز والزهرات الأطفال في سرب دافئ وآمن. من خلال ألعاب مستوحاة من قصص الغابة، الأشغال اليدوية، المهارات الكشفية الأولية، وقيم المشاركة، يتعلم الصغار الاعتماد على النفس والتعاون تحت إشراف قادتهم وقائداتهم.",
    activities: [
      "Jungle book lore & outdoor games",
      "Knot tying and basic survival skills",
      "Nature scavenger hunts and mini hikes",
      "Community sharing & Christmas charity drives",
      "Annual weekend spring & summer camp"
    ],
    arabicActivities: [
      "ألعاب حركية وقصص الغابة في الهواء الطلق",
      "تعلم العقد الكشفية والمهارات الأساسية",
      "مسارات استكشاف الطبيعة والبحث عن الكنز",
      "مبادرات المشاركة وحملات المحبة الميلادية",
      "مخيم الربيع والمخيم الصيفي السنوي"
    ],
    parentHighlights: [
      "Vigilant, trained leaders providing close 1-on-1 attention and safety",
      "Screen-free environment developing emotional resilience and healthy social skills",
      "Saturday 3:00–4:30 PM drop-off at Saint Jean Marc Byblos courtyard"
    ],
    arabicParentHighlights: [
      "إشراف دائم وقادة مؤهلون يضمنون رعاية تامة وأماناً كاملاً لطفلك",
      "بيئة نقية خالية من الشاشات تركز على بناء الشخصية والتفاعل الإنساني",
      "موعد مريح وموحد لأولياء الأمور كل سبت (٣:٠٠ - ٤:٣٠ بعد الظهر) في جبيل"
    ],
    meetingTime: "Saturdays, 3:00 PM – 4:30 PM",
    arabicMeetingTime: "كل سبت، من ٣:٠٠ حتى ٤:٣٠ بعد الظهر",
  },
  {
    id: "kechefe-mourchidet",
    name: "Scouts & Guides (كشافة ومرشدات)",
    arabicName: "كشافة ومرشدات (Scouts & Guides)",
    frenchName: "Scouts & Guides",
    ageRange: "Ages 11 – 16",
    arabicAgeRange: "الأعمار ١١ – ١٦ سنة",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
    accentHex: "#059669",
    motto: "Toujours Prêt (Always Prepared)",
    arabicMotto: "كن مستعداً (Toujours Prêt)",
    image: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=600&q=75",
    summary: "Pioneering, woodcraft, autonomous patrols, wilderness survival, and leadership under the open sky.",
    arabicSummary: "بناء المنشآت الخشبية بدون مسامير (فرويسارتاج)، الطبخ على الحطب، وتوجيه البوصلة مع مغامرات الخلاء.",
    description: "At the heart of the scout adventure, boys and girls form autonomous patrols led by a Patrol Leader (Patrouille). They design and build their own wooden camp installations (froissartage), cook their own meals on fires, hike rugged mountain trails, and discover true camaraderie.",
    arabicDescription: "في قلب المغامرة الكشفية، ينتظم الفتيان والفتيات في طلائع مستقلة يقودها عريف الطليعة. يصممون ويبنون منشآت مخيمهم بالخشب والحبال دون مسامير (فرويسارتاج)، يطهون طعامهم على النار، ويخوضون مسارات جبلية ومغامرات الخلاء بروح الإخاء والشهامة.",
    activities: [
      "Pioneering & woodcraft installations (Froissartage)",
      "Orienteering with topographic maps & compass",
      "Campfire cooking, bivouacs & 10-day summer camp",
      "First aid certification & outdoor safety",
      "Patrol tournaments and physical challenges"
    ],
    arabicActivities: [
      "ريادة الخلاء والمنشآت الخشبية بالحبال (فرويسارتاج)",
      "تحديد الاتجاهات بالخارطة الطبوغرافية والبوصلة",
      "الطبخ على مواقد الحطب والمخيم الصيفي الكبير (١٠ أيام)",
      "تدريبات الإسعاف الأولي والسلامة في الطبيعة",
      "منافسات الطلائع والأنشطة الرياضية الكشفية"
    ],
    parentHighlights: [
      "Channels teen energy into outdoor grit, resourcefulness, and self-reliance",
      "Certified first-aid leadership, strict camp protocols, and verified campsites",
      "Lifelong moral foundation built on the scout law, honor, and brotherhood"
    ],
    arabicParentHighlights: [
      "توجيه طاقة المراهقة نحو البناء: حل التحديات، المثابرة، والاعتماد على النفس",
      "قادة متدربون على الإسعافات الأولية مع اختيار مواقع تخييم آمنة ومدروسة",
      "صقل أخلاقي متين قائم على قانون الكشافة والشرف والالتزام الحقيقي"
    ],
    meetingTime: "Saturdays, 3:00 PM – 4:30 PM",
    arabicMeetingTime: "كل سبت، من ٣:٠٠ حتى ٤:٣٠ بعد الظهر",
  },
  {
    id: "jouwele-mounjidet",
    name: "Routiers & Caravelles (جوالة ومنجدات)",
    arabicName: "جوالة ومنجدات (Routiers & Caravelles)",
    frenchName: "Routiers & Caravelles",
    ageRange: "Ages 16 – 24",
    arabicAgeRange: "الأعمار ١٦ – ٢٤ سنة",
    badgeColor: "bg-red-100 text-red-900 border-red-300",
    accentHex: "#dc2626",
    motto: "Servir (To Serve)",
    arabicMotto: "خدمة (Servir)",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=600&q=75",
    summary: "Road expeditions, community service, spiritual depth, self-governance, and mentoring the next generation.",
    arabicSummary: "رحلات مسير واستكشاف على درب الجبل، خدمة إنسانية للمجتمع، وتحمل المسؤولية في قيادة الأجيال.",
    description: "The senior branch is a brotherhood and sisterhood of the Open Road. Members take on ambitious humanitarian initiatives, wilderness expeditions across Lebanon, emergency relief, and prepare to step up into leadership roles as chefs and community pillars.",
    arabicDescription: "فرع الشباب الأكبر هو أخوّة طريق الخلاء والخدمة العامة. يقود أفراد العشيرة مبادرات إنسانية ومجتمعية، ويجتازون رحلات مسير استكشافية طويلة عبر جبال لبنان، ويشاركون في الإغاثة الطارئة، استعداداً لتحمل مسؤوليات قيادية في الفوج والمجتمع.",
    activities: [
      "Humanitarian expeditions & community development",
      "Long-distance mountain treks (Lebanon Mountain Trail)",
      "Leadership training & assistant section mentoring",
      "Social solidarity & parish heritage preservation",
      "Spiritual retreats and self-reflection fires"
    ],
    arabicActivities: [
      "مشاريع الخدمة العامة والتنمية المجتمعية في بيبلوس",
      "رحلات المسير الطويلة على درب الجبل اللبناني ومحميات الشمال",
      "التدريب القيادي ومرافقة الفرق الصغرى",
      "مبادرات التضامن الاجتماعي وحفظ تراث الرعية",
      "خلوات تأمل وسهرات نار فكرية وروحية"
    ],
    parentHighlights: [
      "Real-world leadership, project logistics, and public speaking experience",
      "Direct civic impact and disaster relief helping vulnerable families in Byblos",
      "Trustworthy peer community of ambitious, grounded, and values-driven youths"
    ],
    arabicParentHighlights: [
      "خبرة عملية في القيادة وإدارة المشاريع والخدمة العامة تصقل مسيرتهم الجامعية والمهنية",
      "انخراط مباشر في المبادرات الإنسانية وخدمة المجتمع في قضاء جبيل",
      "بيئة شبابية راقية تبني شبكة علاقات متينة قائمة على القيم والأخلاق"
    ],
    meetingTime: "Saturdays, 3:00 PM – 4:30 PM (and special missions)",
    arabicMeetingTime: "كل سبت، ٣:٠٠ – ٤:٣٠ بعد الظهر (ومهمات خاصة)",
  },
];
