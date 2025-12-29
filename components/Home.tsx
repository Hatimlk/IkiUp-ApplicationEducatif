import React from 'react';
import { Hero } from './Hero';
import { SEO } from './SEO';
import { Context } from './Context';
import { Features } from './Features';
import { Audience } from './Audience';
import { HowItWorks } from './HowItWorks';
import { Showcase } from './Showcase';
import { Pricing } from './Pricing';
// import { Testimonials } from './Testimonials';

import { CTA } from './CTA';
import { Language } from '../translations';

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
      <Context />
      <Features lang={lang} />
      <Audience lang={lang} />
      <HowItWorks lang={lang} />
      <Showcase lang={lang} />
      <Pricing lang={lang} />
      {/* <Testimonials /> */}

      <CTA lang={lang} />
    </>
  );
};