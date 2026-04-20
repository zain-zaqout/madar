import { Users, Truck, Map, ShieldCheck } from "lucide-react";

const FullScreenStats = () => {
  const stats = [
    {
      id: 1,
      label: "عميل يثق بنا",
      value: "15K+",
      icon: <Users size={28} />,
      color: "text-orange-600",
      bg: "bg-orange-50",
      description: "من الأفراد والشركات الكبرى محلياً ودولياً."
    },
    {
      id: 2,
      label: "شحنة آمنة",
      value: "100K+",
      icon: <Truck size={28} />,
      color: "text-blue-600",
      bg: "bg-blue-50",
      description: "تم تسليمها بدقة متناهية وفي الوقت المحدد."
    },
    {
      id: 3,
      label: "تغطية مدن المملكة",
      value: "25+",
      icon: <Map size={28} />,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      description: "نصل لكل شبر في السعودية وعبر الخليج."
    },
    {
      id: 4,
      label: "معدل رضا العملاء",
      value: "99%",
      icon: <ShieldCheck size={28} />,
      color: "text-purple-600",
      bg: "bg-purple-50",
      description: "وفقاً لاستبيانات الجودة الدورية لمستخدمينا."
    }
  ];

  return (
    <section id="company_stats" className="flex items-center justify-center bg-white py-15">
      <div className="w-[85%] max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 font-cairo">
            أرقام تعكس التزامنا في <span className="text-orange-600">مدار</span>
          </h2>
          <p className="text-lg text-gray-500 font-bold max-w-2xl mx-auto font-cairo">
            الريادة في الحلول اللوجستية المتكاملة تبدأ من هنا
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="group rounded-3xl p-6 bg-white border border-gray-100 hover:shadow-xl transition duration-300 flex flex-col items-center justify-center"
            >
              <div className={`w-12 h-12 flex items-center justify-center rounded-2xl mb-4 ${stat.bg} ${stat.color}`}>
                {stat.icon}
              </div>

              <h3 className="text-4xl font-black text-gray-950 mb-1 tracking-tight">
                {stat.value}
              </h3>

              <p className="text-lg font-black text-gray-900 mb-2">
                {stat.label}
              </p>

              <p className="text-sm text-center text-gray-400 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FullScreenStats;