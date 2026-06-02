
import React, { useEffect, useState } from 'react';
import { LELIS_ASCII, CONSULTING_ASCII } from '../constants';

const AsciiHeader: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-start justify-center py-20 px-8 md:px-16 overflow-hidden min-h-[600px] w-full border-b border-white/10 bg-gradient-to-r from-black via-zinc-950 to-black">
      <div 
        className={`transition-all duration-1000 ease-out transform w-full ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
        }`}
      >
        <pre className="text-[0.45rem] sm:text-[0.7rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.4rem] leading-[1.1] text-white font-mono whitespace-pre text-left drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
          {LELIS_ASCII}
        </pre>
      </div>
      <div 
        className={`transition-all duration-1000 delay-200 ease-out transform w-full mt-4 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
        }`}
      >
        <pre className="text-[0.3rem] sm:text-[0.4rem] md:text-[0.55rem] lg:text-[0.65rem] xl:text-[0.75rem] leading-[1.1] text-zinc-400 font-mono whitespace-pre text-left tracking-tighter">
          {CONSULTING_ASCII}
        </pre>
      </div>
      
      <div className={`mt-12 flex flex-col items-start gap-4 transition-all duration-1000 delay-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
        <h1 className="text-2xl md:text-4xl font-light tracking-tight text-white max-w-2xl">
          Enterprise AI: From Prototype to Production.
        </h1>
        <div className="flex items-center gap-6">
          <div className="h-[1px] w-12 bg-white/40"></div>
          <span className="text-zinc-500 tracking-[0.2em] uppercase text-xs md:text-sm font-light">
            Scalable Machine Learning Solutions
          </span>
        </div>
      </div>
    </div>
  );
};

export default AsciiHeader;
