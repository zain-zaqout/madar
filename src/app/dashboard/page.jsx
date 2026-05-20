"use client"
import { useShip } from "@/contexts/ShipmentsContext";
import {
  Box,
  CircleAlertIcon,
  CircleCheck,
  LayoutDashboard,
  Truck,
  Search,
  Route,
} from "lucide-react";
import {  useState } from "react";
import { toast } from "sonner";

const page = () => {

  const [searchTrem, setSearchTrem] = useState("")
  const { lastUpdate, shipments } = useShip()


  const cards = [
    {
      id: 1,
      head: "اجمالي الشحنات",
      span: "1,284",
      icon: <Box size={21} className="text-red-800" />,
      style: "bg-red-600/7",
    },
    {
      id: 2,
      head: "شحنات نشطة",
      span: "12",
      icon: <Truck size={21} className="text-blue-700" />,
      style: "bg-blue-500/10",
    },
    {
      id: 3,
      head: "تم التوصيل",
      span: "1,269",
      icon: <CircleCheck size={22} className="text-green-500" />,
      style: "bg-blue-500/10",
    },
    {
      id: 4,
      head: "اجراءات معلقة",
      span: "3",
      icon: <CircleAlertIcon size={22} className="text-red-600" />,
      style: "bg-red-500/10",
    },
  ];

  const filter = shipments.filter((item) => {
    const matchsSearch = item.id.toLowerCase().includes(searchTrem.toLowerCase())
    return matchsSearch
  })

  return (
    <div>
      <div className="w-[90%] m-auto my-10">
        <div className="grid grid-cols-10 max-[750px]:grid-cols-1 gap-6 max-[750px]:gap-0 max-[750px]:space-y-4">
         <section className="bg-white px-7 py-8 col-span-7 max-[1000px]:col-span-6 max-[750px]:col-span-full w-full rounded-2xl">
            <div>
              <h3 className="font-black text-2xl">آخر التحديثات</h3>
              <p className="text-gray-600 font-bold text-sm">
                متابعة لحظية لتدفق شحناتك حول العالم
              </p>
            </div>
            <div className="mt-6 flex flex-col space-y-5">
              {lastUpdate.map((item, index) => (
                <div className="flex gap-4 relative" key={index}>
                  <div
                    className={`${item.style} w-8 h-8 mt-4.5 flex justify-center items-center rounded-full`}
                  >
                    {item.icon}
                  </div>
                  <div
                    className={`${item.background} py-4 px-5 w-full rounded-2xl`}
                  >
                    <h4 className={`${item.textColor} font-bold text-lg`}>
                      {item.head}
                    </h4>
                    <p className="font-semibold text-gray-500 text-sm">
                      {item.text}
                    </p>
                    {item.action}
                  </div>
                  <div className="absolute left-0 top-4">
                    {" "}
                    <span className="bg-gray-100 text-gray-500 rounded-full text-[10px] ml-2 px-2 py-0.5 font-bold uppercase">
                      {item.ago}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <div className="col-span-3 max-[1000px]:col-span-4 max-[750px]:col-span-full">
            <article className="bg-white rounded-[17px] px-7 pb-8">
              <div className="flex items-center gap-2.5 py-7">
                <LayoutDashboard size={22} className="text-red-700" />
                <p className="text-slate-700 font-bold text-lg">نظرة عامة</p>
              </div>
              <div className="flex flex-col space-y-4">
                {cards.map((card) => (
                  <div
                    key={card.id}
                    className="bg-blue-50 px-5 rounded-[15px] flex items-center justify-between py-3.5"
                  >
                    <div>
                      <span className="text-slate-600 font-semibold text-sm">
                        {card.head}
                      </span>
                      <p className="text-slate-700 text-2xl font-black">
                        {card.span}
                      </p>
                    </div>
                    <div
                      className={`${card.style} w-11 h-11 flex justify-center items-center rounded-full`}
                    >
                      {card.icon}
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="bg-orange-500 py-9 rounded-[22px] w-full mt-5 px-7">
              <Route className="text-white mb-3.5" size={30} />
              <h4 className="text-white text-2xl font-bold pb-3">
                تحليل المدار الذكي
              </h4>
              <p className="text-white text-sm font-semibold">
                تحسن في أوقات التوصيل بنسبة 14% مقارنة بالشهر الماضي. نقترح
                تحسين مسارات شرق آسيا.
              </p>
              <button onClick={() => toast.info("هذه الميزة غير متوفرة حاليا!")} className="w-full rounded-xl cursor-pointer mt-5 py-2 bg-white font-bold text-orange-500">
                عرض التفاصيل
              </button>
            </article>
          </div>

          
        </div>
        <section className="bg-white min-h-[500px] w-full px-7 py-8 rounded-[25px] mt-5 shadow-sm border border-slate-50">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4">
            <div className="text-right">
              <h4 className="text-2xl font-black text-slate-800">
                إدارة الشحنات
              </h4>
              <p className="text-slate-400 text-sm font-medium mt-1">
                قائمة كاملة بكل الشحنات المسجلة في نظامك
              </p>
            </div>

            <div className="relative flex items-center w-full md:w-auto">
              <Search className="text-slate-400 absolute right-4" size={18} />
              <input
                type="search"
                value={searchTrem}
                onChange={(e) => setSearchTrem(e.target.value)}
                className="w-full md:w-80 rounded-2xl text-sm py-2.5 pr-12 pl-4 border border-slate-200 font-semibold focus:outline-none focus:border-orange-400 bg-slate-50/50 transition-all"
                placeholder="البحث برقم الشحنة..."
              />
            </div>
          </div>

          <div className="w-full overflow-x-auto scrollbar-hide select-none">
            <table className="w-full text-right border-collapse min-w-[700px]">
              <thead className="">
                <tr className="text-slate-400 text-[13px] font-bold border-b border-slate-50">
                  <th className="pb-4 whitespace-nowrap">رقم الشحنة (#MD)</th>
                  <th className="pb-4 whitespace-nowrap">المسار</th>
                  <th className="pb-4 whitespace-nowrap px-4">الحالة</th>
                  <th className="pb-4 whitespace-nowrap">
                    الوقت المتوقع (ETA)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {filter.length > 0 ? (

                  filter.map((row, index) => (
                    <tr
                    key={index}
                    className="group hover:bg-slate-50/50 transition-colors"
                    >
                    <td className="py-6 text-slate-800 font-bold text-[15px] whitespace-nowrap">
                      {row.id}
                    </td>
                    <td className="py-6 text-slate-600 font-medium text-[14px] whitespace-nowrap">
                      {row.route}
                    </td>
                    <td className="py-6 px-4">
                      <div
                        className={`flex items-center gap-2 font-bold text-[14px] whitespace-nowrap ${row.color}`}
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${row.dot}`}
                        ></span>
                        {row.status}
                      </div>
                    </td>
                    <td className="py-6 text-slate-500 font-semibold text-[14px] whitespace-nowrap">
                      {row.date}
                    </td>
                  </tr>
                ))
                ) : (
                      <tr>
      <td colSpan={4} className="py-20 text-center">
        <div className="flex flex-col items-center justify-center">
          <Search size={40} className="text-slate-200 mb-3" />
          <p className="text-slate-500 font-bold text-lg">لا توجد نتائج مطابقة</p>
          <p className="text-slate-400 text-sm">تأكد من كتابة رقم الشحنة بشكل صحيح</p>
        </div>
      </td>
    </tr>
              )}
              </tbody>
            </table>
          </div>

          <div className={`${searchTrem !== ""? "hidden" : "block"} mt-8 text-center`}>
            <button onClick={() => toast.info("هذه الميزة غير متوفرة حاليا!")} className="text-orange-600 font-bold text-sm hover:underline cursor-pointer">
              مشاهدة جميع الشحنات (1,284)
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
export default page;
