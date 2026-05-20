"use client"
import { FullPageLoader } from '@/components/FullPageLoader';
import { useCalc } from '@/contexts/AddShipmentContext';
import { CheckCircle, Copy, Phone, Clock, CreditCard, Plane, Share2, Plus, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const ShipmentSuccessPage = () => {

  const { ship, expetTime, Price, Bill, Total, Taks, isAdditionSuccessful, setIsAdditionSuccessful } = useCalc()
  const router = useRouter()
  const [isVerifying, setIsVerifying] = useState(true)

  useEffect(() => {
    if (!isAdditionSuccessful) {
      router.replace("/new-shipment")
    } else {
      setIsVerifying(false)
    }

    return () => {
      setIsVerifying(true)
      setIsAdditionSuccessful(false)
    }

  }, [router, isAdditionSuccessful]);

  if (isVerifying) return <FullPageLoader />

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 dir-rtl text-right">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-600 rounded-full mb-6 shadow-lg shadow-orange-200">
          <CheckCircle className="text-white w-10 h-10" />
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-2">تم إنشاء شحنتك بنجاح!</h1>
        <p className="text-slate-500 text-lg">يسعدنا البدء في رحلة توصيل أغراضك.</p>

        <div className="mt-8 inline-flex items-center gap-4 bg-white border border-slate-100 p-4 rounded-2xl shadow-sm">
          <button className="p-2 hover:bg-slate-50 rounded-lg text-orange-600 transition-colors">
            <Copy size={20} />
          </button>
          <div className="text-right">
            <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider text-left">Tracking ID</span>
            <span className="text-xl font-black text-orange-600 tracking-wider">{ship.id}</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-[2.5rem] border border-slate-50 shadow-sm flex flex-col items-center justify-between">
          <div className="flex items-center gap-4 w-full">
            <div className="relative">
              <img src="/driver-avatar.png" alt="Driver" className="w-16 h-16 rounded-2xl object-cover" />
              <div className="absolute -bottom-1 -right-1 bg-yellow-400 text-[10px] px-1 rounded font-bold flex items-center">
                4.9/5 ★
              </div>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold">المندوب المكلف</p>
              <h3 className="text-lg font-bold text-slate-800">{ship.nameOfSend}</h3>
            </div>
          </div>
          <button className="w-full mt-6 py-3 px-4 bg-orange-50 text-orange-600 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-orange-100 transition-all">
            <Phone size={18} />
            اتصال بالمندوب
          </button>
        </div>

        <div className="md:col-span-2 bg-white p-6 rounded-[2.5rem] border border-slate-50 shadow-sm">
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></div>
              <p className="text-orange-600 font-bold text-sm">بانتظار الاستلام من المندوب</p>
            </div>
            <h3 className="text-xl font-black text-slate-800 underline decoration-orange-300 underline-offset-8">تتبع حالة الشحنة</h3>
          </div>

          <div className="relative flex items-center justify-between px-4 mt-12">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0"></div>
            <div className="absolute top-1/2 right-0 w-1/2 h-1 bg-orange-600 -translate-y-1/2 z-0"></div>


            <div className="z-10 bg-white p-2 flex flex-col items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center">
                <CheckCircle size={14} className="text-white" />
              </div>
              <span className="text-[10px] font-bold text-slate-800">تم التأكيد</span>
            </div>

            <div className="z-10 bg-white p-2 flex flex-col items-center gap-2">
              <div className="w-8 h-8 rounded-full border-4 border-white ring-2 ring-orange-600 flex items-center justify-center bg-orange-600">
                <Clock size={14} className="text-white" />
              </div>
              <span className="text-[10px] font-bold text-orange-600">جاري التجهيز</span>
            </div>
            <div className="z-10 bg-white p-2 flex flex-col items-center gap-2">
              <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center bg-slate-50">
                <Plane size={14} className="text-slate-400" />
              </div>
              <span className="text-[10px] font-bold text-slate-400">في الطريق</span>
            </div>

          </div>
        </div>

        <div className="bg-slate-100/50 p-6 rounded-[2.5rem] border border-white flex flex-col items-center justify-center gap-4 text-center">
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-orange-600">
            <Clock size={24} />
          </div>
          <div>
            <p className="text-[10px] text-slate-400 font-bold uppercase">الموعد المتوقع</p>
            <h3 className="text-xl font-black text-slate-800">{expetTime}</h3>
          </div>
        </div>

        <div className="bg-orange-50/50 p-8 rounded-[2.5rem] border border-orange-100">
          <div className="flex items-center justify-end gap-2 mb-6">
            <h3 className="text-lg font-black text-slate-800">تفاصيل الدفع</h3>
            <CreditCard className="text-orange-600" size={20} />
          </div>
          <div className="space-y-3 text-sm font-bold">
            <div className="flex justify-between items-center">
              <span className="text-slate-400">سعر الشحن الأساسي</span>
              <span className="text-slate-900">${Price}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">رسوم الخدمة السريعة</span>
              <span className="text-slate-900">${Bill}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">القيمة المضافة (15%)</span>
              <span className="text-slate-900">${Taks}</span>
            </div>
            <div className="h-[1px] bg-orange-200 my-4"></div>
            <div className="flex justify-between items-center text-xl font-black">
              <span className="text-orange-600">{Total}</span>
              <span className="text-slate-800">الإجمالي</span>
            </div>
          </div>
        </div>

        <div className="bg-blue-50/30 p-8 rounded-[2.5rem] border border-blue-50 flex flex-col justify-between items-end relative overflow-hidden">
          <Plane className="absolute -left-4 -top-4 w-32 h-32 text-blue-100/50 -rotate-12" />
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-blue-600">
            <Plane size={24} />
          </div>
          <div className="text-right z-10">
            <p className="text-[10px] text-slate-400 font-bold uppercase">الوجهة</p>
            <h3 className="text-xl font-black text-slate-800">من {ship.cityOfSend} إلى {ship.cityOfGet}</h3>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-12 flex flex-wrap items-center justify-center gap-4">
        <button className="flex-1 cursor-pointer min-w-[200px] py-4 bg-green-50 text-green-600 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-green-100 transition-all border border-green-100">
          <Share2 size={20} />
          مشاركة عبر واتساب
        </button>
        <button onClick={() => {
          window.location.href = "/new-shipment"
        }}
          className="flex-1 cursor-pointer min-w-[200px] py-4 bg-white text-orange-600 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-orange-50 transition-all border border-orange-100">
          <Plus size={20} />
          شحنة جديدة
        </button>
        <button onClick={() => router.replace("/dashboard")} className="flex-1 cursor-pointer min-w-[200px] py-4 bg-orange-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-orange-700 shadow-lg shadow-orange-200 transition-all">
          <Search size={20} />
          تتبع الشحنة
        </button>
      </div>
    </div>
  );
};

export default ShipmentSuccessPage;