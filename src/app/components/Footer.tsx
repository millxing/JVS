export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white/80">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Column 1: Name / tagline */}
          <div>
            <h3 className="font-serif text-xl font-bold text-white mb-2">
              John VanScoyoc
            </h3>
            <p className="text-white/50 text-sm">
              For Brookline Select Board
            </p>
            <p className="text-white/50 text-sm mt-1">
              Election Day: May 5, 2026
            </p>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-3 uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-2 text-sm text-center md:text-left">
              <p>Committee to Elect John VanScoyoc</p>
              <p>307 Reservoir Rd.</p>
              <p>Brookline, MA 02467</p>
              <p className="mt-3">
                <a
                  href="tel:6178881663"
                  className="hover:text-gold transition-colors"
                >
                  617 888-1663
                </a>
              </p>
              <p>
                <a
                  href="mailto:jvanscoyoc0@gmail.com"
                  className="hover:text-gold transition-colors"
                >
                  jvanscoyoc0@gmail.com
                </a>
              </p>
              <div className="pt-3 flex justify-center md:justify-start">
                <a
                  href="https://www.instagram.com/jvanscoyoc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit John VanScoyoc on Instagram"
                  className="transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-dark rounded-sm"
                >
                  <img
                    src="/assets/instagram.svg"
                    alt=""
                    className="h-12 w-12"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Quick links */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-3 uppercase tracking-wider">
              Quick Links
            </h4>
            <div className="space-y-2 text-sm">
              <p>
                <a href="#platform" className="hover:text-gold transition-colors">
                  My Platform
                </a>
              </p>
              <p>
                <a href="#accomplishments" className="hover:text-gold transition-colors">
                  Track Record
                </a>
              </p>
              <p>
                <a href="#endorsements" className="hover:text-gold transition-colors">
                  Endorsements
                </a>
              </p>
              <p>
                <a href="#donors" className="hover:text-gold transition-colors">
                  Campaign Finance
                </a>
              </p>
              <p>
                <a href="#about" className="hover:text-gold transition-colors">
                  About John
                </a>
              </p>
              <p>
                <a href="#get-involved" className="hover:text-gold transition-colors">
                  Get Involved
                </a>
              </p>
              <p>
                <a
                  href="https://secure.actblue.com/donate/committee-to-elect-john-vanscoyoc-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  Donate
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-white/40 text-xs">
            Paid for by Committee to Elect John VanScoyoc
          </p>
        </div>
      </div>
    </footer>
  );
}
