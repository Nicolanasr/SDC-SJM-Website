export interface ScoutEvent {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  duration: string;
  ages: string;
  location: string;
  type: "camp" | "ceremony" | "hike" | "service" | "meeting";
  description: string;
  badge: string;
  badgeColor: string;
  image: string;
  meetingPoint: string;
  departureTime: string;
  returnTime: string;
  fullOverview: string[];
  scheduleHighlights: { time: string; activity: string }[];
  packingKit: string[];
  portalRequiredRole: string;
}

export const upcomingEvents: ScoutEvent[] = [
  {
    id: "annual-spring-camp-2026",
    title: "Annual Spring Camp 2026",
    subtitle: "3 Days in Qadisha & Cedars Valleys",
    date: "April 24 – 26, 2026",
    duration: "3 Days",
    ages: "Ages 11 – 24 (Kochefe & Jouwele)",
    location: "Qadisha Valley & Bcharre High Meadows",
    type: "camp",
    description: "Our signature annual spring wilderness camp. Tenting under the stars, patrol woodcraft, campfire lore, and high-altitude mountain hiking.",
    badge: "Most popular",
    badgeColor: "bg-blue-700 text-white",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80",
    meetingPoint: "Saint Jean Marc UNESCO Se7a Courtyard",
    departureTime: "Friday, April 24 at 7:30 AM sharp",
    returnTime: "Sunday, April 26 at 5:00 PM",
    fullOverview: [
      "The Annual Spring Camp marks the transition from indoor workshops to full wilderness living. Over three intense, joyful days, patrols camp on the historic high terraces overlooking the holy valley of Qadisha.",
      "Patrols are completely self-governed under their Patrol Leaders (Chefs de Patrouille). They pitch their own Canadian canvas tents, dig eco-friendly fire trenches, and prepare hot communal stews.",
      "Saturday features the legendary Valley Orienteering Challenge: a 12-kilometer topographic trek requiring compass bearings, topographic map reading, and flora identification."
    ],
    scheduleHighlights: [
      { time: "Friday 07:30", activity: "Group inspection, gear loading & departure from Byblos" },
      { time: "Friday 11:00", activity: "Arrival at basecamp, tent pitching & patrol kitchen setup" },
      { time: "Friday 19:30", activity: "Patrol dinner & opening campfire with traditional scout songs" },
      { time: "Saturday 08:00", activity: "Flag raising ceremony & morning physical training" },
      { time: "Saturday 09:30", activity: "Start of the Qadisha Valley 12km navigation raid" },
      { time: "Saturday 20:30", activity: "Grand Campfire with patrol sketches and leadership investitures" },
      { time: "Sunday 10:00", activity: "Wilderness Mass celebrated by Père Aumônier" },
      { time: "Sunday 14:00", activity: "Camp strike, site restoration (Leave No Trace) & return to Byblos" },
    ],
    packingKit: [
      "Official scout uniform shirt & Saint Jean Marc foulard",
      "Sleeping bag rated down to 5°C & ground sleeping mat",
      "Sturdy mountain hiking boots (broken in, no new blisters)",
      "Mess tin (gamelle), cutlery, and scout metal cup",
      "Headlamp or flashlight with spare batteries",
      "Warm fleece jacket and waterproof windbreaker",
      "Signed parent emergency medical clearance slip",
      "Refillable 1.5L water canteen (Gourde)"
    ],
    portalRequiredRole: "Troop Member / Parent Access Required",
  },
  {
    id: "st-jean-marc-feast-day",
    title: "Saint Jean Marc Feast Day & 49th Anniversary",
    subtitle: "Parish Celebration & Official Group Parade",
    date: "May 5, 2026",
    duration: "Full Day",
    ages: "All Units (4 – 24) & Families",
    location: "Paroisse Saint Jean Marc, Se7a Byblos",
    type: "ceremony",
    description: "Celebrating our 49th anniversary since May 5, 1977. Official troop parade through ancient Byblos, solemn mass, and Scout Promise investitures.",
    badge: "Anniversary",
    badgeColor: "bg-amber-600 text-white",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80",
    meetingPoint: "Parish Cloister, Saint Jean Marc Church, Byblos",
    departureTime: "Tuesday, May 5 at 9:30 AM",
    returnTime: "Tuesday, May 5 at 3:30 PM",
    fullOverview: [
      "Every year on May 5th, the entire troop, along with alumni from 1977 to the present, gathers to celebrate our patron saint and founding anniversary.",
      "The day begins with the ceremonial inspection and full parade through the medieval souks and harbour of Byblos, followed by the parish high mass.",
      "During the ceremony, new recruits who have completed their probation period pronounce the solemn Scout Promise before the altar and receive their official unit foulard."
    ],
    scheduleHighlights: [
      { time: "09:30", activity: "Uniform inspection and flag bearer assembly in church cloister" },
      { time: "10:30", activity: "Solemn Parish Mass celebrated by our Archbishop & Aumônier" },
      { time: "11:45", activity: "Scout Promise ceremony & foulard investitures for all branches" },
      { time: "12:30", activity: "Group parade through the ancient streets of Byblos" },
      { time: "13:30", activity: "Community reception and 49th Anniversary fellowship lunch" },
    ],
    packingKit: [
      "Full formal uniform: freshly ironed scout shirt, badge sash, and foulard",
      "Clean dark navy trousers or skirt",
      "Polished dark shoes or clean boots",
      "Scout beret or fourragère (for squad leaders)"
    ],
    portalRequiredRole: "Open Ceremony / Portal for VIP Seating & Logistics",
  },
  {
    id: "grand-summer-camp-2026",
    title: "Grand Summer Camp 2026 (Grand Camp)",
    subtitle: "10 Days of Autonomous Wilderness Living",
    date: "July 18 – 28, 2026",
    duration: "10 Days",
    ages: "Ages 4 – 24 (All Branches)",
    location: "Mount Lebanon High Plateau",
    type: "camp",
    description: "The crown jewel of the scout year. Building 100% wooden camp infrastructure (froissartage kitchens, dining tables), night bivouacs, and exploration treks.",
    badge: "Grand Camp",
    badgeColor: "bg-emerald-700 text-white",
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80",
    meetingPoint: "Saint Jean Marc Hall (Departure by Coach)",
    departureTime: "Saturday, July 18 at 06:00 AM",
    returnTime: "Tuesday, July 28 at 6:00 PM",
    fullOverview: [
      "Grand Camp is the definitive rite of passage for every scout in Groupe Saint Jean Marc. For ten uninterrupted days away from screens and city noise, youth live in complete communion with nature.",
      "Units are organized into self-sustaining encampments. The Louveteaux pack lives the adventure of the Jungle Book, while the Kochefe and Jouwele patrols construct monumental timber installations using traditional lashings.",
      "The camp concludes with the legendary Grand Campfire, where parents travel up to the mountains to witness their children's growth and patrol sketches."
    ],
    scheduleHighlights: [
      { time: "Day 1 – 2", activity: "Arrival, site clearing, timber logistics & Froissartage camp build" },
      { time: "Day 3 – 5", activity: "Patrol Olympic tournaments, pioneering games & pioneering tests" },
      { time: "Day 6 – 7", activity: "Two-day autonomous mountain bivouac & survival challenge" },
      { time: "Day 8", activity: "Community service day & parish heritage restoration" },
      { time: "Day 9", activity: "Parents' Day & Grand Sunset Campfire" },
      { time: "Day 10", activity: "Camp strike, Leave No Trace restoration & journey home" },
    ],
    packingKit: [
      "Heavy-duty internal frame 50-65L backpack",
      "Sleeping bag rated down to 0°C + insulated ground pad",
      "Full scout uniform + 5 troop t-shirts for daily camp wear",
      "2 pairs of hiking boots + waterproof rain poncho",
      "Personal mess kit, scout penknife, and unbreakable canteen",
      "Biodegradable soap, towel, sun cream, and insect repellent",
      "Complete medical record & tetanus booster verification"
    ],
    portalRequiredRole: "Confidential: Parent Roster & Daily Photo Log (Portal Only)",
  },
  {
    id: "spring-cleaning-drive",
    title: "Old Byblos Coastline Clean-Up",
    subtitle: "Scout Civic & Environmental Service",
    date: "May 16, 2026",
    duration: "Half Day",
    ages: "All Units (4 – 24)",
    location: "Byblos Port & Public Coastline",
    type: "service",
    description: "All units join together to clean and preserve the historic Byblos shoreline, sorting recyclables in partnership with local environmental groups.",
    badge: "Civic Service",
    badgeColor: "bg-teal-700 text-white",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
    meetingPoint: "Old Byblos Fishing Harbour",
    departureTime: "Saturday, May 16 at 08:30 AM",
    returnTime: "Saturday, May 16 at 01:00 PM",
    fullOverview: [
      "As citizens of Byblos, Saint Jean Marc scouts carry a duty of custodianship over our ancient heritage and Mediterranean coastline.",
      "Equipped with gloves, reusable burlap bags, and sorting bins, patrols sweep the rocky coast from the Crusader Castle to the public beach, recording ecological data for civic awareness."
    ],
    scheduleHighlights: [
      { time: "08:30", activity: "Assembly, safety briefing and equipment distribution at port" },
      { time: "09:00", activity: "Patrol sectors cleanup & micro-plastic separation" },
      { time: "12:00", activity: "Weighing of collected waste and recycling handover" },
      { time: "12:30", activity: "Shared scout snack and debrief on coastal marine ecology" },
    ],
    packingKit: [
      "Troop t-shirt & foulard",
      "Heavy-duty work or gardening gloves",
      "Sun hat and high SPF sun cream",
      "Reusable water bottle (1L minimum)"
    ],
    portalRequiredRole: "Open Community Service",
  },
];
