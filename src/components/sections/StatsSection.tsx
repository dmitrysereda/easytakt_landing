'use client';

const stats = [
  {
    value: '80%',
    label: 'time saved on administrative tasks',
    color: 'from-blue-500/20 to-blue-600/20'
  },
  {
    value: '90%',
    label: 'of users report improved scheduling flexibility',
    color: 'from-purple-500/20 to-purple-600/20'
  },
  {
    value: '50%',
    label: 'reduction in missed lessons',
    color: 'from-cyan-500/20 to-cyan-600/20'
  }
];

const StatsSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/80 to-white" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Numbers Don't Lie
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="relative text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Stat background with gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl -z-10`} />
              
              {/* Content */}
              <div className="mb-4 transition-transform duration-700 group-hover:scale-105">
                <span className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </span>
              </div>
              
              <p className="text-lg text-gray-600 max-w-xs mx-auto">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 