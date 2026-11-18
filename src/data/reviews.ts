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
    role: "Mother of Louveteau (Pack Parent)",
    roleAr: "أم لكشاف في فرع الجراميز",
    rating: 5,
    quote: "I was hesitant at first when my son asked to join because Saturday is the only quiet afternoon of the week. But seeing him come back from Saint Jean Marc with dusty shoes, singing troop songs in the car, and helping out at home... you cannot find that in any club. The chefs care for the kids like their own younger brothers.",
    quoteAr: "بالبداية كنت مترددة سجّل ابني بالجراميز لأن السبت بعد الظهر هو وقت الراحة الوحيد بالبيت. بس لما شفت كيف بيرجع من باحة مار يوحنا مرقس وغبار المغامرة عتيابه، يغني بالسيارة ويرتب أغراضه لحاله، عرفت قيمة الفوج. القادة عم يهتموا بالولاد من قلبن متل إخوتن الصغار.",
    image: "",
  },
  {
    id: "r2",
    name: "Marc E.",
    role: "Former Patrol Leader & Alumni",
    roleAr: "عريف طليعة سابق من قدامى الفوج",
    rating: 5,
    quote: "I spent 12 years in Saint Jean Marc, from Louveteaux to CP. What stayed with me was not just hiking the Qadisha valley; it was waking up at 6 AM under the canvas tent, sharing bread with my patrol, and learning that when something goes wrong, you do not complain—you fix it. Even today in my career, those camp habits are still with me.",
    quoteAr: "قضيت ١٢ سنة بالفوج من الجراميز لصرت عريف طليعة. اللي بقي معي مش بس مشوار قاديشا؛ هي فيقة الصبح بكير تحت الخيمة وتقاسم الخبز مع رفقات الطليعة. بالمخيم بتتعلم ما تتذمر لما تصعب الأمور، بل بتلاقي حل فوراً. حتى اليوم بشغلي، روح الفوج بعدها مرافقتني.",
    image: "",
  },
  {
    id: "r3",
    name: "Dr. Elie S.",
    role: "Parent of 2 Scouts in Byblos",
    roleAr: "أب لكشافين في رعية جبيل",
    rating: 5,
    quote: "What I respect most is that none of the chefs are paid. They are university students and young professionals from Byblos who give up their Saturday every single week to be with our kids in the church courtyard. When I drop my daughter off at 3 PM, I know she is in safe, grounded hands.",
    quoteAr: "أكتر شي بقدّرو إنو ما في ولا قائد عم يقبض ليرة. شباب وصبايا جامعيين ومن أهل جبيل عم يضحّوا بكل نهار سبت ليكونوا مع ولادنا بباحة الرعية. لما وصّل بنتي عالساعة تلاتة، بكون مرتاح ومطمّن إنها بين أيادي أمينة ومحترمة.",
    image: "",
  },
  {
    id: "r4",
    name: "Rita M.",
    role: "Cheftaine in Saint Jean Marc",
    roleAr: "قائدة في فوج مار يوحنا مرقس",
    rating: 5,
    quote: "People ask why we spend our weekends planning meetings and running around the courtyard instead of relaxing. You understand why the moment a 9-year-old who was shy on day one stands up at the campfire to lead the troop song with a huge smile. Saint Jean Marc is our second home in Byblos.",
    quoteAr: "بيسألونا ليش عم نقضي الويك إند عم نحضّر ونركض بالباحة بدل ما نرتاح. الجواب بتشوفه بعيون الولد اللي كان خجول أول يوم، وصار بسهرة النار عم يوقف قدام الكل يغنّي ويضحك من قلبه. مار يوحنا مرقس مش مجرد نشاط، هيدا بيتنا التاني بجبيل.",
    image: "",
  },
];
