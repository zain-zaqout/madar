"use client";
import { useAuth } from "@/contexts/AuthContext";
import { useMenu } from "@/contexts/MenuContext";
import Man from "@/components/Menu";
import { Menu, User2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { toast } from "sonner";

const NavBar = () => {
  const path = usePathname();
  if (path === "/login" || path === "/support/chat") {
    return null;
  }

  const publicLinks = [
    { id: 1, lable: "الرئيسية", href: "#hero" },
    { id: 2, lable: "الخدمات", href: "#servic" },
    { id: 3, lable: "من نحن", href: "#why_us" },
    { id: 4, lable: "الاحصائيات", href: "#company_stats" },
    { id: 5, lable: "التقييمات", href: "#reviews" },
  ];

  const privateLinks = [
    { id: 2, lable: "لوحة التحكم", href: "/dashboard" },
    { id: 3, lable: "اضافة شحنة", href: "/new-shipment" },
    { id: 4, lable: "الدعم الفني", href: "/support" },
    { id: 5, lable: "العروض", href: "/offer" },
  ];

  const { isLogin } = useAuth();
  const { setMenu } = useMenu();

  const linksToRender = isLogin !== "true" ?  publicLinks : privateLinks;

  return (
    <div className="h-17 w-full z-50 flex bg-white/70 border-b border-gray-400/30 shadow sticky top-0 backdrop-blur-sm">
      <div className="w-[90%] m-auto flex items-center justify-between">
        <div className="flex gap-7">
          <div className="flex items-center gap-2">
            <Menu
              size={20}
              onClick={() => setMenu(true)}
              className="min-[790px]:hidden cursor-pointer"
            />
            <Link href="/dashboard" className="text-orange-500 text-xl font-black select-none cursor-pointer">
              مدار | Madar
            </Link>
          </div>
          <nav className="max-[790px]:hidden">
            <ul className="flex gap-3">
              {linksToRender.map((link) => {
                const isActive = path === link.href;
                return (
                  <li key={link.id} className="relative group cursor-pointer">
                    <a
                      href={link.href}
                      className={`${isActive ? "text-orange-400" : "group-hover:text-orange-400"} font-semibold transition-colors duration-150`}
                    >
                      {link.lable}
                    </a>
                    <span
                      className={`absolute -bottom-1 left-1/2 h-0.5 bg-orange-300 transition-all duration-300 -translate-x-1/2 
            ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                    />
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/profile">
          <User2 size={18.5} className={`${isLogin === "true" ? "block" : "hidden"} text-gray-500 cursor-pointer hover:text-orange-600 transition-colors duration-150`}/>
          </Link>
          <button onClick={() => toast.info("هذه الميزة غير متوفرة حاليا!")} className="font-semibold text-slate-500 cursor-pointer hover:text-orange-600 transition duration-150">
            EN
          </button>
          <Link
            href={isLogin === "true" ? "/new-shipment" : "/login"}
            className={`bg-orange-500 hover:bg-orange-600 shadow-md shadow-orange-200 flex justify-center transition-all duration-150 cursor-pointer py-1 w-28 text-slate-50  font-semibold rounded-full`}
          >
            {isLogin == "true" ? "اضافة شحنة" : "انضم الينا"}
          </Link>
        </div>
      </div>
      <Man />
    </div>
  );
};
export default NavBar;
