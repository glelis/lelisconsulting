import React from 'react';

const CaseStudiesPage: React.FC = () => {
  return (
    <section className="pt-32 pb-32 bg-zinc-950 px-8 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-4">CASE_STUDIES.</h1>
          <div className="h-1 w-20 bg-white"></div>
          <p className="text-zinc-400 text-lg leading-relaxed font-sans max-w-3xl mt-8">
            A selection of production engagements. Clients anonymized by sector and scale —
            references available under NDA on request.
          </p>
        </div>

        <div className="space-y-32">
          <CaseStudy
            title="Agentic Decision-Support RAG"
            challenge="A Fortune 500 North American airline needed to surface insights buried in tens of thousands of internal documents — text, scans, and structured tables — for strategic decision-making."
            solution="Designed a multimodal RAG: page-level OCR with layout and table extraction, text and CLIP image embeddings indexed in Milvus with reranking, and a LangGraph orchestrator with sandboxed tools, access control, and end-to-end observability."
            result="Production-grade decision-support pipeline on Kubernetes with auditable queries, autoscaling, and full MLOps lifecycle (MLflow, Prometheus, Grafana)."
            tags={["LANGGRAPH", "MULTIMODAL", "AVIATION"]}
          />
          <CaseStudy
            title="Multimodal Sales Compliance Agent"
            challenge="A major financial institution faced high fraud rates and manual validation bottlenecks across 50,000+ monthly video-sale contracts."
            solution="Built a multimodal agent combining real-time computer vision, Whisper X transcription, and LLM semantic analysis, orchestrated with LangGraph. End-to-end LLMOps with LangSmith and Prometheus tracked hallucination, latency, cost, and internal NPS."
            result="32% drop in contract invalidations and 28% reduction in fraud — adopted as the corporate standard across 50k+ monthly transactions."
            tags={["LANGGRAPH", "WHISPER X", "FINTECH"]}
          />
          <CaseStudy
            title="Cybersecurity ReAct-RAG Knowledge Base"
            challenge="A consortium of five financial institutions needed a unified cybersecurity training reference across heterogeneous technical documentation in multiple formats."
            solution="Built a ReAct-architecture RAG assistant on Claude 3.5 with ChromaDB. Extracted and vectorized 5 GB+ of technical documents using custom embeddings; full LLMOps pipeline on FastAPI, Kubernetes, and AWS."
            result="Adopted as the primary training tool by all five institutions in the consortium."
            tags={["REACT", "RAG", "CHROMA"]}
          />
          <CaseStudy
            title="Predictive Digital Twin"
            challenge="A petrochemical operator was losing production hours to unplanned equipment failures."
            solution="Architected an end-to-end MLOps pipeline from IoT sensor ingestion to ConvLSTM models continuously inferring asset health, deployed on Azure with full CI/CD."
            result="87% F1-score predicting critical failures up to 8 hours in advance — 25% less unplanned downtime and 18% lower corrective-maintenance cost."
            tags={["CONVLSTM", "MLOPS", "PETROCHEM"]}
          />
          <CaseStudy
            title="Edge Vision for Mining Fleet"
            challenge="Off-highway mining trucks operating without stable cloud connectivity needed real-time safety monitoring."
            solution="Fine-tuned YOLOv8 models optimized with TensorRT for real-time inference on embedded Jetson Nano devices inside each truck, deployed with CI/CD and MLflow versioning."
            result="Rolled out across 100% of the mining fleet and later extended to additional operational vehicles."
            tags={["YOLOv8", "TENSORRT", "JETSON"]}
          />
          <CaseStudy
            title="Industrial Yard Safety Monitoring"
            challenge="An industrial operator needed real-time detection of safety violations in loading and unloading yards from existing CCTV feeds."
            solution="Trained Fast R-CNN for detection and DeepSort for object tracking; automated dataset creation with Segment Anything; CI/CD-backed MLOps pipeline on Azure."
            result="90% mAP and IDF1 above 85%, generating live alerts on safety violations."
            tags={["FAST R-CNN", "DEEPSORT", "SEG-ANYTHING"]}
          />
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

interface CaseStudyProps {
  title: string;
  challenge: string;
  solution: string;
  result: string;
  tags: string[];
}

const CaseStudy: React.FC<CaseStudyProps> = ({ title, challenge, solution, result, tags }) => (
  <div className="grid md:grid-cols-12 gap-12 group">
    <div className="md:col-span-4">
      <h3 className="text-2xl font-bold mb-4 tracking-tight text-white group-hover:text-zinc-300 transition-colors">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="text-[9px] border border-white/20 px-2 py-0.5 tracking-tighter text-zinc-500">
            {t}
          </span>
        ))}
      </div>
    </div>
    <div className="md:col-span-8 space-y-8 font-sans">
      <div>
        <span className="text-[10px] text-zinc-600 block mb-2 uppercase tracking-widest">Challenge</span>
        <p className="text-zinc-400 leading-relaxed">{challenge}</p>
      </div>
      <div>
        <span className="text-[10px] text-zinc-600 block mb-2 uppercase tracking-widest">Solution</span>
        <p className="text-zinc-400 leading-relaxed">{solution}</p>
      </div>
      <div className="bg-white/5 p-6 border-l-2 border-white">
        <span className="text-[10px] text-white block mb-2 uppercase tracking-widest font-bold">Impact</span>
        <p className="text-white text-lg font-light leading-relaxed">{result}</p>
      </div>
    </div>
  </div>
);

export default CaseStudiesPage;
