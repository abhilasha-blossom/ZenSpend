import { useEffect, useState } from 'react'
import { fetchExpenses } from '../services/api'

export default function ExpensesPage() {
  const [expenses, setExpenses] = useState([])
  const [loading, setLoading] = useState(true)
  const currency = localStorage.getItem('currencySymbol') || '$'

  useEffect(() => {
    fetchExpenses().then(setExpenses).catch(console.error).finally(() => setLoading(false))
  }, [])

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
      <h2 className="text-xl font-bold text-primary mb-6">All Expenses</h2>

      {loading ? (
        <p className="text-gray-400 text-sm">Loading expenses...</p>
      ) : expenses.length === 0 ? (
        <p className="text-gray-400 text-sm">No expenses recorded yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-100 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                <th className="pb-4">Title</th>
                <th className="pb-4">Category</th>
                <th className="pb-4">Amount</th>
                <th className="pb-4">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-sm text-gray-600">
              {expenses.map((e) => (
                <tr key={e.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 font-medium text-primary">{e.title}</td>
                  <td className="py-4">
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-primary/5 text-primary">
                      {e.category?.name || 'General'}
                    </span>
                  </td>
                  <td className="py-4 font-bold text-primary">
                    {currency}{e.amount.toFixed(2)}
                  </td>
                  <td className="py-4 text-gray-400">{new Date(e.date).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
