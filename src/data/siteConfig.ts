export interface SiteConfig {
  groupName: string;
  tagline: string;
  arabicGroupName: string;
  arabicTagline: string;
  arabicFullTitle: string;
  siteUrl: string;
  parish: string;
  foundingDate: string;
  foundedYear: number;
  meetingSchedule: {
    day: string;
    time: string;
    locationName: string;
    locationDetails: string;
    googleMapsQuery: string;
    googleMapsEmbedUrl: string;
  };
  contact: {
    phoneDisplay: string;
    phoneRaw: string; // international format for tel: and wa.me
    email: string;
    address: string;
    whatsappMessage: string;
  };
  socials: {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
  };
}

export const siteConfig: SiteConfig = {
  groupName: "Scout Des Cèdres",
  tagline: "Groupe Saint Jean Marc",
  arabicGroupName: "كشافة الأرز",
  arabicTagline: "فوج القديس يوحنا مرقس",
  arabicFullTitle: "جمعية كشافة الأرز - فوج القديس يوحنا مرقس - جبيل",
  siteUrl: "https://scout-saint-jeanmarc.org",
  parish: "Paroisse Saint Jean Marc",
  foundingDate: "May 5, 1977",
  foundedYear: 1977,
  meetingSchedule: {
    day: "Every Saturday",
    time: "3:00 PM – 4:30 PM",
    locationName: "Saint Jean Marc Scout Hall",
    locationDetails: "Near Antoch Saint Jean Marc UNESCO Se7a, Byblos (Jbeil), Lebanon",
    googleMapsQuery: "4JCW%2BF8J%2C+Jbeil",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1651.4825241006824!2d35.64558202269154!3d34.121644512291006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f5cae82cfeded%3A0x600dc45b0b254e8c!2s4JCW%2BF8J%2C%20Jbeil!5e0!3m2!1sen!2slb!4v1792755660585!5m2!1sen!2slb",
  },
  contact: {
    phoneDisplay: "+961 70 000 000",
    phoneRaw: "96170000000",
    email: "scoutsdescedressjm@gmail.com",
    address: "Saint Jean Marc, Byblos, Mount Lebanon",
    whatsappMessage: "Hello Scout Saint Jean Marc! I would like to inquire about joining the group / weekly activities.",
  },
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
};
