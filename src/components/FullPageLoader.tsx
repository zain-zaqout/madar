"use client";

export const FullPageLoader = () => {

  return (
    <div className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-white dark:bg-[#0f172a]">
      <div className="relative mb-6">
        <div className="w-16 h-16 border-4 border-slate-200 dark:border-slate-800 rounded-full"></div>
        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-orange-600 rounded-full animate-spin shadow-lg"></div>
      </div>
      
      <div className="h-6 flex items-center justify-center">
        <p className="text-sm font-bold tracking-[0.2em] uppercase text-slate-800 dark:text-slate-100 animate-pulse">
          Loading Madar
        </p>
      </div>
    </div>
  );
};