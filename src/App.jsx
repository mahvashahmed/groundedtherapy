import { useEffect, useState } from 'react';
import GrowthMotif from './components/GrowthMotif';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import About from './components/About';
import WhyTherapy from './components/WhyTherapy';
import Approach from './components/Approach';
import Contact from './components/Contact';
import Footer from './components/Footer';

const isTherapistsRoute = (hash) => hash.startsWith('#/therapists');

function getPage() {
  return isTherapistsRoute(window.location.hash) ? 'therapists' : 'home';
}

export default function App() {
  const [page, setPage] = useState(getPage);

  useEffect(() => {
    const onHashChange = () => setPage(getPage());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    if (page === 'therapists') {
      window.scrollTo(0, 0);
      return;
    }

    const hash = window.location.hash;
    if (hash && !isTherapistsRoute(hash)) {
      const el = document.getElementById(hash.slice(1));
      if (el) requestAnimationFrame(() => el.scrollIntoView());
    }
  }, [page]);

  return (
    <>
      <GrowthMotif />
      <Header />
      <main>
        {page === 'therapists' ? (
          <About />
        ) : (
          <>
            <Hero />
            <Intro />
            <WhyTherapy />
            <Approach />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
