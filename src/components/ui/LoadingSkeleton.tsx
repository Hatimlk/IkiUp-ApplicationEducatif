import React from 'react';

export const LoadingSkeleton: React.FC = () => {
    return (
        <div className="min-h-screen bg-background animate-pulse">
            {/* Hero Skeleton */}
            <div className="pt-36 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6 text-center lg:text-left">
                        <div className="inline-block h-8 w-48 bg-slate-200 rounded-full" />
                        <div className="space-y-3">
                            <div className="h-12 w-3/4 bg-slate-200 rounded-2xl mx-auto lg:mx-0" />
                            <div className="h-12 w-1/2 bg-slate-200 rounded-2xl mx-auto lg:mx-0" />
                        </div>
                        <div className="h-6 w-full max-w-xl bg-slate-100 rounded-xl mx-auto lg:mx-0" />
                        <div className="h-6 w-2/3 max-w-xl bg-slate-100 rounded-xl mx-auto lg:mx-0" />
                        <div className="flex gap-4 justify-center lg:justify-start pt-4">
                            <div className="h-14 w-44 bg-slate-200 rounded-2xl" />
                            <div className="h-14 w-44 bg-slate-100 rounded-2xl" />
                        </div>
                    </div>
                    <div className="hidden lg:block flex-1">
                        <div className="w-[380px] aspect-[4/5] bg-slate-200 rounded-[2.5rem]" />
                    </div>
                </div>
            </div>

            {/* Section Skeleton */}
            <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-4 mb-12">
                    <div className="h-6 w-32 bg-slate-200 rounded-full mx-auto" />
                    <div className="h-10 w-64 bg-slate-200 rounded-2xl mx-auto" />
                    <div className="h-5 w-96 bg-slate-100 rounded-xl mx-auto" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="h-64 bg-slate-100 rounded-2xl border border-slate-200/50" />
                    ))}
                </div>
            </div>
        </div>
    );
};
