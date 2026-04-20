"use client";
import FAQ from "@/components/FAQ";
import { useData } from "@/contexts/UserContext";
import {
  AlignCenterVerticalIcon,
  Truck,
  AlertOctagon,
  Component,
  Files,
  Headset,
  Cpu,
  Sparkle,
} from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

const page = () => {
  const { informition } = useData();
  const userName = informition.userName;
  const shipments = "03";

  const table = [
    {
      id: "MD-88291",
      route: "شنغهاي ← الرياض",
      status: "قيد النقل",
      color: "text-orange-600",
      dot: "bg-orange-600",
    },
    {
      id: "MD-77201",
      route: "لندن ← دبي",
      status: "معلقة (جمارك)",
      color: "text-red-600",
      dot: "bg-red-600",
    },
    {
      id: "MD-11932",
      route: "نيويورك ← جدة",
      status: "تم التوصيل",
      color: "text-green-600",
      dot: "bg-green-600",
    },
    {
      id: "MD-44092",
      route: "طوكيو ← الدمام",
      status: "في المستودع",
      color: "text-blue-600",
      dot: "bg-blue-600",
    },
  ];
  return (
    <div className="my-10">
      <div className="w-[90%] m-auto">
        <section>
          <div className="bg-green-100/60 w-fit px-4 py-1.5 rounded-full flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-sm text-green-600 font-semibold">
              جميع الأنظمة والخطوط الدولية تعمل بكفاءة
            </span>
          </div>
          <div className="pt-6">
            <h1 className="text-4xl max-[670px]:text-3xl max-w-xl font-black">
              مركز العمليات والمساندة الفنية -{" "}
              <span className="text-orange-500">مدار</span> اللوجستية
            </h1>
            <p className="text-gray-500 font-semibold pt-3">
              أهلا بك يا {userName}, يمكنك إدارة شحناتك الحالية أو طلب استشارة
              فنية فورية من خلال الخيارات المتاحة أدناه.
            </p>
          </div>
          <div className="pt-7">
            <button
              onClick={() => toast.info("هذه الميزة غير متوفرة حاليا!")}
              className={`bg-orange-500 hover:bg-orange-600 shadow-md shadow-orange-200 flex justify-center transition-all duration-150 cursor-pointer py-3 w-43 text-slate-50  font-semibold rounded-full`}
            >
              تحدث مع خبير الآن
            </button>
          </div>
        </section>
        <section className="mt-15">
          <div className="flex items-center gap-2">
            <AlignCenterVerticalIcon size={22} className="text-orange-700" />
            <p className="text-lg font-bold">مصفوفة العمليات التشغيلية</p>
          </div>
          <div className="grid grid-cols-12 mt-5 gap-5 items-center max-[1024px]:grid-cols-1">
            <div className="bg-white min-[1024px]:col-span-8 min-h-[500px] w-full px-7 py-8 rounded-[25px] shadow-sm border border-slate-50">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4">
                <div className="text-right flex items-center gap-2">
                  <Truck size={22} />
                  <h3 className="text-2xl font-black text-slate-800">
                    إدارة الشحنات النشطة
                  </h3>
                </div>

                <div>
                  <span className="text-sm text-gray-500 font-semibold">
                    عدد الشحنات: {shipments}
                  </span>
                </div>
              </div>

              <div className="w-full overflow-x-auto scrollbar-hide select-none">
                <table className="w-full text-right border-collapse min-w-[700px]">
                  <thead className="">
                    <tr className="text-slate-400 text-[13px] font-bold border-b border-slate-50">
                      <th className="pb-4 whitespace-nowrap">
                        رقم الشحنة (#MD)
                      </th>
                      <th className="pb-4 whitespace-nowrap">المسار</th>
                      <th className="pb-4 whitespace-nowrap px-4">الحالة</th>
                      <th className="pb-4 whitespace-nowrap">الإجراءات</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {table.map((row, index) => (
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
                          <span className="text-orange-500 hover:text-orange-600 cursor-pointer transition-colors duration-100">
                            تتبع الشحنة
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 max-[1024px]:grid-cols-2 max-[560px]:grid-cols-1 max-[560px]:gap-0 max-[1024px]:gap-5 space-y-3 min-[1024px]:col-span-4">
              <div className="bg-white border border-red-100 rounded-[30px] px-5 py-5">
                <div className="bg-red-200/55 flex items-center justify-center w-12 h-12 rounded-full">
                  <AlertOctagon size={22} className="text-red-700" />
                </div>
                <h4 className="text-2xl font-semibold pt-4">
                  بلاغات استثنائية
                </h4>
                <p className="text-sm text-gray-500 pt-0.5 leading-relaxed">
                  تسجيل فوري لحالات التلف أو التأخير الحرجة التي تتطلب تدخلا
                  فورياً.
                </p>
                <button onClick={() => toast.info("هذه الميزة غير متوفرة حاليا!")} className="w-full cursor-pointer hover:bg-red-50 transition-colors duration-300 py-3 text-red-600 mt-4 rounded-full border font-semibold border-red-100">
                  بدء محادثة
                </button>
              </div>

              <div className="bg-white border border-slate-200 rounded-[30px] px-5 py-4">
                <div className="bg-slate-200/80 flex items-center justify-center w-12 h-12 rounded-full">
                  <Files size={22} className="text-slate-700" />
                </div>
                <h4 className="text-2xl font-semibold pt-4">
                  الأرشيف والمستندات
                </h4>
                <p className="text-sm text-gray-500 pt-0.5 leading-relaxed">
                  الوصول المركزي للفواتير,بوالص الشحن, وتقارير التخليص الجمركي
                  المعتمدة
                </p>
                <button onClick={() => toast.info("هذه الميزة غير متوفرة حاليا!")} className="w-full cursor-pointer hover:bg-slate-100/80 transition-colors duration-300 py-3 text-slate-600 mt-4 rounded-full border font-semibold border-red-100">
                  عرض الأرشيف
                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="flex items-center gap-2 mb-5 mt-5">
            <Component size={20} className="text-orange-700" />
            <h4 className="text-lg font-bold">قنوات الدعم التخصصية</h4>
          </div>

          <div className="grid grid-cols-3 max-[915px]:grid-cols-1 gap-5">
            <div className="bg-white border border-slate-200 rounded-[30px] px-5 py-6">
              <div className="flex items-center justify-between">
                <div className="bg-orange-200/80 flex items-center justify-center w-12 h-12 rounded-xl">
                  <Headset size={22} className="text-orange-700" />
                </div>
                <div>
                  <span className="text-green-700 text-xs px-2.5 rounded-full font-bold bg-green-200">
                    متاح الآن
                  </span>
                </div>
              </div>
              <h4 className="text-[20px] font-black pt-4">
                استشارة خبير لوجستي
              </h4>
              <p className="text-sm text-gray-500 font-semibold pt-2 leading-relaxed">
                للإستفسارات المعقدة المتعلقة بالتخليص الجمركي وتخطيط سلاسل
                الإمداد العالمية.
              </p>
              <button onClick={() => toast.info("هذه الميزة غير متوفرة حاليا!")} className="max-w-85 w-full cursor-pointer bg-orange-500 hover:bg-orange-600 transition-colors duration-300 py-3 text-white mt-6 rounded-full border font-bold border-red-100">
                بدء الجلسة
              </button>
            </div>

            <div className="bg-white border border-slate-200 rounded-[30px] px-5 py-6">
              <div className="flex items-center justify-between">
                <div className="bg-blue-200/80 flex items-center justify-center w-12 h-12 rounded-xl">
                  <Cpu size={22} className="text-blue-700" />
                </div>
                <div>
                  <span className="text-blue-700/90 text-xs px-2.5 rounded-full font-bold bg-blue-200">
                    وقت الإنتظار: 2 دقيقة
                  </span>
                </div>
              </div>
              <h4 className="text-[20px] font-black pt-4">
                الدعم الفني التقني
              </h4>
              <p className="text-sm text-gray-500 font-semibold pt-2 leading-relaxed">
                حل مشاكل الحساب, الربط عبر API, وصعوبات استخدام منصة مدار
                التقنية.
              </p>
              <Link href="/subject_chat">
                <button className="w-full max-w-85 cursor-pointer bg-transparent hover:bg-slate-100/80 transition-colors duration-300 py-3 text-slate-600 mt-6 rounded-full border font-bold border-slate-200">
                  فتح تذكرة فنية
                </button>
              </Link>
            </div>

            <div className="bg-white border border-slate-200 rounded-[30px] px-5 py-6">
              <div className="flex items-center justify-between">
                <div className="bg-violet-200 flex items-center justify-center w-12 h-12 rounded-xl">
                  <Sparkle size={22} className="text-violet-700" />
                </div>
                <div>
                  <span className="text-violet-700 text-xs px-2.5 rounded-full font-bold bg-violet-200">
                    فوري
                  </span>
                </div>
              </div>
              <h4 className="text-[20px] font-black pt-4">
                المساعد الرقمي الذكي
              </h4>
              <p className="text-sm text-gray-500 font-semibold pt-2 leading-relaxed">
                إجابات فورية وآلية على الأسئلة المتكررة وتتبع حالة الشحنات
                البسيطة.
              </p>
              <button onClick={() => toast.info("هذه الميزة غير متوفرة حاليا!")} className="w-full max-w-85 cursor-pointer bg-slate-600 hover:bg-slate-700 transition-colors duration-300 py-3 text-white mt-6 rounded-full border font-bold border-red-100">
                بدء المحادثة
              </button>
            </div>
          </div>
        </section>
        <FAQ />
      </div>
    </div>
  );
};
export default page;
