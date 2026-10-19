import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Readings from "./components/Readings.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Booking from "./components/Booking.jsx";
import Faq from "./components/Faq.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main id="topo">
        <Hero />
        <Readings />
        <HowItWorks />
        <Booking />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
