export const ghlBookingUrl = process.env.NEXT_PUBLIC_GHL_BOOKING_URL || '/contact';
export const businessPhoneDisplay = '978-915-6499';
export const businessPhoneHref = 'tel:9789156499';
export const ghlFormUrl = process.env.NEXT_PUBLIC_GHL_FORM_URL || '';

export const industryPages = {
  'auto-repair': {
    name: 'Auto Repair',
    eyebrow: 'AI systems for repair shops',
    headline: 'Turn missed calls into booked repair jobs.',
    subhead: 'Essential Solutions helps auto repair shops recover missed calls, answer common customer questions, book appointments, send reminders, and request reviews automatically.',
    image: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=1400',
    pains: ['Missed calls during busy shop hours', 'Customers asking repetitive pricing and availability questions', 'No-shows and forgotten appointments', 'Good customers leaving without a review'],
    outcomes: ['Recover missed-call leads', 'Book more estimates and service appointments', 'Reduce front desk interruptions', 'Build a stronger review profile'],
    workflow: ['Customer calls or texts', 'AI responds or routes the lead', 'Appointment is booked or followed up', 'CRM tracks the opportunity', 'Review request is sent after service'],
  },
  'med-spas': {
    name: 'Med Spas',
    eyebrow: 'AI systems for med spas',
    headline: 'Capture consultations before leads choose another provider.',
    subhead: 'We help med spas respond quickly, book consultations, follow up with undecided leads, and build reputation through automated review requests.',
    image: 'https://images.pexels.com/photos/3997981/pexels-photo-3997981.jpeg?auto=compress&cs=tinysrgb&w=1400',
    pains: ['Leads comparing multiple providers', 'Slow consultation follow-up', 'Front desk overloaded with basic questions', 'Inconsistent review requests'],
    outcomes: ['Faster consultation response', 'More booked appointments', 'Better lead nurturing', 'More reputation-building touchpoints'],
    workflow: ['Lead calls, texts, or fills a form', 'AI answers FAQs and captures interest', 'Calendar booking link is delivered', 'Follow-up continues until booked', 'Review request sent after visit'],
  },
  'dental': {
    name: 'Dental Offices',
    eyebrow: 'AI systems for dental offices',
    headline: 'Keep new patient requests from slipping through the cracks.',
    subhead: 'We help dental offices manage missed calls, new patient inquiries, appointment reminders, review requests, and follow-up through one clean system.',
    image: 'https://images.pexels.com/photos/3845766/pexels-photo-3845766.jpeg?auto=compress&cs=tinysrgb&w=1400',
    pains: ['New patient calls missed during procedures', 'Manual appointment reminders', 'Untracked inquiries', 'Weak review follow-up'],
    outcomes: ['More new patient opportunities captured', 'Fewer no-shows', 'Cleaner patient inquiry tracking', 'More consistent review generation'],
    workflow: ['Inquiry comes in', 'AI captures details', 'Appointment reminder sequence starts', 'Pipeline tracks status', 'Review request sent after visit'],
  },
  'home-services': {
    name: 'Home Services',
    eyebrow: 'AI systems for home service companies',
    headline: 'Answer faster, quote cleaner, and follow up automatically.',
    subhead: 'We help contractors and home service teams capture job requests, screen leads, route urgent calls, and follow up until estimates are booked.',
    image: 'https://images.pexels.com/photos/4792487/pexels-photo-4792487.jpeg?auto=compress&cs=tinysrgb&w=1400',
    pains: ['Calls missed while crews are on jobs', 'Lead details scattered across texts and voicemails', 'Slow estimate follow-up', 'No consistent review process'],
    outcomes: ['More estimate requests captured', 'Better job intake', 'Faster follow-up', 'Cleaner customer pipeline'],
    workflow: ['Job request comes in', 'AI collects basic details', 'Lead is routed or booked', 'Follow-up sequence runs', 'Completed job triggers review request'],
  },
  'logistics': {
    name: 'Logistics',
    eyebrow: 'AI systems for logistics teams',
    headline: 'Organize calls, leads, dispatch requests, and follow-up in one system.',
    subhead: 'We help logistics and transport businesses reduce communication chaos, track customer requests, and automate status updates and follow-up.',
    image: 'https://images.pexels.com/photos/4484149/pexels-photo-4484149.jpeg?auto=compress&cs=tinysrgb&w=1400',
    pains: ['Dispatch calls and customer requests scattered everywhere', 'Missed quote requests', 'Manual updates wasting time', 'No central customer pipeline'],
    outcomes: ['Cleaner request tracking', 'Better customer communication', 'Reduced repetitive updates', 'Stronger follow-up process'],
    workflow: ['Request comes in', 'System captures details', 'Pipeline tracks status', 'Automated updates go out', 'Follow-up/review request triggered'],
  },

  'contractors': {
    name: 'Contractors',
    eyebrow: 'AI systems for local contractors',
    headline: 'Stop losing estimate requests while you are on the job.',
    subhead: 'Essential Solutions helps contractors capture calls, organize estimate requests, follow up with homeowners, and request reviews after completed jobs.',
    image: 'https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=1400',
    pains: ['Calls missed while crews are working', 'Unclear job details from voicemail and text', 'Slow estimate follow-up', 'Happy customers never asked for reviews'],
    outcomes: ['Cleaner job intake', 'Faster quote follow-up', 'More booked estimates', 'Stronger local reputation'],
    workflow: ['Customer requests work', 'System captures job details', 'Estimate is booked or routed', 'Follow-up sequence keeps lead warm', 'Review request sent after completion'],
  },
  'law-offices': {
    name: 'Law Offices',
    eyebrow: 'AI systems for law offices',
    headline: 'Respond to new client inquiries before they call the next firm.',
    subhead: 'We help law offices capture intake requests, route urgent matters, follow up professionally, and keep prospective clients organized in one pipeline.',
    image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1400',
    pains: ['New client calls missed during meetings', 'Manual intake follow-up', 'No centralized lead tracking', 'Slow response creates lost opportunities'],
    outcomes: ['Faster inquiry capture', 'Cleaner intake routing', 'Better follow-up discipline', 'More visibility into potential cases'],
    workflow: ['Inquiry comes in', 'System captures basic intake details', 'Lead routed to the right person', 'Follow-up reminders continue', 'Pipeline tracks next action'],
  },
  'cleaning-companies': {
    name: 'Cleaning Companies',
    eyebrow: 'AI systems for cleaning companies',
    headline: 'Book more cleaning jobs without chasing every inquiry manually.',
    subhead: 'Essential Solutions helps cleaning companies respond to quotes, collect details, book appointments, follow up, and request reviews automatically.',
    image: 'https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=1400',
    pains: ['Quote requests left unanswered', 'Manual scheduling back-and-forth', 'No-shows and weak confirmations', 'No repeatable review process'],
    outcomes: ['More quote requests captured', 'Cleaner scheduling', 'Better reminders', 'More reviews from completed jobs'],
    workflow: ['Quote request arrives', 'System collects service details', 'Appointment is booked', 'Reminder sequence runs', 'Review request follows completion'],
  },
};

export const faqs = [
  ['Is this just software access?', 'No. The offer is implementation. We install the CRM, automations, AI workflows, booking process, and follow-up system so the business can actually use it.'],
  ['Do I need to replace my staff?', 'No. The goal is to reduce repetitive admin work and help your team respond faster, not remove the human side of the business.'],
  ['Can this work with my current website?', 'Yes. We can connect forms, booking links, chat widgets, tracking, and follow-up systems to your existing site.'],
  ['What happens after launch?', 'We monitor the system, review performance, adjust workflows, and help improve the process over time depending on your package.'],
];
