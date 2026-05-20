import { useData } from "@/contexts/UserContext";
import { useEffect, useRef } from "react";

const BasicInformition = () => {
  const {
    informition,
    showAction,
    editName,
    seteditName,
    editPhone,
    seteditPhone,
  } = useData();

  const email = "ahmed@madar.com";
  const InputFocus = useRef(null)

  useEffect(() => {
    if (showAction && InputFocus.current) {
      InputFocus.current.focus();
    }
  }, [showAction])


  return (
    <section className="bg-white mt-5 px-5 py-5.5 rounded-3xl">
      <div className="border-r-3 border-orange-800 pr-2">
        <h3 className="text-lg font-bold">المعلومات الأساسية</h3>
      </div>
      <div className="grid grid-cols-2 max-[680px]:grid-cols-1 gap-4 pt-4">
        <div className="flex flex-col space-y-1">
          <label htmlFor="userName" className="text-[15px]">
            الإسم الكامل
          </label>
          <input
            type="text"
            id="userName"
            value={(showAction ? editName : informition.userName) || ""}
            onChange={(e) => seteditName(e.target.value)}
            readOnly={!showAction}
            maxLength={12}
            ref={InputFocus}
            className={`h-11 w-full rounded-xl border pl-10 pr-4 text-sm transition-all duration-200 outline-none 
                  ${showAction
                ? "border-orange-500 bg-white dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 shadow-[0_0_0_4px_rgba(139,92,246,0.1)]"
                : "border-slate-200 bg-slate-50 text-slate-500 cursor-not-allowed"
              }`}
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="phoneNumber" className="text-[15px]">
            رقم الهاتف
          </label>
          <input
            type="text"
            id="phoneNumber"
            value={(showAction ? editPhone : informition.phoneNumber) || ""}
            onChange={(e) => seteditPhone(e.target.value)}
            readOnly={!showAction}
            maxLength={10}
            className={`h-11 w-full rounded-xl border pl-10 pr-4 text-sm transition-all duration-200 outline-none 
                  ${showAction
                ? "border-orange-500 bg-white dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 shadow-[0_0_0_4px_rgba(139,92,246,0.1)]"
                : "border-slate-200 bg-slate-50 text-slate-500 cursor-not-allowed"
              }`}
          />
        </div>
        <div className="flex flex-col space-y-1 col-span-full">
          <label htmlFor="mail" className="text-[15px]">
            البريد الإلكتروني
          </label>
          <input
            type="email"
            id="mail"
            value={email}
            readOnly
            className="h-11 w-full rounded-xl border pl-10 pr-4 text-sm transition-all duration-200 outline-none border-slate-200 bg-slate-50 text-slate-500 cursor-not-allowed"
          />
        </div>
      </div>
    </section>
  );
};
export default BasicInformition;
