import { motion } from 'framer-motion'
import { PieChart, DollarSign, ArrowUpRight } from 'lucide-react'

export default function DashboardPreview() {
  return (
    <section className="py-20 px-6 bg-[#F7F9FB] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm">Preview</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
            The Dashboard that brings calm
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl border border-gray-100 p-4 md:p-8 backdrop-blur-sm"
        >
          {/* Top Bar Mockup */}
          <div className="flex justify-between items-center pb-6 border-b border-gray-50 mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center font-bold">U</div>
              <div>
                <h4 className="font-semibold text-sm text-primary">Alex Mercer</h4>
                <p className="text-xs text-gray-400">Zen Tracker</p>
              </div>
            </div>
            <div className="px-3 py-1 bg-accent/10 rounded-full text-xs text-accent font-medium">Synced</div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-6 bg-[#F7F9FB] rounded-2xl border border-gray-50">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400 text-sm font-medium">Total Expenses</span>
                <DollarSign size={16} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary">$4,850.00</h3>
              <p className="text-xs text-green-600 mt-2 flex items-center">
                <ArrowUpRight size={12} /> +12% from last month
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 bg-[#F7F9FB] rounded-2xl border border-gray-50">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400 text-sm font-medium">Monthly Cap</span>
                <PieChart size={16} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-primary">$6,000.00</h3>
              <div className="w-full bg-gray-200 h-1.5 rounded-full mt-3">
                <div className="bg-accent h-1.5 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>

            {/* Chart/Visual Mock */}
            <div className="p-6 bg-white rounded-2xl border border-gray-100 col-span-1 md:col-span-1 text-center flex flex-col items-center justify-center">
              <div className="w-24 h-24 rounded-full border-8 border-accent border-r-primary flex items-center justify-center">
                <span className="text-sm font-bold text-primary">75%</span>
              </div>
              <p className="text-xs text-gray-500 mt-3 font-medium">Food & Dining</p>
            </div>
          </div>

          {/* Table Mockup */}
          <div className="mt-8">
            <h4 className="font-semibold text-primary mb-4 text-sm">Recent Transactions</h4>
            <div className="divide-y divide-gray-50 border-t border-gray-50">
              {[
                { title: 'Subway Sandwich', cat: 'Food', price: '$12.50', date: 'Today' },
                { title: 'Uber Ride', cat: 'Travel', price: '$24.00', date: 'Yesterday' },
                { title: 'AWS Cloud Bill', cat: 'SaaS', price: '$143.20', date: '14 Mar' },
              ].map((tx, idx) => (
                <div key={idx} className="flex justify-between items-center py-3 text-sm">
                  <div>
                    <span className="font-medium text-primary">{tx.title}</span>
                    <span className="ml-2 px-2 py-0.5 bg-gray-100 text-gray-500 rounded-md text-xs">{tx.cat}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-semibold text-primary">{tx.price}</span>
                    <span className="block text-xs text-gray-400">{tx.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
