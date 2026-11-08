export interface FAQItem {
  question: string;
  questionAr: string;
  answer: string;
  answerAr: string;
  category: "joining" | "practical" | "camps";
}

export const faqs: FAQItem[] = [
  {
    category: "joining",
    question: "How do we register? Is there paperwork beforehand?",
    questionAr: "كيف يتم الانتساب؟ وهل هناك معاملات ورقية مسبقة؟",
    answer: "None at all. Just show up with your child on any Saturday at 3:00 PM at the Saint Jean Marc courtyard in Byblos. Put them in everyday play clothes and sneakers. While they join in the games, you can share an espresso with our leaders. After a few meetings, if your child loves it, we'll give you the simple troop registration slip and order their foulard.",
    answerAr: "لا معاملات ورقية على الإطلاق. يكفي الحضور مع طفلكم أي نهار سبت عند الساعة ٣:٠٠ بعد الظهر في باحة مار يوحنا مرقس في جبيل بثياب مريحة وحذاء رياضي. وبينما يشارك طفلكم في الألعاب، يمكنكم التعرف على القادة. وإذا أحب التجربة بعد بضعة لقاءات، نساعدكم في بطاقة التسجيل وطلب الفولار الرسمي.",
  },
  {
    category: "joining",
    question: "At what age can my child join?",
    questionAr: "ما هي الأعمار المقبولة في الفوج؟",
    answer: "We welcome children from age 4 to young adults up to 24 across three branches: Louveteaux & Jeannettes (Jaramiz & Zahrat, ages 4–11), Scouts & Guides (Kechefe & Mourchidet, ages 11–16), and Routiers & Caravelles (Jouwele & Mounjidet, ages 16–24). If your child falls in between, our chiefs place them where they feel most confident.",
    answerAr: "نستقبل الأطفال والشباب من عمر ٤ حتى ٢٤ سنة عبر ثلاثة فروع: صغار الكشافة (جراميز وزهرات ٤–١١ سنة)، الفتيان والفتيات (كشافة ومرشدات ١١–١٦ سنة)، والشباب (جوالة ومنجدات ١٦–٢٤ سنة). وإذا كان عمر طفلكم بين مرحلتين، يوجهه القادة للقسم الأنسب لثقته وتطوره.",
  },
  {
    category: "practical",
    question: "How much does scouting cost? Are camps expensive?",
    questionAr: "كم تبلغ تكلفة الانتساب؟ وهل المخيمات مكلفة؟",
    answer: "Scouting is a non-profit volunteer movement. Annual troop dues are nominal and cover insurance, badges, and meeting supplies. Weekend outings and summer camps are budgeted at strict cost with zero profit. Furthermore, our golden rule has stood for 50 years: no child or youth is ever left behind due to financial circumstances.",
    answerAr: "الكشفية حركة تطوعية غير ربحية. اشتراك الفوج السنوي رمزي ويغطي التأمين، الشارات ومواد الأنشطة. المخيمات والرحلات تُحسب بسعر التكلفة المباشرة فقط. وقاعدتنا الذهبية منذ ٥٠ عاماً واضحة: لا يُحرم أي طفل أو شاب من المشاركة في الفوج أو المخيمات لأسباب مادية على الإطلاق.",
  },
  {
    category: "practical",
    question: "Is the troop open to both boys and girls?",
    questionAr: "هل الفوج مختلط للفتيان والفتيات؟",
    answer: "Yes, Groupe Saint Jean Marc has proudly welcomed both boys and girls since 1983. Weekly assemblies and group games are shared, while patrols, mentoring, and camp sleeping quarters are organized respectfully, safely, and appropriately for each age group.",
    answerAr: "نعم، يستقبل فوج القديس يوحنا مرقس الفتيان والفتيات منذ عام ١٩٨٣. تقام التجمعات والألعاب الكبرى معاً، بينما تُنظم الطلائع، المنامة في المخيمات، والمرافقة التربوية بكل احترام وانضباط وفق الفئات العمرية.",
  },
  {
    category: "practical",
    question: "What should my child wear to their first meeting?",
    questionAr: "ماذا يرتدي طفلي في لقائه الأول؟",
    answer: "Regular comfortable play clothes and sneakers. Please don't buy a scout shirt, hiking boots, or gear beforehand. Only after your child decides to stay and prepare for their Scout Promise do we help you order the official Saint Jean Marc uniform and neckerchief.",
    answerAr: "ثياب عادية مريحة وحذاء رياضي. يرجى عدم شراء أي قميص كشفي أو حذاء جبلي مسبقاً. بعد أن يقرر طفلكم الاستمرار والاستعداد للوعد الكشفي، نساعدكم في تأمين الزي الرسمي وفولار مار يوحنا مرقس.",
  },
  {
    category: "practical",
    question: "When and where do you meet every week?",
    questionAr: "أين ومتى تلتقون أسبوعياً؟",
    answer: "Every Saturday afternoon from 3:00 PM to 4:30 PM in the courtyard of Paroisse Saint Jean Marc in old Byblos. All three branches meet at the exact same time, which makes Saturday drop-offs effortless for parents with multiple children.",
    answerAr: "كل نهار سبت من ٣:٠٠ حتى ٤:٣٠ بعد الظهر في باحة كنيسة مار يوحنا مرقس في جبيل القديمة. تلتقي الفروع الثلاثة في التوقيت نفسه، مما يسهل على الأهل توصيل جميع أولادهم في موعد واحد.",
  },
  {
    category: "camps",
    question: "How safe are your mountain camps?",
    questionAr: "ما هي معايير السلامة في المخيمات الجبلية؟",
    answer: "Safety is our first responsibility. Our chefs and cheftaines hold certified training credentials, our first-aiders hold Lebanese Red Cross certifications, and an emergency vehicle is stationed on site. For younger cubs (ages 4–11), camps take place in secure enclosed parish or reserve grounds.",
    answerAr: "السلامة أولويتنا المطلقة. جميع قادتنا متطوعون خضعوا لدورات إعداد قيادي، مع وجود مسعفين حائزين على شهادات الصليب الأحمر اللبناني في الموقع وسيارة طوارئ دائمة طوال فترة المخيم. ومخيمات الصغار تقام في أديرة ومحميات مقفلة ومؤمنة.",
  },
  {
    category: "practical",
    question: "How do younger scouts balance scouting with school, homework, exams, and other activities (sports/music)?",
    questionAr: "كيف يوفق الكشاف الصغير بين نشاط الكشافة والدروس المدرسية والامتحانات والرياضة؟",
    answer: "Easily and healthily. Scouting meetings take place exclusively on Saturday afternoons for only 90 minutes (3:00 to 4:30 PM), leaving mornings and Sundays completely free for homework, sports practice, and family time. During official school exam periods (midterms and finals), troop activities are paused or lightened. Far from hurting school performance, 50 years of experience show that scouting teaches children discipline, autonomy, time management, and healthy focus away from digital screens.",
    answerAr: "بكل سهولة وتوازن. تقام الاجتماعات الأسبوعية حصراً بعد ظهر السبت لمدة ساعة ونصف فقط (من ٣:٠٠ حتى ٤:٣٠)، مما يترك فترات الصباح ويوم الأحد بأكمله حراً للدروس والواجبات المدرسية والتمارين الرياضية والعائلة. وفي فترات الامتحانات المدرسية الرسمية ونصف السنة، يُخفف البرنامج أو يُعلق مؤقتاً لمراعاة دراسة الأولاد. وخبرة ٥٠ عاماً تثبت أن الكشفية لا تعيق الدراسة، بل تنمي لدى الطفل الانضباط الذاتي وتنظيم الوقت والتركيز بعيداً عن الشاشات الإلكترونية.",
  },
  {
    category: "joining",
    question: "What if my child is shy or doesn't know anyone in Byblos?",
    questionAr: "ماذا لو كان طفلي خجولاً ولا يعرف أحداً في جبيل؟",
    answer: "Almost every scout started out shy on their first Saturday. Because scouting happens in small patrols of six to eight peers, new arrivals are immediately paired with a warm patrol buddy. Within twenty minutes, they're laughing and running around with new friends.",
    answerAr: "معظم الكشافة بدأوا خجولين في سبتهم الأول. ولأن النشاط يجري ضمن طلائع صغيرة (٦ إلى ٨ أطفال)، يُربط المنتسب الجديد فوراً بصديق مرافق، وخلال نصف ساعة ينسجم تماماً ويبدأ باللعب مع أصدقاء جدد.",
  },
];
