
import React, { useEffect, useState } from 'react';
import AsciiHeader from './components/AsciiHeader';
import CaseStudiesPage from './components/CaseStudiesPage';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';

type Route = 'home' | 'case-studies' | 'contact' | 'about';

function getRoute(): Route {
  const h = window.location.hash;
  if (h.startsWith('#/case-studies')) return 'case-studies';
  if (h.startsWith('#/contact')) return 'contact';
  if (h.startsWith('#/about')) return 'about';
  return 'home';
}

const App: React.FC = () => {
  const [route, setRoute] = useState<Route>(typeof window !== 'undefined' ? getRoute() : 'home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onHash = () => {
      setRoute(getRoute());
      setMenuOpen(false);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    if (route !== 'home') {
      window.scrollTo({ top: 0 });
      return;
    }
    const h = window.location.hash;
    if (!h || h === '#/' || h.startsWith('#/')) {
      window.scrollTo({ top: 0 });
      return;
    }
    const el = document.getElementById(h.replace('#', ''));
    if (el) el.scrollIntoView();
    else window.scrollTo({ top: 0 });
  }, [route]);

  return (
    <div className="min-h-screen selection:bg-white selection:text-black bg-black font-mono">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full px-6 md:px-8 py-5 md:py-6 z-40 bg-black/90 border-b border-white/5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="#home" className="text-white font-bold tracking-[0.25em] sm:tracking-[0.4em] text-sm sm:text-lg font-sans">
            LELIS.CONSULTING
          </a>
          {/* Desktop links */}
          <div className="hidden md:flex gap-8 text-[10px] tracking-[0.3em] font-light">
            <a href="#home" className="text-zinc-500 hover:text-white transition-colors">01. HOME</a>
            <a href="#solutions" className="text-zinc-500 hover:text-white transition-colors">02. SOLUTIONS</a>
            <a href="#/case-studies" className={`transition-colors ${route === 'case-studies' ? 'text-white' : 'text-zinc-500 hover:text-white'}`}>03. CASE_STUDIES</a>
            <a href="#/about" className={`transition-colors ${route === 'about' ? 'text-white' : 'text-zinc-500 hover:text-white'}`}>04. ABOUT</a>
            <a href="#/contact" className={`transition-colors ${route === 'contact' ? 'text-white' : 'text-zinc-500 hover:text-white'}`}>05. CONTACT</a>
          </div>
          {/* Mobile hamburger toggle */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(o => !o)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 -mr-2 gap-[5px] text-white"
          >
            <span className={`block h-[1.5px] w-6 bg-white transition-transform duration-300 ${menuOpen ? 'translate-y-[6.5px] rotate-45' : ''}`}></span>
            <span className={`block h-[1.5px] w-6 bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block h-[1.5px] w-6 bg-white transition-transform duration-300 ${menuOpen ? '-translate-y-[6.5px] -rotate-45' : ''}`}></span>
          </button>
        </div>
        {/* Mobile dropdown panel */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${menuOpen ? 'max-h-96 opacity-100 mt-5' : 'max-h-0 opacity-0 mt-0'}`}>
          <div className="flex flex-col gap-1 text-xs tracking-[0.3em] font-light border-t border-white/10 pt-4">
            <a href="#home" onClick={() => setMenuOpen(false)} className="py-3 text-zinc-400 hover:text-white transition-colors">01. HOME</a>
            <a href="#solutions" onClick={() => setMenuOpen(false)} className="py-3 text-zinc-400 hover:text-white transition-colors">02. SOLUTIONS</a>
            <a href="#/case-studies" onClick={() => setMenuOpen(false)} className={`py-3 transition-colors ${route === 'case-studies' ? 'text-white' : 'text-zinc-400 hover:text-white'}`}>03. CASE_STUDIES</a>
            <a href="#/about" onClick={() => setMenuOpen(false)} className={`py-3 transition-colors ${route === 'about' ? 'text-white' : 'text-zinc-400 hover:text-white'}`}>04. ABOUT</a>
            <a href="#/contact" onClick={() => setMenuOpen(false)} className={`py-3 transition-colors ${route === 'contact' ? 'text-white' : 'text-zinc-400 hover:text-white'}`}>05. CONTACT</a>
          </div>
        </div>
      </nav>

      <main>
        {route === 'case-studies' ? (
          <CaseStudiesPage />
        ) : route === 'contact' ? (
          <ContactPage />
        ) : route === 'about' ? (
          <AboutPage />
        ) : (
          <>
        {/* home */}
        <section id="home" className="pt-20">
          <AsciiHeader />
        </section>

        {/* Focus Statement / Mission Box */}
        <section className="max-w-5xl mx-auto px-8 py-12">
          <div className="border border-white/20 p-8 md:p-12 bg-zinc-950 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-white scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="text-[10px] tracking-[0.5em] text-zinc-600 uppercase vertical-text hidden md:block" style={{ writingMode: 'vertical-rl' }}>
                MISSION_STATEMENT
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-white">
                  Production-grade AI, not lab experiments.
                </h2>
                <p className="text-zinc-400 text-lg leading-relaxed font-sans max-w-3xl">
                  Lelis Consulting partners with industrial and financial leaders to design,
                  build, and deploy AI systems that survive contact with real operations.
                  End-to-end delivery — from data ingestion to observable production —
                  with a bias toward measurable ROI and operational reliability.
                </p>
                <div className="flex flex-wrap gap-8 text-[10px] tracking-widest text-zinc-500 uppercase">
                  <span>[ END-TO-END ]</span>
                  <span>[ PRODUCTION-GRADE ]</span>
                  <span>[ ROI-DRIVEN ]</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="max-w-5xl mx-auto px-8 py-24 border-y border-white/5">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="text-4xl md:text-5xl font-light tracking-tighter leading-none">
              BEYOND_ <br /><span className="text-zinc-700">MODELS.</span>
            </div>
            <div className="text-zinc-400 text-lg leading-relaxed font-sans">
              Most AI projects don&apos;t survive the lab. I design and deploy resilient, end-to-end systems — from sensor ingestion and document parsing to cloud orchestration and edge inference — so the model becomes an operational asset, not a slide.
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="bg-white text-black py-24 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16 max-w-2xl">
              <p className="text-[10px] tracking-[0.5em] uppercase text-black/40 mb-3">Selected outcomes</p>
              <h2 className="text-2xl md:text-3xl font-light tracking-tight">
                Shipped systems. Concrete, audited results.
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-12 md:gap-8">
              <MetricBlock
                value="32%"
                label="Invalid contracts eliminated"
                detail="Plus a 28% drop in fraud, across 50,000+ monthly video-sale contracts at a major financial institution. A multimodal compliance agent (computer vision + Whisper X + LLM, orchestrated with LangGraph) — adopted as the corporate standard."
                tag="FinTech · LLM Agents"
              />
              <MetricBlock
                value="25%"
                label="Unplanned downtime avoided"
                detail="At a petrochemical plant, a ConvLSTM digital twin predicted critical failures up to 8 hours ahead with 87% F1 score, also cutting corrective-maintenance cost by 18%."
                tag="Petrochem · Time-series"
              />
              <MetricBlock
                value="100%"
                label="Fleet edge-vision coverage"
                detail="YOLOv8 + TensorRT inference deployed on Jetson Nano devices inside every off-highway truck of a mining operator — later extended to additional operational vehicles."
                tag="Mining · Edge AI"
              />
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="max-w-5xl mx-auto px-8 py-32">
          <div className="mb-16 flex items-end justify-between border-b border-white/10 pb-4">
            <h2 className="text-3xl font-light tracking-tighter uppercase">
              Strategic_Solutions
            </h2>
            <span className="text-[10px] text-zinc-600 tracking-widest uppercase">Expertise Segments</span>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1">
            <SolutionCard
              id="AGT-01"
              title="AGENTIC AI & RAG SYSTEMS"
              desc="Multimodal agents and retrieval pipelines that turn fragmented enterprise knowledge — text, scans, tables, images — into auditable, production-grade decision support."
              tech={["LANGGRAPH", "MILVUS", "CLIP", "REACT"]}
            />
            <SolutionCard
              id="PDM-02"
              title="PREDICTIVE MAINTENANCE & TIME-SERIES"
              desc="Deep-learning health monitoring for industrial assets, predicting failures hours in advance from sensor and event streams."
              tech={["CONVLSTM", "LSTM", "IoT"]}
            />
            <SolutionCard
              id="VIS-03"
              title="COMPUTER VISION & EDGE AI"
              desc="Real-time detection, tracking, and inspection — running in the cloud or pushed onto embedded devices for offline operation."
              tech={["YOLOv8", "TENSORRT", "JETSON"]}
            />
            <SolutionCard
              id="OPS-04"
              title="MLOPS & PRODUCTION ARCHITECTURE"
              desc="End-to-end pipelines from data ingestion to deployment, with observability, versioning, and lifecycle management. The path from prototype to production."
              tech={["DOCKER", "K8S", "MLFLOW", "CI/CD"]}
            />
          </div>
        </section>

        {/* Case Studies CTA */}
        <section className="bg-zinc-950 py-32 px-8 border-t border-white/5">
          <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <p className="text-[10px] tracking-[0.5em] text-zinc-600 uppercase mb-4">03 · Case_Studies</p>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
                Shipped <br /><span className="text-zinc-500">to production.</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed font-sans max-w-2xl">
                Agentic RAG, multimodal compliance, predictive maintenance, edge vision —
                across aviation, finance, energy, mining, and heavy industry.
              </p>
            </div>
            <div className="md:col-span-5 md:text-right">
              <a
                href="#/case-studies"
                className="inline-block border border-white/30 px-8 py-4 text-[11px] tracking-[0.4em] uppercase text-white hover:bg-white hover:text-black transition-colors"
              >
                View case studies →
              </a>
            </div>
          </div>
        </section>

          </>
        )}
      </main>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-start gap-12 relative">
          <div className="text-left">
            <p className="text-[10px] tracking-[0.4em] text-zinc-600 mb-2 uppercase">Based In</p>
            <p className="text-sm font-light text-zinc-400">BASEL, SWITZERLAND</p>
            <p className="text-[10px] tracking-[0.4em] text-zinc-700 mt-4">Engagements: Brazil · USA · EU · CH</p>
          </div>
          <div className="text-center md:absolute md:left-1/2 md:-translate-x-1/2">
            <div className="text-white font-bold tracking-[0.8em] mb-4 text-2xl font-sans">LELIS</div>
            <p className="text-[9px] text-zinc-700 tracking-widest uppercase font-mono">
              Lelis Consulting © 2026 · Basel
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

interface MetricBlockProps {
  value: string;
  label: string;
  detail: string;
  tag: string;
}

const MetricBlock: React.FC<MetricBlockProps> = ({ value, label, detail, tag }) => (
  <div className="border-l border-black/10 pl-6 py-2 flex flex-col h-full">
    <div className="text-6xl font-bold tracking-tighter mb-3 leading-none">{value}</div>
    <div className="text-xs font-bold uppercase tracking-widest text-black mb-4 leading-tight">{label}</div>
    <p className="text-sm text-black/70 leading-relaxed font-sans mb-6 flex-1">{detail}</p>
    <div className="text-[9px] uppercase tracking-[0.3em] text-black/40">{tag}</div>
  </div>
);

interface SolutionCardProps {
  id: string;
  title: string;
  desc: string;
  tech: string[];
}

const SolutionCard: React.FC<SolutionCardProps> = ({ id, title, desc, tech }) => (
  <div className="group bg-zinc-900/10 border border-white/5 p-10 hover:bg-white hover:text-black transition-all duration-300 flex flex-col justify-between min-h-[400px]">
    <div>
      <span className="text-[10px] block mb-8 opacity-40 group-hover:opacity-100 transition-opacity font-mono">CODE: {id}</span>
      <h3 className="text-xl font-bold mb-6 tracking-tight leading-tight uppercase">{title}</h3>
      <p className="text-zinc-500 group-hover:text-zinc-800 text-sm leading-relaxed mb-8 font-sans">{desc}</p>
    </div>
    <div className="flex flex-wrap gap-2">
      {tech.map(t => (
        <span key={t} className="text-[8px] border border-white/20 group-hover:border-black/20 px-2 py-0.5 tracking-tighter uppercase">
          {t}
        </span>
      ))}
    </div>
  </div>
);

export default App;
