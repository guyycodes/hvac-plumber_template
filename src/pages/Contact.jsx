import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Phone, Mail, MapPin, Clock,
  Send, ArrowRight, CheckCircle,
  Facebook, Instagram, Youtube
} from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { JobPortalWidget, EstimateWidget } from '../hooks/useWidgetfied'

const CONTACT_INFO = [
  {
    icon: Phone,
    title: 'Phone',
    details: '(555) 987-6543',
    link: 'tel:+15559876543',
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'info@proflowmechanical.com',
    link: 'mailto:info@proflowmechanical.com',
  },
  {
    icon: MapPin,
    title: 'Location',
    details: '456 Trade Boulevard\nSuite 100, Your City, ST 00000',
    link: null,
  },
  {
    icon: Clock,
    title: 'Hours',
    details: 'Mon–Fri: 7AM–6PM\nSat: 8AM–2PM\nSun: Closed',
    link: null,
  },
]

const SOCIAL_LINKS = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    preferredDate: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const heroObserver = useIntersectionObserver({ threshold: 0.1 })
  const formObserver = useIntersectionObserver({ threshold: 0.1 })
  const mapObserver = useIntersectionObserver({ threshold: 0.1 })
  const ctaObserver = useIntersectionObserver({ threshold: 0.1 })

  const handleSubmit = (e) => {
    e.preventDefault()
    // PLACEHOLDER: Connect to your form handler (EmailJS, Netlify Forms, etc.)
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
  }

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(30deg, #1E40AF 12%, transparent 12.5%, transparent 87%, #1E40AF 87.5%, #1E40AF),
            linear-gradient(150deg, #1E40AF 12%, transparent 12.5%, transparent 87%, #1E40AF 87.5%, #1E40AF)`,
            backgroundSize: '80px 140px',
          }}></div>
        </div>
        <div
          ref={heroObserver.ref}
          className={`relative z-10 container-custom text-center animate-fade-up ${heroObserver.isVisible ? 'visible' : ''}`}
        >
          <span className="inline-block text-blue-300 text-sm tracking-[0.3em] uppercase font-light mb-6">
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light text-white mb-6">
            Schedule Your <span className="text-accent-orange">Service</span>
          </h1>
          <div className="h-px w-24 bg-accent-blue mx-auto my-8"></div>
          <p className="text-xl text-neutral-400 font-light max-w-2xl mx-auto">
            Need a repair, installation, or routine maintenance? Get in touch and we'll get you on the schedule.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div
            ref={formObserver.ref}
            className={`grid lg:grid-cols-5 gap-16 animate-fade-up ${formObserver.isVisible ? 'visible' : ''}`}
          >
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-display font-light text-neutral-900 mb-2">
                Request a Service Call
              </h2>
              <div className="h-px w-16 bg-accent-blue mb-8"></div>

              {isSubmitted ? (
                <div className="p-12 bg-neutral-50 border border-accent-blue/20 text-center">
                  <CheckCircle className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                  <h3 className="text-2xl font-display font-light mb-2">Thank You!</h3>
                  <p className="text-neutral-600 font-light">
                    We've received your request and will confirm your service call within 24 hours.
                  </p>
                  <button
                    onClick={() => { setIsSubmitted(false); setFormData({ name: '', email: '', phone: '', service: '', preferredDate: '', message: '' }) }}
                    className="mt-6 text-accent-blue text-sm uppercase tracking-wider hover:text-neutral-900 transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm uppercase tracking-wider text-neutral-700 mb-2 font-light">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm uppercase tracking-wider text-neutral-700 mb-2 font-light">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm uppercase tracking-wider text-neutral-700 mb-2 font-light">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="(555) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm uppercase tracking-wider text-neutral-700 mb-2 font-light">
                        Service Needed
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="input-field"
                      >
                        <option value="">Select a service</option>
                        <option value="ac-repair">AC Repair</option>
                        <option value="heating">Heating</option>
                        <option value="plumbing">Plumbing</option>
                        <option value="water-heater">Water Heater</option>
                        <option value="drain-cleaning">Drain Cleaning</option>
                        <option value="emergency">Emergency</option>
                        <option value="unsure">Not sure</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm uppercase tracking-wider text-neutral-700 mb-2 font-light">
                      Preferred Date &amp; Time
                    </label>
                    <input
                      type="text"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="e.g., Next Tuesday morning"
                    />
                  </div>

                  <div>
                    <label className="block text-sm uppercase tracking-wider text-neutral-700 mb-2 font-light">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="input-field resize-none"
                      placeholder="Describe the issue or service you need..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="group relative px-10 py-4 bg-accent-blue text-white font-medium tracking-wider uppercase text-sm overflow-hidden transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Request
                    </span>
                    <div className="absolute inset-0 bg-neutral-900 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Details */}
              <div className="border border-neutral-200 p-8">
                <h3 className="text-2xl font-display font-light text-neutral-900 mb-2">Contact Details</h3>
                <div className="h-px w-16 bg-accent-blue mb-6"></div>
                <div className="space-y-6">
                  {CONTACT_INFO.map((info, index) => {
                    const Icon = info.icon
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-10 h-10 border border-neutral-300 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-accent-blue" />
                        </div>
                        <div>
                          <h4 className="text-sm uppercase tracking-wider text-neutral-700 mb-1 font-light">{info.title}</h4>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-neutral-600 hover:text-accent-blue transition-colors whitespace-pre-line font-light"
                            >
                              {info.details}
                            </a>
                          ) : (
                            <p className="text-neutral-600 whitespace-pre-line font-light">{info.details}</p>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div className="border border-neutral-200 p-8">
                <h3 className="text-2xl font-display font-light text-neutral-900 mb-2">Connect</h3>
                <div className="h-px w-16 bg-accent-blue mb-6"></div>
                <p className="text-neutral-600 mb-6 font-light">
                  Follow us for tips, seasonal offers, and service updates
                </p>
                <div className="flex gap-3">
                  {SOCIAL_LINKS.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="w-12 h-12 border border-neutral-300 rounded-full flex items-center justify-center hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-all duration-300"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* Service Guarantee */}
              <div className="bg-black text-white p-8">
                <h4 className="text-lg font-medium mb-3 tracking-wide">Our Guarantee</h4>
                <p className="text-neutral-300 font-light text-sm leading-relaxed">
                  100% satisfaction guaranteed. Upfront pricing, no hidden fees.
                  All work warranted. If it's not right, we'll make it right — period.
                </p>
              </div>

              {/* Portal Widget */}
              <div className="border border-accent-blue/30 p-8 text-center">
                <h4 className="text-lg font-medium mb-3 tracking-wide">Client Portal</h4>
                <p className="text-neutral-500 font-light text-sm mb-4">
                  Access your appointments, history, and account details.
                </p>
                <JobPortalWidget
                  id="contact-portal-widget"
                  displayMode="button"
                  className="w-full"
                />
                <p className="text-neutral-400 text-xs mt-2 tracking-wider uppercase">Appointment Lookup</p>
              </div>

              {/* Estimate Widget */}
              <div className="border border-neutral-200 p-8 text-center">
                <h4 className="text-lg font-medium mb-3 tracking-wide">Free Estimate</h4>
                <p className="text-neutral-500 font-light text-sm mb-4">
                  Get a no-obligation quote for your project.
                </p>
                <EstimateWidget
                  id="contact-estimate-widget"
                  displayMode="button"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative">
        <div
          ref={mapObserver.ref}
          className={`animate-fade-in ${mapObserver.isVisible ? 'visible' : ''}`}
        >
          <div className="h-[400px] bg-neutral-900 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d-122.4194154846816!3d37.77492927975945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064e2b9c7cd%3A0x79144f7b2ece5b88!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1702830000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ProFlow Mechanical Location"
              className="w-full h-full"
            ></iframe>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
              <div className="container-custom flex items-center justify-between">
                <div className="text-white">
                  <h3 className="text-xl font-display font-light mb-1">Visit Our Shop</h3>
                  <p className="text-neutral-300 text-sm font-light">456 Trade Boulevard, Suite 100, Your City</p>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-2 text-accent-orange text-sm uppercase tracking-wider hover:text-white transition-colors"
                >
                  Get Directions <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-neutral-900 to-black">
        <div
          ref={ctaObserver.ref}
          className={`container-custom text-center animate-fade-up ${ctaObserver.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl font-display font-light text-white mb-6">
            Your Comfort Is Our Business
          </h2>
          <div className="h-px w-32 bg-accent-blue mx-auto my-8"></div>
          <p className="text-xl text-neutral-300 font-light mb-10 max-w-2xl mx-auto">
            Fast, reliable HVAC and plumbing service from a team you can trust.
          </p>
          <a
            href="tel:+15559876543"
            className="inline-flex items-center gap-3 text-accent-orange font-medium tracking-wider uppercase text-sm hover:text-white transition-colors"
          >
            Call Direct: (555) 987-6543
          </a>
        </div>
      </section>
    </>
  )
}
