"use client";

import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-warm-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-gold font-semibold text-sm tracking-widest uppercase">
              My Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-3">
              A Life Dedicated to Community
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
          </div>
        </ScrollReveal>

        {/* Family & Photo */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="/family.png"
                  alt="The VanScoyoc family in Islesboro, Maine, 2022"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/10 rounded-2xl -z-10" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={150}>
            <div>
              <h3 className="font-serif text-2xl font-bold text-navy mb-4">
                Meet My Family
              </h3>
              <div className="space-y-4 text-warm-gray leading-relaxed">
                <p>
                  Meet my wife Barbara, my children Robert and Ellen, their
                  spouses Jennifer and Caleb, and my grandchildren: Aziza, Lyla,
                  and William. The photo was taken in Islesboro, Maine in 2022 by
                  Caleb.
                </p>
                <p>
                  Robert and Ellen are proud graduates of Heath (now Hayes) School
                  and BHS, where their headmaster was &ldquo;Dr. Bob&rdquo;
                  Weintraub.
                </p>
                <p>
                  This family is my pride and joy. They probably think I should
                  give my political pursuits a rest. But I&apos;m glad they&apos;ve
                  indulged me in this latest contest.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Grandchildren photo */}
        <ScrollReveal className="mb-16">
          <div className="max-w-md mx-auto">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/family2.png"
                alt="John's grandchildren"
                className="w-full h-auto"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Career */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <ScrollReveal direction="left">
            <div>
              <h3 className="font-serif text-2xl font-bold text-navy mb-4">
                My Profession
              </h3>
              <div className="space-y-4 text-warm-gray leading-relaxed">
                <p>
                  In 2018, I retired after 23 years as a producer of nightly
                  news / talk programs for New England Cable News / NBC10 Boston. I
                  was honored to work with some notable Boston TV names: most
                  recently, Sue O&apos;Connell (&ldquo;The Take&rdquo; host).
                  Prior to Sue there was Jim Braude
                  (&ldquo;Broadside&rdquo;); Chet Curtis
                  (&ldquo;NewsNight&rdquo;); and R.D. Sahl
                  (&ldquo;NewsNight&rdquo;).
                </p>
                <p>
                  Prior to NECN/NBC10 Boston I worked for 10 years as managing
                  editor of Christopher Lydon&apos;s 10 O&apos;Clock News on
                  WGBH.
                </p>
                <p>
                  And prior to that, for the first 10 years of my career in
                  journalism, I was editor of Citizen Group Publications &mdash; a
                  family-owned weekly newspaper chain for Brookline,
                  Allston-Brighton, and Back Bay/Beacon Hill/Fenway in Boston.
                </p>
                <p>
                  Journalism was my dream job from my days as editor of the high
                  school newspaper (Staples in Westport, CT). I will never take
                  for granted how fortunate I have been to realize my dream.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={150}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/profession.png"
                  alt="John's career in journalism"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-sage/10 rounded-2xl -z-10" />
            </div>
          </ScrollReveal>
        </div>

        {/* Committed to Brookline */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/memorial.png"
                  alt="John at a community event in Brookline"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/10 rounded-2xl -z-10" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={150}>
            <div>
              <h3 className="font-serif text-2xl font-bold text-navy mb-4">
                Committed to Brookline
              </h3>
              <div className="space-y-4 text-warm-gray leading-relaxed">
                <p>
                  And then there is this wonderful town we call Brookline. I
                  can&apos;t get enough of it. I&apos;ve served as president and
                  treasurer of the Brookline Historical Society; Town Meeting
                  Member from Precinct 13; board member (recently retired) at
                  Brookline Center for Community Mental Health; board of Brookline
                  Adult and Community Education; volunteer for the New England
                  Region of Met Opera Auditions.
                </p>
                <p>
                  To my next door neighbors, I&apos;m the guy who mows his own
                  lawn and keeps a raspberry patch that has fed many a passer-by.
                  If only my tomatoes would learn from the raspberries!
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
