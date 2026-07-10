import { Check, ArrowRight, WifiOff, CheckCircle, Phone, Mail, Clock, Sparkles, Layers, Droplets, Gem, Diamond, Award, Truck, Users, ThumbsUp, Upload, Eye, Home, Building2, Factory, MapPin, Star, Shield, ChevronDown, ChevronRight, Tag, Calendar, UploadCloud, FileText, ImageIcon, Wrench, ShieldCheck, X } from '@/components/Icons';
'use client'

import { useEffect, useState, useCallback } from 'react'

const STATUSES = ['new', 'reviewing', 'contacted', 'qualified', 'estimate_needed', 'proposal_sent', 'won', 'lost', 'spam']
const STATUS_LABELS: Record<string, string> = {
  new: 'New', reviewing: 'Reviewing', contacted: 'Contacted',
  qualified: 'Qualified', estimate_needed: 'Estimate Needed',
  proposal_sent: 'Proposal Sent', won: 'Won', lost: 'Lost', spam: 'Spam',
}
const STATUS_COLORS: Record<string, string> = {
  new: 'bg-blue-100 text-blue-800', reviewing: 'bg-yellow-100 text-yellow-800',
  contacted: 'bg-purple-100 text-purple-800', qualified: 'bg-green-100 text-green-800',
  estimate_needed: 'bg-orange-100 text-orange-800', proposal_sent: 'bg-indigo-100 text-indigo-800',
  won: 'bg-emerald-100 text-emerald-800', lost: 'bg-red-100 text-red-800',
  spam: 'bg-gray-100 text-gray-500',
}

