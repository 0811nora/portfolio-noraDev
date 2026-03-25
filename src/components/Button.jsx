export const BtnFull = ({ text }) => {
  return (
    <>
      <button className="focus:ring-dark-primary-300 cursor-pointer rounded-md bg-primary px-10 py-3 text-lg font-black text-dark transition duration-300 ease-in-out hover:bg-dark-primary-200 hover:shadow-xl hover:ring-2 hover:shadow-dark-primary-500 hover:ring-dark-primary-700 focus:shadow-dark-primary-400">
        {text}
      </button>
    </>
  );
};

export const BtnOutline = ({ text }) => {
  return (
    <>
      <button className="focus:ring-dark-primary-300 cursor-pointer rounded-md border-2 border-primary bg-transparent px-10 py-3 text-lg font-black text-primary transition duration-300 ease-in-out hover:bg-primary hover:text-dark hover:shadow-xl hover:ring-2 hover:shadow-dark-primary-500 hover:ring-dark-primary-700 focus:ring-4 focus:shadow-dark-primary-400">
        {text}
      </button>
    </>
  );
};
