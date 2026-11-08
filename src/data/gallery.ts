export interface GalleryPhoto {
  id: string;
  albumId: string;
  title: string;
  titleAr: string;
  location: string;
  locationAr: string;
  year: string;
  imageUrl: string;
  aspect: "square" | "landscape" | "tall";
}

export interface GalleryAlbum {
  id: string;
  name: string;
  nameAr: string;
  count: number;
  coverImage: string;
  description: string;
  descriptionAr: string;
  category: "camps" | "woodcraft" | "hikes" | "ceremonies";
  sections: ("louveteaux" | "scouts" | "routiers" | "group")[];
  yearRange: { from: number; to: number };
}

export const galleryAlbums: GalleryAlbum[] = [
  {
    id: "summer-camps",
    name: "Grand Summer Camps",
    nameAr: "المخيمات الصيفية الكبرى",
    count: 6,
    coverImage: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1000&q=80",
    description: "Living 10 days in the high mountains of Lebanon under canvas tents, building our own kitchen, campfire lore, and starry nights.",
    descriptionAr: "عشرة أيام متواصلة في أعالي جبال لبنان تحت الخيام القماشية: بناء المطابخ الخشبية، سهرات النار، والنوم تحت النجوم.",
    category: "camps",
    sections: ["scouts", "routiers", "louveteaux"],
    yearRange: { from: 1980, to: 2026 },
  },
  {
    id: "pioneering",
    name: "Froissartage & Pioneering",
    nameAr: "ريادة الخلاء والمنشآت الخشبية",
    count: 4,
    coverImage: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1000&q=80",
    description: "Rope lashings, timber watchtowers, bridges, and campfire cooking setups handcrafted by patrols without a single nail.",
    descriptionAr: "أبراج مراقبة، جسور، ومطابخ كشفية تبنيها الطلائع بأخشاب الصنوبر وحبال القنب دون استخدام أي مسمار.",
    category: "woodcraft",
    sections: ["scouts", "routiers"],
    yearRange: { from: 1978, to: 2026 },
  },
  {
    id: "hikes-expeditions",
    name: "Mountain Hikes & Expeditions",
    nameAr: "رحلات المسير واستكشاف الجبال",
    count: 4,
    coverImage: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1000&q=80",
    description: "Trekking through the holy Qadisha Valley, high cedar reserves, and coastal trails overlooking ancient Byblos.",
    descriptionAr: "مسارات المشي في وادي قاديشا المقدس، محميات الأرز الجبلية، والتلال المطلة على البحر المتوسط.",
    category: "hikes",
    sections: ["scouts", "routiers", "louveteaux"],
    yearRange: { from: 1977, to: 2026 },
  },
  {
    id: "parish-ceremonies",
    name: "Parish Life & Ceremonies",
    nameAr: "احتفالات الرعية والوعد الكشفي",
    count: 4,
    coverImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80",
    description: "May 5 anniversary parades, scout promise investitures, and weekly gatherings in the Saint Jean Marc courtyard.",
    descriptionAr: "مسيرة ٥ أيار السنوية، رتبة أداء الوعد الكشفي في الكاتدرائية، وتجمعات السبت الأسبوعية في جبيل القديمة.",
    category: "ceremonies",
    sections: ["louveteaux", "scouts", "routiers", "group"],
    yearRange: { from: 1977, to: 2026 },
  },
];

