import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white font-bold text-lg group-hover:scale-105 transition-transform">
            Ζ
          </div>
          <span className="font-semibold text-xl tracking-wide text-primary">ZenSpend</span>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
          <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
        </div>

        {/* CTA */}
        <div className="flex items-center space-x-4">
          <Link to="/login" className="text-sm font-medium text-gray-600 hover:text-primary">Login</Link>
          <Link to="/register" className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-xl shadow-sm hover:bg-opacity-90 transition-all">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  )
}
