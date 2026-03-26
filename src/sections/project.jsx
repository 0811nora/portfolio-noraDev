import SectionTitle from "../components/SectionTitle";
import portfoiloData from "../../profileData.json";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { useState } from "react";

const Project = () => {
  const { projects } = portfoiloData;
  const [projectID, setProjectID] = useState("");
  const [isOpenCard, setIsOpenCard] = useState(false);

  console.log("我的專案資料", projects);

  const currentData = projects.filter((item) => item.category === "current");

  const pastData = projects.filter((item) => item.category === "past");

  const activeProject = projects.filter((data) => data.id === projectID);

  const handleProjectCard = (id) => {
    setProjectID(id);

    // const
  };

  return (
    <>
      <section className="mx-auto px-3 py-10 md:px-0 md:py-24">
        <SectionTitle text={"作品集"} />
        <div className="mb-30">
          <h3 className="mb-10 text-2xl font-bold text-primary"># 近期作品</h3>

          <div className="grid grid-cols-3 gap-6">
            {currentData.map((item) => (
              <ProjectCard data={item} />
            ))}
          </div>
        </div>

        <div className="mb-30">
          <h3 className="mb-10 text-2xl font-bold text-primary"># 早期作品</h3>

          <div className="grid grid-cols-3 gap-6">
            {pastData.map((item) => (
              <ProjectCard data={item} onClick={() => handleProjectCard(item.id)} />
            ))}
          </div>
        </div>
      </section>
      {isOpenCard && <ProjectModal data={activeProject} />}
    </>
  );
};

export default Project;
