import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, Mail, Menu, X, Clock, AlertTriangle } from 'lucide-react'
import { BookingWidget, EstimateWidget, JobPortalWidget } from '../hooks/useWidgetfied'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

const CONTACT = {
  phone: '(720) 555-0147',
  phoneHref: 'tel:+17205550147',
  email: 'info@proflowmechanical.com',
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar — collapses on scroll */}
      <div className={`bg-accent-blue text-white transition-all duration-300 overflow-hidden ${
        isScrolled ? 'max-h-0 py-0' : 'max-h-20 py-2'
      }`}>
        <div className="container-custom flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 text-sm">
          <div className="flex items-center gap-4">
            <a href={CONTACT.phoneHref} className="flex items-center gap-2 hover:text-accent-orange transition-colors">
              <Phone size={12} />
              <span>{CONTACT.phone}</span>
            </a>
            <a href={`mailto:${CONTACT.email}`} className="hidden sm:flex items-center gap-2 hover:text-accent-orange transition-colors">
              <Mail size={12} />
              <span>{CONTACT.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-2 bg-accent-orange/20 px-3 py-1 rounded-full">
            <Clock size={12} className="text-accent-orange shrink-0" aria-hidden />
            <AlertTriangle size={12} className="text-accent-orange shrink-0" aria-hidden />
            <span className="font-semibold whitespace-nowrap">24/7 Emergency: <a href={CONTACT.phoneHref} className="hover:text-accent-orange transition-colors">{CONTACT.phone}</a></span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : 'shadow-sm'
      }`}>
        <div className="container-custom">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="flex flex-col">
                <span className="text-2xl font-display font-bold text-neutral-900">ProFlow Mechanical</span>
                <span className="text-xs uppercase tracking-[0.2em] text-accent-blue font-semibold">HVAC & Plumbing</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-medium transition-colors relative group ${
                    location.pathname === link.href
                      ? 'text-accent-blue'
                      : 'text-neutral-700 hover:text-accent-blue'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent-blue transition-all ${
                    location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              ))}
              <div className="flex items-start gap-3 ml-4">
                <div className="flex flex-col items-center">
                  <BookingWidget id="header-booking-widget" />
                </div>
                <div className="flex flex-col items-center">
                  <EstimateWidget id="header-estimate-widget" />
                  <p className="text-neutral-400 text-[10px] tracking-wider uppercase mt-1">Free Estimate</p>
                </div>
                <div className="flex flex-col items-center">
                  <JobPortalWidget id="header-portal-widget" />
                  <p className="text-neutral-400 text-[10px] tracking-wider uppercase mt-1">Appointment Lookup</p>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-neutral-700 hover:text-accent-blue transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ${
          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-white border-t`}>
          <div className="container-custom py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`block py-2 font-medium transition-colors ${
                  location.pathname === link.href
                    ? 'text-accent-blue'
                    : 'text-neutral-700 hover:text-accent-blue'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="space-y-4 mt-4 pt-4 border-t border-neutral-200">
              <BookingWidget id="header-mobile-booking-widget" className="w-full" />
              <div>
                <EstimateWidget id="header-mobile-estimate-widget" className="w-full" />
                <p className="text-neutral-400 text-xs mt-1 tracking-wider uppercase text-center">Free Estimate</p>
              </div>
              <div>
                <JobPortalWidget id="header-mobile-portal-widget" className="w-full" />
                <p className="text-neutral-400 text-xs mt-1 tracking-wider uppercase text-center">Appointment Lookup</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
