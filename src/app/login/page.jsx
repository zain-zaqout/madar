"use client";
import { useAuth } from "@/contexts/AuthContext";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {
  const { Login, isLogin, Loading } = useAuth();
  const router = useRouter();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    Login();
  };

  return (
    <div className="bg-slate-50 h-screen flex justify-center items-center text-slate-900 px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 border border-slate-100">
        <h2 className="text-center text-3xl font-black text-slate-800">مدار | <span className="text-orange-500">دخول</span></h2>

        <p className="text-center text-slate-500 text-sm mt-2 font-semibold">مرحباً بك في نظام الإمداد الذكي</p>

        <hr className="my-8 border-slate-100" />

        <form className="space-y-5">
          <div>
            <input
              type="email"
              className="w-full p-3.5 rounded-xl border text-left border-slate-200 bg-slate-50 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all font-medium"
              placeholder="البريد الإلكتروني"
              defaultValue="user@gmail.com"
              readOnly
            />
          </div>

          <div>
            <input
              type="password"
              className="w-full p-3.5 rounded-xl text-left border border-slate-200 bg-slate-50 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all font-medium"
              placeholder="كلمة المرور"
              defaultValue="********"
              readOnly
            />
          </div>

          <div className="flex justify-between items-center text-[13px] font-bold">
            <label className="flex items-center gap-2 cursor-pointer select-none text-slate-600">
              <input type="checkbox" className="accent-orange-500 w-4 h-4" />
              <span>تذكرني</span>
            </label>
            <Link href="#" className="text-slate-400 hover:text-orange-500 transition-colors">
              نسيت كلمة المرور؟
            </Link>
          </div>

          <button
            onClick={handleFormSubmit}
            disabled={Loading}
            className="w-full flex justify-center p-4 mt-2 rounded-xl bg-orange-500 text-white font-black text-lg hover:bg-orange-600 active:scale-[0.98] transition-all shadow-lg shadow-orange-100 cursor-pointer"
          >
            {Loading ? (
              <><Loader2 className="animate-spin" size={30} /></>
            ) : (
              <> تسجيل الدخول</>
            )}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-[14px] font-bold text-slate-400">
            ليس لديك حساب؟{" "}
            <Link href="#" className="text-orange-500 hover:underline">
              أنشئ حساباً جديداً
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;