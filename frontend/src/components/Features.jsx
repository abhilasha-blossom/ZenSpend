import { motion } from 'framer-motion'
import { TrendingUp, Camera, PieChart, Cloud } from 'lucide-react'

const features = [
  {
    title: 'Smart Expense Tracking',
    description: 'Log and categorize your logs instantly with intuitive forms and predictive tagging.',
    icon: TrendingUp,
    color: 'bg-primary/10 text-primary',
  },
  {
    title: 'Receipt Scan & Storage',
    description: 'Upload your receipts to Azure Blob Storage and bind them natively to your records.',
    icon: Camera,
    color: 'bg-accent/10 text-accent',
  },
  {
    title: 'Visual Analytics',
    description: 'Beautiful charts help you spot trends and improve spending habits with ease.',
    icon: PieChart,
    color: 'bg-highlight/10 text-yellow-800',
  },
  {
    title: 'Cloud Sync',
    description: 'Safe, secure, and always in sync with Azure Cloud architecture solutions.',
    icon: Cloud,
    color: 'bg-blue-500/10 text-blue-600',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Master your spending with ease
          </h2>
          <p className="mt-4 text-gray-500">
            A aesthetic dashboard backed by cloud storage allows you to manage expenditures fluidly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-[#F7F9FB] rounded-2xl hover:shadow-lg transition-all border border-gray-50 flex flex-col items-center text-center group"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${item.color} group-hover:scale-110 transition-transform`}>
                <item.icon size={24} />
              </div>
              <h3 className="font-semibold text-lg text-primary mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
