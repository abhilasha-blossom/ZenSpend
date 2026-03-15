import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import DashboardPreview from '../components/DashboardPreview'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F7F9FB] font-sans">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <DashboardPreview />
      <Pricing />
      <Footer />
    </div>
  )
}
