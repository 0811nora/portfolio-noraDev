import portfoiloData from "../../portfolioData.json";
import AboutCard from "../components/AboutCard";
import SectionTitle from "../components/SectionTitle";

const About = () => {
  return (
    <>
      <section className="mx-auto px-3 py-10 md:w-4/5 md:px-0 md:py-24">
        <SectionTitle text={"關於我"} />
        <div className="mb-24">
          {portfoiloData.aboutMe.content.map((content) => (
            <p className="mb-6 text-justify indent-12 text-lg leading-9">{content}</p>
          ))}
        </div>

        <div className="mx-auto md:w-6/7">
          <h3 className="mb-12 text-center text-2xl font-bold text-primary">能為團隊帶來的價值</h3>

          <div className="mx-auto grid grid-cols-1 gap-9 lg:grid-cols-2">
            {portfoiloData.coreValues.map((data) => (
              <AboutCard data={data} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
