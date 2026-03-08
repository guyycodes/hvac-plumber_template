import { Link } from 'react-router-dom'
import {
  Snowflake, Flame, Wrench, Droplets, Filter, AlertTriangle,
  Shield, Clock, Award, DollarSign,
  ArrowRight, Star, Phone, ChevronDown, Heart, Users,
  Zap, CheckCircle
} from 'lucide-react'
import { useIntersectionObserver, useStaggeredIntersection } from '../hooks/useIntersectionObserver'
import { BookingWidget, EstimateWidget, JobPortalWidget } from '../hooks/useWidgetfied'
import SocialProof from '../components/SocialProof'

const SERVICES = [
  {
    icon: Snowflake,
    title: 'AC Repair & Installation',
    type: 'Cooling Systems',
    description: 'Expert air conditioning repair, maintenance, and new system installation to keep your home cool and comfortable year-round.',
    price: 'From $89',
    priceNote: 'diagnostic',
  },
  {
    icon: Flame,
    title: 'Heating Systems',
    type: 'Furnace & Heat Pump',
    description: 'Furnace repair, heat pump service, and full heating system installation — reliable warmth when you need it most.',
    price: 'From $99',
  },
  {
    icon: Wrench,
    title: 'Plumbing Services',
    type: 'Residential & Commercial',
    description: 'Comprehensive plumbing repair, fixture installation, and pipe work backed by decades of hands-on experience.',
    price: 'From $79',
  },
  {
    icon: Droplets,
    title: 'Water Heaters',
    type: 'Tank & Tankless',
    description: 'Water heater repair, replacement, and tankless upgrades for endless hot water and improved energy efficiency.',
    price: 'From $149',
  },
  {
    icon: Filter,
    title: 'Drain Cleaning',
    type: 'Clog Removal',
    description: 'Professional drain cleaning and hydro-jetting to clear stubborn clogs and restore full flow to your plumbing system.',
    price: 'From $99',
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Service',
    type: 'Available 24/7',
    description: 'Around-the-clock emergency HVAC and plumbing service. When disaster strikes, our team is ready to respond fast.',
    price: 'Available 24/7',
  },
]

const STATS = [
  { value: '5,000+', label: 'Jobs Completed' },
  { value: '15+', label: 'Years Experience' },
  { value: '98%', label: 'Satisfaction' },
  { value: '24/7', label: 'Emergency' },
]

const NOTABLE_CLIENTS = [
  'Hilton Hotels',
  'Marriott Properties',
  'RE/MAX Realty',
  'Whole Foods Market',
  'Planet Fitness',
  'Chick-fil-A',
  'Wells Fargo',
  'CVS Health',
  'PetSmart',
  'AutoZone',
]

const WHY_CHOOSE = [
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully licensed, bonded, and insured technicians you can trust in your home or business.',
  },
  {
    icon: DollarSign,
    title: 'Upfront Pricing',
    description: 'Transparent, flat-rate pricing with no hidden fees — you approve the cost before any work begins.',
  },
  {
    icon: Clock,
    title: 'Same-Day Service',
    description: 'Fast response times with same-day appointments available for most HVAC and plumbing needs.',
  },
  {
    icon: Award,
    title: 'Satisfaction Guaranteed',
    description: 'Every job backed by our satisfaction guarantee. If it\'s not right, we\'ll make it right — period.',
  },
]

