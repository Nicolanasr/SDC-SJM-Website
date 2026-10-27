export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  authorRole: string;
  category: "Camp Life" | "Heritage" | "Parent Guide" | "Woodcraft";
  readTime: string;
  image: string;
  excerpt: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "froissartage-woodcraft-without-nails",
    title: "How our patrols build a 6-meter watchtower without a single nail",
    date: "October 14, 2026",
    author: "Chef Matériel & Troupe Leaders",
    authorRole: "Pioneering Workshop",
    category: "Woodcraft",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Every summer in the high mountains of Lebanon, our Kochefe patrols transform raw pine timbers and sisal rope into kitchens, dining shelters, and watchtowers. Here is the lost art of Froissartage.",
    content: [
      "In modern times where everything arrives pre-assembled in plastic boxes, scouting teaches a radically different lesson: self-reliance.",
      "The technique is called Froissartage—invented by French scout pioneer Michel Froissart in the 1930s. Instead of metal nails or screws, which damage living trees and rust away, scouts use wood joints, mortise and tenon, and traditional rope lashings (brêlages).",
      "During our 10-day Grand Camp, each autonomous patrol of 6 to 8 scouts is given an empty parcel of mountain terrain. Within 48 hours, they construct their entire living environment: an elevated kitchen table with fire hearth, a food pantry safe from mountain foxes, a tool rack, and an entry gateway.",
      "Building with your hands does something transformative to young minds: it teaches patience, structural physics, and the sheer pride of eating dinner at a table you lashed with your patrol brothers and sisters."
    ]
  },
  {
    slug: "founding-of-saint-jean-marc-1977",
    title: "May 5, 1977: The story of twelve boys, one tent, and a parish promise",
    date: "May 5, 2026",
    author: "Archival Committee",
    authorRole: "Groupe Saint Jean Marc",
    category: "Heritage",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Amidst the turbulence of 1977 in Lebanon, a handful of committed young adults in Byblos decided that children needed a brotherhood of peace, discipline, and nature. 49 years later, the flame still burns.",
    content: [
      "When Scout Des Cèdres was founded at the church of Saint Jean Marc on May 5, 1977, resources were scarce. There was no clubhouse, no bank account, and uniforms had to be sewn by hand by parish mothers.",
      "What they had was an unshakeable conviction: that young Lebanese boys and girls deserved an education based on honour, service, and open-air brotherhood.",
      "Throughout the difficult years, when travel between regions was disrupted, Saint Jean Marc never ceased meeting. When camps in distant cedar reserves were impossible, patrols camped in local orchards and olive groves.",
      "Today, almost half a century later, sons and daughters of those original 1977 scouts wear the same cedar neckerchief and gather in the same UNESCO Se7a every Saturday afternoon."
    ]
  },
  {
    slug: "parent-guide-first-weekend-camp",
    title: "A reassuring parent guide to your child's first weekend camp",
    date: "September 20, 2026",
    author: "Akela & Louveteaux Leaders",
    authorRole: "Gramiz & Zahrat Pack",
    category: "Parent Guide",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Sending your 7 or 10-year-old on their first sleepaway camp can feel daunting. Here is exactly what happens from Friday departure to Sunday campfire reunion.",
    content: [
      "Every year in autumn, we welcome anxious parents asking the same loving questions: Will my child be cold? What if they miss home at bedtime? Who checks that they eat their vegetables?",
      "Here is how our certified chefs handle your child's first camp with tenderness and discipline.",
      "First, routine: Scouts follow a clear, comforting daily rhythm. Morning flag ceremony, shared breakfast where everyone takes turns setting tables, skill workshops, afternoon forest games, hot dinner, and the famous campfire with singing and stories.",
      "By 9:30 PM, after a warm herbal tea, leaders do tent rounds. A chef remains on watch throughout the night, and our group first-aider is permanently on site.",
      "When parents arrive on Sunday afternoon to pick up their children, they are consistently astonished: their quiet child has made three new best friends, learned to roll their own sleeping bag, and won't stop singing scout campfire songs all the way home."
    ]
  }
];
