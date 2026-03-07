import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {
  Shield, Users, Calendar, DollarSign, TrendingUp, Clock,
  Star, Activity, ChevronDown, ChevronRight, Wrench,
  LogOut, Database, BarChart3, MessageSquare, AlertTriangle,
  Snowflake, Flame, Droplets, ThermometerSun
} from 'lucide-react'
import { DataMinerWidget } from '../hooks/useWidgetfied'

const MOCK_STATS = {
  totalCustomers: 1843,
  activeJobs: 14,
  jobsThisMonth: 187,
  monthlyRevenue: 68420,
  avgTicket: 365.88,
  repeatRate: 72,
  newCustomersThisMonth: 34,
  emergencyCalls: 23,
}

const MOCK_UPCOMING = [
  { time: '7:30 AM', client: 'Peterson Residence', service: 'AC Repair', tech: 'Mike R.', status: 'dispatched', priority: 'normal' },
  { time: '9:00 AM', client: 'Hilton — Downtown', service: 'Chiller Maintenance', tech: 'Jake T.', status: 'scheduled', priority: 'normal' },
  { time: '10:30 AM', client: 'Whole Foods — Cherry Creek', service: 'Grease Trap Service', tech: 'Carlos M.', status: 'scheduled', priority: 'normal' },
  { time: '11:00 AM', client: 'Williams Family', service: 'Furnace Install', tech: 'Mike R.', status: 'scheduled', priority: 'normal' },
  { time: '1:00 PM', client: 'RE/MAX — Arvada Office', service: 'Plumbing Inspection', tech: 'Carlos M.', status: 'scheduled', priority: 'normal' },
  { time: '2:30 PM', client: 'Chang Residence', service: 'Water Heater Replace', tech: 'Jake T.', status: 'pending', priority: 'normal' },
  { time: 'ASAP', client: 'Nguyen Residence', service: 'Burst Pipe — Emergency', tech: 'On Call', status: 'emergency', priority: 'high' },
]

const MOCK_RECENT_REVIEWS = [
  { author: 'Tom H.', rating: 5, snippet: 'ProFlow saved us when our furnace died on the coldest night of the year. Fast, professional...', date: '3 days ago' },
  { author: 'Megan K.', rating: 5, snippet: 'Honest pricing, showed up on time, and fixed the leak in under an hour. Will use again...', date: '5 days ago' },
  { author: 'David & Sarah P.', rating: 5, snippet: 'Just had a full AC system installed. The crew was clean, courteous, and finished ahead of...', date: '1 week ago' },
]

const MOCK_TOP_SERVICES = [
  { name: 'AC Repair & Install', icon: Snowflake, jobs: 62, revenue: 24800, pct: 36 },
  { name: 'Heating Systems', icon: Flame, jobs: 44, revenue: 18700, pct: 27 },
  { name: 'Plumbing', icon: Wrench, jobs: 38, revenue: 10640, pct: 16 },
  { name: 'Water Heaters', icon: Droplets, jobs: 26, revenue: 9360, pct: 14 },
  { name: 'Maintenance Plans', icon: ThermometerSun, jobs: 17, revenue: 4920, pct: 7 },
]

const MOCK_TECHS = [
  { name: 'Mike R.', jobsToday: 3, rating: 4.9, status: 'on-site' },
  { name: 'Jake T.', jobsToday: 2, rating: 4.8, status: 'en-route' },
  { name: 'Carlos M.', jobsToday: 2, rating: 5.0, status: 'available' },
  { name: 'On-Call Tech', jobsToday: 1, rating: null, status: 'standby' },
]

