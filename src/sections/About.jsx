import portfoiloData from "../../profileData.json";
import AboutCard from "../components/AboutCard";

const About = () => {
  return (
    <>
      <section className="mx-auto w-4/5 py-20">
        <h2 className="mb-20 text-center text-3xl font-bold text-secondary">
          <span className="relative pb-3 transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:h-1.5 before:w-full before:origin-center before:scale-x-120 before:bg-text-main before:transition-transform before:duration-300 hover:before:scale-x-175">
            關於我
          </span>
        </h2>
        <div className="mb-24">
          {portfoiloData.aboutMe.content.map((content) => (
            <p className="mb-6 text-justify indent-12 text-lg leading-9">{content}</p>
          ))}
        </div>

        <div className="mx-auto w-5/6">
          <h3 className="mb-12 text-center text-2xl font-bold text-primary">能為團隊帶來的價值</h3>

          <div className="mx-auto grid grid-cols-2 gap-9">
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
