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
    answer: "We take children starting from age 4 in our Gramiz & Zahrat pack (ages 4–11), pre-teens and teens in Kochefe & Mourchidet (ages 11–16), and youth in Jouwele & Mounjidet (ages 16–24). If your child falls in between, our chiefs will place them where they feel most confident.",
    answerAr: "نستقبل الأطفال ابتداءً من عمر ٤ سنوات في قسم القراميز والزهرات (٤–١١ سنة)، الفتيان والفتيات في قسم الكشافة والمرشدات (١١–١٦ سنة)، والشباب في قسم الجوالة والمنجدات (١٦–٢٤ سنة). وإذا كان عمر طفلكم بين مرحلتين، يوجهه القادة للقسم الأنسب لثقته وتطوره.",
  },
  {
    category: "practical",
    question: "What should my child wear to their first meeting?",
    questionAr: "ماذا يرتدي طفلي في لقائه الأول؟",
    answer: "Regular comfortable clothes and sneakers. Please don't buy a scout shirt, hiking boots, or gear beforehand. Only after your child decides to stay and prepare for their Scout Promise do we help you order the official Saint Jean Marc uniform and neckerchief.",
    answerAr: "ثياب عادية مريحة وحذاء رياضي. يرجى عدم شراء أي قميص كشفي أو حذاء جبلي مسبقاً. بعد أن يقرر طفلكم الاستمرار والاستعداد للوعد الكشفي، نساعدكم في تأمين الزي الرسمي وفولار مار يوحنا مرقس.",
  },
  {
    category: "practical",
    question: "When and where do you meet every week?",
    questionAr: "أين ومتى تلتقون أسبوعياً؟",
    answer: "Every Saturday afternoon from 3:00 PM to 4:30 PM in the courtyard of Antoch Saint Jean Marc (right by the UNESCO Se7a in old Byblos). If a section has a morning hike or special outing, leaders inform parents on WhatsApp a week in advance.",
    answerAr: "كل نهار سبت من ٣:٠٠ حتى ٤:٣٠ بعد الظهر في باحة كنيسة مار يوحنا مرقس (قرب ساحة بيبلوس الأثرية في جبيل القديمة). وفي حال وجود مسير صباحي أو مخيم خاص، يتم إبلاغ الأهل عبر واتساب مسبقاً.",
  },
  {
    category: "camps",
    question: "How safe are your mountain camps?",
    questionAr: "ما هي معايير السلامة في المخيمات الجبلية؟",
    answer: "Safety is our first responsibility. Our chefs and cheftaines hold certified training credentials, our first-aider is permanently on site, and emergency vehicles are on standby throughout every camp. For younger cubs (ages 4–11), camps take place in secure parish or reserve facilities with high leader-to-child ratios.",
    answerAr: "السلامة أولويتنا المطلقة. جميع قادتنا مؤهلون بتدريبات قيادية، مع وجود مسعفين حائزين على شهادات الصليب الأحمر اللبناني في الموقع وسيارة طوارئ طوال فترة المخيم. ومخيمات الصغار تقام في أديرة ومحميات مقفلة وآمنة.",
  },
  {
    category: "joining",
    question: "What if my child is shy or doesn't know anyone in Byblos?",
    questionAr: "ماذا لو كان طفلي خجولاً ولا يعرف أحداً في جبيل؟",
    answer: "Almost every scout started out shy on their first Saturday. Because scouting happens in small patrols of six to eight peers, new arrivals are immediately paired with a warm patrol buddy. Within twenty minutes, they're running around with new friends.",
    answerAr: "معظم الكشافة بدأوا خجولين في سبتهم الأول. ولأن النشاط يجري ضمن طلائع صغيرة (٦ إلى ٨ أطفال)، يُربط المنتسب الجديد فوراً بصديق مرافق، وخلال نصف ساعة ينسجم تماماً ويبدأ باللعب مع أصدقاء جدد.",
  },
];
