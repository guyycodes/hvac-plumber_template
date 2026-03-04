import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="min-h-screen bg-near-black flex items-center justify-center px-4">
      <div className="text-center">
        <span className="text-[10rem] md:text-[14rem] font-display font-bold leading-none text-accent-blue/20 select-none">
          404
        </span>
        <h1 className="text-3xl md:text-4xl font-display font-light text-white -mt-8 mb-4">
          Page Not Found
        </h1>
        <p className="text-neutral-400 font-light max-w-md mx-auto mb-10">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-3 px-8 py-4 bg-accent-blue text-white font-medium tracking-wider uppercase text-sm hover:bg-accent-blue/90 transition-colors"
        >
          <Home className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </section>
  )
}
