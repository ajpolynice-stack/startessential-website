"use client";

export default function StatsSection() {
  const stats = [
    {
      value: '62%',
      description: 'of calls to small businesses go unanswered',
    },
    {
      value: '97%',
      description: 'of consumers read reviews when browsing businesses',
    },
    {
      value: '41%',
      description: 'always read reviews before making a decision',
    },
  ];
  return (
    <section className="bg-primary text-white py-20" id="stats">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">Don’t let the numbers work against you</h2>
        <div className="grid gap-8 sm:grid-cols-3">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <p className="text-5xl font-extrabold text-accent mb-3">{stat.value}</p>
              <p className="text-lg text-gray-200 max-w-xs leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}