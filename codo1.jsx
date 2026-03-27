import React, { useState, useEffect } from 'react';
import { 
  Code2, Trophy, Cpu, Zap, Users, ChevronRight, Terminal, 
  CheckCircle2, ArrowRight, ShieldCheck, BrainCircuit, Sword, 
  Target, Rocket, HelpCircle, Menu, X, Play, 
  Globe, Sparkles, AlertCircle, Loader2
} from 'lucide-react';

const App = () => {
  const [rank, setRank] = useState('Intern');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('output');
  const [isRunningTests, setIsRunningTests] = useState(false);
  const [testResult, setTestResult] = useState(null);
  const [battleTime, setBattleTime] = useState(102.08);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');

  // Skill data relative to rank
  const skillLevels = {
    Intern: { algo: 25, ds: 15, arch: 5, solve: 30 },
    Developer: { algo: 55, ds: 45, arch: 20, solve: 50 },
    Engineer: { algo: 85, ds: 75, arch: 55, solve: 80 },
    Architect: { algo: 98, ds: 95, arch: 92, solve: 99 }
  };

  const currentSkills = skillLevels[rank];

  // Battle Timer Simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setBattleTime(prev => prev + 0.01);
    }, 10);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const mins = Math.floor(time / 60);
    const secs = (time % 60).toFixed(2);
    return `${mins.toString().padStart(2, '0')}:${secs.padStart(5, '0')}`;
  };

  const handleRunTests = () => {
    setIsRunningTests(true);
    setTestResult(null);
    setTimeout(() => {
      setIsRunningTests(false);
      setTestResult('passed');
    }, 1500);
  };

  const openModal = (e) => {
    e?.preventDefault();
    setShowModal(true);
  };

  const features = [
    {
      title: "Code-First Learning",
      description: "No tapping. No guessing. A full-featured editor where you type every line from day one.",
      icon: <Terminal className="w-6 h-6 text-emerald-400" />
    },
    {
      title: "Reverse Learning Mode",
      description: "We show you the output. You write the logic. It's the ultimate test of true understanding.",
      icon: <BrainCircuit className="w-6 h-6 text-purple-400" />
    },
    {
      title: "AI Mentor",
      description: "A digital companion that points out inefficiencies and suggests patterns without giving answers.",
      icon: <Cpu className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Coding Battles",
      description: "1v1 real-time matches. Solve the problem fastest to climb the global leaderboard.",
      icon: <Sword className="w-6 h-6 text-orange-400" />
    },
    {
      title: "Developer Progression",
      description: "Graduate from Intern to Architect. Each level unlocks high-stakes real-world projects.",
      icon: <ShieldCheck className="w-6 h-6 text-pink-400" />
    },
    {
      title: "Skill Mapping",
      description: "Visual data of your actual proficiency in Loops, Arrays, and Algorithms, not just 'lessons'.",
      icon: <Target className="w-6 h-6 text-cyan-400" />
    }
  ];

  const faqs = [
    { q: "Is this for total beginners?", a: "Yes. We start with Python and guide you through logic before syntax, but you'll be writing code from minute one." },
    { q: "How do the battles work?", a: "You're matched with someone of your rank. Both get the same prompt. The first to pass all test cases wins ELO points." },
    { q: "Can I get a job through CODO?", a: "Architect-level users gain access to our talent pipeline where top tech companies hire directly based on your verified skill map." }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500/30 scroll-smooth">
      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-xl bg-black/60 animate-in fade-in duration-300">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-md rounded-[2.5rem] p-10 relative shadow-2xl">
            <button onClick={() => setShowModal(false)} className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </button>
            <div className="space-y-6 text-center">
              <div className="bg-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                <Rocket className="text-slate-950 w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-black tracking-tight">Access CODO v1.0</h3>
                <p className="text-slate-400">Join 50k+ developers building the future. Enter your email to start your trial.</p>
              </div>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert(`Success! Invitation sent to ${email}`); setShowModal(false); }}>
                <input 
                  type="email" 
                  required
                  placeholder="name@company.com" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 focus:border-emerald-500 outline-none transition-all text-center"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="w-full bg-emerald-500 text-slate-950 py-4 rounded-xl font-black text-lg hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20">
                  Secure My Spot
                </button>
              </form>
              <p className="text-[10px] text-slate-600 font-mono uppercase tracking-widest">No credit card required for 7-day trial</p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <div className="bg-emerald-500 p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
              <Code2 className="text-slate-950 w-6 h-6" />
            </div>
            <span className="text-2xl font-black tracking-tighter">CODO</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10 text-sm font-bold text-slate-400">
            <a href="#method" className="hover:text-emerald-400 transition-colors uppercase tracking-widest text-[11px]">The Method</a>
            <a href="#features" className="hover:text-emerald-400 transition-colors uppercase tracking-widest text-[11px]">Features</a>
            <a href="#battles" className="hover:text-emerald-400 transition-colors uppercase tracking-widest text-[11px]">Battles</a>
            <a href="#pricing" className="hover:text-emerald-400 transition-colors uppercase tracking-widest text-[11px]">Pricing</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button onClick={openModal} className="text-slate-400 hover:text-white font-bold text-sm">Login</button>
            <button onClick={openModal} className="bg-emerald-500 text-slate-950 px-6 py-2.5 rounded-full font-bold text-sm hover:bg-emerald-400 hover:scale-105 transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              Start Coding
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-slate-400" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
            <a href="#method" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold">The Method</a>
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold">Features</a>
            <a href="#battles" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold">Battles</a>
            <button onClick={openModal} className="bg-emerald-500 text-slate-950 py-4 rounded-xl font-bold">Start Now</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-emerald-500/10 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-slate-900/50 border border-slate-800 px-4 py-1.5 rounded-full text-xs font-mono text-emerald-400 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>v1.0 IS NOW LIVE — LEARN BY DOING</span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-black leading-[0.9] tracking-tighter">
              CODING ISN'T A <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                LANGUAGE.
              </span><br/>
              IT'S A TOOL.
            </h1>
            <p className="text-xl text-slate-400 max-w-xl leading-relaxed">
              Stop memorizing syntax. CODO forces you to solve real problems using real code from lesson one. 
              <span className="text-white font-medium"> No multiple choice. No shortcuts. Just building.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button onClick={openModal} className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-8 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all hover:translate-y-[-2px] shadow-[0_10px_30px_rgba(16,185,129,0.3)]">
                Launch Dashboard <ArrowRight className="w-6 h-6" />
              </button>
              <button onClick={() => alert("Trailer video modal would open here.")} className="bg-slate-900 border border-slate-800 hover:border-slate-700 px-8 py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 group">
                <Play className="w-5 h-5 fill-current group-hover:text-emerald-400" /> Watch Trailer
              </button>
            </div>
          </div>

          {/* Interactive Code Window */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-[2.5rem] blur-2xl" />
            <div className="relative bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-slate-800/40 px-6 py-4 flex items-center justify-between border-b border-slate-800">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/40" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/40" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/40" />
                </div>
                <div className="flex bg-slate-950 rounded-lg p-1">
                  <button 
                    onClick={() => setActiveTab('output')}
                    className={`px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest transition-all ${activeTab === 'output' ? 'bg-slate-800 text-white' : 'text-slate-500'}`}
                  >
                    Output
                  </button>
                  <button 
                    onClick={() => setActiveTab('editor')}
                    className={`px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest transition-all ${activeTab === 'editor' ? 'bg-slate-800 text-white' : 'text-slate-500'}`}
                  >
                    Editor
                  </button>
                </div>
              </div>
              
              <div className="p-8 font-mono min-h-[300px]">
                {activeTab === 'output' ? (
                  <div className="space-y-6 animate-in fade-in duration-500">
                    <div className="space-y-2">
                      <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Challenge: The Fibonacci Stretch</p>
                      <h3 className="text-xl font-bold text-white">Generate this exact sequence:</h3>
                    </div>
                    <div className="bg-black/50 p-6 rounded-xl border border-slate-800 text-2xl font-bold tracking-widest text-emerald-400 shadow-inner">
                      1 1 2 3 5 8 13 21
                    </div>
                    <div className="flex items-center gap-3 text-slate-500 text-sm italic">
                      <AlertCircle className="w-4 h-4" />
                      Tip: Use a while loop for efficiency.
                    </div>
                  </div>
                ) : (
                  <div className="space-y-1 animate-in fade-in duration-500">
                    <p className="text-cyan-400">def <span className="text-white">solve_sequence</span>(n):</p>
                    <p className="text-slate-300 ml-4">a, b = 0, 1</p>
                    <p className="text-slate-300 ml-4">res = []</p>
                    <p className="text-slate-300 ml-4">for _ in range(n):</p>
                    <p className="text-slate-300 ml-8">a, b = b, a + b</p>
                    <p className="text-slate-300 ml-8">res.append(str(a))</p>
                    <p className="text-emerald-400 ml-4 cursor-blink">return " ".join(res)</p>
                    
                    <div className="mt-8 pt-6 border-t border-slate-800 flex justify-between items-center">
                      <div className="text-slate-500 text-xs">
                        {testResult === 'passed' ? (
                          <span className="text-emerald-400 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> All test cases passed!
                          </span>
                        ) : 'Ln 12, Col 24'}
                      </div>
                      <button 
                        onClick={handleRunTests}
                        disabled={isRunningTests}
                        className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                          isRunningTests 
                          ? 'bg-slate-800 text-slate-500 cursor-not-allowed' 
                          : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500 hover:text-slate-950'
                        }`}
                      >
                        {isRunningTests ? <Loader2 className="w-3 h-3 animate-spin" /> : 'RUN TEST CASES'}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Method - Comparison */}
      <section id="method" className="py-24 px-6 bg-slate-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl font-extrabold tracking-tighter">The "Code + Do" Philosophy.</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Most apps teach you <span className="text-white font-medium italic">what coding is</span>. We teach you <span className="text-emerald-400 font-bold underline decoration-emerald-500/30 underline-offset-8">how to think like a developer.</span>
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4 p-5 rounded-2xl bg-slate-900 border border-slate-800">
                  <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <X className="text-red-500 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Old Way: The Memory Trap</h4>
                    <p className="text-slate-400 text-sm">Multiple choice questions that reward guessing over understanding.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-emerald-500 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-emerald-400 mb-1">The CODO Way: Real Application</h4>
                    <p className="text-slate-300 text-sm italic font-medium">"I built this myself from scratch."</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-center space-y-3 cursor-pointer hover:border-blue-400 transition-all" onClick={openModal}>
                  <Globe className="w-8 h-8 text-blue-400 mx-auto" />
                  <p className="text-xs font-bold uppercase tracking-tighter">Build Apps</p>
                </div>
                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-center space-y-3 cursor-pointer hover:border-purple-400 transition-all" onClick={openModal}>
                  <Cpu className="w-8 h-8 text-purple-400 mx-auto" />
                  <p className="text-xs font-bold uppercase tracking-tighter">Master APIs</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-center space-y-3 cursor-pointer hover:border-emerald-400 transition-all" onClick={openModal}>
                  <Rocket className="w-8 h-8 text-emerald-400 mx-auto" />
                  <p className="text-xs font-bold uppercase tracking-tighter">Ship Products</p>
                </div>
                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-center space-y-3 cursor-pointer hover:border-orange-400 transition-all" onClick={openModal}>
                  <Sword className="w-8 h-8 text-orange-400 mx-auto" />
                  <p className="text-xs font-bold uppercase tracking-tighter">Win Battles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Tools for Power Learners.</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              We took the addictive nature of streaks and leveled it up with raw technical depth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="group p-10 rounded-[2.5rem] bg-slate-900/40 border border-slate-800 hover:border-emerald-500/30 transition-all hover:-translate-y-2 cursor-pointer" onClick={openModal}>
                <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-xl">
                  {f.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coding Battles Showdown */}
      <section id="battles" className="py-24 px-6 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/5 blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              {/* Battle Mockup */}
              <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
                <div className="bg-orange-500/10 px-6 py-3 border-b border-slate-800 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Sword className="text-orange-400 w-4 h-4" />
                    <span className="text-xs font-black text-orange-400 uppercase tracking-widest">Live Battle</span>
                  </div>
                  <div className="text-xl font-mono font-black text-white">{formatTime(battleTime)}</div>
                </div>
                <div className="p-6 grid grid-cols-2 gap-6">
                  <div className="space-y-4 opacity-100">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-emerald-500" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">YOU (Intern)</span>
                    </div>
                    <div className="bg-slate-950 h-32 rounded-lg p-3 font-mono text-[8px] space-y-1 relative group">
                      <p className="text-emerald-500">for i in range(10):</p>
                      <p className="text-slate-500 ml-2">if i % 2 == 0:</p>
                      <p className="text-slate-500 ml-4">print(i)</p>
                      <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-emerald-500 text-slate-950 px-2 py-1 rounded text-[8px] font-bold">READY TO SUBMIT</span>
                      </div>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 w-[80%] transition-all duration-100" />
                    </div>
                  </div>
                  <div className="space-y-4 opacity-50 grayscale">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-slate-700" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">USER_402</span>
                    </div>
                    <div className="bg-slate-950 h-32 rounded-lg p-3 font-mono text-[8px] space-y-1">
                      <p className="text-slate-500">while x &lt; 10:</p>
                      <p className="text-slate-700 ml-2">if x % 2 == 0:</p>
                      <p className="text-slate-700 ml-4"># thinking...</p>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-500 w-[30%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-5xl font-black tracking-tighter">Adrenaline-Fueled Learning.</h2>
              <p className="text-slate-400 text-xl leading-relaxed">
                Coding shouldn't be lonely. Battle peers in real-time sprints. Whoever writes the most efficient solution fastest climbs the ranks.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold">12ms</h4>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Avg Matchmaking</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold">ELO</h4>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Skill-Based Pairing</p>
                </div>
              </div>
              <button onClick={openModal} className="text-emerald-400 font-bold border-b border-emerald-400/30 pb-1 hover:border-emerald-400 transition-all inline-flex items-center gap-2">
                Join Arena <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Progression Section */}
      <section className="py-24 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-5xl font-black tracking-tighter">The Developer Road.</h2>
                <p className="text-slate-400 text-lg">
                  Every project you complete earns you XP in specific domains. Watch your skill map evolve from a novice's dot to an Architect's web.
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                {Object.keys(skillLevels).map((level) => (
                  <button 
                    key={level}
                    onClick={() => setRank(level)}
                    className={`flex items-center justify-between p-6 rounded-2xl border transition-all ${
                      rank === level 
                        ? 'bg-emerald-500 border-emerald-400 text-slate-950 scale-[1.02] shadow-lg shadow-emerald-500/20' 
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-3 h-3 rounded-full ${rank === level ? 'bg-slate-950 animate-pulse' : 'bg-slate-700'}`} />
                      <span className="font-black uppercase tracking-widest text-sm">{level}</span>
                    </div>
                    {rank === level && <Sparkles className="w-5 h-5 animate-spin-slow" />}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-slate-950 p-10 rounded-[3rem] border border-slate-800 relative group overflow-hidden">
               {/* Visual Web Background */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="w-full h-full border border-slate-800 rounded-full scale-150 absolute top-0 left-0" />
                <div className="w-full h-full border border-slate-800 rounded-full scale-125 absolute top-0 left-0" />
                <div className="w-full h-full border border-slate-800 rounded-full scale-100 absolute top-0 left-0" />
              </div>

              <div className="relative">
                <div className="flex items-center justify-between mb-12">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400 mb-1">Current Skill Map</p>
                    <h3 className="text-3xl font-black tracking-tight">{rank} LEVEL</h3>
                  </div>
                  <Users className="text-slate-800 w-12 h-12" />
                </div>

                <div className="space-y-10">
                  {[
                    { label: "Algorithmic Thinking", val: currentSkills.algo, color: "bg-emerald-500" },
                    { label: "Data Structures", val: currentSkills.ds, color: "bg-cyan-400" },
                    { label: "System Architecture", val: currentSkills.arch, color: "bg-purple-500" },
                    { label: "Problem Solving", val: currentSkills.solve, color: "bg-orange-400" }
                  ].map((s, idx) => (
                    <div key={idx} className="space-y-3">
                      <div className="flex justify-between text-xs font-black uppercase tracking-widest">
                        <span className="text-slate-400">{s.label}</span>
                        <span className="text-white">{s.val}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                        <div 
                          className={`h-full transition-all duration-700 ease-out ${s.color}`}
                          style={{ width: `${s.val}%` }} 
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-16 p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 flex items-center gap-5 cursor-pointer hover:bg-emerald-500/10 transition-all" onClick={openModal}>
                  <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center shrink-0">
                    <Trophy className="text-slate-950 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-1">Active Milestone</p>
                    <p className="text-sm font-bold text-white leading-tight">Implement a REST API using only standard libraries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience / Companies */}
      <section className="py-24 px-6 border-y border-slate-900">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-12">
          <p className="text-slate-500 font-bold uppercase tracking-[0.4em] text-xs">Architects hired by teams at</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
            {['GitHub', 'Vercel', 'OpenAI', 'Stripe', 'Anthropic'].map(brand => (
              <span key={brand} className="text-2xl font-black text-white">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none">Invest in Skill.</h2>
            <p className="text-slate-400 max-w-xl mx-auto italic">No recurring sub-taxes. Just transparent paths to mastery.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Free */}
            <div className="bg-slate-900/50 border border-slate-800 p-12 rounded-[3rem] text-left hover:border-slate-700 transition-all flex flex-col group">
              <div className="flex-1 space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Fundamental</h3>
                  <p className="text-slate-500 text-sm">Perfect for hobbyists and students.</p>
                </div>
                <div className="text-5xl font-black">$0 <span className="text-lg font-normal text-slate-500">/ forever</span></div>
                <ul className="space-y-4">
                  {['20 Python Challenges', 'Basic Code Editor', 'Public Matchmaking', 'Community Access'].map(i => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
              <button onClick={openModal} className="w-full mt-12 py-4 rounded-2xl bg-slate-800 font-black hover:bg-slate-700 transition-all group-hover:bg-slate-700">Start Free</button>
            </div>
            
            {/* Pro */}
            <div className="bg-emerald-500 p-12 rounded-[3rem] text-left text-slate-950 flex flex-col relative overflow-hidden shadow-2xl shadow-emerald-500/20 group">
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:rotate-12 transition-transform">
                <Zap className="w-24 h-24" />
              </div>
              <div className="flex-1 space-y-8 relative">
                <div>
                  <div className="inline-block bg-slate-950 text-emerald-400 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-[0.2em] mb-4">Most Popular</div>
                  <h3 className="text-2xl font-bold mb-2">Architect Pro</h3>
                  <p className="text-slate-950/60 text-sm">For the career-serious developer.</p>
                </div>
                <div className="text-5xl font-black">$19 <span className="text-lg font-normal text-slate-950/50">/ month</span></div>
                <ul className="space-y-4">
                  {[
                    'Full AI Mentor Unlocked',
                    'Unlimited Career Projects',
                    'Advanced Systems Design Path',
                    'Direct Job Pipeline Access',
                    'Priority Battle Queues'
                  ].map(i => (
                    <li key={i} className="flex items-center gap-3 text-sm font-bold">
                      <CheckCircle2 className="w-5 h-5 text-slate-950" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
              <button onClick={openModal} className="w-full mt-12 py-4 rounded-2xl bg-slate-950 text-white font-black hover:scale-[1.02] transition-all relative">Try 7 Days Free</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-slate-900/10">
        <div className="max-w-3xl mx-auto space-y-12">
          <h2 className="text-3xl font-black text-center uppercase tracking-widest tracking-tight">Common Questions</h2>
          <div className="space-y-6">
            {faqs.map((f, i) => (
              <details key={i} className="p-8 rounded-2xl bg-slate-900 border border-slate-800 group cursor-pointer">
                <summary className="text-lg font-bold flex items-center justify-between list-none">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="text-emerald-500 w-5 h-5" />
                    {f.q}
                  </span>
                  <ChevronRight className="w-5 h-5 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="text-slate-400 leading-relaxed text-sm pl-8 mt-4 pt-4 border-t border-slate-800/50">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-emerald-500 to-cyan-500 p-20 rounded-[4rem] text-slate-950 space-y-10 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          </div>
          <div className="relative space-y-6">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">THE WORLD NEEDS BUILDERS. BE ONE.</h2>
            <p className="text-xl font-bold max-w-2xl mx-auto opacity-80 leading-relaxed">
              Join 50,000+ developers who ditched memorization for mastery. Your first project is waiting.
            </p>
          </div>
          <div className="relative flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={openModal} className="bg-slate-950 text-white px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-2xl">
              Get Started for Free
            </button>
            <button onClick={() => alert("Enterprise sales team notified!")} className="bg-transparent border-2 border-slate-950 text-slate-950 px-10 py-5 rounded-2xl font-black text-xl hover:bg-slate-950/5 transition-all">
              Enterprise Inquiry
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
            <div className="col-span-2 space-y-6">
              <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                <div className="bg-emerald-500 p-1 rounded-md">
                  <Code2 className="text-slate-950 w-5 h-5" />
                </div>
                <span className="text-xl font-black tracking-tighter">CODO</span>
              </div>
              <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                The anti-Duolingo for developers. We believe you learn by building, not by tapping buttons.
              </p>
            </div>
            <div className="space-y-6">
              <h5 className="font-black text-xs uppercase tracking-widest text-slate-400">Platform</h5>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#features" className="hover:text-emerald-400 transition-colors">Curriculum</a></li>
                <li><a href="#battles" className="hover:text-emerald-400 transition-colors">Battles</a></li>
                <li><a href="#method" className="hover:text-emerald-400 transition-colors">Skill Maps</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h5 className="font-black text-xs uppercase tracking-widest text-slate-400">Resources</h5>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><button onClick={openModal} className="hover:text-emerald-400">Docs</button></li>
                <li><button onClick={openModal} className="hover:text-emerald-400">API</button></li>
                <li><button onClick={openModal} className="hover:text-emerald-400">Status</button></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h5 className="font-black text-xs uppercase tracking-widest text-slate-400">Social</h5>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#" className="hover:text-emerald-400">Twitter</a></li>
                <li><a href="#" className="hover:text-emerald-400">Discord</a></li>
                <li><a href="#" className="hover:text-emerald-400">LinkedIn</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h5 className="font-black text-xs uppercase tracking-widest text-slate-400">Company</h5>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><button onClick={openModal} className="hover:text-emerald-400">About</button></li>
                <li><button onClick={openModal} className="hover:text-emerald-400">Hiring</button></li>
                <li><button onClick={openModal} className="hover:text-emerald-400">Legal</button></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6 text-xs font-mono text-slate-600">
              <span>© 2024 CODO INC.</span>
              <span>EST. SF CA</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-600">
              <Globe className="w-3 h-3" />
              <span>SERVED GLOBALLY VIA EDGE INFRA</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Styles for typing animation */}
      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        .cursor-blink::after { content: ''; width: 2px; height: 1.2em; background: #10b981; display: inline-block; margin-left: 2px; vertical-align: middle; animation: blink 1s infinite; }
        .animate-spin-slow { animation: spin 8s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        details > summary { list-style: none; }
        details > summary::-webkit-details-marker { display: none; }
      `}</style>
    </div>
  );
};

export default App;
