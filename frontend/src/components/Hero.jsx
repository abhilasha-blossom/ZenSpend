import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-[#F7F9FB]">
      <div className="absolute top-10 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold text-[#2E4057] leading-tight md:leading-snug tracking-tight"
        >
          Track your spending with <br />
          <span className="relative text-accent">
            clarity and calm
            <svg className="absolute w-full -bottom-2 left-0 h-2 text-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg text-gray-500 max-w-xl mx-auto leading-relaxed"
        >
          ZenSpend helps you master your finances with elegance. Upload receipts, view deep insights, and sync effortlessly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex items-center justify-center space-x-4"
        >
          <Link to="/register" className="px-8 py-4 bg-primary text-white font-semibold rounded-2xl shadow-xl shadow-primary/10 hover:shadow-2xl hover:-translate-y-0.5 transition-all flex items-center space-x-2">
            <span>Get Started</span>
            <ArrowRight size={18} />
          </Link>
          <button className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
            View Demo
          </button>
        </motion.div>
      </div>
    </section>
  )
}
