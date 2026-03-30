import portfoiloData from "../../portfolioData.json";
import AboutCard from "../components/AboutCard";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";
import { useState } from "react";

const About = () => {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <>
      <section id="about" className="mx-auto scroll-mt-20 overflow-x-hidden px-3 py-10 md:w-4/5 md:px-0 md:py-24">
        <ScrollReveal direction="zoom" delay={0.3}>
          <SectionTitle text={"關於我"} />
          <div className="mb-30">
            <div
              className={`${isExpand ? "max-h-500" : "max-h-80"} overflow-hidden transition-all duration-800 lg:max-h-none lg:overflow-visible`}>
              {portfoiloData.aboutMe.content.map((content) => (
                <p className="mb-6 text-justify indent-12 text-lg leading-9">{content}</p>
              ))}
            </div>

            <div className="w-full p-5 text-center lg:hidden">
              <button
                className="flex w-full cursor-pointer justify-center gap-2 p-3 font-bold text-primary transition hover:text-secondary"
                onClick={() => setIsExpand(!isExpand)}>
                {isExpand ? "收合" : "閱讀更多"}
                <svg
                  className={`mt-1 h-5 w-5 transition-transform duration-500 ${isExpand ? "rotate-180" : ""}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m5 15 7-7 7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <div className="mx-auto md:w-6/7">
            <h3 className="mb-12 text-center text-2xl font-bold text-primary">能為團隊帶來的價值</h3>

            <div className="mx-auto grid grid-cols-1 gap-9 lg:grid-cols-2">
              {portfoiloData.coreValues.map((data) => (
                <AboutCard data={data} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
};

export default About;
