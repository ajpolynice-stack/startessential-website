"use client";

const solutions = [
  {
    title: 'AI Receptionist & Call Screening',
    description:
      'Answer common questions, route serious leads, book appointments and filter sales/telemarketing calls.',
    icon: (
      <svg
        className="h-8 w-8 text-accent"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92V22a2 2 0 0 1-2.18 2 19.74 19.74 0 0 1-8.63-3.16 19.5 19.5 0 0 1-6-6 19.74 19.74 0 0 1-3.16-8.64A2 2 0 0 1 2 2h5.09a2 2 0 0 1 2 1.72c.12.86.31 1.7.57 2.5a2 2 0 0 1-.45 2L7.91 9.91a16 16 0 0 0 6 6l1.69-1.69a2 2 0 0 1 2-.45c.8.26 1.64.45 2.5.57a2 2 0 0 1 1.72 2z" />
      </svg>
    ),
  },
  {
    title: 'Lead Capture & Follow‑Up',
    description:
      'Automatically follow up via SMS, email and voice when leads call, text or fill out a form.',
    icon: (
      <svg
        className="h-8 w-8 text-accent"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h8" />
        <polyline points="18 2 23 7 18 12" />
      </svg>
    ),
  },
  {
    title: 'Appointment Booking',
    description:
      'Let customers book, reschedule and receive reminders automatically to reduce no‑shows.',
    icon: (
      <svg
        className="h-8 w-8 text-accent"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="M12 14h.01" />
        <path d="M12 18h.01" />
        <path d="M16 14h.01" />
        <path d="M8 14h.01" />
      </svg>
    ),
  },
  {
    title: 'Reviews & Reputation',
    description:
      'Automatically request and manage reviews to build a strong online reputation.',
    icon: (
      <svg
        className="h-8 w-8 text-accent"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: 'CRM & Pipeline Tracking',
    description:
      'Track every lead from new inquiry to booked appointment to closed customer.',
    icon: (
      <svg
        className="h-8 w-8 text-accent"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <line x1="7" y1="10" x2="7" y2="14" />
        <line x1="10" y1="7" x2="14" y2="7" />
        <line x1="17" y1="10" x2="17" y2="14" />
      </svg>
    ),
  },
];

export default function SolutionsSection() {
  return (
    <section className="bg-white py-20" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Solutions that sell for you</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((sol, idx) => (
              <div
                key={idx}
                className="flex flex-col items-start bg-light text-primary rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{sol.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{sol.title}</h3>
                <p className="text-base leading-relaxed flex-grow">{sol.description}</p>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}