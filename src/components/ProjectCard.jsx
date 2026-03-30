import { BtnStyle } from "../components/Button";

const ProjectCard = ({ data, handleIsOpen }) => {
  return (
    <>
      <div
        className="flex cursor-pointer flex-col overflow-hidden rounded-2xl shadow-[0_0_20px_0] shadow-primary/40 transition hover:scale-102 hover:shadow-primary/80"
        onClick={handleIsOpen}>
        <div className="relative shrink-0">
          <img className="h-60 w-full object-cover" src={data.image} alt="" />
          <span className="absolute right-0 bottom-0 m-3 rounded-2xl bg-primary/60 px-3 py-0.5 font-medium text-dark">
            {data.createdYear}
          </span>
        </div>
        <div className="flex flex-1 flex-col justify-between p-6">
          <div className="flex-1">
            <h5 className="mb-6 text-xl font-bold">{data.title}</h5>
            <div className="mb-6 flex flex-wrap gap-3">
              {data["techStack"].map((i) => (
                <span className="rounded-2xl bg-secondary px-2 py-0.5 text-sm font-medium text-dark">{i}</span>
              ))}
            </div>

            <p className="mb-8 line-clamp-3 opacity-70">{data.description[0]}</p>
          </div>

          <div className="mt-auto flex flex-wrap gap-6">
            <BtnStyle
              text={"GitHub"}
              size={"px-4 py-2 font-bold"}
              icon={"github-icon.svg"}
              href={data.links.repo}
              isFull={true}
            />
            <BtnStyle
              text={"Demo"}
              size={"px-4 py-2 font-bold"}
              icon={"link-external.svg"}
              href={data.links.demo}
              isFull={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
