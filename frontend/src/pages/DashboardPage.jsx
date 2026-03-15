import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { motion, AnimatePresence } from 'framer-motion'
import { Outlet } from 'react-router-dom'
import ExpenseModal from '../components/ExpenseModal'

export default function DashboardPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [refreshTrigger, setRefreshTrigger] = useState(0)
  const userName = localStorage.getItem('userName') || 'Alex Mercer'

  return (
    <div className="min-h-screen bg-white flex">
      <Sidebar />
      <main className="ml-64 flex-1 p-8 bg-[#F7F9FB] min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <header className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold text-primary">Overview</h1>
              <p className="text-sm text-gray-400">Welcome back, {userName}. Here's your spending summary.</p>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-2.5 bg-accent text-white font-semibold rounded-xl shadow-md hover:bg-opacity-90 transition-all text-sm"
            >
              + Add Expense
            </button>
          </header>

          <section id="dashboard-content" className="space-y-6">
              {/* Render Sub-routes index inside main layout section */}
              <Outlet context={{ refreshTrigger }} />
          </section>
        </motion.div>
      </main>

      <AnimatePresence>
        {isModalOpen && (
          <ExpenseModal 
            onClose={() => setIsModalOpen(false)} 
            onSuccess={() => setRefreshTrigger(prev => prev + 1)} 
          />
        )}
      </AnimatePresence>
    </div>
  )
}
