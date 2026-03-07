import { Phone } from 'lucide-react'
import { BookingWidget } from '../hooks/useWidgetfied'

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      <div className="bg-neutral-900 border-t border-neutral-700 px-4 py-3 safe-area-bottom">
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
