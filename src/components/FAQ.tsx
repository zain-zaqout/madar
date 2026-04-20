"use client";
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    {
      q: "كيف يتم احتساب تكلفة الشحن؟",
      a: "تعتمد التكلفة على الوزن الفعلي أو الوزن الحجمي (أيهما أكبر)، بالإضافة إلى نوع الخدمة المختارة والوجهة."
    },
    {
      q: "ما هو الوزن الحجمي وكيف أحسبه؟",
      a: "هو قياس للمساحة التي يشغلها الطرد. يحسب بضرب (الطول × العرض × الارتفاع) وتقسيم الناتج على 5000."
    },
    {
      q: "ما هي أنواع الخدمات المتوفرة في مدار؟",
      a: "نقدم الشحن السريع (24 ساعة)، الاقتصادي (3-5 أيام)، الشحن البري، والشحن البحري."
    },
    {
      q: "هل الأسعار تشمل ضريبة القيمة المضافة؟",
      a: "نعم، يتم إضافة 15% كضريبة قيمة مضافة (VAT) على إجمالي قيمة الخدمات حسب القوانين المحلية."
    }
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white rounded-3xl px-6 py-8 shadow-sm border border-slate-100 mt-10">
      <div className="flex items-center gap-3 mb-8 border-r-4 border-orange-600 pr-4">
        <HelpCircle size={28} className="text-orange-600" />
        <h2 className="text-2xl font-black text-slate-800">الأسئلة الشائعة</h2>
      </div>

      <div className="space-y-4">
        {questions.map((item, index) => (
          <div 
            key={index}
            className={`group border rounded-2xl transition-all duration-300 ${
              openIndex === index ? "border-orange-500 bg-orange-50/30" : "border-slate-100 bg-slate-50/50"
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between px-5 py-4 text-right outline-none"
            >
              <span className={`font-bold text-[17px] transition-colors ${
                openIndex === index ? "text-orange-700" : "text-slate-700"
              }`}>
                {item.q}
              </span>
              <ChevronDown 
                size={20} 
                className={`text-slate-400 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180 text-orange-600" : ""
                }`} 
              />
            </button>
            
            <div className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}>
              <p className="px-5 pb-5 text-slate-600 leading-relaxed text-[15px]">
                {item.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;