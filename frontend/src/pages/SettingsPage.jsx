import { useState } from 'react'

export default function SettingsPage() {
  const [currency, setCurrency] = useState(localStorage.getItem('currencySymbol') || '$')

  const handleCurrencyChange = (e) => {
    const val = e.target.value
    setCurrency(val)
    localStorage.setItem('currencySymbol', val)
    // Dynamic refresh trigger can be handled via context callback
    window.location.reload() // Quick-fix to restart context read
  }

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 max-w-lg">
      <h2 className="text-xl font-bold text-primary mb-6">Preferences</h2>

      <div className="space-y-5">
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Base Currency Symbol
          </label>
          <select 
            value={currency} 
            onChange={handleCurrencyChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-[#F7F9FB] focus:outline-none focus:border-accent text-sm text-gray-600"
          >
            <option value="$">USD ($)</option>
            <option value="₹">INR (₹)</option>
            <option value="€">EUR (€)</option>
            <option value="£">GBP (£)</option>
          </select>
          <p className="text-xs text-gray-400 mt-2">This triggers automatic dashboard formatting synchronization.</p>
        </div>
      </div>
    </div>
  )
}
