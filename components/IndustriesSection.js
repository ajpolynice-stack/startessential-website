"use client";

const industries = [
  { icon: '🚗', name: 'Auto Repair Shops' },
  { icon: '💆‍♀️', name: 'Med Spas' },
  { icon: '🦷', name: 'Dental Offices' },
  { icon: '🏠', name: 'Home Services' },
  { icon: '⚖️', name: 'Law Offices' },
  { icon: '🏢', name: 'Real Estate Teams' },
  { icon: '🚚', name: 'Logistics & Transport' },
  { icon: '🔨', name: 'Local Contractors' },
  { icon: '💪', name: 'Fitness & Wellness Studios' },
  { icon: '🧹', name: 'Cleaning Companies' },
];

export default function IndustriesSection() {
  return (
    <section className="bg-white py-20" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Built for service businesses where every call counts
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {industries.map((industry, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 bg-light text-primary rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{industry.icon}</div>
              <h3 className="text-lg font-semibold mb-1">{industry.name}</h3>
              <p className="text-sm text-gray-600">We help {industry.name.toLowerCase()} capture more customers and
                appointments.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}