export const galleryPhotos: GalleryPhoto[] = [
  // Summer Camps Photos
  {
    id: "sc-1",
    albumId: "summer-camps",
    title: "Campfire Circle Under the Stars",
    titleAr: "سهرة نار كشفية تحت سماء الجبل",
    location: "Qadisha High Plateau",
    locationAr: "أعالي وادي قاديشا",
    year: "Summer Camp",
    imageUrl: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80",
    aspect: "landscape",
  },
  {
    id: "sc-2",
    albumId: "summer-camps",
    title: "Tent Pitching on the Mountain Ridge",
    titleAr: "نصب الخيم على المرتفعات الجبلية",
    location: "Bcharre Mountains",
    locationAr: "جبال بشري",
    year: "Summer Camp",
    imageUrl: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80",
    aspect: "tall",
  },
  {
    id: "sc-3",
    albumId: "summer-camps",
    title: "Campfire Stew & Outdoor Cooking",
    titleAr: "طبخ كشفي على مواقد الحطب",
    location: "Cedars Reserve Edge",
    locationAr: "محيط غابة الأرز",
    year: "Patrol Activity",
    imageUrl: "https://images.unsplash.com/photo-1496080174650-637e3f22fa03?auto=format&fit=crop&w=1200&q=80",
    aspect: "square",
  },
  {
    id: "sc-4",
    albumId: "summer-camps",
    title: "Morning Flag Raising Assembly",
    titleAr: "تجمع الصباح ورفع العلم في المخيم",
    location: "Camp Ground",
    locationAr: "أرض المخيم",
    year: "Summer Camp",
    imageUrl: "https://images.unsplash.com/photo-1472898965229-f9b06b9c9bbe?auto=format&fit=crop&w=1200&q=80",
    aspect: "landscape",
  },
  {
    id: "sc-5",
    albumId: "summer-camps",
    title: "Patrol Inspection & Table Setup",
    titleAr: "تفتيش الطلائع وطاولة الطعام الخشبية",
    location: "Patrol Corner",
    locationAr: "مقر الطليعة",
    year: "Summer Camp",
    imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80",
    aspect: "landscape",
  },
  {
    id: "sc-6",
    albumId: "summer-camps",
    title: "Night Sky Vigil & Star Observation",
    titleAr: "حراسة ليلية ومراقبة النجوم في الجبل",
    location: "High Ridge",
    locationAr: "مرتفعات المخيم",
    year: "Summer Camp",
    imageUrl: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80",
    aspect: "square",
  },

  // Pioneering Photos
  {
    id: "pi-1",
    albumId: "pioneering",
    title: "Timber Watchtower Construction",
    titleAr: "بناء برج مراقبة بالخشب والحبال (فرويسارتاج)",
    location: "Troop Camp Site",
    locationAr: "أرض المخيم الكشفي",
    year: "Froissartage",
    imageUrl: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80",
    aspect: "tall",
  },
  {
    id: "pi-2",
    albumId: "pioneering",
    title: "Scout Knotting & Pioneering Ties",
    titleAr: "تعلم العقد الكشفية وربطات الحبال",
    location: "Saint Jean Marc Courtyard",
    locationAr: "باحة مار يوحنا مرقس، جبيل",
    year: "Weekly Meeting",
    imageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80",
    aspect: "landscape",
  },
  {
    id: "pi-3",
    albumId: "pioneering",
    title: "Suspension Bridge Engineering",
    titleAr: "بناء جسر مشاة معلق بالحبال",
    location: "River Valley",
    locationAr: "وادي النهر",
    year: "Patrol Challenge",
    imageUrl: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80",
    aspect: "landscape",
  },
  {
    id: "pi-4",
    albumId: "pioneering",
    title: "Woodcraft Tool Rack & Crafting",
    titleAr: "حامل الأدوات الخشبي والأشغال اليدوية",
    location: "Field Base",
    locationAr: "القاعدة الميدانية",
    year: "Woodcraft",
    imageUrl: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80",
    aspect: "square",
  },

  // Hikes & Expeditions Photos
  {
    id: "hk-1",
    albumId: "hikes-expeditions",
    title: "Sunrise Summit Expedition",
    titleAr: "مسير جبلي واستكشاف قمم لبنان",
    location: "Mount Lebanon Ridge",
    locationAr: "سلسلة جبال لبنان",
    year: "Routiers Trek",
    imageUrl: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=80",
    aspect: "landscape",
  },
  {
    id: "hk-2",
    albumId: "hikes-expeditions",
    title: "Qadisha Valley Trail Descent",
    titleAr: "نزول المسار التاريخي في وادي قاديشا",
    location: "Qadisha Valley",
    locationAr: "وادي قاديشا",
    year: "Troop Hike",
    imageUrl: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80",
    aspect: "tall",
  },
  {
    id: "hk-3",
    albumId: "hikes-expeditions",
    title: "Compass & Topographic Navigation",
    titleAr: "التوجيه بالخارطة الطبوغرافية والبوصلة",
    location: "High Meadows",
    locationAr: "المروج الجبلية",
    year: "Orientation Raid",
    imageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80",
    aspect: "square",
  },
  {
    id: "hk-4",
    albumId: "hikes-expeditions",
    title: "Trail Rest at Mount Olive Grove",
    titleAr: "استراحة الطليعة في بساتين الزيتون",
    location: "Byblos Hills",
    locationAr: "تلال قضاء جبيل",
    year: "Day Outing",
    imageUrl: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=80",
    aspect: "landscape",
  },

  // Parish Ceremonies Photos
  {
    id: "pc-1",
    albumId: "parish-ceremonies",
    title: "Parish Anniversary & Scout Promise",
    titleAr: "أداء الوعد الكشفي في كاتدرائية مار يوحنا مرقس",
    location: "Saint Jean Marc Cathedral",
    locationAr: "كاتدرائية مار يوحنا مرقس، جبيل",
    year: "Promise Ceremony",
    imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    aspect: "landscape",
  },
  {
    id: "pc-2",
    albumId: "parish-ceremonies",
    title: "Troop Parade in Ancient Byblos",
    titleAr: "المسيرة الكشفية في شوارع بيبلوس القديمة",
    location: "Old Byblos Souk",
    locationAr: "أسواق جبيل القديمة",
    year: "May 5 Anniversary",
    imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80",
    aspect: "tall",
  },
  {
    id: "pc-3",
    albumId: "parish-ceremonies",
    title: "Saturday Pack Games & Team Spirit",
    titleAr: "ألعاب الحركة والتعاون لسرب الجراميز والزهرات",
    location: "Saint Jean Marc Courtyard",
    locationAr: "باحة مار يوحنا مرقس",
    year: "Weekly Session",
    imageUrl: "https://images.unsplash.com/photo-1472898965229-f9b06b9c9bbe?auto=format&fit=crop&w=1200&q=80",
    aspect: "square",
  },
  {
    id: "pc-4",
    albumId: "parish-ceremonies",
    title: "Mass with Mourched Père Simon",
    titleAr: "القداس الكشفي مع مرشد الفوج الأب سيمون",
    location: "Saint Jean Marc Cathedral",
    locationAr: "كاتدرائية مار يوحنا مرقس",
    year: "Parish Mass",
    imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    aspect: "landscape",
  },
];
