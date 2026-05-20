import localFont from "next/font/local";
import "./globals.css";
import { AuthContext } from "@/contexts/AuthContext";
import NavBar from "@/components/NavBar";
import { MenuContext } from "@/contexts/MenuContext";
import Footer from "@/components/Footer";
import AuthWrapper from "@/components/AuthWrapper";
import FooterBottom from "@/components/FooterBottom";
import { ChangeData } from "@/contexts/UserContext";
import { CostCalculationContext } from "@/contexts/AddShipmentContext";
import { ShipmentsContext } from "@/contexts/ShipmentsContext";
import { SupportChatContext } from "@/contexts/SupportChatContext";
import { Toaster } from "sonner";

const cairo = localFont({
  src: "../../public/assets/fonts/cairo/Cairo-VariableFont_slnt,wght.ttf",
  variable: "--font-cairo",
  weight: "100 900",
  display: "swap",
});

const geist = localFont({
  src: "../../public/assets/fonts/geist/Geist-VariableFont_wght.ttf",
  variable: "--font-geist",
  weight: "100 900",
  display: "swap",
});

export const metadata = {
  title: "Madar | مدار",
  description: "مدار هي منصة رقمية متكاملة لإدارة عمليات الشحن الدولي والمحلي، التخليص الجمركي، وتقديم الدعم الفني الذكي المباشر بحلول لوجستية مرنة وسريعة.",
};

export default function RootLayout({
  children,
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${geist.variable} ${cairo.variable} h-full antialiased selection:bg-orange-500/90 selection:text-white`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <AuthContext>
          <AuthWrapper>

            <MenuContext>
              <ChangeData>
                <ShipmentsContext>
                  <CostCalculationContext>
                    <SupportChatContext>
                      <div className="flex flex-col min-h-screen">
                        <NavBar />
                        <div className="flex flex-1">
                          <main className="flex-1 w-full">
                            <Toaster
                              expand={false}
                              richColors
                              closeButton={true}
                              duration={4000}
                              dir="rtl"
                              position="top-center"
                            />
                            {children}
                          </main>
                        </div>
                      </div>
                      <Footer />
                      <FooterBottom />
                    </SupportChatContext>
                  </CostCalculationContext>
                </ShipmentsContext>
              </ChangeData>
            </MenuContext>
          </AuthWrapper>
        </AuthContext>
      </body>
    </html>
  );
}