interface Lead {
  id: string
  full_name: string
  email: string
  phone: string
  source: string
  stage: string
  score: number
  notes: string
  tags: string[]
  created_at: string
  updated_at: string
}

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [filtered, setFiltered] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selected, setSelected] = useState<Lead | null>(null)
  const [updatingId, setUpdatingId] = useState<string | null>(null)
  const [pin, setPin] = useState('')
  const [authed, setAuthed] = useState(false)
  const [pinError, setPinError] = useState('')

  const ADMIN_PIN = process.env.NEXT_PUBLIC_ADMIN_PIN || '4321'

  function handlePin(e: React.FormEvent) {
    e.preventDefault()
    if (pin === ADMIN_PIN) {
      setAuthed(true)
      setPinError('')
    } else {
      setPinError('Incorrect PIN. Please try again.')
    }
  }

  const fetchLeads = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/leads')
      const data = await res.json()
      if (data.success) {
        setLeads(data.leads)
        setFiltered(data.leads)
      } else {
        setError(data.error || 'Failed to load leads')
      }
    } catch {
      setError('Connection error')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (authed) fetchLeads()
  }, [authed, fetchLeads])

  useEffect(() => {
    let list = leads
    if (statusFilter !== 'all') list = list.filter(l => l.stage === statusFilter)
    if (search) {
      const q = search.toLowerCase()
      list = list.filter(l =>
        l.full_name?.toLowerCase().includes(q) ||
        l.email?.toLowerCase().includes(q) ||
        l.phone?.includes(q) ||
        l.notes?.toLowerCase().includes(q)
      )
    }
    setFiltered(list)
  }, [search, statusFilter, leads])

  async function updateStage(leadId: string, newStage: string) {
    setUpdatingId(leadId)
    try {
      const res = await fetch(`/api/admin/leads/${leadId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ stage: newStage }),
      })
      const data = await res.json()
      if (data.success) {
        setLeads(prev => prev.map(l => l.id === leadId ? { ...l, stage: newStage } : l))
        if (selected?.id === leadId) setSelected(prev => prev ? { ...prev, stage: newStage } : null)
      }
    } finally {
      setUpdatingId(null)
    }
  }

  function parseNotes(notes: string) {
    const parts = notes?.split(' | ') || []
    return parts.reduce((acc: Record<string, string>, part) => {
      const [k, ...v] = part.split(': ')
      if (k && v.length) acc[k] = v.join(': ')
      return acc
    }, {})
  }

  const newCount = leads.filter(l => l.stage === 'new').length

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#080808]">
        <div className="bg-[#181818] border border-[#2a2a2a] rounded-xl p-10 w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="text-[#D4AF37] text-2xl font-bold tracking-widest mb-1">NEP</div>
            <div className="text-white text-lg font-semibold">Lead Dashboard</div>
            <div className="text-gray-400 text-sm mt-1">Operator access only</div>
          </div>
          <form onSubmit={handlePin} className="space-y-4">
            <input
              type="password"
              value={pin}
              onChange={e => setPin(e.target.value)}
              placeholder="Enter PIN"
              className="w-full bg-[#111] border border-[#333] text-white rounded-lg px-4 py-3 text-center text-xl tracking-widest focus:outline-none focus:border-[#D4AF37]"
              autoFocus
            />
            {pinError && <p className="text-red-400 text-sm text-center">{pinError}</p>}
            <button type="submit" className="w-full bg-[#D4AF37] text-black font-bold py-3 rounded-lg hover:bg-[#C49B2A] transition-colors">
              ENTER
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      {/* Header */}
      <div className="border-b border-[#1a1a1a] bg-[#0d0d0d] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-[#D4AF37] font-bold text-xl tracking-widest">NEP</span>
          <span className="text-gray-400 text-sm">Lead Dashboard</span>
          {newCount > 0 && (
            <span className="bg-[#D4AF37] text-black text-xs font-bold px-2 py-0.5 rounded-full">
              {newCount} NEW
            </span>
          )}
        </div>
        <button
          onClick={fetchLeads}
          className="text-gray-400 hover:text-white text-sm border border-[#333] px-3 py-1 rounded-lg transition-colors"
        >
          Refresh
        </button>
      </div>

      <div className="flex h-[calc(100vh-60px)]">
        {/* Sidebar — lead list */}
        <div className="w-96 border-r border-[#1a1a1a] flex flex-col">
          {/* Filters */}
          <div className="p-4 border-b border-[#1a1a1a] space-y-3">
            <input
              type="search"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search name, email, phone..."
              className="w-full bg-[#111] border border-[#333] text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#D4AF37]"
            />
            <select
              value={statusFilter}
              onChange={e => setStatusFilter(e.target.value)}
              className="w-full bg-[#111] border border-[#333] text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#D4AF37]"
            >
              <option value="all">All Statuses ({leads.length})</option>
              {STATUSES.map(s => (
                <option key={s} value={s}>
                  {STATUS_LABELS[s]} ({leads.filter(l => l.stage === s).length})
                </option>
              ))}
            </select>
          </div>

          {/* Lead list */}
          <div className="flex-1 overflow-y-auto">
            {loading && (
              <div className="p-8 text-center text-gray-500">Loading leads...</div>
            )}
            {error && (
              <div className="p-4 text-red-400 text-sm">{error}</div>
            )}
            {!loading && filtered.length === 0 && (
              <div className="p-8 text-center text-gray-500">No leads found</div>
            )}
            {filtered.map(lead => {
              const parsed = parseNotes(lead.notes)
              return (
                <div
                  key={lead.id}
                  onClick={() => setSelected(lead)}
                  className={`p-4 border-b border-[#1a1a1a] cursor-pointer hover:bg-[#111] transition-colors ${selected?.id === lead.id ? 'bg-[#111] border-l-2 border-l-[#D4AF37]' : ''}`}
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div className="font-semibold text-white text-sm truncate">{lead.full_name}</div>
                    <span className={`text-xs px-2 py-0.5 rounded-full whitespace-nowrap ${STATUS_COLORS[lead.stage] || 'bg-gray-800 text-gray-400'}`}>
                      {STATUS_LABELS[lead.stage] || lead.stage}
                    </span>
                  </div>
                  <div className="text-gray-400 text-xs truncate">{lead.email}</div>
                  {parsed['Type'] && <div className="text-gray-500 text-xs mt-1">{parsed['Type']} · {parsed['Sqft'] && `${parsed['Sqft']} sqft`}</div>}
                  <div className="text-gray-600 text-xs mt-1">
                    {new Date(lead.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Detail panel */}
        <div className="flex-1 overflow-y-auto">
          {!selected ? (
            <div className="h-full flex items-center justify-center text-gray-600">
              Select a lead to view details
            </div>
          ) : (() => {
            const parsed = parseNotes(selected.notes)
            return (
              <div className="p-8 max-w-2xl">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h1 className="text-2xl font-bold text-white">{selected.full_name}</h1>
                    <div className="text-gray-400 text-sm mt-1">
                      {parsed['Quote'] && <span className="text-[#D4AF37] font-mono mr-3">{parsed['Quote']}</span>}
                      Submitted {new Date(selected.created_at).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' })}
                    </div>
                  </div>
                  <span className={`text-sm px-3 py-1 rounded-full font-medium ${STATUS_COLORS[selected.stage] || 'bg-gray-800 text-gray-400'}`}>
                    {STATUS_LABELS[selected.stage] || selected.stage}
                  </span>
                </div>

                {/* Contact */}
                <div className="bg-[#111] border border-[#222] rounded-xl p-5 mb-4">
                  <h2 className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest mb-3">Contact</h2>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div><span className="text-gray-500">Email</span><div className="text-white mt-0.5">{selected.email}</div></div>
                    <div><span className="text-gray-500">Phone</span><div className="text-white mt-0.5">{selected.phone}</div></div>
                    <div><span className="text-gray-500">Preferred Contact</span><div className="text-white mt-0.5">{parsed['Contact pref'] || '—'}</div></div>
                    <div><span className="text-gray-500">Best Time</span><div className="text-white mt-0.5">{parsed['Best time'] || '—'}</div></div>
                  </div>
                </div>

                {/* Project details */}
                <div className="bg-[#111] border border-[#222] rounded-xl p-5 mb-4">
                  <h2 className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest mb-3">Project</h2>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div><span className="text-gray-500">Type</span><div className="text-white mt-0.5">{parsed['Type'] || '—'}</div></div>
                    <div><span className="text-gray-500">System</span><div className="text-white mt-0.5">{parsed['System'] || '—'}</div></div>
                    <div><span className="text-gray-500">Square Footage</span><div className="text-white mt-0.5">{parsed['Sqft'] ? `${parsed['Sqft']} sqft` : '—'}</div></div>
                    <div><span className="text-gray-500">Location</span><div className="text-white mt-0.5">{parsed['Location'] || '—'}</div></div>
                    <div><span className="text-gray-500">Timeline</span><div className="text-white mt-0.5">{parsed['Timeline'] || '—'}</div></div>
                    <div><span className="text-gray-500">Finish</span><div className="text-white mt-0.5">{parsed['Finish'] || '—'}</div></div>
                  </div>
                  {parsed['Notes'] && (
                    <div className="mt-3">
                      <span className="text-gray-500 text-sm">Customer Notes</span>
                      <div className="text-white text-sm mt-0.5 bg-[#0d0d0d] rounded-lg p-3">{parsed['Notes']}</div>
                    </div>
                  )}
                </div>

                {/* Tags */}
                {selected.tags?.length > 0 && (
                  <div className="bg-[#111] border border-[#222] rounded-xl p-5 mb-4">
                    <h2 className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest mb-3">Tags</h2>
                    <div className="flex flex-wrap gap-2">
                      {selected.tags.map((t, i) => (
                        <span key={i} className="bg-[#1a1a1a] text-gray-300 text-xs px-3 py-1 rounded-full border border-[#2a2a2a]">{t}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Update status */}
                <div className="bg-[#111] border border-[#222] rounded-xl p-5">
                  <h2 className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest mb-3">Update Status</h2>
                  <div className="flex flex-wrap gap-2">
                    {STATUSES.map(s => (
                      <button
                        key={s}
                        disabled={updatingId === selected.id}
                        onClick={() => updateStage(selected.id, s)}
                        className={`text-xs px-3 py-1.5 rounded-full border transition-colors font-medium
                          ${selected.stage === s
                            ? 'border-[#D4AF37] text-[#D4AF37] bg-[#1a1500]'
                            : 'border-[#333] text-gray-400 hover:border-[#555] hover:text-white'
                          }`}
                      >
                        {STATUS_LABELS[s]}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )
          })()}
        </div>
      </div>
    </div>
  )
}
