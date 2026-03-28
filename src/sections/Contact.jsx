import SectionTitle from "../components/SectionTitle";
import portfoiloData from "../../portfolioData.json";

const Contact = () => {
  const { contact } = portfoiloData;
  return (
    <>
      <section className="mx-auto px-3 py-10 md:px-6 md:py-24">
        <SectionTitle text={"聯絡我"} />

        <div className="mx-auto w-full lg:max-w-3/5">
          <div className="flex flex-col justify-center gap-6 md:flex-row">
            <div className="mx-auto flex w-2/3 items-center justify-center gap-3 rounded-lg bg-primary/50 py-6 text-lg font-bold tracking-wide md:text-xl lg:w-70">
              <span className="w-6">
                <img className="mt-1 hidden w-full dark:block" src="/email-dark.svg" alt="" />
                <img className="mt-1 w-full dark:hidden" src="/email-light.svg" alt="" />
              </span>
              {contact.email}
            </div>
            <div className="mx-auto flex w-2/3 items-center justify-center gap-3 rounded-lg bg-primary/50 py-6 text-lg font-bold tracking-wide md:text-xl lg:w-70">
              <span className="w-6">
                <img className="mt-1 hidden w-full dark:block" src="/phone-dark.svg" alt="" />
                <img className="mt-1 w-full dark:hidden" src="/phone-light.svg" alt="" />
              </span>
              {contact.phone}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
