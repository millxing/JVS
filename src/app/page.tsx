import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Platform from "./components/Platform";
import Endorsements from "./components/Endorsements";
import CallToAction from "./components/CallToAction";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Platform />
      <Endorsements />
      <CallToAction />
      <About />
      <Footer />
    </>
  );
}
