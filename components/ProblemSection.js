"use client";

export default function ProblemSection() {
  const problems = [
    'Missed calls',
    'Slow follow‑up',
    'Messy customer tracking',
    'No automated review requests',
    'Staff wasting time answering repetitive questions',
    'Leads falling through the cracks',
  ];
  return (
    <section className="bg-light text-primary py-20" id="problems">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          Is this costing you customers?
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {problems.map((problem, idx) => (
            <div
              key={idx}
              className="flex items-start space-x-4 bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition-shadow"
            >
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 text-accent"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <circle cx="12" cy="16" r="1" />
                </svg>
              </div>
              <p className="font-medium leading-relaxed">{problem}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}