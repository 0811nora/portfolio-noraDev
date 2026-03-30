import SectionTitle from "../components/SectionTitle";
import portfolioData from "../../portfolioData.json";
import ScrollReveal from "../components/ScrollReveal";

const Skill = () => {
  const { skills } = portfolioData;
  console.log(skills);
  return (
    <>
      <section id="skills" className="mx-auto scroll-mt-20 overflow-x-hidden px-3 py-8 md:px-6 md:py-24">
        <ScrollReveal direction="zoom" delay={0.3}>
          <SectionTitle text={"核心技能"} />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <div className="mx-auto grid grid-cols-1 gap-3 lg:w-7/8 lg:grid-cols-[30%_70%] lg:gap-6">
            {skills.map((data) => (
              <>
                <div className="flex items-center md:mb-0 lg:block">
                  <h5
                    className={`text-xl font-bold text-primary md:text-2xl ${data.title === "持續學習中" ? "text-secondary" : ""}`}>
                    # {data.title}
                  </h5>
                  <span
                    className={`ml-3 text-xs text-primary md:ml-5 md:text-sm ${data.category === "Learning Path" ? "text-secondary" : ""}`}>
                    {data.category}
                  </span>
                </div>
                <div className="mb-8 flex flex-wrap items-center gap-6 lg:mb-4">
                  {data.items.map((i) => (
                    <span className="rounded-lg border-3 px-5 py-2 text-base font-medium tracking-wider md:px-6 lg:text-lg">
                      {i}
                    </span>
                  ))}
                </div>
              </>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </>
  );
};

export default Skill;
