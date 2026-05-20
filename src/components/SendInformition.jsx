import { useCalc } from "@/contexts/AddShipmentContext";
import { MapPin } from "lucide-react";

const SendInformition = () => {
  const { dispatch, ship } = useCalc();
  return (
    <section className="bg-white px-4 col-span-4 max-[1100px]:col-span-1 max-[750px]:col-span-full py-5 rounded-3xl border border-orange-100 shadow-md w-full">
      <div className="flex items-center gap-3">
        <MapPin className="text-orange-700" size={22} />
        <h3 className="text-xl font-bold">معلومات الراسل</h3>
      </div>
      <div className="flex flex-col space-y-3 pt-3">
        <div className="flex flex-col space-y-1">
          <label htmlFor="name" className="font-semibold text-gray-800">
            الإسم الكامل
          </label>
          <input
            type="text"
            id="name"
            maxLength={12}
            minLength={5}
            value={ship.nameOfSend}
            onChange={(e) =>
              dispatch({ type: "NAME_OF_SEND", val: e.target.value })
            }
            className="bg-blue-50 rounded-full py-1.5 focus:outline-none px-4 placeholder:text-gray-500 placeholder:font-semibold"
            placeholder="مثال: أحمد محمد"
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col space-y-1">
            <label htmlFor="cuntry" className="font-semibold text-gray-800">
              الدولة
            </label>
            <select
              value={ship.countryOfSend}
              onChange={(e) =>
                dispatch({ type: "COUNTRY_OF_SEND", val: e.target.value })
              }
              id="cuntry"
              className="bg-blue-50 rounded-full py-2 focus:outline-none px-4"
            >
              <option>السعودية</option>
              <option>الكويت</option>
              <option>قطر</option>
              <option>البحرين</option>
              <option>سلطنة عمان</option>
              <option>الإمارات</option>
              <option>الأردن</option>
              <option>العراق</option>
            </select>
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="city" className="font-semibold text-gray-800">
              المدينة
            </label>
            <select
              value={ship.cityOfSend}
              onChange={(e) =>
                dispatch({ type: "CITY_OF_SEND", val: e.target.value })
              }
              id="city"
              className="bg-blue-50 rounded-full py-2 focus:outline-none px-4"
            >
              <option>الرياض</option>
              <option>جدة</option>
              <option>المدينة</option>
              <option>مكة</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="place" className="font-semibold text-gray-800">
            العنوان
          </label>
          <input
            type="text"
            value={ship.addresOfSend}
            maxLength={25}
            minLength={5}
            onChange={(e) =>
              dispatch({ type: "ADDRES_OF_SEND", val: e.target.value })
            }
            id="place"
            className="bg-blue-50 rounded-full py-1.5 focus:outline-none px-4"
            placeholder="اسم الشارع, الحي, رقم المبنى"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="phoneNumber" className="font-semibold text-gray-800">
            رقم الجوال
          </label>
          <input
            value={ship.phoneNumber}
            onChange={(e) =>
              dispatch({ type: "PHONE_OF_SEND", val: e.target.value })
            }
            type="text"
            maxLength={10}
            id="phoneNumber"
            className="bg-blue-50 rounded-full py-1.5 focus:outline-none px-4 placeholder:text-gray-500 placeholder:font-semibold text-left"
            placeholder="5XXXXXXXX"
          />
        </div>
      </div>
    </section>
  );
};
export default SendInformition;
