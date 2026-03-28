import { useEffect, useState } from "react";
import ThemeController from "./ThemeController";

const ShowList = ({ data, mode, handleMode, isDark }) => {
  return (
    <>
      <ul className={`justify-between ${mode}`}>
        {data.map((title) => (
          <li key={title} className="px-2 py-4 text-lg font-bold">
            <a className="transition-colors duration-300 hover:text-secondary" href="#">
              {title}
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
  const navbarList = ["關於我", "作品集", "核心技能", "聯絡我"];

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    isDark ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
  });

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full bg-bg-main/80 shadow-md shadow-black/20 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-3 md:px-4 lg:px-8">
          <div>
            <img className="block dark:hidden" src="/noraDev-light.svg" alt="logo" />
            <img className="hidden dark:block" src="/noraDev.svg" alt="logo" />
          </div>

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
