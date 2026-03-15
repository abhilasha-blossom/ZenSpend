import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'

const tiers = [
  {
    name: 'Free Starter',
    price: '$0',
    description: 'Perfect for tracking personal spending habits.',
    features: ['Up to 50 logs/month', 'Basic Analytics', 'Standard Support', '1 Device Sync'],
    cta: 'Get Started',
    mostPopular: false,
  },
  {
    name: 'Zen Pro',
    price: '$9',
    description: 'Deconstruct lists and unify items beautifully.',
    features: ['Unlimited logs', 'Advanced Visual Analytics', 'Receipt Matching (Azure Sync)', 'Multi-device sync', 'Priority Support'],
    cta: 'Go Pro',
    mostPopular: true,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Simple pricing for clarity</h2>
          <p className="text-gray-500 mt-2">No hidden fees. Premium dashboard experiences.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-8 rounded-2xl border ${
                tier.mostPopular ? 'border-accent shadow-xl border-2' : 'border-gray-100 shadow-sm'
              } flex flex-col relative`}
            >
              {tier.mostPopular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs px-3 py-1 rounded-full font-bold">
                  Recommended
                </span>
              )}
              <h3 className="text-xl font-bold text-primary">{tier.name}</h3>
              <p className="text-sm text-gray-400 mt-1">{tier.description}</p>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-extrabold text-primary">{tier.price}</span>
                <span className="text-gray-400 text-sm">/mo</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-500 space-x-2">
                    <Check size={16} className="text-accent" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link to="/dashboard" className={`w-full py-3 rounded-xl font-semibold text-sm text-center transition-all ${
                tier.mostPopular ? 'bg-accent text-white hover:bg-opacity-90' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}>
                {tier.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
