import { TicketPercent, Timer, Zap, Star } from "lucide-react";

const PersonalizedOffers = () => {
  const offers = [
    {
      id: 1,
      title: "خصم الشحنة الأولى",
      discount: "25%",
      code: "FIRST25",
      description: "استمتع بخصم خاص على أول بوليصة شحن تصدرها اليوم.",
      tag: "عرض حصري",
      icon: <Zap className="text-yellow-500" size={24} />,
      expiry: "ينتهي خلال 24 ساعة",
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 2,
      title: "شحن المحافظات الكبرى",
      discount: "15%",
      code: "REGIONS15",
      description: "خصم إضافي عند شحن أكثر من 5 طرود للمناطق الرئيسية.",
      tag: "الأكثر استخداماً",
      icon: <TicketPercent className="text-blue-500" size={24} />,
      expiry: "صالح حتى نهاية الأسبوع",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 3,
      title: "عضوية التميز",
      discount: "مجاني",
      code: "VIP-SHIP",
      description: "تأمين مجاني بالكامل على شحناتك القادمة (حتى 1000 ريال).",
      tag: "هدية لك",
      icon: <Star className="text-purple-500" size={24} />,
      expiry: "متاح لمرة واحدة",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section className="py-10 bg-gray-50/50">
      <div className="w-[85%] max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-black text-gray-900 font-cairo">
              عروض مخصصة <span className="text-orange-600">لك</span>
            </h2>
            <p className="text-gray-500 font-bold mt-2 font-cairo">
              بناءً على نشاطك الأخير، قمنا باختيار هذه العروض لتوفير تكاليف شحنك.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <div 
              key={offer.id} 
              className="group relative bg-white border border-gray-100 rounded-[2.5rem] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute -top-10 -left-10 w-32 h-32 bg-linear-to-br ${offer.color} opacity-[0.03] rounded-full group-hover:scale-150 transition-transform duration-700`}></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-gray-50 rounded-2xl group-hover:bg-white group-hover:shadow-md transition-all">
                    {offer.icon}
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded-md uppercase">
                    {offer.tag}
                  </span>
                </div>

                <h3 className="text-xl font-black text-gray-800 mb-2 font-cairo">
                  {offer.title}
                </h3>
                
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-black text-gray-950 font-geist">
                    {offer.discount}
                  </span>
                  <span className="text-sm font-bold text-gray-500 font-cairo">خصم</span>
                </div>

                <p className="text-sm text-gray-500 font-medium mb-6 leading-relaxed font-cairo">
                  {offer.description}
                </p>

                <div className="flex items-center justify-between bg-dashed-border bg-gray-50 p-4 rounded-2xl border-2 border-dashed border-gray-200 group-hover:border-orange-200 transition-colors">
                  <span className="font-mono font-bold text-gray-700 tracking-widest uppercase">
                    {offer.code}
                  </span>
                  <button className="text-xs font-black text-orange-600 hover:text-orange-700 uppercase">
                    نسخ الكود
                  </button>
                </div>

                <div className="flex items-center gap-2 mt-6 text-gray-400">
                  <Timer size={14} />
                  <span className="text-[11px] font-bold">{offer.expiry}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalizedOffers;