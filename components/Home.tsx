import React from 'react';
import { Hero } from './Hero';
import { Context } from './Context';
import { Features } from './Features';
import { Audience } from './Audience';
import { HowItWorks } from './HowItWorks';
import { Showcase } from './Showcase';
import { Pricing } from './Pricing';
// import { Testimonials } from './Testimonials';
import { FAQ } from './FAQ';
import { CTA } from './CTA';
import { Language } from '../translations';

interface HomeProps {
  lang: Language;
}

export const Home: React.FC<HomeProps> = ({ lang }) => {
  return (
    <>
      <Hero lang={lang} />
      <Context />
      <Features lang={lang} />
      <Audience lang={lang} />
      <HowItWorks />
      <Showcase />
      <Pricing />
      {/* <Testimonials /> */}
      <FAQ />
      <CTA />
    </>
  );
};