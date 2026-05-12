"use client";

const steps = [
  {
    title: 'Systems Audit',
    description: 'We review how calls, texts, forms, appointments and reviews are currently handled.',
  },
  {
    title: 'Buildout',
    description: 'We create your CRM, automations, AI assistant, calendar and follow‑up system.',
  },
  {
    title: 'Launch & Train',
    description: 'We test everything and show your team how to use it.',
  },
  {
    title: 'Improve',
    description: 'We monitor performance and adjust the system over time.',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-light text-primary py-20" id="how">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-primary font-bold text-lg mb-4">
                {idx + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-base leading-relaxed text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}