export default function Home() {
  const heroObserver = useIntersectionObserver({ threshold: 0.05 })
  const servicesObserver = useIntersectionObserver({ threshold: 0.1 })
  const whyObserver = useIntersectionObserver({ threshold: 0.1 })
  const aboutObserver = useIntersectionObserver({ threshold: 0.1 })
  const ctaObserver = useIntersectionObserver({ threshold: 0.1 })
  const { visibleItems: serviceVisible, setItemRef: setServiceRef } = useStaggeredIntersection(SERVICES.length)
  const { visibleItems: whyVisible, setItemRef: setWhyRef } = useStaggeredIntersection(WHY_CHOOSE.length)

  return (
    <>
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-screen bg-black overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=2000&q=80')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
        </div>

        <div
          ref={heroObserver.ref}
          className={`relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4 animate-fade-up ${heroObserver.isVisible ? 'visible' : ''}`}
        >
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-blue-300/90 text-sm tracking-[0.3em] uppercase font-light mb-6">
              Licensed HVAC &amp; Plumbing Professionals
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-8xl font-display font-light text-white mb-2 leading-[1.1]">
              ProFlow
              <span className="block font-normal bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400 bg-clip-text text-transparent">
                Mechanical
              </span>
            </h1>

            <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto my-8"></div>

            <p className="text-xl md:text-2xl text-white/80 font-light mb-3 tracking-wide">
              Your Comfort, Our Priority
            </p>
            <p className="text-base md:text-lg text-white/50 font-light leading-relaxed max-w-2xl mx-auto mb-10">
              Denver's trusted heating, cooling, and plumbing solutions for homes and businesses.
              Reliable service from Colorado-licensed professionals who stand behind every job.
            </p>

            <div className="flex flex-col items-center gap-6 mb-14">
              <div className="flex flex-row gap-4 justify-center">
                <BookingWidget id="hero-booking-widget" />
                <EstimateWidget id="hero-estimate-widget" />
              </div>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/25 rounded-full text-white/60 text-sm uppercase tracking-[0.2em] hover:text-white hover:border-white/50 transition-all group"
              >
                View Our Services
                <ArrowRight className="w-4 h-4 animate-nudge-x" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-3xl mx-auto">
              {STATS.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-light text-orange-400 mb-1">{stat.value}</div>
                  <div className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-white/40">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/40 animate-bounce">
            <span className="text-[10px] uppercase tracking-[0.2em] mb-2">Discover</span>
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>

      </section>

      {/* ==================== MARQUEE (scrolls with page) ==================== */}
      <div className="bg-black border-b border-white/5 py-4">
        <p className="text-center text-[10px] uppercase tracking-[0.25em] text-white/30 mb-3">
          Trusted by industry leaders
        </p>
        <div className="overflow-hidden">
          <div className="marquee-track">
            {[...NOTABLE_CLIENTS, ...NOTABLE_CLIENTS].map((client, i) => (
              <span
                key={i}
                className="flex-shrink-0 px-8 md:px-12 text-sm md:text-base font-light tracking-widest text-white/25 uppercase whitespace-nowrap"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ==================== PROMO BANNER ==================== */}
      <section className="relative overflow-hidden bg-gradient-to-r from-accent-orange to-orange-600">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)' }} />
        </div>
        <div className="relative container-custom py-5">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-white text-center">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              <span className="font-display font-semibold text-lg tracking-wide">Spring Special</span>
            </div>
            <span className="font-light text-white/90">$50 Off Any Service Over $200 — Book by March 31st</span>
            <BookingWidget id="promo-booking-widget" />
          </div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE SECTION ==================== */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div
            ref={whyObserver.ref}
            className={`text-center mb-10 animate-fade-up ${whyObserver.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-900 mb-4">
              Why Choose ProFlow
            </h2>
            <div className="h-px w-32 bg-blue-700 mx-auto my-6"></div>
            <p className="text-xl text-neutral-600 font-light max-w-2xl mx-auto">
              Professional service you can count on, every time
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_CHOOSE.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  ref={(el) => setWhyRef(index, el)}
                  data-item-id={index}
                  className={`text-center p-8 group animate-fade-up ${whyVisible[index] ? 'visible' : ''}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-20 h-20 mx-auto mb-6 border border-neutral-200 rounded-full flex items-center justify-center group-hover:border-blue-700 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-neutral-400 group-hover:text-blue-700 transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-medium mb-3 tracking-wide">{item.title}</h3>
                  <p className="text-neutral-500 font-light leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>

          {/* Trust Credentials */}
          <div className="mt-12 bg-neutral-900 rounded-lg py-6 px-4 md:px-8">
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 md:gap-x-12">
              {[
                'BBB A+ Rated',
                'Angi Super Service',
                'Google Guaranteed',
                'HomeAdvisor Top Rated',
                'EPA Certified',
              ].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent-blue shrink-0" />
                  <span className="text-sm text-white/80 font-medium whitespace-nowrap">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SOCIAL PROOF ==================== */}
      <SocialProof />

      {/* ==================== SERVICES SECTION ==================== */}
      <section className="py-32 bg-neutral-50">
        <div className="container-custom">
          <div
            ref={servicesObserver.ref}
            className={`text-center mb-20 animate-fade-up ${servicesObserver.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-900 mb-4">
              Our Services
            </h2>
            <div className="h-px w-32 bg-blue-700 mx-auto my-8"></div>
            <p className="text-xl text-neutral-600 font-light max-w-2xl mx-auto">
              Complete HVAC and plumbing solutions for your home or business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  ref={(el) => setServiceRef(index, el)}
                  data-item-id={index}
                  className={`group bg-white p-8 border border-neutral-200 hover:border-blue-700/30 transition-all duration-300 hover:shadow-lg animate-fade-up ${serviceVisible[index] ? 'visible' : ''}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 border border-neutral-200 rounded-full flex items-center justify-center group-hover:border-blue-700 group-hover:bg-blue-700/5 transition-all duration-300">
                      <Icon className="w-5 h-5 text-neutral-400 group-hover:text-blue-700 transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium tracking-wide">{service.title}</h3>
                      <span className="text-xs text-neutral-400 uppercase tracking-wider">{service.type}</span>
                    </div>
                  </div>
                  <p className="text-neutral-500 font-light leading-relaxed mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-700 font-medium">
                      {service.price}
                      {service.priceNote && (
                        <span className="text-neutral-400 text-xs ml-1">({service.priceNote})</span>
                      )}
                    </span>
                    <BookingWidget id={`home-service-${index}-booking-widget`} />
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/services"
              className="inline-flex items-center gap-3 text-neutral-900 font-medium tracking-wider uppercase text-sm hover:text-blue-700 transition-colors group"
            >
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT / STORY SECTION ==================== */}
      <section className="py-32 bg-neutral-900 text-white">
        <div className="container-custom">
          <div
            ref={aboutObserver.ref}
            className={`grid lg:grid-cols-2 gap-16 items-center animate-fade-up ${aboutObserver.isVisible ? 'visible' : ''}`}
          >
            <div className="relative h-[600px] order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80"
                alt="ProFlow Mechanical service technician at work"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/60 to-transparent"></div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-display font-light mb-8">
                Built on Trust &amp; Quality
              </h2>
              <div className="h-px w-24 bg-orange-500 mb-8"></div>
              <p className="text-xl text-neutral-300 font-light mb-12 leading-relaxed">
                For over 15 years, ProFlow Mechanical has been the name Denver homeowners and businesses
                trust for heating, cooling, and plumbing. From LoDo to Lakewood, we treat every job
                like it&#39;s in our own home — because your comfort and safety are never negotiable.
              </p>

              <div className="space-y-6 mb-12">
                {[
                  'Licensed, bonded & fully insured',
                  '15+ years of industry experience',
                  'Upfront pricing — no surprises, ever',
                  'Background-checked & drug-tested technicians',
                  '24/7 emergency service available',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-px h-4 bg-orange-500"></div>
                    <span className="text-neutral-300 font-light">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-3 text-orange-400 font-medium tracking-wider uppercase text-sm hover:text-white transition-colors group"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="py-32 bg-gradient-to-b from-neutral-900 to-black text-white">
        <div className="container-custom">
          <div
            ref={ctaObserver.ref}
            className={`text-center animate-fade-up ${ctaObserver.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-display font-light mb-8">
              Ready for Reliable Service?
            </h2>
            <div className="h-px w-32 bg-blue-500 mx-auto my-8"></div>
            <p className="text-xl text-neutral-300 font-light mb-12 max-w-2xl mx-auto">
              Whether it&#39;s a routine tune-up or an emergency repair, our team is standing by.
              Schedule your appointment today and experience the ProFlow difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-start mb-12">
              <BookingWidget id="cta-booking-widget" />
              <div className="text-center">
                <EstimateWidget id="cta-estimate-widget" />
                <p className="text-neutral-500 text-xs mt-2 tracking-wider uppercase">Free Estimate</p>
              </div>
              <div className="text-center">
                <JobPortalWidget id="cta-portal-widget" displayMode="button" />
                <p className="text-neutral-500 text-xs mt-2 tracking-wider uppercase">Appointment Lookup</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 text-neutral-400">
              <span className="text-sm uppercase tracking-wider">or call directly</span>
              <a href="tel:+17205550147" className="text-orange-400 text-xl font-light hover:text-white transition-colors">
                (720) 555-0147
              </a>
            </div>

            <p className="text-neutral-600 text-sm mt-8">
              Secure online booking. Cancel or reschedule up to 24 hours before your appointment.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
