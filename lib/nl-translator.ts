// NEP Apex LOS — Natural Language PubSub Translator
// Converts raw agent payloads ↔ English chat messages

export interface AgentMessage {
  message_id: string
  channel_id: string
  sender_id: string
  sender_name: string
  message_type: 'chat' | 'command' | 'result' | 'alert' | 'question' | 'answer' |
                'handoff' | 'approval_request' | 'approval_response' |
                'status_update' | 'task_assign' | 'system' | 'heartbeat'
  raw_payload: Record<string, unknown>
  natural_language: string
  priority: 'low' | 'normal' | 'high' | 'critical' | 'emergency'
  score?: number
  tags?: string[]
  created_at: string
}

// AGENT PERSONAS — tone + vocabulary per agent
export const AGENT_PERSONAS: Record<string, {
  emoji: string; color: string; tone: string; prefix: string
}> = {
  apex:         { emoji:'⚡', color:'#F6B800', tone:'authoritative', prefix:'APEX' },
  aria:         { emoji:'💬', color:'#60a5fa', tone:'warm',          prefix:'ARIA' },
  discovery:    { emoji:'🕵️', color:'#a78bfa', tone:'analytical',    prefix:'DISCOVERY' },
  intelligence: { emoji:'🧠', color:'#34d399', tone:'precise',       prefix:'INTELLIGENCE' },
  outreach:     { emoji:'💰', color:'#f97316', tone:'persuasive',    prefix:'OUTREACH' },
  ghost:        { emoji:'👻', color:'#e879f9', tone:'creative',      prefix:'GHOST' },
  validator:    { emoji:'🔍', color:'#22c55e', tone:'exacting',      prefix:'VALIDATOR' },
  benchmark:    { emoji:'📊', color:'#0ea5e9', tone:'data-driven',   prefix:'BENCHMARK' },
  'money-machine':    { emoji:'💵', color:'#fbbf24', tone:'ROI-focused',   prefix:'MONEY' },
  'exec-ops':         { emoji:'📋', color:'#94a3b8', tone:'operational',   prefix:'EXEC-OPS' },
  'biz-builder':      { emoji:'🏗️', color:'#f59e0b', tone:'strategic',    prefix:'BIZ' },
  'sync-orchestrator':{ emoji:'🔄', color:'#6366f1', tone:'technical',    prefix:'SYNC' },
  'website-builder':  { emoji:'🌐', color:'#14b8a6', tone:'build-focused', prefix:'WEB' },
  'brand-builder':    { emoji:'🎨', color:'#ec4899', tone:'creative',      prefix:'BRAND' },
  jeremy:             { emoji:'👤', color:'#ffffff', tone:'owner',          prefix:'JEREMY' },
  system:             { emoji:'🖥️', color:'#64748b', tone:'system',        prefix:'SYS' },
}

// PAYLOAD → NATURAL LANGUAGE translator
export function translateToNL(
  messageType: string,
  payload: Record<string, unknown>,
  senderId: string
): string {
  const agent = senderId.toUpperCase()

  switch(messageType) {
    case 'result':
      if (payload.scores) {
        const s = payload.scores as Record<string, number>
        return `Task complete. Results: ${Object.entries(s).map(([k,v])=>`${k}: ${v}/100`).join(', ')}.`
      }
      if (payload.score !== undefined) {
        const score = payload.score as number
        const grade = score >= 95 ? 'S' : score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : 'F'
        return `Task completed with score ${score}/100 (Grade: ${grade}). ${score === 100 ? '🏆 PERFECT — 1 point awarded!' : ''}`
      }
      return `Task result received from ${agent}.`

    case 'command':
      return `${agent} issued a command: ${payload.action || 'See payload for details'}.`

    case 'alert':
      const sev = payload.severity || 'MEDIUM'
      return `🚨 ${sev} ALERT from ${agent}: ${payload.message || 'Check system status.'}`

    case 'approval_request':
      return `${agent} is requesting approval for: "${payload.action}". Risk level: ${payload.risk || 'MEDIUM'}. Blocking until approved.`

    case 'approval_response':
      const approved = payload.approved ? '✅ APPROVED' : '❌ REJECTED'
      return `${approved} by ${agent}. ${payload.reason || ''}`

    case 'status_update':
      return `${agent} status: ${payload.status || 'Updated'}. ${payload.message || ''}`

    case 'task_assign':
      return `Task assigned to ${payload.assignee}: "${payload.task}". Priority: ${payload.priority || 'NORMAL'}. Due: ${payload.due || 'ASAP'}.`

    case 'handoff':
      return `${agent} handing off to ${payload.to}: "${payload.context}". ${payload.notes || ''}`

    case 'heartbeat':
      return `${agent} is alive. Uptime: ${payload.uptime || 'active'}. Last action: ${payload.last_action || 'monitoring'}.`

    case 'system':
      return payload.message as string || `System event from ${agent}.`

    default:
      return payload.natural_language as string || `Message from ${agent}.`
  }
}

