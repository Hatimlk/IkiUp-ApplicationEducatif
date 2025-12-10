import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Reveal } from './Reveal';

const faqs = [
  {
    question: "Est-ce compatible avec Pronote et EcoleDirecte ?",
    answer: "Oui, IkiUp se connecte automatiquement à la plupart des environnements numériques de travail (ENT) français, incluant Pronote et EcoleDirecte. Vos notes, devoirs et emplois du temps sont synchronisés en temps réel et mis à jour quotidiennement."
  },
  {
    question: "Comment fonctionne l'IA Kaïa ?",
    answer: "Kaïa est un tuteur personnel intelligent et sécurisé. Elle analyse vos résultats pour identifier vos points faibles, propose des explications personnalisées sur les concepts mal compris et génère des quiz de révision. Elle est programmée pour guider l'élève vers la solution sans jamais donner la réponse directement."
  },
  {
    question: "Existe-t-il une version gratuite ?",
    answer: "Absolument. L'application est téléchargeable gratuitement et inclut les fonctionnalités essentielles : synchronisation des notes, emploi du temps et liste de devoirs basique. Les abonnements Premium débloquent l'accès illimité à l'IA, les statistiques avancées et le mode Famille."
  },
  {
    question: "Mes données sont-elles sécurisées ?",
    answer: "La sécurité et la confidentialité sont notre priorité absolue. IkiUp est 100% conforme au RGPD. Vos données scolaires sont chiffrées et ne sont jamais revendues à des tiers. Les conversations avec l'IA sont privées et anonymisées."
  },
  {
    question: "Comment fonctionne le mode Famille ?",
    answer: "Le mode Famille permet de relier les comptes parents et enfants. Les parents disposent d'un tableau de bord simplifié pour suivre la progression (moyennes, assiduité) sans micro-manager, favorisant ainsi l'autonomie de l'élève tout en rassurant les parents."
  }
];

const AccordionItem: React.FC<{
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-200 dark:border-slate-800 last:border-none">
      <button
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className={`text-lg font-medium transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-slate-900 dark:text-slate-100 group-hover:text-primary'}`}>
          {question}
        </span>
        <span className={`flex-shrink-0 ml-4 p-2 rounded-full transition-all duration-300 ${isOpen ? 'bg-primary text-white rotate-180' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:bg-slate-200 dark:group-hover:bg-slate-700'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <div 
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mb-8' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed pr-8 pb-2">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#F8FAFC] dark:bg-[#0B1121] transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-text dark:text-white mb-6">
              Questions Fréquentes
            </h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 font-light">
              Tout ce que vous devez savoir pour commencer.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 shadow-xl shadow-slate-200/40 dark:shadow-black/20 border border-slate-100 dark:border-slate-800">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};