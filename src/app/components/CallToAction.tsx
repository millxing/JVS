"use client";

import ScrollReveal from "./ScrollReveal";

const actions = [
  {
    label: "Donate",
    description: "Support the campaign with a contribution",
    href: "https://secure.actblue.com/donate/committee-to-elect-john-vanscoyoc-1",
    external: true,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    label: "Endorse",
    description: "Add your name to our growing list",
    href: "mailto:jvanscoyoc0@gmail.com?subject=I%20endorse%20John%20VanScoyoc",
    external: false,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    label: "Offer a Sign",
    description: "Display a yard or window sign",
    href: "mailto:jvanscoyoc0@gmail.com?subject=Sign%20Location%20Offer",
    external: false,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
      </svg>
    ),
  },
  {
    label: "Volunteer",
    description: "Help spread the word to friends",
    href: "mailto:jvanscoyoc0@gmail.com?subject=I%20want%20to%20volunteer",
    external: false,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function CallToAction() {
  return (
    <section id="get-involved" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="bg-gradient-to-br from-navy via-navy-dark to-navy rounded-3xl px-8 py-16 md:p-16 text-center overflow-hidden relative">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-sage/10 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">
                Join the Campaign Today
              </h2>
              <p className="text-white/70 text-lg mb-12 max-w-xl mx-auto">
                Time is short. There are many ways to help re-elect John to the
                Select Board.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {actions.map((a, i) => (
                  <a
                    key={a.label}
                    href={a.href}
                    target={a.external ? "_blank" : undefined}
                    rel={a.external ? "noopener noreferrer" : undefined}
                    className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/15 hover:border-white/30 rounded-2xl p-6 text-left transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-black/20"
                    style={{
                      animationDelay: `${i * 100}ms`,
                    }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center text-gold-light mb-4 group-hover:bg-gold/40 group-hover:scale-110 transition-all duration-300">
                      {a.icon}
                    </div>
                    <h3 className="text-white font-bold text-lg mb-1">
                      {a.label}
                    </h3>
                    <p className="text-white/60 text-sm group-hover:text-white/80 transition-colors">
                      {a.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Tavern campaign event photo */}
        <ScrollReveal className="mt-12">
          <div className="max-w-2xl mx-auto">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/JVS/tavern.png"
                alt="Campaign event at Washington Square Tavern"
                className="w-full h-auto"
              />
            </div>
            <p className="text-warm-gray text-xs mt-3 italic text-center">
              Campaign kickoff at Washington Square Tavern
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
