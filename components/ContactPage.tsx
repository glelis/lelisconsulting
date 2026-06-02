import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <section className="pt-32 pb-32 bg-zinc-950 px-8 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-4">CONTACT.</h1>
          <div className="h-1 w-20 bg-white"></div>
          <p className="text-zinc-400 text-lg leading-relaxed font-sans max-w-3xl mt-8">
            Discussing a project, a hire, or an architecture review — I read everything personally
            and reply in one business day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-1 mb-32">
          <ContactCard
            label="Email"
            primary="g.lelis.silva@gmail.com"
            href="mailto:g.lelis.silva@gmail.com"
            note="Preferred channel. Include a short context and what you'd like to discuss."
          />
          <ContactCard
            label="Based In"
            primary="Basel, Switzerland"
            note="CET / CEST timezone. Engagements across Brazil, USA, EU, and CH."
          />
        </div>

        <div className="border border-white/10 p-10 md:p-12 bg-black">
          <p className="text-[10px] tracking-[0.5em] uppercase text-zinc-600 mb-6">What to expect</p>
          <div className="grid md:grid-cols-3 gap-8 text-sm font-sans text-zinc-400 leading-relaxed">
            <div>
              <p className="text-white font-bold mb-2 text-xs uppercase tracking-widest">First reply</p>
              <p>Direct response, no auto-sequences.</p>
            </div>
            <div>
              <p className="text-white font-bold mb-2 text-xs uppercase tracking-widest">Discovery call</p>
              <p>We&apos;ll cover the problem, constraints, and whether I&apos;m the right fit.</p>
            </div>
            <div>
              <p className="text-white font-bold mb-2 text-xs uppercase tracking-widest">Engagement</p>
              <p>Fixed-scope deliveries, retainers, or fractional ML leadership. Remote-first; on-site available.</p>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-12 border-t border-white/10 flex justify-end">
          <div className="text-right">
            <p className="text-[10px] tracking-[0.4em] text-zinc-600 uppercase mb-2">See the work</p>
            <a
              href="#/case-studies"
              className="text-sm text-zinc-300 hover:text-white transition-colors underline underline-offset-4"
            >
              Case studies →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ContactCardProps {
  label: string;
  primary: string;
  href?: string;
  external?: boolean;
  note: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ label, primary, href, external, note }) => {
  const content = (
    <div className="group bg-zinc-900/10 border border-white/5 p-10 hover:bg-white hover:text-black transition-all duration-300 flex flex-col h-full min-h-[220px]">
      <span className="text-[10px] block mb-6 opacity-40 group-hover:opacity-100 transition-opacity font-mono tracking-widest uppercase">
        {label}
      </span>
      <p className="text-2xl font-light tracking-tight mb-6 break-all">{primary}</p>
      <p className="text-zinc-500 group-hover:text-zinc-800 text-sm leading-relaxed font-sans mt-auto">
        {note}
      </p>
    </div>
  );

  if (!href) return content;
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="block"
    >
      {content}
    </a>
  );
};

export default ContactPage;
