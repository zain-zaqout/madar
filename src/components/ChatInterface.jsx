"use client";
import TypingIndicator from "@/components/TypingIndicator";
import { useChat } from "@/contexts/SupportChatContext";
import { useData } from "@/contexts/UserContext";
import { X, Zap, Calendar, Link, SendHorizonal } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const page = () => {
  const router = useRouter();
  const { shipment, SubjectChat, Trip } = useChat();
  const { informition } = useData();
  const { InputValue, setInputValue, Messages, setMessages, isTypeing, setisTypeing, handelaAdNewMessage, timeNow } = useChat()
  const scrollRef = useRef(null);

  const userName = informition.userName

  useEffect(() => {
    const SystemMessage = setTimeout(() => {
      setMessages([
        {
          text: ` مرحبا ${userName}, تم توجيه طلبك للقسم المختص, سارة تراجع الآن
                تفاصيل الشحنة المختارة.`,
          sender: "system",
        },
      ]);
      setTimeout(() => {
        setisTypeing(true);

      }, 2500);
    }, 2000);
    const supportMessage = setTimeout(() => {

      const useMessage = {
        text:
          shipment === "استفسار عام" &&
            SubjectChat !==
            ("أُخرى..." || "استفسار مالي أو فواتير" || "عمل تقني في المنصة")
            ? `مرحبا ${userName} لاحظت أنك تواجه ${SubjectChat}, هل يمكنك تزويدي بالمزيد من التفاصيل!`
            : `مرحبا ${userName} لاحظت أنك تواجه مشكلة في الشحنة ${shipment} هل يمكنك تزويدي بالتفاصيل!`,
        sender: "support",
        time: timeNow,
      };
      setMessages((prev) => [...prev, useMessage]);
      setisTypeing(false);
    }, 8500);
    return () => {
      clearTimeout(supportMessage);
      clearTimeout(SystemMessage);
    };
  }, []);
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [Messages, isTypeing]);

  return (
    <div className="bg-gray-50 flex flex-col h-screen overflow-hidden rounded-2xl">
      <header className="h-[11vh] shrink-0 w-full border-b border-slate-100 flex">
        <div className="w-[95%] m-auto flex items-center justify-between">
          <div className="flex items-center gap-2 relative">
            <img
              src="/assets/image/Manegar2.png"
              className="w-10 h-10 select-none object-cover rounded-full"
              alt=""
            />
            <span className="bg-emerald-500 absolute bottom-0 rounded-full w-3 h-3" />
            <div className="flex flex-col">
              <span className="font-bold cursor-default select-none">
                سارة - العمليات
              </span>
              <span className="text-xs text-green-600 cursor-default select-none">
                متصل الآن
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <span className="text-sm uppercase font-semibold text-left text-slate-600">
                Ticket Id
              </span>
              <span className="font-semibold text-orange-700 text-left">
                {shipment === "استفسار عام" ? "استفسار عام" : `${shipment}`}
              </span>
            </div>
            <div
              className="bg-gray-100 group hover:bg-red-100 duration-200 cursor-pointer w-10 h-10 flex items-center justify-center rounded-full"
              onClick={() => {
                router.replace("/support")
                setMessages([])
                setInputValue("")
                setisTypeing(false)
              }}
            >
              <X className="group-hover:text-red-500 group-hover:rotate-180 duration-200" />
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto shrink-0">
        <div className="w-[95%] m-auto">
          <section className="bg-blue-50 px-5 py-5 my-5 w-full rounded-l-xl border-r-4 border-orange-700/80">
            <h2 className="font-bold">تفاصيل البلاغ الحالي</h2>
            <div className="grid grid-cols-3 max-[540px]:space-y-5 mt-5 max-[540px]:grid-cols-1">
              <div>
                <h3 className="text-xs min-[540px]:text-gray-600">المشكلة</h3>
                <p className="font-semibold">{SubjectChat}</p>
              </div>
              <div>
                <h3 className="text-xs min-[540px]:text-gray-600">
                  رقم الشحنة
                </h3>
                <p className="text-orange-700 font-semibold">
                  {shipment === "استفسار عام" ? "..." : `${shipment}`}
                </p>
              </div>
              <div>
                <h3 className="text-xs min-[540px]:text-gray-600">المسار</h3>
                <p className="font-semibold">{Trip}</p>
              </div>
            </div>
          </section>
          <div className="flex justify-center">
            {Messages.map((item, index) => {
              if (item.sender === "system") {
                return (
                  <div
                    key={index}
                    className="bg-blue-100 w-fit py-0.5 px-3 rounded-full"
                  >
                    <span className="text-sm font-semibold">
                      مرحبا {userName}, تم توجيه طلبك للقسم المختص, سارة تراجع
                      الآن تفاصيل الشحنة المختارة.
                    </span>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
          <section className="mt-3 overflow-y-auto">
            {Messages.map((item, index) => (
              <div key={index} className={`${item.sender === "support" ? "justify-start" : "justify-end"} flex gap-3`}>
                <img
                  src="/assets/image/Manegar2.png"
                  className={`${item.sender === "support" ? "block" : "hidden"} w-9 h-9 select-none mt-3 object-cover rounded-full`}
                  alt=""
                />
                <div
                  className={`${item.sender === "system" ? "hidden" : ""}`}
                >
                  <div
                    className={`${item.sender === "support" ? "rounded-tr-none bg-blue-100" : "rounded-tl-none bg-orange-700"} rounded-xl w-fit my-3 px-4 py-3 `}
                  >
                    <p
                      className={`${item.sender !== "support" ? "text-white" : ""} max-w-lg font-semibold`}
                    >
                      {item.text}
                    </p>
                    <span
                      className={`${item.sender === "support" ? "" : "text-white"} text-xs`}
                    >
                      AM {item.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {isTypeing && <TypingIndicator />}
            <div ref={scrollRef} />
          </section>
        </div>
      </main>
      <section className="bg-white py-4.5 border-0 rounded-b-xl w-full">
        <div className="w-[95%] m-auto">
          <div className="flex gap-3">
            <div className="w-fit px-4.5 rounded-full py-2.5 bg-red-300 flex items-center gap-1.5">
              <Calendar size={14} className="text-orange-700" />
              <span className="text-sm font-bold text-orange-700">
                طلب إستعجال
              </span>
            </div>
            <div className="w-fit px-4.5 rounded-full py-2.5 bg-blue-100 flex items-center gap-1.5">
              <Zap size={14} className="text-slate-700" />
              <span className="text-sm font-bold text-slate-700">
                تعديل موعد الإستلام
              </span>
            </div>
          </div>
          <div className="relative pt-3">
            <div className="absolute bottom-2 right-3 hover:bg-gray-300 transition-colors duration-200 cursor-pointer w-9 h-9 rounded-full flex items-center justify-center">
              <Link size={20} />
            </div>
            <form onSubmit={(e) => e.preventDefault()}>

              <input
                type="text"
                value={InputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="bg-blue-50 w-full pr-15 focus:outline-none rounded-full py-3 placeholder:text-gray-60"
                placeholder="اكتب رسالتك هنا..."
                maxLength={100}
              />
              <button className="bg-orange-700 cursor-pointer hover:bg-orange-800 transition-colors duration-200 absolute bottom-1.5 left-2 w-9 h-9 rounded-full flex items-center justify-center" onClick={handelaAdNewMessage}>
                <SendHorizonal size={20} className="text-white rotate-180" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
export default page;
