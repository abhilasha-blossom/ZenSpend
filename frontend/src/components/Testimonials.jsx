import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Sarah Jenkins',
    role: 'Financial Analyst',
    quote: 'ZenSpend transformed my approach to expense tracking. The minimal design keeps me focused and calm.',
    rating: 5
  },
  {
    name: 'David Lee',
    role: 'Freelance Developer',
    quote: 'The Azure backup gives me absolute peace of mind for my receipts. Seamless interface execution.',
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-[#F7F9FB] px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">Loved by simplify-driven planners</h2>
        <p className="text-gray-400 mt-2">Hear from others who found their financial calm.</p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {reviews.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col text-left"
            >
              <div className="flex space-x-1 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">"{item.quote}"</p>
              <div className="mt-6">
                <h4 className="font-bold text-sm text-primary">{item.name}</h4>
                <p className="text-xs text-gray-400">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
