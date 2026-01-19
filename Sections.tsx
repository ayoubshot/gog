import React, { useState, useEffect } from 'react';

const CONTRACT_ADDRESS = "0xC1ECbb6fB0d6CcA5a83be9fe7AB53fA3AcDc1F7a";
const TWITTER_URL = "https://x.com/GoatOnGas";
const TELEGRAM_URL = "https://t.me/GOG_Announcements";
const POLYGON_SCAN_URL = "https://polygonscan.com/token/0xC1ECbb6fB0d6CcA5a83be9fe7AB53fA3AcDc1F7a";

export const Header: React.FC = () => (
  <header className="fixed top-0 left-0 right-0 z-[100] px-4 py-4">
    <div className="container mx-auto max-w-6xl">
      <div className="glass rounded-2xl px-6 py-4 flex justify-between items-center shadow-2xl border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center overflow-hidden">
            <img src="https://i.postimg.cc/dV84mS5q/file-000000007748722f8852ac646b5b901c.png" alt="G" className="w-8 h-8 object-contain" />
          </div>
          <span className="text-xl font-heading font-black tracking-tight hidden sm:block">GOAT ON GAS</span>
        </div>
        <nav className="flex items-center gap-3 sm:gap-4">
          <a href={TWITTER_URL} target="_blank" rel="noreferrer" className="px-5 py-2 btn-primary rounded-xl text-xs font-bold uppercase tracking-wider shadow-lg">TWITTER</a>
          <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="px-5 py-2 btn-primary rounded-xl text-xs font-bold uppercase tracking-wider shadow-lg">TELEGRAM</a>
        </nav>
      </div>
    </div>
  </header>
);

export const Ticker: React.FC = () => (
  <div className="bg-purple-600/10 border-y border-white/5 py-3 overflow-hidden whitespace-nowrap z-40 relative">
    <div className="ticker-animate inline-block">
      {[...Array(10)].map((_, i) => (
        <span key={i} className="mx-8 text-xs font-bold tracking-[0.2em] text-purple-400/80 uppercase">
          $GOG • LOW FEES • HIGH GAINS • NO GAS WARS • POLYGON NATIVE • CEO APPROVED • 
        </span>
      ))}
    </div>
  </div>
);

