import { useCalc } from "@/contexts/AddShipmentContext";
import { Box } from "lucide-react";

const ShipmentInformition = () => {
  const {
    Wightt,
    Unit,
    setUnit,
    ship,
    dispatch,
    typeShipment,
    settypeShipment,
  } = useCalc();

  return (
    <section className="col-span-8 shadow-md max-[1100px]:col-span-full bg-white w-full rounded-3xl px-7 py-5">
      <div className="flex justify-between items-center max-[430px]:flex-col max-[430px]:space-y-3 max-[430px]:items-start">
        <div className="flex items-center gap-3">
          <div className="bg-red-200 w-11 h-11 flex items-center justify-center rounded-xl">
            <Box size={24} className="text-red-800" />
          </div>
          <h4 className="text-lg font-bold">تفاصيل الشحنة</h4>
        </div>
        <div className="bg-blue-50 w-fit h-7.5 px-4 rounded-full">
          <span className="text-sm font-semibold">ID: {ship.id}</span>
        </div>
      </div>
      <div className="grid grid-cols-2 max-[550px]:grid-cols-1 max-[550px]:space-y-4 max-[550px]:gap-0 gap-5 pt-4">
        <div className="flex flex-col space-y-1">
          <label htmlFor="typeShipment" className="font-semibold">
            نوع الشحنة
          </label>
          <select
            value={typeShipment}
            onChange={(e) => settypeShipment(e.target.value)}
            id="typeShipment"
            className="bg-blue-50 w-full rounded-xl py-2.5 px-4 focus:border focus:border-blue-200 transition-all duration-200"
          >
            <option>بضائع عامة</option>
            <option>أدوية ومواد طبية</option>
            <option>أثاث ومفروشات</option>
            <option>معدات وآلات ثقيلة</option>
            <option>مواد غذائية/سريعة التلف</option>
          </select>
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="unit" className="font-semibold">
            عدد القطع
          </label>
          <input
            type="number"
            min={1}
            value={Unit}
            onChange={(e) => {
              if (e.target.value === "0") return;
              setUnit(e.target.value);
            }}
            id="unit"
            className="bg-blue-50 focus:outline-0 w-full rounded-xl py-2.5 px-4 focus:border focus:border-blue-200 transition-all duration-200"
          />
        </div>
      </div>
      <div className="bg-blue-50 mt-5 border py-4 px-7 border-blue-100 rounded-2xl">
        <div className="flex justify-between max-[630px]:flex-col max-[630px]:space-y-1">
          <h5 className="font-bold">الأبعاد والوزن (القطعة الواحدة)</h5>
          <div className="w-fit h-7 px-4 shadow-md bg-red-700/10 rounded-full">
            <span className="text-orange-800 font-semibold text-sm max-[630px]:text-xs">
              الوزن الحجمي: {Wightt} كجم
            </span>
          </div>
        </div>
        <div className="grid grid-cols-4 max-[700px]:grid-cols-2 max-[480px]:grid-cols-1 mt-4 gap-4">
          <div>
            <label htmlFor="wight" className="text-gray-600 text-sm">
              الوزن (كجم)
            </label>
            <input
              type="number"
              min={1}
              maxLength={6}
              id="wight"
              value={ship.wight}
              onChange={(e) => dispatch({ type: "WIGHT", val: e.target.value })}
              className="w-full focus:outline-none border border-blue-200 shadow bg-white px-4 rounded-full py-2"
            />
          </div>
          <div>
            <label htmlFor="hight" className="text-gray-600 text-sm">
              الطول (سم)
            </label>
            <input
              type="number"
              min={1}
              maxLength={6}
              id="hight"
              value={ship.hight}
              onChange={(e) => dispatch({ type: "HIGHT", val: e.target.value })}
              className="w-full focus:outline-none border border-blue-200 shadow bg-white px-4 rounded-full py-2"
            />
          </div>
          <div>
            <label htmlFor="width" className="text-gray-600 text-sm">
              العرض (سم)
            </label>
            <input
              type="number"
              min={1}
              maxLength={6}
              id="width"
              value={ship.width}
              onChange={(e) => dispatch({ type: "WIDTH", val: e.target.value })}
              className="w-full focus:outline-none border border-blue-200 shadow bg-white px-4 rounded-full py-2"
            />
          </div>
          <div>
            <label htmlFor="tens" className="text-gray-600 text-sm">
              الارتفاع (سم)
            </label>
            <input
              type="number"
              min={1}
              maxLength={6}
              id="tens"
              value={ship.tens}
              onChange={(e) => dispatch({ type: "TENS", val: e.target.value })}
              className="w-full focus:outline-none border border-blue-200 shadow bg-white px-4 rounded-full py-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ShipmentInformition;
