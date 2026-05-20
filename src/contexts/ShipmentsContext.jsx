"use client"
import { ChevronLeftIcon, CircleCheck, ClipboardSignatureIcon, PlaneTakeoff, ShoppingBag, Truck } from "lucide-react";
import { createContext, useContext, useEffect, useState } from "react"
import { toast } from "sonner";

export const Context = createContext()
export const ShipmentsContext = ({ children }) => {
    const lastUpdate = [
    {
      head: "شحنتك الآن فوق المحيط الأطلسي",
      text: "رحلة الشحن رقم MS-492 متجهة حاليا نحو مطار جون كينيدي الدولي.",
      action: (
        <div className="flex items-center gap-2 pt-1">
          <div className="bg-blue-50 rounded-2xl px-2.5 text-[12px]">
            <p className="font-semibold text-gray-700">#992011A</p>
          </div>
          <span className="text-orange-700/80">●</span>
          <span className="text-orange-800 text-[12px] font-bold">
            IN TRANSIT
          </span>
        </div>
      ),
      icon: <PlaneTakeoff size={18} className="text-red-700" />,
      style: "bg-red-500/10",
      background: "",
      textColor: "",
      ago: "منذ دقيقتين",
    },
    {
      head: "تمر عبر الجمارك في دبي",
      text: "تم إيقاف الشحنة مؤقتا لنقص في تفاصيل العنوان البريدي للمستلم",
      action: (
        <button onClick={() => toast.info("هذه الميزة غير متوفرة حاليا!")} className="text-white mt-3 flex items-center bg-orange-500 px-5 py-1 cursor-pointer rounded-full">
          إكمال الأن
          <ChevronLeftIcon />
        </button>
      ),
      icon: <ClipboardSignatureIcon size={18} className="text-red-700" />,
      style: "bg-red-500/10",
      background: "bg-orange-100/80",
      textColor: "text-red-700",
      ago: "قبل ساعة",
    },
    {
      head: "تم التغليف والتجهيز",
      text: "الشحنة جاهزة للمغادرة من مستودعات ميناء شنغهاي المركزية.",
      action: null,
      icon: <ShoppingBag size={18} className="text-blue-700" />,
      style: "bg-blue-500/10",
      background: "",
      textColor: "",
      ago: "منذ 4 ساعات",
    },
    {
      head: "تم التسليم النهائي",
      text: "تم تسليم الشحنة رقم LX-882 إلى العميل في الرياض بنجاح.",
      action: (
        <div className="flex items-center gap-2">
          <CircleCheck size={13.5} className="text-green-500" />
          <span className="text-green-500 font-semibold uppercase text-[12px]">
            Delivered
          </span>
        </div>
      ),
      icon: <Truck size={18} className="text-green-700" />,
      style: "bg-green-500/10",
      background: "",
      textColor: "",
      ago: "الأمس",
    },
  ];

    

  const [shipments, setShipment] = useState([
    {
      id: "MD-88291",
      route: "شنغهاي ← الرياض",
      status: "قيد النقل",
      color: "text-orange-600",
      dot: "bg-orange-600",
      date: "24 Oct، 2026",
    },
    {
      id: "MD-77201",
      route: "لندن ← دبي",
      status: "معلقة (جمارك)",
      color: "text-red-600",
      dot: "bg-red-600",
      date: "25 Out، 2026",
    },
    {
      id: "MD-11932",
      route: "نيويورك ← جدة",
      status: "تم التوصيل",
      color: "text-green-600",
      dot: "bg-green-600",
      date: "تم الوصول",
    },
    {
      id: "MD-44092",
      route: "طوكيو ← الدمام",
      status: "في المستودع",
      color: "text-blue-600",
      dot: "bg-blue-600",
      date: "27 Out، 2026",
    },
  ])
  
  useEffect(() => {
   const local = localStorage.getItem("shipments")
   if (local) setShipment(JSON.parse(local))
 }, [])
    
  const supportFilter = shipments.filter((e) => e.status !== "تم التوصيل")
  return (
      <Context.Provider value={{ shipments, lastUpdate, supportFilter, setShipment }}>
          {children}
    </Context.Provider>
  )
}
export const useShip = () => useContext(Context)