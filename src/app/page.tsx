import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Platform from "./components/Platform";
import Accomplishments from "./components/Accomplishments";
import Endorsements from "./components/Endorsements";
import Donors from "./components/Donors";
import CallToAction from "./components/CallToAction";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Welcome />
      <Platform />
      <Accomplishments />
      <Endorsements />
      <Donors />
      <CallToAction />
      <About />
      <Footer />
    </>
  );
}
