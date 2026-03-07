import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function Privacy() {
  return (
    <>
      <section className="relative py-32 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black" />
        <div className="relative z-10 container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-display font-light text-white mb-6">
            Privacy <span className="text-accent-orange">Policy</span>
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
              <h2 className="text-2xl font-display font-light text-neutral-900 mb-4">Information We Collect</h2>
              <div className="h-px w-16 bg-accent-blue mb-6" />
              <p className="text-neutral-600 font-light leading-relaxed mb-4">
                When you request a service call, schedule an appointment, or contact us, we may collect your name, phone number, email address, service address, and details about the service you need. We also collect standard website usage data through cookies and analytics tools.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-light text-neutral-900 mb-4">How We Use Your Information</h2>
              <div className="h-px w-16 bg-accent-blue mb-6" />
              <ul className="space-y-3 text-neutral-600 font-light">
                <li className="flex items-start gap-3"><span className="text-accent-blue mt-1">—</span>To schedule and perform HVAC and plumbing services</li>
                <li className="flex items-start gap-3"><span className="text-accent-blue mt-1">—</span>To communicate with you about appointments, estimates, and follow-ups</li>
                <li className="flex items-start gap-3"><span className="text-accent-blue mt-1">—</span>To send service reminders and seasonal maintenance recommendations</li>
                <li className="flex items-start gap-3"><span className="text-accent-blue mt-1">—</span>To improve our website and customer experience</li>
                <li className="flex items-start gap-3"><span className="text-accent-blue mt-1">—</span>To comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-light text-neutral-900 mb-4">Information Sharing</h2>
              <div className="h-px w-16 bg-accent-blue mb-6" />
              <p className="text-neutral-600 font-light leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service partners (e.g., scheduling platforms, payment processors) solely to fulfill the services you've requested. We may also disclose information when required by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-light text-neutral-900 mb-4">Data Security</h2>
              <div className="h-px w-16 bg-accent-blue mb-6" />
              <p className="text-neutral-600 font-light leading-relaxed">
                We implement industry-standard security measures to protect your personal information. However, no method of electronic transmission or storage is 100% secure. We strive to use commercially acceptable means to protect your data, but cannot guarantee its absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-light text-neutral-900 mb-4">Cookies</h2>
              <div className="h-px w-16 bg-accent-blue mb-6" />
              <p className="text-neutral-600 font-light leading-relaxed">
                Our website uses cookies to enhance your browsing experience, analyze site traffic, and understand where our visitors come from. You can choose to disable cookies through your browser settings, though some features of the site may not function properly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-light text-neutral-900 mb-4">Contact Us</h2>
              <div className="h-px w-16 bg-accent-blue mb-6" />
              <p className="text-neutral-600 font-light leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at{' '}
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
