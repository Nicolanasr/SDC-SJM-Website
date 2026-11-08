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
  contentAr?: string[];
  inlineImages?: {
    index: number;
    url: string;
    caption: string;
    captionAr: string;
  }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-join-scouting-in-lebanon-10-reasons",
    title: "Why Join Scouting in Lebanon? 10 Reasons Real Adventure Beats Screen Time",
    titleAr: "لماذا الكشفية في لبنان؟ ١٠ أسباب تجعل المغامرة الحقيقية أفضل استثمار لأبنائكم",
    date: "October 28, 2026",
    dateAr: "٢٨ تشرين الأول ٢٠٢٦",
    author: "Maitrise de Groupe",
    authorRole: "Groupe Saint Jean Marc",
    authorRoleAr: "مجلس قيادة الفوج",
    category: "Parent Corner",
    categoryAr: "ركن الأهل",
    readTime: "12 min read",
    readTimeAr: "١٢ دقيقة للقراءة",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    excerpt: "From screen addiction to mental resilience: discover why four generations of families in Byblos choose Saturday scout meetings and high mountain camps over digital isolation.",
    excerptAr: "من مواجهة إدمان الشاشات إلى بناء الصلابة النفسية: اكتشفوا لماذا تختار مئات العائلات في جبيل اللقاءات الكشفية الأسبوعية والمخيمات الجبلية بديلاً عن العزلة الرقمية.",
    keyTakeaways: [
      "100% phone-free Saturdays in the historic courtyard of Saint Jean Marc in Byblos",
      "Develops grit, emotional self-reliance, and hands-on problem solving in Lebanese nature",
      "Affordable non-profit model ensuring high-quality mentorship for every child",
      "Real risk assessment: children learn to handle real tools, cook on open fire, and respect nature"
    ],
    arabicKeyTakeaways: [
      "أنشطة سبت خالية تماماً من الهواتف في باحة مار يوحنا مرقس الأثرية في جبيل",
      "بناء الصلابة النفسية، الاعتماد على النفس، وحل المشكلات العملية في طبيعة لبنان",
      "نشاط تطوعي غير ربحي يتيح تنشئة متكاملة لكل طفل بعيداً عن أعباء النوادي التجارية",
      "إدارة المخاطر الحقيقية: يتعلم الفتيان والفتيات التعامل مع الأدوات بأمان والطبخ على النار واحترام البيئة"
    ],
    content: [
      "In an era where teenagers spend upwards of seven hours daily on smartphones, tablets, and algorithmic feeds, childhood is quietly migrating indoors. Parents frequently ask our chefs during Saturday pick-up in Byblos: What makes a traditional youth movement like Scout Des Cèdres Saint Jean Marc so enduringly magnetic, even fifty years after its founding?",
      "The answer is simple: children do not crave passive entertainment. They crave reality. They want to test their physical strength against a limestone cliff, feel the honest sting of woodsmoke in their eyes, build something tangible with their own two hands, and belong to a small tribe of peers who judge them by their loyalty and effort rather than their social media profile.",
      "1. True Independence and Self-Care: From age four in the Louveteaux pack to twenty in the Routiers clan, scouts learn to pack their own rucksacks, care for their boots, roll their sleeping mats, and cook meals over outdoor stoves. When a child learns that forgetting their rain jacket means getting wet, they develop internal accountability that school lectures can never provide.",
      "2. Unfiltered, Algorithmic-Free Social Connection: In a patrol of six to eight peers (Patrouille), there are no curated likes or digital filters. Respect is earned quietly through showing up in the rain, sharing the last piece of bread, helping carry a tired younger scout's pack on a steep incline, and keeping your word when chores are assigned.",
      "3. Direct Psychological Grounding in Lebanese Nature: Neuroscience consistently proves that hours spent in cedar forests, oak groves, and limestone river valleys significantly lower adolescent cortisol, relieve chronic anxiety, and restore depleted attention spans. Lebanon's varied topography—from the Mediterranean coast of Byblos to the high plateaus of Tannourine and Qadisha—provides an unmatched outdoor classroom.",
      "4. Hands-On Engineering Through Froissartage: Building six-meter observation towers, aerial suspension bridges, and elevated patrol kitchens using untreated pine timber and natural hemp rope teaches applied physics, spatial geometry, and structural balance without a single nail. Youth discover that human collaboration can turn fallen wood into shelter.",
      "5. Certified Emergency Readiness and Field First Aid: Leaders and senior rovers hold Red Cross certified credentials. Scouts regularly practice wound dressing, fracture stabilization, thermal regulation in cold bivouacs, and stretcher improvisations using hiking poles and coats, instilling confidence rather than panic when emergencies happen.",
      "6. Civic Pride Anchored in Byblos Heritage: Since May 5, 1977, our troop has called the ancient courtyard of Saint Jean Marc cathedral home. Growing up in the shadow of Crusader stone walls, Byzantine ruins, and the ancient Phoenician port teaches youth that they are custodians of a profound legacy that must be served and protected.",
      "7. Autonomy Through the Patrol Method (Système des Patrouilles): Robert Baden-Powell's greatest educational breakthrough was shifting authority from adult commanders to teenage Patrol Leaders (Chefs de Patrouille). A fourteen-year-old patrol leader learns how to delegate tasks, mediate personality conflicts, ensure camp hygiene, and inspire their squad through empathy and example.",
      "8. Affordable Non-Profit Access for Every Family: Unlike costly private tennis academies, robotics camps, or commercial resort clubs, authentic scouting operates strictly as an educational non-profit. Dues are kept minimal so that no child in Byblos or the surrounding villages is ever excluded because of financial constraints.",
      "9. Lifelong Brotherhood and Sisterhood: The bonds forged while pitching heavy canvas tents during an unexpected thunderstorm on a mountain ridge remain unbreakable for thirty, forty, and fifty years. Former scouts who wore our green and yellow scarf decades ago still gather in Byblos as brothers and sisters in spirit.",
      "10. The Habit of Showing Up: In a culture increasingly characterized by flaking, casual cancellations, and low commitment, scouting reinstates the sacred code of duty. Showing up every Saturday at 3:00 PM rain or shine instills an internal compass of reliability that universities and future employers recognize instantly.",
      "If you want your son or daughter to discover their true courage, step away from screens, and grow surrounded by wholesome role models, the courtyard doors of Saint Jean Marc are open every Saturday afternoon."
    ],
    contentAr: [
      "في عصر يقضي فيه المراهقون أكثر من سبع ساعات يومياً أمام الشاشات والهواتف الذكية، تنحسر الطفولة تدريجياً داخل الجدران المغلقة. كثيراً ما يسألنا أولياء الأمور أثناء اصطحاب أبنائهم مساء السبت في جبيل: ما الذي يجعل حركة شبابية تقليدية مثل كشافة الأرز – فوج مار يوحنا مرقس تحافظ على جاذبيتها حتى بعد مرور خمسين عاماً على تأسيسها؟",
      "الجواب بسيط وواضح: الأطفال لا يبحثون عن التسلية الافتراضية السلبية، بل يشتاقون إلى الواقع الحقيقي. يريدون اختبار قوتهم البدنية أمام منحدر صخري، وتنفس دخان الحطب في الهواء الطلق، وبناء منشأة حقيقية بأيديهم، والانتماء إلى طليعة من الأصدقاء تقيّمهم بوفائهم وعطائهم لا بعدد إعجابات وسائل التواصل.",
      "١. الاستقلالية الحقيقية والعناية بالنفس: من سن الرابعة في سرب الجراميز حتى العشرين في عشيرة الجوالة، يتعلم الكشاف توضيب حقيبته بنفسه، تنظيف حذائه، طي فرشته، والطبخ في الخلاء. وحين يدرك الطفل أن نسيان معطف المطر يعني البلل، يكتسب حس المسؤولية الذاتية الذي تعجز المحاضرات المدرسية عن تقديمه.",
      "٢. تواصل إنساني صادق بعيداً عن الخوارزميات: في طليعة مكونة من ٦ إلى ٨ أفراد، لا توجد فلاتر رقمية مصطنعة. يُبنى الاحترام بهدوء من خلال الحضور تحت المطر، ومقاسمة رغيف الخبز الأخير، ومساعدة رفيق تعب في حمل حقيبته في صعود وعر، والالتزام الصادق بالكلمة المعطاة.",
      "٣. التوازن النفسي في طبيعة لبنان: تؤكد دراسات علم النفس العصبي أن الساعات التي يقضيها الفتى بين أشجار الأرز والسنديان وعلى ضفاف الوديان تخفض بشكل ملحوظ هرمونات التوتر، وتعالج القلق المزمن وتستعيد صفاء التركيز. وتوفر تضاريس لبنان—من ساحل جبيل القديمة إلى مرتفعات تنورين وقاديشا—صفاً دراسياً طبيعياً لا مثيل له.",
      "٤. الهندسة التطبيقية عبر فن الفرويسارتاج: بناء أبراج مراقبة بارتفاع ستة أمتار، وجسور معلقة ومطابخ طليعية باستخدام أخشاب الصنوبر وحبال القنب فقط دون استخدام أي مسمار حديدي يرسخ مبادئ الفيزياء المكانية والتوازن الإنشائي. يكتشف الشباب أن التعاون البشري قادر على تحويل الحطب إلى مأوى آمن.",
      "٥. جاهزية الطوارئ والإسعافات الأولية المعتمدة: يحمل قادتنا ومساعدوهم شهادات إسعافات أولية معتمدة وفق معايير الصليب الأحمر. يتدرب الكشافة دورياً على تضميد الجروح، تثبيت الكسور، والتعامل مع الطوارئ بحكمة وهدوء بدلاً من الارتباك والذعر.",
      "٦. الانتماء لجذور جبيل وتراثها: منذ ٥ أيار ١٩٧٧، اتخذ الفوج من باحة كاتدرائية مار يوحنا مرقس موطناً ومقراً له. التنشئة في ظلال أسوار بيبلوس الصليبية والآثار الفينيقية تزرع في قلوب الشباب فخراً عميقاً بمدينتهم وشعوراً بالمسؤولية لحماية تراثها.",
      "٧. الاعتماد على النفس عبر نظام الطلائع (Système des Patrouilles): كان أعظم ابتكار تربوي لمؤسس الحركة الكشفية هو نقل القيادة من الكبار إلى رؤساء الطلائع في سن المراهقة. يتعلم قائد الطليعة بعمر ١٤ سنة كيف يوزع الأدوار، يحل الخلافات بحكمة، ويقود رفاقه بروح القدوة والمحبة.",
      "٨. نشاط تطوعي غير ربحي متاح لكل عائلة: على عكس الأكاديميات الرياضية والنوادي التجارية المكلفة، تعمل الكشفية كحركة تربوية تطوعية بحتة. الاشتراكات رمزية وقاعدتنا ثابتة: لا يُحرم أي طفل أو شاب من المشاركة بسبب الظروف المادية.",
      "٩. أخوّة وصداقة تدوم مدى الحياة: الصداقات التي تُبنى أثناء نصب الخيام القماشية تحت عاصفة جبلية مفاجئة أو حول سهرة النار تبقى راسخة لثلاثين وأربعين وخمسين عاماً. قادة وقدامى ارتدوا منديل الفوج الأخضر والذهبي منذ عقود ما زالوا يجتمعون في جبيل كعائلة واحدة.",
      "١٠. فضيلة الالتزام والحضور: في ثقافة يكثر فيها التردد والانسحاب السهل، تعيد الكشفية ترسيخ قيمة الواجب الكشفي. الحضور كل سبت عند الساعة الثالثة بعد الظهر يغرس بوصلة داخلية من الانضباط والوفاء بالعهد تحترمها الجامعات ويقدّرها المجتمع.",
      "إذا كنتم ترغبون في أن يكتشف ابنكم أو ابنتكم شجاعتهم الحقيقية، ويبتعدوا عن الشاشات وسط قدوة حسنة، فإن أبواب باحة مار يوحنا مرقس مفتوحة لاستقبالكم كل بعد ظهر سبت."
    ],
    inlineImages: [
      {
        index: 2,
        url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1000&q=80",
        caption: "Patrol campfire circle in the high mountains of Lebanon",
        captionAr: "حلقة سهرة النار الكشفية في أعالي جبال لبنان"
      },
      {
        index: 5,
        url: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1000&q=80",
        caption: "Froissartage timber construction: engineering without nails",
        captionAr: "ريادة الخلاء وتشييد المنشآت الخشبية دون أي مسمار"
      }
    ]
  },
  {
    slug: "what-do-scouts-actually-do",
    title: "What Do Scouts Actually Do? A Parent's Complete Guide from Saturdays to 10-Day Camps",
    titleAr: "ماذا يفعل الكشافة أسبوعياً؟ دليل شامل للأهل من لقاءات السبت حتى المخيم الصيفي",
    date: "October 20, 2026",
    dateAr: "٢٠ تشرين الأول ٢٠٢٦",
    author: "Unit Leadership Team",
    authorRole: "Sections Coordinators",
    authorRoleAr: "منسقو الوحدات الكشفية",
    category: "Camp Life",
    categoryAr: "الحياة الكشفية",
    readTime: "11 min read",
    readTimeAr: "١١ دقيقة للقراءة",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80",
    excerpt: "A transparent breakdown of a scout's year: Saturday afternoon games in the Saint Jean Marc courtyard, day hikes through Lebanon's valleys, and 10 uninterrupted days under canvas.",
    excerptAr: "نظرة شفافة ومفصلة على مدار العام الكشفي: ألعاب بعد ظهر السبت في باحة مار يوحنا مرقس، مسيرات الوديان، وعشرة أيام متواصلة تحت الخيمة في أعالي الجبال.",
    keyTakeaways: [
      "Saturday routine: 3:00 PM opening circle, age-specific woodcraft and games, 4:30 PM dismissal",
      "Seasonal day treks (Salidas) exploring Qadisha Valley, Tannourine, and Byblos coastline",
      "Annual 10-day summer camp: 100% wooden infrastructure, campfire cooking, and starry nights",
      "Continuous progression: progressive badges rewarding individual effort, autonomy, and civic service"
    ],
    arabicKeyTakeaways: [
      "برنامج السبت: ٣:٠٠ رفع العلم، ألعاب وورش مهارات حسب العمر، ٤:٣٠ انتهاء النشاط",
      "رحلات نهارية فصلية (Salidas) لاستكشاف وادي قاديشا وتنورين وشاطئ جبيل",
      "المخيم الصيفي الكبير (١٠ أيام): بناء المنشآت بالخشب، الطبخ على الحطب، وسهرات النار",
      "تدرج كشفي مستمر: شارات كفاءة تمنح تقديراً للجهد الشخصي، الاستقلالية، وخدمة المجتمع"
    ],
    content: [
      "For parents who have never experienced scouting firsthand, the sight of youth in uniform gathering in the Saint Jean Marc courtyard can feel intriguing yet unfamiliar. You might wonder: What actually happens during those ninety minutes on Saturday afternoon? What do they learn during weekend outings? And what occurs when they depart for ten days of mountain camping every summer?",
      "This guide provides an honest, transparent hour-by-hour look into how a scout year unfolds in our Byblos troop.",
      "The Saturday Afternoon Rhythm (3:00 PM – 4:30 PM): Every weekly gathering begins promptly at 3:00 PM with the 'Rassemblement' in the stone courtyard. Units line up in crisp order. The troop flags are raised, prayers and mottoes are spoken, and attendance is taken by Patrol Leaders. This opening ritual transitions youth from school week chaos into focused scout mindset within five minutes.",
      "From 3:15 to 4:00 PM, the troop divides into age-specific branches. The youngest (Louveteaux and Jeannettes, ages 4–11) enter the jungle world of Akela and Baloo: active strategy games, story-based character lore, singing, and basic coordination. Scouts and Guides (ages 11–16) work in autonomous patrols: learning square lashings, topographical map reading, fire building in high winds, and preparing tournament stunts. Routiers and Caravelles (ages 16–24) coordinate social aid logistics, mountain expeditions, and assist with younger section leadership.",
      "At 4:15 PM, the troop reassembles for the closing ceremony. Leaders announce upcoming events, hand out merit badges, lower the banners, and dismiss scouts to their waiting parents at 4:30 PM with calm discipline and smiles.",
      "Seasonal Weekend Outings (Salidas): Three to four times a year, units venture beyond Byblos for day expeditions called Salidas. These are not tourist strolls. Scouts carry daypacks with water, compass, personal first aid kits, and trail snacks. They hike through the cedar groves of Tannourine, trace the ancient hermit caves of the Qadisha Valley, or clean plastic pollution along the shoreline of ancient Byblos, learning environmental stewardship by hand.",
      "The 10-Day Grand Summer Camp (The Apex of the Scout Year): In midsummer, our troop travels into the high Mount Lebanon plateau for our annual Grand Camp. Upon arrival, the campsite is completely empty mountain land. Within forty-eight hours, scouts use untreated timber logs and sisal rope to build their entire village: dining shelters with raised tables, elevated woodcraft kitchens with stone firepits, tool racks, sanitary washstands, and artistic camp gateways.",
      "For ten full days, life is lived entirely outdoors under canvas tents. Youth cook their own meals over wood fires, compete in grand patrol tournaments, embark on a 24-hour wilderness hike (Exploration), and gather every evening around the glowing campfire for songs, theatrical sketches, and quiet reflections under starry skies.",
      "The Transformation: When scouts return home from camp on Sunday afternoon, parents often notice a remarkable difference: their children stand taller, clean up without being asked, look adults in the eye when speaking, and carry a deep, grounded inner joy that stays with them throughout the school year."
    ],
    contentAr: [
      "بالنسبة للأهالي الذين لم يخوضوا تجربة الكشفية من قبل، قد يبدو مشهد الفتيان والفتيات بالزي الكشفي في باحة مار يوحنا مرقس بعد ظهر السبت مألوفاً ومثيراً للفضول في آنٍ واحد. قد يتساءل الأهل: ماذا يجري بالضبط خلال تلك التسعين دقيقة الأسبوعية؟ وماذا يتعلم الأبناء في رحلات نهاية الأسبوع؟ وماذا يحدث حين ينطلقون لعشرة أيام في المخيم الصيفي الجبلي؟",
      "يقدم هذا الدليل نظرة شفافة وصادقة لما يعيشه أبناؤكم على مدار العام الكشفي في فوجنا في جبيل.",
      "إيقاع بعد ظهر السبت (٣:٠٠ – ٤:٣٠ بعد الظهر): يبدأ النشاط الأسبوعي تمام الساعة ٣:٠٠ بعد الظهر بالتجمع (Rassemblement) في الباحة الحجرية. تصطف الوحدات بنظام، يُرفع العلم، تُتلى الصلوات الكشفية وشعار الفوج، ويسجل رؤساء الطلائع الحضور. هذه الدقائق الخمس الأولى تنقل الفتى فوراً من صخب الأسبوع المدرسي إلى تركيز وحيوية النشاط الكشفي.",
      "من ٣:١٥ حتى ٤:٠٠، يتوزع الفوج حسب الفئات العمرية. يدخل صغار السن (الجراميز والزهرات ٤–١١ سنة) عالم الغابة مع أكيلا وبالو: ألعاب حركة وحيلة، قصص تربوية وبناء العادات الحسنة. ويعمل الفتيان والفتيات (الكشافة والمرشدات ١١–١٦ سنة) ضمن طلائع مستقلة: تعلم العقد الكشفية، قراءة الخرائط الجغرافية والبوصلة، وإعداد ألعاب البطولة. بينما ينظم الجوالة والمنجدات (١٦–٢٤ سنة) المبادرات الاجتماعية، الرحلات الجبلية، ومساندة قيادة الفروع الصغرى.",
      "عند الساعة ٤:١٥، يلتقي الفوج مجدداً في مراسم الختام. يعلن القادة المواعيد القادمة، تُوزع الشارات المستحقة، وتُنزل الرايات الكشفية لينصرف الجميع عند الساعة ٤:٣٠ بسلام وابتسامة.",
      "رحلات المسير الفصلية (Salidas): ثلاث إلى أربع مرات في العام، تنطلق الوحدات خارج جبيل في رحلات استكشافية تدعى Salidas. ليست هذه الرحلات مجرد نزهة عادية، بل يحمل الكشاف حقيبة الظهر مع الماء والبوصلة والإسعافات الأولية ووجبة خفيفة، فيعبرون محميات الأرز في تنورين، أو يكتشفون مغاور وادي قاديشا، أو ينظفون شاطئ جبيل الأثري ليتعلموا حماية البيئة عملياً.",
      "المخيم الصيفي الكبير (قمة العام الكشفي): في منتصف الصيف، يصعد الفوج إلى أعالي جبال لبنان لإقامة المخيم الكبير لمدة عشرة أيام متواصلة. عند الوصول تكون أرض المخيم خالية تماماً، وفي غضون ٤٨ ساعة فقط تحوّل الطلائع أخشاب الصنوبر وحبال القنب إلى قرية متكاملة: موائد طعام مظللة، مطابخ مرتفعة مع مواقد حجرية، حوامل للمعدات، وبوابة فنية للمخيم.",
      "عشرة أيام كاملة تُعاش تحت الخيام القماشية. يطبخ الفتيان طعامهم بأنفسهم، ويتنافسون في دورة الطلائع الكبرى، وينطلقون في رحلة استكشافية تمتد ٢٤ ساعة (Exploration)، ويجتمعون مساءً حول شعلة النار في سهرات ممتلئة بالأناشيد والتمثيليات الهادفة تحت النجوم.",
      "التحول الإيجابي: حين يعود الكشاف إلى منزله بعد ظهر الأحد، يلاحظ الأهل فوراً الفرق الكبير: يقف الفتى أكثر ثقة واستقامة، يرتب أغراضه دون تذكير، ينظر في عيني محدثه باحترام، ويحمل في قلبه فرحاً عميقاً وصداقة أصيلة ترافقه طوال العام الدراسي."
    ],
    inlineImages: [
      {
        index: 2,
        url: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1000&q=80",
        caption: "Saturday courtyard assembly at Saint Jean Marc Byblos",
        captionAr: "تجمع السبت في باحة كاتدرائية مار يوحنا مرقس جبيل"
      },
      {
        index: 5,
        url: "https://images.unsplash.com/photo-1496080174650-637e3f22fa03?auto=format&fit=crop&w=1000&q=80",
        caption: "Outdoor cooking on open wood fires during 10-day summer camp",
        captionAr: "الطبخ على مواقد الحطب خلال المخيم الصيفي الجبلي"
      }
    ]
  },
  {
    slug: "froissartage-woodcraft-without-nails",
    title: "How Our Patrols Build a 6-Meter Watchtower Without a Single Nail",
    titleAr: "كيف تبني طلائعنا برج مراقبة بارتفاع ٦ أمتار دون مسمار واحد (فن الفرويسارتاج)",
    date: "October 14, 2026",
    dateAr: "١٤ تشرين الأول ٢٠٢٦",
    author: "Chef Matériel & Leaders",
    authorRole: "Pioneering Workshop",
    authorRoleAr: "ورشة ريادة الخلاء والتجهيزات",
    category: "Outdoor Skills",
    categoryAr: "مهارات الخلاء",
    readTime: "10 min read",
    readTimeAr: "١٠ دقائق للقراءة",
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Every summer in the high mountains of Lebanon, our patrols transform raw pine timbers and sisal rope into kitchens, dining shelters, and watchtowers. Here is the lost art of Froissartage.",
    excerptAr: "في كل صيف بأعالي جبال لبنان، تحوّل طلائع الكشافة أخشاب الصنوبر وحبال القنب إلى مطابخ، مقاعد وأبراج مراقبة. إليكم فن ريادة الخلاء الكشفي (فرويسارتاج).",
    keyTakeaways: [
      "Froissartage uses zero nails or screws, protecting living trees and teaching applied physics",
      "Patrols construct their complete living quarters in 48 hours: tables, kitchens, and gateways",
      "Instills lifelong pride of handcrafting, safety protocols, and practical problem solving",
      "Key techniques: Square Lashing, Diagonal Lashing, Tripod Lashing, and Mortise & Tenon joints"
    ],
    arabicKeyTakeaways: [
      "تقنية الفرويسارتاج لا تستخدم المسامير، مما يحمي الأشجار ويعلم الهندسة الميدانية",
      "تبني الطليعة مقرها الكامل في ٤٨ ساعة: طاولة طعام، مطبخ مرتفع، وبوابة مخيم",
      "تغرس في الشباب فخر الإنجاز اليدوي، معايير السلامة الصارمة، والعمل الجماعي",
      "التقنيات الأساسية: العقدة المربعة، العقدة القطرية، العقدة الثلاثية، والتعشيق الخشبي"
    ],
    content: [
      "Walk into our troop's summer campsite in late July, and you will encounter an astonishing sight: elevated kitchen platforms with natural rock fire hearths, a dining table where eight teenagers sit together comfortably, a raised pantry shelter keeping food protected from mountain foxes, and a six-meter observation watchtower towering over the camp—all built entirely from untreated timber logs and hemp rope, without a single metallic nail, screw, or bolt.",
      "This is Froissartage—a traditional woodcraft discipline formulated in the 1930s by French scouting educator Michel Froissart. Instead of damaging trees with iron nails that rust and wound timber, Froissartage relies on age-old carpentry joints, mortise and tenon fittings, and precision rope lashings (brêlages).",
      "Why We Refuse to Use Nails: Metal nails weaken timber under shearing forces, leave hazardous sharp points on campsites, and can injure livestock or wild animals long after a camp ends. More importantly, using nails robs young people of the intellectual and physical challenge of understanding how timber naturally bears weight, bends, and locks together under tension.",
      "The Anatomy of a Froissartage Masterpiece: To construct an elevated patrol kitchen or observation tower, scouts master three fundamental rope lashings:",
      "1. The Square Lashing (Le Brêlage Carré): Used to bind two spars crossing at 90 degrees. Beginning with a clove hitch (nœud de cabestan), rope is wrapped tightly three times around both timbers, pulled taut with two frapping turns that bite into the fibers, and finished with a reef knot. When done correctly by two scouts working in coordination, it can easily support hundreds of kilograms.",
      "2. The Diagonal Lashing (Le Brêlage Diagonal): Crucial for diagonal cross-bracing on towers and gateways where spars tend to pull apart. The lashing begins with a timber hitch (nœud de bois) around both poles, pulling them firmly into alignment before frapping.",
      "3. The Tripod Lashing (Le Nœud de Trépied): The architectural foundation for water towers, bell towers, and camp gateways. Three poles laid side by side are woven with alternating turns before the legs are spread into a self-standing pyramid of extraordinary stability.",
      "Safety First, Always: Every piece of timber is inspected by the Chef Matériel for hairline fractures, rot, or weakness before construction begins. Lashings are tensioned using wooden levers, never bare hands, to prevent rope burns. No scout climbs any structure above waist height without a chef present to verify lashing integrity and ground anchor stability.",
      "What Youth Take Home: Beyond the physical watchtower, Froissartage gives teenagers an unshakeable sense of self-efficacy. In a world where adolescents rarely touch anything heavier than a smartphone screen, spending two days hauling logs, tying sixty lashings, and standing atop a watchtower they built with their friends permanently alters their view of what they are capable of achieving."
    ],
    contentAr: [
      "حين تزور أرض المخيم الصيفي لفوجنا في أواخر شهر تموز، سيبهرك مشهد غير مألوف: مطابخ مرتفعة عن الأرض مع مواقد حجرية آمنة، طاولة طعام خشبية يجلس حولها ثمانية مراهقين براحة تامة، رفوف مرتفعة لحفظ الطعام من حيوانات البرية، وبرج مراقبة واستطلاع يرتفع ستة أمتار فوق المخيم—كل ذلك مشيّد بالكامل من جذوع الصنوبر وحبال القنب دون استخدام أي مسمار أو برغي معدني على الإطلاق.",
      "هذا هو فن الفرويسارتاج (Froissartage)—منهج تربوي في ريادة الخلاء صاغه في ثلاثينيات القرن الماضي المربي الكشفي الفرنسي ميشال فرويسار. وبدلاً من إيذاء الأشجار بالمسامير الحديدية التي تصدأ وتجرح الخشب، يعتمد الفرويسارتاج على مهارات النجارة التقليدية، التعشيق الخشبي (Mortise & Tenon)، والعقد والحبال المحكمة (Brêlages).",
      "لماذا نرفض استخدام المسامير؟ المسامير المعدنية تضعف ألياف الخشب تحت قوى الشد، وتترك رؤوساً حادة تشكل خطراً في أرض المخيم وقد تؤذي الحيوانات حتى بعد رحيلنا. والأهم من ذلك، أن استخدام المسامير يحرم الشاب من التحدي الفكري والبدني لفهم كيفية تحمّل الخشب للوزن وانحنائه وثباته تحت الشد الميكانيكي.",
      "أركان البناء الكشفي: لتشييد مطبخ طليعي أو برج مراقبة، يتقن الكشافة ثلاث عقد وحبال رئيسية:",
      "١. العقدة المربعة (Le Brêlage Carré): تُستخدم لربط قطعتين خشبيتين تتقاطعان بزاوية ٩٠ درجة. تبدأ بعقدة الوتد (Clove Hitch)، وتُلف الحبال ثلاث مرات بإحكام حول الجذعين، ثم تُشد بدورتين خانقتين (Frapping) تعتصران الألياف، وتُختتم بعقدة التثبيت. حين ينفذها كشافان بتنسيق متقن، تستطيع تحمّل مئات الكيلوغرامات بأمان.",
      "٢. العقدة القطرية (Le Brêlage Diagonal): ضرورية للدعامات المائلة في الأبراج وبوابات المخيم لمنع الاهتزاز والالتواء. تبدأ بعقدة الحطاب (Timber Hitch) لجمع الجذعين بقوة قبل الشد النهائي.",
      "٣. العقدة الثلاثية (Le Nœud de Trépied): الأساس المعماري لأبراج المياه، أبراج الأجراس وبوابات المعسكرات. تُصف ثلاثة أعمدة متوازية وتُنسج الحبال بينها بالتناوب قبل فتح أرجلها لتشكل هرماً ذاتي الثبات يتمتع بتوازن مدهش.",
      "السلامة أولاً ودائماً: يفحص قائد التجهيزات (Chef Matériel) كل قطعة خشب للتأكد من خلوها من الشقوق أو الضعف قبل بدء البناء. وتُشد الحبال بأدوات خشبية خاصة لتجنب حروق الحبال في اليدين. ولا يصعد أي كشاف فوق أي منشأة إلا بإشراف القائد ومطابقة معايير الثبات الأرضي.",
      "الأثر التربوي العميق: بعيداً عن برج المراقبة بحد ذاته، يمنح الفرويسارتاج الفتى شعوراً لا يتزعزع بالقدرة الذاتية. في عالم نادراً ما يلمس فيه المراهق شيئاً أثقل من شاشة هاتفه، فإن قضاء يومين في نقل الأخشاب، وربط ستين عقدة، والوقوف فوق برج بناه مع رفاقه يغير نظرته إلى قدراته وإمكانياته إلى الأبد."
    ],
    inlineImages: [
      {
        index: 1,
        url: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1000&q=80",
        caption: "Square and diagonal rope lashings binding pine spars without nails",
        captionAr: "العقد المربعة والقطرية لربط الأخشاب بحبال القنب دون مسامير"
      },
      {
        index: 4,
        url: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1000&q=80",
        caption: "Standing atop a handmade 6-meter patrol watchtower",
        captionAr: "الوقوف فوق برج استطلاع كشفي بارتفاع ستة أمتار صنعته الطليعة"
      }
    ]
  },
  {
    slug: "founding-of-saint-jean-marc-1977",
    title: "May 5, 1977: The Story of Twelve Boys, One Tent, and a Parish Promise in Byblos",
    titleAr: "٥ أيار ١٩٧٧: قصة ١٢ فتى، خيمة واحدة مستعارة، ووعد رعية في بيبلوس",
    date: "May 5, 2026",
    dateAr: "٥ أيار ٢٠٢٦",
    author: "Archival Committee",
    authorRole: "Groupe Saint Jean Marc",
    authorRoleAr: "لجنة الأرشيف والتاريخ",
    category: "Heritage",
    categoryAr: "التاريخ والتراث",
    readTime: "10 min read",
    readTimeAr: "١٠ دقائق للقراءة",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Amidst the turbulence of 1977 in Lebanon, founders Youssef Abou Jaoude and Louis Khalife decided that youth in Byblos needed peace, discipline, and nature. 50 years later, the flame still burns.",
    excerptAr: "وسط ظروف عام ١٩٧٧ في لبنان، أطلق المؤسسان يوسف أبو جودة ولويس خليفة مسيرة الفوج في باحة مار يوحنا مرقس. ٥٠ عاماً مضت والشعلة ما زالت متقدة في جبيل.",
    keyTakeaways: [
      "Founded on May 5, 1977 by Youssef Abou Jaoude & Louis Khalife at Saint Jean Marc Byblos",
      "Kept meeting uninterrupted through Lebanon's civil war, economic crises, and pandemic",
      "Second and third generations now wear the same Saint Jean Marc cedar foulard",
      "Anchored in the spiritual fellowship of Paroisse Saint Jean Marc in old Byblos"
    ],
    arabicKeyTakeaways: [
      "تأسس الفوج في ٥ أيار ١٩٧٧ على يد يوسف أبو جودة ولويس خليفة في رعية مار يوحنا مرقس جبيل",
      "استمرت اللقاءات دون انقطاع خلال الحرب، الأزمات الاقتصادية، وأيام الإغلاق",
      "أبناء وبنات الجيل الأول يرتدون اليوم نفس المنديل الكشفي في نفس الباحة الأثرية",
      "مرتكز على التنشئة الروحية والوطنية في رعية مار يوحنا مرقس في جبيل القديمة"
    ],
    content: [
      "When Scout Des Cèdres was founded at the historic cathedral of Saint Jean Marc on May 5, 1977, Lebanon was passing through one of the darkest periods in its modern history. Conflict was tearing communities apart, schools were intermittently shuttered, and youth were surrounded by uncertainty and despair.",
      "It was in that turbulent atmosphere that two visionary Byblos educators, Youssef Abou Jaoude and Louis Khalife, gathered twelve local boys in the cathedral courtyard. Their conviction was radical in its simplicity: our youth must not be abandoned to hatred or despair. They need nature, brotherhood, moral discipline, and joyful service to their town.",
      "The Early Struggles: Resources were almost non-existent. There was no club hall, no budget, and not a single ready-made uniform. The first troop tents were salvaged canvas sewn by mothers in the parish. Neck scarves were cut from simple cotton fabric. For equipment, leaders brought kitchen pots and axes from their family homes.",
      "Yet what was lacking in material comfort was abundantly made up for in spirit. Every Saturday afternoon, the courtyard of Saint Jean Marc rang out with scout songs, marching whistles, and the laughter of boys who felt safe, respected, and valued.",
      "Unbroken Continuity Through the Years: Through decades of national hardship, the troop never ceased meeting. When long-distance travel to cedar reserves was blocked, patrols carried their rucksacks into the olive orchards of Blat and the limestone hills above Byblos. When power outages plunged the town into darkness, scout meetings continued under the glow of kerosene lanterns and campfires.",
      "In the decades that followed, the group expanded into a full scout family: welcoming girls into the Jeannettes, Guides, and Caravelles branches, training generations of chefs and cheftaines, and establishing annual traditions that the entire town of Byblos looks forward to—from the solemn Good Friday parish vigil to the festive Saint Jean Marc feast day parade through the old souks.",
      "The Sacred Thread: Today, nearly half a century later, when you walk into the courtyard on a Saturday afternoon, you will meet young boys and girls whose parents and grandparents stood in those exact same lines forty years ago. They wear the same green and gold cedar scarf, make the same scout promise, and sing the same campfire hymns. That unbroken golden thread is what makes Scout Des Cèdres Groupe Saint Jean Marc a living monument of hope in Lebanon."
    ],
    contentAr: [
      "حين تأسس فوج كشافة الأرز في كاتدرائية مار يوحنا مرقس الأثرية في ٥ أيار ١٩٧٧، كان لبنان يمر بإحدى أحلك المراحل في تاريخه المعاصر. كانت الصراعات تمزق المجتمعات، والمدارس تقفل أبوابها بصورة متقطعة، والشباب محاطين بالقلق والغموض.",
      "وسط تلك الأجواء الصعبة، جمع مربيان رائدان من أبناء جبيل، يوسف أبو جودة ولويس خليفة، اثني عشر فتى محلياً في باحة الكاتدرائية. كانت قناعتهما بسيطة لكنها ثورية في عمقها: لا يجوز ترك أبنائنا فريسة لليأس أو الكراهية. يحتاج شبابنا إلى الطبيعة، إلى الأخوّة الصادقة، إلى الانضباط الأخلاقي، وإلى الخدمة الفرحة لبلدتهم.",
      "البدايات الصعبة: كانت الإمكانيات شبه معدومة. لم يكن هناك مقر، ولا ميزانية، ولا حتى زي كشفي جاهز واحد. كانت الخيام الأولى عبارة عن أقمشة مستعملة خاطتها أمهات الرعية بأيديهن. وقُصّت المناديل الكشفية من أقمشة قطنية بسيطة. أما المعدات، فكان القادة يحضرون الأواني وفؤوس الحطب من بيوتهم.",
      "لكن ما كان ينقص في الإمكانيات المادية، عوّضته الروح الكشفية أضعافاً مضاعفة. في كل بعد ظهر سبت، كانت باحة مار يوحنا مرقس تصدح بالأناشيد الكشفية، وصفارات المسير، وضحكات فتيان وجدوا في الفوج مكاناً آمناً ومحترماً.",
      "استمرارية تاريخية دون انقطاع: على مدى عقود من الصعوبات والأزمات الوطنية، لم تتوقف لقاءات الفوج يوماً واحداً. وحين تعذر السفر إلى غابات الأرز البعيدة، حملت الطلائع حقائبها إلى بساتين بلاط وتلال جبيل المجاورة. وحين انقطعت الكهرباء عن المدينة، استمرت اللقاءات على ضوء فوانيس الكاز وسهرات النار.",
      "في السنوات التالية، نما الفوج ليصبح عائلة كشفية متكاملة: فاستقبل الفتيات في فروع الزهرات والمرشدات والمنجدات، وخرّج أجيالاً من القادة والقائدات، وأرسى تقاليد سنوية تنتظرها مدينة جبيل بأسرها—من رتبة سجدة الصليب الحاشدة في الجمعة العظيمة إلى المسيرة الاحتفالية في عيد مار يوحنا مرقس في أسواق جبيل القديمة.",
      "الخيط الذهبي المتصل: اليوم، وبعد مرور خمسين عاماً، حين تدخل باحة الكاتدرائية بعد ظهر السبت، ستلتقي بفتيان وفتيات وقف آباؤهم وأجدادهم في نفس هذه الصفوف قبل عقود. يرتدون نفس المنديل الأخضر والذهبي، ويؤدون نفس الوعد الكشفي، ويرددون نفس الأناشيد. هذا الخيط الذهبي المتصل هو ما يجعل فوج القديس يوحنا مرقس شاهداً حياً على الأمل والعطاء في لبنان."
    ],
    inlineImages: [
      {
        index: 2,
        url: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80",
        caption: "Historic Saint Jean Marc cathedral courtyard in Byblos",
        captionAr: "باحة كاتدرائية مار يوحنا مرقس الأثرية في جبيل"
      },
      {
        index: 4,
        url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=80",
        caption: "Generations gathering under the green and gold cedar scarf",
        captionAr: "أجيال متعاقبة تجتمع بمنديل كشافة الأرز الأخضر والذهبي"
      }
    ]
  },
  {
    slug: "parent-guide-first-weekend-camp",
    title: "A Reassuring Parent Guide to Your Child's First Sleepaway Camp",
    titleAr: "دليل مطمئن للأهل حول أول مخيم نوم لطفلكم (نصائح عملية)",
    date: "September 20, 2026",
    dateAr: "٢٠ أيلول ٢٠٢٦",
    author: "Akela & Louveteaux Leaders",
    authorRole: "Jaramiz & Zahrat Pack",
    authorRoleAr: "قيادة سرب الجراميز والزهرات",
    category: "Parent Corner",
    categoryAr: "ركن الأهل",
    readTime: "9 min read",
    readTimeAr: "٩ دقائق للقراءة",
    image: "https://images.unsplash.com/photo-1472898965229-f9b06b9c9bbe?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Sending your 7 or 10-year-old on their first sleepaway camp can feel daunting. Here is exactly what happens from Friday departure to Sunday campfire reunion.",
    excerptAr: "إرسال طفلكم بعمر ٧ أو ١٠ سنوات إلى مخيمه الأول قد يثير قلقكم كأهل. إليكم بالتفصيل ما يجري من انطلاق الباص حتى العودة بسلام.",
    keyTakeaways: [
      "Trained chefs and adult first-aid certified leaders maintain 24-hour constant supervision",
      "Homesickness is natural: leaders comfort, distract with games, and gently guide children",
      "Children return home with newfound autonomy, pride, and lifelong friendships",
      "Complete packing checklist: what to bring, what to leave at home, and hygiene routines"
    ],
    arabicKeyTakeaways: [
      "قادة مؤهلون ومسعفون معتمدون يوفرون إشرافاً دافئاً ومستمراً على مدار الساعة",
      "الاشتياق للأهل أمر طبيعي: يتعامل معه القادة بالحنان، الألعاب الجماعية، والتشجيع",
      "يعود الطفل بثقة استثنائية بنفسه، قدرة على ترتيب أغراضه، وفرحة بصداقات جديدة",
      "قائمة توضيب الأمتعة: ما يجب إحضاره، ما يمنع إحضاره، ونظام النظافة الشخصية"
    ],
    content: [
      "Every year as our autumn weekend camp approaches, we welcome loving, anxious parents with the identical set of questions: Will my child be warm enough at night? What happens if they miss home at bedtime? Who ensures they eat their meals? And what if they get sick?",
      "If you are feeling a knot in your stomach about sending your child on their first sleepaway camp, take a deep breath. Every single scout leader in our troop has guided dozens of first-time campers through this milestone. Here is an honest, step-by-step breakdown of how we protect, nurture, and empower your child from Friday departure to Sunday pickup.",
      "The Golden Packing Rule: Pack With Your Child, Not For Them: The single most effective way to eliminate camp anxiety begins in your own living room. Sit on the floor together. Let your child fold their own sweaters, pack their extra socks in ziplock bags, and test their flashlight. When a seven-year-old knows exactly which pocket holds their pajamas, they feel entirely in control inside their tent.",
      "What Stays at Home (Strict Rule): Mobile phones, smartwatches, handheld gaming devices, and personal junk food are strictly prohibited. These devices do not soothe homesickness—they amplify it by keeping children tethered to a digital umbilical cord. In our phone-free environment, children immerse themselves in the campfire, laugh with tent-mates, and quickly forget anxiety.",
      "How Leaders Handle the 9:00 PM Bedtime Moment: Nighttime is when first-time campers most commonly feel a wave of missing their parents. Our cheftaines and chefs are specially trained for this moment. We do not dismiss tears. A leader sits quietly beside the child, listens with warmth, offers a cup of warm mint tea, reminds them of how proud their parents will be on Sunday, and sings gentle pack bedtime songs.",
      "Within fifteen minutes, the physical exhaustion of a day spent running in mountain pine air takes over, and children fall into deep, restorative sleep.",
      "Safety, Hygiene, and 24-Hour Watch: Our group maintains a strict adult-to-child ratio. Certified first-aiders with Red Cross training are on duty at all times with fully stocked medical field kits. At night, a rotational watch ensures that no child wanders out of tents unassisted. Handwashing and tooth-brushing routines are actively supervised before every communal meal.",
      "The Sunday Pickup: When you arrive at the church courtyard on Sunday afternoon, be prepared for a wonderful surprise. Your child will step off the bus dusty, tired, wearing their scarf with immense pride, and eager to tell you fifty stories at once. They will have discovered that they are braver than they knew—and that is the greatest gift scouting offers."
    ],
    contentAr: [
      "في كل عام مع اقتراب موعد مخيم الخريف التدريبي، نستقبل أولياء أمور يحملون نفس الأسئلة الصادقة والمشروعة: هل سيكون طفلي دافئاً في الليل؟ ماذا لو اشتاق إلى البيت عند النوم؟ من يتأكد من أنه تناول طعامه؟ وماذا نفعل إذا شعر بالتعب؟",
      "إذا كنتم تشعرون ببعض القلق بشأن إرسال طفلكم في مخيمه الأول للمبيت خارج المنزل، فتنفسوا براحة. لقد رافق كل قائد وقائدة في فوجنا عشرات الأطفال في هذه الخطوة الهامة. إليكم تفصيلاً صادقاً وخطوة بخطوة لما نقوم به لحماية طفلكم ورعايته وبناء ثقته من لحظة صعود الباص حتى لقاء الأحد.",
      "القاعدة الذهبية لتوضيب الأمتعة: وضّبوا مع طفلكم، وليس بدلاً عنه: أفضل طريقة لتبديد قلق المخيم تبدأ من غرفة الجلوس في بيتكم. اجلسوا معاً على الأرض، دعوا طفلكم يطوي سترته بنفسه، يضع جواربه الإضافية في أكياس نايلون، ويجرب مصباحه اليدوي. وحين يعرف الفتى ذو السبع سنوات في أي جيب وضع بيجامته، يشعر بالتحكم الكامل والاستقرار داخل خيمته.",
      "ما يُمنع إحضاره تماماً: تُمنع الهواتف المحمولة، الساعات الذكية، والألعاب الإلكترونية والحلويات المصنعة منعاً باتاً. هذه الأجهزة لا تهدئ الشوق، بل تزيده لأنها تبقي الطفل مشدوداً بحبل سري رقمي. وفي بيئتنا الخالية من الشاشات، ينغمس الأطفال في ألعاب الطبيعة وسهرات النار وينسون القلق في دقائق.",
      "كيف يتعامل القادة مع لحظة النوم عند التاسعة مساءً: المساء هو الوقت الأكثر شيوعاً لشعور المبتدئين بالشوق لأهلهم. قادتنا مدربون خصيصاً لهذه اللحظة الدافئة: لا نستهين بدموع الطفل، بل يجلس القائد قربه، يستمع إليه بحنان، يقدم له كوباً دافئاً من الشاي بالنعناع، ويذكره بمدى فخر والديه به، ويغني معه أناشيد النوم الكشفية الهادئة.",
      "وفي غضون ربع ساعة، يتغلب التعب الجسدي بعد يوم من الركض في هواء الجبل النقي، ويغط الأطفال في نوم عميق وصحي.",
      "السلامة، النظافة، والمراقبة المستمرة على مدار الساعة: نلتزم بنسبة إشراف عالية تضمن وجود قائد لكل عدد قليل من الأطفال. يتواجد مسعفون معتمدون في كل الأوقات مع حقائب إسعاف مجهزة. وفي الليل، يتناوب القادة على الحراسة للتأكد من عدم خروج أي طفل بمفرده. كما تتم مراقبة غسل اليدين وتنظيف الأسنان قبل كل وجبة طعام.",
      "لقاء بعد ظهر الأحد: حين تصلون إلى باحة الكنيسة بعد ظهر الأحد لاستقبال طفلكم، استعدوا لمفاجأة سارة. سينزل طفلكم من الباص تعباً ممتلئاً بغبار المغامرة، يرتدي منديله الكشفي بفخر استثنائي، ومتشوقاً ليحكي لكم خمسين قصة في وقت واحد. لقد اكتشف أنه أكثر شجاعة واعتماداً على نفسه مما كان يظن—وهذه هي أثمن هدية تقدمها الكشفية لأبنائكم."
    ],
    inlineImages: [
      {
        index: 2,
        url: "https://images.unsplash.com/photo-1472898965229-f9b06b9c9bbe?auto=format&fit=crop&w=1000&q=80",
        caption: "Packing backpacks and checking flashlights before camp departure",
        captionAr: "توضيب حقيبة الظهر وفحص المصباح قبل الانطلاق إلى المخيم"
      },
      {
        index: 4,
        url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1000&q=80",
        caption: "Tent inspection and nighttime campfire story circle",
        captionAr: "تفتيش الخيام وحلقة قصص سهرة النار الهادئة قبل النوم"
      }
    ]
  }
];
