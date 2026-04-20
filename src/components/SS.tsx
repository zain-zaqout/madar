"use client";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-80 flex items-center overflow-hidden bg-[#0a0c10]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-l from-[#0a0c10] via-[#0a0c10]/80 to-transparent z-10"></div>
        <img 
          src="/assets/image/ن.png" 
          alt="Madar Logistics" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="w-[90%] m-auto relative z-20 flex max-[905px]:flex-col items-center max-[905px]:items-start max-[905px]:space-y-3 justify-between">
        <div className="flex flex-col">
          
          <h1 className="text-3xl md:text-5xl font-black text-white leading-[1.2] max-w-3xl">
            جاهز لتجاوز <span className="text-orange-500">الحدود؟</span>
          </h1>
          
          <p className="text-slate-400 mt-6 text-base md:text-xl font-medium max-w-xl leading-relaxed">
            انضم إلى آلاف الشركات التي تعتمد على مدار يومياً لتسهيل حلولها اللوجستية وتطبيقات سلاسل الإمداد الذكية.
          </p>
        </div>

          <div>
            <button className="bg-orange-600 cursor-pointer hover:bg-orange-700 text-white font-bold py-4 max-[905px]:py-3 max-[905px]:px-7 max-[905px]:text-base px-10 rounded-full transition-all transform hover:scale-105 shadow-xl shadow-orange-600/20 text-lg flex items-center gap-2">
              <span>ابدأ تجربة مجانية</span>
              <ArrowRight size={20} />
            </button>
          </div>

      </div>
    </section>
  );
};

export default Hero;