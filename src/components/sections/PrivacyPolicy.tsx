import React from 'react';
import { Shield, ChevronRight, Mail } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { SEO } from '../ui/SEO';
import { Language, translations } from '../../lib/translations';

interface PrivacyPolicyProps {
    lang: Language;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ lang }) => {
    const t = translations[lang].privacy;

    const sectionIcons = [
        'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
        'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400',
        'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400',
        'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400',
        'bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400',
        'bg-primary/10 text-primary',
    ];

    return (
        <>
            <SEO
                title={t.title}
                description={t.subtitle}
                lang={lang}
            />
            <section className="pt-32 pb-24 bg-background relative overflow-hidden">
                {/* Background Ambience */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-b from-primary/5 to-transparent blur-[120px]" />
                    <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-t from-blue-400/5 to-transparent blur-[120px]" />
                </div>

                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Header */}
                    <Reveal>
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-6 border border-primary/20">
                                <Shield size={14} />
                                {lang === 'fr' ? 'Protection des données' : 'Data Protection'}
                            </div>
                            <h1 className="text-3xl md:text-5xl font-serif font-black text-text dark:text-white mb-4">
                                {t.title}
                            </h1>
                            <p className="text-lg text-slate-600 dark:text-slate-400 font-normal max-w-xl mx-auto">
                                {t.subtitle}
                            </p>
                            <p className="text-xs text-slate-400 dark:text-slate-500 mt-4 font-medium">
                                {t.lastUpdated} {lang === 'fr' ? '9 mars 2026' : 'March 9, 2026'}
                            </p>
                        </div>
                    </Reveal>

                    {/* Sections */}
                    <div className="space-y-6">
                        {t.sections.map((section: { title: string; content: string }, index: number) => (
                            <Reveal key={index} delay={index * 80} direction="up">
                                <div className="group bg-white dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/50 rounded-2xl p-6 sm:p-8 hover:shadow-lg hover:shadow-slate-200/30 dark:hover:shadow-black/20 transition-all duration-300 hover:-translate-y-0.5">
                                    <div className="flex items-start gap-4">
                                        <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${sectionIcons[index % sectionIcons.length]} group-hover:scale-110 transition-transform`}>
                                            <ChevronRight size={18} strokeWidth={2.5} />
                                        </div>
                                        <div className="flex-1">
                                            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                                                {section.title}
                                            </h2>
                                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                                {section.content}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    {/* Contact CTA */}
                    <Reveal delay={500}>
                        <div className="mt-12 text-center">
                            <a
                                href="mailto:contact@ikiup.com"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-2xl font-bold text-sm hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all active:scale-95"
                            >
                                <Mail size={16} />
                                contact@ikiup.com
                            </a>
                        </div>
                    </Reveal>
                </div>
            </section>
        </>
    );
};
