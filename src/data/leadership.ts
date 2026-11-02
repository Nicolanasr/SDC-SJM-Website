export interface LeaderNode {
  id: string;
  name: string;
  nameAr: string;
  role: string;
  roleAr: string;
  unit?: string;
  unitAr?: string;
  bio: string;
  bioAr: string;
  avatar?: string;
  yearsInGroup?: string;
  children?: LeaderNode[];
}

export interface LeadershipHierarchy {
  chaplain: LeaderNode;
  groupLeader: LeaderNode;
  deputyLeader: LeaderNode;
  council: LeaderNode[];
  units: {
    title: string;
    titleAr: string;
    branchId: string;
    color: string;
    chief: LeaderNode;
    assistant: LeaderNode;
  }[];
}

export const leadershipData: LeadershipHierarchy = {
  chaplain: {
    id: "pere-simon",
    name: "Père Simon Abboud",
    nameAr: "الأب سيمون عبود",
    role: "Spiritual Chaplain (Aumônier du Groupe)",
    roleAr: "مرشد الفوج الروحي",
    bio: "Parish priest of Saint Jean Marc, accompanying the spiritual, moral, and human growth of our leaders and scouts.",
    bioAr: "كاهن رعية مار يوحنا مرقس، يرافق الفوج روحياً وتربوياً في كافة المناسبات والمخيمات الكشفية.",
    yearsInGroup: "Paroisse Saint Jean Marc",
  },
  groupLeader: {
    id: "ghinwa",
    name: "Chefteine Ghinwa",
    nameAr: "القائدة غنوة",
    role: "Chefteine de Groupe (Group Leader)",
    roleAr: "قائدة الفوج",
    bio: "Leading group operations, educational vision, and community relations, carrying our 49-year heritage forward.",
    bioAr: "تقود مجلس الفوج وتتابع المسيرة التربوية والكشفية بالتنسيق مع الرعية وجمعية كشافة الأرز.",
    yearsInGroup: "Over 15 years in group",
  },
  deputyLeader: {
    id: "nicolas",
    name: "Chef Nicolas",
    nameAr: "القائد نيكولا",
    role: "Assistant Chef de Groupe (Deputy Leader)",
    roleAr: "مساعد قائد الفوج",
    bio: "Assisting group direction, field logistics, safety standards, and troop coordination across all sections.",
    bioAr: "يعاون قيادة الفوج في تنظيم العمليات الميدانية، معايير السلامة، ومتابعة الأقسام.",
    yearsInGroup: "Over 12 years in group",
  },
  council: [
    {
      id: "admin-leader",
      name: "Chef Georges",
      nameAr: "القائد جورج",
      role: "Administrative Leader (Responsable Administratif)",
      roleAr: "القائد الإداري ومسؤول التنظيم",
      bio: "Managing institutional coordination, official federation records, and internal group governance.",
      bioAr: "إدارة الملفات الرسمية، التنسيق مع الجمعية، ومتابعة المعاملات الإدارية للفوج.",
      yearsInGroup: "Maitrise de Groupe",
    },
    {
      id: "admin-leader",
      name: "Chef Georges",
      nameAr: "القائد جورج",
      role: "Administrative Leader (Responsable Administratif)",
      roleAr: "القائد الإداري ومسؤول التنظيم",
      bio: "Managing institutional coordination, official federation records, and internal group governance.",
      bioAr: "إدارة الملفات الرسمية، التنسيق مع الجمعية، ومتابعة المعاملات الإدارية للفوج.",
      yearsInGroup: "Maitrise de Groupe",
    },
    {
      id: "petina",
      name: "Chefteine Petina",
      nameAr: "القائدة بيتينا",
      role: "Group Secretary (Secrétaire de Groupe)",
      roleAr: "أمينة السر",
      bio: "Managing member records, parent communications, and official correspondence.",
      bioAr: "متابعة سجلات المنتسبين، التواصل مع الأهل، والمراسلات الرسمية للفوج.",
    },
    {
      id: "francois",
      name: "François",
      nameAr: "فرانسوا",
      role: "Group Treasurer (Trésorier)",
      roleAr: "أمين الصندوق والمالية",
      bio: "Overseeing non-profit finances, activity budgets, and transparent accounts.",
      bioAr: "إدارة مالية الفوج غير الربحية، ميزانيات المخيمات، والشفافية الحسابية.",
    },
    {
      id: "rayen",
      name: "Rayen",
      nameAr: "راين",
      role: "Quartermaster & Equipment (Responsable Matériel)",
      roleAr: "مسؤول التجهيزات والعتاد",
      bio: "Supervising group material inventory, canvas tents, pioneering timber, and field tools.",
      bioAr: "الإشراف على مستودع الفوج، صيانة الخيم، حبال وأخشاب ريادة الخلاء والعتاد الميداني.",
    },
    {
      id: "reine",
      name: "Chefteine Reine",
      nameAr: "القائدة رين",
      role: "Provisions & Supplies (Responsable Ravitaillement)",
      roleAr: "مسؤولة التموين والمؤونة",
      bio: "Coordinating food supplies, nutrition standards, and camp kitchen logistics for all units.",
      bioAr: "تنظيم المؤونة الغذائية، معايير التغذية السليمة، ومستلزمات مطابخ المخيمات.",
    },
    {
      id: "selena",
      name: "Chefteine Selena Sassine",
      nameAr: "القائدة سيلينا ساسين",
      role: "Media & Communications (Responsable Communication)",
      roleAr: "مسؤولة الإعلام والتواصل",
      bio: "Documenting group chronicles, photo archives, and public outreach across Byblos.",
      bioAr: "توثيق نشاطات الفوج، إدارة المنصات الإعلامية، وأرشيف الصور ومجلة الفوج.",
    },
  ],
  units: [
    {
      title: "Louveteaux (Boys 4–11)",
      titleAr: "فرع الجراميز (الفتيان ٤–١١ سنة)",
      branchId: "jaramiz-zahrat",
      color: "border-amber-400 bg-amber-50/80",
      chief: {
        id: "chef-jaramiz",
        name: "Chef Marc",
        nameAr: "القائد مارك",
        role: "Chef d'Unité (Akela)",
        roleAr: "قائد فرع الجراميز (أكيلا)",
        bio: "Leading younger boys through character games, jungle lore, and outdoor camaraderie.",
        bioAr: "قيادة سرب الجراميز عبر ألعاب الحركة، قصص الغابة وبناء الشخصية.",
      },
      assistant: {
        id: "adj-jaramiz",
        name: "Chef Elie",
        nameAr: "القائد إيلي",
        role: "Chef Adjoint (Baloo)",
        roleAr: "مساعد قائد الجراميز (بالو)",
        bio: "Supporting pack activities, crafts, and safety workshops.",
        bioAr: "معاونة قيادة السرب في ورش العمل والأنشطة الميدانية.",
      },
    },
    {
      title: "Jeannettes (Girls 4–11)",
      titleAr: "فرع الزهرات (الفتيات ٤–١١ سنة)",
      branchId: "jaramiz-zahrat",
      color: "border-amber-400 bg-amber-50/80",
      chief: {
        id: "cheftaine-zaharat",
        name: "Chefteine Rita",
        nameAr: "القائدة ريتا",
        role: "Chefteine d'Unité",
        roleAr: "قائدة فرع الزهرات",
        bio: "Nurturing young girls' confidence, friendship, sharing, and creative outdoor play.",
        bioAr: "رعاية الفتيات الصغيرات وتعزيز ثقتهن بأنفسهن وروح المشاركة والتعاون.",
      },
      assistant: {
        id: "adj-zaharat",
        name: "Chefteine Nour",
        nameAr: "القائدة نور",
        role: "Chefteine Adjointe",
        roleAr: "مساعدة قائدة الزهرات",
        bio: "Assisting unit games, songs, and camp discovery.",
        bioAr: "مساعدة القائدة في ألعاب السرب والأناشيد والمخيمات.",
      },
    },
    {
      title: "Scouts (Boys 11–16)",
      titleAr: "فرع الكشافة (الفتيان ١١–١٦ سنة)",
      branchId: "kechefe-mourchidet",
      color: "border-emerald-500 bg-emerald-50/80",
      chief: {
        id: "chef-kechefe",
        name: "Chef Charbel",
        nameAr: "القائد شربل",
        role: "Chef de Troupe",
        roleAr: "قائد فرقة الكشافة",
        bio: "Mentoring boy patrols in woodcraft, Froissartage pioneering, and mountain expeditions.",
        bioAr: "مرافقة طلائع الفتيان في ريادة الخلاء، المنشآت الخشبية، ومسارات الجبال.",
      },
      assistant: {
        id: "adj-kechefe",
        name: "Chef Jad",
        nameAr: "القائد جاد",
        role: "Chef Adjoint",
        roleAr: "مساعد قائد فرقة الكشافة",
        bio: "Assisting patrol training, topographic navigation, and bivouac safety.",
        bioAr: "تدريب العرفاء ومتابعة السلامة وتحديد المسارات بالبوصلة.",
      },
    },
    {
      title: "Guides (Girls 11–16)",
      titleAr: "فرع المرشدات (الفتيات ١١–١٦ سنة)",
      branchId: "kechefe-mourchidet",
      color: "border-emerald-500 bg-emerald-50/80",
      chief: {
        id: "cheftaine-morchidet",
        name: "Chefteine Yasmina",
        nameAr: "القائدة ياسمينة",
        role: "Chefteine de Compagnie",
        roleAr: "قائدة فرقة المرشدات",
        bio: "Empowering teen girls through patrol leadership, autonomy, campfire cooking, and sisterhood.",
        bioAr: "تنمية مهارات القيادة والاستقلالية وريادة الخلاء لدى المرشدات.",
      },
      assistant: {
        id: "adj-morchidet",
        name: "Chefteine Chloe",
        nameAr: "القائدة كلوي",
        role: "Chefteine Adjointe",
        roleAr: "مساعدة قائدة المرشدات",
        bio: "Coordinating guide patrol tournaments, campcraft, and hiking badges.",
        bioAr: "معاونة قائدة الفرقة في مسابقات الطلائع وشارات الهوايات.",
      },
    },
    {
      title: "Routiers (Young Men 16–24)",
      titleAr: "عشيرة الجوالة (الشباب ١٦–٢٤ سنة)",
      branchId: "jouwele-mounjidet",
      color: "border-red-500 bg-red-50/80",
      chief: {
        id: "chef-jouwele",
        name: "Chef Anthony",
        nameAr: "القائد أنطوني",
        role: "Chef de Clan",
        roleAr: "قائد عشيرة الجوالة",
        bio: "Guiding young men along the Open Road through civic service, high treks, and leadership.",
        bioAr: "قيادة الشباب في مسارات الخلاء الطويلة ومشاريع التنمية والخدمة العامة.",
      },
      assistant: {
        id: "adj-jouwele",
        name: "Chef Joe",
        nameAr: "القائد جو",
        role: "Chef Adjoint",
        roleAr: "مساعد قائد الجوالة",
        bio: "Assisting clan expeditions and emergency community aid.",
        bioAr: "معاونة قائد العشيرة في تنظيم البعثات الإنمائية والخدمة الميدانية.",
      },
    },
    {
      title: "Caravelles (Young Women 16–24)",
      titleAr: "فرع المنجدات (الشابات ١٦–٢٤ سنة)",
      branchId: "jouwele-mounjidet",
      color: "border-red-500 bg-red-50/80",
      chief: {
        id: "cheftaine-mounjidet",
        name: "Chefteine Maria",
        nameAr: "القائدة ماريا",
        role: "Chefteine de Feu",
        roleAr: "قائدة فرع المنجدات",
        bio: "Leading young women through community impact, spiritual depth, and wilderness journeys.",
        bioAr: "مرافقة الشابات في مشاريع الخدمة الاجتماعية، التأمل، والمسيرات الجبلية.",
      },
      assistant: {
        id: "adj-mounjidet",
        name: "Chefteine Lea",
        nameAr: "القائدة ليا",
        role: "Chefteine Adjointe",
        roleAr: "مساعدة قائدة المنجدات",
        bio: "Supporting project execution and younger section mentoring.",
        bioAr: "متابعة المبادرات الإنسانية ومرافقة الفروع الصغرى في الفوج.",
      },
    },
  ],
};
