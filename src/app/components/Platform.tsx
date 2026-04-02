"use client";

import ScrollReveal from "./ScrollReveal";

const platforms = [
  {
    number: "1",
    title: "Experience Counts",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    points: [
      <>
        At a crucial time for Brookline&apos;s future, with another override on
        the ballot and a much-needed development plan for Chestnut Hill West
        hanging in the balance, the Select Board needs my{" "}
        <strong className="text-navy">informed and balanced approach.</strong>
      </>,
      <>
        I&apos;m committed to what&apos;s best for neighborhoods AND the Town as a
        whole.{" "}
        <strong className="text-navy">Commercial tax revenue</strong> such as
        Chestnut Hill West promises is crucial. So is{" "}
        <strong className="text-navy">listening and responding</strong>{" "}to the
        residents of Sheaff and Heath Streets and Woodland Road who will be
        impacted by a surge in development on the Office Park site. I&apos;ve met
        with residents AND developers to get the best results for both. That
        work will continue all the way to Town Meeting.
      </>,
      <>
        <span className="block mb-2">As for the override question that will appear on the May 5 ballot:</span>
        <ul className="list-disc pl-5 space-y-2 text-warm-gray">
          <li>
            I believe &mdash; and advocated to the Select Board &mdash; that the May 5 override question be framed{" "}
            <strong className="text-navy">as a choice</strong> of either the{" "}
            <strong className="text-navy">full-request</strong> amount ($23.25 million) or a{" "}
            <strong className="text-navy">spending-restraint</strong> amount (85% of full-request). My proposal failed to win a majority vote on the Select Board.
          </li>
          <li>
            I remain committed to <strong className="text-navy">choice</strong> (more than one spending option) on future override ballots.
          </li>
          <li>
            Protecting services <strong className="text-navy">and</strong>{" "}
            spending restraint are equally important goals. Both must be recognized when framing override ballots.
          </li>
          <li>
            Our ultimate goal must be <strong className="text-navy">sustainable budget growth</strong>{" "}<strong className="text-navy">without endless overrides</strong>. This will require bringing our personnel costs (wages, salaries, and benefits) in line with Brookline&apos;s average of 3%-3.5% annual increase in revenues.
          </li>
        </ul>
      </>,
    ],
  },
  {
    number: "2",
    title: "I\u2019m Independent",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    subtitle: "Expect the unexpected from me as a candidate. I propose that we:",
    points: [
      <>
        <strong className="text-navy">
          Update our inventory of Town properties
        </strong>
        , in order to test the market value of any that might soon lose their
        usefulness. (The Water and Sewer garage on Netherlands Road is just one
        example that gets mentioned.)
      </>,
      <>
        <strong className="text-navy">
          Pause spending on the Beacon Street bridle path
        </strong>{" "}
        until we get a realistic estimate of the total costs, as well as the
        expected disruption to Beacon Street during construction, and the
        inevitable sacrifice of trees, parking spaces, and other amenities
        currently in the right of way.
      </>,
      <>
        <strong className="text-navy">
          Create a &ldquo;tax pinch&rdquo; test for future overrides
        </strong>{" "}
        (after FY27). In short, budget needs and tax burdens should
        factor into the calculation of overrides. There&apos;s no perfect formula
        &mdash; but seeking one is worth the effort. (And voters will let us
        know if we get it wrong.)
      </>,
    ],
  },
];

export default function Platform() {
  return (
    <section id="platform" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-gold font-semibold text-sm tracking-widest uppercase">
              My Platform
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-3">
              A Two-Point Message
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {platforms.map((item, idx) => (
            <ScrollReveal
              key={item.number}
              delay={idx * 150}
              direction={idx === 0 ? "left" : "right"}
            >
              <div className="bg-warm-white rounded-2xl shadow-sm border border-cream-dark p-8 md:p-10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-navy/5 flex items-center justify-center text-navy">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-gold font-bold text-sm">Point {item.number}</span>
                    <h3 className="font-serif text-2xl font-bold text-navy">
                      {item.title}
                    </h3>
                  </div>
                </div>
                {item.subtitle && (
                  <p className="text-warm-gray mb-4 italic">{item.subtitle}</p>
                )}
                <ul className="space-y-4">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-sage shrink-0" />
                      <span className="text-warm-gray leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
