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
    image: "",
    summary: "Active outdoor games in Byblos, forest trails, and making first real friends away from screens under caring leaders.",
    arabicSummary: "ألعاب حركة ومرح بباحة جبيل، قصص الغابة مع أكيلا، وأول رفقات عمر بعيداً عن التلفزيون والتابلت.",
    description: "Children take their first scout steps in a warm, family pack. Guided by Akela and Baloo, they learn through fun group games, simple handicrafts, and short nature walks. Here they learn how to share, pack their own little backpack, and listen to each other.",
    arabicDescription: "بيبدأ الطفل أول خطوة كشفية بسرب دافي متل العيلة. مع قادة متدربين وحنونين، بيتعلموا من خلال اللعب، الأشغال اليدوية، ومشاوير قصيرة بالطبيعة. هون بيتعلم الولد يشارك رفقاته، يوضّب غراضه لحاله، ويكتشف فرح الطبيعة.",
    activities: [
      "Active outdoor team games & relay races",
      "Knot tying and simple craft projects",
      "Nature discovery walks around Byblos",
      "Christmas charity drives for local families",
      "Annual 3-day spring and summer camp"
    ],
    arabicActivities: [
      "ألعاب حركة وتحدي بباحة مار يوحنا مرقس",
      "تعلم أول العقد الكشفية والأشغال اليدوية",
      "مشاوير استكشاف بالطبيعة وبساتين جبيل",
      "مبادرات ومساعدات ميلادية لعائلات الرعية",
      "مخيم ربيعي وصيفي قصير ٣ أيام بالطبيعة"
    ],
    parentHighlights: [
      "Vigilant leaders giving close care—children are never left unmonitored",
      "Screen-free Saturdays focused on friendship and outdoor play",
      "Drop-off every Saturday 3:00 to 4:30 PM at Saint Jean Marc courtyard"
    ],
    arabicParentHighlights: [
      "قادة حنونين ومسؤولين بيعطوا عين ساهرة عكل ولد بدون إهمال",
      "بعد ظهر سبت نظيف بعيد كلياً عن الشاشات والملل",
      "توصيل مريح وموحد كل سبت ٣:٠٠ حتى ٤:٣٠ بعد الظهر بجبيل"
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
    image: "",
    summary: "Building complete campsites with timber and rope (Froissartage), cooking over wood fires, and 10 days of mountain camping.",
    arabicSummary: "بناء مخيم كامل بالخشب والحبال بدون مسامير، طبخ عالحطب، ومخيم صيفي ١٠ أيام بجبال لبنان.",
    description: "The classic scout experience. Boys and girls join small, autonomous patrols of 6 to 8 friends led by a Patrol Leader (CP). Together they hike mountain trails with topographical maps, cook their own camp meals over fire, and build dining tables and towers from pine logs and sisal rope.",
    arabicDescription: "قلب المغامرة الكشفية الحقيقية. بينتظم الشباب والصبايا بطلائع من ٦ لـ ٨ رفقات بقيادة عريف الطليعة (CP). مع بعض بيمشوا بالوديان مع الخارطة والبوصلة، بيطبخوا أكلن عالحطب، وبيعمروا طاولات ومطابخ وأبراج بالخشب والحبال.",
    activities: [
      "Froissartage woodcraft installations (zero nails)",
      "Map reading, compass navigation & trail tracking",
      "Campfire cooking, bivouacs & 10-day summer camp",
      "Red Cross first-aid training & safety drills",
      "Patrol tournaments and obstacle courses"
    ],
    arabicActivities: [
      "بناء منشآت المخيم بالخشب والحبال (فرويسارتاج)",
      "قراءة الخرائط الطبوغرافية والبوصلة بالبرية",
      "الطبخ عالحطب، بيات بالخيمة، ومخيم صيفي ١٠ أيام",
      "تدريبات إسعاف أولي وسلامة ميدانية",
      "بطولات وتحديات رياضية بين الطلائع"
    ],
    parentHighlights: [
      "Turns teen energy into real practical competence and resilience",
      "Certified first-aid chefs, verified campsites, and strict mountain safety",
      "Lifelong friendships and moral values grounded in the Scout Law"
    ],
    arabicParentHighlights: [
      "تفريغ طاقة المراهقة بالعمل المفيد، الاعتماد عالنفس، وحل المشاكل",
      "قادة مدرّبين عإسعافات الصليب الأحمر ومواقع تخييم مدروسة وآمنة",
      "صداقات عمر وأخلاق حقيقية مبنية عقانون الكشاف وشرفه"
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
    image: "",
    summary: "Long-distance mountain trails, humanitarian community projects in Byblos, and mentoring younger troop sections.",
    arabicSummary: "مشاوير مشي طويلة بجبال لبنان، خدمة ومساعدة عائلات بجبيل، وتدريب ليصيروا قادة الفوج بالمستقبل.",
    description: "The senior branch is a brotherhood and sisterhood of the Open Road. Members organize mountain treks across Lebanon (like the Lebanon Mountain Trail), lead social and parish aid projects in Byblos, and train to step into leadership roles as chefs and cheftaines.",
    arabicDescription: "فرع الشباب الأكبر هو أخوّة طريق البرية والخدمة الحقيقية. بينظموا مسيرات طويلة بقمم ووديان لبنان، بيقودوا مبادرات إنسانية وخدمة رعية بجبيل، وبيتدربوا تربوياً ليصيروا قادة الفوج المستقبليين.",
    activities: [
      "Mountain trekking & autonomous trail expeditions",
      "Community aid projects & parish support in Byblos",
      "Leadership formation & mentoring younger units",
      "Heritage preservation & conservation projects",
      "Evening reflection campfires and spiritual retreats"
    ],
    arabicActivities: [
      "رحلات مسير واستكشاف على قمم ومحميات لبنان",
      "مبادرات مساعدة ومشاريع تنموية بجبيل والقرى المجاورة",
      "تدريب تربوي ومرافقة الفرق الكشفية الصغرى",
      "أنشطة بيئية وحفظ تراث مدينة جبيل العريقة",
      "سهرات نار هادئة، تأمل، وخلوات روحية"
    ],
    parentHighlights: [
      "Builds grounded young adults with project management and leadership experience",
      "Direct positive impact on Byblos families and community needs",
      "A healthy, inspiring peer group during the most important university years"
    ],
    arabicParentHighlights: [
      "بناء شخصية قيادية واعية قادرة تنظم مشاريع وتتحمل مسؤولية",
      "أثر إيجابي حقيقي بمساعدة عائلات ومجتمع جبيل",
      "بيئة شبابية نقية وملهمة بأهم سنوات الجامعة والشباب"
    ],
    meetingTime: "Saturdays, 3:00 PM – 4:30 PM (and special missions)",
    arabicMeetingTime: "كل سبت، ٣:٠٠ – ٤:٣٠ بعد الظهر (ومهمات خاصة)",
  },
];
