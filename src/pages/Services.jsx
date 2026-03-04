import { Link } from 'react-router-dom'
import {
  Snowflake, Flame, Wrench, Droplets, Filter, AlertTriangle,
  ArrowRight, Clock, CheckCircle
} from 'lucide-react'
import { useIntersectionObserver, useStaggeredIntersection } from '../hooks/useIntersectionObserver'
import { BookingWidget, EstimateWidget } from '../hooks/useWidgetfied'

const SERVICES = [
  {
    id: 'ac-repair',
    icon: Snowflake,
    title: 'AC Repair & Installation',
    tagline: 'Cool Comfort',
    description: 'From strange noises to complete breakdowns, our certified technicians diagnose and repair all makes and models. We also design and install high-efficiency cooling systems sized perfectly for your space.',
    benefits: ['Diagnosis & repair', 'New system installation', 'Seasonal tune-ups', 'Ductwork inspection'],
    durations: [
      { time: 'Diagnostic', price: '$89' },
      { time: 'Full Service', price: 'From $149' },
    ],
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'heating',
    icon: Flame,
    title: 'Heating Systems',
    tagline: 'Reliable Warmth',
    description: 'Keep your home warm and safe with expert furnace and heat pump service. Whether it\'s a quick repair or a full system replacement, we deliver dependable heating solutions built to last.',
    benefits: ['Furnace repair', 'Heat pump service', 'System installation', 'Annual maintenance'],
    durations: [
      { time: 'Diagnostic', price: '$99' },
      { time: 'Full Service', price: 'From $169' },
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'plumbing',
    icon: Wrench,
    title: 'Plumbing Services',
    tagline: 'Expert Solutions',
    description: 'Full-service residential and commercial plumbing from licensed professionals. We handle everything from minor leaks and fixture swaps to major pipe replacements and sewer line work.',
    benefits: ['Leak detection & repair', 'Pipe replacement', 'Fixture installation', 'Sewer line service'],
    durations: [
      { time: 'Service Call', price: '$79' },
      { time: 'Major Repair', price: 'From $199' },
    ],
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'water-heaters',
    icon: Droplets,
    title: 'Water Heaters',
    tagline: 'Hot Water Solutions',
    description: 'Tank or tankless — we install, repair, and maintain all types of water heaters. Upgrade to a high-efficiency system for endless hot water and lower energy bills.',
    benefits: ['Tank water heaters', 'Tankless systems', 'Repair & maintenance', 'Energy-efficient upgrades'],
    durations: [
      { time: 'Diagnostic', price: '$89' },
      { time: 'Installation', price: 'From $899' },
    ],
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'drain-cleaning',
    icon: Filter,
    title: 'Drain Cleaning',
    tagline: 'Clear Flow',
    description: 'Stubborn clogs and slow drains don\'t stand a chance. Our team uses professional-grade equipment including camera inspections and hydro jetting to restore full flow fast.',
    benefits: ['Clog removal', 'Camera inspection', 'Hydro jetting', 'Preventive maintenance'],
    durations: [
      { time: 'Standard', price: '$99' },
      { time: 'Camera Inspect', price: '$149' },
    ],
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'emergency',
    icon: AlertTriangle,
    title: 'Emergency Service',
    tagline: '24/7 Response',
    description: 'Burst pipe at midnight? Furnace out in a blizzard? Our emergency team is available around the clock, 365 days a year — with fast response times and no overtime charges.',
    benefits: ['Available 24/7/365', 'Fast response times', 'No overtime charges', 'All HVAC & plumbing'],
    durations: [
      { time: 'Emergency Call', price: '$149' },
      { time: 'After Hours', price: 'From $199' },
    ],
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80',
  },
]

const PROCESS = [
  {
    step: '01',
    title: 'Schedule',
    description: 'Book your appointment online or give us a call. We offer flexible scheduling including same-day and emergency service.',
  },
  {
    step: '02',
    title: 'Diagnose',
    description: 'Our licensed technician performs a thorough inspection to identify the issue and presents you with clear, upfront options.',
  },
  {
    step: '03',
    title: 'Resolve',
    description: 'We complete the repair or installation to the highest standard — with transparent pricing approved before any work begins.',
  },
]

export default function Services() {
  const heroObserver = useIntersectionObserver({ threshold: 0.1 })
  const processObserver = useIntersectionObserver({ threshold: 0.1 })
  const ctaObserver = useIntersectionObserver({ threshold: 0.1 })
  const { visibleItems: serviceVisible, setItemRef: setServiceRef } = useStaggeredIntersection(SERVICES.length)

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
          <span className="inline-block text-blue-300/90 text-sm tracking-[0.3em] uppercase font-light mb-6">
            What We Offer
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light text-white mb-6">
            Our <span className="text-orange-500">Services</span>
          </h1>
          <div className="h-1 w-16 bg-blue-700 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-neutral-400 font-light max-w-2xl mx-auto">
            Comprehensive HVAC and plumbing solutions — from routine maintenance to emergency repairs, we keep your home running smoothly
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {SERVICES.map((service, index) => {
              const Icon = service.icon
              const isEven = index % 2 === 0
              return (
                <div
                  key={service.id}
                  id={service.id}
                  ref={(el) => setServiceRef(index, el)}
                  data-item-id={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center animate-fade-up ${serviceVisible[index] ? 'visible' : ''}`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 border border-blue-700/30 rounded-full flex items-center justify-center">
                        <Icon className="w-4 h-4 text-blue-700" />
                      </div>
                      <span className="text-xs text-orange-500 uppercase tracking-[0.2em]">{service.tagline}</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-display font-light text-neutral-900 mb-4">
                      {service.title}
                    </h2>
                    <div className="h-1 w-16 bg-blue-700 rounded-full mb-6"></div>
                    <p className="text-neutral-600 font-light leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-700 flex-shrink-0" />
                          <span className="text-sm text-neutral-600">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4 mb-6">
                      {service.durations.map((d, i) => (
                        <div key={i} className="flex items-center gap-3 px-4 py-2 bg-neutral-50 border border-neutral-200">
                          <Clock className="w-4 h-4 text-neutral-400" />
                          <span className="text-sm text-neutral-600">{d.time}</span>
                          <span className="text-sm font-medium text-orange-500">{d.price}</span>
                        </div>
                      ))}
                    </div>

                    <BookingWidget id={`service-${service.id}-booking-widget`} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-neutral-50">
        <div className="container-custom">
          <div
            ref={processObserver.ref}
            className={`text-center mb-20 animate-fade-up ${processObserver.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-900 mb-4">
              How It Works
            </h2>
            <div className="h-1 w-16 bg-blue-700 rounded-full mx-auto my-8"></div>
            <p className="text-xl text-neutral-600 font-light max-w-2xl mx-auto">
              Simple, straightforward service from start to finish
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {PROCESS.map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-display font-light text-blue-700/30 mb-4">{step.step}</div>
                <h3 className="text-xl font-medium mb-3 tracking-wide">{step.title}</h3>
                <p className="text-neutral-500 font-light leading-relaxed">{step.description}</p>
              </div>
            ))}
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
            Need HVAC or Plumbing Help?
          </h2>
          <div className="h-1 w-16 bg-blue-700 rounded-full mx-auto my-8"></div>
          <p className="text-xl text-neutral-300 font-light mb-10 max-w-2xl mx-auto">
            Not sure what you need? Request a free estimate or book a diagnostic — we'll take it from there.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-start">
            <BookingWidget id="services-cta-booking-widget" />
            <div className="text-center">
              <EstimateWidget id="services-cta-estimate-widget" />
              <p className="text-neutral-500 text-xs mt-2 tracking-wider uppercase">Free Estimate</p>
            </div>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center justify-center gap-3 text-orange-400 font-medium tracking-wider uppercase text-sm hover:text-white transition-colors"
            >
              Call: (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
