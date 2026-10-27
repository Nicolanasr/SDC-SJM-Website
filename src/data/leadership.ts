export interface LeaderNode {
  id: string;
  name: string;
  role: string;
  unit?: string;
  bio?: string;
  yearsInGroup?: string;
  children?: LeaderNode[];
}

export interface LeadershipHierarchy {
  groupLeader: LeaderNode;
  chaplain: LeaderNode;
  council: LeaderNode[];
  sectionBranches: {
    branchName: string;
    branchId: string;
    color: string;
    leaders: LeaderNode[];
  }[];
}

export const leadershipData: LeadershipHierarchy = {
  groupLeader: {
    id: "cg",
    name: "Chef de Groupe",
    role: "Group Scout Leader",
    bio: "Guiding the group's scout vision, leadership formation, and parish engagement.",
    yearsInGroup: "Scout since 2008",
  },
  chaplain: {
    id: "aumonier",
    name: "Père Aumônier",
    role: "Spiritual Counselor & Parish Priest",
    bio: "Guiding the spiritual journey and pastoral life of Saint Jean Marc youth.",
    yearsInGroup: "Paroisse Saint Jean Marc",
  },
  council: [
    {
      id: "adj-cg",
      name: "Chef Adjoint de Groupe",
      role: "Deputy Group Leader",
      bio: "Overseeing operations, training, and unit coordination.",
      yearsInGroup: "12+ years in group",
    },
    {
      id: "tresorier",
      name: "Responsable Trésorerie",
      role: "Treasurer & Logistics",
      bio: "Managing group finances, camp budgets, and material procurement.",
      yearsInGroup: "10+ years in group",
    },
    {
      id: "materiel",
      name: "Chef Matériel & Quartier-Maître",
      role: "Quartermaster & Equipment",
      bio: "Maintaining tents, pioneering timber, pioneering ropes, and camping gear.",
      yearsInGroup: "8+ years in group",
    },
    {
      id: "secretaire",
      name: "Secrétaire & Registrations",
      role: "Registrar & Communications",
      bio: "Handling parent inquiries, medical sheets, and membership records.",
      yearsInGroup: "7+ years in group",
    },
  ],
  sectionBranches: [
    {
      branchName: "Gramiz & Zahrat (Ages 4–11)",
      branchId: "gramiz-zahrat",
      color: "border-amber-400 bg-amber-50/70",
      leaders: [
        {
          id: "chef-gramiz",
          name: "Chef d'Unité Gramiz & Zahrat",
          role: "Pack Leader (Akela)",
          bio: "Guiding cubs and brownies through outdoor games, sharing, and jungle law.",
          children: [
            { id: "adj-g1", name: "Chef Adjoint (Baloo)", role: "Game & Lore Master" },
            { id: "adj-g2", name: "Chef Adjoint (Bagheera)", role: "Skills & Crafts Leader" },
          ]
        }
      ]
    },
    {
      branchName: "Kochefe & Mourchidet (Ages 11–16)",
      branchId: "kochefe-mourchidet",
      color: "border-emerald-500 bg-emerald-50/70",
      leaders: [
        {
          id: "chef-troupe",
          name: "Chef de Troupe & Compagnie",
          role: "Troop Leader",
          bio: "Fostering patrol autonomy, wilderness expeditions, pioneering, and campfire lore.",
          children: [
            { id: "adj-k1", name: "Chef Adjoint Troupe", role: "Pioneering & Wilderness Lead" },
            { id: "adj-k2", name: "Cheffe Adjointe Compagnie", role: "Orienteering & Camp Coordinator" },
          ]
        }
      ]
    },
    {
      branchName: "Jouwele & Mounjidet (Ages 16–24)",
      branchId: "jouwele-mounjidet",
      color: "border-sky-500 bg-sky-50/70",
      leaders: [
        {
          id: "chef-clan",
          name: "Chef de Clan & Relais",
          role: "Clan Leader",
          bio: "Coordinating humanitarian projects, mountain traverses, and social service.",
          children: [
            { id: "adj-j1", name: "Chef Adjoint Clan", role: "Service Projects Coordinator" },
            { id: "adj-j2", name: "Cheffe Adjointe Relais", role: "Expedition & Route Planner" },
          ]
        }
      ]
    }
  ]
};
