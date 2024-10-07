import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import CTA from "./Components/CTA/CTA";
import FAQ from "./Components/FAQ/FAQ";
import Features from "./Components/Features/Features";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Properties from "./Components/Properties/Properties";
import Team from "./Components/Team/Team";

export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <Properties/>
      <About/>
      <CTA/>
      <FAQ/>
      <Team/>
      <Contact/>
      <Footer/>
    </div>
  )
}
