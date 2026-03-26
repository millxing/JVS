export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-warm-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-navy/10 to-sage/20 rounded-2xl flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <svg className="w-16 h-16 text-navy/20 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <p className="text-navy/30 text-sm font-medium">Family Photo</p>
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/10 rounded-2xl -z-10" />
          </div>

          {/* Bio text */}
          <div>
            <span className="text-gold font-semibold text-sm tracking-widest uppercase">
              About John
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-3 mb-6">
              A Life Dedicated to Community
            </h2>

            <div className="space-y-4 text-warm-gray leading-relaxed">
              <p>
                John VanScoyoc is a 40+ year Brookline resident, living on
                Reservoir Road with his wife Barbara. Their children Robert and
                Ellen are proud graduates of Brookline public schools. Now
                retired, John delights in his grandchildren Aziza, Lyla, and
                William.
              </p>
              <p>
                A career journalist, John spent 23 years as a producer of
                nightly news programs for NECN/NBC10 Boston, working with
                notable names like Sue O&apos;Connell and Chet Curtis. Before that,
                he was managing editor of Christopher Lydon&apos;s 10 O&apos;Clock News
                on WGBH and editor of Citizen Group Publications.
              </p>
              <p>
                John has served as president and treasurer of the Brookline
                Historical Society, Town Meeting Member from Precinct 13, and
                board member at Brookline Center for Community Mental Health
                and Brookline Adult &amp; Community Education.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="bg-cream rounded-full px-4 py-2 text-sm text-navy font-medium border border-cream-dark">
                40+ Years in Brookline
              </span>
              <span className="bg-cream rounded-full px-4 py-2 text-sm text-navy font-medium border border-cream-dark">
                Retired Journalist
              </span>
              <span className="bg-cream rounded-full px-4 py-2 text-sm text-navy font-medium border border-cream-dark">
                Community Volunteer
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
