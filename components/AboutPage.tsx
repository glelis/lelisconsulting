import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <section className="pt-32 pb-32 bg-zinc-950 px-8 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-4">ABOUT.</h1>
          <div className="h-1 w-20 bg-white"></div>
        </div>

        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 italic text-white">Engineer. Researcher. Operator.</h2>
          <div className="space-y-6 text-lg leading-relaxed font-sans text-zinc-400">
            <p>Six years building production ML across computer vision, NLP, and time-series — from research benches to industrial floors and trading-floor compliance.</p>
            <p>Based in <strong className="text-white font-normal">Basel, Switzerland</strong>, I work with European and global teams on AI systems that need to actually ship. Not slides, not PoCs — deployable architectures with observability, versioning, and a path to ROI.</p>
          </div>
        </div>

        <div className="mt-24 border border-white/20 p-12 bg-black text-white">
          <h2 className="text-2xl mb-12 tracking-widest text-white">TECH_STACK</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <StackGroup title="Core ML" items={["Python", "C/C++", "PyTorch", "TensorFlow", "Scikit-learn", "OpenCV"]} />
            <StackGroup title="GenAI & Agents" items={["LangChain", "LangGraph", "ReAct", "Claude", "CLIP", "Whisper X"]} />
            <StackGroup title="Vector & Data" items={["Milvus", "ChromaDB", "SQL", "Databricks", "Pandas"]} />
            <StackGroup title="MLOps & Infra" items={["Docker", "Kubernetes", "MLflow", "FastAPI", "AWS / Azure / GCP", "TensorRT / Jetson"]} />
          </div>
        </div>

        <div className="mt-32 pt-12 border-t border-white/10 flex justify-end">
          <div className="text-right">
            <p className="text-[10px] tracking-[0.4em] text-zinc-600 uppercase mb-2">Discuss a project</p>
            <a
              href="#/contact"
              className="text-sm text-zinc-300 hover:text-white transition-colors underline underline-offset-4"
            >
              Get in touch →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const StackGroup = ({ title, items }: { title: string, items: string[] }) => (
  <div>
    <p className="text-[10px] tracking-widest text-zinc-500 uppercase mb-6">{title}</p>
    <ul className="space-y-2">
      {items.map(item => (
        <li key={item} className="text-sm text-zinc-300 hover:text-white transition-colors cursor-default">• {item}</li>
      ))}
    </ul>
  </div>
);

export default AboutPage;
