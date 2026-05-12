"use client";

const plans = [
  {
    name: 'Starter',
    price: '$499/mo',
    description: 'For businesses that need basic lead capture and follow‑up.',
    features: [
      'AI-ready CRM setup',
      'Basic pipeline',
      'Website contact form integration',
      'Missed‑call text‑back',
      'Appointment calendar',
      'Basic review request automation',
      'Monthly system check-in',
    ],
    popular: false,
  },
  {
    name: 'Growth',
    price: '$899/mo',
    description: 'For businesses ready to automate calls, booking, follow‑up and reviews.',
    features: [
      'Everything in Starter',
      'AI receptionist setup',
      'Advanced lead follow‑up workflows',
      'Unified call/text/email conversation inbox',
      'Review growth system',
      'Sales pipeline automation',
      'Monthly optimization report',
      'Team training session',
    ],
    popular: true,
  },
  {
    name: 'Pro',
    price: '$1,499/mo',
    description: 'For businesses that want deeper automation and heavier support.',
    features: [
      'Everything in Growth',
      'Multi-location or multi-team setup',
      'Advanced AI training/custom FAQs',
      'More complex workflows',
      'Campaign support',
      'Priority support',
      'Deeper reporting',
      'Quarterly strategy session',
    ],
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section className="bg-light text-primary py-20" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Pricing plans</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col bg-white rounded-lg shadow-md p-6 ${
                plan.popular ? 'border-2 border-accent' : ''
              }`}
            >
              {plan.popular && (
                <span className="absolute top-0 right-0 mt-2 mr-2 bg-accent text-primary text-xs font-semibold px-3 py-1 rounded-full">
                  Most&nbsp;Popular
                </span>
              )}
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-2xl font-bold mb-4">{plan.price}</p>
              <p className="text-base mb-4 text-gray-700">{plan.description}</p>
              <ul className="mb-6 space-y-2 text-sm">
                {plan.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start">
                    <svg
                      className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-auto inline-block bg-accent text-primary font-semibold px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-gray-600 max-w-2xl mx-auto">
          Usage‑based phone, SMS, email and AI costs may apply depending on volume. Contact us for custom quotes or
          enterprise plans.
        </p>
      </div>
    </section>
  );
}