export const Hero: React.FC = () => (
  <section className="relative pt-40 pb-20 overflow-hidden">
    <div className="container mx-auto px-4 text-center relative z-10">
      <div className="inline-block px-4 py-1.5 glass rounded-full border-purple-500/20 text-purple-400 text-xs font-bold tracking-widest uppercase mb-8">
        Established on Polygon • Low Fee King
      </div>
      
      <h1 className="fluid-h1 font-heading font-black mb-8 leading-none">
        THE <span className="gradient-text">G.O.A.T</span> IS <br />
        TAKING OVER.
      </h1>

      <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 font-medium mb-12 leading-relaxed px-4">
        Ethereum is for donors. Polygon is for owners. <span className="text-white">$GOG</span> is the elite operation for those who stopped paying for gas and started buying the dip.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-20 px-4">
        <a href={TWITTER_URL} target="_blank" rel="noreferrer" className="w-full sm:w-auto px-10 py-5 btn-primary text-white font-black rounded-2xl text-lg shadow-2xl flex items-center justify-center gap-3">
          Follow the Boss
        </a>
      </div>

      <div className="relative mx-auto max-w-4xl group perspective">
        <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-[3rem] blur-3xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
        <div className="relative bg-[#0a0a0c] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)]">
          <img 
            src="https://i.postimg.cc/dV84mS5q/file-000000007748722f8852ac646b5b901c.png" 
            alt="Goat On Gas CEO" 
            className="w-full h-auto opacity-90 group-hover:scale-105 transition-transform duration-[2s] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent"></div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full text-center">
             <p className="text-slate-500 font-mono text-xs tracking-widest uppercase italic">"Don't talk to me about gas fees."</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const About: React.FC = () => (
  <section id="about" className="py-32 relative">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
        <div className="space-y-8">
          <h2 className="fluid-h2 font-heading font-black leading-tight">
            THE CEO <span className="text-purple-500">MANIFESTO</span>
          </h2>
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
            <p className="border-l-4 border-purple-600 pl-6 py-2 bg-purple-600/5 rounded-r-xl">
              "Look around. You're in a desert of high-fee chains and broken promises. I built <span className="text-white font-bold">$GOG</span> to be the oasis. We don't care about 'vibes'. We care about dominance."
            </p>
            <p>
              The Goat moved to Polygon for one reason: efficiency. Why pay $100 to move $10? That's not trading, that's donating. $GOG is for the smart money that knows how to utilize L2 speed with L1 attitude.
            </p>
            <p>
              We're the top of the food chain. We're on the gas, but we aren't paying for it.
            </p>
          </div>
          <div className="pt-6 flex flex-wrap gap-4">
             <div className="px-6 py-4 glass rounded-2xl border-white/5 flex-1 min-w-[200px]">
                <div className="text-purple-500 font-black text-3xl mb-1">0%</div>
                <div className="text-xs font-bold text-slate-500 uppercase">Buy/Sell Tax</div>
             </div>
             <div className="px-6 py-4 glass rounded-2xl border-white/5 flex-1 min-w-[200px]">
                <div className="text-blue-500 font-black text-3xl mb-1">∞</div>
                <div className="text-xs font-bold text-slate-500 uppercase">Aura Level</div>
             </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: "Efficiency", text: "Polygon ensures every cent goes to your bag, not the miners." },
            { title: "Dominance", text: "We aren't here to play nice. We're here to be the G.O.A.T." },
            { title: "Liquidity", text: "Deep pools. Hard locks. No room for jeets." },
            { title: "Network", text: "The most exclusive herd on the blockchain." }
          ].map((item, i) => (
            <div key={i} className="p-8 glass rounded-3xl border-white/5 group hover:border-purple-500/50 transition-all">
              <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const Tokenomics: React.FC = () => {
  const data = [
    { label: "Community Ecosystem", val: 50, color: "from-purple-600 to-purple-400" },
    { label: "Liquidity Provision", val: 25, color: "from-blue-600 to-blue-400" },
    { label: "Marketing & Ops", val: 15, color: "from-indigo-600 to-indigo-400" },
    { label: "Advisory/Team", val: 10, color: "from-slate-600 to-slate-400" },
  ];

  return (
    <section id="tokenomics" className="py-32 bg-purple-900/5 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="fluid-h2 font-heading font-black mb-6">THE MATH <span className="text-purple-500">WORKS.</span></h2>
          <p className="text-slate-400 max-w-xl mx-auto">No minting. No rugging. Just pure economic engineering for the herd.</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            {data.map((item, i) => (
              <div key={i} className="p-6 glass rounded-2xl border-white/5 relative overflow-hidden group">
                 <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${item.color}`}></div>
                 <div className="flex justify-between items-center mb-4">
                   <span className="font-bold text-lg text-slate-200">{item.label}</span>
                   <span className="text-2xl font-black text-white">{item.val}%</span>
                 </div>
                 <div className="h-2 w-full bg-white/5 rounded-full">
                    <div className={`h-full rounded-full bg-gradient-to-r ${item.color}`} style={{ width: `${item.val}%` }}></div>
                 </div>
              </div>
            ))}
          </div>
          <div className="relative group">
             <div className="absolute -inset-10 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-purple-600/20 transition duration-1000"></div>
             <div className="glass p-8 rounded-[3rem] border-white/10 text-center relative z-10 shadow-2xl">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl mx-auto mb-8 flex items-center justify-center transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                  <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <h3 className="text-4xl font-black mb-2">1,000,000,000</h3>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Total Fixed Supply</p>
                <div className="mt-8 pt-8 border-t border-white/5">
                   <p className="text-slate-400 italic">"Scarcity is a tool. I use it well."</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const VerifiedContract: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <section id="contract" className="py-32">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="fluid-h2 font-heading font-black mb-12">VERIFIED <span className="text-blue-500">ASSET.</span></h2>
        
        <div className="glass p-10 rounded-[3rem] border-blue-500/20 shadow-[0_0_50px_rgba(59,130,246,0.1)] mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.9L10 .155 17.834 4.9a2 2 0 011.166 1.791v4.618c0 .88-.66 1.631-1.53 1.734l-7.47.886-7.47-.886A1.75 1.75 0 011 11.309V6.691a2 2 0 011.166-1.791z" clipRule="evenodd" /></svg>
          </div>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-4">Official Smart Contract (Polygon)</p>
          <div 
            onClick={handleCopy}
            className="group cursor-pointer mb-8 transition-all"
          >
            <code className="block text-xl sm:text-2xl font-mono text-white break-all p-6 bg-black/40 rounded-2xl border border-white/5 group-hover:border-purple-500/50 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]">
              {CONTRACT_ADDRESS}
            </code>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={handleCopy}
              className={`px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2 ${copied ? 'bg-emerald-600 text-white' : 'bg-white text-black hover:bg-slate-200'}`}
            >
              {copied ? 'Copied Successfully' : 'Copy Address'}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
            </button>
            <a href={POLYGON_SCAN_URL} target="_blank" rel="noreferrer" className="px-8 py-4 glass border-white/10 text-white font-bold rounded-xl hover:bg-white/5 flex items-center gap-2">
              View on Explorer
            </a>
          </div>
        </div>
        
        <div className="p-8 bg-red-950/20 border border-red-500/20 rounded-3xl max-w-2xl mx-auto">
          <div className="flex gap-4 items-start text-left">
            <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
               <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            </div>
            <div>
              <h4 className="text-red-400 font-black uppercase text-sm mb-1 tracking-wider">Scam Prevention Protocol</h4>
              <p className="text-red-300/70 text-sm">We never DM you. We never ask for seed phrases. We are the G.O.A.T.s, we don't beg for your bags.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Roadmap: React.FC = () => (
  <section className="py-32 bg-black">
    <div className="container mx-auto px-4">
      <div className="text-center mb-24">
        <h2 className="fluid-h2 font-heading font-black mb-6">THE <span className="text-purple-500">BLUEPRINT.</span></h2>
        <p className="text-slate-400">Phase by phase, we dominate the Polygon network.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            phase: "01",
            title: "Genesis Shift",
            description: "Establishing the VIP herd and securing the initial infrastructure on Polygon.",
            items: ["Stealth Contract Deployment", "VIP Telegram Access Only", "Community Alpha Group"]
          },
          {
            phase: "02",
            title: "Liquidity Lock",
            description: "Opening the gates for the masses while maintaining absolute security.",
            items: ["DEX Listing", "Burn Events", "Tier 1 Marketing Campaign"]
          },
          {
            phase: "03",
            title: "Global Empire",
            description: "Cross-chain influence and real-world utility integrations.",
            items: ["CEX Listings", "Goat Protocol V1", "Market Cap Domination"]
          }
        ].map((step, i) => (
          <div key={i} className="p-10 glass rounded-[2.5rem] border-white/5 relative group hover:border-purple-500/30 transition-all">
            <div className="text-6xl font-black text-white/5 absolute top-6 right-8 group-hover:text-purple-500/10 transition-colors">
              {step.phase}
            </div>
            <h3 className="text-2xl font-black mb-6 text-white">{step.title}</h3>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed">{step.description}</p>
            <ul className="space-y-4">
              {step.items.map((item, j) => (
                <li key={j} className="flex items-center gap-3 text-slate-200 text-sm font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="text-center mt-20 text-slate-500 font-bold italic">
        "I don't follow roadmaps. I draw them."
      </p>
    </div>
  </section>
);

export const FAQ: React.FC = () => (
  <section className="py-32 relative overflow-hidden">
    <div className="container mx-auto px-4 max-w-3xl relative z-10">
      <h2 className="fluid-h2 font-heading font-black mb-16 text-center">INQUIRIES.</h2>
      <div className="space-y-4">
        {[
          { q: "Why Polygon?", a: "Because I'm not here to pay for mining rigs in Siberia. I'm here to build wealth. Polygon is fast, cheap, and built for winners." },
          { q: "When Presale?", a: "Presale is coming soon.\nWe’re finishing the final setup + community filtering.\nVIP rules will be announced before launch.\nStay locked in." },
          { q: "Is there an Airdrop?", a: "Yes.\nAirdrop is LIVE / ongoing.\nFollow us + enable notifications + join Telegram.\nMore tasks = more rewards.\nNo begging. Only grinding." },
          { q: "Why $GOG?", a: "Because gas wars are trash.\n$GOG is the meme rebellion on Polygon:\nfast moves, low fees, strong community.\nThis is not for paper hands." },
          { q: "How do I participate?", a: "1) Follow on X (Twitter)\n2) Turn on notifications\n3) Join Telegram\n4) Do the tasks\nThen you’ll be eligible for rewards + presale access." },
          { q: "Contract address?", a: "0xC1ECbb6fB0d6CcA5a83be9fe7AB53fA3AcDc1F7a" },
          { q: "Is this financial advice?", a: "No.\nThis is meme territory.\nDYOR, don’t risk rent money." }
        ].map((item, i) => (
          <details key={i} className="group glass border-white/5 rounded-3xl overflow-hidden">
            <summary className="p-8 cursor-pointer list-none flex justify-between items-center group-open:bg-white/5 transition-all">
              <span className="text-lg font-bold">{item.q}</span>
              <span className="text-purple-500 transform group-open:rotate-180 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </span>
            </summary>
            <div className="p-8 text-slate-400 text-lg leading-relaxed border-t border-white/5 bg-black/20 whitespace-pre-line">
              {item.a}
            </div>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export const Footer: React.FC = () => (
  <footer className="py-20 bg-black border-t border-white/5">
    <div className="container mx-auto px-4 text-center">
      <div className="mb-12">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center font-heading text-3xl font-black mx-auto mb-6 shadow-2xl">G</div>
        <h2 className="text-3xl font-heading font-black tracking-tighter">GOAT ON GAS</h2>
        <p className="text-slate-500 font-bold mt-2 uppercase tracking-[0.3em] text-[10px]">The Billion Dollar Herd</p>
      </div>

      <div className="flex justify-center gap-12 mb-16">
        <a href={TWITTER_URL} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 font-bold">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
          TWITTER
        </a>
        <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 font-bold">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.52-1.4.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.39-.89.03-.24.37-.49 1.02-.74 4-1.74 6.67-2.88 8.01-3.43 3.81-1.56 4.6-1.83 5.12-1.84.11 0 .37.03.54.17.14.12.18.28.2.45-.02.07-.02.13-.03.2z"></path></svg>
          TELEGRAM
        </a>
      </div>

      <div className="max-w-4xl mx-auto p-10 glass rounded-[2.5rem] border-white/5">
        <p className="text-[10px] text-slate-500 leading-relaxed uppercase tracking-widest text-center mb-6">Risk Assessment</p>
        <p className="text-xs text-slate-600 leading-relaxed max-w-2xl mx-auto">
          $GOG is a cryptographic experiment. It possesses zero inherent financial value and is designed solely for the purpose of decentralized amusement. Investing in memetic assets involves extreme risk including total loss of capital. The CEO does not provide financial counseling. Participate at your own discretion. Not a registered security.
        </p>
      </div>
      
      <p className="mt-16 text-slate-800 text-[10px] font-bold uppercase tracking-[0.5em]">© 2026 GOAT ON GAS • THE NEW WORLD ORDER</p>
    </div>
  </footer>
);