import {
  Award, Heart, Shield, BookOpen, Users
} from 'lucide-react'
import { useIntersectionObserver, useStaggeredIntersection } from '../hooks/useIntersectionObserver'
import { BookingWidget } from '../hooks/useWidgetfied'

const CREDENTIALS = [
  {
    icon: Award,
    title: 'Licensed Contractors',
    description: 'Colorado-licensed HVAC and plumbing contractors',
  },
  {
    icon: Shield,
    title: 'Fully Insured',
    description: 'Comprehensive liability and worker\'s comp insurance',
  },
  {
    icon: Heart,
    title: '15+ Years Experience',
    description: 'Over 15 years serving the Denver metro area',
  },
  {
    icon: BookOpen,
    title: 'Ongoing Training',
    description: 'Continuous education on latest technologies and codes',
  },
]

const VALUES = [
  {
    title: 'Safety First',
    description: 'Every job prioritizes safety for our team and your family',
  },
  {
    title: 'Honest Pricing',
    description: 'Upfront quotes with no hidden fees or surprise charges',
  },
  {
    title: 'Quality Workmanship',
    description: 'We stand behind every repair and installation',
  },
  {
    title: 'Customer Commitment',
    description: 'Your satisfaction drives everything we do',
  },
]

const TIMELINE = [
  { year: '2009', event: 'Founded ProFlow Mechanical in Denver as a one-person operation' },
  { year: '2012', event: 'Expanded to a team of 5 technicians serving the Denver metro' },
  { year: '2015', event: 'Added full plumbing services across the Front Range' },
  { year: '2018', event: 'Opened dedicated service center in LoDo, Denver' },
  { year: '2021', event: 'Fleet expanded to 12 service vehicles covering Denver to Castle Rock' },
  { year: '2024', event: 'Surpassed 5,000 completed jobs across Colorado' },
]

