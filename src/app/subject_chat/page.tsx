"use client";
import { useShip } from "@/contexts/ShipmentsContext";
import { useChat } from "@/contexts/SupportChatContext";
import {
  ArrowLeft,
  CircleAlert,
  CircleHelp,
  Loader2,
  MessageSquare,
  MessageSquareLock,
} from "lucide-react";

const page = () => {

  const { supportFilter } = useShip()
  const {SubjectChat, setSubjectChat, shipment, setshipment, startChat, isLoading,setisLoading} = useChat()

  const handelStartChat = () => {
    startChat()
  };
  return (
    <>
      <header className="h-15 w-full z-100 flex border-b border-gray-200 shadow-md">
        <div className="w-[95%] m-auto flex justify-between items-center">
          <span className="text-orange-500 text-xl font-black">
            مدار | Madar
          </span>
          <CircleHelp size={18} className="hover:text-orange-600 duration-300 cursor-pointer"/>
        </div>
      </header>

      <main className="flex items-center justify-center h-[90vh]">
        <div className="scale-[0.9] origin-center">
          <div className="bg-white w-115 rounded-3xl px-6 py-6">
            <div>
              <div className="flex justify-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-orange-200/55">
                  <MessageSquare size={24} className="text-orange-700" />
                </div>
              </div>

              <h2 className="font-bold text-[26px] pt-1 text-center leading-13">
                كيف يمكننا مساعدتك اليوم؟
              </h2>

              <p className="text-gray-600 font-semibold text-[15px] text-center leading-6">
                فريق الدعم الفني في مدار متاح لمساعدتك في أي استفسار يخص شحناتك
                أو التخليص الجمرك.
              </p>
            </div>

            <div className="flex flex-col space-y-5 pt-5.5">
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="qus"
                  className="text-sm font-bold text-gray-800"
                >
                  موضوع الإستفسار
                </label>
                <select
                  value={SubjectChat}
                  onChange={(e) => setSubjectChat(e.target.value)}
                  id="qus"
                  className="bg-blue-50 px-2 rounded-[14px] py-2"
                >
                  <option>مشكلة في الجمركة</option>
                  <option>مشكلة في التسليم</option>
                  <option>استفسار مالي أو فواتير</option>
                  <option>عمل تقني في المنصة</option>
                  <option>أُخرى...</option>
                </select>
              </div>

              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="shipment"
                  className="text-sm font-bold text-gray-800"
                >
                  الشحنة المرتبطة
                </label>
                  <select
                  id="shipment"
                  value={shipment}
                  onChange={(e) => setshipment(e.target.value)}
                    className="bg-blue-50 px-2 rounded-xl py-2"
                >
                  <option>استفسار عام</option>
                    {supportFilter.map((item: any, index: any) => (
                      <option key={index} value={item.id}>{item.id} - {item.status}</option>
                  ))}
                  </select>
              </div>
            </div>

            <div className="border mt-5 border-red-100 flex items-center gap-3 bg-red-50 rounded-2xl px-3 py-3.5">
              <CircleAlert size={37} className="text-orange-800" />
              <p className="text-xs text-gray-600 font-semibold">
                سيتم ربطك بأقرب وكيل متاح متخصص في الموضوع المختار لضمان سرعة
                الحل, وقت الإنتظار المتوقع:{" "}
                <span className="font-bold text-slate-700">اقل من دقيقتين</span>
              </p>
            </div>

            <button
              disabled={isLoading}
              className="text-white mt-4 font-bold flex justify-center items-center gap-2 w-full rounded-xl cursor-pointer hover:bg-orange-700 transition-colors duration-200 py-3 bg-orange-600 shadow-lg"
              onClick={handelStartChat}
            >
              {isLoading ? (
                <>
                <Loader2 className="animate-spin"/>
                جاري التحويل
                </>
              ): (
                  <>
                   بدء المحادثة
              <ArrowLeft size={22} />
                  </>  
             )}
            </button>

            <div className="border-t border-slate-200 flex items-center justify-center mt-4 gap-5 pt-5.5">
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-gray-600 text-xs font-semibold">
                  الدعم متاح الآن
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <MessageSquareLock size={14} />
                <span className="text-gray-600 text-xs font-semibold">
                  محادثة مشفرة وآمنة
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
