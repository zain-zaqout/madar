import { useCalc } from "@/contexts/AddShipmentContext";
import { Truck, Zap, DollarSign, Route, Ship } from "lucide-react";

const ChoiseServic = () => {
  const { servic, setServic } = useCalc();
  return (
    <section className="bg-white rounded-2xl shadow-md h-fit col-span-8 max-[1100px]:col-span-full px-6 py-5">
      <div className="flex items-center gap-3">
        <Truck size={22} className="text-orange-800" />
        <h3 className="text-xl font-bold">إختر نوع الخدمة</h3>
      </div>

      <div className="mt-6 grid grid-cols-4 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1 gap-4">
        <div
          className={`${servic === 1 ? "bg-red-50 border-2 border-orange-800 group hover:bg-red-100 transition-colors duration-150" : "bg-blue-50 group transition-colors duration-100 hover:bg-blue-100"} 
      flex flex-col cursor-pointer select-none items-center justify-center rounded-2xl w-full h-35`}
          onClick={() => setServic(1)}
        >
          <DollarSign
            className={`${servic === 1 ? "text-orange-800" : "text-slate-700 group-hover:-translate-y-2 duration-150"}`}
            size={26}
          />
          <span className="font-bold pt-2">اقتصادي</span>
          <div
            className={`${servic === 1 ? "w-fit px-2 h-5 mt-1 flex items-center bg-orange-800 rounded-full" : ""}`}
          >
            <span
              className={`${servic === 1 ? "text-white text-xs" : "text-xs font-bold text-gray-500"}`}
            >
              3-5 ايام
            </span>
          </div>
        </div>

        <div
          className={`${servic === 2 ? "bg-red-50 border-2 border-orange-800 group hover:bg-red-100 transition-colors duration-150" : "bg-blue-50 group transition-colors duration-100 hover:bg-blue-100"} 
        flex flex-col cursor-pointer select-none items-center justify-center rounded-2xl w-full h-35`}
          onClick={() => setServic(2)}
        >
          <Zap
            className={`${servic === 2 ? "text-orange-800" : "text-slate-700 group-hover:-translate-y-2 duration-150"}`}
            size={26}
          />
          <span className="font-bold pt-2">سريع</span>
          <div
            className={`${servic === 2 ? "w-fit px-2 h-5 mt-1 flex items-center bg-orange-800 rounded-full" : ""}`}
          >
            <span
              className={`${servic === 2 ? "text-white text-xs" : "text-xs font-bold text-gray-500"}`}
            >
              24 ساعة
            </span>
          </div>
        </div>

        <div
          className={`${servic === 3 ? "bg-red-50 border-2 border-orange-800 group hover:bg-red-100 transition-colors duration-150" : "bg-blue-50 group transition-colors duration-100 hover:bg-blue-100"} 
      flex flex-col cursor-pointer select-none items-center justify-center rounded-2xl w-full h-35`}
          onClick={() => setServic(3)}
        >
          <Route
            className={`${servic === 3 ? "text-orange-800" : "text-slate-700 group-hover:-translate-y-2 duration-150"}`}
            size={26}
          />
          <span className="font-bold pt-2">بري</span>
          <div
            className={`${servic === 3 ? "w-fit px-2 h-5 mt-1 flex items-center bg-orange-800 rounded-full" : ""}`}
          >
            <span
              className={`${servic === 3 ? "text-white text-xs" : "text-xs font-bold text-gray-500"}`}
            >
              2-3 ايام
            </span>
          </div>
        </div>

        <div
          className={`${servic === 4 ? "bg-red-50 border-2 border-orange-800 group hover:bg-red-100 transition-colors duration-150" : "bg-blue-50 group transition-colors duration-100 hover:bg-blue-100"} 
      flex flex-col cursor-pointer select-none items-center justify-center rounded-2xl w-full h-35`}
          onClick={() => setServic(4)}
        >
          <Ship
            className={`${servic === 4 ? "text-orange-800" : "text-slate-700 group-hover:-translate-y-2 duration-150"}`}
            size={26}
          />
          <span className="font-bold pt-2">بحري</span>
          <div
            className={`${servic === 4 ? "w-fit px-2 h-5 mt-1 flex items-center bg-orange-800 rounded-full" : ""}`}
          >
            <span
              className={`${servic === 4 ? "text-white text-xs" : "text-xs font-bold text-gray-500"}`}
            >
              14 ايام
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ChoiseServic;
