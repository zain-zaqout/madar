import { useAuth } from "@/contexts/AuthContext";
import { useMenu } from "@/contexts/MenuContext";
import { X, Home, Briefcase, Users, BarChart3, Star, Package, Gift } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Man = () => {
  const { Menuu, setMenu } = useMenu();
  const { isLogin } = useAuth()

  const isNotLogged = [
    { name: "الرئيسية", icon: <Home size={20} />, href:"#hero" },
    { name: "الخدمات", icon: <Briefcase size={20} />, href:"#servic" },
    { name: "من نحن", icon: <Users size={20} />, href:"#why_us" },
    { name: "الإحصائيات", icon: <BarChart3 size={20} />, href:"#company_stats" },
    { name: "التقييمات", icon: <Star size={20} />, href:"#reviews" },
  ]
  const isLoggedMenu = [
    { name: "لوحة التحكم", icon: <Briefcase size={20} />, href:"/dashboard" },
    { name: "إضافة شحنة", icon: <Users size={20} />, href:"/new-shipment" },
    { name: "الدعم الفني", icon: <BarChart3 size={20} />, href:"/support" },
    { name: "العروض", icon: <Gift size={20} />, href:"/offer" }
  ];

  const path = usePathname()

  return (
    <>
      {Menuu && (
        <div 
          className={`${Menuu ? "fixed inset-0 h-screen bg-slate-900/60 backdrop-blur-sm z-998 duration-300" : "hidden"}`}
          onClick={() => setMenu(false)}
        />
      )}

      <div
        className={`fixed right-0 top-0 h-screen w-72 bg-white/95 backdrop-blur-md z-999 
          border-l border-orange-500/20
          transform transition-transform duration-500 ease-in-out
          min-[790px]:hidden ${Menuu ? "translate-x-0 shadow-[-10px_0_30px_-10px_rgba(0,0,0,0.1)]" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between h-20 px-6 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <Package className="text-white" size={20} />
            </div>
            <span className="font-black text-xl text-slate-900 tracking-tighter">مدار</span>
          </div>
          <button 
            onClick={() => setMenu(false)}
            className="p-2 group hover:bg-red-100 cursor-pointer rounded-full transition-colors text-slate-400 hover:text-red-500"
          >
            <X size={24} className="group-hover:text-red-500 group-hover:rotate-180 transition duration-150"/>
          </button>
        </div>

        <div className="p-6">
          <ul className="space-y-3">
            {(isLogin === "true" ? isLoggedMenu : isNotLogged).map((item, index) => {
              const isActive = path === item.href
              return (

                <a href={item.href} key={index}>
                <li
                  onClick={() => setMenu(false)}
                  className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all duration-200
                  ${isActive
                      ? "bg-orange-50 text-orange-600 font-bold"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"}`}
                >
                  <span className={isActive ? "text-orange-600" : "text-slate-400"}>
                    {item.icon}
                  </span>
                  <span className="text-md">{item.name}</span>
                </li>
              </a>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Man;