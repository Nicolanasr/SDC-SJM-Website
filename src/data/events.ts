export interface ScoutEvent {
  id: string;
  title: string;
  titleAr: string;
  subtitle: string;
  subtitleAr: string;
  date: string;
  dateAr: string;
  duration: string;
  ages: string;
  location: string;
  locationAr: string;
  type: "meeting" | "camp" | "ceremony" | "hike" | "service";
  description: string;
  descriptionAr: string;
  badge: string;
  badgeAr: string;
  badgeColor: string;
  image: string;
  meetingPoint: string;
  departureTime: string;
  returnTime: string;
  fullOverview: string[];
  scheduleHighlights: { time: string; activity: string; activityAr?: string }[];
  packingKit: string[];
  arabicPackingKit: string[];
}

export const upcomingEvents: ScoutEvent[] = [
  {
    id: "weekly-saturday-meeting",
    title: "Weekly Saturday Scout Gathering",
    titleAr: "اللقاء الكشفي الأسبوعي (كل سبت)",
    subtitle: "Regular Troop Meeting, Games, Skills & Friendship",
    subtitleAr: "أنشطة كشفية، ألعاب هادفة، ريادة الخلاء، وصداقة العمر",
    date: "Every Saturday • 3:00 PM – 4:30 PM",
    dateAr: "كل يوم سبت • ٣:٠٠ – ٤:٣٠ بعد الظهر",
    duration: "1h 30m (3:00 PM – 4:30 PM)",
    ages: "All Branches: Louveteaux, Scouts, Routiers (Ages 4 – 24)",
    location: "Courtyard of Saint Jean Marc, Ancient Byblos",
    locationAr: "باحة كاتدرائية مار يوحنا مرقس، جبيل القديمة",
    type: "meeting",
    description: "Our regular Saturday gathering for all units. A screen-free afternoon of teamwork, scout woodcraft, games in the fresh air, and moral formation in the heart of old Byblos.",
    descriptionAr: "اللقاء الأسبوعي لجميع الفروع الكشفية. بعد ظهر مميز بعيداً عن الشاشات يجمع بين روح الفريق، ريادة الخلاء، الألعاب الحركية، والتنشئة الأخلاقية في قلب جبيل القديمة.",
    badge: "Weekly Meeting",
    badgeAr: "لقاء أسبوعي",
    badgeColor: "bg-emerald-700 text-white",
    image: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80",
    meetingPoint: "Courtyard of Saint Jean Marc Church, Old Byblos",
    departureTime: "Saturday at 3:00 PM sharp (Drop-off)",
    returnTime: "Saturday at 4:30 PM (Pick-up)",
    fullOverview: [
      "Every Saturday from 3:00 PM to 4:30 PM, the ancient courtyard of Saint Jean Marc comes alive with the energy of over 120 young scouts, guides, and leaders.",
      "The meeting begins with the traditional opening formation and flag raising, followed by branch-specific activities: the Louveteaux & Jeannettes play character games and crafts, while the Scouts & Guides practice knots, compass navigation, and patrol coordination.",
      "Parents are welcome to drop off their children with the unit leaders, or stay, enjoy a coffee in the old souk, and watch their children thrive in a safe and supportive community."
    ],
    scheduleHighlights: [
      { time: "15:00", activity: "Arrival, group assembly & traditional opening circle", activityAr: "وصول الكشافة، التجمع العام، ورفع العلم" },
      { time: "15:15", activity: "Branch activities: scout skills, teamwork games, knots & patrol workshops", activityAr: "أنشطة الوحدات: مهارات كشفية، عقد، ألعاب التحدي وورش عمل الطلائع" },
      { time: "16:15", activity: "Group regrouping, weekly announcements & scout prayer", activityAr: "التجمع الختامي، إعلانات الفوج، وصلاة الكشاف" },
      { time: "16:30", activity: "Dismissal and parent pick-up", activityAr: "انتهاء النشاط واستلام أولياء الأمور لأبنائهم" },
    ],
    packingKit: [
      "Official scout uniform shirt & Saint Jean Marc group foulard (scarf)",
      "Reusable water bottle (canteen)",
      "Comfortable sneakers or outdoor shoes",
      "Scout notebook and pencil for skill sessions",
      "A ready smile and enthusiasm to learn with friends"
    ],
    arabicPackingKit: [
      "القميص الكشفي الرسمي ومنديل الفوج (Foulard مار يوحنا مرقس)",
      "مطرة مياه قابلة لإعادة التعبئة",
      "حذاء رياضي أو جبلي مريح ومناسب للحركة",
      "دفتر كشفي وقلم لتدوين المهارات والعقد",
      "حماس واستعداد للمشاركة بروح الأخوة الكشفية"
    ],
  },
];
