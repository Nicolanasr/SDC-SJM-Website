export interface GalleryPhoto {
  id: string;
  albumId: string;
  title: string;
  location: string;
  year: string;
  imageUrl: string;
  aspect: "square" | "landscape" | "tall";
}

export interface GalleryAlbum {
  id: string;
  name: string;
  count: number;
  coverImage: string;
  description: string;
  category: "camps" | "woodcraft" | "hikes" | "ceremonies";
}

export const galleryAlbums: GalleryAlbum[] = [
  {
    id: "summer-camps",
    name: "Grand Summer Camps",
    count: 6,
    coverImage: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1000&q=80",
    description: "Living 10 days in the high mountains of Lebanon under canvas tents, building our own kitchen and table structures.",
    category: "camps",
  },
  {
    id: "pioneering",
    name: "Froissartage & Pioneering",
    count: 4,
    coverImage: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1000&q=80",
    description: "Rope lashings, timber watchtowers, bridges, and campfire cooking setups crafted by the patrols.",
    category: "woodcraft",
  },
  {
    id: "hikes-expeditions",
    name: "Hikes & Mountain Trails",
    count: 5,
    coverImage: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1000&q=80",
    description: "From the Cedars of God to the trails of Mount Lebanon and Byblos coastal hills.",
    category: "hikes",
  },
  {
    id: "parish-ceremonies",
    name: "Saint Jean Marc & Ceremonies",
    count: 4,
    coverImage: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=80",
    description: "May 5 anniversary celebrations, scout promise investitures, and parish solemn masses.",
    category: "ceremonies",
  },
];

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: "p1",
    albumId: "summer-camps",
    title: "Campfire Circle Under the Stars",
    location: "Qadisha High Plateau",
    year: "Summer Camp",
    imageUrl: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80",
    aspect: "landscape",
  },
  {
    id: "p2",
    albumId: "summer-camps",
    title: "Tent Pitching on the Ridge",
    location: "Bcharre Mountains",
    year: "Summer Camp",
    imageUrl: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80",
    aspect: "tall",
  },
  {
    id: "p3",
    albumId: "summer-camps",
    title: "Campfire Stew Cookout",
    location: "Cedars Reserve Edge",
    year: "Patrol Competition",
    imageUrl: "https://images.unsplash.com/photo-1496080174650-637e3f22fa03?auto=format&fit=crop&w=1200&q=80",
    aspect: "square",
  },
  {
    id: "p4",
    albumId: "pioneering",
    title: "Timber Watchtower Construction",
    location: "Troop Camp Site",
    year: "Froissartage",
    imageUrl: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80",
    aspect: "tall",
  },
  {
    id: "p5",
    albumId: "pioneering",
    title: "Scout Knotting & Pioneering Ties",
    location: "Saint Jean Marc Hall",
    year: "Weekly Workshop",
    imageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80",
    aspect: "landscape",
  },
  {
    id: "p6",
    albumId: "hikes-expeditions",
    title: "Sunrise Summit Ridge Walk",
    location: "Mount Sannine Trail",
    year: "Jouwele Raid",
    imageUrl: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=80",
    aspect: "landscape",
  },
  {
    id: "p7",
    albumId: "hikes-expeditions",
    title: "Orienteering with Map & Compass",
    location: "Jabal Moussa Biosphere",
    year: "Patrol Salida",
    imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
    aspect: "square",
  },
  {
    id: "p8",
    albumId: "parish-ceremonies",
    title: "Scout Promise Investiture Ceremony",
    location: "Saint Jean Marc Byblos",
    year: "Anniversary 5 May",
    imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80",
    aspect: "landscape",
  },
  {
    id: "p9",
    albumId: "parish-ceremonies",
    title: "Group Parade in Ancient Byblos",
    location: "UNESCO Se7a Byblos",
    year: "Parish Feast",
    imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
    aspect: "tall",
  },
];
