import { BtnStyle } from "./Button";

const ProjectModal = ({ data }) => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-bg-main/80 backdrop-blur-xs">
        <div className="relative mx-auto w-full max-w-220 rounded-4xl bg-black/50 p-14 backdrop-blur-3xl">
          <button className="absolute top-5 right-8 cursor-pointer">
            <img src="/close-dark.svg" className="w-8" alt="" />
          </button>
          <div className="grid grid-cols-[45%_55%] gap-8">
            <div className="">
              <div className="mb-4 overflow-hidden rounded-2xl">
                <img
                  className="h-56 w-full object-cover"
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1120&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <div className="flex-1">
                  <h5 className="mb-5 text-xl font-bold">{data?.title}</h5>
                  <div className="mb-5 flex flex-wrap gap-3">
                    {data["techStack"]?.map((i) => (
                      <span className="rounded-2xl bg-secondary px-2 py-0.5 text-sm font-medium text-dark">{i}</span>
                    ))}
                  </div>
                  <p className="mb-5">作品年份:{data?.createdYear} </p>
                </div>

                <div className="mt-auto flex flex-wrap gap-6">
                  <BtnStyle
                    text={"GitHub"}
                    size={"px-4 py-2 font-bold"}
                    icon={"/github-icon.svg"}
                    href={data?.links?.repo}
                    isFull={true}
                  />
                  <BtnStyle
                    text={"Demo"}
                    size={"px-4 py-2 font-bold"}
                    icon={"/link-external.svg"}
                    href={data?.links?.demo}
                    isFull={true}
                  />
                </div>
              </div>
            </div>

            <div className="">
              <h3 className="mb-8 text-xl font-bold text-primary"># 作品說明</h3>
              {data?.description?.map((content) => (
                <p>{content}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectModal;
