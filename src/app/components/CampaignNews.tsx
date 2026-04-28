"use client";

import ScrollReveal from "./ScrollReveal";

export default function CampaignNews() {
  return (
    <section className="pb-20 md:pb-28">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-10">
            <span className="text-sage font-semibold text-sm tracking-widest uppercase">
              Election Update
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-3">
              Campaign breaking news from Brookline
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <figure className="max-w-3xl mx-auto">
            <div className="overflow-hidden rounded-2xl shadow-xl shadow-navy/10 border border-navy/10 bg-warm-white">
              <img
                src="/assets/Tavern2026.jpeg"
                alt="Campaign event at Washington Square Tavern"
                className="w-full h-auto"
              />
            </div>
            <figcaption className="mt-5 text-warm-gray text-base md:text-lg leading-relaxed italic">
              That&apos;s former MA Lt. Gov. Evelyn Murphy (Dukakis admin.) 2nd
              from right. Event earlier today at a Washington Square Tavern.
              Best food (and beer) ever! Thanks to my ever-loyal supporters.
              Third term straight ahead.
            </figcaption>
          </figure>
        </ScrollReveal>
      </div>
    </section>
  );
}
