import { useCalc } from "@/contexts/AddShipmentContext";
import { CircleAlertIcon, MapPinned } from "lucide-react";

const GetInformition = () => {
  const { ship, dispatch } = useCalc();
  return (
    <section className="bg-white px-4 col-span-4 max-[1100px]:col-span-1 max-[750px]:col-span-full py-5 rounded-3xl border border-blue-100 shadow-md w-full">
      <div className="flex items-center gap-3">
        <MapPinned className="text-blue-700" size={22} />
        <h3 className="text-xl font-bold">معلومات المستلم</h3>
      </div>
      <div className="flex flex-col space-y-3 pt-3">
        <div className="flex flex-col space-y-1">
          <label htmlFor="name" className="font-semibold text-gray-800">
            الإسم الكامل
          </label>
          <input
            maxLength={12}
            minLength={5}
            value={ship.nameOfGet}
            onChange={(e) =>
              dispatch({ type: "NAME_OF_GET", val: e.target.value })
            }
            type="text"
            id="name"
            className="bg-blue-50 rounded-full py-1.5 focus:outline-none px-4 placeholder:text-gray-500 placeholder:font-semibold"
            placeholder="مثال: أحمد محمد"
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col space-y-1">
            <label htmlFor="country" className="font-semibold text-gray-800">
              الدولة
            </label>
            <select
              value={ship.countryOfGet}
              onChange={(e) =>
                dispatch({ type: "COUNTRY_OF_GET", val: e.target.value })
              }
              id="country"
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
              value={ship.cityOfGet}
              onChange={(e) =>
                dispatch({ type: "CITY_OF_GET", val: e.target.value })
              }
              id="cuntry"
              className="bg-blue-50 rounded-full py-2 focus:outline-none px-4"
            >
              <option>الرياض</option>
              <option>جدة</option>
              <option>المدينة</option>
              <option>مكة</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col space-y-1">
            <label htmlFor="mail" className="font-semibold text-gray-800">
              الرمز البريدي
            </label>
            <input
              value={ship.mail}
              onChange={(e) => dispatch({ type: "MAIL", val: e.target.value })}
              type="text"
              maxLength={5}
              id="mail"
              className="bg-blue-50 rounded-full py-1.5 focus:outline-none px-4 placeholder:text-gray-500 placeholder:font-semibold"
              placeholder="12345"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="phoneNumber"
              className="font-semibold text-gray-800"
            >
              رقم الجوال
            </label>
            <input
              value={ship.phoneNumber}
              onChange={(e) =>
                dispatch({ type: "PHONE_OF_GET", val: e.target.value })
              }
              maxLength={10}
              minLength={10}
              type="text"
              id="phoneNumber"
              className="bg-blue-50 rounded-full py-1.5 focus:outline-none px-4 placeholder:text-gray-500 placeholder:font-semibold text-left"
              placeholder="5XXXXXXXX"
            />
          </div>
        </div>

        <div className="bg-red-100 flex items-center gap-3 mt-4 w-full rounded-full px-4 py-3">
          <CircleAlertIcon size={20} className="text-red-800" />
          <p className="text-red-700/70 text-sm font-semibold">
            سيتم إرسال رابط التتبع لهذا الرقم.
          </p>
        </div>
      </div>
    </section>
  );
};
export default GetInformition;
