"use client";

const TypingIndicator = () => {
  return (
    <div className="flex justify-start items-center gap-2 px-1 animate-in fade-in slide-in-from-bottom-1 duration-300">
      <div className="bg-white border border-slate-100 p-3 px-4 rounded-[1.2rem] rounded-br-none shadow-sm flex items-center gap-1.5">
        
        <span className="w-1.5 h-1.5 bg-orange-200 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
        
        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
        
        <span className="w-1.5 h-1.5 bg-orange-600 rounded-full animate-bounce"></span>
        
      </div>
      
      <span className="text-[10px] font-bold text-slate-400 animate-pulse">
        الموظف يكتب...
      </span>
    </div>
  );
};

export default TypingIndicator;