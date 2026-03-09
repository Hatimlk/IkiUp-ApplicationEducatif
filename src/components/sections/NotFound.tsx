import React from 'react';
import { Home, Search } from 'lucide-react';
import { Button } from '../ui/Button';
import { Language, translations } from '../../lib/translations';

interface NotFoundProps {
    lang: Language;
    onGoHome: () => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ lang, onGoHome }) => {
    const t = translations[lang].notFound;

    return (
        <section className="min-h-[80vh] flex items-center justify-center bg-background relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
            </div>

            <div className="text-center px-4 relative z-10">
                {/* 404 Number */}
                <div className="relative mb-8">
                    <span className="text-[10rem] sm:text-[14rem] font-serif font-black text-slate-100 dark:text-slate-900 leading-none select-none">
                        404
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-3xl bg-primary/10 text-primary flex items-center justify-center animate-float">
                            <Search size={36} strokeWidth={1.5} />
                        </div>
                    </div>
                </div>

                {/* Text */}
                <h1 className="text-3xl md:text-4xl font-serif font-black text-text dark:text-white mb-4">
                    {t.title}
                </h1>
                <p className="text-lg text-slate-500 dark:text-slate-400 font-medium mb-10 max-w-md mx-auto">
                    {t.description}
                </p>

                {/* CTA */}
                <Button
                    variant="primary"
                    size="lg"
                    onClick={onGoHome}
                    className="px-8 py-4 rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                    <Home size={18} />
                    {t.backHome}
                </Button>
            </div>
        </section>
    );
};
