import './index.css'

const DOMO_BLUE = '#99CCEE'
const DOMO_ORANGE = '#FF9922'

function IMessageBubble({ text, isMe, className = '' }: { text: string; isMe: boolean; className?: string }) {
  return (
    <div className={`flex ${isMe ? 'justify-end' : 'justify-start'} ${className}`}>
      <div
        className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
          isMe
            ? 'bg-[#007AFF] text-white rounded-br-md'
            : 'bg-[#2A2A2E] text-white rounded-bl-md'
        }`}
      >
        {text}
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-[#162232] border border-[#1E3448] rounded-xl p-6 hover:border-[#99CCEE]/30 transition-all duration-300">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-[#F0F4F8] mb-2">{title}</h3>
      <p className="text-sm text-[#8BA4BD] leading-relaxed">{description}</p>
    </div>
  )
}

function ComparisonRow({ feature, openclaw, ours, highlight = false }: { feature: string; openclaw: string; ours: string; highlight?: boolean }) {
  return (
    <tr className={highlight ? 'bg-[#99CCEE]/5' : ''}>
      <td className="py-3 px-4 text-sm font-semibold text-[#F0F4F8] border-b border-[#1E3448]">{feature}</td>
      <td className="py-3 px-4 text-sm text-[#8BA4BD] border-b border-[#1E3448]">{openclaw}</td>
      <td className="py-3 px-4 text-sm text-[#99CCEE] border-b border-[#1E3448] font-medium">{ours}</td>
    </tr>
  )
}

function ScheduleRow({ time, job, description }: { time: string; job: string; description: string }) {
  return (
    <div className="flex items-start gap-4 py-4 border-b border-[#1E3448] last:border-0">
      <div className="min-w-[100px] text-sm font-mono" style={{ color: DOMO_ORANGE }}>{time}</div>
      <div>
        <div className="text-sm font-semibold text-[#F0F4F8]">{job}</div>
        <div className="text-xs text-[#8BA4BD] mt-0.5">{description}</div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-[#0F1923]/90 backdrop-blur-md border-b border-[#1E3448]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-lg" style={{ background: DOMO_BLUE }}>
              <span className="text-[#0F1923] font-bold text-sm">CC</span>
            </div>
            <span className="font-bold text-[#F0F4F8]">Claude Code x iMessage</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm text-[#8BA4BD]">
            <a href="#how-it-works" className="hover:text-[#99CCEE] transition-colors">How It Works</a>
            <a href="#features" className="hover:text-[#99CCEE] transition-colors">Features</a>
            <a href="#heartbeat" className="hover:text-[#99CCEE] transition-colors">Heartbeat</a>
            <a href="#comparison" className="hover:text-[#99CCEE] transition-colors">vs OpenClaw</a>
            <a href="#security" className="hover:text-[#99CCEE] transition-colors">Security</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-6 border" style={{ color: DOMO_ORANGE, borderColor: `${DOMO_ORANGE}33` }}>
              ARCHITECTURE OVERVIEW
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Control <span style={{ color: DOMO_BLUE }}>Claude Code</span> from your{' '}
              <span style={{ color: DOMO_ORANGE }}>iPhone</span>
            </h1>
            <p className="text-lg text-[#8BA4BD] leading-relaxed mb-8 font-light">
              An always-on AI agent you text via iMessage. Full Claude Code capabilities — file editing,
              MCP servers, git, bash, deploys — triggered from a text message. Like OpenClaw, but built
              on Claude Code with zero third-party risk.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#162232] border border-[#1E3448]" style={{ color: DOMO_BLUE }}>Linq API</span>
              <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#162232] border border-[#1E3448]" style={{ color: DOMO_BLUE }}>Claude Code CLI</span>
              <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#162232] border border-[#1E3448]" style={{ color: DOMO_BLUE }}>Cloudflared Tunnel</span>
              <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#162232] border border-[#1E3448]" style={{ color: DOMO_BLUE }}>Mac Mini</span>
            </div>
          </div>
          <div className="relative">
            <img src="./images/hero.png" alt="iMessage Claude Code Agent" className="rounded-2xl border border-[#1E3448] shadow-2xl w-full" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full opacity-20 blur-3xl" style={{ background: DOMO_BLUE }} />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 bg-[#0B1420]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-center text-[#8BA4BD] mb-16 max-w-2xl mx-auto">
            A Flask server on your Mac receives iMessage webhooks via Linq, runs Claude Code in headless mode, and sends the response back as an iMessage.
          </p>

          {/* Architecture diagram */}
          <img src="./images/architecture.png" alt="Architecture Diagram" className="rounded-2xl border border-[#1E3448] shadow-xl mb-16 w-full" />

          {/* Step by step */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'You Text', desc: 'Send an iMessage to your Linq phone number from anywhere.' },
              { step: '2', title: 'Webhook Fires', desc: 'Linq receives the iMessage and sends a webhook to your Mac via cloudflared tunnel.' },
              { step: '3', title: 'Claude Code Runs', desc: 'Flask server triggers claude -p with your message. Full tool access, no permission prompts.' },
              { step: '4', title: 'Reply via iMessage', desc: 'Claude Code output is sent back through Linq API as an iMessage reply.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4" style={{ background: DOMO_BLUE, color: '#0F1923' }}>
                  {step}
                </div>
                <h3 className="font-semibold text-[#F0F4F8] mb-2">{title}</h3>
                <p className="text-sm text-[#8BA4BD]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Key Insight */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#162232] border border-[#1E3448] rounded-2xl p-8 md:p-12">
            <div className="text-sm font-semibold mb-4" style={{ color: DOMO_ORANGE }}>THE KEY INSIGHT</div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              <code className="font-mono text-xl md:text-2xl" style={{ color: DOMO_BLUE }}>claude -p --dangerously-skip-permissions</code>
            </h2>
            <p className="text-[#8BA4BD] leading-relaxed mb-6">
              Claude Code's headless mode (<code className="text-[#F0F4F8] bg-[#0F1923] px-2 py-0.5 rounded text-xs">-p</code>) runs
              the full CLI non-interactively — same CLAUDE.md, same MCP servers, same memory, same tools. Combined with{' '}
              <code className="text-[#F0F4F8] bg-[#0F1923] px-2 py-0.5 rounded text-xs">--dangerously-skip-permissions</code>,
              it runs fully autonomous with zero approval prompts. This is what makes phone-controlled Claude Code possible.
            </p>
            <div className="bg-[#0F1923] rounded-xl p-4 font-mono text-sm">
              <div className="text-[#5A7A96]"># What your Flask server runs when you text it:</div>
              <div className="mt-2">
                <span className="text-[#8BA4BD]">claude</span>{' '}
                <span style={{ color: DOMO_BLUE }}>-p</span>{' '}
                <span className="text-green-400">"deploy the knowledge graph"</span>{' '}
                <span className="text-[#5A7A96]">\</span>
              </div>
              <div className="ml-4">
                <span style={{ color: DOMO_ORANGE }}>--dangerously-skip-permissions</span>{' '}
                <span className="text-[#5A7A96]">\</span>
              </div>
              <div className="ml-4">
                <span className="text-[#8BA4BD]">--output-format</span> <span className="text-green-400">text</span>{' '}
                <span className="text-[#5A7A96]">\</span>
              </div>
              <div className="ml-4">
                <span className="text-[#8BA4BD]">--max-turns</span> <span style={{ color: DOMO_ORANGE }}>25</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* iMessage Demo */}
      <section className="py-20 px-6 bg-[#0B1420]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">What It Looks Like</h2>
          <p className="text-center text-[#8BA4BD] mb-12">Real interactions — text a command, get results in seconds.</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Conversation 1 */}
            <div className="bg-[#1C1C1E] rounded-2xl p-6 border border-[#2A2A2E]">
              <div className="text-xs text-[#8BA4BD] text-center mb-4 font-medium">HEALTH CHECK</div>
              <div className="space-y-3">
                <IMessageBubble text="check kg health" isMe={true} />
                <IMessageBubble
                  text={`KG API Status:\n/api/products - 142ms\n/api/industries - 89ms\n/api/messaging - 203ms\n/api/documents/search - 312ms\nAll 7 endpoints healthy.`}
                  isMe={false}
                />
              </div>
            </div>

            {/* Conversation 2 */}
            <div className="bg-[#1C1C1E] rounded-2xl p-6 border border-[#2A2A2E]">
              <div className="text-xs text-[#8BA4BD] text-center mb-4 font-medium">CODE EDITING</div>
              <div className="space-y-3">
                <IMessageBubble text="fix the typo in clanker's prompt, change recieve to receive" isMe={true} />
                <IMessageBubble
                  text={`Fixed in clanker_5000/system_prompt.md\nChanged "recieve" to "receive" (2 occurrences)\nCommitted to branch fix/clanker-typo`}
                  isMe={false}
                />
              </div>
            </div>

            {/* Conversation 3 */}
            <div className="bg-[#1C1C1E] rounded-2xl p-6 border border-[#2A2A2E]">
              <div className="text-xs text-[#8BA4BD] text-center mb-4 font-medium">DEPLOYMENT</div>
              <div className="space-y-3">
                <IMessageBubble text="deploy the knowledge graph" isMe={true} />
                <IMessageBubble
                  text={`Starting KG deployment...\nBuilt container: gcr.io/domo-marketing/knowledge-graph-api\nDeployed to Cloud Run\nHealth check passed. All endpoints responding.`}
                  isMe={false}
                />
              </div>
            </div>

            {/* Conversation 4 */}
            <div className="bg-[#1C1C1E] rounded-2xl p-6 border border-[#2A2A2E]">
              <div className="text-xs text-[#8BA4BD] text-center mb-4 font-medium">DATA QUERY</div>
              <div className="space-y-3">
                <IMessageBubble text="what's pipeline revenue this week?" isMe={true} />
                <IMessageBubble
                  text={`Pipeline: $2.3M (up 12% WoW)\nNew opps: 14 (3 enterprise)\nTop deal: Acme Corp $420K (Stage 3)\nForecast: $1.8M weighted`}
                  isMe={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Full Claude Code, From Your Pocket</h2>
          <p className="text-center text-[#8BA4BD] mb-12 max-w-2xl mx-auto">
            Everything Claude Code can do on your laptop — accessible via a text message.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon="📁"
              title="File System Access"
              description="Read, write, edit any file. Create projects, fix bugs, refactor code — all from iMessage."
            />
            <FeatureCard
              icon="🔌"
              title="MCP Servers"
              description="Domo, Neo4j Knowledge Graph, Figma, Playwright, Shadcn — all your MCP tools work."
            />
            <FeatureCard
              icon="⚡"
              title="Git & Deploy"
              description="Commit, push, deploy to Cloud Run, publish Domo apps. Full CI/CD from your phone."
            />
            <FeatureCard
              icon="🧠"
              title="Persistent Memory"
              description="Claude Code's memory system persists across sessions. Your agent remembers everything."
            />
            <FeatureCard
              icon="🛠️"
              title="40+ Slash Commands"
              description="All your existing skills work: /check/kg-health, /content-intel, /session/status, and more."
            />
            <FeatureCard
              icon="🌐"
              title="Browser Automation"
              description="Playwright MCP for screenshots, testing, and visual verification of your builds."
            />
          </div>
        </div>
      </section>

      {/* Heartbeat System */}
      <section id="heartbeat" className="py-20 px-6 bg-[#0B1420]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Proactive, Not Just Reactive</h2>
          <p className="text-center text-[#8BA4BD] mb-12 max-w-2xl mx-auto">
            Your agent doesn't just wait for you to text. It monitors your infrastructure and texts YOU when something needs attention.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <img src="./images/heartbeat.png" alt="Heartbeat Monitoring" className="rounded-2xl border border-[#1E3448] shadow-xl w-full mb-8" />

              {/* Morning briefing example */}
              <div className="bg-[#1C1C1E] rounded-2xl p-6 border border-[#2A2A2E]">
                <div className="text-xs text-[#8BA4BD] text-center mb-4 font-medium">MORNING BRIEFING (7:00 AM)</div>
                <div className="space-y-3">
                  <IMessageBubble
                    text={`Morning check-in:\n- All services healthy\n- 3 commits pushed yesterday\n- Weekly exec report ran successfully\n- 1 pending task: "build Linq app"\nHave a great Tuesday.`}
                    isMe={false}
                  />
                  <IMessageBubble text="run the pending task" isMe={true} />
                  <IMessageBubble text="On it. Starting build now..." isMe={false} />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6" style={{ color: DOMO_BLUE }}>Scheduled Behaviors</h3>

              <div className="bg-[#162232] rounded-xl border border-[#1E3448] p-6">
                <ScheduleRow time="7:00 AM" job="Morning Briefing" description="Overnight alerts, git activity, calendar, priorities" />
                <ScheduleRow time="Every 30m" job="Health Heartbeat" description="Check services silently. Alert only if issues." />
                <ScheduleRow time="6:00 PM" job="EOD Summary" description="Today's commits, deploys, issues resolved" />
                <ScheduleRow time="Fri 4:00 PM" job="Weekly Digest" description="Week's highlights, deploys, KG changes" />
                <ScheduleRow time="Midnight" job="Ralph Loop" description="Run overnight test suites, report in morning" />
              </div>

              <h3 className="text-xl font-bold mt-8 mb-4" style={{ color: DOMO_BLUE }}>Reaction Commands</h3>
              <div className="bg-[#162232] rounded-xl border border-[#1E3448] p-6 space-y-3">
                {[
                  { emoji: '❤️', action: 'Heart', result: 'Save message to memory' },
                  { emoji: '👍', action: 'Thumbs up', result: 'Approve & execute queued task' },
                  { emoji: '👎', action: 'Thumbs down', result: 'Cancel queued task' },
                  { emoji: '❓', action: 'Question', result: 'Get more detail' },
                  { emoji: '❗', action: 'Exclamation', result: 'Escalate / run immediately' },
                ].map(({ emoji, action, result }) => (
                  <div key={action} className="flex items-center gap-3 text-sm">
                    <span className="text-xl">{emoji}</span>
                    <span className="text-[#F0F4F8] font-medium w-28">{action}</span>
                    <span className="text-[#8BA4BD]">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section id="comparison" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Why Not Just Use OpenClaw?</h2>
          <p className="text-center text-[#8BA4BD] mb-12 max-w-2xl mx-auto">
            OpenClaw is a great concept, but Claude Code already has everything it offers — and more.
            No third-party framework. No security risks. Anthropic-maintained.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-[#1E3448]">
                  <th className="py-4 px-4 text-left text-sm font-bold text-[#F0F4F8] w-1/3">Feature</th>
                  <th className="py-4 px-4 text-left text-sm font-bold text-[#5A7A96] w-1/3">OpenClaw</th>
                  <th className="py-4 px-4 text-left text-sm font-bold w-1/3" style={{ color: DOMO_BLUE }}>Our Build</th>
                </tr>
              </thead>
              <tbody>
                <ComparisonRow feature="Messaging" openclaw="22+ channels (WhatsApp, Telegram, etc.)" ours="iMessage via Linq API" />
                <ComparisonRow feature="AI Engine" openclaw="Claude API (raw)" ours="Claude Code CLI (full toolchain)" highlight />
                <ComparisonRow feature="File Access" openclaw="Basic file tools" ours="Full filesystem + MCP servers" />
                <ComparisonRow feature="Memory" openclaw="Markdown + vector search" ours="Typed categories + auto-loading" highlight />
                <ComparisonRow feature="Skills" openclaw="5,400+ community skills" ours="40+ production-tested skills" />
                <ComparisonRow feature="Heartbeat" openclaw="30min check-in cycle" ours="Customizable launchd cron" highlight />
                <ComparisonRow feature="Identity" openclaw="SOUL.md personality" ours="CLAUDE.md + agents + memory" />
                <ComparisonRow feature="Multi-Agent" openclaw="Gateway routing" ours="Multiple Linq lines + working dirs" highlight />
                <ComparisonRow feature="Browser" openclaw="CDP automation" ours="Playwright MCP" />
                <ComparisonRow feature="Security" openclaw="Skill exfiltration risk (Cisco)" ours="HMAC + phone allowlist + tunnel" highlight />
                <ComparisonRow feature="Maintainer" openclaw="Creator left for OpenAI" ours="Anthropic (Claude Code updates)" />
                <ComparisonRow feature="Domo Access" openclaw="None" ours="Native MCP (datasets, cards, workflows)" highlight />
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Security */}
      <section id="security" className="py-20 px-6 bg-[#0B1420]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Security Model</h2>
          <p className="text-center text-[#8BA4BD] mb-12">
            Six layers of protection so <code className="text-[#F0F4F8] bg-[#162232] px-2 py-0.5 rounded text-xs">--dangerously-skip-permissions</code> isn't actually dangerous.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '🔐', title: 'HMAC Signature Verification', desc: 'Every webhook is cryptographically signed. Only Linq can trigger your server.' },
              { icon: '📱', title: 'Phone Number Allowlist', desc: 'Only your phone number is processed. Everyone else is silently ignored.' },
              { icon: '🔒', title: 'Cloudflared Tunnel', desc: 'Encrypted tunnel, no open ports on your machine. Zero attack surface.' },
              { icon: '🔄', title: 'Max Turns Limit', desc: 'Capped at 25 turns to prevent runaway loops. Timeout at 3 minutes.' },
              { icon: '📂', title: 'Working Directory Scope', desc: 'Scoped to ~/ai_projects/. CLAUDE.md conventions and hooks still apply.' },
              { icon: '🌿', title: 'Git Branch Isolation', desc: 'Auto-creates branches for changes. Never commits directly to main.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-[#162232] border border-[#1E3448] rounded-xl p-6">
                <div className="text-2xl mb-3">{icon}</div>
                <h3 className="text-sm font-bold text-[#F0F4F8] mb-2">{title}</h3>
                <p className="text-xs text-[#8BA4BD] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Stack */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">The Stack</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#162232] border border-[#1E3448] rounded-xl p-6">
              <h3 className="font-bold mb-4" style={{ color: DOMO_BLUE }}>Infrastructure</h3>
              <div className="space-y-3 text-sm">
                {[
                  ['Linq Partner API', 'iMessage send/receive at scale'],
                  ['Cloudflared Tunnel', 'Encrypted tunnel to Mac (free)'],
                  ['Flask Server', 'Webhook handler on localhost:8787'],
                  ['launchd', 'Auto-start on boot, keep alive'],
                  ['Mac Mini', '24/7 always-on build machine'],
                ].map(([name, desc]) => (
                  <div key={name} className="flex justify-between items-center">
                    <span className="text-[#F0F4F8] font-medium">{name}</span>
                    <span className="text-[#5A7A96] text-xs">{desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#162232] border border-[#1E3448] rounded-xl p-6">
              <h3 className="font-bold mb-4" style={{ color: DOMO_ORANGE }}>Claude Code Tools</h3>
              <div className="space-y-3 text-sm">
                {[
                  ['Domo MCP', 'Datasets, cards, workflows, search'],
                  ['Neo4j KG', 'Product intel, competitive data, messaging'],
                  ['Playwright', 'Browser automation + screenshots'],
                  ['Figma MCP', 'Design system integration'],
                  ['40+ Skills', 'Health checks, deploys, content intel'],
                ].map(([name, desc]) => (
                  <div key={name} className="flex justify-between items-center">
                    <span className="text-[#F0F4F8] font-medium">{name}</span>
                    <span className="text-[#5A7A96] text-xs">{desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cost */}
          <div className="mt-8 bg-[#162232] border border-[#1E3448] rounded-xl p-6">
            <h3 className="font-bold mb-4 text-center" style={{ color: DOMO_BLUE }}>Monthly Cost</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                ['Cloudflare', 'Free'],
                ['Claude Code', 'Existing sub'],
                ['Mac Mini', '~$5 electric'],
                ['Linq', 'TBD'],
              ].map(([item, cost]) => (
                <div key={item}>
                  <div className="text-xs text-[#5A7A96] mb-1">{item}</div>
                  <div className="text-lg font-bold" style={{ color: cost === 'Free' ? '#4ADE80' : DOMO_BLUE }}>{cost}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#1E3448]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-[#5A7A96]">
            Built by Jake Heaps — Domo Marketing/Growth
          </div>
          <div className="flex gap-6 text-xs text-[#5A7A96]">
            <span>Powered by Claude Code + Linq API</span>
            <span>March 2026</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
