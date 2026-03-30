import { useEffect, useRef, useState } from "react";
import ThemeController from "./ThemeController";
import { motion as Motion } from "framer-motion";
import { useClickAway } from "ahooks";

const ShowList = ({ data, mode, handleMode, isDark, activeTab }) => {
  return (
    <>
      <ul className={`justify-between ${mode}`}>
        {data.map((title) => (
          <li key={title.name} className="px-2 py-4 text-lg font-bold">
            <a
              className={`transition-colors duration-300 hover:text-secondary ${activeTab === title.id ? "text-secondary" : ""}`}
              href={title.href}>
              {title.name}
            </a>
          </li>
        ))}
        <li className="flex px-2 py-4">
          <ThemeController handleMode={handleMode} isDark={isDark} />
        </li>
      </ul>
    </>
  );
};

const NavBar = () => {
  const navbarList = [
    { name: "關於我", href: "#about", id: "about" },
    { name: "作品集", href: "#projects", id: "projects" },
    { name: "核心技能", href: "#skills", id: "skills" },
    { name: "聯絡我", href: "#contact", id: "contact" },
  ];

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const navRef = useRef(null);

  useEffect(() => {
    isDark ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
  }, [isDark]);

  useClickAway(() => {
    setIsNavOpen(false);
  }, navRef);

  return (
    <>
      <header
        className="fixed top-0 left-0 z-50 w-full bg-bg-main/80 shadow-md shadow-black/20 backdrop-blur-md"
        ref={navRef}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-4 md:px-6 lg:px-8">
          <a href="#" className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <img className="block dark:hidden" src="/noraDev-light.svg" alt="logo" />
            <img className="hidden dark:block" src="/noraDev.svg" alt="logo" />
          </a>

          <ShowList
            data={navbarList}
            handleMode={() => setIsDark(!isDark)}
            mode={"lg:flex-row hidden lg:flex gap-10"}
          />

          <div className="flex lg:hidden">
            <button className="cursor-pointer" onClick={() => setIsNavOpen(!isNavOpen)}>
              <img
                className="block w-8 dark:hidden"
                src={isNavOpen ? "/close-light.svg" : "/hamburger-light.svg"}
                alt=""
              />
            </button>

            <button
              className="cursor-pointer rounded-md p-1 transition-all hover:bg-gray-700/50"
              onClick={() => setIsNavOpen(!isNavOpen)}>
              <img
                className="hidden w-8 dark:block"
                src={isNavOpen ? "/close-dark.svg" : "/hamburger-dark.svg"}
                alt=""
              />
            </button>
          </div>
        </div>

        {isNavOpen && (
          <div className="p-8 lg:hidden">
            <ShowList handleMode={() => setIsDark(!isDark)} data={navbarList} mode={"flex-col lg:hidden flex"} />
          </div>
        )}
      </header>
    </>
  );
};

export default NavBar;
