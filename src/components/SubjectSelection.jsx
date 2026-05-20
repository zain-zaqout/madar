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

const SubjectSelection = () => {
    const { supportFilter } = useShip();
    const { SubjectChat, setSubjectChat, shipment, setshipment, startChat, isLoading } = useChat();

    return (
        <>
            <header className="h-15 w-full z-50 flex border-b border-gray-200 shadow-md bg-white">
                <div className="w-[90%] max-w-350 m-auto flex justify-between items-center">
                    <span className="text-orange-500 text-xl font-black">
                        مدار | Madar
                    </span>
                    <CircleHelp size={18} className="hover:text-orange-600 duration-300 cursor-pointer shrink-0" />
                </div>
            </header>

            <main className="flex items-center justify-center min-h-[calc(100vh-60px)] py-6 px-4 bg-slate-50/50">

                <div className="bg-white w-full max-w-sm rounded-3xl px-5 sm:px-6 py-6 shadow-sm border border-slate-100 text-right">         
                     <div>
                    <div className="flex justify-center">
                        <div className="w-14 h-14 rounded-full flex items-center justify-center bg-orange-200/55 shrink-0">
                            <MessageSquare size={24} className="text-orange-700" />
                        </div>
                    </div>

                    <h2 className="font-bold text-2xl sm:text-[26px] pt-3 text-center sm:leading-13">
                        كيف يمكننا مساعدتك اليوم؟
                    </h2>

                    <p className="text-gray-600 font-semibold text-sm sm:text-[15px] text-center mt-2 leading-relaxed">
                        فريق الدعم الفني في مدار متاح لمساعدتك في أي استفسار يخص شحناتك
                        أو التخليص الجمركي.
                    </p>
                </div>

                    <div className="flex flex-col space-y-5 pt-5">
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
                                className="bg-blue-50/70 px-3 rounded-[14px] py-2.5 text-sm font-semibold text-slate-800 outline-none border border-transparent focus:border-orange-500/30 transition-colors"
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
                                className="bg-blue-50/70 px-3 rounded-xl py-2.5 text-sm font-semibold text-slate-800 outline-none border border-transparent focus:border-orange-500/30 transition-colors"
                            >
                                <option>استفسار عام</option>
                                {supportFilter?.map((item, index) => (
                                    <option key={index} value={item.id}>
                                        {item.id} - {item.status}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="border mt-5 border-red-100 flex items-start gap-3 bg-red-50 rounded-2xl p-3.5">
                        <CircleAlert size={22} className="text-orange-800 mt-0.5 shrink-0" />
                        <p className="text-xs text-gray-600 font-semibold leading-relaxed">
                            سيتم ربطك بأقرب وكيل متاح متخصص في الموضوع المختار لضمان سرعة
                            الحل، وقت الإنتظار المتوقع:{" "}
                            <span className="font-bold text-slate-700 whitespace-nowrap">أقل من دقيقتين</span>
                        </p>
                    </div>

                    =          <button
                        disabled={isLoading}
                        className="text-white mt-5 font-bold flex justify-center items-center gap-2 w-full rounded-xl cursor-pointer hover:bg-orange-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors duration-200 py-3 bg-orange-600 shadow-md shadow-orange-200"
                        onClick={startChat}
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="animate-spin" size={18} />
                                جاري التحويل...
                            </>
                        ) : (
                            <>
                                بدء المحادثة
                                <ArrowLeft size={18} className="rtl:rotate-180" />
                            </>
                        )}
                    </button>

                    <div className="border-t border-slate-150 flex flex-wrap items-center justify-center mt-5 gap-y-2 gap-x-4 pt-4 text-center">
                        <div className="flex items-center gap-1.5">
                            <span className="relative flex h-2 w-2 shrink-0">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-gray-500 text-xs font-semibold whitespace-nowrap">
                                الدعم متاح الآن
                            </span>
                        </div>

                        <div className="flex items-center gap-1.5 text-gray-500">
                            <MessageSquareLock size={14} className="shrink-0" />
                            <span className="text-gray-500 text-xs font-semibold whitespace-nowrap">
                                محادثة مشفرة وآمنة
                            </span>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default SubjectSelection;