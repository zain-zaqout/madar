"use client"
import { usePathname } from "next/navigation"

const FooterBottom = () => {
  const date = new Date().getFullYear()
  const path = usePathname()
  if (path === "/support/chat") return null
  return (
      <footer className="border-t border-gray-100 bg-white h-13 flex items-center justify-center">
          <p className="text-slate-400 text-[12px]">مدار للخدمات اللوجستية جميع الحقوق محفوظة | {date} ©</p>
    </footer>
  )
}
export default FooterBottom