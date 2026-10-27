export interface FAQItem {
  question: string;
  answer: string;
  category: "joining" | "practical" | "camps";
}

export const faqs: FAQItem[] = [
  {
    category: "joining",
    question: "At what age can my child join Scout Des Cèdres Saint Jean Marc?",
    answer: "We welcome children starting at age 4 in our Gramiz & Zahrat pack (ages 4–11), adolescents in Kochefe & Mourchidet (ages 11–16), and young adults in Jouwele & Mounjidet (ages 16–24).",
  },
  {
    category: "practical",
    question: "When and where do weekly meetings take place?",
    answer: "Regular meetings are held every Saturday from 3:00 PM to 4:30 PM at the Saint Jean Marc Scout hall (located near Antoch Saint Jean Marc UNESCO Se7a in Byblos/Jbeil). Special hikes or salida times will be announced by unit leaders.",
  },
  {
    category: "joining",
    question: "How do I register my child?",
    answer: "You can click the 'Register / Inquire' button or directly message our group leaders on WhatsApp. You are also warmly invited to come with your child on any Saturday at 3:00 PM to meet the leaders and experience a session firsthand.",
  },
  {
    category: "practical",
    question: "What is required for the uniform (foulard and shirt)?",
    answer: "New recruits can attend their first sessions in comfortable outdoor clothes and sports shoes. Once confirmed, you will receive guidance on getting the group shirt and the official Saint Jean Marc foulard (scarf).",
  },
  {
    category: "camps",
    question: "Are your outdoor camps supervised and safe?",
    answer: "Yes, absolutely. Our leaders hold certified scout training credentials and first-aid badges. Every outdoor camp has adult supervision, strict safety protocols, emergency transport ready on site, and parental permission forms for every activity.",
  },
  {
    category: "practical",
    question: "Can parents volunteer or get involved?",
    answer: "We warmly welcome parental involvement! Parents can join the Comité des Parents (Parents Committee) to assist with logistics during large events, transport on outings, or supporting parish celebrations.",
  },
];
