export const BtnFull = ({ text, size, icon = "" }) => {
  return (
    <>
      <button
        className={`${size} focus:ring-dark-primary-300 cursor-pointer gap-2 rounded-md bg-primary text-dark transition duration-300 ease-in-out hover:bg-dark-primary-200 hover:shadow-xl hover:ring-2 hover:shadow-dark-primary-500 hover:ring-dark-primary-700 focus:shadow-dark-primary-400`}>
        <span className="flex items-center gap-1">
          <img src={icon} className="mt-[1.5px]" alt="" />
          {text}
        </span>
      </button>
    </>
  );
};

export const BtnOutline = ({ text, size, icon = "" }) => {
  return (
    <>
      <button
        className={` ${size} focus:ring-dark-primary-300 cursor-pointer rounded-md border-2 border-primary bg-transparent text-primary transition duration-300 ease-in-out hover:bg-primary hover:text-dark hover:shadow-xl hover:ring-2 hover:shadow-dark-primary-500 hover:ring-dark-primary-700 focus:ring-4 focus:shadow-dark-primary-400`}>
        <span className="flex items-center gap-1">
          <img src={icon} className="mt-[1.5px]" alt="" />
          {text}
        </span>
      </button>
    </>
  );
};

export const BtnStyle = ({ href, isFull, icon, text, size }) => {
  const baseStyle = `cursor-pointer rounded-md transition duration-300 ease-in-out hover:shadow-xl hover:ring-2 hover:shadow-dark-primary-500 hover:ring-dark-primary-700 focus:ring-dark-primary-300 focus:shadow-dark-primary-400 hover:bg-dark-primary-200`;

  const fullStyle = `bg-primary text-dark `;
  const outlineStyle = `border-2 border-primary bg-transparent text-primary hover:text-dark `;

  const Mode = href ? "a" : "button";

  return (
    <>
      <Mode
        className={`${baseStyle} ${isFull ? fullStyle : outlineStyle} ${size}`}
        href={href}
        target={href ? "_blank" : ""}>
        <span className="flex items-center gap-1">
          <img src={icon} className="mt-[1.5px]" alt="" />
          {text}
        </span>
      </Mode>
    </>
  );
};
