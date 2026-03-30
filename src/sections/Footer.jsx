const Footer = () => {
  return (
    <>
      <footer className="mt-10 border-text-main/20 py-10">
        <div className="mx-auto w-20">
          <img className="block dark:hidden" src="noraDev-light.svg" alt="logo" />
          <img className="hidden dark:block" src="noraDev.svg" alt="logo" />
        </div>
        <p className="mt-2 text-center text-secondary">2026</p>
      </footer>
    </>
  );
};

export default Footer;
