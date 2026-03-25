import { BtnFull, BtnOutline } from "../components/Button";

const Hero = () => {
  return (
    <>
      <section className="mx-auto flex h-140 w-4/5 flex-col justify-center">
        <h1 className="mb-7 text-[56px] font-black text-primary">Hi ! 我是 Nora</h1>
        <p className="mb-20 text-2xl font-black">
          <span className="mr-6">React 前端開發 </span>|<span className="mx-6">4年軟體開發PM經驗</span>|
          <span className="ml-6">具產品思維的開發者</span>
        </p>
        <div className="flex gap-8">
          <BtnFull text={"作品集"} />
          <BtnOutline text={"聯絡我"} />
        </div>
      </section>
    </>
  );
};

export default Hero;
