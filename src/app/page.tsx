"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext"; 
import Comments from "@/components/Comments"
import CompanyStats from "@/components/CompanyStats"
import Hero from "@/components/Hero"
import Serevic from "@/components/Serevic"
import WhyUs from "@/components/WhyUs"

const Page = () => {
  const { isLogin } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLogin === "true") {
      router.replace("/dashboard");
    }
  }, [isLogin, router]);

  if (isLogin === "true") {
    return null;
  }

  return (
    <>
          <Hero />

          <Serevic />

          <WhyUs />

          <CompanyStats />

          <Comments />
    </>
  )
}

export default Page;