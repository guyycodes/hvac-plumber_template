import { Link } from 'react-router-dom'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Heart,
} from 'lucide-react'
import { BookingWidget } from '../hooks/useWidgetfied'

const CONTENT = {
  brand: {
    name: 'ProFlow Mechanical',
    tagline: 'HVAC & Plumbing',
    description:
      'Professional HVAC and plumbing services for residential and commercial clients across the Denver metro area. Colorado-licensed, insured, and ready to keep your systems running smoothly.',
  },
  quickLinks: [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
  services: [
    { name: 'AC Repair', href: '/services#ac-repair' },
    { name: 'Heating', href: '/services#heating' },
    { name: 'Plumbing', href: '/services#plumbing' },
    { name: 'Water Heaters', href: '/services#water-heaters' },
    { name: 'Drain Cleaning', href: '/services#drain-cleaning' },
    { name: 'Emergency Service', href: '/services#emergency' },
  ],
  social: [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com', color: 'hover:text-blue-500' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com', color: 'hover:text-pink-500' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com', color: 'hover:text-red-500' },
  ],
  contact: {
    phone: { label: 'Phone', value: '(720) 555-0147', href: 'tel:+17205550147' },
    email: {
      label: 'Email',
      value: 'info@proflowmechanical.com',
      href: 'mailto:info@proflowmechanical.com',
    },
    hours: {
      label: 'Hours',
      value: 'Mon–Fri: 7AM–6PM\nSat: 8AM–2PM',
    },
    address: {
      label: 'Address',
      value: '1847 Wazee St, Suite 200\nDenver, CO 80202',
    },
  },
  map: {
    title: 'Find Us',
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196281.12937236612!2d-104.99519962890626!3d39.764518900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b80aa231f17cf%3A0x118ef4f8278a36d6!2sDenver%2C%20CO!5e0!3m2!1sen!2sus!4v1702830000000!5m2!1sen!2sus',
    directionsUrl: 'https://maps.google.com/maps?q=1847+Wazee+Street+Suite+200+Denver+CO+80202',
    address: '1847 Wazee St, Suite 200, Denver, CO 80202',
    serviceCoverage: {
      title: 'Service Area',
      areas: ['Denver Metro', 'Aurora', 'Lakewood', 'Arvada', 'Highlands Ranch'],
    },
  },
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-neutral-900 text-white">
      {/* CTA Banner */}
      <div className="bg-accent-orange">
        <div className="container-custom py-4">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
            <span className="text-lg font-display font-semibold text-white">
              Need Service? Call Now
            </span>
            <a
              href={CONTENT.contact.phone.href}
              className="flex items-center gap-2 text-white font-bold text-xl hover:underline"
            >
              <Phone className="w-5 h-5" />
              {CONTENT.contact.phone.value}
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info + Map */}
          <div className="space-y-4">
            <div>
              <div className="flex flex-col">
                <span className="text-xl font-display font-bold text-white">
                  {CONTENT.brand.name}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-accent-blue font-semibold">
                  {CONTENT.brand.tagline}
                </span>
              </div>
              <p className="text-gray-400 text-sm mt-3">{CONTENT.brand.description}</p>
              <div className="flex gap-3 mt-4">
                {CONTENT.social.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`p-2 rounded-lg bg-gray-800 text-gray-400 transition-colors hover:bg-gray-700 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="mt-6">
              <h3 className="font-semibold text-sm mb-2">{CONTENT.map.title}</h3>
              <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_.75fr] gap-3">
                <div>
                  <div className="rounded-lg overflow-hidden shadow-lg bg-gray-800 border border-gray-700">
                    <iframe
                      src={CONTENT.map.embedUrl}
                      width="100%"
                      height="120"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="ProFlow Mechanical Location"
                      className="w-full"
                    ></iframe>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    <a
                      href={CONTENT.map.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent-blue transition-colors"
                    >
                      {CONTENT.map.address}
                    </a>
                  </p>
                </div>
                <div className="text-xs">
                  <p className="font-semibold text-gray-300 mb-1">
                    {CONTENT.map.serviceCoverage.title}
                  </p>
                  <div className="space-y-0.5">
                    {CONTENT.map.serviceCoverage.areas.map((area) => (
                      <div key={area} className="flex items-center gap-1">
                        <span className="text-accent-blue">✓</span>
                        <span className="text-gray-400">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {CONTENT.services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    onClick={scrollToTop}
                    className="text-gray-400 hover:text-accent-blue transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {CONTENT.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={scrollToTop}
                    className="text-gray-400 hover:text-accent-blue transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              {CONTENT.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={scrollToTop}
                    className="text-gray-400 hover:text-accent-blue transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <Phone className="w-4 h-4 text-accent-blue mt-0.5 shrink-0" />
                <div>
                  <p className="text-gray-400">{CONTENT.contact.phone.label}</p>
                  <a
                    href={CONTENT.contact.phone.href}
                    className="text-white hover:text-accent-blue transition-colors"
                  >
                    {CONTENT.contact.phone.value}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail className="w-4 h-4 text-accent-blue mt-0.5 shrink-0" />
                <div>
                  <p className="text-gray-400">{CONTENT.contact.email.label}</p>
                  <a
                    href={CONTENT.contact.email.href}
                    className="text-white hover:text-accent-blue transition-colors"
                  >
                    {CONTENT.contact.email.value}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Clock className="w-4 h-4 text-accent-blue mt-0.5 shrink-0" />
                <div>
                  <p className="text-gray-400">{CONTENT.contact.hours.label}</p>
                  <p className="text-white whitespace-pre-line">{CONTENT.contact.hours.value}</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-accent-blue mt-0.5 shrink-0" />
                <div>
                  <p className="text-gray-400">{CONTENT.contact.address.label}</p>
                  <p className="text-white whitespace-pre-line">{CONTENT.contact.address.value}</p>
                </div>
              </li>
            </ul>

            {/* Booking Widget */}
            <div className="mt-6">
              <BookingWidget id="footer-booking-widget" className="w-full" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} ProFlow Mechanical. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-accent-blue" /> by{' '}
              <span className="text-accent-blue">ProFlow Mechanical</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
