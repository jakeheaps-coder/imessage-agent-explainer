import { useEffect, useRef } from 'react'
import './index.css'

function useScrollAnimate() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('domo-animate'); observer.unobserve(el) } },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

function Section({ id, bg, children }: { id?: string; bg: 'white' | 'light'; children: React.ReactNode }) {
  return (
    <section id={id} className="px-6" style={{ background: bg === 'white' ? '#FFFFFF' : 'var(--neutral-50)', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>{children}</div>
    </section>
  )
}

function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  const ref = useScrollAnimate()
  return (
    <div ref={ref} style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
      <h2 style={{ color: 'var(--neutral-900)', marginBottom: subtitle ? '0.75rem' : 0 }}>{title}</h2>
      {subtitle && <p style={{ color: 'var(--neutral-600)', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>{subtitle}</p>}
    </div>
  )
}

function IMessageBubble({ text, isMe }: { text: string; isMe: boolean }) {
  return (
    <div style={{ display: 'flex', justifyContent: isMe ? 'flex-end' : 'flex-start' }}>
      <div style={{
        maxWidth: '85%', padding: '10px 14px', fontSize: 13, lineHeight: 1.55, whiteSpace: 'pre-line',
        background: isMe ? '#007AFF' : '#E9E9EB', color: isMe ? '#fff' : 'var(--neutral-900)',
        borderRadius: 18, ...(isMe ? { borderBottomRightRadius: 4 } : { borderBottomLeftRadius: 4 }),
      }}>{text}</div>
    </div>
  )
}

function App() {
  return (
    <div>
      {/* ───── NAV ───── */}
      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 50,
        background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--neutral-100)',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0.875rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 34, height: 34, borderRadius: 8, background: 'var(--domo-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#fff', fontWeight: 700, fontSize: 13 }}>CC</span>
            </div>
            <span style={{ fontWeight: 700, color: 'var(--neutral-900)', fontSize: 15 }}>Claude Code x iMessage</span>
          </div>
          <div style={{ display: 'flex', gap: 28, fontSize: 13, fontWeight: 600 }}>
            {['How It Works', 'Features', 'Heartbeat', 'vs OpenClaw'].map(label => (
              <a key={label} href={`#${label.toLowerCase().replace(/\s/g, '-').replace('vs-', '')}`}
                style={{ color: 'var(--neutral-600)', textDecoration: 'none', transition: 'color 0.3s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--neutral-900)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--neutral-600)')}
              >{label}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* ───── HERO (Domo Blue background) ───── */}
      <section style={{
        background: 'linear-gradient(180deg, #99CCEE 0%, #7BB8E0 100%)',
        padding: '8rem 1.5rem 5rem', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.015, background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', position: 'relative' }}>
          <div className="domo-animate">
            <div style={{ display: 'inline-block', padding: '6px 14px', borderRadius: 20, fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', marginBottom: 24, background: 'rgba(255,255,255,0.2)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)' }}>
              ARCHITECTURE OVERVIEW
            </div>
            <h1 style={{ color: '#fff', fontWeight: 800, marginBottom: 20 }}>
              Control Claude Code<br />from your iPhone
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1rem,1.5vw,1.15rem)', lineHeight: 1.7, fontWeight: 300, marginBottom: 32, maxWidth: 480 }}>
              An always-on AI agent you text via iMessage. Full Claude Code capabilities — file editing, MCP servers, git, bash, deploys — triggered from a text message.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="#how-it-works" className="domo-btn-primary">See How It Works</a>
              <a href="#openclaw" className="domo-btn-secondary" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}>vs OpenClaw</a>
            </div>
          </div>
          <div className="domo-animate domo-delay-2">
            <img src="./images/hero.png" alt="iMessage Claude Code Agent" style={{ width: '100%', borderRadius: 12, boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }} />
          </div>
        </div>
      </section>

      {/* ───── HOW IT WORKS ───── */}
      <Section id="how-it-works" bg="white">
        <SectionHeader title="How It Works" subtitle="A Flask server on your Mac receives iMessage webhooks via Linq, runs Claude Code in headless mode, and sends the response back." />
        <div style={{ maxWidth: 800, margin: '0 auto 3rem' }}>
          <img src="./images/architecture.png" alt="Architecture" style={{ width: '100%', borderRadius: 12, border: '1px solid var(--neutral-100)', boxShadow: 'var(--shadow-md)' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
          {[
            { n: '1', t: 'You Text', d: 'Send an iMessage to your Linq phone number from anywhere.' },
            { n: '2', t: 'Webhook Fires', d: 'Linq sends a webhook to your Mac via cloudflared tunnel.' },
            { n: '3', t: 'Claude Code Runs', d: 'Flask triggers claude -p with full tool access. No prompts.' },
            { n: '4', t: 'Reply via iMessage', d: 'Output sent back through Linq API as an iMessage reply.' },
          ].map(({ n, t, d }) => {
            const ref = useScrollAnimate()
            return (
              <div ref={ref} key={n} className={`domo-delay-${n}`} style={{ textAlign: 'center' }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--domo-blue)', color: '#fff', fontWeight: 700, fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', boxShadow: 'var(--shadow-blue-glow)' }}>{n}</div>
                <h4 style={{ fontWeight: 700, color: 'var(--neutral-900)', fontSize: 15, marginBottom: 8 }}>{t}</h4>
                <p style={{ fontSize: 13, color: 'var(--neutral-600)', lineHeight: 1.6 }}>{d}</p>
              </div>
            )
          })}
        </div>
      </Section>

      {/* ───── KEY INSIGHT ───── */}
      <Section bg="light">
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div className="domo-card" style={{ padding: '2.5rem', borderLeft: '4px solid var(--accent-orange)' }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: 'var(--accent-orange)', marginBottom: 16 }}>THE KEY INSIGHT</div>
            <h3 style={{ fontWeight: 700, color: 'var(--neutral-900)', marginBottom: 16 }}>
              <code style={{ fontFamily: 'monospace', color: 'var(--domo-blue)' }}>claude -p --dangerously-skip-permissions</code>
            </h3>
            <p style={{ color: 'var(--neutral-600)', lineHeight: 1.7, marginBottom: 24 }}>
              Claude Code's headless mode runs the full CLI non-interactively — same CLAUDE.md, same MCP servers, same memory, same tools. Combined with the skip-permissions flag, it runs fully autonomous. This is what makes phone-controlled Claude Code possible.
            </p>
            <div style={{ background: 'var(--neutral-900)', borderRadius: 8, padding: '1.25rem', fontFamily: 'monospace', fontSize: 13, lineHeight: 1.8 }}>
              <div style={{ color: 'var(--neutral-200)' }}># What your Flask server runs:</div>
              <div style={{ color: '#fff', marginTop: 8 }}>claude <span style={{ color: 'var(--domo-blue)' }}>-p</span> <span style={{ color: 'var(--accent-mint)' }}>"deploy the knowledge graph"</span> \</div>
              <div style={{ color: '#fff', paddingLeft: 16 }}><span style={{ color: 'var(--accent-orange)' }}>--dangerously-skip-permissions</span> \</div>
              <div style={{ color: '#fff', paddingLeft: 16 }}>--output-format <span style={{ color: 'var(--accent-mint)' }}>text</span> --max-turns <span style={{ color: 'var(--accent-orange)' }}>25</span></div>
            </div>
          </div>
        </div>
      </Section>

      {/* ───── IMESSAGE DEMOS ───── */}
      <Section bg="white">
        <SectionHeader title="What It Looks Like" subtitle="Real interactions — text a command, get results in seconds." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, maxWidth: 900, margin: '0 auto' }}>
          {[
            { label: 'HEALTH CHECK', msgs: [{ t: 'check kg health', me: true }, { t: 'KG API Status:\n/api/products — 142ms\n/api/industries — 89ms\n/api/messaging — 203ms\nAll 7 endpoints healthy.', me: false }] },
            { label: 'CODE EDITING', msgs: [{ t: "fix the typo in clanker's prompt, change recieve to receive", me: true }, { t: 'Fixed in clanker_5000/system_prompt.md\nChanged "recieve" → "receive" (2 occurrences)\nCommitted to branch fix/clanker-typo', me: false }] },
            { label: 'DEPLOYMENT', msgs: [{ t: 'deploy the knowledge graph', me: true }, { t: 'Starting KG deployment...\nBuilt container image\nDeployed to Cloud Run\nHealth check passed. All endpoints responding.', me: false }] },
            { label: 'DATA QUERY', msgs: [{ t: "what's pipeline revenue this week?", me: true }, { t: 'Pipeline: $2.3M (up 12% WoW)\nNew opps: 14 (3 enterprise)\nTop deal: Acme Corp $420K (Stage 3)\nForecast: $1.8M weighted', me: false }] },
          ].map(({ label, msgs }, idx) => {
            const ref = useScrollAnimate()
            return (
              <div ref={ref} key={label} className={`domo-card domo-delay-${idx + 1}`} style={{ padding: '1.5rem' }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: 'var(--neutral-200)', textAlign: 'center', marginBottom: 16 }}>{label}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {msgs.map((m, i) => <IMessageBubble key={i} text={m.t} isMe={m.me} />)}
                </div>
              </div>
            )
          })}
        </div>
      </Section>

      {/* ───── FEATURES ───── */}
      <Section id="features" bg="light">
        <SectionHeader title="Full Claude Code, From Your Pocket" subtitle="Everything Claude Code can do on your laptop — accessible via a text message." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, maxWidth: 960, margin: '0 auto' }}>
          {[
            { icon: '📁', title: 'File System Access', desc: 'Read, write, edit any file. Create projects, fix bugs, refactor code — all from iMessage.' },
            { icon: '🔌', title: 'MCP Servers', desc: 'Domo, Neo4j Knowledge Graph, Figma, Playwright, Shadcn — all your MCP tools work.' },
            { icon: '⚡', title: 'Git & Deploy', desc: 'Commit, push, deploy to Cloud Run, publish Domo apps. Full CI/CD from your phone.' },
            { icon: '🧠', title: 'Persistent Memory', desc: "Claude Code's memory persists across sessions. Your agent remembers everything." },
            { icon: '🛠️', title: '40+ Slash Commands', desc: 'All existing skills work: /check/kg-health, /content-intel, /session/status.' },
            { icon: '🌐', title: 'Browser Automation', desc: 'Playwright MCP for screenshots, testing, and visual verification of builds.' },
          ].map(({ icon, title, desc }, idx) => {
            const ref = useScrollAnimate()
            return (
              <div ref={ref} key={title} className={`domo-card domo-delay-${idx + 1}`}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{icon}</div>
                <h4 style={{ fontWeight: 700, color: 'var(--neutral-900)', fontSize: 15, marginBottom: 8 }}>{title}</h4>
                <p style={{ fontSize: 13, color: 'var(--neutral-600)', lineHeight: 1.65 }}>{desc}</p>
              </div>
            )
          })}
        </div>
      </Section>

      {/* ───── HEARTBEAT ───── */}
      <Section id="heartbeat" bg="white">
        <SectionHeader title="Proactive, Not Just Reactive" subtitle="Your agent monitors your infrastructure and texts YOU when something needs attention." />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, maxWidth: 960, margin: '0 auto', alignItems: 'start' }}>
          <div>
            <img src="./images/heartbeat.png" alt="Heartbeat" style={{ width: '100%', borderRadius: 12, border: '1px solid var(--neutral-100)', boxShadow: 'var(--shadow-md)', marginBottom: 24 }} />
            <div className="domo-card" style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: 'var(--neutral-200)', textAlign: 'center', marginBottom: 16 }}>MORNING BRIEFING — 7:00 AM</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <IMessageBubble text={"Morning check-in:\n— All services healthy\n— 3 commits pushed yesterday\n— Weekly exec report ran successfully\n— 1 pending task: \"build Linq app\"\nHave a great Tuesday."} isMe={false} />
                <IMessageBubble text="run the pending task" isMe={true} />
                <IMessageBubble text="On it. Starting build now..." isMe={false} />
              </div>
            </div>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, color: 'var(--neutral-900)', fontSize: 17, marginBottom: 20 }}>Scheduled Behaviors</h4>
            <div className="domo-card" style={{ marginBottom: 28 }}>
              {[
                { time: '7:00 AM', job: 'Morning Briefing', desc: 'Overnight alerts, git activity, priorities' },
                { time: 'Every 30m', job: 'Health Heartbeat', desc: 'Check services. Alert only if issues.' },
                { time: '6:00 PM', job: 'EOD Summary', desc: 'Commits, deploys, issues resolved' },
                { time: 'Fri 4 PM', job: 'Weekly Digest', desc: 'Week highlights, deploys, KG changes' },
                { time: 'Midnight', job: 'Ralph Loop', desc: 'Overnight test suites, report in AM' },
              ].map(({ time, job, desc }, i, arr) => (
                <div key={job} style={{ display: 'flex', alignItems: 'flex-start', gap: 16, padding: '14px 0', borderBottom: i < arr.length - 1 ? '1px solid var(--neutral-100)' : 'none' }}>
                  <div style={{ minWidth: 72, fontFamily: 'monospace', fontSize: 12, fontWeight: 700, color: 'var(--accent-orange)' }}>{time}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--neutral-900)' }}>{job}</div>
                    <div style={{ fontSize: 12, color: 'var(--neutral-600)', marginTop: 2 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <h4 style={{ fontWeight: 700, color: 'var(--neutral-900)', fontSize: 17, marginBottom: 20 }}>Reaction Commands</h4>
            <div className="domo-card">
              {[
                { emoji: '❤️', action: 'Heart', result: 'Save to memory' },
                { emoji: '👍', action: 'Thumbs up', result: 'Approve & execute task' },
                { emoji: '👎', action: 'Thumbs down', result: 'Cancel queued task' },
                { emoji: '❓', action: 'Question', result: 'Get more detail' },
                { emoji: '❗', action: 'Exclamation', result: 'Run immediately' },
              ].map(({ emoji, action, result }) => (
                <div key={action} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '10px 0', fontSize: 13 }}>
                  <span style={{ fontSize: 20, width: 28, textAlign: 'center' }}>{emoji}</span>
                  <span style={{ fontWeight: 600, color: 'var(--neutral-900)', width: 96 }}>{action}</span>
                  <span style={{ color: 'var(--neutral-600)' }}>{result}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ───── VS OPENCLAW ───── */}
      <Section id="openclaw" bg="light">
        <SectionHeader title="Why Not Just Use OpenClaw?" subtitle="Claude Code already has everything OpenClaw offers — and more. No third-party risk. Anthropic-maintained." />
        <div className="domo-card" style={{ maxWidth: 960, margin: '0 auto', padding: 0, overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--neutral-100)' }}>
                <th style={{ padding: '16px 20px', textAlign: 'left', fontWeight: 700, color: 'var(--neutral-900)' }}>Feature</th>
                <th style={{ padding: '16px 20px', textAlign: 'left', fontWeight: 700, color: 'var(--neutral-200)' }}>OpenClaw</th>
                <th style={{ padding: '16px 20px', textAlign: 'left', fontWeight: 700, color: 'var(--domo-blue)' }}>Our Build</th>
              </tr>
            </thead>
            <tbody>
              {[
                { f: 'AI Engine', o: 'Claude API (raw)', u: 'Claude Code CLI (full toolchain)', h: true },
                { f: 'File Access', o: 'Basic file tools', u: 'Full filesystem + MCP servers', h: false },
                { f: 'Memory', o: 'Markdown + vector search', u: 'Typed categories + auto-loading', h: true },
                { f: 'Skills', o: '5,400+ community', u: '40+ production-tested', h: false },
                { f: 'Heartbeat', o: '30min check-in', u: 'Customizable launchd cron', h: true },
                { f: 'Multi-Agent', o: 'Gateway routing', u: 'Multiple Linq lines + dirs', h: false },
                { f: 'Security', o: 'Skill exfiltration risk', u: 'HMAC + allowlist + tunnel', h: true },
                { f: 'Maintainer', o: 'Creator left for OpenAI', u: 'Anthropic (Claude Code)', h: false },
                { f: 'Domo Access', o: 'None', u: 'Native MCP (datasets, cards)', h: true },
              ].map(({ f, o, u, h }) => (
                <tr key={f} style={{ background: h ? 'var(--neutral-50)' : '#fff' }}>
                  <td style={{ padding: '12px 20px', fontWeight: 600, color: 'var(--neutral-900)', borderBottom: '1px solid var(--neutral-50)' }}>{f}</td>
                  <td style={{ padding: '12px 20px', color: 'var(--neutral-200)', borderBottom: '1px solid var(--neutral-50)' }}>{o}</td>
                  <td style={{ padding: '12px 20px', color: 'var(--neutral-900)', fontWeight: 500, borderBottom: '1px solid var(--neutral-50)' }}>{u}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ───── SECURITY — COMPREHENSIVE ───── */}
      <Section id="security" bg="white">
        <SectionHeader title="Enterprise Security Model" subtitle="Autonomous mode with layered protections — access control, prompt injection defense, secrets management, and audit logging." />

        {/* Access Control */}
        <div style={{ maxWidth: 900, margin: '0 auto 40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--domo-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🔐</div>
            <h3 style={{ fontWeight: 700, color: 'var(--neutral-900)', fontSize: 18 }}>Access Control</h3>
          </div>
          <div className="domo-card" style={{ padding: 0, overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--neutral-100)' }}>
                  <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 700, color: 'var(--neutral-900)' }}>Control</th>
                  <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 700, color: 'var(--neutral-600)' }}>How It Works</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { c: 'Phone Number Allowlist', d: 'Server rejects any sender not in the approved list. Silent rejection — no error reveals the agent exists.' },
                  { c: 'Group Chat Rejection', d: 'Agent ignores all group messages. Only responds in 1:1 DMs with authorized users.' },
                  { c: 'HMAC Signature Verification', d: 'Every webhook is cryptographically signed with HMAC-SHA256. Replay protection rejects messages older than 5 minutes.' },
                  { c: 'Number Secrecy', d: 'The Linq phone number is never published. No QR codes or public "text us" links. Shared only via direct, secure channels.' },
                  { c: 'Permission Tiers', d: 'Different users get different access levels: autonomous (full), plan-only (proposes before executing), or read-only (queries only).' },
                  { c: 'MDM/Intune Ready', d: 'For team scaling: device management policies can restrict which managed devices have access to the agent number.' },
                ].map(({ c, d }, i) => (
                  <tr key={c} style={{ background: i % 2 ? '#fff' : 'var(--neutral-50)' }}>
                    <td style={{ padding: '12px 20px', fontWeight: 600, color: 'var(--neutral-900)', borderBottom: '1px solid var(--neutral-50)', whiteSpace: 'nowrap' }}>{c}</td>
                    <td style={{ padding: '12px 20px', color: 'var(--neutral-600)', borderBottom: '1px solid var(--neutral-50)' }}>{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Prompt Injection Defense */}
        <div style={{ maxWidth: 900, margin: '0 auto 40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--accent-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🛡️</div>
            <h3 style={{ fontWeight: 700, color: 'var(--neutral-900)', fontSize: 18 }}>Prompt Injection Defense</h3>
          </div>
          <p style={{ color: 'var(--neutral-600)', marginBottom: 20, fontSize: 14, lineHeight: 1.7 }}>
            Prompt injection is OWASP's #1 LLM vulnerability. Since this agent accepts raw text and runs Claude Code with autonomous permissions, five defense layers are applied:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
            {[
              { n: '1', title: 'Access Gate', desc: 'Phone allowlist blocks all untrusted senders before any processing' },
              { n: '2', title: 'Prompt Hardening', desc: 'System prompt explicitly rejects injection patterns and overrides' },
              { n: '3', title: 'Output Filtering', desc: 'Regex-based redaction strips API keys, tokens, and secrets from responses' },
              { n: '4', title: 'Input Scanning', desc: 'Blocklist detects common injection phrases before running Claude' },
              { n: '5', title: 'Least Privilege', desc: 'Scoped working directory, restricted outbound, approved services only' },
            ].map(({ n, title, desc }) => {
              const ref = useScrollAnimate()
              return (
                <div ref={ref} key={n} className={`domo-card domo-delay-${n}`} style={{ textAlign: 'center', padding: '1.25rem' }}>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--accent-orange)', color: '#fff', fontWeight: 700, fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px' }}>{n}</div>
                  <h4 style={{ fontWeight: 700, color: 'var(--neutral-900)', fontSize: 12, marginBottom: 6 }}>{title}</h4>
                  <p style={{ fontSize: 11, color: 'var(--neutral-600)', lineHeight: 1.5 }}>{desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Secrets Management */}
        <div style={{ maxWidth: 900, margin: '0 auto 40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--neutral-900)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🔑</div>
            <h3 style={{ fontWeight: 700, color: 'var(--neutral-900)', fontSize: 18 }}>Secrets Management</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <div className="domo-card">
              <h4 style={{ fontWeight: 700, color: 'var(--domo-blue)', fontSize: 14, marginBottom: 12 }}>Server-Side Secrets</h4>
              <p style={{ fontSize: 12, color: 'var(--neutral-600)', lineHeight: 1.7, marginBottom: 12 }}>
                Linq API token and signing secret are used exclusively by the Flask server. They are <strong>never passed</strong> to the Claude Code subprocess.
              </p>
              <div style={{ background: 'var(--neutral-50)', borderRadius: 6, padding: 12, fontSize: 11, fontFamily: 'monospace', color: 'var(--neutral-600)' }}>
                LINQ_TOKEN → Flask only<br />
                SIGNING_SECRET → Flask only<br />
                ALLOWED_PHONES → Flask only
              </div>
            </div>
            <div className="domo-card">
              <h4 style={{ fontWeight: 700, color: 'var(--accent-orange)', fontSize: 14, marginBottom: 12 }}>Output Sanitization</h4>
              <p style={{ fontSize: 12, color: 'var(--neutral-600)', lineHeight: 1.7, marginBottom: 12 }}>
                Before any response is sent via iMessage, it passes through regex-based redaction that strips API keys, tokens, bearer credentials, and env var values.
              </p>
              <div style={{ background: 'var(--neutral-50)', borderRadius: 6, padding: 12, fontSize: 11, fontFamily: 'monospace', color: 'var(--neutral-600)' }}>
                sk-ant-**** → [REDACTED]<br />
                AIza**** → [REDACTED]<br />
                ghp_**** → [REDACTED]
              </div>
            </div>
          </div>
        </div>

        {/* Exfiltration + Audit */}
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--domo-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🚫</div>
                <h3 style={{ fontWeight: 700, color: 'var(--neutral-900)', fontSize: 16 }}>Exfiltration Protection</h3>
              </div>
              <div className="domo-card">
                {[
                  'System prompt prohibits sending credentials in responses',
                  'Working directory scoped — no access to ~/.ssh or ~/.aws',
                  'Outbound restricted to approved services only',
                  'Git operations restricted to authorized repos',
                  'Optional Docker containerization for hardened isolation',
                ].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '8px 0', borderBottom: '1px solid var(--neutral-50)' }}>
                    <span style={{ color: 'var(--accent-mint)', fontWeight: 700, fontSize: 14, marginTop: 1 }}>&#10003;</span>
                    <span style={{ fontSize: 12, color: 'var(--neutral-600)', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--neutral-900)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>📋</div>
                <h3 style={{ fontWeight: 700, color: 'var(--neutral-900)', fontSize: 16 }}>Audit & Monitoring</h3>
              </div>
              <div className="domo-card">
                {[
                  'Every request logged: sender, timestamp, execution time',
                  'Unauthorized access attempts tracked separately',
                  'Full Claude Code output captured per request',
                  'Anomaly alerting: 5+ rejected senders or 20+ requests triggers alert',
                  'Configurable message retention policy (auto-delete)',
                ].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '8px 0', borderBottom: '1px solid var(--neutral-50)' }}>
                    <span style={{ color: 'var(--domo-blue)', fontWeight: 700, fontSize: 14, marginTop: 1 }}>&#10003;</span>
                    <span style={{ fontSize: 12, color: 'var(--neutral-600)', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ───── STACK + COST ───── */}
      <Section bg="light">
        <SectionHeader title="The Stack" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, maxWidth: 800, margin: '0 auto 24px' }}>
          <div className="domo-card">
            <h4 style={{ fontWeight: 700, color: 'var(--domo-blue)', fontSize: 15, marginBottom: 20 }}>Infrastructure</h4>
            {['Linq Partner API → iMessage at scale', 'Cloudflared Tunnel → Encrypted (free)', 'Flask Server → Webhook handler', 'launchd → Auto-start on boot', 'Mac Mini → 24/7 build machine'].map(item => {
              const [name, desc] = item.split(' → ')
              return (
                <div key={name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid var(--neutral-50)' }}>
                  <span style={{ fontWeight: 600, fontSize: 13, color: 'var(--neutral-900)' }}>{name}</span>
                  <span style={{ fontSize: 12, color: 'var(--neutral-200)' }}>{desc}</span>
                </div>
              )
            })}
          </div>
          <div className="domo-card">
            <h4 style={{ fontWeight: 700, color: 'var(--accent-orange)', fontSize: 15, marginBottom: 20 }}>Claude Code Tools</h4>
            {['Domo MCP → Datasets, cards, workflows', 'Neo4j KG → Product & competitive intel', 'Playwright → Browser automation', 'Figma MCP → Design system', '40+ Skills → Health, deploys, content intel'].map(item => {
              const [name, desc] = item.split(' → ')
              return (
                <div key={name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid var(--neutral-50)' }}>
                  <span style={{ fontWeight: 600, fontSize: 13, color: 'var(--neutral-900)' }}>{name}</span>
                  <span style={{ fontSize: 12, color: 'var(--neutral-200)' }}>{desc}</span>
                </div>
              )
            })}
          </div>
        </div>
        <div className="domo-card" style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <h4 style={{ fontWeight: 700, color: 'var(--neutral-900)', fontSize: 15, marginBottom: 24 }}>Monthly Cost</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {[
              { item: 'CLOUDFLARE', cost: 'Free', color: 'var(--accent-mint)' },
              { item: 'CLAUDE CODE', cost: 'Existing sub', color: 'var(--domo-blue)' },
              { item: 'MAC MINI', cost: '~$5 electric', color: 'var(--domo-blue)' },
              { item: 'LINQ', cost: 'TBD', color: 'var(--accent-orange)' },
            ].map(({ item, cost, color }) => (
              <div key={item}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', color: 'var(--neutral-200)', marginBottom: 6 }}>{item}</div>
                <div style={{ fontSize: 22, fontWeight: 300, color }}>{cost}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ───── DOWNLOAD PLAN ───── */}
      <Section bg="white">
        <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ color: 'var(--neutral-900)', marginBottom: 12 }}>Get the Full Plan</h2>
          <p style={{ color: 'var(--neutral-600)', marginBottom: 28, lineHeight: 1.7 }}>
            The complete implementation plan — architecture, security model, code samples,
            heartbeat system, OpenClaw comparison, and step-by-step build instructions.
          </p>
          <a
            href="./iMessage-Claude-Code-Agent-Plan.md"
            download
            className="domo-btn-primary"
            style={{ fontSize: 16, padding: '1rem 2.5rem' }}
          >
            Download Full Plan (.md)
          </a>
        </div>
      </Section>

      {/* ───── FOOTER (Dark) ───── */}
      <footer style={{ background: 'var(--neutral-900)', padding: '2.5rem 1.5rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ fontSize: 13, color: 'var(--neutral-200)' }}>Built by Jake Heaps — Domo Marketing/Growth</div>
          <div style={{ display: 'flex', gap: 24, fontSize: 12, color: 'var(--neutral-200)' }}>
            <span>Powered by Claude Code + Linq API</span>
            <span>March 2026</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
