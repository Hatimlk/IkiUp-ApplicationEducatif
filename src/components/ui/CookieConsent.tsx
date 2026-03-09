import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';
import { Language, translations } from '../../lib/translations';

interface CookieConsentProps {
    lang: Language;
    onNavigatePrivacy?: () => void;
}

export const CookieConsent: React.FC<CookieConsentProps> = ({ lang, onNavigatePrivacy }) => {
    const [isVisible, setIsVisible] = useState(false);
    const t = translations[lang].cookie;

    useEffect(() => {
        const consent = localStorage.getItem('ikiup-cookie-consent');
        if (!consent) {
            // Small delay to avoid layout shift on first load
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('ikiup-cookie-consent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('ikiup-cookie-consent', 'declined');
        setIsVisible(false);
        // Optionally disable Google Analytics
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('consent', 'update', {
                analytics_storage: 'denied',
            });
        }
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 will-change-transform animate-fade-in-up">
            <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-xl rounded-2xl border border-slate-200 shadow-2xl shadow-slate-200/50 p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">

                    {/* Icon + Text */}
                    <div className="flex items-start gap-3 flex-1">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mt-0.5">
                            <Cookie size={20} />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm font-medium text-slate-700 leading-relaxed">
                                {t.message}{' '}
                                {onNavigatePrivacy && (
                                    <button
                                        onClick={onNavigatePrivacy}
                                        className="text-primary hover:underline font-semibold"
                                    >
                                        {t.learnMore}
                                    </button>
                                )}
                            </p>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto">
                        <button
                            onClick={handleDecline}
                            className="flex-1 sm:flex-none px-5 py-2.5 text-sm font-bold text-slate-600 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all duration-200 active:scale-95"
                        >
                            {t.decline}
                        </button>
                        <button
                            onClick={handleAccept}
                            className="flex-1 sm:flex-none px-5 py-2.5 text-sm font-bold text-white bg-primary hover:bg-primary/90 rounded-xl shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/30 transition-all duration-200 active:scale-95"
                        >
                            {t.accept}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
