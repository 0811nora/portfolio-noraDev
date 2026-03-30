import SectionTitle from "../components/SectionTitle";
import portfoiloData from "../../portfolioData.json";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";

const Project = () => {
  const { projects } = portfoiloData;
  const [isOpen, setIsOpen] = useState(false);
  const [projectDetail, setProjectDetail] = useState(null);

  const currentData = projects.filter((item) => item.category === "current");
  const pastData = projects.filter((item) => item.category === "past");

  const handleDetail = (id) => {
    setIsOpen(true);
    const activeData = projects.find((item) => item.id === id);
    setProjectDetail(activeData);
  };

  return (
    <>
      <section id="projects" className="mx-auto scroll-mt-20 overflow-x-hidden px-3 py-10 md:px-6 md:py-24">
        <ScrollReveal direction="zoom" delay={0.3}>
          <SectionTitle text={"作品集"} />
        </ScrollReveal>
        <ScrollReveal direction="left" delay={0.3}>
          <div className="mb-30">
            <h3 className="mb-10 text-2xl font-bold text-primary"># 近期作品</h3>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {currentData.map((item) => (
                <ProjectCard data={item} handleIsOpen={() => handleDetail(item.id)} key={item.id} />
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={0.3}>
          <div className="">
            <h3 className="mb-10 text-2xl font-bold text-primary"># 早期作品</h3>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {pastData.map((item) => (
                <ProjectCard data={item} handleIsOpen={() => handleDetail(item.id)} key={item.id} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>
      <AnimatePresence>
        {isOpen && <ProjectModal data={projectDetail} onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

export default Project;
