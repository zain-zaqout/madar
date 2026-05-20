"use client"
import { AtSign, Globe, Mail, MapPin, Phone, Share2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const path = usePathname()
  if (path === "/login" || path === "/support/chat" || path === "/profile" || path === "/new-shipment" || path === "/offer" || path == "/new-shipment/succss") {
    return null
  }
  return (
    <footer className="pt-12 pb-10 border-t border-b border-slate-300 shadow-xl bg-white">
      <div className="w-[95%] m-auto grid grid-cols-4 max-[1024px]:grid-cols-3 max-[768px]:grid-cols-2 max-[768px]:gap-10 max-[480px]:grid-cols-1 gap-5">
        <div>
          <h3 className="text-orange-500 text-xl font-bold">مدار | Madar</h3>
          <p className="text-gray-500 text-sm font-bold pt-4 pb-5 leading-6">
            الرائد الاقليمي في تقديم الحلول اللوجستية المبتكرة وتطبيقات سلاسل
            الامداد الذكية.
          </p>
          <div className="flex items-center gap-3">
            <Share2 size={19} className="text-gray-400" />
            <AtSign className="text-gray-400"/>
            <Globe size={20.5} className="text-gray-400"/>
          </div>
        </div>
        <div>
          <h3 className="font-blocaold pb-2">خدماتنا</h3>
          <ul className="flex flex-col space-y-2">
            <li className="text-gray-500 font-semibold">
              <p className="hover:text-orange-400 inline-block transition-colors duration-200 cursor-pointer">
                شحن بري دولي
              </p>
            </li>
            <li className="text-gray-500 font-semibold">
              <p className="hover:text-orange-400 inline-block transition-colors duration-200 cursor-pointer">
                تخليص جمركي
              </p>
            </li>
            <li className="text-gray-500 font-semibold">
              <p className="hover:text-orange-400 inline-block transition-colors duration-200 cursor-pointer">
                تخزين مبرد
              </p>
            </li>
            <li className="text-gray-500 font-semibold">
              <p className="hover:text-orange-400 inline-block transition-colors duration-200 cursor-pointer">
                توصيل الميل الأخير
              </p>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold pb-2">الدعم والمساعدة</h3>
          <ul className="flex flex-col space-y-2">
            <li className="text-gray-500 font-semibold">
              <Link href="/support" className="hover:text-orange-400 inline-block transition-colors duration-200 cursor-pointer">
                الدعم الفني
              </Link>
            </li>
            <li className="text-gray-500 font-semibold">
              <p className="hover:text-orange-400 inline-block transition-colors duration-200 cursor-pointer">
                سياسة الخصوصية
              </p>
            </li>
            <li className="text-gray-500 font-semibold">
              <p className="hover:text-orange-400 inline-block transition-colors duration-200 cursor-pointer">
                الشروط والأحكام
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold pb-2">اتصل بنا</h3>
          <ul className="flex flex-col space-y-2">
            <li className="text-gray-500 font-semibold flex items-center gap-3">
              <Phone size={18} className="text-orange-400" />
              <p className="hover:text-orange-400 inline-block transition-colors duration-200 cursor-pointer">
                00 0000 9200
              </p>
            </li>
            <li className="text-gray-500 font-semibold flex items-center gap-3">
              <Mail size={18} className="text-orange-400" />
              <p className="hover:text-orange-400 inline-block transition-colors duration-200 cursor-pointer">
                info@madar.sa
              </p>
            </li>
            <li className="text-gray-500 font-semibold flex items-center gap-3">
              <MapPin size={18} className="text-orange-400" />
              <p className="hover:text-orange-400 inline-block transition-colors duration-200 cursor-pointer">
                الرياض, المملكة العربية السعودية
              </p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
