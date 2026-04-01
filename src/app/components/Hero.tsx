"use client";

import { useCountUp } from "../hooks/useCountUp";

function StatCounter({
  end,
  suffix,
  label,
}: {
  end: number;
  suffix: string;
  label: string;
}) {
  const { ref, count } = useCountUp(end, 1800);
  return (
    <div className="text-center">
      <span ref={ref} className="block font-serif text-3xl md:text-4xl font-bold text-white">
        {count.toLocaleString()}
        {suffix}
      </span>
      <span className="text-white/60 text-sm">{label}</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-24 pb-32"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light" />

      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gold/5 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-sage/10 translate-y-1/2 -translate-x-1/3" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Portrait */}
        <div className="animate-fade-in-up mb-6">
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-white/20 shadow-lg shadow-black/20 hover:border-gold/50 transition-all duration-500">
            <img
              src="/jvs2.png"
              alt="John VanScoyoc"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Badge */}
        <div className="animate-fade-in-up inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
          <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
          <span className="text-white/90 text-sm font-medium tracking-wide">
            Election Day: May 5, 2026
          </span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-in-up animation-delay-200 font-serif text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
          Re-Elect John
          <br />
          <span className="text-gold-light">VanScoyoc</span>
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-in-up animation-delay-400 text-xl md:text-2xl text-white/80 font-light mb-4 max-w-2xl mx-auto">
          Experience. Independence. Brookline.
        </p>
        <p className="animate-fade-in-up animation-delay-400 text-base text-white/60 mb-10 max-w-xl mx-auto">
          Brookline Select Board
        </p>

        {/* Stats */}
        <div className="animate-fade-in-up animation-delay-400 flex justify-center gap-12 md:gap-16 mb-12">
          <StatCounter end={6000} suffix="+" label="Votes in 2023" />
          <StatCounter end={40} suffix="+" label="Years in Brookline" />
          <StatCounter end={5} suffix="" label="Years on Select Board" />
        </div>

        {/* CTAs */}
        <div className="animate-fade-in-up animation-delay-400 flex flex-col sm:flex-row gap-4 justify-center relative z-10">
          <a
            href="#get-involved"
            className="bg-gold hover:bg-gold-dark text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-lg hover:shadow-gold/25 hover:scale-105"
          >
            Join the Campaign
          </a>
          <a
            href="https://secure.actblue.com/donate/committee-to-elect-john-vanscoyoc-1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/25 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
          >
            Donate Now
          </a>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 C360,120 720,0 1080,64 C1260,96 1380,80 1440,64 L1440,120 L0,120 Z"
            fill="#FAF7F2"
          />
        </svg>
      </div>
    </section>
  );
}
