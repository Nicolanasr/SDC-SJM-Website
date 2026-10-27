export interface SectionBranch {
  id: string;
  name: string;
  arabicName: string;
  frenchName: string;
  ageRange: string;
  badgeColor: string; // Tailwind color class
  accentHex: string;
  motto: string;
  summary: string;
  description: string;
  activities: string[];
  meetingTime: string;
}

export const sectionsData: SectionBranch[] = [
  {
    id: "gramiz-zahrat",
    name: "Gramiz & Zahrat",
    arabicName: "قراميز و زهرات",
    frenchName: "Louveteaux & Jeannettes / Zahrat",
    ageRange: "Ages 4 – 11",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    accentHex: "#d97706",
    motto: "De notre mieux (Do our best)",
    summary: "Curiosity, team games, character-building, and early discovery of the outdoors through the jungle and forest lore.",
    description: "The younger branches welcome children into a warm, safe pack. Through story-driven games, creative crafts, basic camping skills, and community values, they learn to share, take responsibility, and grow in confidence alongside their pack leaders (Akela & Baloo).",
    activities: [
      "Jungle book lore & outdoor games",
      "Knot tying and basic survival skills",
      "Nature scavenger hunts and mini hikes",
      "Community sharing & Christmas charity drives",
      "Annual weekend spring & summer camp"
    ],
    meetingTime: "Saturdays, 3:00 PM – 4:30 PM",
  },
  {
    id: "kochefe-mourchidet",
    name: "Kochefe & Mourchidet",
    arabicName: "كشافة و مرشدات",
    frenchName: "Éclaireurs & Guides",
    ageRange: "Ages 11 – 16",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
    accentHex: "#059669",
    motto: "Toujours Prêt (Always Prepared)",
    summary: "Pioneering, woodcraft, autonomous patrols, wilderness survival, and leadership under the open sky.",
    description: "At the heart of the scout adventure, boys and girls form autonomous patrols led by a Patrol Leader (Patrouille). They design and build their own wooden camp installations (froissartage), cook their own meals on fires, hike rugged mountain trails, and discover true camaraderie.",
    activities: [
      "Pioneering & woodcraft installations (Froissartage)",
      "Orienteering with topographic maps & compass",
      "Campfire cooking, bivouacs & 10-day summer camp",
      "First aid certification & outdoor safety",
      "Patrol tournaments and physical challenges"
    ],
    meetingTime: "Saturdays, 3:00 PM – 4:30 PM",
  },
  {
    id: "jouwele-mounjidet",
    name: "Jouwele & Mounjidet",
    arabicName: "جوالة و منجدات",
    frenchName: "Routiers & Caravelles",
    ageRange: "Ages 16 – 24",
    badgeColor: "bg-sky-100 text-sky-900 border-sky-300",
    accentHex: "#0284c7",
    motto: "Servir (To Serve)",
    summary: "Road expeditions, community service, spiritual depth, self-governance, and mentoring the next generation.",
    description: "The senior branch is a brotherhood and sisterhood of the Open Road. Members take on ambitious humanitarian initiatives, wilderness expeditions across Lebanon, emergency relief, and prepare to step up into leadership roles as chefs and community pillars.",
    activities: [
      "Humanitarian expeditions & community development",
      "Long-distance mountain treks (Lebanon Mountain Trail)",
      "Leadership training & assistant section mentoring",
      "Social solidarity & parish heritage preservation",
      "Spiritual retreats and self-reflection fires"
    ],
    meetingTime: "Saturdays, 3:00 PM – 4:30 PM (and special missions)",
  },
];
