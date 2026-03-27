"use client";

import ScrollReveal from "./ScrollReveal";

export default function Welcome() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-gold font-semibold text-sm tracking-widest uppercase">
              2026 Election
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-3">
              Welcome to the Contest
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="space-y-5 text-warm-gray leading-relaxed text-lg">
            <p>
              The uncertainty is over.
            </p>
            <p>
              <strong className="text-navy">
                It&apos;s now official. Three candidates will vye
              </strong>{" "}
              for two seats on the Select Board. Having been elected in 2020 and
              again in 2023 (with 6,000+ votes!) I&apos;m looking forward to
              campaigning hard to reach as many of you as possible in the weeks
              between now and election day, May 5.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
