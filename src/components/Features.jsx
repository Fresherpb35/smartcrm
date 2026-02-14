// Features.jsx
import FeatureCard from './FeatureCard'

const features = [
  {
    title: 'AI Business Assistant',
    desc: 'Get intelligent insights, recommendations and automation powered by AI',
    icon: '🤖',
  },
  {
    title: 'Advanced Analytics',
    desc: 'Real-time dashboards, predictive insights and actionable business intelligence',
    icon: '📊',
  },
  {
    title: 'Role-Based Access',
    desc: 'Secure, customizable permissions and role-specific dashboards',
    icon: '🔐',
  },
  {
    title: 'Enterprise Security',
    desc: 'Bank-grade protection with JWT authentication, encryption & audit logs',
    icon: '🛡️',
  },
  {
    title: 'Offline Support',
    desc: 'Full functionality even without internet connection – syncs when back online',
    icon: '📴',
  },
  {
    title: 'Lightning Fast',
    desc: 'Optimized performance with near-instant page loads and smooth transitions',
    icon: '⚡',
  },
]

const Features = () => {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Powerful Features for Modern Business
          </h2>
          <p className="mt-5 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to run your business efficiently — all in one comprehensive platform.
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.desc}   // using more semantic prop name
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features