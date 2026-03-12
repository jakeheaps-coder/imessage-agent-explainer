import './index.css'

function IMessageBubble({ text, isMe }: { text: string; isMe: boolean }) {
  return (
    <div className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[85%] px-4 py-3 text-sm leading-relaxed whitespace-pre-line ${
          isMe
            ? 'bg-[#007AFF] text-white rounded-[18px] rounded-br-[4px]'
            : 'bg-[#E9E9EB] text-[#3F454D] rounded-[18px] rounded-bl-[4px]'
        }`}
      >
        {text}
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-[#F1F6FA]" style={{ fontFamily: "'Open Sans', -apple-system, BlinkMacSystemFont, sans-serif" }}>

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-[#DCE4EA]">
        <div className="max-w-[1100px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-[8px] flex items-center justify-center bg-[#99CCEE]">
              <span className="text-white font-bold text-sm">CC</span>
            </div>
            <span className="font-bold text-[#3F454D] text-[15px]">Claude Code x iMessage</span>
          </div>
          <div className="hidden md:flex gap-8 text-[13px] font-semibold text-[#68737F]">
            <a href="#how-it-works" className="hover:text-[#3F454D] transition-colors duration-300">How It Works</a>
            <a href="#features" className="hover:text-[#3F454D] transition-colors duration-300">Features</a>
            <a href="#heartbeat" className="hover:text-[#3F454D] transition-colors duration-300">Heartbeat</a>
            <a href="#comparison" className="hover:text-[#3F454D] transition-colors duration-300">vs OpenClaw</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-24 px-6 bg-gradient-to-b from-white to-[#F1F6FA]">
        <div className="max-w-[1100px] mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest mb-8 bg-[#FF9922]/10 text-[#FF9922] border border-[#FF9922]/20">
            ARCHITECTURE OVERVIEW
          </div>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#3F454D] leading-[1.15] mb-6 tracking-[-0.01em]">
            Control <span className="text-[#99CCEE]">Claude Code</span><br />
            from your <span className="text-[#FF9922]">iPhone</span>
          </h1>
          <p className="text-[clamp(0.95rem,1.5vw,1.15rem)] text-[#68737F] leading-relaxed max-w-[640px] mx-auto mb-10 font-light">
            An always-on AI agent you text via iMessage. Full Claude Code capabilities —
            file editing, MCP servers, git, bash, deploys — triggered from a text message.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {['Linq API', 'Claude Code CLI', 'Cloudflared Tunnel', 'Mac Mini'].map(tag => (
              <span key={tag} className="px-4 py-2 rounded-[8px] text-[12px] font-semibold bg-white text-[#3F454D] border border-[#DCE4EA] shadow-[0_1px_3px_rgba(63,69,77,0.08)]">
                {tag}
              </span>
            ))}
          </div>
          <div className="max-w-[800px] mx-auto">
            <img
              src="./images/hero.png"
              alt="iMessage Claude Code Agent"
              className="w-full rounded-[12px] shadow-[0_8px_20px_rgba(63,69,77,0.08),0_4px_8px_rgba(63,69,77,0.04)] border border-[#DCE4EA]"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold text-[#3F454D] mb-4 tracking-[-0.01em]">How It Works</h2>
            <p className="text-[#68737F] max-w-[560px] mx-auto leading-relaxed">
              A Flask server on your Mac receives iMessage webhooks via Linq, runs Claude Code in headless mode, and sends the response back.
            </p>
          </div>

          <div className="max-w-[800px] mx-auto mb-16">
            <img
              src="./images/architecture.png"
              alt="Architecture Diagram"
              className="w-full rounded-[12px] shadow-[0_4px_12px_rgba(63,69,77,0.1)] border border-[#DCE4EA]"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'You Text', desc: 'Send an iMessage to your Linq phone number from anywhere.' },
              { step: '2', title: 'Webhook Fires', desc: 'Linq sends a webhook to your Mac via cloudflared tunnel.' },
              { step: '3', title: 'Claude Code Runs', desc: 'Flask triggers claude -p with full tool access. No prompts.' },
              { step: '4', title: 'Reply via iMessage', desc: 'Output sent back through Linq API as an iMessage reply.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-[16px] font-bold mx-auto mb-4 bg-[#99CCEE] text-white shadow-[0_4px_20px_rgba(153,204,238,0.3)]">
                  {step}
                </div>
                <h3 className="font-bold text-[#3F454D] text-[15px] mb-2">{title}</h3>
                <p className="text-[13px] text-[#68737F] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Key Insight */}
      <section className="py-24 px-6 bg-[#F1F6FA]">
        <div className="max-w-[720px] mx-auto">
          <div className="bg-white rounded-[12px] p-10 border border-[#DCE4EA] shadow-[0_4px_12px_rgba(63,69,77,0.1)]">
            <div className="text-[11px] font-bold tracking-widest text-[#FF9922] mb-5">THE KEY INSIGHT</div>
            <h2 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-light text-[#3F454D] mb-6 leading-snug">
              <code className="font-mono font-bold text-[#99CCEE]">claude -p --dangerously-skip-permissions</code>
            </h2>
            <p className="text-[#68737F] leading-relaxed mb-8">
              Claude Code's headless mode runs the full CLI non-interactively — same CLAUDE.md, same MCP servers,
              same memory, same tools. Combined with the skip-permissions flag, it runs fully autonomous.
              This is what makes phone-controlled Claude Code possible.
            </p>
            <div className="bg-[#3F454D] rounded-[8px] p-5 font-mono text-[13px] leading-relaxed">
              <div className="text-[#B7C1CB]"># What your Flask server runs when you text:</div>
              <div className="mt-3 text-white">
                claude <span className="text-[#99CCEE]">-p</span> <span className="text-[#ADD4C1]">"deploy the knowledge graph"</span> \
              </div>
              <div className="text-white pl-4">
                <span className="text-[#FF9922]">--dangerously-skip-permissions</span> \
              </div>
              <div className="text-white pl-4">
                --output-format <span className="text-[#ADD4C1]">text</span> \
              </div>
              <div className="text-white pl-4">
                --max-turns <span className="text-[#FF9922]">25</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* iMessage Demo */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold text-[#3F454D] mb-4">What It Looks Like</h2>
            <p className="text-[#68737F]">Real interactions — text a command, get results in seconds.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
            {[
              {
                label: 'HEALTH CHECK',
                msgs: [
                  { text: 'check kg health', isMe: true },
                  { text: 'KG API Status:\n/api/products — 142ms\n/api/industries — 89ms\n/api/messaging — 203ms\n/api/documents/search — 312ms\nAll 7 endpoints healthy.', isMe: false },
                ],
              },
              {
                label: 'CODE EDITING',
                msgs: [
                  { text: 'fix the typo in clanker\'s prompt, change recieve to receive', isMe: true },
                  { text: 'Fixed in clanker_5000/system_prompt.md\nChanged "recieve" → "receive" (2 occurrences)\nCommitted to branch fix/clanker-typo', isMe: false },
                ],
              },
              {
                label: 'DEPLOYMENT',
                msgs: [
                  { text: 'deploy the knowledge graph', isMe: true },
                  { text: 'Starting KG deployment...\nBuilt container image\nDeployed to Cloud Run\nHealth check passed. All endpoints responding.', isMe: false },
                ],
              },
              {
                label: 'DATA QUERY',
                msgs: [
                  { text: 'what\'s pipeline revenue this week?', isMe: true },
                  { text: 'Pipeline: $2.3M (up 12% WoW)\nNew opps: 14 (3 enterprise)\nTop deal: Acme Corp $420K (Stage 3)\nForecast: $1.8M weighted', isMe: false },
                ],
              },
            ].map(({ label, msgs }) => (
              <div key={label} className="bg-[#F1F6FA] rounded-[12px] p-6 border border-[#DCE4EA]">
                <div className="text-[10px] font-bold tracking-widest text-[#B7C1CB] text-center mb-5">{label}</div>
                <div className="space-y-3">
                  {msgs.map((m, i) => (
                    <IMessageBubble key={i} text={m.text} isMe={m.isMe} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6 bg-[#F1F6FA]">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold text-[#3F454D] mb-4">Full Claude Code, From Your Pocket</h2>
            <p className="text-[#68737F] max-w-[480px] mx-auto">Everything Claude Code can do on your laptop — accessible via a text message.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-[960px] mx-auto">
            {[
              { icon: '📁', title: 'File System Access', desc: 'Read, write, edit any file. Create projects, fix bugs, refactor code — all from iMessage.' },
              { icon: '🔌', title: 'MCP Servers', desc: 'Domo, Neo4j Knowledge Graph, Figma, Playwright, Shadcn — all your MCP tools work.' },
              { icon: '⚡', title: 'Git & Deploy', desc: 'Commit, push, deploy to Cloud Run, publish Domo apps. Full CI/CD from your phone.' },
              { icon: '🧠', title: 'Persistent Memory', desc: 'Claude Code\'s memory system persists across sessions. Your agent remembers everything.' },
              { icon: '🛠️', title: '40+ Slash Commands', desc: 'All your existing skills work: /check/kg-health, /content-intel, /session/status.' },
              { icon: '🌐', title: 'Browser Automation', desc: 'Playwright MCP for screenshots, testing, and visual verification of builds.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-[12px] p-7 border border-[#DCE4EA] shadow-[0_1px_3px_rgba(63,69,77,0.08)] hover:shadow-[0_4px_12px_rgba(63,69,77,0.1)] transition-shadow duration-300">
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="font-bold text-[#3F454D] text-[15px] mb-2">{title}</h3>
                <p className="text-[13px] text-[#68737F] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heartbeat System */}
      <section id="heartbeat" className="py-24 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold text-[#3F454D] mb-4">Proactive, Not Just Reactive</h2>
            <p className="text-[#68737F] max-w-[520px] mx-auto">
              Your agent monitors your infrastructure and texts YOU when something needs attention.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-[960px] mx-auto items-start">
            {/* Left: Image + Morning Briefing */}
            <div>
              <img src="./images/heartbeat.png" alt="Heartbeat Monitoring" className="w-full rounded-[12px] border border-[#DCE4EA] shadow-[0_4px_12px_rgba(63,69,77,0.1)] mb-8" />
              <div className="bg-[#F1F6FA] rounded-[12px] p-6 border border-[#DCE4EA]">
                <div className="text-[10px] font-bold tracking-widest text-[#B7C1CB] text-center mb-4">MORNING BRIEFING — 7:00 AM</div>
                <div className="space-y-3">
                  <IMessageBubble text={"Morning check-in:\n— All services healthy\n— 3 commits pushed yesterday\n— Weekly exec report ran successfully\n— 1 pending task: \"build Linq app\"\nHave a great Tuesday."} isMe={false} />
                  <IMessageBubble text="run the pending task" isMe={true} />
                  <IMessageBubble text="On it. Starting build now..." isMe={false} />
                </div>
              </div>
            </div>

            {/* Right: Schedule + Reactions */}
            <div>
              <h3 className="font-bold text-[#3F454D] text-[17px] mb-5">Scheduled Behaviors</h3>
              <div className="bg-[#F1F6FA] rounded-[12px] border border-[#DCE4EA] p-6 mb-8">
                {[
                  { time: '7:00 AM', job: 'Morning Briefing', desc: 'Overnight alerts, git activity, priorities' },
                  { time: 'Every 30m', job: 'Health Heartbeat', desc: 'Check services. Alert only if issues.' },
                  { time: '6:00 PM', job: 'EOD Summary', desc: 'Commits, deploys, issues resolved' },
                  { time: 'Fri 4 PM', job: 'Weekly Digest', desc: 'Week highlights, deploys, KG changes' },
                  { time: 'Midnight', job: 'Ralph Loop', desc: 'Overnight test suites, report in AM' },
                ].map(({ time, job, desc }, i, arr) => (
                  <div key={job} className={`flex items-start gap-4 py-4 ${i < arr.length - 1 ? 'border-b border-[#DCE4EA]' : ''}`}>
                    <div className="min-w-[80px] text-[12px] font-mono font-bold text-[#FF9922]">{time}</div>
                    <div>
                      <div className="text-[14px] font-semibold text-[#3F454D]">{job}</div>
                      <div className="text-[12px] text-[#68737F] mt-0.5">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="font-bold text-[#3F454D] text-[17px] mb-5">Reaction Commands</h3>
              <div className="bg-[#F1F6FA] rounded-[12px] border border-[#DCE4EA] p-6">
                {[
                  { emoji: '❤️', action: 'Heart', result: 'Save to memory' },
                  { emoji: '👍', action: 'Thumbs up', result: 'Approve & execute task' },
                  { emoji: '👎', action: 'Thumbs down', result: 'Cancel queued task' },
                  { emoji: '❓', action: 'Question', result: 'Get more detail' },
                  { emoji: '❗', action: 'Exclamation', result: 'Run immediately' },
                ].map(({ emoji, action, result }) => (
                  <div key={action} className="flex items-center gap-4 py-2.5 text-[13px]">
                    <span className="text-xl w-7 text-center">{emoji}</span>
                    <span className="text-[#3F454D] font-semibold w-24">{action}</span>
                    <span className="text-[#68737F]">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section id="comparison" className="py-24 px-6 bg-[#F1F6FA]">
        <div className="max-w-[960px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold text-[#3F454D] mb-4">Why Not Just Use OpenClaw?</h2>
            <p className="text-[#68737F] max-w-[520px] mx-auto">
              Claude Code already has everything OpenClaw offers — and more. No third-party risk. Anthropic-maintained.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-[12px] border border-[#DCE4EA] shadow-[0_1px_3px_rgba(63,69,77,0.08)]">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="border-b-2 border-[#DCE4EA]">
                  <th className="py-4 px-5 text-left font-bold text-[#3F454D]">Feature</th>
                  <th className="py-4 px-5 text-left font-bold text-[#B7C1CB]">OpenClaw</th>
                  <th className="py-4 px-5 text-left font-bold text-[#99CCEE]">Our Build</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { f: 'AI Engine', o: 'Claude API (raw)', u: 'Claude Code CLI (full toolchain)', h: true },
                  { f: 'File Access', o: 'Basic file tools', u: 'Full filesystem + MCP servers', h: false },
                  { f: 'Memory', o: 'Markdown + vector search', u: 'Typed categories + auto-loading', h: true },
                  { f: 'Skills', o: '5,400+ community', u: '40+ production-tested', h: false },
                  { f: 'Heartbeat', o: '30min check-in cycle', u: 'Customizable launchd cron', h: true },
                  { f: 'Multi-Agent', o: 'Gateway routing', u: 'Multiple Linq lines + working dirs', h: false },
                  { f: 'Browser', o: 'CDP automation', u: 'Playwright MCP', h: true },
                  { f: 'Security', o: 'Skill exfiltration risk', u: 'HMAC + phone allowlist + tunnel', h: false },
                  { f: 'Maintainer', o: 'Creator left for OpenAI', u: 'Anthropic (Claude Code)', h: true },
                  { f: 'Domo Access', o: 'None', u: 'Native MCP (datasets, cards, workflows)', h: false },
                ].map(({ f, o, u, h }) => (
                  <tr key={f} className={h ? 'bg-[#F1F6FA]' : ''}>
                    <td className="py-3.5 px-5 font-semibold text-[#3F454D] border-b border-[#F1F6FA]">{f}</td>
                    <td className="py-3.5 px-5 text-[#B7C1CB] border-b border-[#F1F6FA]">{o}</td>
                    <td className="py-3.5 px-5 text-[#3F454D] font-medium border-b border-[#F1F6FA]">{u}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[960px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold text-[#3F454D] mb-4">Security Model</h2>
            <p className="text-[#68737F]">Six layers of protection so autonomous mode isn't actually dangerous.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '🔐', title: 'HMAC Signature Verification', desc: 'Every webhook is cryptographically signed. Only Linq can trigger your server.' },
              { icon: '📱', title: 'Phone Number Allowlist', desc: 'Only your phone number is processed. Everyone else is silently ignored.' },
              { icon: '🔒', title: 'Cloudflared Tunnel', desc: 'Encrypted tunnel, no open ports on your machine. Zero attack surface.' },
              { icon: '🔄', title: 'Max Turns Limit', desc: 'Capped at 25 turns to prevent runaway loops. Timeout at 3 minutes.' },
              { icon: '📂', title: 'Working Directory Scope', desc: 'Scoped to ~/ai_projects/. CLAUDE.md conventions and hooks still apply.' },
              { icon: '🌿', title: 'Git Branch Isolation', desc: 'Auto-creates branches for changes. Never commits directly to main.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-[#F1F6FA] rounded-[12px] p-6 border border-[#DCE4EA]">
                <div className="text-2xl mb-3">{icon}</div>
                <h3 className="font-bold text-[#3F454D] text-[14px] mb-2">{title}</h3>
                <p className="text-[12px] text-[#68737F] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack + Cost */}
      <section className="py-24 px-6 bg-[#F1F6FA]">
        <div className="max-w-[960px] mx-auto">
          <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold text-[#3F454D] text-center mb-12">The Stack</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-[12px] p-7 border border-[#DCE4EA] shadow-[0_1px_3px_rgba(63,69,77,0.08)]">
              <h3 className="font-bold text-[#99CCEE] text-[15px] mb-5">Infrastructure</h3>
              <div className="space-y-4 text-[13px]">
                {[
                  ['Linq Partner API', 'iMessage at scale'],
                  ['Cloudflared Tunnel', 'Encrypted tunnel (free)'],
                  ['Flask Server', 'Webhook handler'],
                  ['launchd', 'Auto-start on boot'],
                  ['Mac Mini', '24/7 build machine'],
                ].map(([name, desc]) => (
                  <div key={name} className="flex justify-between items-center">
                    <span className="font-semibold text-[#3F454D]">{name}</span>
                    <span className="text-[#B7C1CB] text-[12px]">{desc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-[12px] p-7 border border-[#DCE4EA] shadow-[0_1px_3px_rgba(63,69,77,0.08)]">
              <h3 className="font-bold text-[#FF9922] text-[15px] mb-5">Claude Code Tools</h3>
              <div className="space-y-4 text-[13px]">
                {[
                  ['Domo MCP', 'Datasets, cards, workflows'],
                  ['Neo4j KG', 'Product & competitive intel'],
                  ['Playwright', 'Browser automation'],
                  ['Figma MCP', 'Design system'],
                  ['40+ Skills', 'Health, deploys, content intel'],
                ].map(([name, desc]) => (
                  <div key={name} className="flex justify-between items-center">
                    <span className="font-semibold text-[#3F454D]">{name}</span>
                    <span className="text-[#B7C1CB] text-[12px]">{desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[12px] p-7 border border-[#DCE4EA] shadow-[0_1px_3px_rgba(63,69,77,0.08)]">
            <h3 className="font-bold text-[#3F454D] text-[15px] text-center mb-6">Monthly Cost</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { item: 'Cloudflare', cost: 'Free', color: '#ADD4C1' },
                { item: 'Claude Code', cost: 'Existing sub', color: '#99CCEE' },
                { item: 'Mac Mini', cost: '~$5 electric', color: '#99CCEE' },
                { item: 'Linq', cost: 'TBD', color: '#FF9922' },
              ].map(({ item, cost, color }) => (
                <div key={item}>
                  <div className="text-[11px] text-[#B7C1CB] font-semibold mb-1 uppercase tracking-wider">{item}</div>
                  <div className="text-[20px] font-bold" style={{ color }}>{cost}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-white border-t border-[#DCE4EA]">
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[13px] text-[#B7C1CB]">Built by Jake Heaps — Domo Marketing/Growth</div>
          <div className="flex gap-6 text-[12px] text-[#B7C1CB]">
            <span>Powered by Claude Code + Linq API</span>
            <span>March 2026</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
