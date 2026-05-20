import { useCalc } from "@/contexts/AddShipmentContext"
import { FileSignature } from "lucide-react"

const ContentAndValue = () => {
    const {dispatch, ship} = useCalc()
  return (
    <section className="bg-white shadow-md rounded-2xl px-6 py-8 col-span-8 max-[1100px]:col-span-full">
            <div className="flex items-center gap-2">
              <FileSignature className="text-orange-700" size={24} />
              <h4 className="font-bold text-lg">المحتوى والقيمة</h4>
            </div>
            <div className="grid grid-cols-5 gap-4 max-[570px]:grid-cols-1 max-[570px]:gap-0 max-[570px]:space-y-1">
              <div className="flex flex-col col-span-3 space-y-1 pt-3">
                <label htmlFor="type" className="font-semibold">
                  وصف المحتوى
                </label>
                <input
                  maxLength={50}
                  minLength={5}
                  value={ship.content}
                  onChange={(e) =>
                    dispatch({ type: "CONTENT", val: e.target.value })
                  }
                  type="text"
                  id="type"
                  className="bg-blue-50 text-[15px] w-full px-4 py-2 rounded-full focus:outline-none"
                  placeholder="مثال: ملابس قطنية, أجهزة إلكترونية..."
                />
              </div>
              <div className="flex flex-col col-span-2 space-y-1 pt-3">
                <label htmlFor="price" className="font-semibold">
                  القيمة المعلنة
                </label>
                <input
                  value={ship.post}
                  onChange={(e) =>
                    dispatch({ type: "POST", val: e.target.value })
                  }
                  type="number"
                  min={1}
                  id="price"
                  className="bg-blue-50 text-[15px] w-full px-4 py-2 rounded-full focus:outline-none"
                  placeholder="قيمة البضاعة..."
                />
              </div>
              <div className="flex flex-col col-span-2 space-y-1 pt-3">
                <label htmlFor="price" className="font-semibold">
                  رقم الفاتورة (اختياري)
                </label>
                <input
                  maxLength={10}
                  value={ship.billNumber}
                  onChange={(e) =>
                    dispatch({ type: "BILL_NUMBER", val: e.target.value })
                  }
                  type="text"
                  id="price"
                  className="bg-blue-50 text-[15px] w-full px-4 py-2 rounded-full focus:outline-none"
                  placeholder="INV-2026-001"
                />
              </div>
            </div>
          </section>
  )
}
export default ContentAndValue