"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const accomplishments = [
  "We backed up Brookline\u2019s commitment to climate change goals by adding ground source heat pump technology to the Driscoll School project.",
  "We committed to an ongoing partnership with the Brookline Housing Authority to seek funds to improve the conditions of BHA units.",
  "We completed the purchase of the Newbury parcel on Fisher Hill and won voter approval of the Community Preservation Act \u2014 good investments in Brookline\u2019s future.",
  "With Town Meeting approval, we recouped the costs of three Town-purchased townhouses on Oak Street by offering them for sale.",
  "Our Treasurer borrowed millions for school projects at record low interest rates.",
  "As part of Covid relief efforts we appropriated funds for the Brookline Safety Net and Brookline Food Pantry as well as the BHA.",
  "We hired Town Administrator Chas Carey and retained Deputy Town Administrator Melissa Goff and maintained Brookline\u2019s tradition of excellence in leadership in all Town departments.",
  "We completed the ARPA process. Notable grants: Steps to Success, Women Thriving, Black \u2018n Brown Club, Food Pantry, Teen Center. Chamber of Commerce.",
  "We backed the successful debt exclusion ballot question for repair of fire stations.",
  "Through the Transportation Board, we launched the Vision Zero process for achieving zero traffic-related deaths.",
  "We launched the SB\u2019s practice of in-depth meetings dedicated to discussing the budget and broader town priorities.",
  "Brookline passed its largest rezoning plan and became one of the first ten communities to receive access to a fossil-fuel-free building code.",
];

const challenges = [
  "Steer the Chestnut Hill West project to a successful 2/3 vote at Town Meeting by balancing revenue needs and project feasibility with respect for neighborhood preservation.",
  "Close Brookline\u2019s FY27 budget gaps (Town and School) either through override proposals or revenue initiatives or austerity or \u201Csome of the above or all of the above.\u201D",
  "Use the expertise of the Housing Advisory Board, CDC, BHA, Community Preservation Act Committee, and advocacy groups to grow housing \u2014 public and private, all-affordable or with affordable minimums.",
  "Arrive at a community consensus on the opportunity created by the Fisher Hill West campus acquisition.",
  "Expand upon Brookline\u2019s sustainability initiatives, including rooftop solar, and our accelerated Pavement Improvement Program, including multi-modal safety initiatives.",
];

export default function Accomplishments() {
  const [showAll, setShowAll] = useState(false);
  const visibleAccomplishments = showAll
    ? accomplishments
    : accomplishments.slice(0, 6);

  return (
    <section id="accomplishments" className="py-20 md:py-28 bg-warm-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-gold font-semibold text-sm tracking-widest uppercase">
              Track Record
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-3">
              Accomplishments &amp; Challenges
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
            <p className="text-warm-gray mt-4 max-w-3xl mx-auto italic">
              Serving on the Select Board is not a solo act. It requires
              conversation, collegiality and consensus. With that in mind, credit
              for this list goes to the 5-member board on which I&apos;ve served
              since 2020.
            </p>
          </div>
        </ScrollReveal>

        {/* Select Board photo */}
        <ScrollReveal className="mb-12">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/JVS/sb_upscaled.png"
                alt="Brookline Select Board in session"
                className="w-full h-auto"
              />
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Accomplishments */}
          <ScrollReveal direction="left">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-sage/15 flex items-center justify-center text-sage">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-bold text-navy">
                  Accomplishments
                </h3>
              </div>
              <ul className="space-y-3">
                {visibleAccomplishments.map((item, i) => (
                  <li key={i} className="flex gap-3 group">
                    <span className="mt-2 w-2 h-2 rounded-full bg-sage shrink-0 group-hover:scale-150 transition-transform" />
                    <span className="text-warm-gray leading-relaxed text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              {accomplishments.length > 6 && (
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="mt-4 inline-flex items-center gap-1.5 text-navy font-semibold text-sm hover:text-gold transition-colors"
                >
                  {showAll
                    ? "Show fewer"
                    : "View more accomplishments"}
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              )}
            </div>
          </ScrollReveal>

          {/* Challenges */}
          <ScrollReveal direction="right" delay={150}>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center text-gold">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-bold text-navy">
                  Challenges Ahead
                </h3>
              </div>
              <ul className="space-y-3">
                {challenges.map((item, i) => (
                  <li key={i} className="flex gap-3 group">
                    <span className="mt-2 w-2 h-2 rounded-full bg-gold shrink-0 group-hover:scale-150 transition-transform" />
                    <span className="text-warm-gray leading-relaxed text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Ribbon cutting and turkey photos */}
        <ScrollReveal className="mt-12">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="rounded-2xl overflow-hidden" style={{ width: "60%" }}>
              <img
                src="/JVS/ribbon.png"
                alt="Ribbon cutting ceremony"
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ width: "31.25%" }}>
              <img
                src="/JVS/turkey.png"
                alt="Turkey distribution event"
                className="w-full h-auto"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
