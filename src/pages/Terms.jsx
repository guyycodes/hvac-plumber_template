import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function Terms() {
  return (
    <>
      <section className="relative py-32 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black" />
        <div className="relative z-10 container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-display font-light text-white mb-6">
            Terms of <span className="text-accent-orange">Service</span>
          </h1>
          <div className="h-px w-24 bg-accent-blue mx-auto my-8" />
          <p className="text-neutral-400 font-light">Last updated: January 1, 2026</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom max-w-3xl">
          <Link to="/" className="inline-flex items-center gap-2 text-accent-blue text-sm uppercase tracking-wider mb-12 hover:text-neutral-900 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <div className="prose prose-neutral max-w-none space-y-10">
            <div>
              <h2 className="text-2xl font-display font-light text-neutral-900 mb-4">Services</h2>
              <div className="h-px w-16 bg-accent-blue mb-6" />
              <p className="text-neutral-600 font-light leading-relaxed">
                ProFlow Mechanical provides residential and commercial HVAC and plumbing services in the Denver metropolitan area. All services are performed by licensed, insured technicians in accordance with applicable Colorado state and local building codes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-light text-neutral-900 mb-4">Scheduling &amp; Cancellation</h2>
              <div className="h-px w-16 bg-accent-blue mb-6" />
              <p className="text-neutral-600 font-light leading-relaxed mb-4">
                Appointments can be scheduled online, by phone, or through our client portal. We request at least 24 hours' notice for cancellations or rescheduling. Emergency service is available 24/7 and is not subject to the standard cancellation policy.
              </p>
              <p className="text-neutral-600 font-light leading-relaxed">
                Missed appointments without prior notice may be subject to a service call fee. We will always attempt to contact you before the appointment to confirm.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-light text-neutral-900 mb-4">Pricing &amp; Payment</h2>
              <div className="h-px w-16 bg-accent-blue mb-6" />
              <p className="text-neutral-600 font-light leading-relaxed">
                All pricing is provided upfront before work begins. Diagnostic fees are applied toward the cost of repair if you choose to proceed. We accept all major credit cards, checks, and offer financing options for qualifying projects. Payment is due upon completion of service unless otherwise agreed in writing.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-light text-neutral-900 mb-4">Warranties &amp; Guarantees</h2>
              <div className="h-px w-16 bg-accent-blue mb-6" />
              <p className="text-neutral-600 font-light leading-relaxed">
                All workmanship is backed by our satisfaction guarantee. If an issue arises with our work within 30 days, we will return to correct it at no additional charge. Manufacturer warranties on parts and equipment are separate and vary by product. We will provide warranty documentation for all installed equipment.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-light text-neutral-900 mb-4">Limitation of Liability</h2>
              <div className="h-px w-16 bg-accent-blue mb-6" />
              <p className="text-neutral-600 font-light leading-relaxed">
                ProFlow Mechanical's liability for any claim arising from services rendered shall not exceed the amount paid for the specific service in question. We are not liable for pre-existing conditions, damage caused by third parties, or issues resulting from failure to follow maintenance recommendations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-light text-neutral-900 mb-4">Contact</h2>
              <div className="h-px w-16 bg-accent-blue mb-6" />
              <p className="text-neutral-600 font-light leading-relaxed">
                Questions about these terms? Contact us at{' '}
                <a href="mailto:info@proflowmechanical.com" className="text-accent-blue hover:underline">info@proflowmechanical.com</a>{' '}
                or call <a href="tel:+17205550147" className="text-accent-blue hover:underline">(720) 555-0147</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
