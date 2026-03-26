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
      "Elected in 2020 and again in 2023 with 6,000+ votes — a proven track record of earning community trust.",
      "Committed to what\u2019s best for neighborhoods AND the Town as a whole. Commercial tax revenue is crucial, and so is listening to residents impacted by development.",
      "Pledged to find the sweet spot on the $19M+ tax cap override — protecting services while keeping taxes bearable for all.",
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
    points: [
      "Update our inventory of Town properties to test market value of any that might soon lose their usefulness.",
      "Pause spending on the Beacon Street bridle path until we get realistic cost estimates and understand the impact on trees, parking, and amenities.",
      'Create a "tax pinch" test for future overrides — budget needs AND tax burdens should both factor into the calculation.',
    ],
  },
];

export default function Platform() {
  return (
    <section id="platform" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm tracking-widest uppercase">
            My Platform
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-3">
            A Two-Point Message
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {platforms.map((item) => (
            <div
              key={item.number}
              className="bg-warm-white rounded-2xl shadow-sm border border-cream-dark p-8 md:p-10 hover:shadow-md transition-shadow"
            >
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
              <ul className="space-y-4">
                {item.points.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-sage shrink-0" />
                    <span className="text-warm-gray leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
