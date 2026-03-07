import { useState, useEffect } from 'react'
import { Phone } from 'lucide-react'
import { BookingWidget } from '../hooks/useWidgetfied'

export default function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-neutral-900/95 backdrop-blur-sm border-t border-neutral-700 px-4 py-3 safe-area-bottom">
        <div className="flex gap-3">
          <a
            href="tel:+17205550147"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-accent-orange text-white font-semibold text-sm uppercase tracking-wider rounded-lg active:scale-95 transition-transform"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
          <div className="flex-1 [&>div]:w-full">
            <BookingWidget id="mobile-sticky-cta-booking" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
