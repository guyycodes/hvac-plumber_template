import { Phone } from 'lucide-react'
import { BookingWidget } from '../hooks/useWidgetfied'

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      <div className="grid grid-cols-2 border-t border-neutral-700">
        <a
          href="tel:+17205550147"
          className="flex items-center justify-center gap-2 py-4 bg-accent-orange text-white font-semibold text-sm uppercase tracking-wider active:brightness-90 transition-all"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <div className="bg-accent-blue flex items-center justify-center min-h-[52px]">
          <BookingWidget id="mobile-sticky-cta-booking" />
        </div>
      </div>
      <div className="bg-neutral-900 safe-area-bottom" />
    </div>
  )
}
