import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    // Simulated login success - extract name from email
    const nameFromEmail = email.split('@')[0]
    const formattedName = nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1)
    localStorage.setItem('userName', formattedName)
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-[#F7F9FB] flex items-center justify-center p-6">
      <Link to="/" className="absolute top-8 left-8 flex items-center space-x-2 text-gray-500 hover:text-primary transition-colors text-sm font-semibold">
        <ArrowLeft size={16} />
        <span>Back to Home</span>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full border border-gray-100/50"
      >
        <div className="text-center mb-8">
          <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
            Z
          </div>
          <h2 className="text-2xl font-bold text-primary">Welcome Back</h2>
          <p className="text-gray-400 text-sm mt-1">Sign in to continue your zen journey.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Email</label>
            <input 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              type="email" 
              placeholder="alex@example.com" 
              className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-[#F7F9FB] focus:outline-none focus:border-accent text-sm" 
              required 
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Password</label>
            <input 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              type="password" 
              placeholder="••••••••" 
              className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-[#F7F9FB] focus:outline-none focus:border-accent text-sm" 
              required 
            />
          </div>

          <button type="submit" className="w-full py-3.5 bg-primary text-white font-bold rounded-xl shadow-md hover:bg-opacity-95 transition-all mt-4">
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-6">
          Don't have an account?{' '}
          <Link to="/register" className="text-accent font-semibold hover:underline">
            Register
          </Link>
        </p>
      </motion.div>
    </div>
  )
}
