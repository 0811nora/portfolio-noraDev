import { BtnStyle } from "./Button";
import { motion as Motion } from "framer-motion";

const ProjectModal = ({ data, onClose }) => {
  return (
    <>
      <Motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}>
        <Motion.div
          className="relative mx-4 max-h-[85vh] w-full max-w-220 overflow-y-auto rounded-4xl bg-bg-main px-4 py-10 backdrop-blur-3xl md:px-8 md:py-12 lg:p-14"
          initial={{ opacity: 0, scale: 0.95, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 8 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}>
          <button className="absolute top-5 right-8 cursor-pointer" onClick={onClose}>
            <img src="/close-dark.svg" className="hidden w-8 dark:block" alt="" />
            <img src="/close-light.svg" className="w-8 dark:hidden" alt="" />
          </button>

          <div className="">
            <div className="mb-8 grid-cols-[45%_55%] gap-8 md:grid">
              <div className="mt-6 mb-4 overflow-hidden rounded-2xl">
                <img className="h-56 w-full object-cover" src={data.image} alt="" />
              </div>
              <div className="">
                <div className="flex h-full flex-col justify-between py-4">
                  <h5 className="mb-2 text-xl font-bold">{data?.title}</h5>
                  <p className="mb-5 text-sm">作品年份：{data?.createdYear}</p>
                  <div className="mb-5 flex flex-wrap gap-3">
                    {data["techStack"]?.map((i) => (
                      <span className="rounded-2xl bg-secondary px-2 py-0.5 text-sm font-medium text-dark">{i}</span>
                    ))}
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
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
              </div>
            </div>
            <div className="border-t border-text-main/30 pt-10">
              <h3 className="mb-6 text-xl font-bold text-primary"># 作品說明</h3>
              {data?.description?.map((content) => (
                <p className="mb-6 leading-8">{content}</p>
              ))}
            </div>
          </div>
        </Motion.div>
      </Motion.div>
    </>
  );
};

export default ProjectModal;
