import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, PieChart, CreditCard, Settings, LogOut } from 'lucide-react'

const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  { name: 'Expenses', icon: CreditCard, path: '/dashboard/expenses' },
  { name: 'Analytics', icon: PieChart, path: '/dashboard/analytics' },
  { name: 'Settings', icon: Settings, path: '/dashboard/settings' },
]

export default function Sidebar() {
  const location = useLocation()
  const userName = localStorage.getItem('userName') || 'Alex Mercer'

  return (
    <aside className="w-64 h-screen bg-[#F7F9FB] border-r border-gray-100 flex flex-col p-6 fixed top-0 left-0">
      {/* Logo */}
      <div className="flex items-center space-x-2 pb-8 border-b border-gray-100">
        <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white font-bold">
          Ζ
        </div>
        <span className="font-semibold text-lg text-primary">ZenSpend</span>
      </div>

      {/* User Info */}
      <Link to="/dashboard/settings" className="flex items-center space-x-3 py-6 hover:bg-gray-50 rounded-xl p-2 transition-all cursor-pointer">
        <div className="w-10 h-10 rounded-full bg-gray-200"></div>
        <div>
          <h4 className="font-medium text-sm text-primary">{userName}</h4>
          <p className="text-xs text-gray-400">Zen User</p>
        </div>
      </Link>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center space-x-3 p-3 rounded-xl text-sm font-semibold transition-all ${
                isActive ? 'bg-white text-primary shadow-sm border border-gray-100/50' : 'text-gray-400 hover:text-primary hover:bg-gray-50'
              }`}
            >
              <item.icon size={18} className={isActive ? 'text-accent' : 'text-gray-400'} />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </nav>

      {/* Logout */}
      <Link to="/" className="flex items-center space-x-3 p-3 rounded-xl text-sm font-semibold text-red-500 hover:bg-red-50 transition-all mt-auto border border-transparent hover:border-red-100/50">
        <LogOut size={18} />
        <span>Logout</span>
      </Link>
    </aside>
  )
}