export default function About() {
  const heroObserver = useIntersectionObserver({ threshold: 0.1 })
  const storyObserver = useIntersectionObserver({ threshold: 0.1 })
  const credObserver = useIntersectionObserver({ threshold: 0.1 })
  const valuesObserver = useIntersectionObserver({ threshold: 0.1 })
  const timelineObserver = useIntersectionObserver({ threshold: 0.1 })
  const ctaObserver = useIntersectionObserver({ threshold: 0.1 })
  const { visibleItems: credVisible, setItemRef: setCredRef } = useStaggeredIntersection(CREDENTIALS.length)
  const { visibleItems: valuesVisible, setItemRef: setValuesRef } = useStaggeredIntersection(VALUES.length)

  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(30deg, #1E40AF 12%, transparent 12.5%, transparent 87%, #1E40AF 87.5%, #1E40AF),
              linear-gradient(150deg, #1E40AF 12%, transparent 12.5%, transparent 87%, #1E40AF 87.5%, #1E40AF)`,
              backgroundSize: '80px 140px',
            }}
          />
        </div>
        <div
          ref={heroObserver.ref}
          className={`relative z-10 container-custom text-center animate-fade-up ${heroObserver.isVisible ? 'visible' : ''}`}
        >
          <span className="inline-block text-accent-blue text-sm tracking-[0.3em] uppercase font-light mb-6">
            Our Story
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light text-white mb-6">
            About <span className="text-accent-orange">Us</span>
          </h1>
          <div className="h-px w-24 bg-accent-blue mx-auto my-8" />
          <p className="text-xl text-neutral-400 font-light max-w-2xl mx-auto">
            Built on trust, integrity, and expert craftsmanship
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div
            ref={storyObserver.ref}
            className={`grid lg:grid-cols-2 gap-16 items-center animate-fade-up ${storyObserver.isVisible ? 'visible' : ''}`}
          >
            {/* Image placeholder */}
            <div className="relative">
              <div className="absolute -inset-4 border border-accent-blue/20" />
              <div className="relative bg-gradient-to-br from-neutral-100 to-neutral-200 aspect-[4/5] flex items-center justify-center">
                <div className="text-center p-8">
                  <Users className="w-16 h-16 text-accent-blue/30 mx-auto mb-4" />
                  <p className="text-neutral-500 text-sm uppercase tracking-wider">Our Denver Team</p>
                  <p className="text-neutral-400 text-xs mt-2">ProFlow Mechanical — Est. 2009</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-900 mb-4">
                A Legacy of Quality Service
              </h2>
              <div className="h-px w-24 bg-accent-blue my-8" />
              <div className="space-y-6 text-neutral-600 font-light leading-relaxed">
                <p>
                  ProFlow Mechanical was founded on a simple belief: Denver homeowners and businesses deserve
                  reliable, honest HVAC and plumbing service from people they can trust. What started as
                  a one-person operation has grown into a full-service team covering the entire Front Range,
                  but our founding values remain unchanged.
                </p>
                <p>
                  From our earliest days servicing homes in Capitol Hill and Wash Park to our current fleet
                  of technicians and dedicated service center in LoDo, we have always prioritized quality
                  over quantity. Every repair, every installation, and every maintenance call is an
                  opportunity to build lasting relationships with our Colorado community.
                </p>
                <p>
                  We are proud to call Denver home. Our commitment extends beyond your HVAC
                  and plumbing systems — we invest in local partnerships, support neighborhood
                  initiatives from Aurora to Arvada, and treat every customer like a neighbor.
                  That is the ProFlow difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-32 bg-neutral-50">
        <div className="container-custom">
          <div
            ref={credObserver.ref}
            className={`text-center mb-20 animate-fade-up ${credObserver.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-900 mb-4">
              Credentials & Certifications
            </h2>
            <div className="h-px w-32 bg-accent-blue mx-auto my-8" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CREDENTIALS.map((cred, index) => {
              const Icon = cred.icon
              return (
                <div
                  key={index}
                  ref={(el) => setCredRef(index, el)}
                  data-item-id={index}
                  className={`text-center p-8 bg-white border border-neutral-200 animate-fade-up ${credVisible[index] ? 'visible' : ''}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 mx-auto mb-6 border border-accent-blue/20 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-accent-blue" />
                  </div>
                  <h3 className="text-lg font-medium mb-3 tracking-wide">{cred.title}</h3>
                  <p className="text-neutral-500 font-light text-sm leading-relaxed">{cred.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-near-black text-white">
        <div className="container-custom">
          <div
            ref={valuesObserver.ref}
            className={`text-center mb-20 animate-fade-up ${valuesObserver.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-display font-light mb-4">
              Our Core Values
            </h2>
            <div className="h-px w-32 bg-accent-blue mx-auto my-8" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {VALUES.map((value, index) => (
              <div
                key={index}
                ref={(el) => setValuesRef(index, el)}
                data-item-id={index}
                className={`p-8 border border-neutral-800 hover:border-accent-blue/30 transition-colors duration-300 animate-fade-up ${valuesVisible[index] ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-medium mb-3 text-accent-blue tracking-wide">{value.title}</h3>
                <p className="text-neutral-400 font-light leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div
            ref={timelineObserver.ref}
            className={`text-center mb-20 animate-fade-up ${timelineObserver.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-900 mb-4">
              Our Journey
            </h2>
            <div className="h-px w-32 bg-accent-blue mx-auto my-8" />
          </div>

          <div className="max-w-2xl mx-auto">
            {TIMELINE.map((item, index) => (
              <div key={index} className="flex gap-8 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-accent-blue" />
                  {index < TIMELINE.length - 1 && (
                    <div className="w-px flex-1 bg-accent-blue/20 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-accent-blue font-medium text-sm uppercase tracking-wider">{item.year}</span>
                  <p className="text-neutral-600 font-light mt-1">{item.event}</p>
                </div>
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
            Experience the ProFlow Difference
          </h2>
          <div className="h-px w-32 bg-accent-blue mx-auto my-8" />
          <p className="text-xl text-neutral-300 font-light mb-10 max-w-2xl mx-auto">
            Ready for reliable HVAC and plumbing service? Book online or give us a call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-start">
            <BookingWidget id="about-cta-booking-widget" />
            <a
              href="tel:+17205550147"
              className="inline-flex items-center justify-center gap-3 text-accent-orange font-medium tracking-wider uppercase text-sm hover:text-white transition-colors"
            >
              Call: (720) 555-0147
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
