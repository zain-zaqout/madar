import { Globe, MapPin, ShieldCheck } from "lucide-react";

const WhyUs = () => {
  const date = new Date().getFullYear() - 2001;

  const exp = [
    {
      id: 1,
      head: "موثوقية تامة",
      paragraph:
        "نلتزم بأعلى معايير السلامة العالمية لحماية أصولك وشحناتك في كل خطوة.",
      icon: <ShieldCheck size={28} />,
      style: "",
    },
    {
      id: 2,
      head: "تتبع لحظي",
      paragraph:
        "نظام تتبع ذكي يوفر لك رؤية كاملة لمسار شحنتك على مدار الساعة.",
      icon: <MapPin size={26} />,
      style: "",
    },
    {
      id: 3,
      head: "شبكة عالمية واسعة",
      paragraph:
        "تواجد اسراتيجي في أهم الموانئ والمطارات الدولية لخدمة توسعك العالمي.",
      icon: <Globe size={26} />,
      style: "",
    },
  ];

  return (
    <section id="why_us" className="mt-18">
      <div className="w-[90%] m-auto grid grid-cols-2 max-[1024px]:grid-cols-1 gap-8 items-center">
        <div className="relative order-1 lg:order-2">
          <img
            src="/assets/image/unnamed (1).png"
            alt="مدار للشحن"
            className="w-full h-87.5 lg:h-125 rounded-4xl object-cover shadow-2xl transition-all duration-300"
          />
          <div className="absolute -bottom-8 right-4 lg:-right-6 w-44 lg:w-48 px-5 rounded-3xl py-5 border-4 border-white shadow-2xl bg-orange-500 flex flex-col">
            <span className="font-black text-white text-2xl lg:text-3xl">{date}+</span>
            <span className="text-xs lg:text-sm text-orange-50 font-bold leading-tight">
              عام من الخبرة <br /> اللوجستية المتكاملة
            </span>
          </div>
        </div>
        <div className="my-8 order-2 lg:order-1">
          <span className="text-orange-500 font-black text-sm border-r-4 pr-2 border-orange-500">
            لماذا مدار؟
          </span>
          <h2 className="text-5xl font-black leading-tight">
            شريككم الموثوق في
            <p className="text-orange-500 text-[40px]"> عالم الصناعة والنقل. </p>
          </h2>
          <p className="py-8 text-gray-600 font-bold">
            نحن لا ننقل البضائع فحسب. بل نبني جسور الثقة بين الأسواق العالمية.
            تتميز عملياتنا بالانضباط الصارم والشفافية المطلقة. مدعومة بأحدث
            التقنيات الرقمية في ادارة سلاسل الامداد.
          </p>
          <div className="flex flex-col space-y-3 pr-4">
            {exp.map((item) => (
              <div key={item.id} className="group hover:bg-orange-50/80 py-5 rounded-2xl">
                <div className="flex gap-3">
                  <div className="bg-orange-50 group-hover:bg-orange-600/90 transition-colors duration-300 text-orange-600 group-hover:text-white w-12 h-12 flex items-center justify-center rounded-xl">
                    <span>{item.icon}</span>
                  </div>
                  <div className="leading-8 group-hover:-translate-x-1.25 transition-transform duration-300">
                    <h3 className="font-bold group-hover:text-orange-600 text-lg text-gray-700">
                      {item.head}
                    </h3>
                    <p className="text-gray-500 text-sm font-semibold">
                      {item.paragraph}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};
export default WhyUs;
