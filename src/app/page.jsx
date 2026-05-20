"use client"
import Comments from "@/components/Comments"
import CompanyStats from "@/components/CompanyStats"
import Hero from "@/components/Hero"
import Serevic from "@/components/Serevic"
import WhyUs from "@/components/WhyUs"

const Page = () => {

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