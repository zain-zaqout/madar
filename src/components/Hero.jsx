import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <div id="hero" className="relative h-[87vh] w-full rtl overflow-hidden opacity-87">
        <div
          className="absolute inset-0 z-0 h-full w-full bg-cover bg-center bg-no-repeat transition-opacity duration-500"
          style={{
            backgroundImage:
              "url('/assets/image/Hero.png')",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
          }}
        />

        <div className="absolute inset-0 flex flex-col items-end max-[930px]:items-center justify-center ">
          <h1 className="text-6xl font-black max-[930px]:text-5xl max-[930px]:text-center max-[530px]:text-4xl min-[930px]:mx-45">
            مدار.. حَيثُ يَنتهي
            <br /> الأفق،
            <br />
            <span className="text-orange-500">ونَبدأُ نَحنُ.</span>
          </h1>
          <p
            className="min-[930px]:mx-19.5 text-slate-950 font-black antialiased leading-relaxed mt-5 max-w-xl text-xl text-right lg:px-0 max-[930px]:text-center max-[930px]:px-10
            max-[628px]:text-lg max-[628px]:px-6 max-[440px]:text-base max-[440px]:px-4"
            style={{ textShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)" }}
          >
            نقدم حلولاً لوجستية متكاملة تربط القارات وتدعم نمو أعمالك من خلال
            الدقة، السرعة، والذكاء التشغيلي المتفوق.
          </p>
          <Link
            className="bg-orange-500 min-[930px]:mx-128 max-[930px]:items-center hover:bg-orange-600 flex justify-center transition-all duration-150 cursor-pointer py-2 w-35 text-slate-50 font-semibold rounded-full text-lg mt-5 active:scale-95"
            href="/login"
          >
            ابدا الان
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
