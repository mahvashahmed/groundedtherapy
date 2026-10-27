import Header from './components/Header';
import Hero from './components/Hero';
import WhyTherapy from './components/WhyTherapy';
import About from './components/About';
import Approach from './components/Approach';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <WhyTherapy />
        <About />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
