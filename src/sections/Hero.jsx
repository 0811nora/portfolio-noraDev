import { BtnStyle } from "../components/Button";

const Hero = () => {
  return (
    <>
      <section className="mx-auto flex h-130 flex-col justify-center px-3 md:h-140 lg:w-4/5 lg:px-0">
        <h1 className="mb-7 text-4xl font-black text-primary md:text-[56px]">Hi ! 我是 Nora</h1>
        <p className="mb-20 text-xl/10 font-medium md:text-2xl md:font-black">
          <span className="mr-3 md:mr-6">React 前端開發 </span>|<span className="mx-3 md:mx-6">4年軟體開發PM經驗</span>|
          <span className="ml-3 md:ml-6">具產品思維的開發者</span>
        </p>
        <div className="flex gap-8">
          <BtnStyle
            text={"作品集"}
            size={"text-center w-full py-3 text-lg  px-10 md:py-3 md:w-auto font-black"}
            isFull={true}
          />
          <BtnStyle text={"聯絡我"} size={"w-full py-3 text-lg  px-10 md:py-3 md:w-auto font-black"} isFull={false} />
        </div>
      </section>
    </>
  );
};

export default Hero;
