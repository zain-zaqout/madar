"use client";
import Bill from "@/components/Bill";
import ChoiseServic from "@/components/ChoiseServic";
import ContentAndValue from "@/components/ContentAndValue";
import GetInformition from "@/components/GetInformition";
import SendInformition from "@/components/SendInformition";
import ShipmentInformition from "@/components/ShipmentInformition";

const page = () => {

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
          <ShipmentInformition />
          <ContentAndValue />
          <ChoiseServic />
          <Bill />
        </div>
      </div>
    </div>
  );
};
export default page;
