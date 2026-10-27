export interface ScoutReview {
  id: string;
  name: string;
  role: string;
  roleAr: string;
  rating: number;
  quote: string;
  quoteAr: string;
  image: string;
}

export const scoutReviews: ScoutReview[] = [
  {
    id: "r1",
    name: "Cynthia K.",
    role: "Parent of Louveteaux & Zahrat",
    roleAr: "أم لطفلين في فرع القراميز والزهرات",
    rating: 5,
    quote: "My two kids joined the Gramiz pack three years ago. The changes in their independence, how they pack their own bags, help at home, and respect nature have been incredible. Saint Jean Marc isn't daycare—it is a true school of life.",
    quoteAr: "انتسب ولداي إلى فرع القراميز منذ ثلاث سنوات. التغيير في استقلاليتهما واعتمادهما على النفس، وكيف يحضران حقيبتيهما بنفسيهما، أمر رائع. مار يوحنا مرقس ليس مجرد تمضية وقت—بل هو مدرسة حقيقية للحياة.",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "r2",
    name: "Marc E.",
    role: "Former Patrol Leader & Alumni",
    roleAr: "عريف طليعة سابق من قدامى الفوج",
    rating: 5,
    quote: "The 10-day summer camps taught me more about teamwork, resilience, and genuine friendship than any classroom ever did. Building our own kitchen towers from timber and ropes under the stars stays with you for life.",
    quoteAr: "المخيمات الصيفية لعشرة أيام علمتني عن العمل الجماعي، الصمود، والصداقة الحقيقية أكثر من أي مقعد دراسي. بناء منشآت المخيم الخشبية تحت النجوم تجربة تبقى معك طوال العمر.",
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "r3",
    name: "Dr. Elie S.",
    role: "Scout Parent Committee Member",
    roleAr: "عضو لجنة الأهل في الفوج",
    rating: 5,
    quote: "As parents, what impresses us most is the dedication of the volunteer chefs. Every Saturday is organized, safe, and positive. You feel the deep 49-year heritage of Byblos every time the group gathers.",
    quoteAr: "أكثر ما يطمئننا كأهل هو تفاني القادة المتطوعين. كل سبت منظم، آمن، وممتلئ بالطاقة الإيجابية. تشعر بعراقة ٤٩ عاماً في كل تجمع يقيمه الفوج في جبيل.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "r4",
    name: "Rita M.",
    role: "Mourchidet Scout Leader",
    roleAr: "قائدة في فرع المرشدات",
    rating: 5,
    quote: "Watching a shy 11-year-old girl step up to lead her patrol on a mountain hike and build campfires with confidence is the most rewarding thing about volunteering here. This is our second family.",
    quoteAr: "أن ترى فتاة خجولة بعمر ١١ سنة تصبح قائدة طليعة تقود مسيراً جبلياً وتبني موقد النار بثقة هو أجمل ما في التطوع هنا. هذا الفوج هو عائلتنا الثانية.",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80",
  },
];
