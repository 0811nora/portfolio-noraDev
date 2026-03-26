const SectionTitle = ({ text }) => {
  return (
    <>
      <h2 className="mb-15 text-center text-2xl font-bold text-secondary md:mb-24 md:text-4xl">
        <span className="relative pb-3 transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:h-1.5 before:w-full before:origin-center before:scale-x-120 before:bg-text-main before:transition-transform before:duration-300 hover:before:scale-x-175">
          {text}
        </span>
      </h2>
    </>
  );
};

export default SectionTitle;
