import { useCalc } from "@/contexts/AddShipmentContext";
import { FileSignature, Loader2, ArrowLeft, ShieldCheckIcon } from "lucide-react";

const Bill = () => {
    const {
    Price,
    Total,
    Taks,
    isReadyToShip,
    Bill,
    addShip,
    isLoading,
    setisLoading,
  } = useCalc();
  return (
    <article className="bg-white min-[1100px]:sticky min-[1100px]:inset-0 min-[1100px]:bottom-18 col-span-3 max-[1100px]:col-span-full rounded-3xl shadow-md px-5 py-8 h-fit w-full">
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
              <button
                disabled={!isReadyToShip || isLoading}
                className="text-white font-bold flex justify-center items-center gap-2 w-full rounded-xl cursor-pointer hover:bg-orange-600 transition-colors duration-200 py-3 bg-orange-500"
                onClick={() => {
                  setisLoading(true);
                  setTimeout(() => {
                    addShip();
                  }, 3000);
                }}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="text-white animate-spin" />
                  </>
                ) : (
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
  )
}
export default Bill