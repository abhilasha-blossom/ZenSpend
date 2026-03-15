import { useEffect, useState } from 'react'
import { fetchExpenses } from '../services/api'
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts'

export default function AnalyticsPage() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchExpenses().then((list) => {
      const trend = list.slice(0, 6).reverse().map(e => ({
        date: new Date(e.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        total: e.amount
      }))
      setData(trend)
    }).catch(console.error).finally(() => setLoading(false))
  }, [])

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
        <h2 className="text-xl font-bold text-primary mb-2">Spending Trends</h2>
        <p className="text-gray-400 text-sm mb-6">Detailed analytics overview of your budgets.</p>

        {loading ? (
          <p className="text-gray-400 text-sm">Loading analytics...</p>
        ) : (
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorTrendAlt" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7FB069" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#7FB069" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="date" stroke="#90A4AE" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="#90A4AE" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip />
                <Area type="monotone" dataKey="total" stroke="#7FB069" fillOpacity={1} fill="url(#colorTrendAlt)" strokeWidth={2.5} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  )
}
