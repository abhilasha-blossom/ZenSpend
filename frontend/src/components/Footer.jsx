import { Github, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#F7F9FB] border-t border-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <div className="w-6 h-6 rounded bg-accent flex items-center justify-center text-white font-bold text-sm">
            Z
          </div>
          <span className="font-semibold text-primary">ZenSpend</span>
        </div>

        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#" className="hover:text-primary transition-colors">About</a>
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms</a>
        </div>

        <div className="flex items-center space-x-1">
          <span>Made with</span>
          <Heart size={14} className="text-red-400 fill-current" />
          <span>via Azure Cloud</span>
          <a href="https://github.com" target="_blank" className="ml-2 text-gray-400 hover:text-primary transition-colors">
            <Github size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
