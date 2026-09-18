import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import About from './components/About';
import WhyTherapy from './components/WhyTherapy';
import Approach from './components/Approach';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <About />
        <WhyTherapy />
        <Approach />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
