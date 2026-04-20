"use client"
import ChoiseServic from "@/components/ChoiseServic";
import GetInformition from "@/components/GetInformition";
import SendInformition from "@/components/SendInformition";
import ShipmentInformition from "@/components/ShipmentInformition";
import { useCalc } from "@/contexts/AddShipmentContext";
import { FileSignature, ArrowLeft, ShieldCheckIcon, Loader2 } from "lucide-react";

const page = () => {
  const { Price, Total, Taks,isReadyToShip, Bill, dispatch, ship, addShip, isLoading, setisLoading } = useCalc();
  const hanelAddShip = () => {
    addShip()
  }
  
  
  return (
    <div className="bg-gray-50 my-12">
      <div className="w-[85%] max-[400px]:w-[90%] m-auto">
        <div className="flex min-[700px]:items-center min-[700px]:justify-between max-[700px]:flex-col max-[700px]:space-y-4">
          <div>
            <h2 className="text-2xl font-bold">إنشاء شحنة جديدة</h2>
            <p className="font-semibold text-gray-600">
              أكمل البيانات التالية لإصدار بوليصة الشحن الخاصة بك.
            </p>
          </div>
          <div className="bg-green-100 rounded-full w-fit flex items-center gap-3 px-4 py-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <p className="text-xs font-semibold">
              نظام التسعير:{" "}
              <span className="text-green-600 font-bold">متصل الآن</span>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-11 max-[1100px]:grid-cols-2 gap-4 mt-8">
          <SendInformition />
          <GetInformition />
          <article className="bg-white min-[1100px]:sticky min-[1100px]:inset-0 min-[1100px]:top-20 col-span-3 max-[1100px]:col-span-full rounded-3xl shadow-md px-5 py-8 h-fit w-full">
            <div className="flex items-center gap-3">
              <FileSignature size={22} className="text-orange-700" />
              <h3 className="text-xl font-bold">ملخص الفاتورة</h3>
            </div>
            <div className="pt-3">
              <div className="flex justify-between items-center">
                <h4 className="text-xs text-gray-500 font-bold">
                  سعر الشحن الأساسي
                </h4>
                <span className="font-semibold">SAR {Price}</span>
              </div>
              <div className="flex justify-between items-center">
                <h4 className="text-xs text-gray-500 font-bold">
                  رسوم الخدمة السريعة
                </h4>
                <span className="font-semibold">SAR {Bill}</span>
              </div>
              <div className="flex justify-between items-center">
                <h4 className="text-xs text-gray-500 font-bold">
                  القيمة المضافة (15%)
                </h4>
                <span className="font-semibold">SAR {Taks}</span>
              </div>
            </div>
            <hr className="w-full text-slate-300 block my-4" />
            <div className="flex justify-between">
              <h5 className="font-bold text-xl">الإجمالي النهائي</h5>
              <p className="text-orange-700 text-2xl font-bold">
                {Total} <span className="text-[10px]">SAR</span>
              </p>
            </div>
            <div className="pt-7">
              <button disabled={!isReadyToShip || isLoading} className="text-white font-bold flex justify-center items-center gap-2 w-full rounded-xl cursor-pointer hover:bg-orange-600 transition-colors duration-200 py-3 bg-orange-500" onClick={()=>{
                setisLoading(true)
                setTimeout(()=>{
                  hanelAddShip()
                }, 3000)
              }}>
                {isLoading ? (
                  <>
                  <Loader2 className="text-white animate-spin"/>
                  </>
                ): (
                    <>
                  تأكيد وإصدار البوليصة
                  <ArrowLeft size={22} />
                    </>
               )}
              </button>
              <div className="flex items-center gap-3 mt-4 bg-green-50 py-3 px-4 rounded-xl border border-green-100">
                <ShieldCheckIcon className="text-green-500" size={32} />
                <p className="text-xs text-green-600 font-semibold">
                  جميع الشحنات مؤمن عليها تلقائياً ضد الفقدان أو التلف حتى مبلغ
                  500 ريال سعودي.
                </p>
              </div>
            </div>
          </article>
          <ShipmentInformition />
          <section className="bg-white shadow-md rounded-2xl px-6 py-8 col-span-8 max-[1100px]:col-span-full">
            <div className="flex items-center gap-2">
              <FileSignature className="text-orange-700" size={24} />
              <h4 className="font-bold text-lg">المحتوى والقيمة</h4>
            </div>
            <div className="grid grid-cols-5 gap-4 max-[570px]:grid-cols-1 max-[570px]:gap-0 max-[570px]:space-y-1">
              <div className="flex flex-col col-span-3 space-y-1 pt-3">
                <label htmlFor="type" className="font-semibold">
                  وصف المحتوى
                </label>
                <input
                  maxLength={50}
                  minLength={5}
                value={ship.content}
            onChange={(e) => dispatch({type: "CONTENT", val: e.target.value})}
                  type="text"
                  id="type"
                  className="bg-blue-50 text-[15px] w-full px-4 py-2 rounded-full focus:outline-none"
                  placeholder="مثال: ملابس قطنية, أجهزة إلكترونية..."
                />
              </div>
              <div className="flex flex-col col-span-2 space-y-1 pt-3">
                <label htmlFor="price" className="font-semibold">
                  القيمة المعلنة
                </label>
                <input
                  value={ship.post}
            onChange={(e) => dispatch({type: "POST", val: e.target.value})}
                  type="number"
                  min={1}
                  id="price"
                  className="bg-blue-50 text-[15px] w-full px-4 py-2 rounded-full focus:outline-none"
                  placeholder="قيمة البضاعة..."
                />
              </div>
              <div className="flex flex-col col-span-2 space-y-1 pt-3">
                <label htmlFor="price" className="font-semibold">
                  رقم الفاتورة (اختياري)
                </label>
                <input
                  maxLength={10}
                value={ship.billNumber}
            onChange={(e) => dispatch({type: "BILL_NUMBER", val: e.target.value})}
                  type="text"
                  id="price"
                  className="bg-blue-50 text-[15px] w-full px-4 py-2 rounded-full focus:outline-none"
                  placeholder="INV-2026-001"
                />
              </div>
            </div>
          </section>
          <ChoiseServic />
        </div>
      </div>
    </div>
  );
};
export default page;