// NATURAL LANGUAGE → STRUCTURED PAYLOAD parser
export function parseNLCommand(text: string, senderId: string): {
  messageType: string
  payload: Record<string, unknown>
  recipient?: string
  priority: string
  channelId?: string
} {
  const lower = text.toLowerCase()

  // ROUTING — detect target agent
  let recipient: string | undefined
  const agentMentions = ['apex','aria','discovery','intelligence','outreach','ghost','validator','benchmark','money-machine','exec-ops']
  for (const agent of agentMentions) {
    if (lower.includes(`@${agent}`) || lower.startsWith(agent + ':')) {
      recipient = agent
      break
    }
  }

  // INTENT detection
  if (lower.includes('approve') || lower.includes('approved') || lower.includes('go ahead')) {
    return { messageType: 'approval_response', payload: { approved: true, approver: senderId, reason: text }, priority: 'high' }
  }
  if (lower.includes('reject') || lower.includes('denied') || lower.includes('hold off')) {
    return { messageType: 'approval_response', payload: { approved: false, approver: senderId, reason: text }, priority: 'high' }
  }
  if (lower.includes('deploy') || lower.includes('ship') || lower.includes('push to prod')) {
    return { messageType: 'command', payload: { action: 'deploy', instruction: text, requires_approval: true }, priority: 'high', channelId: 'build-deploy' }
  }
  if (lower.includes('score') || lower.includes('how are') || lower.includes('status')) {
    return { messageType: 'question', payload: { question: text, expects: 'status_update' }, priority: 'normal', channelId: 'qa-ops' }
  }
  if (lower.includes('alert') || lower.includes('emergency') || lower.includes('critical')) {
    return { messageType: 'alert', payload: { severity: 'HIGH', message: text }, priority: 'critical', channelId: 'alerts-emergency' }
  }
  if (lower.includes('assign') || lower.includes('handle') || lower.includes('take care of')) {
    return { messageType: 'task_assign', payload: { task: text, assignee: recipient || 'tbd' }, priority: 'normal' }
  }

  // Default: chat
  return {
    messageType: 'chat',
    payload: { message: text, intent: 'conversational' },
    recipient,
    priority: lower.includes('urgent') || lower.includes('asap') ? 'high' : 'normal'
  }
}

// FORMAT message for display (adds emoji, color coding, grade badges)
export function formatMessageForDisplay(msg: AgentMessage): {
  bubble: string; meta: string; color: string; emoji: string; badge?: string
} {
  const persona = AGENT_PERSONAS[msg.sender_id] || AGENT_PERSONAS['system']
  let badge: string | undefined

  if (msg.score !== undefined) {
    const grade = msg.score >= 95 ? 'S' : msg.score >= 90 ? 'A' : msg.score >= 80 ? 'B' : msg.score >= 70 ? 'C' : 'F'
    badge = msg.score === 100 ? `${grade} 🏆 +1pt` : grade
  }

  const time = new Date(msg.created_at).toLocaleTimeString('en-US', { hour:'2-digit', minute:'2-digit' })
  const priorityTag = msg.priority === 'critical' ? '🚨' : msg.priority === 'high' ? '⚠️' : ''

  return {
    bubble: msg.natural_language,
    meta: `${persona.prefix} • ${time} ${priorityTag}`,
    color: persona.color,
    emoji: persona.emoji,
    badge
  }
}
