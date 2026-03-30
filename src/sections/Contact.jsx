import SectionTitle from "../components/SectionTitle";
import portfoiloData from "../../portfolioData.json";
import ScrollReveal from "../components/ScrollReveal";

const Contact = () => {
  const { contact } = portfoiloData;
  return (
    <>
      <section id="contact" className="mx-auto scroll-mt-20 overflow-x-hidden px-3 py-10 md:px-6 md:py-30">
        <ScrollReveal direction="zoom" delay={0.3}>
          <SectionTitle text={"聯絡我"} />
        </ScrollReveal>

        <div className="mx-auto w-full py-20 lg:max-w-3/5">
          <div className="flex flex-col justify-center gap-6 md:flex-row">
            <ScrollReveal direction="right" delay={0.3}>
              <div className="mx-auto flex w-4/5 items-center justify-center gap-3 rounded-lg bg-primary/50 py-6 text-lg font-bold tracking-wide md:text-xl lg:w-70">
                <span className="w-6">
                  <img className="mt-1 hidden w-full dark:block" src="email-dark.svg" alt="email icon" />
                  <img className="mt-1 w-full dark:hidden" src="email-light.svg" alt="email icon" />
                </span>
                {contact.email}
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.3}>
              <div className="mx-auto flex w-4/5 items-center justify-center gap-3 rounded-lg bg-primary/50 py-6 text-lg font-bold tracking-wide md:text-xl lg:w-70">
                <span className="w-6">
                  <img className="mt-1 hidden w-full dark:block" src="phone-dark.svg" alt="phone icon" />
                  <img className="mt-1 w-full dark:hidden" src="phone-light.svg" alt="phone icon" />
                </span>
                {contact.phone}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
