"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const featuredEndorsers = [
  { name: "Bernard Greene", title: "Select Board Chair" },
  { name: "David Pearlman", title: "Select Board Vice Chair" },
  { name: "Paul Warren", title: "Select Board" },
  { name: "Michael Merrill", title: "Select Board 1990\u20131996, 2004\u20132007" },
  { name: "Zvi (Skip) Sesling", title: "Select Board, 1984\u20131990" },
  { name: "Richard Benka", title: "Select Board, 2008\u20132014" },
  { name: "Kenneth Goldstein", title: "Select Board, 2009\u20132015" },
  { name: "Robert Weintraub", title: "School Committee" },
  { name: "Carolyn Thall", title: "School Committee" },
  { name: "Danna Perry", title: "School Committee" },
  { name: "Jesse Hefter", title: "School Committee" },
  { name: "Liz Linder", title: "2025 Select Board candidate" },
  { name: "Kate Poverman", title: "Former Town Moderator" },
  { name: "Sandy Gadsby", title: "Former Town Moderator" },
];

const communityEndorsers = [
  "Nancy Adler", "Pat Ahlin", "Martina Albright", "Saralynn Allaire",
  "Pamela Allara", "Scott Andersen", "Rosemary Ashby", "John Bassett",
  "Jim Batchelor", "Clara Batchelor", "Carla Benka", "Jerry Berger", "Susan Berger",
  "Eileen Berger", "Michael Berger", "Henry Berman", "Ben Birnbaum", "Peter Bleyleben",
  "Sara Salvo Blood", "Roger Blood", "Sam Botsford", "Edie Brickman",
  "Pauline Ho Byпum", "Narcissa Campion", "Peggy Campion", "Elizabeth Childs", "Tracy Clark", "Abby Coffin",
  "Susan F Cohen", "Debby K Cohen", "George Cole", "Susan Helms Daley", "Susan Dechter",
  "John Dempsey", "Marie desJardins", "Murray Dewart", "Mary Dewart",
  "Dennis Dewitt", "John Doggett", "Wendy Drobnyk", "David Eisenberg", "Elton Elperin", "Tom Elwertowski",
  "Elizabeth Erdman", "Sarah Ericsson", "Susan Erickson", "Anne Farrington",
  "Chuck Farrington", "Jonathan Fine", "Marcia Fisch", "Julian Fisher", "Jane Flanagan", 
  "Dale Flecker", "Jean-Senat Fleury", "Marion Freedman-Gurspan", "Anita Fritze",
  "Jane Gilman", "David Marc Goldstein", "Ellen Golde", "Bambi Good", "Ellen Goodman",
  "Rhoda Goodwin", "Mark Gray", "Nathan Gunner", "Sally Guy",
  "Tori Hackett", "Benedicte Hallowell", "Rory Hallowell", "Casey Hatchett",
  "Debbie Hatzieleftheriadis", "Gerard Hayes", "Barbara Hebert",
  "John Hebert", "Robin Hennessey", "Carol Hillman", "Richard Houlihan", "Janice Houlihan", "Fran Hoy",
  "Richard Mazandi Iseke", "Cerise Jacobs", "Nicholas Johnson",
  "Joyce Jozwicki", "Barr Jozwicki", "Janice Kahn", "Ruth Kaplan",
  "Priscilla Karnovsky", "Kitty Kaufman", "Janet Kawada", "David King",
  "Kristine Knauf", "Geri Lambert", "Jonathan Lau", "Marian Lazar",
  "Gerald Lazar", "Frederick Lebow", "Stephen Ledbetter", "Don Leka", "David Lescohier", "Carol Levin",
  "Bruce Levin", "Fred Levitan", "Alan Leviton", "Mark Levy", "Nancy Lew", "Ken Lewis",
  "Karen Livingston", "Pam Lodish", "Mark Lowenstein", "Richard Mai",
  "Carol Macbain", "Lucy Mack", "Linda Mancini", "Jon Margolis",
  "Hugh Mattison", "Arlene Mattison", "Michael Maynard", "Chris McArdle",
  "Colin McArdle", "Diana McClure", "John McCullough", "Eric McNulty",
  "Steve Mead", "Letitia Mead", "Randolph Meiklejohn", "Robert Melzer",
  "Dr Keith Merlin", "Judy Meyers", "Jessica Milhem", "Paul Hart Miller",
  "Peggy Morrison", "Tom Mullin", "Terry Murphy", "Wendy Murphy", "Richard Nangle", "Kendra O'Donnell",
  "Larry Onie", "John Parla", "Linda Olson Pehlke", "Danna Perry",
  "Alisa Plazonja", "Betsy Pollock", "Susan Podziba", "Luisa Raposo",
  "Judy Reece", "Gleeson Rebello", "Peter Richardson", "Pam Roberts", "Felina Silver Robinson", "Karen Patinha Rojas", "Rosemarie Roque",
  "Barry Rosen", "A. Joseph Ross", "Jeffrey Ross", "Christine Rossell", "Stuart Rubinow", "Renee Ruthel",
  "Bonnie Sashin", "Cheryl Schaffer", "Jill Schiff", "Cathleen Schoen",
  "Robert Schoen", "Yael Neeman Schubert", "John Seay", "Judy Selwyn", "Lee Selwyn",
  "Matthew Shakespeare", "Ronnie Shapiro", "Jim Shea", "Nancy Shea", "Francis Shedd-Fisher", "Barbara Sherman",
  "John Sherman", "Ellen Shoner", "John Shreffler", "Harold Simansky", "Ariel Soiffer", "Diana Spiegel",
  "Stanley Spiegel", "Alexandra Spingarn", "Charles Terrell", "Molly Turlisch",
  "Judith Vanderkay", "Barbara VanScoyoc", "Kathleen Vieweg",
  "Donnie Wolosenko", "Jerry Wolosenko", "Mark Zarrillo",
];

export default function Endorsements() {
  const [showAll, setShowAll] = useState(false);
  const endorsementCount = featuredEndorsers.length + communityEndorsers.length;

  return (
    <section id="endorsements" className="py-20 md:py-28 bg-warm-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-gold font-semibold text-sm tracking-widest uppercase">
              Endorsements
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-3">
              Trusted by Brookline Leaders
            </h2>
            <p className="text-warm-gray mt-3 text-lg">
              {endorsementCount} endorsement{endorsementCount === 1 ? "" : "s"} and growing
            </p>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
          </div>
        </ScrollReveal>

        {/* Featured endorsers */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {featuredEndorsers.map((e, i) => (
            <ScrollReveal key={e.name} delay={Math.min(i * 60, 400)}>
              <div className="bg-cream rounded-xl px-5 py-4 border border-cream-dark hover:border-gold/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <p className="font-semibold text-navy">{e.name}</p>
                <p className="text-warm-gray text-sm">{e.title}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Community endorsers */}
        <ScrollReveal>
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 text-[1.5rem] text-navy font-semibold hover:text-gold transition-colors"
            >
              {showAll
                ? "Hide community endorsers"
                : "View all community endorsers"}
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showAll && (
              <div className="mt-8 columns-2 sm:columns-3 md:columns-4 gap-4 text-left">
                {communityEndorsers.map((name) => (
                  <p
                    key={name}
                    className="text-warm-gray text-sm py-1 hover:text-navy transition-colors"
                  >
                    {name}
                  </p>
                ))}
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
