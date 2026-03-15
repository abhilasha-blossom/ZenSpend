import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { DollarSign, CreditCard, Calendar, ArrowUpRight, TrendingDown } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { fetchExpenses, fetchAnalyticsCategory, fetchAnalyticsTotal } from '../services/api'

const COLORS = ['#2E4057', '#7FB069', '#F2C94C', '#A0B4C8', '#EF4444', '#3B82F6'];

export default function DashboardContent({ refreshTrigger }) {
  const [expenses, setExpenses] = useState([])
  const [totalSpent, setTotalSpent] = useState(0)
  const [categoryBreakdown, setCategoryBreakdown] = useState([])
  const [loading, setLoading] = useState(true)
  const currency = localStorage.getItem('currencySymbol') || '$'

  useEffect(() => {
    const loadData = async () => {
      try {
        const [expList, total, breakdown] = await Promise.all([
          fetchExpenses(),
          fetchAnalyticsTotal(),
          fetchAnalyticsCategory()
        ])
        setExpenses(expList)
        setTotalSpent(total || 0)

        // Format breakdown for PieChart
        const formattedBreakdown = Object.entries(breakdown).map(([name, value], index) => ({
          name,
          value,
          color: COLORS[index % COLORS.length]
        }))
        setCategoryBreakdown(formattedBreakdown)

      } catch (error) {
        console.error("Failed to load dashboard data:", error)
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [refreshTrigger])

  const trendData = expenses.slice(0, 6).reverse().map(e => ({
    name: new Date(e.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    amount: e.amount
  }))

  if (loading) {
    return <div className="p-8 text-center text-gray-400">Loading Dashboard Metrics...</div>
  }

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div whileHover={{ y: -4 }} className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Total Expenses</span>
            <h3 className="text-2xl font-bold text-primary mt-1">{currency}{Number(totalSpent).toFixed(2)}</h3>
            <p className="text-xs text-green-600 mt-1 flex items-center"><ArrowUpRight size={12} /> Live Sync</p>
          </div>
          <div className="p-3 bg-primary/5 rounded-xl text-primary"><DollarSign size={24} /></div>
        </motion.div>

        <motion.div whileHover={{ y: -4 }} className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Transactions</span>
            <h3 className="text-2xl font-bold text-primary mt-1">{expenses.length}</h3>
            <p className="text-xs text-gray-500 mt-1">Total entries</p>
          </div>
          <div className="p-3 bg-highlight/10 rounded-xl text-yellow-700"><Calendar size={24} /></div>
        </motion.div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm lg:col-span-2">
          <h4 className="font-bold text-primary mb-6">Spending Trend</h4>
          {trendData.length > 0 ? (
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trendData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#7FB069" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#7FB069" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" stroke="#A0B4C8" fontSize={11} />
                  <YAxis stroke="#A0B4C8" fontSize={11} />
                  <Tooltip />
                  <Area type="monotone" dataKey="amount" stroke="#7FB069" strokeWidth={2} fillOpacity={1} fill="url(#colorAmount)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          ) : <p className="text-center text-gray-400 py-20 text-sm">No trend data available yet.</p>}
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center">
          <h4 className="font-bold text-primary mb-6 self-start">By Category</h4>
          {categoryBreakdown.length > 0 ? (
            <>
              <div className="h-48 w-48 relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={categoryBreakdown} innerRadius={50} outerRadius={70} paddingAngle={5} dataKey="value">
                      {categoryBreakdown.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-4 text-xs w-full">
                 {categoryBreakdown.map((item) => (
                   <div key={item.name} className="flex items-center space-x-2">
                       <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                       <span className="text-gray-600 font-medium">{item.name}</span>
                   </div>
                 ))}
              </div>
            </>
          ) : <div className="py-20 text-gray-400 text-sm">No categories tracked.</div>}
        </div>
      </div>

      {/* Recent Expenses Table */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <h4 className="font-bold text-primary mb-4">Recent Expenses</h4>
        <div className="overflow-x-auto">
          {expenses.length > 0 ? (
            <table className="w-full text-left text-sm text-gray-500">
              <thead className="text-xs text-gray-400 uppercase bg-[#F7F9FB] rounded-lg">
                <tr><th>Title</th><th>Category</th><th>Date</th><th>Amount</th></tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {expenses.map((tx) => (
                  <tr key={tx.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-primary">{tx.title}</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-0.5 rounded-md text-xs font-semibold bg-primary/10 text-primary">
                        {tx.category.name}
                      </span>
                    </td>
                    <td className="px-6 py-4">{new Date(tx.date).toLocaleDateString()}</td>
                    <td className="px-6 py-4 font-bold text-primary">{currency}{tx.amount.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : <p className="text-center text-gray-400 py-8 text-sm">No expenses recorded yet.</p>}
        </div>
      </div>
    </div>
  )
}