export default function Dashboard() {
  const navigate = useNavigate()
  const [openSections, setOpenSections] = useState({
    dispatch: true,
    techs: false,
    services: false,
    reviews: false,
    dataminer: false,
  })

  useEffect(() => {
    if (sessionStorage.getItem('pf_admin_auth') !== 'true') {
      navigate('/admin')
    }
  }, [navigate])

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }))
  }

  const handleSignOut = () => {
    sessionStorage.removeItem('pf_admin_auth')
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Shield className="w-7 h-7 text-accent-blue" />
              <h1 className="text-2xl sm:text-3xl font-bold text-white">Business Dashboard</h1>
            </div>
            <p className="text-gray-400 text-sm">ProFlow Mechanical — Admin Panel</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors text-sm"
            >
              View Site
            </Link>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 bg-red-600/80 hover:bg-red-600 text-white rounded-lg transition-colors flex items-center gap-2 text-sm"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>

        {/* Primary Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-5 border border-gray-700">
            <div className="flex items-center justify-between mb-3">
              <Users className="w-7 h-7 text-blue-400" />
              <span className="text-2xl font-bold text-white">{MOCK_STATS.totalCustomers.toLocaleString()}</span>
            </div>
            <p className="text-gray-400 text-sm">Total Customers</p>
            <p className="text-xs text-gray-500 mt-1">{MOCK_STATS.newCustomersThisMonth} new this month</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-5 border border-gray-700">
            <div className="flex items-center justify-between mb-3">
              <Calendar className="w-7 h-7 text-green-400" />
              <span className="text-2xl font-bold text-white">{MOCK_STATS.jobsThisMonth}</span>
            </div>
            <p className="text-gray-400 text-sm">Jobs This Month</p>
            <p className="text-xs text-gray-500 mt-1">{MOCK_STATS.activeJobs} active right now</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-5 border border-gray-700">
            <div className="flex items-center justify-between mb-3">
              <DollarSign className="w-7 h-7 text-accent-orange" />
              <span className="text-2xl font-bold text-white">${MOCK_STATS.monthlyRevenue.toLocaleString()}</span>
            </div>
            <p className="text-gray-400 text-sm">Monthly Revenue</p>
            <p className="text-xs text-gray-500 mt-1">${MOCK_STATS.avgTicket} avg ticket</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-5 border border-gray-700">
            <div className="flex items-center justify-between mb-3">
              <TrendingUp className="w-7 h-7 text-purple-400" />
              <span className="text-2xl font-bold text-white">{MOCK_STATS.repeatRate}%</span>
            </div>
            <p className="text-gray-400 text-sm">Repeat Customers</p>
            <p className="text-xs text-gray-500 mt-1">{MOCK_STATS.emergencyCalls} emergency calls</p>
          </div>
        </div>

        {/* Secondary Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50">
            <div className="flex items-center gap-3">
              <Star className="w-5 h-5 text-yellow-400" />
              <div>
                <p className="text-xl font-bold text-white">4.9</p>
                <p className="text-xs text-gray-400">Google Rating (312 reviews)</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50">
            <div className="flex items-center gap-3">
              <Activity className="w-5 h-5 text-cyan-400" />
              <div>
                <p className="text-xl font-bold text-white">3,842</p>
                <p className="text-xs text-gray-400">Website visits this month</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50">
            <p className="text-xs text-gray-400 mb-2">Estimate → Job Conversion</p>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-gray-700 rounded-full h-2">
                <div className="bg-green-400 h-2 rounded-full" style={{ width: '42%' }} />
              </div>
              <span className="text-sm text-white">42%</span>
            </div>
          </div>
        </div>

        {/* Accordion Sections */}
        <div className="space-y-4">
          {/* Today's Dispatch Board */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
            <button
              onClick={() => toggleSection('dispatch')}
              className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-700/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-accent-blue" />
                <span className="text-lg font-semibold text-white">Today's Dispatch</span>
                <span className="text-sm text-gray-400">({MOCK_UPCOMING.length} jobs)</span>
                {MOCK_UPCOMING.some(j => j.priority === 'high') && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-red-900/40 text-red-400 border border-red-800/30 font-medium">1 emergency</span>
                )}
              </div>
              {openSections.dispatch ?
                <ChevronDown className="w-5 h-5 text-gray-400" /> :
                <ChevronRight className="w-5 h-5 text-gray-400" />
              }
            </button>

            {openSections.dispatch && (
              <div className="px-5 py-4 border-t border-gray-700">
                <div className="space-y-3">
                  {MOCK_UPCOMING.map((job, i) => (
                    <div key={i} className={`flex items-center justify-between p-3 rounded-lg ${
                      job.priority === 'high' ? 'bg-red-900/20 border border-red-800/30' : 'bg-gray-700/30'
                    }`}>
                      <div className="flex items-center gap-4">
                        <div className="text-right w-16">
                          <span className={`text-sm font-medium ${job.priority === 'high' ? 'text-red-400' : 'text-white'}`}>
                            {job.time}
                          </span>
                        </div>
                        <div className="w-px h-8 bg-accent-blue/30" />
                        <div>
                          <p className="text-white font-medium text-sm">{job.client}</p>
                          <p className="text-xs text-gray-400">{job.service} · {job.tech}</p>
                        </div>
                      </div>
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                        job.status === 'dispatched' ? 'bg-blue-900/30 text-blue-400 border border-blue-800/30' :
                        job.status === 'emergency' ? 'bg-red-900/40 text-red-400 border border-red-800/30' :
                        job.status === 'pending' ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-800/30' :
                        'bg-green-900/30 text-green-400 border border-green-800/30'
                      }`}>
                        {job.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Technician Status */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
            <button
              onClick={() => toggleSection('techs')}
              className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-700/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Wrench className="w-5 h-5 text-accent-blue" />
                <span className="text-lg font-semibold text-white">Technician Status</span>
                <span className="text-sm text-gray-400">({MOCK_TECHS.length} techs)</span>
              </div>
              {openSections.techs ?
                <ChevronDown className="w-5 h-5 text-gray-400" /> :
                <ChevronRight className="w-5 h-5 text-gray-400" />
              }
            </button>

            {openSections.techs && (
              <div className="px-5 py-4 border-t border-gray-700">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {MOCK_TECHS.map((tech, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-accent-blue/20 flex items-center justify-center text-accent-blue text-sm font-bold">
                          {tech.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-white font-medium text-sm">{tech.name}</p>
                          <p className="text-xs text-gray-400">
                            {tech.jobsToday} jobs today{tech.rating ? ` · ${tech.rating} rating` : ''}
                          </p>
                        </div>
                      </div>
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                        tech.status === 'on-site' ? 'bg-green-900/30 text-green-400 border border-green-800/30' :
                        tech.status === 'en-route' ? 'bg-blue-900/30 text-blue-400 border border-blue-800/30' :
                        tech.status === 'available' ? 'bg-cyan-900/30 text-cyan-400 border border-cyan-800/30' :
                        'bg-yellow-900/30 text-yellow-400 border border-yellow-800/30'
                      }`}>
                        {tech.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Top Services */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
            <button
              onClick={() => toggleSection('services')}
              className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-700/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <BarChart3 className="w-5 h-5 text-accent-blue" />
                <span className="text-lg font-semibold text-white">Revenue by Service</span>
                <span className="text-sm text-gray-400">(this month)</span>
              </div>
              {openSections.services ?
                <ChevronDown className="w-5 h-5 text-gray-400" /> :
                <ChevronRight className="w-5 h-5 text-gray-400" />
              }
            </button>

            {openSections.services && (
              <div className="px-5 py-4 border-t border-gray-700">
                <div className="space-y-3">
                  {MOCK_TOP_SERVICES.map((svc, i) => {
                    const Icon = svc.icon
                    return (
                      <div key={i} className="flex items-center gap-4">
                        <Icon className="w-4 h-4 text-gray-500 flex-shrink-0" />
                        <span className="text-sm text-gray-400 w-36 truncate">{svc.name}</span>
                        <div className="flex-1">
                          <div className="bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-accent-blue h-2 rounded-full transition-all"
                              style={{ width: `${svc.pct}%` }}
                            />
                          </div>
                        </div>
                        <span className="text-sm text-white w-12 text-right">{svc.jobs}</span>
                        <span className="text-sm text-accent-orange w-20 text-right">${svc.revenue.toLocaleString()}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Recent Reviews */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
            <button
              onClick={() => toggleSection('reviews')}
              className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-700/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-accent-blue" />
                <span className="text-lg font-semibold text-white">Recent Reviews</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-green-900/30 text-green-400 border border-green-800/30">All 5-star</span>
              </div>
              {openSections.reviews ?
                <ChevronDown className="w-5 h-5 text-gray-400" /> :
                <ChevronRight className="w-5 h-5 text-gray-400" />
              }
            </button>

            {openSections.reviews && (
              <div className="px-5 py-4 border-t border-gray-700">
                <div className="space-y-3">
                  {MOCK_RECENT_REVIEWS.map((review, i) => (
                    <div key={i} className="p-3 bg-gray-700/30 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="flex gap-0.5">
                            {[...Array(review.rating)].map((_, j) => (
                              <Star key={j} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <span className="text-sm font-medium text-white">{review.author}</span>
                        </div>
                        <span className="text-xs text-gray-500">{review.date}</span>
                      </div>
                      <p className="text-sm text-gray-300 font-light italic">"{review.snippet}"</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Data Miner Widget */}
          <div className="bg-gradient-to-r from-accent-blue/10 to-blue-900/10 backdrop-blur-sm rounded-xl border border-accent-blue/20 overflow-hidden">
            <button
              onClick={() => toggleSection('dataminer')}
              className="w-full px-5 py-4 flex items-center justify-between hover:bg-accent-blue/5 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Database className="w-5 h-5 text-accent-blue" />
                <span className="text-lg font-semibold text-white">Data Miner</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-accent-blue/20 text-accent-blue border border-accent-blue/30 font-medium">Widget</span>
              </div>
              {openSections.dataminer ?
                <ChevronDown className="w-5 h-5 text-gray-400" /> :
                <ChevronRight className="w-5 h-5 text-gray-400" />
              }
            </button>

            {openSections.dataminer && (
              <div className="px-5 py-6 border-t border-accent-blue/20">
                <p className="text-gray-300 text-sm font-light mb-4">
                  Mine and enrich local business data — find property managers, commercial accounts, and new construction leads across the Denver metro area.
                </p>
                <DataMinerWidget
                  id="dashboard-lead-miner-widget"
                  displayMode="inline"
                />
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          Logged in as: admin@proflowmechanical.com (Owner)
        </div>
      </div>
    </div>
  )
}
