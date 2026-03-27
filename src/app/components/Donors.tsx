"use client";

import ScrollReveal from "./ScrollReveal";

export default function Donors() {
  return (
    <section id="donors" className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-gold font-semibold text-sm tracking-widest uppercase">
              Campaign Finance
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-3">
              Local Campaigns. Local Dollars. $250 Cap.
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="bg-warm-white rounded-2xl border border-cream-dark p-8 md:p-10 mb-10">
            <p className="text-warm-gray leading-relaxed mb-6">
              Just as was true in 2020 and 2023, the limits below will apply to my
              campaign for Select Board. (All other 2026 candidates are invited to
              adopt these same limits. Local democracy shouldn&apos;t favor big
              dollar donors, outsiders and self-funders.)
            </p>

            <ul className="space-y-4">
              <li className="flex gap-3 group">
                <span className="mt-2 w-2 h-2 rounded-full bg-sage shrink-0 group-hover:scale-150 transition-transform" />
                <span className="text-warm-gray leading-relaxed">
                  Solicitations will be limited to residents of Brookline, former
                  residents of Brookline, those who work and conduct businesses in
                  Brookline, and immediate family members (because who wants to say
                  &ldquo;no&rdquo; to a parent or sibling or adult child who
                  offers help?).
                </span>
              </li>
              <li className="flex gap-3 group">
                <span className="mt-2 w-2 h-2 rounded-full bg-sage shrink-0 group-hover:scale-150 transition-transform" />
                <span className="text-warm-gray leading-relaxed">
                  No acceptance of funds from non-local fundraising networks.
                </span>
              </li>
              <li className="flex gap-3 group">
                <span className="mt-2 w-2 h-2 rounded-full bg-sage shrink-0 group-hover:scale-150 transition-transform" />
                <span className="text-warm-gray leading-relaxed">
                  No donations accepted from political action committees or the
                  leftover campaign funds of other candidates in other elections.
                </span>
              </li>
              <li className="flex gap-3 group">
                <span className="mt-2 w-2 h-2 rounded-full bg-sage shrink-0 group-hover:scale-150 transition-transform" />
                <span className="text-warm-gray leading-relaxed">
                  And finally, my favorite rule: funds remaining after this
                  campaign committee is dissolved will be donated to local
                  charities.
                </span>
              </li>
            </ul>
          </div>
        </ScrollReveal>

        {/* Donate CTA */}
        <ScrollReveal delay={300}>
          <div className="text-center">
            <a
              href="https://secure.actblue.com/donate/committee-to-elect-john-vanscoyoc-1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gold/25 hover:scale-105"
            >
              Donate Online
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
            <p className="text-warm-gray text-sm mt-4">
              or mail a check to: John VanScoyoc Committee, 307 Reservoir Rd.,
              Brookline, MA 02467
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
