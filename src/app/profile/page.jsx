"use client";
import BasicInformition from "@/components/BasicInformition";
import { useAuth } from "@/contexts/AuthContext";
import { useData } from "@/contexts/UserContext";
import { Loader2, Monitor, RotateCcwKeyIcon, Smartphone } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const page = () => {
  const [changePassword, setchangePassword] = useState(false);
  const [stay, setstay] = useState(0);
  const [isLoading, setisLoading] = useState(false);
  const [isLoadingLogOut, setisLoadingLogOut] = useState(false);
  const {
    showAction,
    setShowAction,
    cancelChange,
    seteditName,
    seteditPhone,
    changeData,
    informition,
  } = useData();
  const { Logout } = useAuth();

  useEffect(() => {
    const local = localStorage.getItem("stay");
    if (local) {
      setstay(Number(local));
    }
  }, []);

  const userName = informition.userName;
  return (
    <div className="w-[70%] max-[640px]:w-[95%] m-auto mt-8">
      <section className="bg-white flex max-[750px]:flex-col relative items-center justify-between px-3.5 rounded-3xl py-4.5 max-[750px]:py-6">
        <div className="flex max-[750px]:flex-col max-[750px]:gap-1 items-center gap-4">
          <div>
            <img
              src="/assets/image/Manegar.png"
              alt=""
              className="object-cover w-19.5 z-100 rounded-full"
            />
          </div>
          <div className="max-[750px]:text-center">
            <h2 className="text-[22px] leading-7 font-bold">{userName}</h2>
            <p className="text-sm text-gray-600">ahmed@madar.com</p>
          </div>
        </div>
        {!showAction ? (
          <button
            className="bg-blue-50 text-sm text-gray-700 cursor-pointer hover:bg-blue-100 duration-300 rounded-full mt-3 w-fit h-8 px-3 flex items-center"
            onClick={() => {
              seteditName(informition.userName);
              seteditPhone(informition.phoneNumber);
              setShowAction(true);
            }}
          >
            تعديل الملف الشخصي
          </button>
        ) : (
          <div className="flex items-center gap-3 pt-3">
            <button
              className="
      h-11 px-7 rounded-xl font-bold text-sm text-white
      bg-linear-to-r from-orange-500 to-orange-600
      hover:from-orange-600 hover:to-orange-700
      shadow-[0_4px_15px_-3px_rgba(249,115,22,0.4)]
      hover:shadow-[0_8px_20px_-4px_rgba(249,115,22,0.5)]
      hover:-translate-y-0.5 active:scale-95F
      transition-all duration-300 cursor-pointer
    "
              onClick={changeData}
            >
              حفظ التغييرات
            </button>

            <button
              className="
      h-11 px-7 rounded-xl font-bold text-sm
      bg-white border-2 border-slate-200 text-slate-600
      hover:bg-slate-50 hover:border-slate-300 hover:text-slate-800
      active:scale-95 transition-all duration-300 cursor-pointer
    "
              onClick={cancelChange}
            >
              إلغاء
            </button>
          </div>
        )}
      </section>
      <BasicInformition />
      <section className="bg-white mt-5 px-5 py-5.5 rounded-3xl">
        <div className="border-r-3 border-orange-800 pr-2">
          <h3 className="text-lg font-bold">الأمان وكلمة المرور</h3>
        </div>
        {changePassword ? (
          <div className="grid grid-cols-3 max-[680px]:grid-cols-1 gap-3 pt-4">
            <div className="flex flex-col space-y-1">
              <label htmlFor="currentPassword" className="text-[15px]">
                كلمة المرور الحالية
              </label>
              <input
                type="text"
                id="currentPassword"
                className="bg-blue-50 rounded-2xl text-sm text-left px-4 py-3 focus:outline-none"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="newPassword" className="text-[15px]">
                كلمة المرور الجديدة
              </label>
              <input
                type="text"
                id="newPassword"
                className="bg-blue-50 rounded-2xl text-sm text-left px-4 py-3 focus:outline-none"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="confirm" className="text-[15px]">
                تأكيد كلمة المرور الجديدة
              </label>
              <input
                type="text"
                id="confirm"
                className="bg-blue-50 rounded-2xl text-sm text-left px-4 py-3 focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-3 pt-3">
              <button
                className="
      h-11 px-7 rounded-xl font-bold text-sm text-white
      bg-linear-to-r from-orange-500 to-orange-600
      hover:from-orange-600 hover:to-orange-700
      shadow-[0_4px_15px_-3px_rgba(249,115,22,0.4)]
      hover:shadow-[0_8px_20px_-4px_rgba(249,115,22,0.5)]
      hover:-translate-y-0.5 active:scale-95
      transition-all duration-300 cursor-pointer
    "
                onClick={() => {
                  setTimeout(() => {
                    toast.success("تم تغيير كلمة المرور بنجاح!");
                  }, 1500);
                  setchangePassword(false);
                }}
              >
                حفظ التغييرات
              </button>

              <button
                className="
      h-11 px-7 rounded-xl font-bold text-sm
      bg-white border-2 border-slate-200 text-slate-600
      hover:bg-slate-50 hover:border-slate-300 hover:text-slate-800
      active:scale-95 transition-all duration-300 cursor-pointer
    "
                onClick={() => setchangePassword(false)}
              >
                إلغاء
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-blue-50 mt-6 flex max-[830px]:flex-col max-[830px]:items-start max-[830px]:space-y-2 items-center justify-between px-4 py-5 rounded-2xl">
            <div>
              <h3 className="font-bold">كلمة المرور</h3>
              <p className="text-sm text-gray-500 font-semibold">
                يُنصح بتغيير كلمة المرور بشكل دوري لضمان أمان حسابك.
              </p>
            </div>
            <button
              className="bg-red-800/20 hover:bg-red-800/30 transition-colors duration-150 cursor-pointer w-fit px-4 h-10 rounded-full flex items-center justify-center gap-2"
              onClick={() => setchangePassword(true)}
            >
              <RotateCcwKeyIcon className="text-red-800" size={18} />
              <span className="text-red-800 text-sm font-bold">
                تغيير كلمة المرور
              </span>
            </button>
          </div>
        )}
      </section>
      <section className="bg-white mt-5 px-5 py-5.5 rounded-3xl">
        <div className="border-r-3 border-orange-800 pr-2">
          <h3 className="text-lg font-bold">الأمان والنشاط</h3>
        </div>
        <div className="pt-4 flex flex-col space-y-4">
          <div
            className={`${stay === 1 ? "hidden" : ""} border borde-slate-200 flex items-center justify-between max-[475px]:flex-col max-[475px]:space-y-3 max-[475px]:items-start rounded-2xl px-4 py-4`}
          >
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 relative w-11 h-11 rounded-full flex items-center justify-center">
                <Monitor className="text-orange-800" size={19.5} />
                <div className="absolute bottom-1 left-0 hidden min-[425px]:block">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                </div>
              </div>
              <div>
                <h4 className="font-bold leading-6">Chrome on Windows</h4>
                <p className="text-gray-600 font-semibold text-xs">
                  الرياض, المملكة العربية السعودية *{" "}
                  <span className="text-green-500 font-bold hidden min-[425px]:block">
                    نشط الآن
                  </span>
                  <span className="text-orange-500 font-bold hidden max-[425px]:block">
                    منذ 3 ساعات
                  </span>
                </p>
              </div>
            </div>
            <div className="hidden min-[425px]:block cursor-pointer">
              <div className="bg-red-800/15 w-23 h-7 hover:bg-red-800/30 duration-200 flex justify-center items-center rounded-full">
                <button
                  className="text-red-800 font-bold text-xs cursor-pointer"
                  disabled={isLoadingLogOut}
                  onClick={() => {
                    setisLoadingLogOut(true);
                    setTimeout(() => {
                      Logout();
                      setisLoading(false);
                    }, 2000);
                  }}
                >
                  {isLoadingLogOut ? (
                    <Loader2 size={22} className="animate-spin" />
                  ) : (
                    <>تسجيل الخروج</>
                  )}
                </button>
              </div>
            </div>
            <div className="hidden max-[425px]:block cursor-pointer">
              <div className="bg-red-800/15 w-23 h-7 cursor-pointer hover:bg-red-800/30 duration-200 flex justify-center items-center rounded-full">
                <button
                  className="text-red-800 font-bold text-xs cursor-pointer"
                  disabled={isLoading}
                  onClick={() => {
                    setisLoading(true);
                    setTimeout(() => {
                      setstay(1);
                      setisLoading(false);
                      localStorage.setItem("stay", "1");
                      toast.success("تم إنهاء الجلسة بنجاح!");
                    }, 2000);
                  }}
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={22} className="animate-spin" />
                    </>
                  ) : (
                    <>إنهاء الجلسة</>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div
            className={`${stay === 2 ? "hidden" : ""} border borde-slate-200 flex items-center justify-between max-[475px]:flex-col max-[475px]:space-y-3 max-[475px]:items-start rounded-2xl px-4 py-4`}
          >
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 relative w-11 h-11 rounded-full flex items-center justify-center">
                <Smartphone className="text-orange-800" size={19.5} />
                <div className="absolute bottom-1 left-0 hidden max-[425px]:block">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                </div>
              </div>
              <div>
                <h4 className="font-bold leading-6">iPhone 14 Pro</h4>
                <p className="text-gray-600 font-semibold text-xs">
                  الرياض, المملكة العربية السعودية *{" "}
                  <span className="text-orange-500 font-bold hidden min-[425px]:block">
                    منذ 3 ساعات
                  </span>
                  <span className="text-green-500 font-bold hidden max-[425px]:block">
                    نشط الآن
                  </span>
                </p>
              </div>
            </div>

            <div className="bg-red-800/15 max-[425px]:hidden h-7 cursor-pointer hover:bg-red-800/30 w-23 duration-200 flex justify-center items-center rounded-full">
              <button
                className="text-red-800 font-bold text-xs cursor-pointer"
                disabled={isLoading}
                onClick={() => {
                  setisLoading(true);
                  setTimeout(() => {
                    setstay(2);
                    setisLoading(false);
                    localStorage.setItem("stay", "2");
                    toast.success("تم إنهاء الجلسة بنجاح!");
                  }, 2000);
                }}
              >
                {isLoading ? (
                  <>
                    <Loader2 size={22} className="animate-spin" />
                  </>
                ) : (
                  <>إنهاء الجلسة</>
                )}
              </button>
            </div>
            <div className="max-[425px]:block hidden cursor-pointer">
              <div className="bg-red-800/15 w-25 h-7 hover:bg-red-800/30 duration-200 flex justify-center items-center rounded-full">
                <button
                  className="text-red-800 font-bold text-xs cursor-pointer"
                  disabled={isLoadingLogOut}
                  onClick={() => {
                    setisLoadingLogOut(true);
                    setTimeout(() => {
                      Logout();
                      setisLoading(false);
                    }, 2000);
                  }}
                >
                  {isLoadingLogOut ? (
                    <Loader2 size={22} className="animate-spin" />
                  ) : (
                    <>تسجيل الخروج</>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default page;
