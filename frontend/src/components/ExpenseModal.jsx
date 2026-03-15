import { useState, useEffect } from 'react'
import { X, Upload } from 'lucide-react'
import { motion } from 'framer-motion'
import { fetchCategories, createExpense } from '../services/api'

export default function ExpenseModal({ onClose, onSuccess }) {
  const [categories, setCategories] = useState([])
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [date, setDate] = useState(new Date().toISOString().split('T')[0])
  const [notes, setNotes] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchCategories().then(setCategories).catch(console.error)
  }, [])

  useEffect(() => {
    if (categories.length > 0 && !categoryId) {
      setCategoryId(categories[0].id)
    }
  }, [categories, categoryId])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!title || !amount || !categoryId) return alert("Please fill required fields.")

    setLoading(true)
    try {
      await createExpense({
        title,
        amount: parseFloat(amount),
        category: { id: parseInt(categoryId) },
        date,
        notes,
        receiptUrl: null
      })
      onSuccess()
      onClose()
      setTitle('')
      setAmount('')
    } catch (error) {
      alert("Failed to save expense.")
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8 relative border border-gray-100"
      >
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-primary transition-colors">
          <X size={20} />
        </button>

        <h2 className="text-xl font-bold text-primary mb-6">Add New Expense</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Title</label>
            <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="e.g. Subway Lunch" className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-[#F7F9FB] focus:outline-none focus:border-accent text-sm" required />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Amount ($)</label>
              <input value={amount} onChange={e => setAmount(e.target.value)} type="number" step="0.01" placeholder="0.00" className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-[#F7F9FB] focus:outline-none focus:border-accent text-sm" required />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Category</label>
              <select value={categoryId} onChange={e => setCategoryId(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-[#F7F9FB] focus:outline-none focus:border-accent text-sm text-gray-600">
                {categories.map(c => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Date</label>
            <input value={date} onChange={e => setDate(e.target.value)} type="date" className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-[#F7F9FB] focus:outline-none focus:border-accent text-sm text-gray-600" required />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Notes (Optional)</label>
            <textarea value={notes} onChange={e => setNotes(e.target.value)} placeholder="Add details..." rows="2" className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-[#F7F9FB] focus:outline-none focus:border-accent text-sm" />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Receipt Image</label>
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center bg-[#F7F9FB] hover:border-accent transition-colors cursor-pointer group">
              <Upload size={24} className="text-gray-400 group-hover:text-accent transition-colors" />
              <span className="text-xs text-gray-400 mt-2">Simulated Azure Blob Upload</span>
            </div>
          </div>

          <button type="submit" disabled={loading} className="w-full py-3.5 bg-accent text-white font-bold rounded-xl shadow-md shadow-accent/10 hover:shadow-lg transition-all mt-2 disabled:bg-gray-300">
            {loading ? 'Saving...' : 'Save Expense'}
          </button>
        </form>
      </motion.div>
    </div>
  )
}
