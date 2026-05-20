import { FileText, Plane, Ship, Truck } from "lucide-react";

const Serevic = () => {
  const servics = [
    {
      id: 1,
      img: "/assets/image/plan_image.png",
      head: "شحن جوي",
      text: "أسرع الحلول اللوجستية للشحنات العاجلة والحساسة للوقت مع تتبع دقيق في كل مرحلة.",
      opacity: "opacity-35",
      translate: "translate-y-15 max-[1024px]:translate-0",
      icon: <Plane size={33} className="text-orange-400" />,
    },
    {
      id: 2,
      img: "/assets/image/ship.jpg",
      head: "شحن بحري",
      text: "حلول اقتصادية للشحنات الكبيرة عبر شبكة خطوط ملاحية عالمية تصل لكافة الموانئ.",
      opacity: "opacity-35",
      translate: "translate-y-10 max-[1024px]:translate-0 max-[1100px]:translate-y-15",
      icon: <Ship size={33} className="text-orange-400" />,
    },
    {
      id: 3,
      img: "/assets/image/van.webp",
      head: "شحن بري",
      text: "أسطول من الشاحنات الحديثة المجهزة لضمان وصول الشحنات المحلية والاقليمية بأمان تام.",
      opacity: "opacity-45",
      translate: "translate-y-15 max-[1024px]:translate-0",
      icon: <Truck size={33} className="text-orange-400" />,
    },
    {
      id: 4,
      img: "/assets/image/unnamed.png",
      head: "تخليص جمركي",
      text: "ادارة كاملة للمعاملات الجمركية والوثائق لضمان انسابية عبور البضائع عبر الحدود.",
      opacity: "opacity-50",
      translate: "translate-y-10 max-[1024px]:translate-0 max-[1100px]:translate-y-15",
      icon: <FileText size={30} className="text-orange-400" />,
    },
  ];
  return (
    <div id="servic" className="mt-25 pb-12">
      <div className="w-[90%] max-[1100px]:w-[75%] m-auto">
        <div className="">
          <h3 className="relative flex justify-center text-3xl font-bold">
            خدماتنا اللوجستية
            <span className="absolute -bottom-2 w-30 h-0.75 bg-orange-600" />
          </h3>
        </div>

        <div className="grid grid-cols-4 max-[1100px]:grid-cols-2 max-[520px]:grid-cols-1 gap-4 mt-10">
          {servics.map((servic) => (
            <div key={servic.id} className="w-full h-full my-5 overflow-hidden rounded-[20px] relative group">
              <img
                src={servic.img}
                alt="servic"
                className="w-full h-full group-hover:scale-110 object-cover rounded-[20px] shadow-xl group-hover:shadow-2xl transition-all duration-400"
              />
              <div
                className={`absolute inset-0 rounded-[20px] shadow-xl bg-slate-900 group-hover:opacity-70 transition duration-1000 ${servic.opacity} backdrop-blur z-9`}
              />
              <div className="absolute z-10 bottom-7 mx-5">
                <div
                  className={`${servic.translate} group-hover:translate-y-0 transition-all duration-600`}
                >
                  {servic.icon}
                  <h4 className="text-slate-50 font-bold text-xl py-2">
                    {servic.head}
                  </h4>
                </div>
                <p className="text-gray-400 text-sm font-semibold leading-5.5 opacity-0 translate-y-3 max-[1024px]:opacity-100 max-[1024px]:translate-y-0 group-hover:opacity-100 group-hover:translate-0 transition-all duration-500">
                  {servic.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Serevic;
