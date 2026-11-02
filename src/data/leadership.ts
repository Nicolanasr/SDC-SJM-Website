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
    role: "Mourched Al Foj (Spiritual Chaplain)",
    roleAr: "مرشد الفوج الروحي",
    bio: "Parish priest of Saint Jean Marc, accompanying the spiritual, moral, and human growth of our leaders and scouts.",
    bioAr: "كاهن رعية مار يوحنا مرقس، يرافق الفوج روحياً وتربوياً في كافة المناسبات والمخيمات الكشفية.",
    yearsInGroup: "Paroisse Saint Jean Marc",
  },
  groupLeader: {
    id: "ghinwa",
    name: "Chef Ghinwa",
    nameAr: "القائدة غنوة",
    role: "Chef de Groupe (Group Scout Leader)",
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
      id: "ka2ed-idare",
      name: "Chef Georges",
      nameAr: "القائد جورج",
      role: "Ka2ed Idare (Administrative Leader)",
      roleAr: "القائد الإداري ومسؤول التنظيم",
      bio: "Managing institutional coordination, official federation records, and internal group governance.",
      bioAr: "إدارة الملفات الرسمية، التنسيق مع الجمعية، ومتابعة المعاملات الإدارية للفوج.",
      yearsInGroup: "Maitrise de Groupe",
    },
    {
      id: "petina",
      name: "Petina",
      nameAr: "بيتينا",
      role: "Secrétaire de Groupe",
      roleAr: "أمينة السر",
      bio: "Managing member records, parent communications, and official correspondence.",
      bioAr: "متابعة سجلات المنتسبين، التواصل مع الأهل، والمراسلات الرسمية للفوج.",
    },
    {
      id: "francois",
      name: "François",
      nameAr: "فرانسوا",
      role: "Responsable Sandou2 (Treasurer)",
      roleAr: "أمين الصندوق والمالية",
      bio: "Overseeing non-profit finances, activity budgets, and transparent accounts.",
      bioAr: "إدارة مالية الفوج غير الربحية، ميزانيات المخيمات، والشفافية الحسابية.",
    },
    {
      id: "rayen",
      name: "Rayen",
      nameAr: "راين",
      role: "Responsable Tejhizet (Quartermaster & Equipment)",
      roleAr: "مسؤول التجهيزات والعتاد",
      bio: "Supervising group material inventory, canvas tents, pioneering timber, and field tools.",
      bioAr: "الإشراف على مستودع الفوج، صيانة الخيم، حبال وأخشاب ريادة الخلاء والعتاد الميداني.",
    },
    {
      id: "reine",
      name: "Reine",
      nameAr: "رين",
      role: "Responsable Mounet (Provisions & Supplies)",
      roleAr: "مسؤولة المونة والتموين",
      bio: "Coordinating food supplies, nutrition standards, and camp kitchen logistics for all units.",
      bioAr: "تنظيم المؤونة الغذائية، معايير التغذية السليمة، ومستلزمات مطابخ المخيمات.",
    },
    {
      id: "selena",
      name: "Selena Sassine",
      nameAr: "سيلينا ساسين",
      role: "Responsable E3lem (Media & Communications)",
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
        role: "Chef Adjoint (Mse3ed Baloo)",
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
        name: "Cheftaine Rita",
        nameAr: "القائدة ريتا",
        role: "Cheftaine d'Unité",
        roleAr: "قائدة فرع الزهرات",
        bio: "Nurturing young girls' confidence, friendship, sharing, and creative outdoor play.",
        bioAr: "رعاية الفتيات الصغيرات وتعزيز ثقتهن بأنفسهن وروح المشاركة والتعاون.",
      },
      assistant: {
        id: "adj-zaharat",
        name: "Cheftaine Nour",
        nameAr: "القائدة نور",
        role: "Cheftaine Adjointe (Mse3ed)",
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
        role: "Chef Adjoint (Mse3ed)",
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
        name: "Cheftaine Yasmina",
        nameAr: "القائدة ياسمينة",
        role: "Cheftaine de Compagnie",
        roleAr: "قائدة فرقة المرشدات",
        bio: "Empowering teen girls through patrol leadership, autonomy, campfire cooking, and sisterhood.",
        bioAr: "تنمية مهارات القيادة والاستقلالية وريادة الخلاء لدى المرشدات.",
      },
      assistant: {
        id: "adj-morchidet",
        name: "Cheftaine Chloe",
        nameAr: "القائدة كلوي",
        role: "Cheftaine Adjointe (Mse3ed)",
        roleAr: "مساعدة قائدة المرشدات",
        bio: "Coordinating guide patrol tournaments, campcraft, and hiking badges.",
        bioAr: "معاونة قائدة الفرقة في مسابقات الطلائع وشارات الهوايات.",
      },
    },
    {
      title: "Routiers (Young Men 16–24)",
      titleAr: "عشيرة الجوالة (الشباب ١٦–٢٤ سنة)",
      branchId: "jouwele-mounjidet",
      color: "border-sky-500 bg-sky-50/80",
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
        role: "Chef Adjoint (Mse3ed)",
        roleAr: "مساعد قائد الجوالة",
        bio: "Assisting clan expeditions and emergency community aid.",
        bioAr: "معاونة قائد العشيرة في تنظيم البعثات الإنمائية والخدمة الميدانية.",
      },
    },
    {
      title: "Caravelles (Young Women 16–24)",
      titleAr: "فرع المنجدات (الشابات ١٦–٢٤ سنة)",
      branchId: "jouwele-mounjidet",
      color: "border-sky-500 bg-sky-50/80",
      chief: {
        id: "cheftaine-mounjidet",
        name: "Cheftaine Maria",
        nameAr: "القائدة ماريا",
        role: "Cheftaine de Feu",
        roleAr: "قائدة فرع المنجدات",
        bio: "Leading young women through community impact, spiritual depth, and wilderness journeys.",
        bioAr: "مرافقة الشابات في مشاريع الخدمة الاجتماعية، التأمل، والمسيرات الجبلية.",
      },
      assistant: {
        id: "adj-mounjidet",
        name: "Cheftaine Lea",
        nameAr: "القائدة ليا",
        role: "Cheftaine Adjointe (Mse3ed)",
        roleAr: "مساعدة قائدة المنجدات",
        bio: "Supporting project execution and younger section mentoring.",
        bioAr: "متابعة المبادرات الإنسانية ومرافقة الفروع الصغرى في الفوج.",
      },
    },
  ],
};
