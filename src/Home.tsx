import React from 'react';
import { Hero } from './components/sections/Hero';
import { SEO } from './components/ui/SEO';

import { Features } from './components/sections/Features';
import { Audience } from './components/sections/Audience';
import { HowItWorks } from './components/sections/HowItWorks';
import { Showcase } from './components/sections/Showcase';

// import { Testimonials } from './Testimonials';

import { CTA } from './components/sections/CTA';
import { Language } from './lib/translations';

interface HomeProps {
  lang: Language;
}

export const Home: React.FC<HomeProps> = ({ lang }) => {
  return (
    <>
      <SEO
        title={lang === 'fr' ? "Accueil" : "Home"}
        description={lang === 'fr'
          ? "IkiUp est une application d’orientation et d’accompagnement qui connecte les élèves, parents et écoles."
          : "IkiUp is an orientation and support app that connects students, parents, and schools."}
      />
      <Hero lang={lang} />

      <Features lang={lang} />
      <Audience lang={lang} />
      <HowItWorks lang={lang} />
      <Showcase lang={lang} />

      {/* <Testimonials /> */}

      <CTA lang={lang} />
    </>
  );
};