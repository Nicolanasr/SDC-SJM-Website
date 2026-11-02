export interface BlogPost {
  slug: string;
  title: string;
  titleAr: string;
  date: string;
  dateAr: string;
  author: string;
  authorRole: string;
  authorRoleAr: string;
  category: "Parent Corner" | "Outdoor Skills" | "Camp Life" | "Heritage";
  categoryAr: string;
  readTime: string;
  readTimeAr: string;
  image: string;
  featured?: boolean;
  excerpt: string;
  excerptAr: string;
  keyTakeaways?: string[];
  arabicKeyTakeaways?: string[];
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-join-scouting-in-lebanon-10-reasons",
    title: "Why join scouting in Lebanon? 10 reasons real adventure beats screen time",
    titleAr: "لماذا الكشفية في لبنان؟ ١٠ أسباب تجعل المغامرة الحقيقية أفضل استثمار لأبنائكم",
    date: "October 28, 2026",
    dateAr: "٢٨ تشرين الأول ٢٠٢٦",
    author: "Maitrise de Groupe",
    authorRole: "Groupe Saint Jean Marc",
    authorRoleAr: "مجلس قيادة الفوج",
    category: "Parent Corner",
    categoryAr: "ركن الأهل",
    readTime: "7 min read",
    readTimeAr: "٧ دقائق للقراءة",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    excerpt: "From screen addiction to mental resilience: discover why four generations of families in Byblos choose Saturday scout meetings and high mountain camps over digital isolation.",
    excerptAr: "من مواجهة إدمان الشاشات إلى بناء الصلابة النفسية: اكتشفوا لماذا تختار مئات العائلات في جبيل اللقاءات الكشفية الأسبوعية والمخيمات الجبلية بديلاً عن العزلة الرقمية.",
    keyTakeaways: [
      "100% phone-free Saturdays in the historic courtyard of Saint Jean Marc in Byblos",
      "Develops grit, emotional self-reliance, and hands-on problem solving in Lebanese nature",
      "Affordable non-profit model ensuring high-quality mentorship for every child"
    ],
    arabicKeyTakeaways: [
      "أنشطة سبت خالية تماماً من الهواتف في باحة مار يوحنا مرقس الأثرية في جبيل",
      "بناء الصلابة النفسية، الاعتماد على النفس، وحل المشكلات العملية في طبيعة لبنان",
      "نشاط تطوعي غير ربحي يتيح تنشئة متكاملة لكل طفل بعيداً عن أعباء النوادي التجارية"
    ],
    content: [
      "In an era where teenagers spend upwards of seven hours daily on smartphones and social media, childhood is quietly migrating indoors. Parents frequently ask us: What makes a youth movement like Scout Des Cèdres Saint Jean Marc in Byblos so enduringly magnetic?",
      "1. True Independence: Scouts learn to pack their own bags, cook over open flames, pitch their own canvas shelters, and take ownership of their gear from age four to twenty-four.",
      "2. Unfiltered Social Connection: In a patrol of 6 to 8 peers, there are no algorithmic likes. Respect is earned through showing up in the rain, sharing rations, and pulling your weight on the trail.",
      "3. Direct Psychological Grounding: Neuroscience proves that hours spent in Lebanese cedar forests and limestone river valleys significantly lower adolescent anxiety and restore attention spans.",
      "4. Hands-on Engineering (Froissartage): Building 6-meter observation towers and elevated dining shelters using only raw timber and sisal rope teaches applied physics and teamwork.",
      "5. Certified Emergency First Aid: Leaders and senior rovers hold Red Cross certified credentials, giving youth real-world readiness to handle burns, sprains, and field emergencies.",
      "6. Civic Pride & Byblos Heritage: Since May 5, 1977, our troop has been anchored in the ancient UNESCO courtyard of Saint Jean Marc, instilling deep citizenship and historic appreciation.",
      "7. Autonomy Through Small Patrols: Instead of adults barking orders, teenage Patrol Leaders (Chefs de Patrouille) learn how to motivate peers, resolve disputes, and lead by example.",
      "8. Affordable Non-Profit Access: Unlike private clubs or pricey summer camps, authentic scouting operates strictly at cost with nominal dues so that no child is ever turned away.",
      "9. Lifelong Brotherhood & Sisterhood: The friends made huddling under canvas during an unexpected mountain thunderstorm remain friends for forty years.",
      "10. The Habit of Showing Up: In a world of flaking and low commitment, scouts learn the sacred code of duty, honour, and being dependable when others count on you."
    ]
  },
  {
    slug: "what-do-scouts-actually-do",
    title: "What do scouts actually do? A parent's complete guide from Saturdays to 10-day camps",
    titleAr: "ماذا يفعل الكشافة أسبوعياً؟ دليل شامل للأهل من لقاءات السبت حتى المخيم الصيفي",
    date: "October 20, 2026",
    dateAr: "٢٠ تشرين الأول ٢٠٢٦",
    author: "Unit Leadership Team",
    authorRole: "Sections Coordinators",
    authorRoleAr: "منسقو الوحدات الكشفية",
    category: "Camp Life",
    categoryAr: "الحياة الكشفية",
    readTime: "6 min read",
    readTimeAr: "٦ دقائق للقراءة",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80",
    excerpt: "A transparent breakdown of a scout's year: Saturday afternoon games in the Saint Jean Marc courtyard, day hikes through Lebanon's valleys, and 10 uninterrupted days under canvas.",
    excerptAr: "نظرة شفافة ومفصلة على مدار العام الكشفي: ألعاب بعد ظهر السبت في باحة مار يوحنا مرقس، مسيرات الوديان، وعشرة أيام متواصلة تحت الخيمة في أعالي الجبال.",
    keyTakeaways: [
      "Saturday routine: 3:00 PM opening circle, age-specific woodcraft and games, 4:30 PM dismissal",
      "Seasonal day treks (Salidas) exploring Qadisha Valley, Tannourine, and Byblos coastline",
      "Annual 10-day summer camp: 100% wooden infrastructure, campfire cooking, and starry nights"
    ],
    arabicKeyTakeaways: [
      "برنامج السبت: ٣:٠٠ رفع العلم، ألعاب وورش مهارات حسب العمر، ٤:٣٠ انتهاء النشاط",
      "رحلات نهارية فصلية (Salidas) لاستكشاف وادي قاديشا وتنورين وشاطئ جبيل",
      "المخيم الصيفي الكبير (١٠ أيام): بناء المنشآت بالخشب، الطبخ على الحطب، وسهرات النار"
    ],
    content: [
      "Every parent considering scouting asks the identical practical questions: What happens between 3:00 and 4:30 PM on Saturdays? Are camps safe? And what do youth gain year after year?",
      "The Saturday Rhythm: Gatherings open with the ceremonial troop assembly and flag raising in the ancient courtyard of Saint Jean Marc. For 90 minutes, units break into age-appropriate activities: cubs play active character-building games; scouts practice pioneering rope lashings and topographic navigation; rovers plan community service and high mountain expeditions.",
      "Seasonal Weekend Outings (Salidas): Every few months, patrols embark on outdoor day treks—hiking the Qadisha Valley, exploring Tannourine cedar trails, or cleaning the historic coast of Byblos.",
      "The 10-Day Grand Summer Camp: The apex of the scout year. Scouts travel into the high plateau of Mount Lebanon to build their entire camp infrastructure from untreated timber without nails. They sleep in canvas tents, cook communal meals on wood stoves, and gather around the legendary evening campfire for sketches, songs, and reflection.",
      "The Result: Young people who return home more confident, humble, helpful to their parents, and grounded in enduring moral character."
    ]
  },
  {
    slug: "froissartage-woodcraft-without-nails",
    title: "How our patrols build a 6-meter watchtower without a single nail",
    titleAr: "كيف تبني طلائعنا برج مراقبة بارتفاع ٦ أمتار دون مسمار واحد (فن الفرويسارتاج)",
    date: "October 14, 2026",
    dateAr: "١٤ تشرين الأول ٢٠٢٦",
    author: "Chef Matériel & Leaders",
    authorRole: "Pioneering Workshop",
    authorRoleAr: "ورشة ريادة الخلاء والتجهيزات",
    category: "Outdoor Skills",
    categoryAr: "مهارات الخلاء",
    readTime: "5 min read",
    readTimeAr: "٥ دقائق للقراءة",
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Every summer in the high mountains of Lebanon, our Kochefe patrols transform raw pine timbers and sisal rope into kitchens, dining shelters, and watchtowers. Here is the lost art of Froissartage.",
    excerptAr: "في كل صيف بأعالي جبال لبنان، تحوّل طلائع الكشافة أخشاب الصنوبر وحبال القنب إلى مطابخ، مقاعد وأبراج مراقبة. إليكم فن ريادة الخلاء الكشفي (فرويسارتاج).",
    keyTakeaways: [
      "Froissartage uses zero nails or screws, protecting living trees and teaching applied physics",
      "Patrols construct their complete living quarters in 48 hours: tables, kitchens, and gateways",
      "Instills lifelong pride of handcrafting and practical problem solving"
    ],
    arabicKeyTakeaways: [
      "تقنية الفرويسارتاج لا تستخدم المسامير، مما يحمي الأشجار ويعلم الهندسة الميدانية",
      "تبني الطليعة مقرها الكامل في ٤٨ ساعة: طاولة طعام، مطبخ مرتفع، وبوابة مخيم",
      "تغرس في الشباب فخر الإنجاز اليدوي والعمل الجماعي المتناغم"
    ],
    content: [
      "In modern times where everything arrives pre-assembled in plastic boxes, scouting teaches a radically different lesson: self-reliance.",
      "The technique is called Froissartage—invented by French scout pioneer Michel Froissart in the 1930s. Instead of metal nails or screws, which damage living trees and rust away, scouts use wood joints, mortise and tenon, and traditional rope lashings (brêlages).",
      "During our 10-day Grand Camp, each autonomous patrol of 6 to 8 scouts is given an empty parcel of mountain terrain. Within 48 hours, they construct their entire living environment: an elevated kitchen table with fire hearth, a food pantry safe from mountain foxes, a tool rack, and an entry gateway.",
      "Building with your hands does something transformative to young minds: it teaches patience, structural physics, and the sheer pride of eating dinner at a table you lashed with your patrol brothers and sisters."
    ]
  },
  {
    slug: "founding-of-saint-jean-marc-1977",
    title: "May 5, 1977: The story of twelve boys, one tent, and a parish promise in Byblos",
    titleAr: "٥ أيار ١٩٧٧: قصة ١٢ فتى، خيمة واحدة مستعارة، ووعد رعية في بيبلوس",
    date: "May 5, 2026",
    dateAr: "٥ أيار ٢٠٢٦",
    author: "Archival Committee",
    authorRole: "Groupe Saint Jean Marc",
    authorRoleAr: "لجنة الأرشيف والتاريخ",
    category: "Heritage",
    categoryAr: "التاريخ والتراث",
    readTime: "6 min read",
    readTimeAr: "٦ دقائق للقراءة",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Amidst the turbulence of 1977 in Lebanon, founders Youssef Abou Jaoude and Louis Khalife decided that youth in Byblos needed peace, discipline, and nature. 49 years later, the flame still burns.",
    excerptAr: "وسط ظروف عام ١٩٧٧ في لبنان، أطلق المؤسسان يوسف أبو جودة ولويس خليفة مسيرة الفوج في باحة مار يوحنا مرقس. ٤٩ عاماً مضت والشعلة ما زالت متقدة في جبيل.",
    keyTakeaways: [
      "Founded on May 5, 1977 by Youssef Abou Jaoude & Louis Khalife at Saint Jean Marc Byblos",
      "Kept meeting uninterrupted through Lebanon's civil war, economic crisis, and pandemic",
      "Second and third generations now wear the same Saint Jean Marc cedar foulard"
    ],
    arabicKeyTakeaways: [
      "تأسس الفوج في ٥ أيار ١٩٧٧ على يد يوسف أبو جودة ولويس خليفة في رعية مار يوحنا مرقس جبيل",
      "استمرت اللقاءات دون انقطاع خلال الحرب، الأزمات الاقتصادية، وأيام الإغلاق",
      "أبناء وبنات الجيل الأول يرتدون اليوم نفس المنديل الكشفي في نفس الباحة الأثرية"
    ],
    content: [
      "When Scout Des Cèdres was founded at the church of Saint Jean Marc on May 5, 1977 by Youssef Abou Jaoude and Louis Khalife, resources were scarce. There was no clubhouse, no budget, and uniforms were lovingly sewn by hand by parish mothers.",
      "What they had was an unshakeable conviction: that Lebanese youth deserved an education based on honour, service, and open-air brotherhood.",
      "Throughout the difficult civil war years, when travel between regions was disrupted, Saint Jean Marc never ceased meeting. When camps in distant cedar reserves were impossible, patrols camped in local Byblos orchards and olive groves.",
      "Today, nearly half a century later, sons and daughters of those original 1977 scouts wear the same cedar neckerchief and gather in the same courtyard every Saturday afternoon."
    ]
  },
  {
    slug: "parent-guide-first-weekend-camp",
    title: "A reassuring parent guide to your child's first sleepaway camp",
    titleAr: "دليل مطمئن للأهل حول أول مخيم نوم لطفلكم (نصائح عملية)",
    date: "September 20, 2026",
    dateAr: "٢٠ أيلول ٢٠٢٦",
    author: "Akela & Louveteaux Leaders",
    authorRole: "Jaramiz & Zahrat Pack",
    authorRoleAr: "قيادة سرب الجراميز والزهرات",
    category: "Parent Corner",
    categoryAr: "ركن الأهل",
    readTime: "5 min read",
    readTimeAr: "٥ دقائق للقراءة",
    image: "https://images.unsplash.com/photo-1472898965229-f9b06b9c9bbe?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Sending your 7 or 10-year-old on their first sleepaway camp can feel daunting. Here is exactly what happens from Friday departure to Sunday campfire reunion.",
    excerptAr: "إرسال طفلكم بعمر ٧ أو ١٠ سنوات إلى مخيمه الأول قد يثير قلقكم كأهل. إليكم بالتفصيل ما يجري من انطلاق الباص حتى العودة بسلام.",
    keyTakeaways: [
      "Trained chefs and adult first-aid certified leaders maintain 24-hour constant supervision",
      "Homesickness is natural: leaders comfort, distract with games, and gently guide children",
      "Children return home with newfound autonomy, pride, and lifelong friendship"
    ],
    arabicKeyTakeaways: [
      "قادة مؤهلون ومسعفون معتمدون يوفرون إشرافاً دافئاً ومستمراً على مدار الساعة",
      "الاشتياق للأهل أمر طبيعي: يتعامل معه القادة بالحنان، الألعاب الجماعية، والتشجيع",
      "يعود الطفل بثقة استثنائية بنفسه، قدرة على ترتيب أغراضه، وفرحة بصداقات جديدة"
    ],
    content: [
      "Every year in autumn, we welcome anxious parents asking the same loving questions: Will my child be cold? What if they miss home at bedtime? Who checks that they eat their meals?",
      "Here is how our certified chefs handle your child's first camp with tenderness and discipline.",
      "First, routine: Scouts follow a clear, comforting daily rhythm. Morning flag ceremony, shared breakfast where everyone takes turns setting tables, skill workshops, afternoon forest games, hot dinner, and the famous campfire with singing and stories.",
      "By 9:30 PM, after a warm herbal tea, leaders do tent rounds. A chef remains on watch throughout the night, and our group first-aider is permanently on site.",
      "When parents arrive on Sunday afternoon to pick up their children, they are consistently astonished: their quiet child has made three new best friends, learned to roll their own sleeping bag, and won't stop singing scout campfire songs all the way home."
    ]
  }
];
